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
        self.assertEqual(tracker_server.classify_message("海康威视邀请你参加在线笔试", "笔试通过后进入面试环节"), "written_test")
        self.assertEqual(tracker_server.classify_message("Steam 上有新的登录操作", "登录地点和安全提醒"), "irrelevant")
        self.assertEqual(tracker_server.classify_message("联想校园招聘-感谢你的关注与参与", "本次未进入后续流程"), "rejected")
        self.assertEqual(tracker_server.classify_message("【NIO蔚来】感谢投递校招-算法开发工程师已投递", "遗憾地通知你我们暂时无法邀请你继续参与该职位的后续流程"), "rejected")
        self.assertFalse(tracker_server.is_recruitment_message("尊敬的梁同学【智联推荐】网申投递邀请｜阿斯利康中国2027培训生项目正式启动", "欢迎投递简历并了解项目"))
        self.assertEqual(tracker_server.classify_message("智联推荐 深圳能源集团招聘正式启动", "邀您投递简历，点击投递"), "irrelevant")
        self.assertEqual(tracker_server.html_to_text("<p>在线笔试<b>通知</b></p>"), "在线笔试通知")
        self.assertEqual(tracker_server.classify_message("面试邀请", "interview"), "interview")
        self.assertEqual(tracker_server.classify_message("录用通知", "欢迎入职"), "offer")
        self.assertEqual(tracker_server.classify_message("本次未通过", "感谢参与"), "rejected")

    def test_header_decode_and_date(self):
        self.assertEqual(tracker_server.decode_header("plain subject"), "plain subject")
        self.assertIsInstance(tracker_server.decode_header("=?unknown-8bit?Q?subject=E9=82=AE=E4=BB=B6?="), str)
        parsed = tracker_server.parse_date("Wed, 01 Oct 2026 09:00:00 +0800")
        self.assertTrue(parsed.startswith("2026-10-01T09:00:00"))


if __name__ == "__main__":
    unittest.main()

