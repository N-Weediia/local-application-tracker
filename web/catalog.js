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
  },
  {
    "id": "byd",
    "company": "比亚迪",
    "city": "深圳",
    "region": "珠三角",
    "role": "智能驾驶感知 / 多传感器融合 / 嵌入式控制",
    "tags": [
      "vision",
      "stereo3d",
      "control",
      "imu",
      "embedded",
      "cpp",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "标定",
      "融合",
      "IMU",
      "C++",
      "嵌入式",
      "控制"
    ],
    "url": "https://job.byd.com/portal/mobile/school-home",
    "sourceUrl": "https://job.byd.com/portal/mobile/school-home",
    "aliases": [
      "BYD",
      "比亚迪股份",
      "比亚迪汽车"
    ],
    "domains": [
      "byd.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 2027 届校招入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网确认面向 2027 届；所列方向为检索建议，具体部门、地点及岗位要求以网申为准"
  },
  {
    "id": "geely",
    "company": "吉利控股",
    "city": "杭州 / 宁波",
    "region": "长三角",
    "role": "智能驾驶感知 / 定位融合 / 车辆控制",
    "tags": [
      "vision",
      "stereo3d",
      "control",
      "imu",
      "embedded",
      "cpp",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "定位",
      "SLAM",
      "IMU",
      "融合",
      "控制",
      "C++"
    ],
    "url": "https://campus.geely.com/",
    "sourceUrl": "https://campus.geely.com/",
    "aliases": [
      "吉利",
      "吉利汽车",
      "吉利控股集团",
      "Geely"
    ],
    "domains": [
      "geely.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官方校园招聘门户；方向与目标研发城市为检索建议，毕业届别和开放岗位以网申为准"
  },
  {
    "id": "saic",
    "company": "上汽集团",
    "city": "上海",
    "region": "长三角",
    "role": "智能驾驶感知 / 车辆控制 / 嵌入式软件",
    "tags": [
      "vision",
      "stereo3d",
      "control",
      "imu",
      "embedded",
      "cpp",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "融合",
      "控制",
      "嵌入式",
      "C++"
    ],
    "url": "https://www.saicmotor.com/chinese/rlzy/rcxq/xyzp/index_xz2.shtml",
    "sourceUrl": "https://www.saicmotor.com/chinese/rlzy/rcxq/xyzp/index_xz1.shtml",
    "aliases": [
      "上汽",
      "SAIC",
      "上海汽车集团"
    ],
    "domains": [
      "saicmotor.com"
    ],
    "profile": {
      "type": "国企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "国企体系·官方校招目录"
    },
    "reviewedAt": "2026-10-18",
    "availability": "集团官网按下属企业提供校招入口；建议方向的具体用人单位、地点和届别需逐一确认"
  },
  {
    "id": "alibaba",
    "company": "阿里巴巴",
    "city": "杭州 / 上海",
    "region": "长三角",
    "role": "计算机视觉 / 多模态算法 / 模型推理优化",
    "tags": [
      "vision",
      "image",
      "multimodal",
      "python",
      "cpp",
      "edgeai",
      "llm"
    ],
    "keywords": [
      "计算机视觉",
      "多模态",
      "图像",
      "PyTorch",
      "推理",
      "模型",
      "Python",
      "C++"
    ],
    "url": "https://campus-talent.alibaba.com/campus/index",
    "sourceUrl": "https://campus-talent.alibaba.com/campus/gov",
    "aliases": [
      "阿里",
      "阿里巴巴集团",
      "Alibaba"
    ],
    "domains": [
      "alibaba.com",
      "alibaba-inc.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 2027 届校招入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网列明 2026.11—2027.10 毕业生项目；建议岗位方向与具体业务地点以职位详情为准"
  },
  {
    "id": "bytedance",
    "company": "字节跳动",
    "city": "上海 / 杭州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "计算机视觉 / 三维视觉 / 多模态算法",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "pose",
      "multimodal",
      "python",
      "cpp",
      "llm"
    ],
    "keywords": [
      "计算机视觉",
      "3D",
      "姿态",
      "图像",
      "多模态",
      "PyTorch",
      "Python",
      "C++"
    ],
    "url": "https://jobs.bytedance.com/campus/",
    "sourceUrl": "https://jobs.bytedance.com/campus/",
    "aliases": [
      "ByteDance",
      "字节"
    ],
    "domains": [
      "bytedance.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "校园招聘门户已核对；所列方向和目标城市为检索建议，不表示每个方向在每座城市都有开放岗位"
  },
  {
    "id": "baidu",
    "company": "百度",
    "city": "上海",
    "region": "长三角",
    "role": "多模态算法 / 视觉感知 / 模型轻量化",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "multimodal",
      "python",
      "cpp",
      "edgeai",
      "llm"
    ],
    "keywords": [
      "视觉",
      "3D",
      "多模态",
      "模型",
      "轻量化",
      "推理",
      "Python"
    ],
    "url": "https://talent.baidu.com/jobs/list?projectType=3&recruitType=GRADUATE",
    "sourceUrl": "https://talent.baidu.com/jobs/list?projectType=3&recruitType=GRADUATE",
    "aliases": [
      "Baidu"
    ],
    "domains": [
      "baidu.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 2027 届 AIDU 入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网可见 2027AIDU 多模态算法工程师（含上海）；AIDU 项目的具体研究要求与开放状态以职位详情为准"
  },
  {
    "id": "meituan",
    "company": "美团",
    "city": "上海 / 深圳 / 杭州",
    "region": "长三角 + 珠三角",
    "role": "无人配送感知 / 机器人算法 / 视觉模型部署",
    "tags": [
      "vision",
      "stereo3d",
      "robot",
      "control",
      "cpp",
      "python",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "机器人",
      "感知",
      "控制",
      "C++",
      "Python",
      "推理"
    ],
    "url": "https://zhaopin.meituan.com/web/campus",
    "sourceUrl": "https://www.meituan.com/technology",
    "aliases": [
      "Meituan",
      "美团点评"
    ],
    "domains": [
      "meituan.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网确认无人车与配送机器人业务并提供校招门户；建议方向需在职位列表核对，相关算法岗位也可能位于北京"
  },
  {
    "id": "arcsoft",
    "company": "虹软科技",
    "city": "杭州 / 上海 / 南京",
    "region": "长三角",
    "role": "图像处理算法 / 具身智能运动控制 / 视觉算法",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "pose",
      "robot",
      "control",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "图像",
      "视觉",
      "3D",
      "机器人",
      "运动控制",
      "姿态",
      "C++",
      "Python"
    ],
    "url": "https://www.arcsoft.com.cn/job/JobList.html",
    "sourceUrl": "https://www.arcsoft.com.cn/job/JobList.html",
    "aliases": [
      "虹软",
      "ArcSoft"
    ],
    "domains": [
      "arcsoft.com.cn",
      "arcsoft.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 2027 届校招职位"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网列有 27 届图像处理算法工程师（杭州/上海/南京）及机器人小脑算法工程师（杭州）；投递前确认具体要求"
  },
  {
    "id": "tztek",
    "company": "天准科技",
    "city": "苏州",
    "region": "长三角",
    "role": "机器视觉 / 三维测量 / 具身感知算法",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "robot",
      "control",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "视觉",
      "标定",
      "三维",
      "3D",
      "测量",
      "机器人",
      "C++",
      "Python"
    ],
    "url": "https://tztek.gllue.com/portal/campus",
    "sourceUrl": "https://www.tztek.com/",
    "aliases": [
      "天准",
      "TZTEK",
      "苏州天准科技"
    ],
    "domains": [
      "tztek.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业校招门户·视觉测量"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网确认视觉测量、具身智能及智驾业务；校招门户需要 JavaScript，具体届别、岗位和地点待网申确认"
  },
  {
    "id": "opt",
    "company": "奥普特",
    "city": "东莞",
    "region": "珠三角",
    "role": "视觉应用 / 光学成像 / 嵌入式研发",
    "tags": [
      "vision",
      "image",
      "stereo3d",
      "embedded",
      "cpp",
      "control"
    ],
    "keywords": [
      "视觉",
      "相机",
      "图像",
      "标定",
      "3D",
      "嵌入式",
      "C++"
    ],
    "url": "https://www.optmv.com/hr/campus.html",
    "sourceUrl": "https://www.optmv.com/hr/campus.html",
    "aliases": [
      "广东奥普特",
      "OPT机器视觉"
    ],
    "domains": [
      "optmv.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘职位"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网列有视觉应用、光学成像、嵌入式等校招职位，显示更新时间为 2026-04-28；毕业届别与当前余量需确认"
  },
  {
    "id": "luster",
    "company": "凌云光",
    "city": "苏州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "图像算法 / 光场三维重建 / 运动捕捉",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "pose",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "视觉",
      "图像",
      "三维",
      "重建",
      "姿态",
      "运动捕捉",
      "标定",
      "C++"
    ],
    "url": "https://app.mokahr.com/campus-recruitment/lusterinc/44882",
    "sourceUrl": "https://www.lusterinc.com/brand/luster/",
    "aliases": [
      "凌云光技术",
      "LUSTER"
    ],
    "domains": [
      "lusterinc.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官网关联招聘平台·机器视觉"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网确认立体视觉、光场重建和运动捕捉业务并关联招聘平台；研发岗位也可能在北京，所列目标城市需在职位详情确认"
  },
  {
    "id": "estun",
    "company": "埃斯顿",
    "city": "南京",
    "region": "长三角",
    "role": "机器人运动控制 / 三维视觉 / 嵌入式软件",
    "tags": [
      "robot",
      "control",
      "vision",
      "stereo3d",
      "embedded",
      "cpp",
      "python"
    ],
    "keywords": [
      "机器人",
      "运动控制",
      "视觉",
      "3D",
      "嵌入式",
      "C++"
    ],
    "url": "https://estun1.zhiye.com/campus",
    "sourceUrl": "https://www.estun.com/",
    "aliases": [
      "埃斯顿自动化",
      "ESTUN"
    ],
    "domains": [
      "estun.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校招平台·届别待更新"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网确认运动控制、工业机器人及 AI+3D 视觉业务；校招平台问答仍列 2026 届，2027 届是否开放需确认"
  },
  {
    "id": "efort",
    "company": "埃夫特",
    "city": "芜湖",
    "region": "长三角",
    "role": "机器人控制算法 / 机器视觉 / 软件开发",
    "tags": [
      "robot",
      "control",
      "vision",
      "embedded",
      "cpp",
      "python"
    ],
    "keywords": [
      "机器人",
      "控制",
      "视觉",
      "嵌入式",
      "C++"
    ],
    "url": "https://efort.zhiye.com/campus/jobs",
    "sourceUrl": "https://www.efort.com.cn/about/join.html",
    "aliases": [
      "埃夫特智能机器人",
      "EFORT"
    ],
    "domains": [
      "efort.com.cn"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校招平台·工业机器人"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网与企业校招平台可定位招聘入口；建议研发方向的具体招聘届别、经验要求和开放状态以详情为准"
  },
  {
    "id": "topstar",
    "company": "拓斯达",
    "city": "东莞",
    "region": "珠三角",
    "role": "机器人控制 / 机器视觉 / 自动化软件",
    "tags": [
      "robot",
      "control",
      "vision",
      "embedded",
      "cpp"
    ],
    "keywords": [
      "机器人",
      "控制",
      "视觉",
      "嵌入式",
      "C++"
    ],
    "url": "https://www.topstarltd.com/lang-cn/recruitinglist/006002003.html",
    "sourceUrl": "https://www.topstarltd.com/lang-cn/recruitinglist/006002003.html",
    "aliases": [
      "广东拓斯达",
      "TOPSTAR"
    ],
    "domains": [
      "topstarltd.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校招入口·研发余量待确认"
    },
    "reviewedAt": "2026-10-18",
    "availability": "校园招聘页已核对，目前可抓取岗位以销售为主；建议研发方向仅作检索线索，不代表当前有研发校招岗位"
  },
  {
    "id": "leadshine",
    "company": "雷赛智能",
    "city": "深圳",
    "region": "珠三角",
    "role": "运动控制算法 / 嵌入式软件 / 电机驱动",
    "tags": [
      "control",
      "robot",
      "embedded",
      "cpp",
      "imu"
    ],
    "keywords": [
      "运动控制",
      "机器人",
      "嵌入式",
      "STM32",
      "C++",
      "控制"
    ],
    "url": "https://www.leisai.com/recruitment/index.html",
    "sourceUrl": "https://www.leisai.com/groupIntroduction.html",
    "aliases": [
      "雷赛",
      "Leadshine"
    ],
    "domains": [
      "leisai.com",
      "leadshine.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘入口·运动控制"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网确认运动控制和人形机器人核心部件业务并提供校招入口；建议方向、地点及届别以招聘系统为准"
  },
  {
    "id": "espressif",
    "company": "乐鑫科技",
    "city": "上海 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "嵌入式软件 / BLE 协议栈 / AIoT 应用",
    "tags": [
      "embedded",
      "iot",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "嵌入式",
      "BLE",
      "STM32",
      "FreeRTOS",
      "Python",
      "C++",
      "物联网"
    ],
    "url": "https://www.espressif.com/zh-hans/join-us/job-search",
    "sourceUrl": "https://www.espressif.com/zh-hans/join-us/job-search",
    "aliases": [
      "乐鑫",
      "Espressif"
    ],
    "domains": [
      "espressif.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校招与日常实习"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网包含校招及日常实习，上海可见嵌入式 BLE/应用方案实习；校招与实习分开申请，逐岗确认转正和届别"
  },
  {
    "id": "allwinner",
    "company": "全志科技",
    "city": "珠海",
    "region": "珠三角",
    "role": "嵌入式软件 / ISP 图像算法 / 端侧 AI",
    "tags": [
      "embedded",
      "vision",
      "image",
      "isp",
      "edgeai",
      "cpp",
      "iot"
    ],
    "keywords": [
      "嵌入式",
      "图像",
      "ISP",
      "视觉",
      "C++",
      "端侧",
      "推理"
    ],
    "url": "https://campus.allwinnertech.com/",
    "sourceUrl": "https://www.allwinnertech.com/index.php?a=index&c=join&id=459",
    "aliases": [
      "全志",
      "Allwinner"
    ],
    "domains": [
      "allwinnertech.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校招门户·芯片与视觉"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网可定位校招门户；门户索引仍显示 2026 届字样，具体届别及岗位开放状态需在网申确认"
  },
  {
    "id": "verisilicon",
    "company": "芯原股份",
    "city": "上海",
    "region": "长三角",
    "role": "嵌入式软件 / 图像处理 / NPU 推理优化",
    "tags": [
      "embedded",
      "image",
      "vision",
      "edgeai",
      "cpp",
      "python",
      "isp"
    ],
    "keywords": [
      "图像",
      "视觉",
      "嵌入式",
      "C++",
      "推理",
      "Python"
    ],
    "url": "https://www.verisilicon.com/cn/Careers",
    "sourceUrl": "https://www.verisilicon.com/en/Careers",
    "aliases": [
      "芯原",
      "VeriSilicon",
      "芯原微电子"
    ],
    "domains": [
      "verisilicon.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方人才招聘入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官方人才页面提供校园招聘入口；所列为业务匹配检索方向，不表示对应职位当前开放或均接受应届生"
  },
  {
    "id": "grgbanking",
    "company": "广电运通",
    "city": "广州",
    "region": "珠三角",
    "role": "计算机视觉 / 多模态算法 / 智能终端软件",
    "tags": [
      "vision",
      "image",
      "multimodal",
      "embedded",
      "edgeai",
      "cpp",
      "python"
    ],
    "keywords": [
      "视觉",
      "图像",
      "多模态",
      "嵌入式",
      "C++",
      "Python"
    ],
    "url": "https://hr.grgbanking.com/",
    "sourceUrl": "https://hr.grgbanking.com/",
    "aliases": [
      "GRGBanking",
      "广州广电运通"
    ],
    "domains": [
      "grgbanking.com"
    ],
    "profile": {
      "type": "国企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "国企体系·官方校招入口"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官方招聘站同时提供社会和校园招聘；建议算法与软件方向需按职位要求确认毕业届别、地点和当前余量"
  },
  {
    "id": "teleai",
    "company": "中国电信人工智能研究院",
    "city": "上海",
    "region": "长三角",
    "role": "多模态算法 / 视觉感知 / 模型部署",
    "tags": [
      "vision",
      "multimodal",
      "image",
      "python",
      "cpp",
      "edgeai",
      "llm"
    ],
    "keywords": [
      "视觉",
      "多模态",
      "图像",
      "PyTorch",
      "推理",
      "部署",
      "Python"
    ],
    "url": "https://wejob.chinatelecom.com.cn/wt/TELE/web/index",
    "sourceUrl": "https://www.chinatelecom.com.cn/zp/",
    "aliases": [
      "TeleAI",
      "电信人工智能研究院",
      "中国电信"
    ],
    "domains": [],
    "profile": {
      "type": "央企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "央企研究院·官方 2027 校招"
    },
    "reviewedAt": "2026-10-18",
    "availability": "集团官网列有 TeleAI 2027 人才计划及研究院校招入口；人才专项和普通校招要求不同，按具体岗位确认"
  },
  {
    "id": "csgdigital",
    "company": "南方电网数字电网集团",
    "city": "广州 / 深圳",
    "region": "珠三角",
    "role": "工业视觉 / AI 算法 / 嵌入式物联终端",
    "tags": [
      "vision",
      "embedded",
      "iot",
      "control",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "视觉",
      "算法",
      "控制",
      "嵌入式",
      "物联网",
      "C++",
      "Python"
    ],
    "url": "https://zhaopin.csg.cn/",
    "sourceUrl": "https://zhaopin.csg.cn/",
    "aliases": [
      "南网数字",
      "南网数字集团",
      "南方电网数字电网",
      "南方电网"
    ],
    "domains": [],
    "profile": {
      "type": "央企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "央企体系·官方统一网申"
    },
    "reviewedAt": "2026-10-18",
    "availability": "南方电网官方统一招聘平台；需选择数字电网集团后核对算法/物联终端方向，具体工作地点和资格以公告为准"
  },
  {
    "id": "zwsoft",
    "company": "中望软件",
    "city": "广州 / 上海",
    "region": "珠三角 + 长三角",
    "role": "图形算法 / 三维几何 / C++ 研发",
    "tags": [
      "stereo3d",
      "vision",
      "image",
      "cpp",
      "python"
    ],
    "keywords": [
      "几何",
      "三维",
      "3D",
      "图像",
      "C++",
      "算法"
    ],
    "url": "https://www.zwsoft.cn/job/campus",
    "sourceUrl": "https://www.zwsoft.cn/job/campus",
    "aliases": [
      "中望",
      "ZWSOFT",
      "广州中望龙腾软件"
    ],
    "domains": [
      "zwsoft.com",
      "zwsoft.cn"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 2027 届校招职位"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网列有 2027 届图形算法（广州/上海等）及 ZW3D C++ 研发（广州）岗位；博士专项须与普通校招区分"
  },
  {
    "id": "bozhon",
    "company": "博众精工",
    "city": "苏州",
    "region": "长三角",
    "role": "机器视觉 / 三维检测 / 运动控制软件",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "robot",
      "control",
      "cpp",
      "embedded"
    ],
    "keywords": [
      "视觉",
      "3D",
      "检测",
      "控制",
      "机器人",
      "C++",
      "嵌入式"
    ],
    "url": "https://www.bozhon.com/about/join/cz",
    "sourceUrl": "https://www.bozhon.com/about/join/cz",
    "aliases": [
      "博众",
      "BOZHON"
    ],
    "domains": [
      "bozhon.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官网简历投递入口·自动化"
    },
    "reviewedAt": "2026-10-18",
    "availability": "官网加入我们页面含简历投递入口；建议研发方向需在招聘平台确认具体岗位和届别"
  },
  {
    "id": "li-auto",
    "company": "理想汽车",
    "city": "上海 / 常州 / 杭州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "智能驾驶感知 / 多传感器融合 / 机器人控制",
    "tags": [
      "vision",
      "stereo3d",
      "pose",
      "robot",
      "control",
      "imu",
      "embedded",
      "cpp",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "融合",
      "IMU",
      "控制",
      "机器人",
      "标定",
      "C++"
    ],
    "url": "https://www.lixiang.com/employ/campus/list.html",
    "sourceUrl": "https://www.lixiang.com/employ/campus/list.html",
    "aliases": [
      "理想",
      "Li Auto"
    ],
    "domains": [
      "lixiang.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘与实习入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官方校招职位门户需要浏览器加载；2027 校招与理想+专项要求不同，所列方向及城市需逐岗确认，部分岗位在北京"
  },
  {
    "id": "leapmotor",
    "company": "零跑汽车",
    "city": "杭州 / 金华",
    "region": "长三角",
    "role": "视觉感知 / 智驾定位融合 / 嵌入式控制",
    "tags": [
      "vision",
      "stereo3d",
      "control",
      "imu",
      "embedded",
      "cpp",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "定位",
      "融合",
      "IMU",
      "控制",
      "嵌入式",
      "C++"
    ],
    "url": "https://leapmotor1.zhiye.com/campus/jobs",
    "sourceUrl": "https://leapmotor1.zhiye.com/intern/",
    "aliases": [
      "零跑",
      "Leapmotor",
      "浙江零跑科技"
    ],
    "domains": [
      "leapmotor.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业校招门户·2027 校招问答"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业招聘门户可见 2027 届校招问答；校招、实习和社招入口分开，建议方向与工作地点以具体职位为准"
  },
  {
    "id": "horizon",
    "company": "地平线",
    "city": "上海 / 南京 / 杭州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "智驾感知 / 三维视觉 / 端侧算法部署",
    "tags": [
      "vision",
      "stereo3d",
      "pose",
      "robot",
      "control",
      "cpp",
      "python",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "3D",
      "机器人",
      "标定",
      "推理",
      "Python",
      "C++"
    ],
    "url": "https://sp.wintalent.cn/Horizon/campus/index.html",
    "sourceUrl": "https://www.job.sjtu.edu.cn/career/zpxx/view/zpxx/230760739294547968",
    "aliases": [
      "Horizon Robotics",
      "地平线机器人",
      "北京地平线信息技术"
    ],
    "domains": [
      "horizon.auto"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业校招入口·2027 招聘公告"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业发布在高校的 2027 招聘公告列有上海、南京、杭州、深圳等城市，网申安排至 10 月 30 日；最终以网申职位状态为准"
  },
  {
    "id": "pony",
    "company": "小马智行",
    "city": "上海 / 广州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "自动驾驶感知 / 定位融合 / 机器人软件",
    "tags": [
      "vision",
      "stereo3d",
      "pose",
      "robot",
      "control",
      "imu",
      "cpp",
      "python",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "定位",
      "融合",
      "IMU",
      "机器人",
      "Python",
      "C++"
    ],
    "url": "https://campus.pony.ai/",
    "sourceUrl": "https://campus.pony.ai/guideline",
    "aliases": [
      "Pony.ai",
      "PonyAI"
    ],
    "domains": [
      "pony.ai"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 2027 届校招入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网确认 2027 届校招，面向 2026.09—2027.08 毕业生；上海、广州、深圳为研发城市，方向及实际地点以岗位详情为准"
  },
  {
    "id": "weride",
    "company": "文远知行",
    "city": "广州 / 深圳 / 上海",
    "region": "珠三角 + 长三角",
    "role": "视觉感知 / 多传感器融合 / 自动驾驶算法",
    "tags": [
      "vision",
      "stereo3d",
      "robot",
      "control",
      "imu",
      "cpp",
      "python",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "融合",
      "定位",
      "IMU",
      "机器人",
      "Python",
      "C++"
    ],
    "url": "https://www.weride.ai/zh/careers",
    "sourceUrl": "https://www.weride.ai/zh/careers",
    "aliases": [
      "WeRide"
    ],
    "domains": [
      "weride.ai"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方中国校园招聘入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网同时提供中国校园招聘及社会招聘入口；建议方向的届别、经验要求和实际研发地点需在校招列表确认"
  },
  {
    "id": "netease",
    "company": "网易雷火",
    "city": "杭州",
    "region": "长三角",
    "role": "视觉与游戏 AI / 三维图形 / 动作理解算法",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "pose",
      "cpp",
      "python",
      "multimodal"
    ],
    "keywords": [
      "视觉",
      "图像",
      "3D",
      "姿态",
      "多模态",
      "Python",
      "C++"
    ],
    "url": "https://leihuo.163.com/campus/",
    "sourceUrl": "https://www.career.zju.edu.cn/jyxt/sczp/xjhgl/ckXjhgwXq.zf?dwxxid=761C0E154F8524AFE055000000000001&xjhbh=dced4eed4a1b63bab73814ad5b1ba5da",
    "aliases": [
      "网易",
      "网易游戏",
      "雷火",
      "NetEase"
    ],
    "domains": [
      "corp.netease.com",
      "netease.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业提供的 2027 届校招入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业在高校发布的 2027 招聘简章提供此官网入口，工作地含杭州；建议算法方向需核对游戏/图形经验要求，门户需浏览器加载"
  },
  {
    "id": "kuaishou",
    "company": "快手",
    "city": "杭州 / 深圳",
    "region": "长三角 + 珠三角",
    "role": "计算机视觉 / 多模态算法 / 视频理解",
    "tags": [
      "vision",
      "image",
      "pose",
      "multimodal",
      "python",
      "cpp",
      "edgeai",
      "llm"
    ],
    "keywords": [
      "视觉",
      "图像",
      "姿态",
      "多模态",
      "时序",
      "PyTorch",
      "Python",
      "推理"
    ],
    "url": "https://zhaopin.kuaishou.cn/",
    "sourceUrl": "https://zhaopin.kuaishou.cn/",
    "aliases": [
      "Kuaishou",
      "快手科技"
    ],
    "domains": [
      "kuaishou.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘门户·需浏览器加载"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官方招聘门户需 JavaScript；所列为建议算法方向及目标城市，相关岗位也可能在北京，届别和实际地点待职位详情确认"
  },
  {
    "id": "didi",
    "company": "滴滴",
    "city": "上海 / 杭州 / 广州",
    "region": "长三角 + 珠三角",
    "role": "自动驾驶视觉 / 定位融合 / 算法工程",
    "tags": [
      "vision",
      "stereo3d",
      "control",
      "imu",
      "cpp",
      "python",
      "edgeai",
      "autonomous_driving"
    ],
    "keywords": [
      "视觉",
      "感知",
      "定位",
      "融合",
      "IMU",
      "Python",
      "C++"
    ],
    "url": "https://talent.didiglobal.com/social/",
    "sourceUrl": "https://talent.didiglobal.com/social/",
    "aliases": [
      "滴滴出行",
      "DiDi"
    ],
    "domains": [
      "didiglobal.com",
      "didichuxing.com"
    ],
    "profile": {
      "type": "大厂",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘门户·需切换校招"
    },
    "reviewedAt": "2026-10-19",
    "availability": "已定位官方招聘门户及校招联系方式；当前链接默认社招，须切换校园招聘。自动驾驶方向的届别与地点需在校招中另行确认"
  },
  {
    "id": "roborock",
    "company": "石头科技",
    "city": "深圳 / 苏州",
    "region": "珠三角 + 长三角",
    "role": "机器人视觉 / SLAM 与定位融合 / 嵌入式软件",
    "tags": [
      "vision",
      "stereo3d",
      "robot",
      "control",
      "imu",
      "embedded",
      "cpp",
      "python",
      "edgeai",
      "slam"
    ],
    "keywords": [
      "视觉",
      "机器人",
      "SLAM",
      "定位",
      "融合",
      "IMU",
      "嵌入式",
      "C++"
    ],
    "url": "https://roborock.zhiye.com/mapwork",
    "sourceUrl": "https://roborock.zhiye.com/mapwork",
    "aliases": [
      "石头",
      "Roborock",
      "北京石头世纪科技"
    ],
    "domains": [
      "roborock.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业官方招聘平台"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业招聘平台含校园招聘导航；此处为机器人研发检索方向和目标城市，岗位也可能在北京，届别、经验与实际地点需确认"
  },
  {
    "id": "ecovacs",
    "company": "科沃斯",
    "city": "苏州",
    "region": "长三角",
    "role": "机器人视觉 / VSLAM / 嵌入式软件",
    "tags": [
      "vision",
      "stereo3d",
      "robot",
      "control",
      "imu",
      "embedded",
      "cpp",
      "python",
      "edgeai",
      "slam"
    ],
    "keywords": [
      "视觉",
      "机器人",
      "VSLAM",
      "SLAM",
      "定位",
      "IMU",
      "嵌入式",
      "C++"
    ],
    "url": "https://hr.ecovacs.cn/",
    "sourceUrl": "https://hr.ecovacs.cn/social?cate_id=1&word=",
    "aliases": [
      "科沃斯机器人",
      "ECOVACS"
    ],
    "domains": [
      "ecovacs.com",
      "ecovacs.cn"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 HR 门户·校招资格待确认"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官方 HR 站可见 VSLAM、嵌入式及 Linux 研发方向，当前抓取为社招信息；应届生须在校园招聘中另查开放岗位"
  },
  {
    "id": "ninebot",
    "company": "九号公司",
    "city": "上海 / 深圳 / 杭州 / 常州 / 珠海",
    "region": "长三角 + 珠三角",
    "role": "机器人感知 / 运动控制 / 嵌入式研发",
    "tags": [
      "vision",
      "robot",
      "control",
      "imu",
      "embedded",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "视觉",
      "机器人",
      "控制",
      "IMU",
      "嵌入式",
      "C++"
    ],
    "url": "https://join.ninebot.com/campus-recruitment/ninebot/45627",
    "sourceUrl": "https://ninebot.com/",
    "aliases": [
      "九号",
      "Ninebot",
      "Segway-Ninebot",
      "纳恩博"
    ],
    "domains": [
      "ninebot.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官网关联校园招聘平台"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网提供校园招聘入口；企业 2027 简章列有技术研发岗位及多座目标城市，具体控制/感知职位与地点需逐岗确认"
  },
  {
    "id": "cvte",
    "company": "视源股份",
    "city": "广州 / 苏州 / 合肥",
    "region": "珠三角 + 长三角",
    "role": "计算机视觉 / 机器人感知 / 嵌入式系统",
    "tags": [
      "vision",
      "image",
      "pose",
      "robot",
      "embedded",
      "cpp",
      "python",
      "edgeai",
      "multimodal"
    ],
    "keywords": [
      "视觉",
      "图像",
      "姿态",
      "机器人",
      "多模态",
      "嵌入式",
      "C++"
    ],
    "url": "https://campus.cvte.com/",
    "sourceUrl": "https://campus.cvte.com/campus_news?tab=graduate",
    "aliases": [
      "CVTE",
      "广州视源电子科技",
      "视源"
    ],
    "domains": [
      "cvte.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方 2027 届秋招入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网明确 2027 届秋招，含算法类及嵌入式系统软件方向；官网问答预计 10 月结束网申，每届项目限投一个岗位，实时要求以官网为准"
  },
  {
    "id": "goertek",
    "company": "歌尔股份",
    "city": "深圳 / 东莞",
    "region": "珠三角",
    "role": "AR/VR 视觉算法 / 三维感知 / 嵌入式研发",
    "tags": [
      "vision",
      "stereo3d",
      "pose",
      "image",
      "embedded",
      "cpp",
      "python",
      "edgeai",
      "imu"
    ],
    "keywords": [
      "视觉",
      "3D",
      "姿态",
      "标定",
      "IMU",
      "图像",
      "嵌入式",
      "C++"
    ],
    "url": "https://www.goertek.com/join/advertises.html",
    "sourceUrl": "https://www.goertek.com/join/advertises_s.html",
    "aliases": [
      "歌尔",
      "Goertek"
    ],
    "domains": [
      "goertek.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方招聘与校园招聘入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网提供校园招聘入口；AR/VR、软件及自动化为匹配检索方向，当前届别与目标城市研发余量待确认，部分岗位在潍坊或青岛"
  },
  {
    "id": "luxshare",
    "company": "立讯精密",
    "city": "深圳 / 东莞 / 苏州 / 昆山",
    "region": "珠三角 + 长三角",
    "role": "嵌入式软件 / 机器视觉 / 传感与自动化控制",
    "tags": [
      "embedded",
      "vision",
      "image",
      "control",
      "cpp",
      "python",
      "iot"
    ],
    "keywords": [
      "嵌入式",
      "视觉",
      "图像",
      "传感",
      "控制",
      "C++",
      "Python"
    ],
    "url": "https://www.luxshare-ict.com/careers.html",
    "sourceUrl": "https://www.luxshare-ict.com/careers.html",
    "aliases": [
      "立讯",
      "Luxshare",
      "Luxshare-ICT"
    ],
    "domains": [
      "luxshare-ict.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网加入我们页区分校园和社会招聘；所列方向为研发检索建议，须核对校招项目、业务部门及具体工作地点"
  },
  {
    "id": "aac",
    "company": "瑞声科技",
    "city": "深圳 / 常州 / 苏州 / 上海",
    "region": "珠三角 + 长三角",
    "role": "传感信号算法 / 光学测试 / 嵌入式研发",
    "tags": [
      "multimodal",
      "image",
      "vision",
      "imu",
      "embedded",
      "cpp",
      "python"
    ],
    "keywords": [
      "传感",
      "信号",
      "图像",
      "光学",
      "IMU",
      "嵌入式",
      "Python",
      "C++"
    ],
    "url": "https://talent.aactechnologies.com/campus",
    "sourceUrl": "https://www.aactechnologies.com/joinUs/talentsPage",
    "aliases": [
      "AAC",
      "AAC Technologies",
      "瑞声"
    ],
    "domains": [
      "aactechnologies.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘门户"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业 2027 简章提供此校招门户，含传感器研发、测试开发等方向；算法与嵌入式余量、地点和毕业届别以职位详情为准"
  },
  {
    "id": "lead-intelligent",
    "company": "先导智能",
    "city": "无锡",
    "region": "长三角",
    "role": "机器视觉 / 运动控制 / 自动化软件",
    "tags": [
      "vision",
      "image",
      "robot",
      "control",
      "embedded",
      "cpp",
      "python"
    ],
    "keywords": [
      "视觉",
      "图像",
      "机器人",
      "控制",
      "标定",
      "C++",
      "Python"
    ],
    "url": "https://www.leadintelligent.com/hire3",
    "sourceUrl": "https://www.leadintelligent.com/hire3",
    "aliases": [
      "无锡先导智能",
      "先导智能装备",
      "LEAD Intelligent"
    ],
    "domains": [
      "leadintelligent.com",
      "leadchina.cn"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方社会与校园招聘入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网提供校园招聘跳转；企业有 2027 校招简章，部分软件岗位要求 C#/Winform，视觉/C++ 方向需按具体职位筛选"
  },
  {
    "id": "hyc",
    "company": "华兴源创",
    "city": "苏州",
    "region": "长三角",
    "role": "图像算法 / 光学检测 / 测试与控制软件",
    "tags": [
      "vision",
      "image",
      "stereo3d",
      "control",
      "cpp",
      "python",
      "embedded"
    ],
    "keywords": [
      "图像",
      "视觉",
      "3D",
      "检测",
      "控制",
      "C++",
      "Python"
    ],
    "url": "https://app135149.dingtalkoxm.com/campus-recruitment/hyc/100000208",
    "sourceUrl": "https://app135149.dingtalkoxm.com/campus-recruitment/hyc/100000208",
    "aliases": [
      "苏州华兴源创",
      "HYC华兴源创"
    ],
    "domains": [
      "hyc.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业 2027 届校园招聘平台"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业招聘平台明确显示 2027 届校招职位；所列算法、检测及控制方向为检索建议，实际职位与学历要求以网申为准"
  },
  {
    "id": "wayzim",
    "company": "中科微至",
    "city": "无锡",
    "region": "长三角",
    "role": "机器视觉 / 三维分拣感知 / 机器人控制",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "robot",
      "control",
      "embedded",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "视觉",
      "3D",
      "图像",
      "机器人",
      "控制",
      "嵌入式",
      "Python",
      "C++"
    ],
    "url": "https://www.wayzim.com/en/join",
    "sourceUrl": "https://www.wayzim.com/en/join",
    "aliases": [
      "Wayzim",
      "中科微至科技"
    ],
    "domains": [
      "wayzim.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘入口·智能物流"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网人才页提供社会/校园招聘入口，并明确图像处理、AI 与机器人研发方向；具体届别和开放岗位待校招平台确认"
  },
  {
    "id": "secote",
    "company": "赛腾股份",
    "city": "苏州",
    "region": "长三角",
    "role": "机器视觉 / 三维检测 / 自动化控制软件",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "robot",
      "control",
      "cpp",
      "embedded"
    ],
    "keywords": [
      "视觉",
      "图像",
      "三维",
      "检测",
      "机器人",
      "控制",
      "C++"
    ],
    "url": "https://www.secote.com/cn/contact_us/hr",
    "sourceUrl": "https://www.secote.com/cn/contact_us/hr",
    "aliases": [
      "赛腾",
      "苏州赛腾精密电子",
      "SECOTE"
    ],
    "domains": [
      "secote.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方人力资源与校招入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网人力资源页提供校园招聘入口；建议方向为业务匹配线索，具体届别、开放职位和工作地点须在招聘列表确认"
  },
  {
    "id": "hans-laser",
    "company": "大族激光",
    "city": "深圳",
    "region": "珠三角",
    "role": "机器视觉 / 图像处理 / 运动控制软件",
    "tags": [
      "vision",
      "image",
      "stereo3d",
      "control",
      "embedded",
      "cpp",
      "python"
    ],
    "keywords": [
      "视觉",
      "图像",
      "三维",
      "标定",
      "控制",
      "嵌入式",
      "C++"
    ],
    "url": "https://www.hanslaser.com/contact",
    "sourceUrl": "https://www.hanslaser.com/contact",
    "aliases": [
      "大族激光科技产业集团",
      "Han's Laser",
      "Hans Laser"
    ],
    "domains": [
      "hanslaser.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官网人力资源联系入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网可核对人力资源联系渠道；此条是建议咨询/检索方向，尚未确认对应 2027 校招岗位，不代表已有可投职位"
  },
  {
    "id": "jingce",
    "company": "精测电子",
    "city": "苏州 / 上海 / 无锡 / 合肥",
    "region": "长三角",
    "role": "视觉算法 / 三维测量 / 控制与检测软件",
    "tags": [
      "vision",
      "stereo3d",
      "image",
      "control",
      "embedded",
      "cpp",
      "python"
    ],
    "keywords": [
      "视觉",
      "图像",
      "3D",
      "三维",
      "测量",
      "控制",
      "C++",
      "Python"
    ],
    "url": "https://jingce.zhiye.com/Campus",
    "sourceUrl": "https://jingce.zhiye.com/Campus",
    "aliases": [
      "精测",
      "精测电子集团",
      "武汉精测电子"
    ],
    "domains": [
      "wuhanjingce.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业官方 2027 校招职位"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官方校招列表可见苏州算法工程师、软件工程师及电控工程师等 2027 职位；其他方向及城市按各子公司具体岗位核对"
  },
  {
    "id": "googoltech",
    "company": "固高科技",
    "city": "深圳 / 东莞 / 苏州 / 无锡",
    "region": "珠三角 + 长三角",
    "role": "机器人标定 / 运动控制 / 嵌入式软件",
    "tags": [
      "robot",
      "control",
      "vision",
      "stereo3d",
      "embedded",
      "cpp",
      "imu"
    ],
    "keywords": [
      "机器人",
      "标定",
      "运动控制",
      "视觉",
      "嵌入式",
      "C++",
      "控制"
    ],
    "url": "https://www.googoltech.com.cn/list-9.html",
    "sourceUrl": "https://www.googoltech.com.cn/",
    "aliases": [
      "固高",
      "GOOGOLTECH"
    ],
    "domains": [
      "googoltech.com.cn",
      "googoltech.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘入口·运动控制"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网确认运动控制、机器人标定与 3D 视觉业务，并提供校招入口；建议城市及方向需核对当前届别和岗位余量"
  },
  {
    "id": "kinco",
    "company": "步科股份",
    "city": "上海 / 深圳 / 常州",
    "region": "长三角 + 珠三角",
    "role": "机器人控制 / 伺服算法 / 嵌入式软件",
    "tags": [
      "robot",
      "control",
      "embedded",
      "cpp",
      "imu",
      "iot"
    ],
    "keywords": [
      "机器人",
      "运动控制",
      "嵌入式",
      "STM32",
      "C++",
      "控制"
    ],
    "url": "https://www.kinco.cn/talent-recruitment",
    "sourceUrl": "https://www.kinco.cn/news/company",
    "aliases": [
      "步科",
      "Kinco",
      "上海步科自动化"
    ],
    "domains": [
      "kinco.cn"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官网发布 2027 届校招计划"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网新闻列有 2027 届全球校招计划，人才页提供校招入口；控制、伺服和嵌入式为检索建议，具体岗位及地点需确认"
  },
  {
    "id": "invt",
    "company": "英威腾",
    "city": "深圳 / 苏州",
    "region": "珠三角 + 长三角",
    "role": "控制算法 / 嵌入式软件 / 工业自动化",
    "tags": [
      "control",
      "robot",
      "embedded",
      "cpp",
      "iot"
    ],
    "keywords": [
      "控制",
      "机器人",
      "嵌入式",
      "C++",
      "工业",
      "通信"
    ],
    "url": "https://www.invt.com.cn/careers",
    "sourceUrl": "https://www.invt.com.cn/careers",
    "aliases": [
      "INVT",
      "深圳英威腾电气"
    ],
    "domains": [
      "invt.com.cn",
      "invt.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校园招聘入口"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官方员工招聘页区分校园和社会招聘；所列为工业自动化研发检索方向，当前届别与目标城市职位余量以招聘系统为准"
  },
  {
    "id": "megmeet",
    "company": "麦格米特",
    "city": "深圳",
    "region": "珠三角",
    "role": "控制算法 / 嵌入式软件 / 智能装备研发",
    "tags": [
      "control",
      "robot",
      "embedded",
      "cpp",
      "iot"
    ],
    "keywords": [
      "控制",
      "机器人",
      "嵌入式",
      "STM32",
      "C++",
      "通信"
    ],
    "url": "https://wecruit.hotjob.cn/SU6282075e0dcad413c09efe26/pb/posDetail.html?postId=6a8b9c6c68cc6f624f73f1ba&postType=campus",
    "sourceUrl": "https://www.megmeet.com/about",
    "aliases": [
      "麦米电气",
      "麦米",
      "MEGMEET",
      "深圳麦格米特电气"
    ],
    "domains": [
      "megmeet.com"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "企业校园招聘门户·电气控制"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业校招门户已有制造类校招职位；当前链接是门户中的校招岗位，建议算法/嵌入式方向需返回职位列表另行筛选，不能将该制造岗视为算法岗"
  },
  {
    "id": "xinje",
    "company": "信捷电气",
    "city": "无锡",
    "region": "长三角",
    "role": "AI 视觉算法 / 运动控制 / 嵌入式软件",
    "tags": [
      "vision",
      "image",
      "robot",
      "control",
      "embedded",
      "cpp",
      "python",
      "edgeai"
    ],
    "keywords": [
      "视觉",
      "图像",
      "PyTorch",
      "机器人",
      "控制",
      "嵌入式",
      "Python",
      "C++"
    ],
    "url": "https://xinje.zhiye.com/",
    "sourceUrl": "https://www.xinje.com/",
    "aliases": [
      "信捷",
      "XINJE",
      "无锡信捷电气"
    ],
    "domains": [
      "xinje.com",
      "xinje.net"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官网关联企业招聘平台"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网关联招聘平台并确认机器视觉、工业机器人和运动控制业务；建议方向的当前届别与具体开放状态需在应届生招聘中确认"
  },
  {
    "id": "hcfa",
    "company": "禾川科技",
    "city": "杭州 / 苏州 / 衢州",
    "region": "长三角",
    "role": "运动控制 / 嵌入式软件 / 工业自动化",
    "tags": [
      "control",
      "robot",
      "embedded",
      "cpp",
      "iot"
    ],
    "keywords": [
      "运动控制",
      "嵌入式",
      "STM32",
      "控制",
      "C++",
      "通信"
    ],
    "url": "https://www.hcfa.cn/about/join/cid/school.html",
    "sourceUrl": "https://www.hcfa.cn/about/join.html",
    "aliases": [
      "禾川",
      "HCFA",
      "浙江禾川科技"
    ],
    "domains": [
      "hcfa.cn"
    ],
    "profile": {
      "type": "知名企业",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "官方校招入口·当前暂无列表数据"
    },
    "reviewedAt": "2026-10-19",
    "availability": "官网校园招聘页当前显示暂无数据；社招有杭州嵌入式方向但要求经验。本条仅作后续校招检索线索，不视为当前可投的应届岗位"
  },
  {
    "id": "sac",
    "company": "国电南自",
    "city": "南京",
    "region": "长三角",
    "role": "人工智能 / 嵌入式软件 / 控制系统研发",
    "tags": [
      "vision",
      "control",
      "embedded",
      "cpp",
      "python",
      "iot",
      "edgeai"
    ],
    "keywords": [
      "算法",
      "控制",
      "嵌入式",
      "视觉",
      "C++",
      "Python",
      "工业"
    ],
    "url": "https://sac2027.zhaopin.com/",
    "sourceUrl": "https://sac2027.zhaopin.com/",
    "aliases": [
      "国电南京自动化",
      "国电南京自动化股份"
    ],
    "domains": [
      "sac-china.com"
    ],
    "profile": {
      "type": "央企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "央企体系·2027 届校招平台"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业 2027 校招平台已定位，招聘方向含 AI、系统软件及嵌入式研发；须按公告同时完成企业与集团要求的申请步骤"
  },
  {
    "id": "guorui",
    "company": "国睿科技",
    "city": "南京 / 芜湖",
    "region": "长三角",
    "role": "算法研发 / 工业软件 / 雷达与轨交控制",
    "tags": [
      "control",
      "vision",
      "imu",
      "embedded",
      "cpp",
      "python",
      "iot"
    ],
    "keywords": [
      "算法",
      "感知",
      "信号",
      "控制",
      "嵌入式",
      "C++",
      "Python"
    ],
    "url": "http://2027guorui.zhaopin.com/",
    "sourceUrl": "https://job.hust.edu.cn/extxjh/91788329483563.do",
    "aliases": [
      "国睿科技股份",
      "GLARUN"
    ],
    "domains": [],
    "profile": {
      "type": "央企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "央企体系·企业 2027 校招简章"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业在高校发布的 2027 简章列有算法、软件研发方向及此网申入口；入口需浏览器核验，具体子公司、城市与专业要求以网申为准"
  },
  {
    "id": "casco",
    "company": "卡斯柯",
    "city": "上海",
    "region": "长三角",
    "role": "控制算法 / 嵌入式软件 / 轨交智能系统",
    "tags": [
      "control",
      "embedded",
      "cpp",
      "python",
      "iot",
      "robot"
    ],
    "keywords": [
      "控制",
      "嵌入式",
      "C++",
      "Python",
      "通信",
      "自动化"
    ],
    "url": "https://casco.zhiye.com/",
    "sourceUrl": "https://casco.zhiye.com/",
    "aliases": [
      "卡斯柯信号",
      "CASCO"
    ],
    "domains": [
      "casco.com.cn"
    ],
    "profile": {
      "type": "国企",
      "funding": "unknown",
      "verified": false,
      "fundingLabel": "央企控股合资企业·2027 校招"
    },
    "reviewedAt": "2026-10-19",
    "availability": "企业招聘平台明确 2027 校招及中国通号控股背景；所列为控制/软件检索方向，具体职位学历、城市与要求以详情为准"
  }
];
  if (typeof module === "object" && module.exports) module.exports = catalog;
  else root.TrackerCatalog = catalog;
})(typeof globalThis !== "undefined" ? globalThis : this);
