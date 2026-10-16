const test = require('node:test');
const assert = require('node:assert/strict');
const engine = require('../web/recommendations.js');
const catalog = require('../web/catalog.js');
const freshState = () => ({current:[], history:[], appliedIds:[], mail:[], batchIndex:0});

test('finite catalog: consume through exhaustion without recycling even one company', () => {
  const state = freshState();
  const delivered = new Set();
  for (let attempt = 0; attempt < 40; attempt++) {
    state.current = engine.selectBatch(catalog, state);
    if (!state.current.length) break;
    assert.ok(state.current.length <= 5);
    for (const item of [...state.current]) {
      assert.ok(!delivered.has(item.id), `repeated ${item.id}`);
      delivered.add(item.id);
      engine.completeApplication(state, item, catalog);
    }
  }
  assert.equal(delivered.size, catalog.length);
  assert.deepEqual(engine.selectBatch(catalog, state), []);
});

test('27 entries: final two stay as two; no padding with applied companies', () => {
  const state = freshState();
  engine.addCompanies(state, catalog.slice(0,25).map(x => x.company), catalog);
  const batch = engine.selectBatch(catalog, state);
  assert.equal(batch.length,2);
  assert.deepEqual(batch.map(x=>x.id), catalog.slice(25).map(x=>x.id));
});

test('old batch 7 snapshots migrate history and partial current checkboxes', () => {
  const state = {batchIndex:6, current:[{...catalog[0],applied:true,status:'applied'},catalog[1]],
    history:[...catalog.slice(2,10), ...catalog.slice(2,10)].map(x=>({...x,applied:true,status:'applied'}))};
  engine.migrateState(state,catalog);
  const batch = engine.selectBatch(catalog,state);
  assert.ok(!batch.some(x=>[catalog[0].id,...catalog.slice(2,10).map(x=>x.id)].includes(x.id)));
  assert.equal(state.processedCompanies.length,9);
  assert.equal(state.schemaVersion,3);
});

test('NIO rejection and XPeng shorthand exclude canonical companies after reload', () => {
  const state = freshState();
  state.mail = [
    {subject:'【蔚来NIO】感谢投递',status:'applied',date:'2026-09-23T09:00:00Z'},
    {subject:'【NIO蔚来】感谢投递',status:'rejected',date:'2026-09-24T09:00:00Z'},
    {subject:'小鹏笔试邀请',status:'written_test',date:'2026-09-25T09:00:00Z'}];
  engine.migrateState(state,catalog);
  assert.equal(state.processedCompanies.find(x=>x.id==='nio').status,'rejected');
  assert.ok(!engine.selectBatch(catalog,state).some(x=>['nio','xiaopeng'].includes(x.id)));
  const reloaded = JSON.parse(JSON.stringify(state));
  engine.migrateState(reloaded,catalog);
  assert.deepEqual(new Set(reloaded.appliedIds),new Set(state.appliedIds));
});

test('body-only mentions and advertising do not exclude companies', () => {
  const state = freshState();
  state.mail = [{subject:'智联推荐 小鹏汽车岗位',status:'other'},
    {subject:'面试邀请',sender:'other@example.com',snippet:'使用小鹏汽车产品作案例',status:'interview'}];
  engine.migrateState(state,catalog);
  assert.ok(!state.appliedIds.includes('xiaopeng'));
});

test('process one company, refill immediately and preserve four untouched rows', () => {
  const state = freshState();
  state.current=engine.selectBatch(catalog,state);
  const [done,...others]=state.current;
  engine.completeApplication(state,done,catalog);
  state.current=engine.selectBatch(catalog,state);
  assert.equal(state.current.length,5);
  assert.ok(!state.current.some(x=>x.id===done.id));
  assert.deepEqual(state.current.slice(0,4).map(x=>x.id),others.map(x=>x.id));
});

test('manual names unknown to old catalog still exclude newly imported companies', () => {
  const state = freshState();
  engine.addCompanies(state,['未来示例企业'],catalog);
  const expanded=[...catalog,{id:'new',company:'未来示例企业有限公司',aliases:[]}];
  assert.ok(engine.isProcessed(expanded.at(-1),state));
});

test('company aliases exclude renamed IDs and legal-suffix variants', () => {
  const state = freshState();
  engine.addCompanies(state,['小鹏','NIO','思特威'],catalog);
  assert.ok(engine.isProcessed(catalog.find(x=>x.id==='xiaopeng'),state));
  assert.ok(engine.isProcessed(catalog.find(x=>x.id==='smartsens'),state));
  assert.ok(engine.isProcessed({...catalog.find(x=>x.id==='nio'),id:'new-nio-id'},state));
});

test('changing preference, reuploading resume, and importing backup cannot revive applied IDs', () => {
  const state = freshState(); engine.addCompanies(state,catalog.slice(0,16).map(x=>x.company),catalog);
  for(const ranked of [catalog,[...catalog].reverse(),catalog.slice(0,20)]) {
    const snapshot=JSON.parse(JSON.stringify(state)); engine.migrateState(snapshot,catalog);
    const batch=engine.selectBatch(ranked,snapshot,{preserveCurrent:false});
    assert.ok(batch.every(x=>!catalog.slice(0,16).some(old=>old.id===x.id)));
  }
});

test('a fresh catalog addition after exhaustion produces genuinely new recommendations', () => {
  const state=freshState(); engine.addCompanies(state,catalog.map(x=>x.company),catalog);
  assert.equal(engine.selectBatch(catalog,state).length,0);
  const added={id:'future',company:'合成新增企业'};
  assert.deepEqual(engine.selectBatch([...catalog,added],state).map(x=>x.id),['future']);
});
