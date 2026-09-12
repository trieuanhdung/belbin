function installColumnPractice() {
  'use strict';
  // Runs inside the original lab's closure. Other practice types and quizzes are unchanged.
  const css = document.createElement('style');
  css.id = 'rgsv-column-practice-style';
  css.textContent = `
.cp-layout{grid-template-columns:minmax(0,1fr) 235px}.cp-panel{padding:25px}.cp-intro{font-size:12px;color:var(--muted);line-height:1.8;margin:16px 0}.cp-guide{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:20px 0 12px;flex-wrap:wrap}.cp-direction{font-size:11px;font-weight:600;color:#806126}.cp-board{border:1px solid var(--line);border-radius:12px;background:#fbfcfe;padding:18px 14px 15px;overflow-x:auto}.cp-grid{display:grid;grid-template-columns:62px 45px repeat(7,minmax(30px,1fr));gap:7px;align-items:center;min-width:0}.cp-label{font-size:11px;font-weight:700;color:var(--muted);line-height:1.35}.cp-place{text-align:center;font:11px var(--mono);color:var(--muted);padding-bottom:5px}.cp-out-head{color:#977127;font-size:9px;line-height:1.5}.cp-out-head strong{font:11px var(--mono);display:block}.cp-slot{position:relative;min-width:0;text-align:center}.cp-slot input.cp-input{display:block;width:100%;min-width:0;min-height:0;height:47px;padding:4px 0;text-align:center;font:23px var(--mono);border:1px solid #b4c5d5;border-radius:7px;background:#fff;color:var(--navy);box-shadow:none;caret-color:var(--navy)}.cp-slot input.cp-carry{height:34px;font-size:17px;background:#fffaf0;border-color:#d9c390;color:#81601f}.cp-slot input.cp-input::placeholder{color:#bdc9d3}.cp-slot input.cp-input:focus{outline:3px solid #ceab635c;border-color:#b59049}.cp-slot input.cp-input[readonly]{cursor:default}.cp-fixed{height:34px;display:grid;place-items:center;background:#eef2f5;border:1px dashed #c8d4de;border-radius:7px;color:#6f8394;font:16px var(--mono)}.cp-fixed small{font:7px var(--font);letter-spacing:.4px}.cp-term{display:grid;place-items:center;height:43px;background:#edf2f7;color:var(--navy);border:1px solid transparent;border-radius:7px;font:23px var(--mono)}.cp-current{background:#fcf1d8!important;border-color:#dcc38f!important;color:#77571e!important}.cp-rule{grid-column:2/-1;border-top:2px solid var(--navy);height:4px;margin-top:3px}.cp-spacer{height:43px;border-right:1px dashed #d4b776;color:#a59577;display:grid;place-items:center;font:11px var(--mono)}.cp-out-bottom{font:8px/1.5 var(--font);text-align:center;color:#987331;letter-spacing:.2px}.cp-caption{display:flex;gap:12px;justify-content:space-between;flex-wrap:wrap;margin-top:14px;font-size:10px;color:var(--muted)}.cp-caption strong{color:#927036}.cp-slot.cp-bad input.cp-input{border:2px solid var(--red);background:var(--red-light);color:var(--red)}.cp-slot.cp-good input.cp-input{border-color:#69b59b;background:var(--teal-light);color:var(--teal)}.cp-mark{position:absolute;right:-3px;top:-7px;background:white;border-radius:50%;font:10px var(--font);font-weight:800;min-width:13px;height:13px;line-height:13px}.cp-bad .cp-mark{color:var(--red)}.cp-good .cp-mark{color:var(--teal)}.cp-buttons{margin-top:20px;gap:9px}.cp-secondary{margin-top:12px;padding-top:12px;border-top:1px solid var(--line)}.cp-status{margin-top:16px}.cp-side .info-note{font-size:11px}.cp-working{border-collapse:collapse;width:100%;font-size:11px;margin-top:12px}.cp-working th,.cp-working td{text-align:left;padding:9px 7px;border-bottom:1px solid var(--line)}.cp-working th{font-size:9px;color:var(--muted)}.cp-working td:nth-child(n+2){font-family:var(--mono)}.cp-summary{font:12px/1.9 var(--mono);background:var(--gold-light);padding:15px;border-radius:9px;margin-top:16px;overflow-wrap:anywhere}.cp-panel .practice-head h2{font-size:23px}.cp-panel .answer-form{margin-top:0}.cp-help{font-size:11px;line-height:1.8;color:var(--muted);margin:15px 0 0}.cp-help b{color:var(--navy)}.cp-side .mini-rule{font-size:11px}.cp-side .mini-rule strong{font-size:12px}.cp-label.plus{font-size:24px;color:var(--navy)}
@media(max-width:1120px){.cp-layout{grid-template-columns:minmax(0,1fr)}.cp-side{display:grid;grid-template-columns:1fr 1fr;gap:18px}.cp-side .card+.card{margin-top:0}}
@media(max-width:740px){.cp-panel{padding:20px 14px}.cp-grid{grid-template-columns:42px 33px repeat(7,minmax(20px,1fr));gap:4px}.cp-board{padding:15px 8px}.cp-slot input.cp-input{height:40px;font-size:19px;border-radius:5px}.cp-slot input.cp-carry{height:30px;font-size:15px}.cp-term{height:36px;font-size:19px;border-radius:5px}.cp-label{font-size:9px}.cp-place{font-size:9px}.cp-fixed{height:30px;font-size:14px}.cp-fixed small{font-size:6px}.cp-out-head{font-size:7px}.cp-out-head strong{font-size:9px}.cp-out-bottom{font-size:7px}.cp-direction{font-size:10px}.cp-side{display:block}.cp-side .card+.card{margin-top:18px}.cp-panel .practice-head h2{font-size:21px}.cp-caption{font-size:9px}.cp-buttons .btn{padding:10px 11px}.cp-working{font-size:10px}.cp-working th,.cp-working td{padding:9px 4px}.cp-panel .practice-head{gap:10px}.cp-panel .practice-head .badge{font-size:8px}.cp-summary{font-size:11px}}
@media(max-width:380px){.cp-grid{grid-template-columns:34px 29px repeat(7,minmax(18px,1fr));gap:3px}.cp-panel{padding-left:11px;padding-right:11px}.cp-board{padding-left:6px;padding-right:6px}.cp-slot input.cp-input{font-size:17px}.cp-term{font-size:17px}.cp-label{font-size:8px}}
@media print{.cp-buttons,.cp-secondary{display:none}.cp-slot input.cp-input{display:block!important}.cp-layout{display:block}}
`;
  document.head.appendChild(css);
  const originalRender = renderPractice;
  const originalCheck = checkPractice;
  const originalReveal = actions['practice-reveal'];
  const originalNext = actions['practice-next'];
  const isColumnPractice = () => state.topic === 'operations' && state.practice.operations?.q.type === 'add';
  const inputId = (row, i) => `cp-${row}-${i}`;
  const cellName = (row, i, w) => row === 'sum' ? `Result in the ${2 ** (w-i-1)} column` : i === 0 ? 'Final carry-out, outside the 7-bit register' : `Carry into the ${2 ** (w-i)} column`;
  function prepare(p) {
    if (p.columns) return p.columns;
    const q = p.q, w = q.width, r = addition(q.a, q.b, w);
    // Overflow-only questions become full worked addition in PRACTISE, not in Quiz.
    q.answerType = 'binary'; q.answer = bits(r.stored, w); q.exact = w; q.choices = null;
    q.prompt = `Add these two ${w}-bit unsigned registers. Complete every result bit and every carry box.`;
    q.hint = 'Start in the 1 column on the right. Add A, B and the incoming carry. Write the last binary digit in Result and carry the other digit one column left. 1 + 1 = 10; 1 + 1 + 1 = 11. Use 0 when there is no carry.';
    p.columns = {sum:Array(w).fill(''), carry:[...Array(w).fill(''), '0'], checked:Array(w).fill(false), marks:{}, mistake:false};
    return p.columns;
  }
  function nextColumn(c) {
    for (let i=c.checked.length-1;i>=0;i--) if (!c.checked[i]) return i;
    return -1;
  }
  function feedback(p, kind, title, body) {
    p.feedback={kind,title,body}; p.error=null;
  }
  function finish(p,r) {
    const c=p.columns;
    if(p.solved||p.revealed) return;
    countPractice(p); p.tries++; p.answer=c.sum.join(''); p.solved=true;
    state.stats.operations.solved++;
    if(!c.mistake&&!p.hint) state.stats.operations.first++;
    feedback(p,'correct','Correct — every column and carry is right.',`Stored result: ${c.sum.join('')}. Final carry-out: ${r.carry[0]}. ${r.unsignedOverflow?'Unsigned overflow: the full sum does not fit in 7 bits.':'No unsigned overflow: the full sum fits in 7 bits.'}`);
  }
  function checkColumns(all=false) {
    if(!isColumnPractice()) return;
    const p=state.practice.operations;
    if(p.solved||p.revealed) return;
    const c=prepare(p), w=p.q.width, r=addition(p.q.a,p.q.b,w);
    const current=nextColumn(c);
    const columns=all?Array.from({length:w},(_,j)=>w-j-1):current<0?[]:[current];
    const fields=new Map();
    for(const i of columns) {
      fields.set(inputId('sum',i),['sum',i]);
      fields.set(inputId('carry',i),['carry',i]);
      if(i+1<w) fields.set(inputId('carry',i+1),['carry',i+1]);
    }
    const empty=[...fields.values()].filter(([row,i])=>!/^[01]$/.test(c[row][i]));
    if(empty.length) {
      feedback(p,'neutral','Complete the empty boxes first.',all?'Enter a 0 or 1 in all seven result boxes and all seven editable carry boxes. The starting carry on the far right is already 0.':`For the ${2**(w-current-1)} column, enter its result and the carry sent one column left. Enter 0 when there is no carry.`);
      paint(inputId(...empty[0])); announce(p.feedback.title); return;
    }
    countPractice(p);
    const wrong=[];
    for(const [id,[row,i]] of fields) {
      const expected=String(row==='sum'?r.result[i]:r.carry[i]);
      c.marks[id]=c[row][i]===expected?'good':'bad';
      if(c.marks[id]==='bad') wrong.push([row,i]);
    }
    for(const i of columns) c.checked[i]=c.sum[i]===String(r.result[i])&&c.carry[i]===String(r.carry[i])&&c.carry[i+1]===String(r.carry[i+1]);
    if(wrong.length) {
      c.mistake=true; p.tries++;
      feedback(p,'wrong','Check the marked boxes — then try again.',wrong.map(([row,i])=>cellName(row,i,w)).join('; ')+'. Add the two bits and the incoming carry. Correct entries have been kept.');
    } else if(c.checked.every(Boolean)) {
      finish(p,r);
    } else {
      const i=columns[0], place=2**(w-i-1);
      feedback(p,'correct',`The ${place} column is correct.`,`Your working: ${r.ab[i]} + ${r.bb[i]} + carry ${r.carry[i+1]} = ${r.totals[i].toString(2)}₂. Write ${r.result[i]} and carry ${r.carry[i]} to the left. Now continue to the next unchecked column.`);
    }
    save();
    const focus=p.solved?'practice-next':wrong.length?inputId(...wrong[0]):inputId('sum',nextColumn(c));
    paint(focus); announce(p.feedback.title);
  }
  function revealColumns() {
    if(!isColumnPractice()) return originalReveal();
    const p=state.practice.operations;
    if(p.solved||p.revealed) return;
    const c=prepare(p),r=addition(p.q.a,p.q.b,p.q.width);
    c.sum=r.result.map(String); c.carry=r.carry.map(String); c.checked.fill(true); c.marks={};
    p.answer=c.sum.join(''); p.revealed=true; countPractice(p); state.stats.operations.revealed++;
    feedback(p,'neutral','Worked example — not counted as solved.','The result and carry boxes now show the solution. Follow the column-by-column working below, then try a fresh pair of numbers.');
    save(); paint('practice-next');
  }
  function renderColumns(p) {
    const c=prepare(p),q=p.q,w=q.width,r=addition(q.a,q.b,w),s=state.stats.operations;
    const locked=p.solved||p.revealed,active=nextColumn(c);
    const box=(row,i)=>{
      const id=inputId(row,i),mark=c.marks[id]||'',label=cellName(row,i,w);
      return `<div class="cp-slot ${mark?'cp-'+mark:''}"><input type="text" class="cp-input ${row==='carry'?'cp-carry':''}" id="${id}" data-cp-row="${row}" data-cp-index="${i}" aria-label="${label}" aria-describedby="cp-help" ${mark==='bad'?'aria-invalid="true"':''} value="${c[row][i]}" placeholder="·" inputmode="numeric" pattern="[01]" maxlength="1" autocomplete="off" spellcheck="false" ${locked?'readonly':''}>${mark?`<span class="cp-mark" aria-hidden="true">${mark==='good'?'✓':'×'}</span>`:''}</div>`;
    };
    const statsPanel=`<section class="card insight"><h3>${ic('chart')} Your module record</h3><div class="practice-stats"><div class="metric"><strong>${s.solved}</strong><span>Questions solved</span></div><div class="metric"><strong>${s.attempted?pct(s.first,s.attempted)+'%':'—'}</strong><span>Independent first try</span></div><div class="metric"><strong>${s.attempted}</strong><span>Questions attempted</span></div><div class="metric"><strong>${s.revealed}</strong><span>Solutions revealed</span></div></div><p class="tiny muted" style="margin-top:14px">All seven columns count as one question. Checking correct columns one at a time still counts as an independent first try. Hints and corrected mistakes do not.</p>${!storageOK?'<p class="storage-warning">Progress cannot be saved in this browser. This session still works.</p>':''}</section>`;
    return `<div class="grid-main cp-layout"><section class="card cp-panel"><div class="practice-head"><div><div class="section-kicker">PRACTISE · 7-BIT ADDITION</div><h2>Add one column at a time</h2><p class="small muted" style="margin:0">Two random registers. Your result. Your carries.</p></div><span class="badge ${locked?'gold':'navy'}">${p.solved?'SOLVED':p.revealed?'SOLUTION':c.checked.filter(Boolean).length+' / 7 CHECKED'}</span></div><div class="field"><label for="practice-mode">Question type</label><select id="practice-mode" data-change="practice-mode">${PRACTICE_MODES.operations.map(([id,label])=>`<option value="${id}" ${state.modes.operations===id?'selected':''}>${label}</option>`).join('')}</select></div><p class="cp-intro">Add the two registers below. Write each <strong>result bit</strong> beneath its column, and write the <strong>carry</strong> in the box one column to the left. Use <strong>0</strong> when there is no carry.</p><form id="practice-form" class="answer-form" novalidate><div class="cp-guide"><span class="badge ${locked?'gold':'navy'}">${locked?'ALL SEVEN COLUMNS':`NEXT: ${2**(w-active-1)} COLUMN · ${w-active} OF 7`}</span><span class="cp-direction">← Work from right to left</span></div><div class="cp-board"><div class="cp-grid" aria-label="Seven-bit column addition worksheet"><div class="cp-label">Place<br>value</div><div class="cp-place cp-out-head"><strong>128</strong>OUTSIDE</div>${Array.from({length:w},(_,i)=>`<div class="cp-place">${2**(w-i-1)}</div>`).join('')}<div class="cp-label">Carry</div>${Array.from({length:w},(_,i)=>box('carry',i)).join('')}<div class="cp-fixed" aria-label="Starting carry is zero">0<small>START</small></div><div class="cp-label">A</div><div class="cp-spacer" aria-hidden="true">—</div>${[...r.ab].map((bit,i)=>`<div class="cp-term ${i===active?'cp-current':''}" aria-label="A, ${2**(w-i-1)} column: ${bit}">${bit}</div>`).join('')}<div class="cp-label plus" aria-label="plus B">+</div><div class="cp-spacer" aria-hidden="true">—</div>${[...r.bb].map((bit,i)=>`<div class="cp-term ${i===active?'cp-current':''}" aria-label="B, ${2**(w-i-1)} column: ${bit}">${bit}</div>`).join('')}<div></div><div class="cp-rule"></div><div class="cp-label">Result</div><div class="cp-out-bottom">carry-out<br>not stored</div>${Array.from({length:w},(_,i)=>box('sum',i)).join('')}</div><div class="cp-caption"><span><strong>Gold boxes:</strong> carries, including final carry-out</span><span><strong>Result:</strong> exactly seven stored bits</span></div></div><p class="cp-help" id="cp-help"><b>Start on the right:</b> enter a result bit, then its carry to the left. Check each column, or fill the whole worksheet and check all your work. The starting carry is fixed at 0.</p><div class="buttons cp-buttons"><button class="btn primary" type="button" data-action="cp-check-column" ${locked?'disabled':''}>${ic('check')} Check column</button><button class="btn" type="submit" ${locked?'disabled':''}>${ic('check')} Check all work</button><button class="btn ${locked?'gold':''}" type="button" data-action="practice-next" id="practice-next">${ic('shuffle')} New random question</button></div><div class="buttons cp-secondary"><button class="btn link-btn" type="button" data-action="cp-clear" ${locked?'disabled':''}>${ic('reset')} Clear entries</button><button class="btn link-btn" type="button" data-action="practice-hint" ${locked||p.hint?'disabled':''}>${ic('bulb')} Hint</button><button class="btn link-btn" type="button" data-action="practice-reveal" ${locked?'disabled':''}>${ic('eye')} Show solution</button></div></form><div id="cp-feedback" aria-live="polite">${p.feedback?`<div class="feedback cp-status ${p.feedback.kind==='wrong'?'wrong':p.feedback.kind==='neutral'?'neutral':''}"><strong>${esc(p.feedback.title)}</strong>${esc(p.feedback.body)}</div>`:''}</div>${p.hint&&!locked?`<div class="feedback hint"><strong>How to work through a column</strong>${esc(q.hint)}<div class="tiny" style="margin-top:8px">This question is now marked as hint-assisted.</div></div>`:''}${locked?`<div class="cp-summary">${r.ab} + ${r.bb}<br>Stored result: <strong>${bits(r.stored,w)}</strong> · Carry-out: <strong>${r.carry[0]}</strong><br>${q.a} + ${q.b} = ${r.raw}. ${r.unsignedOverflow?'Unsigned overflow: only the lowest seven bits are stored.':'No unsigned overflow.'}</div><div class="worked"><h3>Column-by-column solution · right to left</h3><table class="cp-working"><thead><tr><th>PLACE</th><th>A + B + CARRY IN</th><th>WRITE</th><th>CARRY LEFT</th></tr></thead><tbody>${Array.from({length:w},(_,j)=>{const i=w-j-1;return `<tr><td>${2**j}</td><td>${r.ab[i]} + ${r.bb[i]} + ${r.carry[i+1]} = ${r.totals[i].toString(2)}₂</td><td>${r.result[i]}</td><td>${r.carry[i]}</td></tr>`;}).join('')}</tbody></table><p class="tiny muted" style="margin-top:13px">The final carry goes outside the 7-bit register. It is not an eighth stored bit.</p></div>`:''}</section><aside class="side-panels cp-side"><section class="card insight"><h3>${ic('bulb')} Remember the carry</h3><p>Each column adds <strong>three bits</strong>: the bit from A, the bit from B and the incoming carry.</p><div class="mini-rule"><span>Total 0</span><strong>write 0 · carry 0</strong></div><div class="mini-rule"><span>Total 1</span><strong>write 1 · carry 0</strong></div><div class="mini-rule"><span>Total 2 = 10₂</span><strong>write 0 · carry 1</strong></div><div class="mini-rule"><span>Total 3 = 11₂</span><strong>write 1 · carry 1</strong></div><div class="info-note">A carry belongs to the <strong>next column on the left</strong>. The carry-out from the 64 column goes into the separate <strong>128 / OUTSIDE</strong> box.</div><p class="tiny muted" style="margin-top:15px">The two source registers are fixed for this question. Choose New random question to generate a fresh pair.</p></section>${statsPanel}</aside></div>`;
  }
  renderPractice = function() {
    if(state.topic==='operations') {
      if(!state.practice.operations) newPractice();
      if(isColumnPractice()) return renderColumns(state.practice.operations);
    }
    return originalRender();
  };
  checkPractice = function() {if(isColumnPractice()) return checkColumns(true); return originalCheck();};
  actions['cp-check-column']=()=>checkColumns(false);
  actions['practice-reveal']=revealColumns;
  actions['practice-next']=()=>{
    originalNext();
    if(isColumnPractice()) document.getElementById(inputId('sum',6))?.focus({preventScroll:true});
  };
  actions['cp-clear']=()=>{
    if(!isColumnPractice()) return;
    const p=state.practice.operations;if(p.solved||p.revealed)return;
    const c=prepare(p);c.sum.fill('');c.carry.fill('');c.carry[p.q.width]='0';c.checked.fill(false);c.marks={};p.feedback=null;p.error=null;
    paint(inputId('sum',p.q.width-1));
  };
  const mode=PRACTICE_MODES.operations.find(([id])=>id==='add');
  if(mode)mode[1]='Addition by column & carry';
  state.modes.operations='add';
  function updateEntry(el,value) {
    const p=state.practice.operations;if(!p||p.solved||p.revealed)return;
    const c=prepare(p),row=el.dataset.cpRow,i=Number(el.dataset.cpIndex);
    if(!['sum','carry'].includes(row)||!Number.isInteger(i)||i<0||i>=p.q.width)return;
    c[row][i]=value;el.value=value;
    // Editing a checked carry may affect every column to its left.
    for(let j=0;j<=i;j++)c.checked[j]=false;
    c.marks={};p.feedback=null;p.error=null;
    document.querySelectorAll('.cp-mark').forEach(x=>x.remove());
    document.querySelectorAll('.cp-slot').forEach(x=>x.classList.remove('cp-bad','cp-good'));
    document.querySelectorAll('[data-cp-row][aria-invalid]').forEach(x=>x.removeAttribute('aria-invalid'));
    const feedbackBox=document.getElementById('cp-feedback');
    if(feedbackBox)feedbackBox.textContent='';
    const next=nextColumn(c);
    const guide=document.querySelector('.cp-guide .badge');
    if(guide)guide.textContent=`NEXT: ${2**(p.q.width-next-1)} COLUMN · ${p.q.width-next} OF 7`;
    const status=document.querySelector('.cp-panel .practice-head>.badge');
    if(status)status.textContent=c.checked.filter(Boolean).length+' / 7 CHECKED';
    document.querySelectorAll('.cp-term').forEach((x,j)=>x.classList.toggle('cp-current',j%p.q.width===next));
  }
  const focusBox=id=>{const el=document.getElementById(id);if(el&&!el.readOnly){el.focus({preventScroll:true});el.select();}};
  document.addEventListener('focusin',event=>{if(event.target.matches('[data-cp-row]'))event.target.select();});
  document.addEventListener('input',event=>{
    const el=event.target;if(!el.matches('[data-cp-row]')||el.readOnly||event.isComposing||!isColumnPractice())return;
    const digit=el.value.replace(/[^01]/g,'').slice(-1);
    if(el.value&&!digit)announce('Use only 0 or 1 in each box.');
    updateEntry(el,digit);
    if(digit){const row=el.dataset.cpRow,i=Number(el.dataset.cpIndex);if(row==='sum')focusBox(inputId('carry',i));else if(i>0)focusBox(inputId('sum',i-1));}
  });
  document.addEventListener('keydown',event=>{
    const el=event.target;if(!el.matches('[data-cp-row]')||el.readOnly||!isColumnPractice())return;
    const row=el.dataset.cpRow,i=Number(el.dataset.cpIndex);
    if(event.key==='Enter'){event.preventDefault();checkColumns(event.ctrlKey||event.metaKey);return;}
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();focusBox(inputId(row,i+(event.key==='ArrowLeft'?-1:1)));}
  });
  document.addEventListener('paste',event=>{
    const el=event.target;if(!el.matches('[data-cp-row]')||el.readOnly||!isColumnPractice())return;
    const raw=event.clipboardData?.getData('text')||'',value=raw.trim().replace(/\s/g,'').replace(/^0b/i,'');
    if(value.length<=1)return;
    event.preventDefault();
    if(!/^[01]{7}$/.test(value)){announce('Paste exactly seven bits, using only 0 and 1.');return;}
    const row=el.dataset.cpRow;
    for(let i=0;i<7;i++)updateEntry(document.getElementById(inputId(row,i)),value[i]);
    focusBox(inputId(row==='sum'?'carry':'sum',6));
  });
  window.RGSVLab.version='2.2';
  const version=document.querySelector('.side-version');
  if(version)version.textContent='RGSV · DIGITAL LEARNING · V2.2';
}
