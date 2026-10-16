// Public company directory. No personal application history is stored here.
(function(root) {
  const catalog = [
  {
    "id": "zhito",
    "company": "挚途科技",
    "city": "苏州",
    "region": "长三角",
    "role": "视觉 SLAM / 感知算法工程师",
    "tags": [
      "vision",
      "stereo3d",
      "pose",
      "robot",
      "slam",
      "control",
      "imu",
      "cpp"
    ],
    "url": "https://zhito.zhiye.com/Campus",
    "aliases": [
      "挚途",
      "挚途科技"
    ],
    "domains": [],
    "profile": {
      "type": "融资初创",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://zhito.zhiye.com/Campus",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "inovance",
    "company": "汇川技术",
    "city": "苏州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "AI 算法 / 机器人算法 / 嵌入式软件",
    "tags": [
      "robot",
      "control",
      "embedded",
      "cpp",
      "edgeai",
      "imu"
    ],
    "url": "https://recruit.inovance.com/",
    "aliases": [
      "汇川",
      "汇川技术",
      "Inovance"
    ],
    "domains": [
      "inovance.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://recruit.inovance.com/",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "dreame",
    "company": "追觅科技",
    "city": "苏州",
    "region": "长三角",
    "role": "智能算法 / 视觉算法 / 机器人算法",
    "tags": [
      "vision",
      "robot",
      "edgeai",
      "embedded",
      "python",
      "cpp"
    ],
    "url": "https://dreame.zhiye.com/",
    "aliases": [
      "追觅",
      "Dreame"
    ],
    "domains": [],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://dreame.zhiye.com/",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "xiaopeng",
    "company": "小鹏汽车",
    "city": "广州 / 深圳 / 上海",
    "region": "珠三角 + 长三角",
    "role": "智能驾驶感知 / 机器人视觉 / AI 算法",
    "tags": [
      "vision",
      "stereo3d",
      "pose",
      "robot",
      "edgeai",
      "autonomous_driving",
      "control"
    ],
    "url": "https://www.xiaopeng.com/join.html",
    "aliases": [
      "小鹏",
      "XPeng",
      "Xpeng Motors"
    ],
    "domains": [
      "xiaopeng.com",
      "x-peng.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.xiaopeng.com/join.html",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "smartsens",
    "company": "思特威 SmartSens",
    "city": "上海 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "ISP / 图像算法 / 机器视觉算法",
    "tags": [
      "vision",
      "image",
      "isp",
      "embedded",
      "edgeai",
      "cpp"
    ],
    "url": "https://campus.smartsenstech.com/campus_trends",
    "aliases": [
      "思特威",
      "SmartSens"
    ],
    "domains": [],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://campus.smartsenstech.com/campus_trends",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "xag",
    "company": "极飞科技 XAG",
    "city": "广州",
    "region": "珠三角",
    "role": "视觉 / 机器人 / 导航算法",
    "tags": [
      "vision",
      "drone",
      "robot",
      "control",
      "imu",
      "stereo3d",
      "edgeai"
    ],
    "url": "https://www.xa.com/about/career",
    "aliases": [
      "极飞",
      "极飞科技",
      "XAG"
    ],
    "domains": [],
    "profile": {
      "type": "融资初创",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.xa.com/about/career",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "tcl",
    "company": "TCL",
    "city": "深圳 / 惠州",
    "region": "珠三角",
    "role": "AI 算法 / 机器视觉 / 机器人研发",
    "tags": [
      "vision",
      "image",
      "robot",
      "edgeai",
      "embedded",
      "isp"
    ],
    "url": "https://zhaopin.tcl.com/campus/recruiting.html?id=62",
    "aliases": [
      "TCL科技",
      "TCL实业"
    ],
    "domains": [
      "tcl.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://zhaopin.tcl.com/campus/recruiting.html?id=62",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "zte",
    "company": "中兴通讯",
    "city": "深圳 / 南京 / 上海",
    "region": "珠三角 + 长三角",
    "role": "AI 算法 / 软件开发 / 端侧智能",
    "tags": [
      "python",
      "cpp",
      "edgeai",
      "embedded",
      "llm",
      "iot"
    ],
    "url": "https://job.zte.com.cn/cn/campus-recruitment/Recruitment_positions/freshstudent.html",
    "aliases": [
      "中兴",
      "ZTE"
    ],
    "domains": [
      "zte.com.cn"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://job.zte.com.cn/cn/campus-recruitment/Recruitment_positions/freshstudent.html",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "quectel",
    "company": "移远通信",
    "city": "上海",
    "region": "长三角",
    "role": "嵌入式 / AI 算法 / 物联网视觉",
    "tags": [
      "embedded",
      "iot",
      "edgeai",
      "cpp",
      "python",
      "vision"
    ],
    "url": "https://talent.quectel.com/",
    "aliases": [
      "移远",
      "Quectel"
    ],
    "domains": [
      "quectel.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://talent.quectel.com/",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "cmcc-hz",
    "company": "中国移动杭州研发中心",
    "city": "杭州",
    "region": "长三角",
    "role": "具身智能 / 机器人 / 大模型推理",
    "tags": [
      "robot",
      "llm",
      "edgeai",
      "vision",
      "multimodal",
      "python"
    ],
    "url": "https://job.10086.cn/",
    "aliases": [
      "中移杭州研发中心"
    ],
    "domains": [],
    "profile": {
      "type": "央企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://job.10086.cn/",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "gac",
    "company": "广汽研究院",
    "city": "广州",
    "region": "珠三角",
    "role": "智能驾驶感知 / 3D 视觉 / 车辆控制",
    "tags": [
      "autonomous_driving",
      "vision",
      "stereo3d",
      "control",
      "pose",
      "cpp"
    ],
    "url": "https://www.gac.com.cn/cn/careers",
    "aliases": [
      "广汽",
      "广汽集团",
      "广汽研究院"
    ],
    "domains": [],
    "profile": {
      "type": "国企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.gac.com.cn/cn/careers",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "ehang",
    "company": "亿航智能",
    "city": "广州",
    "region": "珠三角",
    "role": "飞行器视觉 / 导航 / 控制算法",
    "tags": [
      "drone",
      "vision",
      "control",
      "imu",
      "stereo3d",
      "embedded"
    ],
    "url": "https://www.ehang.com/cn/career/",
    "aliases": [
      "亿航",
      "EHang"
    ],
    "domains": [],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.ehang.com/cn/career/",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "sensetime",
    "company": "商汤科技",
    "city": "上海",
    "region": "长三角",
    "role": "计算机视觉 / 多模态算法 / 端侧 AI",
    "tags": [
      "vision",
      "multimodal",
      "pose",
      "python",
      "edgeai",
      "llm"
    ],
    "url": "https://www.sensetime.com/cn/careers",
    "aliases": [
      "商汤",
      "SenseTime"
    ],
    "domains": [],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.sensetime.com/cn/careers",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "thundersoft",
    "company": "中科创达",
    "city": "上海 / 苏州",
    "region": "长三角",
    "role": "计算机视觉 / Android AI / 边缘智能",
    "tags": [
      "embedded",
      "vision",
      "edgeai",
      "cpp",
      "python",
      "image"
    ],
    "url": "https://www.thundersoft.com/careers/",
    "aliases": [
      "中科创达",
      "ThunderSoft"
    ],
    "domains": [],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.thundersoft.com/careers/",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "huaqin",
    "company": "华勤技术",
    "city": "上海 / 东莞",
    "region": "长三角 + 珠三角",
    "role": "相机算法 / 影像调优 / 嵌入式系统",
    "tags": [
      "image",
      "vision",
      "isp",
      "embedded",
      "edgeai",
      "cpp"
    ],
    "url": "https://www.huaqin.com/join",
    "aliases": [
      "华勤"
    ],
    "domains": [],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.huaqin.com/join",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "nio",
    "company": "蔚来",
    "city": "上海 / 合肥",
    "region": "长三角",
    "role": "智能驾驶 / 视觉感知 / 机器人算法",
    "tags": [
      "autonomous_driving",
      "vision",
      "stereo3d",
      "pose",
      "edgeai",
      "cpp"
    ],
    "url": "https://www.nio.com/careers",
    "aliases": [
      "NIO",
      "蔚来汽车",
      "蔚来NIO",
      "NIO蔚来"
    ],
    "domains": [
      "nio.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "历史目录：企业信息待更新"
    },
    "sourceUrl": "https://www.nio.com/careers",
    "reviewedAt": "",
    "availability": "建议检索方向，当前岗位开放情况请在官方入口确认"
  },
  {
    "id": "orbbec",
    "company": "奥比中光",
    "city": "深圳",
    "region": "珠三角",
    "role": "3D 视觉 / 相机标定 / 嵌入式软件",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "pose",
      "embedded",
      "edgeai",
      "cpp",
      "python"
    ],
    "url": "https://job.orbbec.com.cn/campus",
    "sourceUrl": "https://job.orbbec.com.cn/campus",
    "aliases": [
      "Orbbec"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "ubtech",
    "company": "优必选",
    "city": "深圳",
    "region": "珠三角",
    "role": "机器人运动控制 / 视觉 / 多模态感知与重建",
    "tags": [
      "robot",
      "control",
      "pose",
      "stereo3d",
      "vision",
      "imu",
      "cpp",
      "python",
      "multimodal",
      "edgeai"
    ],
    "url": "https://zhaopin.ubtrobot.com/campus",
    "sourceUrl": "https://zhaopin.ubtrobot.com/campus",
    "aliases": [
      "优必选科技",
      "UBTECH"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "chcnav",
    "company": "华测导航",
    "city": "上海",
    "region": "长三角",
    "role": "组合导航 / 多传感器融合 / 三维感知",
    "tags": [
      "imu",
      "control",
      "stereo3d",
      "vision",
      "robot",
      "embedded",
      "cpp"
    ],
    "url": "https://www.chcnav.com/about/careers",
    "sourceUrl": "https://www.chcnav.com/about/careers",
    "aliases": [
      "CHCNAV",
      "CHC Navigation",
      "上海华测导航"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "robosense",
    "company": "速腾聚创",
    "city": "深圳",
    "region": "珠三角",
    "role": "激光雷达感知 / 机器人视觉 / 嵌入式",
    "tags": [
      "vision",
      "stereo3d",
      "robot",
      "imu",
      "embedded",
      "edgeai",
      "cpp"
    ],
    "url": "https://www.robosense.cn/about/joinus",
    "sourceUrl": "https://www.robosense.cn/about/joinus",
    "aliases": [
      "RoboSense"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "nari",
    "company": "南瑞集团",
    "city": "南京",
    "region": "长三角",
    "role": "控制算法 / 嵌入式研发 / 工业智能",
    "tags": [
      "control",
      "embedded",
      "cpp",
      "python",
      "iot",
      "edgeai"
    ],
    "url": "https://job.sgepri.sgcc.com.cn/",
    "sourceUrl": "https://job.sgepri.sgcc.com.cn/",
    "aliases": [
      "南瑞",
      "国电南瑞",
      "国网电科院"
    ],
    "profile": {
      "type": "央企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "央企体系"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "supcon",
    "company": "中控技术",
    "city": "杭州",
    "region": "长三角",
    "role": "工业 AI / 控制算法 / 嵌入式 C++",
    "tags": [
      "control",
      "embedded",
      "cpp",
      "python",
      "iot",
      "llm",
      "robot",
      "edgeai"
    ],
    "url": "https://www.global.supcon.com/careers",
    "sourceUrl": "https://www.global.supcon.com/careers",
    "aliases": [
      "SUPCON",
      "浙江中控技术"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "goodix",
    "company": "汇顶科技",
    "city": "深圳 / 上海",
    "region": "珠三角 + 长三角",
    "role": "传感信号算法 / 嵌入式软件",
    "tags": [
      "embedded",
      "multimodal",
      "cpp",
      "python",
      "iot",
      "edgeai",
      "image"
    ],
    "url": "https://www.goodix.com/zh/about_goodix/careers/campus/jobs",
    "sourceUrl": "https://www.goodix.com/zh/about_goodix/careers/campus/jobs",
    "aliases": [
      "Goodix",
      "汇顶"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "hollysys",
    "company": "和利时",
    "city": "杭州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "控制系统 / 嵌入式软件 / 运动控制",
    "tags": [
      "control",
      "embedded",
      "cpp",
      "robot",
      "iot"
    ],
    "url": "https://www.hollysys.com.cn/about/join",
    "sourceUrl": "https://www.hollysys.com.cn/about/join",
    "aliases": [
      "HollySys",
      "和利时集团"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "hesai",
    "company": "禾赛科技",
    "city": "上海",
    "region": "长三角",
    "role": "激光雷达 / 三维感知 / 嵌入式算法",
    "tags": [
      "vision",
      "stereo3d",
      "embedded",
      "cpp",
      "python",
      "edgeai"
    ],
    "url": "https://www.hesaitech.com/cn/careers",
    "sourceUrl": "https://www.hesaitech.com/cn/careers",
    "aliases": [
      "Hesai",
      "禾赛"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "dahua",
    "company": "大华股份",
    "city": "杭州",
    "region": "长三角",
    "role": "计算机视觉算法 / 端侧智能 / 嵌入式",
    "tags": [
      "vision",
      "image",
      "edgeai",
      "embedded",
      "cpp",
      "python",
      "stereo3d"
    ],
    "url": "https://job.dahuatech.com/",
    "sourceUrl": "https://job.dahuatech.com/",
    "aliases": [
      "浙江大华",
      "大华技术",
      "Dahua"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  },
  {
    "id": "sunny",
    "company": "舜宇光学",
    "city": "宁波 / 余姚 / 杭州",
    "region": "长三角",
    "role": "图像算法 / 光学测量 / 嵌入式",
    "tags": [
      "vision",
      "image",
      "isp",
      "stereo3d",
      "embedded",
      "cpp"
    ],
    "url": "https://www.sunnyoptical.com/resources.html",
    "sourceUrl": "https://www.sunnyoptical.com/resources.html",
    "aliases": [
      "舜宇",
      "Sunny Optical"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口"
    },
    "reviewedAt": "2026-10-15",
    "availability": "招聘入口已核对；岗位方向为匹配建议，具体地点、毕业届别及开放状态以官网为准"
  }
];
  if (typeof module === "object" && module.exports) module.exports = catalog;
  else root.TrackerCatalog = catalog;
})(typeof globalThis !== "undefined" ? globalThis : this);
