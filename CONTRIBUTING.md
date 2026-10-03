# Contributing

欢迎提交新的邮箱预设、IMAP 兼容性修复、状态识别规则和无个人数据的界面改进。

提交前请运行：

```powershell
python -m unittest discover -s tests -v
node --check web/app.js
```

不要提交真实邮箱导出、真实简历、附件、授权码、OAuth token 或内部招聘数据。新增演示数据请使用合成内容。
