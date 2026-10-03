from __future__ import annotations

import argparse
import base64
import datetime as dt
import email
import email.header
import email.utils
import imaplib
import json
import mimetypes
import pathlib
import re
import sys
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from typing import Any

ROOT = pathlib.Path(__file__).resolve().parent
WEB_ROOT = ROOT / "web"
PROVIDERS_PATH = ROOT / "providers.json"


def load_providers() -> dict[str, dict[str, Any]]:
    return json.loads(PROVIDERS_PATH.read_text(encoding="utf-8"))


def decode_header(value: str | None) -> str:
    if not value:
        return ""
    parts: list[str] = []
    for chunk, charset in email.header.decode_header(value):
        if isinstance(chunk, bytes):
            parts.append(chunk.decode(charset or "utf-8", errors="replace"))
        else:
            parts.append(chunk)
    return "".join(parts).strip()


def message_text(msg: email.message.Message, limit: int = 8000) -> str:
    chunks: list[str] = []
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_maintype() != "text" or part.get_content_disposition() == "attachment":
                continue
            payload = part.get_payload(decode=True)
            if payload:
                chunks.append(payload.decode(part.get_content_charset() or "utf-8", errors="replace"))
    else:
        payload = msg.get_payload(decode=True)
        if payload:
            chunks.append(payload.decode(msg.get_content_charset() or "utf-8", errors="replace"))
    text = re.sub(r"\s+", " ", " ".join(chunks)).strip()
    return text[:limit]


def classify_message(subject: str, body: str) -> str:
    text = f"{subject} {body}".lower()
    rules = [
        ("offer", r"录用|offer|聘用|入职通知"),
        ("rejected", r"未通过|不予录用|感谢参与|regret|rejected"),
        ("interview", r"面试|interview"),
        ("written_test", r"笔试|在线考试|技术考试|written test|online exam"),
        ("assessment", r"测评|assessment|在线测评|综合素质"),
        ("applied", r"投递成功|收到.*简历|感谢投递|application received|application status"),
    ]
    for status, pattern in rules:
        if re.search(pattern, text, flags=re.IGNORECASE):
            return status
    return "other"


def parse_date(value: str | None) -> str:
    if not value:
        return ""
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        return parsed.isoformat()
    except (TypeError, ValueError, OverflowError):
        return value


def sync_imap(payload: dict[str, Any]) -> dict[str, Any]:
    providers = load_providers()
    provider_key = str(payload.get("provider", "custom"))
    preset = providers.get(provider_key, providers["custom"])
    host = str(payload.get("host") or preset.get("host") or "")
    port = int(payload.get("port") or preset.get("port") or 993)
    folder = str(payload.get("folder") or preset.get("folder") or "INBOX")
    username = str(payload.get("username") or "")
    password = str(payload.get("password") or "")
    if not host or not username or not password:
        raise ValueError("host、username 和 password 均为必填项；密码只在内存中使用，不会保存。")

    days = max(1, min(int(payload.get("sinceDays") or 30), 3650))
    limit = max(1, min(int(payload.get("limit") or 100), 300))
    since = (dt.date.today() - dt.timedelta(days=days)).strftime("%d-%b-%Y")
    conn: imaplib.IMAP4_SSL | None = None
    try:
        conn = imaplib.IMAP4_SSL(host, port, timeout=20)
        conn.login(username, password)
        status, _ = conn.select(folder, readonly=True)
        if status != "OK":
            raise RuntimeError(f"无法打开邮箱文件夹：{folder}")
        status, data = conn.uid("search", None, f"SINCE {since}")
        if status != "OK":
            raise RuntimeError("邮箱搜索失败")
        uids = (data[0] or b"").split()[-limit:]
        messages: list[dict[str, Any]] = []
        for uid in reversed(uids):
            status, raw = conn.uid("fetch", uid, "(RFC822)")
            if status != "OK" or not raw:
                continue
            raw_bytes = next((item[1] for item in raw if isinstance(item, tuple) and isinstance(item[1], bytes)), None)
            if not raw_bytes:
                continue
            msg = email.message_from_bytes(raw_bytes)
            subject = decode_header(msg.get("Subject"))
            sender = decode_header(msg.get("From"))
            body = message_text(msg)
            messages.append({
                "uid": uid.decode(errors="ignore"),
                "subject": subject,
                "sender": sender,
                "date": parse_date(msg.get("Date")),
                "snippet": body[:280],
                "status": classify_message(subject, body),
            })
        return {"provider": provider_key, "folder": folder, "count": len(messages), "messages": messages}
    finally:
        if conn is not None:
            try:
                conn.logout()
            except Exception:
                pass


def demo_sync() -> dict[str, Any]:
    messages = [
        {"uid": "demo-1", "subject": "示例视觉科技：感谢投递", "sender": "hr@example.com", "date": "2026-10-01T09:00:00+08:00", "snippet": "我们已收到你的简历。", "status": "applied"},
        {"uid": "demo-2", "subject": "示例机器人在线测评邀请", "sender": "recruit@example.com", "date": "2026-10-02T10:00:00+08:00", "snippet": "请完成在线测评。", "status": "assessment"},
        {"uid": "demo-3", "subject": "示例智能硬件技术笔试通知", "sender": "talent@example.com", "date": "2026-10-03T11:00:00+08:00", "snippet": "邀请参加技术笔试。", "status": "written_test"},
    ]
    return {"provider": "demo", "folder": "INBOX", "count": len(messages), "messages": messages}


class Handler(SimpleHTTPRequestHandler):
    server_version = "LocalApplicationTracker/1.0"

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, directory=str(WEB_ROOT), **kwargs)

    def send_json(self, payload: dict[str, Any], status: int = HTTPStatus.OK) -> None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self) -> None:  # noqa: N802
        if self.path == "/api/health":
            self.send_json({"ok": True, "service": "local-application-tracker"})
        elif self.path == "/api/providers":
            self.send_json(load_providers())
        else:
            super().do_GET()

    def do_POST(self) -> None:  # noqa: N802
        if self.path not in {"/api/sync/imap", "/api/sync/mock"}:
            self.send_json({"error": "Not found"}, HTTPStatus.NOT_FOUND)
            return
        try:
            if self.path == "/api/sync/mock":
                self.send_json(demo_sync())
                return
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length)
            payload = json.loads(raw.decode("utf-8"))
            self.send_json(sync_imap(payload))
        except (ValueError, json.JSONDecodeError) as exc:
            self.send_json({"error": str(exc)}, HTTPStatus.BAD_REQUEST)
        except (imaplib.IMAP4.error, OSError, RuntimeError) as exc:
            self.send_json({"error": f"邮箱同步失败：{exc}"}, HTTPStatus.BAD_GATEWAY)
        except Exception as exc:  # pragma: no cover - final safety boundary
            self.send_json({"error": f"服务器内部错误：{exc}"}, HTTPStatus.INTERNAL_SERVER_ERROR)

    def log_message(self, fmt: str, *args: Any) -> None:
        # Do not log request bodies or credentials.
        sys.stderr.write(f"[{self.log_date_time_string()}] {fmt % args}\n")


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the local application tracker")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8787)
    args = parser.parse_args()
    server = ThreadingHTTPServer((args.host, args.port), Handler)
    print(f"Local Application Tracker: http://{args.host}:{args.port}")
    print("邮箱凭据只在同步请求期间使用，关闭进程后不会保存。")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
