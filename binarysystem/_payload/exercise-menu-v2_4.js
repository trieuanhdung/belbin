function installExerciseMenuV24() {
  'use strict';
  // Expose the two new worksheets as named exercises, not only dropdown options.
  const routes = {
    'add-two': {topic:'operations', mode:'add', title:'Add two numbers', formula:'A + B = C', description:'Seven-bit columns, carries and a denary check.'},
    'add-three': {topic:'operations', mode:'add3', title:'Add three numbers', formula:'A + B + C = D', description:'Three random seven-bit registers. Work through each column.', featured:true},
    'multiply-shift': {topic:'operations', mode:'multiply', title:'Multiply using SHIFT', formula:'A × 2 / 4 / 8', description:'Choose the correct left shift and calculate the result.'},
    'divide-shift': {topic:'operations', mode:'divide', title:'Divide using SHIFT', formula:'A ÷ 2 / 4 / 8', description:'Choose the correct right shift and calculate the result.'},
    'negate-invert': {topic:'twos', mode:'negate-invert', title:'Negate: invert, then add 1', formula:'+A → −A', description:'Method 1: invert every bit, then add binary 1.'},
    'negate-shortcut': {topic:'twos', mode:'negate-shortcut', title:'Negate: keep the first 1', formula:'+A → −A', description:'Method 2: scan from the right; keep through the first 1.'},
    'subtract-two': {topic:'twos', mode:'subtract', title:'Subtract two numbers', formula:'A − B = A + (−B)', description:'Make the two’s complement of B, then add it to A.', featured:true}
  };
  const style = document.createElement('style');
  style.id = 'rgsv-exercise-menu-v24';
  style.textContent = `
.ex-menu{margin:0 0 24px;padding:19px 20px 20px;background:#fff;border:1px solid var(--line);border-radius:13px}
.ex-menu-heading{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:13px;flex-wrap:wrap}
.ex-menu-heading h2{font-size:14px;letter-spacing:0;margin:0}.ex-menu-heading p{font-size:10px;color:var(--muted);margin:0}
.ex-menu-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.ex-menu-grid.ex-three{grid-template-columns:repeat(3,minmax(0,1fr))}
.ex-tile{display:flex;align-items:flex-start;flex-direction:column;position:relative;gap:7px;min-height:139px;width:100%;padding:15px 13px;text-align:left;border:1px solid var(--line);border-radius:10px;background:#f9fbfd;color:var(--ink);white-space:normal}
.ex-tile:hover{background:var(--gold-light);border-color:#c7ab70}.ex-tile.ex-featured{border-color:#dac597;background:#fcf8ef}
.ex-tile.ex-active{background:#edf7f4;border:2px solid var(--teal);padding:14px 12px}.ex-tile strong{font-size:12px;line-height:1.45}
.ex-formula{font:14px/1.6 var(--mono);color:var(--navy);letter-spacing:-.2px}.ex-description{font-size:10px;line-height:1.65;color:var(--muted)}
.ex-state{font-size:8px;letter-spacing:.9px;font-weight:700;color:#8b6c2c;text-transform:uppercase;min-height:12px}.ex-active .ex-state{color:var(--teal)}
.nav-exercise{display:flex;align-items:center;gap:8px;width:calc(100% - 26px);margin:1px 0 9px 26px;padding:7px 10px;border:0;border-left:1px solid #ceab6370;border-radius:0 6px 6px 0;background:transparent;color:#eadbbd;text-align:left;font-size:10px}
.nav-exercise:hover,.nav-exercise.ex-active{background:#ffffff12;color:white}.nav-exercise .ex-nav-arrow{color:#ceab63;font-size:13px}
@media(max-width:1240px){.ex-menu-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ex-tile{min-height:124px}}
@media(max-width:740px){.ex-menu{padding:16px 13px}.ex-menu-grid,.ex-menu-grid.ex-three{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.ex-tile{padding:12px 10px;min-height:139px}.ex-tile.ex-active{padding:11px 9px}.ex-tile strong{font-size:11px}.ex-formula{font-size:12px}.ex-description{font-size:9px}.ex-menu-grid.ex-three .ex-featured{grid-column:1/-1;min-height:110px}.nav-exercise{display:none}.ex-menu-heading p{font-size:9px}}
@media print{.ex-menu,.nav-exercise{display:none!important}}
`;
  document.head.appendChild(style);
  const selectedRoute = () => Object.keys(routes).find(slug => {
    const r=routes[slug];return state.tab==='practice' && state.topic===r.topic && state.modes[r.topic]===r.mode;
  });
  const validHash = () => {
    const slug=location.hash.slice(1);return Object.hasOwn(routes,slug)?slug:null;
  };
  function setHash(slug) {
    try {
      const suffix=slug?'#'+slug:'';
      if(location.hash!==suffix)history.replaceState(null,'',location.pathname+location.search+suffix);
    } catch (_) { /* Exercise navigation also works when local-file history is unavailable. */ }
  }
  function syncHash() {
    const slug=selectedRoute();
    if(slug)setHash(slug);else if(validHash())setHash(null);
  }
  function selectExercise(slug, render=true) {
    if(!Object.hasOwn(routes,slug))return false;
    const r=routes[slug],wasMode=state.modes[r.topic];
    state.topic=r.topic;state.tab='practice';state.modes[r.topic]=r.mode;
    const isNegation=r.mode.startsWith('negate-');
    const existing=isNegation?state.negationDrill?.method===r.mode:state.practice[r.topic]?.q?.type===r.mode;
    if(wasMode!==r.mode||!existing)newPractice(r.topic);
    setHash(slug);
    if(render){paint('exercise-'+slug);document.getElementById('exercise-menu')?.scrollIntoView({block:'start',behavior:'instant'});}
    return true;
  }
  function menu() {
    const entries=Object.entries(routes).filter(([,r])=>r.topic===state.topic);
    if(!entries.length)return '';
    const active=selectedRoute();
    return `<section class="ex-menu" id="exercise-menu" aria-labelledby="exercise-menu-title"><div class="ex-menu-heading"><h2 id="exercise-menu-title">Choose a practice exercise</h2><p>Click an exercise to open its own random question.</p></div><div class="ex-menu-grid ${entries.length===3?'ex-three':''}">${entries.map(([slug,r])=>`<button type="button" id="exercise-${slug}" class="ex-tile ${r.featured?'ex-featured':''} ${active===slug?'ex-active':''}" data-action="open-exercise" data-exercise="${slug}" aria-pressed="${active===slug}"><span class="ex-state">${active===slug?'Current exercise':r.featured?'Extra exercise':'Practice'}</span><strong>${esc(r.title)}</strong><span class="ex-formula">${esc(r.formula)}</span><span class="ex-description">${esc(r.description)}</span></button>`).join('')}</div></section>`;
  }
  const oldTabs=labTabs;
  labTabs=function(){return oldTabs()+menu();};
  const oldNav=renderNav;
  renderNav=function(){
    oldNav();
    for(const slug of ['add-three','subtract-two']) {
      const r=routes[slug],parent=document.querySelector(`#navigation .nav-item[data-topic="${r.topic}"]`);
      if(parent)parent.insertAdjacentHTML('afterend',`<button type="button" class="nav-exercise ${selectedRoute()===slug?'ex-active':''}" data-action="open-exercise" data-exercise="${slug}" aria-label="Open ${esc(r.title)} exercise"><span class="ex-nav-arrow" aria-hidden="true">↳</span>${esc(r.title)}</button>`);
    }
  };
  actions['open-exercise']=el=>selectExercise(el.dataset.exercise);
  for(const name of ['nav','tab']) {
    const oldAction=actions[name];
    actions[name]=el=>{oldAction(el);syncHash();};
  }
  document.addEventListener('change',event=>{if(event.target.dataset.change==='practice-mode')syncHash();});
  window.addEventListener('hashchange',()=>{const slug=validHash();if(slug)selectExercise(slug);});
  const requested=validHash();if(requested)selectExercise(requested,false);
  TOPICS.operations.sub='Add 2 / 3 numbers & SHIFT';
  TOPICS.operations.desc='Practise adding two or three 7-bit numbers by columns, then multiply and divide using shifts.';
  TOPICS.twos.sub='Negation & subtract 2 numbers';
  window.RGSVLab.version='2.4';
  window.RGSVLab.openExercise=slug=>selectExercise(slug);
  window.RGSVLab.exerciseRoutes=Object.fromEntries(Object.entries(routes).map(([slug,r])=>[slug,{topic:r.topic,mode:r.mode,title:r.title}]));
  document.querySelector('.side-version').textContent='RGSV · DIGITAL LEARNING · V2.4';
}
