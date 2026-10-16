(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.TrackerRecommendations = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const progress = new Set(["applied", "assessment", "written_test", "interview", "offer", "rejected"]);
  const normalize = value => String(value || "").normalize("NFKC").toLowerCase()
    .replace(/(?:科技集团股份有限公司|集团股份有限公司|科技股份有限公司|股份有限公司|有限责任公司|有限公司)$/u, "")
    .replace(/[\s\p{P}\p{S}\u200b-\u200d\ufeff]/gu, "");
  const names = candidate => [candidate.company, ...(candidate.aliases || [])].map(normalize).filter(Boolean);
  function resolveCompany(value, catalog) {
    if (!value) return null;
    const key = normalize(value);
    return catalog.find(candidate => candidate.id === value || names(candidate).includes(key)) || null;
  }
  function ensureState(state) {
    for (const key of ["current", "history", "appliedIds", "processedCompanies", "mail"]) {
      if (!Array.isArray(state[key])) state[key] = [];
    }
    if (!Number.isInteger(state.batchIndex) || state.batchIndex < 0) state.batchIndex = 0;
    return state;
  }
  function markProcessed(state, item, catalog, source = "manual", eventAt = "") {
    ensureState(state);
    const canonical = resolveCompany(item.id, catalog) || resolveCompany(item.company, catalog);
    const company = canonical?.company || String(item.company || item.id || "").trim();
    const id = canonical?.id || item.id || "";
    const key = normalize(company);
    if (!key) return;
    const existing = state.processedCompanies.find(record => record.key === key);
    const entry = {key, id, company, status:progress.has(item.status) ? item.status : "applied",
      source, eventAt:eventAt || item.checkedAt || ""};
    if (!existing) state.processedCompanies.push(entry);
    else {
      const oldTime = Date.parse(existing.eventAt) || 0;
      const newTime = Date.parse(entry.eventAt) || 0;
      if (source === "manual" || (existing.source !== "manual" && newTime >= oldTime)) Object.assign(existing, entry);
    }
    if (id && !state.appliedIds.includes(id)) state.appliedIds.push(id);
  }
  function matchesMail(candidate, message) {
    // Only company names in the subject/sender and company-owned sender domains count.
    // Do not exclude companies mentioned incidentally in the body or advertising links.
    const text = `${message.subject || ""} ${message.sender || ""}`.toLowerCase();
    const companyMatch = [candidate.company, ...(candidate.aliases || [])].some(alias => {
      const value = String(alias).toLowerCase();
      if (!value) return false;
      if (/^[a-z0-9 .+&-]+$/i.test(value)) {
        const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`, "i").test(text);
      }
      return normalize(text).includes(normalize(value));
    });
    const senderAddress = String(message.sender || "").match(/[a-z0-9._%+-]+@([a-z0-9.-]+)/i)?.[1]?.toLowerCase();
    return companyMatch || (candidate.domains || []).some(domain => senderAddress === domain || senderAddress?.endsWith(`.${domain}`));
  }
  function ingestMail(state, catalog) {
    ensureState(state);
    const messages = [...state.mail].sort((a, b) => (Date.parse(a.date) || 0) - (Date.parse(b.date) || 0));
    for (const message of messages) {
      if (!progress.has(message.status)) continue;
      for (const candidate of catalog) {
        if (matchesMail(candidate, message)) markProcessed(state, {...candidate, status:message.status}, catalog, "mail", message.date || "");
      }
    }
    return state;
  }
  function migrateState(state, catalog) {
    ensureState(state);
    for (const id of [...state.appliedIds]) {
      const candidate = resolveCompany(id, catalog);
      if (candidate) markProcessed(state, {...candidate, status:"applied"}, catalog, "legacy");
    }
    for (const item of [...state.history, ...state.current]) {
      if (item.applied || progress.has(item.status)) markProcessed(state, item, catalog, "legacy", item.checkedAt || "");
    }
    ingestMail(state, catalog);
    state.schemaVersion = 3;
    return state;
  }
  function isProcessed(candidate, state) {
    const keys = new Set(names(candidate));
    return (state.appliedIds || []).includes(candidate.id) || (state.processedCompanies || []).some(record =>
      record.id === candidate.id || keys.has(record.key) || keys.has(normalize(record.company))) ||
      (state.history || []).some(item => item.id === candidate.id || keys.has(normalize(item.company)));
  }
  function selectBatch(ranked, state, {size = 5, preserveCurrent = true} = {}) {
    const candidates = ranked.filter(candidate => !isProcessed(candidate, state));
    const selected = [];
    const seen = new Set();
    function append(candidate) {
      const key = normalize(candidate.company);
      if (selected.length >= size || seen.has(key) || isProcessed(candidate, state)) return;
      selected.push({...candidate, status:"wait", applied:false, checkedAt:""});
      seen.add(key);
    }
    if (preserveCurrent) {
      for (const current of state.current || []) {
        const candidate = candidates.find(item => item.id === current.id);
        if (candidate) append(candidate);
      }
    }
    for (const candidate of candidates) append(candidate);
    // No recycled candidates here: exhaustion returns 0..4 genuine unprocessed companies.
    return selected;
  }
  function completeApplication(state, item, catalog, status = "applied", eventAt = new Date().toISOString()) {
    ensureState(state);
    const record = {...item, status, applied:true, checkedAt:eventAt, batch:state.batchIndex};
    markProcessed(state, record, catalog, "manual", eventAt);
    const previous = state.history.find(row => normalize(row.company) === normalize(item.company));
    if (previous) Object.assign(previous, record);
    else state.history.push(record);
    state.current = state.current.filter(row => row.id !== item.id && normalize(row.company) !== normalize(item.company));
    state.batchIndex = Math.floor(state.history.length / 5);
    return state;
  }
  function addCompanies(state, values, catalog) {
    for (const value of values) {
      const canonical = resolveCompany(value, catalog);
      markProcessed(state, {...(canonical || {company:value}), status:"applied"}, catalog, "manual", new Date().toISOString());
    }
    return state;
  }
  return {progress, normalize, resolveCompany, ensureState, markProcessed, matchesMail,
    ingestMail, migrateState, isProcessed, selectBatch, completeApplication, addCompanies};
});
