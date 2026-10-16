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

const recommendationEngine = TrackerRecommendations;
let candidatePool = [...TrackerCatalog];
let companyProfiles = Object.fromEntries(candidatePool.map(item => [item.id, item.profile]));
const defaultPreferences = {priority:["大厂","央企","国企","知名企业","融资初创"], minFundingStage:"angel", requireFundingVerified:true, cities:[], regions:[]};
const fundingRank = {unknown:0, angel:1, A:2, B:3, C:4, listed:5};
function getPreferences(){ const p=state.preferences || {}; return {priority:Array.isArray(p.priority)&&p.priority.length?p.priority:defaultPreferences.priority, minFundingStage:p.minFundingStage || defaultPreferences.minFundingStage, requireFundingVerified:p.requireFundingVerified !== false, cities:Array.isArray(p.cities)?p.cities:[], regions:Array.isArray(p.regions)?p.regions:[]}; }
function eligibleByPreference(candidate){ const profile=companyProfiles[candidate.id] || {type:"知名企业",funding:"unknown",verified:false}; const pref=getPreferences(); if(!pref.priority.includes(profile.type)) return false; if(profile.type === "融资初创" && pref.requireFundingVerified && !profile.verified) return false; return (fundingRank[profile.funding] || 0) >= (fundingRank[pref.minFundingStage] || 1) || profile.type !== "融资初创"; }

const candidateKeywordHints = {
  zhito:["视觉","SLAM","感知","标定","3D","姿态","机器人","控制","IMU"], inovance:["AI","机器人","运动控制","嵌入式","C++","实时"], dreame:["视觉","机器人","智能算法","端侧","嵌入式"], xiaopeng:["智能驾驶","3D","视觉","机器人","感知","控制"], smartsens:["ISP","图像","相机","机器视觉","C++"], xag:["视觉","机器人","导航","无人机","IMU","控制"], tcl:["AI","图像","机器人","嵌入式","ISP"], zte:["AI","软件","端侧","嵌入式","大模型"], quectel:["嵌入式","物联网","AI","通信","视觉"], "cmcc-hz":["具身智能","机器人","大模型","推理"], gac:["自动驾驶","3D","视觉","车辆控制","感知"], ehang:["飞行器","无人机","视觉","导航","控制"], sensetime:["计算机视觉","多模态","端侧 AI","大模型"], thundersoft:["计算机视觉","嵌入式","边缘智能","C++"], huaqin:["相机","影像","图像","ISP","嵌入式"], nio:["智能驾驶","视觉感知","3D","机器人"]
};

let providers = {};
let state = loadState();
if (Array.isArray(state.customCandidates)) {
  for (const item of state.customCandidates) {
    try { const candidate = validateCatalogEntry(item); if (!candidatePool.some(x => x.id === candidate.id || recommendationEngine.normalize(x.company) === recommendationEngine.normalize(candidate.company))) candidatePool.push(candidate); } catch { /* Leave invalid imported catalog rows out. */ }
  }
  companyProfiles = Object.fromEntries(candidatePool.map(item => [item.id, item.profile]));
}
recommendationEngine.migrateState(state, candidatePool);
let resumeTags = new Set(state.resumeProfile?.tags || []);
let resumeTerms = new Set(state.resumeProfile?.terms || []);

function freshCandidate(candidate, score = 0, matches = []) { return {...candidate, score, matches, status:"wait", applied:false, checkedAt:""}; }
function defaultState() { return {current: [], batchIndex: 0, history: [], appliedIds: [], mail: [], preferences: {...defaultPreferences}, resumeProfile: {tags: [], terms: [], label: "未上传简历", summary: ""}}; }
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const saved = JSON.parse(raw || "null");
    if (!saved || !Array.isArray(saved.current)) return defaultState();
    if (saved.schemaVersion !== 3 && !localStorage.getItem(`${STORAGE_KEY}_before_dedup3`)) {
      try { localStorage.setItem(`${STORAGE_KEY}_before_dedup3`, raw); } catch { /* Keep loaded data even when backup storage is full. */ }
    }
    return saved;
  } catch { return defaultState(); }
}
function saveState() { const safe = {...state, schemaVersion:3, appliedIds:Array.isArray(state.appliedIds)?state.appliedIds:[], preferences:getPreferences(), resumeProfile: {tags:[...resumeTags], terms:[...resumeTerms], label: state.resumeProfile?.label || "已解析简历", summary: state.resumeProfile?.summary || ""}}; localStorage.setItem(STORAGE_KEY, JSON.stringify(safe)); }
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
function extractResumeTerms(text) {
  const source = text || "";
  const found = new Set();
  const add = value => { const term = value.trim().replace(/^[`*_#：:、，,。；;（）()\[\]{}]+|[`*_#：:、，,。；;（）()\[\]{}]+$/g, ""); if (term.length >= 2 && term.length <= 32 && !/^(项目|经历|技能|教育背景|科研成果|核心优势|负责|熟练|掌握|具备|能够|以及|进行|系统)$/.test(term)) found.add(term); };
  for (const match of source.matchAll(/`([^`]+)`/g)) add(match[1]);
  for (const match of source.matchAll(/\*\*([^*]+)\*\*/g)) add(match[1]);
  for (const match of source.matchAll(/\b[A-Za-z][A-Za-z0-9+#./-]{1,31}\b/g)) add(match[0]);
  for (const match of source.matchAll(/[一-龥]{2,12}(?:算法|模型|系统|标定|控制|融合|部署|重建|识别|检测|跟踪|推理|优化|通信|导航|测量|感知)/g)) add(match[0]);
  return found;
}
function scoreCandidates(tags, terms) {
  const pref=getPreferences();
  return candidatePool.map(candidate => {
    if (!eligibleByPreference(candidate)) return null;
    const profile=companyProfiles[candidate.id] || {type:"知名企业"};
    const tagMatches = candidate.tags.filter(tag => tags.has(tag));
    const hints = candidateKeywordHints[candidate.id] || candidate.keywords || candidate.role.split(/\s*\/\s*/);
    const termMatches = hints.filter(hint => [...terms].some(term => term.toLowerCase().includes(hint.toLowerCase()) || hint.toLowerCase().includes(term.toLowerCase())));
    const matches = [...new Set([...tagMatches, ...termMatches.map(term => `术语:${term}`)])].slice(0, 10);
    const priorityIndex = pref.priority.indexOf(profile.type);
    const priorityScore = priorityIndex < 0 ? 0 : (pref.priority.length - priorityIndex) * 8;
    const cityMatches = pref.cities.filter(city => candidate.city.includes(city));
    const regionMatches = pref.regions.filter(region => candidate.region.includes(region));
    const locationMatches = [...cityMatches.map(city => `城市:${city}`), ...regionMatches.map(region => `地区:${region}`)];
    const locationScore = cityMatches.length * 35 + regionMatches.length * 25;
    const score = tagMatches.length * 12 + termMatches.length * 5 + priorityScore + locationScore + (candidate.region.includes("珠三角") || candidate.region.includes("长三角") ? 5 : 0);
    return freshCandidate(candidate, score, [...new Set([...matches, ...locationMatches])].slice(0, 10));
  }).filter(Boolean).sort((a,b)=>b.score-a.score || a.company.localeCompare(b.company,"zh-CN"));
}
function chooseNextBatch(preserveCurrent = false) {
  return recommendationEngine.selectBatch(scoreCandidates(resumeTags, resumeTerms), state, {preserveCurrent});
}
function refreshRecommendations(preserveCurrent = true) {
  state.current = chooseNextBatch(preserveCurrent);
}
function applyResumeText(text, label) {
  resumeTags = extractResumeTags(text);
  resumeTerms = extractResumeTerms(text);
  const summary = [...resumeTerms].slice(0, 14).join("、");
  state.resumeProfile = {tags:[...resumeTags], terms:[...resumeTerms], label:label || "已解析简历", summary};
  state.current = chooseNextBatch();
  state.batchIndex = state.history.length ? Math.floor(state.history.length / 5) : 0;
  saveState(); renderAll();
  toast(`已提取简历信息；当前有 ${state.current.length} 家未投递候选`);
}

function renderProfile() {
  const box = document.getElementById("resumeProfile");
  const labels = [...resumeTags].map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  const terms = [...resumeTerms].slice(0, 24).map(term => `<span class="tag">${escapeHtml(term)}</span>`).join("");
  box.innerHTML = resumeTags.size || resumeTerms.size ? `<div><strong>分类标签：</strong>${labels || "未命中预设分类"}</div><div style="margin-top:7px"><strong>自动提取术语：</strong>${terms || "未提取到技术术语"}</div><div class="muted" style="margin-top:8px">分类标签用于稳定排序，技术术语用于补充匹配；两者都来自当前简历文本，原始简历不会写入导出 JSON。</div>` : "等待简历内容。程序会提取分类标签和原文技术术语；未上传时将使用内置演示候选池。";
  document.getElementById("skillCount").textContent = resumeTags.size;
  document.getElementById("skillHint").textContent = `${resumeTerms.size} 个术语 · ${state.resumeProfile?.label || "等待简历"}`;
}

function renderCandidates() {
  const current = state.current;
  const remaining = scoreCandidates(resumeTags, resumeTerms).filter(item => !recommendationEngine.isProcessed(item, state)).length;
  const checked = state.processedCompanies.length;
  document.getElementById("batchNo").textContent = state.batchIndex + 1;
  document.getElementById("batchLabel").textContent = `${current.length} 家未投递候选`;
  document.getElementById("checkedCount").textContent = checked;
  document.getElementById("progressBar").style.width = `${Math.min(100, checked / candidatePool.length * 100)}%`;
  document.getElementById("poolSummary").textContent = `目录 ${candidatePool.length} 家 · 已记录/排除 ${checked} 家 · 符合偏好且未投递 ${remaining} 家`;
  const exhaustion = document.getElementById("poolExhaustion");
  exhaustion.hidden = current.length === 5;
  exhaustion.textContent = current.length ? `符合条件且未投递的企业仅剩 ${current.length} 家。其余为待补充席位；不会重新推荐已投递企业。可导入新企业目录或调整偏好。` : "当前目录中符合偏好的企业已全部处理。请导入新企业目录或调整偏好；已投递企业不会循环出现。";
  document.getElementById("candidateBody").innerHTML = current.map((x,i)=>`<tr>
    <td><label class="check"><input type="checkbox" data-apply="${i}" ${x.applied?"checked":""}>我已投递</label><small class="muted">${x.checkedAt ? `勾选于 ${escapeHtml(x.checkedAt)}` : ""}</small></td>
    <td><div class="company">${escapeHtml(x.company)}</div><div class="city">${escapeHtml(x.city)} · <span class="tag">${escapeHtml(x.region)}</span></div><div><span class="tag">${escapeHtml((companyProfiles[x.id]||{}).type || "知名企业")}</span><span class="tag">${escapeHtml((companyProfiles[x.id]||{}).fundingLabel || "阶段未核实")}</span></div></td>
    <td><strong>${escapeHtml(x.role)}</strong><div class="muted">建议检索方向，非实时在招职位</div></td>
    <td>${x.matches?.length ? `命中：${x.matches.map(m=>`<span class="tag">${escapeHtml(m)}</span>`).join("")}` : "等待简历摘要匹配"}</td>
    <td class="score">${x.score || 0}</td>
    <td><select data-status="${i}">${Object.entries(statusLabels).map(([key,label])=>`<option value="${key}" ${x.status===key?"selected":""}>${label}</option>`).join("")}</select><div style="margin-top:5px"><span class="${statusClass(x.status)}">${statusLabels[x.status]}</span></div></td>
    <td><a href="${escapeHtml(x.url)}" target="_blank" rel="noopener">招聘入口 ↗</a><div class="muted">${x.reviewedAt ? `入口核对：${escapeHtml(x.reviewedAt)}` : "历史目录：开放状态待确认"}</div></td>
  </tr>`).join("") + Array.from({length:5-current.length}, (_, i) => `<tr class="vacancy"><td>—</td><td colspan="6">待补充席位 ${i+1}：暂无符合偏好且未投递的新企业，可在下方补充目录。</td></tr>`).join("");
  document.querySelectorAll("input[data-apply]").forEach(el=>el.addEventListener("change", event=>toggleApplied(Number(event.target.dataset.apply), event.target.checked)));
  document.querySelectorAll("select[data-status]").forEach(el=>el.addEventListener("change", event=>updateStatus(Number(event.target.dataset.status), event.target.value)));
}
function toggleApplied(index, checked) {
  if (!checked || !state.current[index]) return;
  const company = state.current[index].company;
  recommendationEngine.completeApplication(state, state.current[index], candidatePool);
  refreshRecommendations(); saveState(); renderAll();
  toast(`${company} 已归档并排除，已补入新的候选`);
}
function updateStatus(index, status) {
  if (status === "wait" || !state.current[index]) return;
  recommendationEngine.completeApplication(state, state.current[index], candidatePool, status);
  refreshRecommendations(); saveState(); renderAll();
  toast("投递状态已归档，该企业不再推荐");
}

function renderMail() {
  const mail = state.mail || [];
  document.getElementById("mailCount").textContent = mail.length;
  const list = document.getElementById("mailList");
  list.innerHTML = mail.length ? mail.map(m=>`<article class="mail-item"><div class="top"><strong>${escapeHtml(m.subject || "无主题")}</strong><span class="${statusClass(m.status || "other")}">${statusLabels[m.status] || "其他"}</span></div><small>${escapeHtml(m.sender)} · ${escapeHtml(m.date)}</small><p>${escapeHtml(m.snippet)}</p></article>`).join("") : "<p class='muted'>尚未同步邮件。</p>";
}
function matchMailToApplications() {
  recommendationEngine.ingestMail(state, candidatePool);
  refreshRecommendations();
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
function renderPreferences(){ const p=getPreferences(); for(const [id,label] of [["prefLarge","大厂"],["prefCentral","央企"],["prefState","国企"],["prefKnown","知名企业"],["prefStartup","融资初创"]]){ const el=document.getElementById(id); if(el) el.checked=p.priority.includes(label); } const min=document.getElementById("prefFunding"); if(min) min.value=p.minFundingStage; const verified=document.getElementById("prefVerified"); if(verified) verified.checked=p.requireFundingVerified; const citySelect=document.getElementById("citySelect"); if(citySelect) [...citySelect.options].forEach(option=>option.selected=p.cities.includes(option.value)); for(const [id,label] of [["prefYangtze","长三角"],["prefPearl","珠三角"],["prefGba","粤港澳大湾区"],["prefJingjinji","京津冀"],["prefChengyu","成渝"]]){ const el=document.getElementById(id); if(el) el.checked=p.regions.includes(label); } const custom=document.getElementById("customRegion"); if(custom) custom.value=p.regions.filter(region=>!["长三角","珠三角","粤港澳大湾区","京津冀","成渝"].includes(region)).join("、"); }
function renderExclusions() {
  document.getElementById("processedList").innerHTML = state.processedCompanies.map(record => `<span class="tag" title="${escapeHtml(record.source)}">${escapeHtml(record.company)} · ${escapeHtml(statusLabels[record.status] || "已投递")}</span>`).join("") || "尚未登记已投递企业";
}
function renderAll() { renderProfile(); renderCandidates(); renderMail(); renderHistory(); renderPreferences(); renderExclusions(); }

document.getElementById("resumeInput").addEventListener("change", async event=>{ const file=event.target.files?.[0]; if(!file)return; document.getElementById("resumeFileName").textContent=file.name; document.getElementById("resumeText").value=await file.text(); applyResumeText(document.getElementById("resumeText").value, file.name); });
document.getElementById("recommendBtn").addEventListener("click",()=>applyResumeText(document.getElementById("resumeText").value,"粘贴/导入的简历"));
document.getElementById("mailForm").addEventListener("submit",async event=>{ event.preventDefault(); const error=document.getElementById("mailError"); error.hidden=true; const form=new FormData(event.target); const payload=Object.fromEntries(form.entries()); payload.port=Number(payload.port); payload.sinceDays=Number(payload.sinceDays); payload.limit=Number(payload.limit); try { const data=await syncMail(payload); state.mail=data.messages || []; matchMailToApplications(); saveState(); renderAll(); document.getElementById("password").value=""; toast(`同步完成：${data.count || 0} 封`); } catch (err) { error.textContent=err.message; error.hidden=false; } });
document.getElementById("demoMailBtn").addEventListener("click",loadDemoMail);
document.getElementById("exportBtn").addEventListener("click",()=>{ const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.style.display="none"; a.href=URL.createObjectURL(blob); a.download=`application-tracker-${new Date().toISOString().slice(0,10)}.json`; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },1000); });
document.getElementById("importInput").addEventListener("change",async event=>{ const file=event.target.files?.[0]; if(!file)return; try { const imported=JSON.parse(await file.text()); if(!Array.isArray(imported.current)) throw new Error("文件缺少 current 字段"); state=recommendationEngine.ensureState(imported); recommendationEngine.migrateState(state, candidatePool); resumeTags=new Set(state.resumeProfile?.tags || []); resumeTerms=new Set(state.resumeProfile?.terms || []); refreshRecommendations(); saveState(); renderAll(); toast("已导入本地进度"); } catch(err) { toast(`导入失败：${err.message}`); } });
document.getElementById("applyPrefsBtn")?.addEventListener("click",()=>{ const selected=[]; for(const [id,label] of [["prefLarge","大厂"],["prefCentral","央企"],["prefState","国企"],["prefKnown","知名企业"],["prefStartup","融资初创"]]) if(document.getElementById(id)?.checked) selected.push(label); const cities=[...(document.getElementById("citySelect")?.selectedOptions || [])].map(option=>option.value).slice(0,5); const regions=[]; for(const [id,label] of [["prefYangtze","长三角"],["prefPearl","珠三角"],["prefGba","粤港澳大湾区"],["prefJingjinji","京津冀"],["prefChengyu","成渝"]]) if(document.getElementById(id)?.checked) regions.push(label); const custom=(document.getElementById("customRegion")?.value || "").split(/[、,，]/).map(x=>x.trim()).filter(Boolean); state.preferences={priority:selected.length?selected:defaultPreferences.priority,minFundingStage:document.getElementById("prefFunding").value,requireFundingVerified:document.getElementById("prefVerified").checked,cities,regions:[...new Set([...regions,...custom])]}; state.current=chooseNextBatch(); saveState(); renderAll(); toast("偏好已应用，城市和地区优先级已生效"); });
document.getElementById("recordAppliedBtn").addEventListener("click", () => {
  const input = document.getElementById("appliedCompanyInput");
  const names = input.value.split(/[\n\r、,，;；]+/).map(value => value.trim()).filter(Boolean);
  if (!names.length) { toast("请填写企业名称，每行一家"); return; }
  recommendationEngine.addCompanies(state, names, candidatePool);
  refreshRecommendations(); saveState(); renderAll(); input.value = "";
  toast(`已登记 ${names.length} 家已投递企业`);
});
function validateCatalogEntry(item) {
  for (const key of ["company","city","role","url"]) if (typeof item[key] !== "string" || !item[key].trim()) throw new Error(`目录缺少 ${key}`);
  const url = new URL(item.url);
  if (!["http:","https:"].includes(url.protocol)) throw new Error("招聘入口必须是 HTTP/HTTPS 地址");
  const profile = item.profile || {type:item.type || "知名企业", funding:item.funding || "unknown", verified:false, fundingLabel:"用户导入：待核实"};
  if (!defaultPreferences.priority.includes(profile.type)) throw new Error("不支持的企业类型");
  return {...item, id:item.id || `custom-${recommendationEngine.normalize(item.company)}`, company:item.company.trim(),
    aliases:Array.isArray(item.aliases) ? item.aliases.filter(x => typeof x === "string") : [],
    tags:Array.isArray(item.tags) ? item.tags.filter(x => typeof x === "string") : [], region:item.region || "", profile, url:url.href};
}
document.getElementById("catalogInput").addEventListener("change", async event => {
  const file=event.target.files?.[0]; if (!file) return;
  try {
    const parsed=JSON.parse(await file.text()); const rows=Array.isArray(parsed) ? parsed : parsed.companies;
    if (!Array.isArray(rows) || rows.length > 1000) throw new Error("请导入最多 1000 家的 JSON 数组或 companies 数组");
    const validated=rows.map(validateCatalogEntry); let added=0;
    for (const row of validated) {
      if (candidatePool.some(x => x.id===row.id || recommendationEngine.normalize(x.company)===recommendationEngine.normalize(row.company))) continue;
      candidatePool.push(row); companyProfiles[row.id]=row.profile;
      state.customCandidates=[...(state.customCandidates || []), row]; added++;
    }
    recommendationEngine.migrateState(state, candidatePool); refreshRecommendations(); saveState(); renderAll();
    toast(`目录新增 ${added} 家，已自动排除已投递企业`);
  } catch(error) { toast(`目录导入失败：${error.message}`); }
  event.target.value="";
});
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{ document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")); document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active")); tab.classList.add("active"); document.getElementById(tab.dataset.tab).classList.add("active"); }));

matchMailToApplications();
refreshRecommendations();
saveState(); renderAll(); loadProviders();


