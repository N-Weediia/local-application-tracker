import importlib.util
import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("tracker_server", ROOT / "server.py")
tracker_server = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(tracker_server)


class MailParserTests(unittest.TestCase):
    def test_status_classification(self):
        self.assertEqual(tracker_server.classify_message("感谢投递", "已收到你的简历"), "applied")
        self.assertEqual(tracker_server.classify_message("在线测评邀请", "assessment"), "assessment")
        self.assertEqual(tracker_server.classify_message("技术笔试通知", "请完成考试"), "written_test")
        self.assertEqual(tracker_server.classify_message("面试邀请", "interview"), "interview")
        self.assertEqual(tracker_server.classify_message("录用通知", "欢迎入职"), "offer")
        self.assertEqual(tracker_server.classify_message("本次未通过", "感谢参与"), "rejected")

    def test_header_decode_and_date(self):
        self.assertEqual(tracker_server.decode_header("plain subject"), "plain subject")
        parsed = tracker_server.parse_date("Wed, 01 Oct 2026 09:00:00 +0800")
        self.assertTrue(parsed.startswith("2026-10-01T09:00:00"))


if __name__ == "__main__":
    unittest.main()
