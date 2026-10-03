const STORAGE_KEY = "local_application_tracker_v2";
const statusLabels = {wait:"待投递", applied:"已投递", assessment:"测评", written_test:"笔试", interview:"面试", offer:"Offer", rejected:"拒绝", other:"其他"};

const keywordRules = [
  ["vision", ["计算机视觉","computer vision","视觉算法","目标检测","目标跟踪","opencv","图像处理","图像算法"]],
  ["stereo3d", ["双目","多相机","立体视觉","三维","3d","三维重建","深度相机","点云","多视几何"]],
  ["pose", ["姿态估计","姿态","骨架","关键点","人体运动","动作识别","人类运动"]],
  ["robot", ["机器人","外骨骼","具身智能","人机协同","机械臂","robot"]],
  ["control", ["控制工程","运动控制","阻抗控制","因子图","卡尔曼","ekf","滤波","导航"]],
  ["imu", ["imu","惯性导航","传感器融合","多传感器","fgo","预积分"]],
  ["embedded", ["stm32","嵌入式","freertos","oneos","uart","spi","i2c","can 总线"]],
  ["cpp", ["c/c++","c++","c语言","实时系统"]],
  ["python", ["python","pytorch","tensorflow","numpy","scipy"]],
  ["edgeai", ["端侧","边缘","低延迟","实时推理","轻量化","onnx","量化","部署"]],
  ["multimodal", ["多模态","fnirs","eeg","semg","脑肌","跨模态","cross-attention","时序"]],
  ["image", ["相机标定","标定","极线校正","镜头","影像","视频"]],
  ["isp", ["isp","图像信号处理","cmos","图像传感器"]],
  ["drone", ["无人机","多旋翼","飞行器","低空"]],
  ["autonomous_driving", ["自动驾驶","智能驾驶","车辆感知","adas"]],
  ["iot", ["物联网","通信模组","ble","蓝牙","iot"]],
  ["llm", ["大模型","llm","生成式人工智能","推理引擎"]]
];

const candidatePool = [
  {id:"zhito",company:"挚途科技",city:"苏州",region:"长三角",role:"视觉 SLAM / 感知算法工程师",tags:["vision","stereo3d","pose","robot","slam","control","imu","cpp"],url:"https://zhito.zhiye.com/Campus"},
  {id:"inovance",company:"汇川技术",city:"苏州 / 深圳",region:"长三角 + 珠三角",role:"AI 算法 / 机器人算法 / 嵌入式软件",tags:["robot","control","embedded","cpp","edgeai","imu"],url:"https://recruit.inovance.com/"},
  {id:"dreame",company:"追觅科技",city:"苏州",region:"长三角",role:"智能算法 / 视觉算法 / 机器人算法",tags:["vision","robot","edgeai","embedded","python","cpp"],url:"https://dreame.zhiye.com/"},
  {id:"xiaopeng",company:"小鹏汽车",city:"广州 / 深圳 / 上海",region:"珠三角 + 长三角",role:"智能驾驶感知 / 机器人视觉 / AI 算法",tags:["vision","stereo3d","pose","robot","edgeai","autonomous_driving","control"],url:"https://www.xiaopeng.com/join.html"},
  {id:"smartsens",company:"思特威 SmartSens",city:"上海 / 深圳",region:"长三角 + 珠三角",role:"ISP / 图像算法 / 机器视觉算法",tags:["vision","image","isp","embedded","edgeai","cpp"],url:"https://campus.smartsenstech.com/campus_trends"},
  {id:"xag",company:"极飞科技 XAG",city:"广州",region:"珠三角",role:"视觉 / 机器人 / 导航算法",tags:["vision","drone","robot","control","imu","stereo3d","edgeai"],url:"https://www.xa.com/about/career"},
  {id:"tcl",company:"TCL",city:"深圳 / 惠州",region:"珠三角",role:"AI 算法 / 机器视觉 / 机器人研发",tags:["vision","image","robot","edgeai","embedded","isp"],url:"https://zhaopin.tcl.com/campus/recruiting.html?id=62"},
  {id:"zte",company:"中兴通讯",city:"深圳 / 南京 / 上海",region:"珠三角 + 长三角",role:"AI 算法 / 软件开发 / 端侧智能",tags:["python","cpp","edgeai","embedded","llm","iot"],url:"https://job.zte.com.cn/cn/campus-recruitment/Recruitment_positions/freshstudent.html"},
  {id:"quectel",company:"移远通信",city:"上海",region:"长三角",role:"嵌入式 / AI 算法 / 物联网视觉",tags:["embedded","iot","edgeai","cpp","python","vision"],url:"https://talent.quectel.com/"},
  {id:"cmcc-hz",company:"中国移动杭州研发中心",city:"杭州",region:"长三角",role:"具身智能 / 机器人 / 大模型推理",tags:["robot","llm","edgeai","vision","multimodal","python"],url:"https://job.10086.cn/"},
  {id:"gac",company:"广汽研究院",city:"广州",region:"珠三角",role:"智能驾驶感知 / 3D 视觉 / 车辆控制",tags:["autonomous_driving","vision","stereo3d","control","pose","cpp"],url:"https://www.gac.com.cn/cn/careers"},
  {id:"ehang",company:"亿航智能",city:"广州",region:"珠三角",role:"飞行器视觉 / 导航 / 控制算法",tags:["drone","vision","control","imu","stereo3d","embedded"],url:"https://www.ehang.com/cn/career/"},
  {id:"sensetime",company:"商汤科技",city:"上海",region:"长三角",role:"计算机视觉 / 多模态算法 / 端侧 AI",tags:["vision","multimodal","pose","python","edgeai","llm"],url:"https://www.sensetime.com/cn/careers"},
  {id:"thundersoft",company:"中科创达",city:"上海 / 苏州",region:"长三角",role:"计算机视觉 / Android AI / 边缘智能",tags:["embedded","vision","edgeai","cpp","python","image"],url:"https://www.thundersoft.com/careers/"},
  {id:"huaqin",company:"华勤技术",city:"上海 / 东莞",region:"长三角 + 珠三角",role:"相机算法 / 影像调优 / 嵌入式系统",tags:["image","vision","isp","embedded","edgeai","cpp"],url:"https://www.huaqin.com/join"},
  {id:"nio",company:"蔚来",city:"上海 / 合肥",region:"长三角",role:"智能驾驶 / 视觉感知 / 机器人算法",tags:["autonomous_driving","vision","stereo3d","pose","edgeai","cpp"],url:"https://www.nio.com/careers"}
];

let providers = {};
let state = loadState();
let resumeTags = new Set(state.resumeProfile?.tags || []);

function freshCandidate(candidate, score = 0, matches = []) { return {...candidate, score, matches, status:"wait", applied:false, checkedAt:""}; }
function defaultState() { return {current: [], batchIndex: 0, history: [], mail: [], resumeProfile: {tags: [], label: "未上传简历"}}; }
function loadState() { try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); return saved && Array.isArray(saved.current) ? saved : defaultState(); } catch { return defaultState(); } }
function saveState() { const safe = {...state, resumeProfile: {tags:[...resumeTags], label: state.resumeProfile?.label || "已解析简历"}}; localStorage.setItem(STORAGE_KEY, JSON.stringify(safe)); }
function now() { return new Date().toLocaleString("zh-CN", {hour12:false}); }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[ch])); }
function statusClass(status) { return `status status-${status}`; }
function toast(message) { const el=document.getElementById("toast"); el.textContent=message; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2300); }

function extractResumeTags(text) {
  const normalized = (text || "").toLowerCase();
  const found = new Set();
  for (const [tag, patterns] of keywordRules) if (patterns.some(pattern => normalized.includes(pattern.toLowerCase()))) found.add(tag);
  return found;
}
function scoreCandidates(tags) {
  return candidatePool.map(candidate => {
    const matches = candidate.tags.filter(tag => tags.has(tag));
    const score = Math.min(99, matches.length * 12 + (candidate.region.includes("珠三角") || candidate.region.includes("长三角") ? 5 : 0));
    return freshCandidate(candidate, score, matches);
  }).sort((a,b)=>b.score-a.score || a.company.localeCompare(b.company,"zh-CN"));
}
function chooseNextBatch() {
  const used = new Set(state.history.map(item=>item.id));
  const ranked = scoreCandidates(resumeTags);
  const available = ranked.filter(item=>!used.has(item.id));
  const selected = available.slice(0,5);
  if (selected.length < 5) selected.push(...ranked.filter(item=>!selected.some(x=>x.id===item.id)).slice(0,5-selected.length));
  return selected;
}
function applyResumeText(text, label) {
  resumeTags = extractResumeTags(text);
  state.resumeProfile = {tags:[...resumeTags], label:label || "已解析简历"};
  state.current = chooseNextBatch();
  state.batchIndex = state.history.length ? Math.floor(state.history.length / 5) : 0;
  saveState(); renderAll();
  toast(`已识别 ${resumeTags.size} 类技能，并生成 5 家推荐`);
}

function renderProfile() {
  const box = document.getElementById("resumeProfile");
  const labels = [...resumeTags].map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  box.innerHTML = resumeTags.size ? `已识别技能标签：${labels}<div class="muted" style="margin-top:6px">推荐排序会使用这些标签与岗位标签的重合度；原始简历文本不会写入导出 JSON。</div>` : "等待简历内容。未上传时将使用内置演示候选池。";
  document.getElementById("skillCount").textContent = resumeTags.size;
  document.getElementById("skillHint").textContent = state.resumeProfile?.label || "等待简历";
}
function renderCandidates() {
  const current = state.current.length === 5 ? state.current : chooseNextBatch();
  state.current = current;
  const checked = current.filter(x=>x.applied).length;
  document.getElementById("batchNo").textContent = state.batchIndex + 1;
  document.getElementById("batchLabel").textContent = `第 ${state.batchIndex + 1} 批`;
  document.getElementById("checkedCount").textContent = checked;
  document.getElementById("progressBar").style.width = `${checked / 5 * 100}%`;
  document.getElementById("candidateBody").innerHTML = current.map((x,i)=>`<tr>
    <td><label class="check"><input type="checkbox" data-apply="${i}" ${x.applied?"checked":""}>我已投递</label><small class="muted">${x.checkedAt ? `勾选于 ${escapeHtml(x.checkedAt)}` : ""}</small></td>
    <td><div class="company">${escapeHtml(x.company)}</div><div class="city">${escapeHtml(x.city)} · <span class="tag">${escapeHtml(x.region)}</span></div></td>
    <td><strong>${escapeHtml(x.role)}</strong></td>
    <td>${x.matches?.length ? `命中：${x.matches.map(m=>`<span class="tag">${escapeHtml(m)}</span>`).join("")}` : "等待简历关键词匹配"}</td>
    <td class="score">${x.score || 0}</td>
    <td><select data-status="${i}">${Object.entries(statusLabels).map(([key,label])=>`<option value="${key}" ${x.status===key?"selected":""}>${label}</option>`).join("")}</select><div style="margin-top:5px"><span class="${statusClass(x.status)}">${statusLabels[x.status]}</span></div></td>
    <td><a href="${escapeHtml(x.url)}" target="_blank" rel="noopener">官方入口 ↗</a></td>
  </tr>`).join("");
  document.querySelectorAll("input[data-apply]").forEach(el=>el.addEventListener("change", event=>toggleApplied(Number(event.target.dataset.apply), event.target.checked)));
  document.querySelectorAll("select[data-status]").forEach(el=>el.addEventListener("change", event=>updateStatus(Number(event.target.dataset.status), event.target.value)));
}
function toggleApplied(index, checked) {
  const item = state.current[index]; item.applied = checked; item.checkedAt = checked ? now() : ""; if (checked && item.status === "wait") item.status = "applied"; if (!checked && item.status === "applied") item.status = "wait";
  if (state.current.every(x=>x.applied)) { state.history.push(...state.current.map(x=>({...x, batch:state.batchIndex}))); state.batchIndex++; state.current = chooseNextBatch(); toast("本批 5 家已归档，下一批已载入"); }
  saveState(); renderAll();
}
function updateStatus(index, status) { const item=state.current[index]; item.status=status; if (status !== "wait") { item.applied=true; item.checkedAt=item.checkedAt || now(); } saveState(); renderAll(); }

function renderMail() {
  const mail = state.mail || [];
  document.getElementById("mailCount").textContent = mail.length;
  const list = document.getElementById("mailList");
  list.innerHTML = mail.length ? mail.map(m=>`<article class="mail-item"><div class="top"><strong>${escapeHtml(m.subject || "无主题")}</strong><span class="${statusClass(m.status || "other")}">${statusLabels[m.status] || "其他"}</span></div><small>${escapeHtml(m.sender)} · ${escapeHtml(m.date)}</small><p>${escapeHtml(m.snippet)}</p></article>`).join("") : "<p class='muted'>尚未同步邮件。</p>";
}
function matchMailToApplications() {
  for (const message of state.mail || []) {
    const text = `${message.subject || ""} ${message.sender || ""} ${message.snippet || ""}`.toLowerCase();
    for (const item of state.current) {
      if (text.includes(item.company.toLowerCase())) { item.status = message.status || item.status; item.applied = item.status !== "wait"; item.checkedAt = item.applied ? (item.checkedAt || now()) : item.checkedAt; }
    }
  }
}
async function loadProviders() {
  try { providers = await fetch("/api/providers").then(r=>r.json()); } catch { providers = {}; }
  const select = document.getElementById("provider");
  select.innerHTML = Object.entries(providers).map(([key,p])=>`<option value="${key}">${escapeHtml(p.label)}</option>`).join("");
  select.addEventListener("change", fillProvider); fillProvider();
}
function fillProvider() { const p=providers[document.getElementById("provider").value] || {}; document.getElementById("host").value=p.host || ""; document.getElementById("port").value=p.port || 993; document.getElementById("folder").value=p.folder || "INBOX"; document.getElementById("providerNote").textContent=p.authNote || ""; }
async function syncMail(payload) { const response = await fetch("/api/sync/imap", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}); const data=await response.json(); if(!response.ok) throw new Error(data.error || "邮箱同步失败"); return data; }
async function loadDemoMail() { const data=await fetch("/api/sync/mock",{method:"POST"}).then(r=>r.json()); state.mail=data.messages || []; matchMailToApplications(); saveState(); renderAll(); toast("已载入演示邮件"); }

function renderHistory() { document.getElementById("historyBody").innerHTML = state.history.length ? state.history.map(x=>`<tr><td>第 ${(x.batch || 0)+1} 批</td><td>${escapeHtml(x.company)}</td><td>${escapeHtml(x.role)}</td><td>${escapeHtml(x.checkedAt || "—")}</td><td><span class="${statusClass(x.status)}">${statusLabels[x.status] || "其他"}</span></td></tr>`).join("") : "<tr><td colspan='5' class='muted'>尚无已完成批次。</td></tr>"; }
function renderAll() { renderProfile(); renderCandidates(); renderMail(); renderHistory(); }

document.getElementById("resumeInput").addEventListener("change", async event=>{ const file=event.target.files?.[0]; if(!file)return; document.getElementById("resumeFileName").textContent=file.name; document.getElementById("resumeText").value=await file.text(); applyResumeText(document.getElementById("resumeText").value, file.name); });
document.getElementById("recommendBtn").addEventListener("click",()=>applyResumeText(document.getElementById("resumeText").value,"粘贴/导入的简历"));
document.getElementById("mailForm").addEventListener("submit",async event=>{ event.preventDefault(); const error=document.getElementById("mailError"); error.hidden=true; const form=new FormData(event.target); const payload=Object.fromEntries(form.entries()); payload.port=Number(payload.port); payload.sinceDays=Number(payload.sinceDays); payload.limit=Number(payload.limit); try { const data=await syncMail(payload); state.mail=data.messages || []; matchMailToApplications(); saveState(); renderAll(); document.getElementById("password").value=""; toast(`同步完成：${data.count || 0} 封`); } catch (err) { error.textContent=err.message; error.hidden=false; } });
document.getElementById("demoMailBtn").addEventListener("click",loadDemoMail);
document.getElementById("exportBtn").addEventListener("click",()=>{ const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`application-tracker-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href); });
document.getElementById("importInput").addEventListener("change",async event=>{ const file=event.target.files?.[0]; if(!file)return; try { const imported=JSON.parse(await file.text()); if(!Array.isArray(imported.current)) throw new Error("文件缺少 current 字段"); state=imported; resumeTags=new Set(state.resumeProfile?.tags || []); saveState(); renderAll(); toast("已导入本地进度"); } catch(err) { toast(`导入失败：${err.message}`); } });
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{ document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")); document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active")); tab.classList.add("active"); document.getElementById(tab.dataset.tab).classList.add("active"); }));

if (!state.current.length) { state.current = chooseNextBatch(); saveState(); }
renderAll(); loadProviders();
