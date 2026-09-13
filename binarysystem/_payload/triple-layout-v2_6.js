function updateTripleLayoutV26(html) {
  'use strict';
  function change(before, after) {
    if (html.split(before).length !== 2) throw new Error('Triple worksheet update: source mismatch.');
    html = html.replace(before, () => after);
  }
  function renderTriple(p) {
    const q=p.q,seq=prepare(p),steps=seq.steps,locked=p.solved||p.revealed;
    const key=next(p),pos=key?nextBit(steps[key]):-1;
    const values=[q.a,q.b,q.c],total=q.a+q.b+q.c;
    const resultValue=(k,n,final=false)=>`<div id="tc-denary-${k}" class="cp-denary cp-denary-result ${final?'tc-final-value':''} ${steps[k].done||steps[k].showDenary?'':'cp-pending'}"><strong>${steps[k].done||steps[k].showDenary?n:'?'}</strong><small>${steps[k].done||steps[k].showDenary?(final?'final answer':'A + B'): 'Check all'}</small></div>`;
    const term=(label,n,k,which)=>`<div class="cp-label tc-label" data-tc-label="${which}">${label}</div><div class="cp-spacer">—</div>${bits(n,W).split('').map((b,i)=>`<div class="cp-term ${k===key&&i===pos?'cp-current':''}" data-tc-key="${k}" data-tc-index="${i}">${b}</div>`).join('')}${denary(n)}`;
    const carries=k=>`<div class="cp-label tc-carry-label">Carry<small>${k==='first'?'A + B':'D + C'}</small></div>${indices.map(i=>field(p,k,'carry',i)).join('')}<div class="cp-fixed">0<small>START</small></div><div class="cp-denary-head cp-carry-note">blank = 0</div>`;
    const results=(k,final)=>indices.map(i=>field(p,k,'sum',i).replace('class="cp-slot ',`class="cp-slot ${final?'tc-final-cell':'tc-subtotal-cell'} ${!final&&key==='second'&&i===pos?'tc-reused-current':''} `)).join('');
    return `<section class="card cp-panel sq-panel tc-panel">
      <div class="practice-head"><div><div class="section-kicker">7-BIT PRACTICE</div><h2>Add three numbers</h2></div><span class="badge ${locked?'gold':'navy'}">${p.solved?'SOLVED':p.revealed?'SOLUTION':key==='first'?'ADD A + B':'NOW ADD D + C'}</span></div>
      <div class="tc-formula">A + B + C = D</div>
      <p class="tc-instruction">Add A and B into D. Keep D in place, then add C directly below it. The <strong>orange row</strong> is the final D.</p>
      <div class="cp-board tc-board"><div class="cp-grid tc-grid" aria-label="Continuous addition: A, B, subtotal D, C, final D">
        <div class="cp-label">Place<br>value</div><div class="cp-place cp-out-head">OUT</div>${P.map(n=>`<div class="cp-place">${n}</div>`).join('')}<div class="cp-denary-head">DENARY</div>
        ${carries('first')}${term('A',q.a,'first','A')}${term('+ B',q.b,'first','B')}
        <div></div><div class="cp-rule"></div>
        ${carries('second')}
        <div id="sq-stage-first" class="cp-label tc-label" data-tc-label="subtotal">D<small>subtotal<br>A + B</small></div><div class="cp-out-bottom">carry-out<br>not stored</div>${results('first',false)}${resultValue('first',q.a+q.b)}
        ${term('+ C',q.c,'second','C')}
        <div></div><div class="cp-rule tc-final-rule"></div>
        <div id="sq-stage-second" class="cp-label tc-label tc-final-label" data-tc-label="final">D<small>FINAL</small></div><div class="cp-out-bottom">carry-out<br>not stored</div>${results('second',true)}${resultValue('second',total,true)}
      </div></div>
      <div class="tc-toolbar"><span class="tc-current">${locked?(p.solved?'Both additions are correct.':'Worked example.') : key==='first'?'Fill the subtotal D row: A + B.':'Continue in the orange row: D + C.'}</span><span class="tc-direction">← Right to left · blank carry = 0</span></div>
      <div class="buttons sq-controls"><button type="button" class="btn primary" data-action="sq-check" ${locked?'disabled':''}>${ic('check')} Check column</button><button type="button" class="btn" data-action="sq-check-all" ${locked?'disabled':''}>${ic('check')} Check all</button><button type="button" class="btn gold" id="practice-next" data-action="sq-next">${ic('shuffle')} New random question</button></div>
      <div class="sq-status" aria-live="polite">${p.feedback?`<div class="feedback ${p.feedback.kind==='wrong'?'wrong':p.feedback.kind==='neutral'?'neutral':''}"><strong>${esc(p.feedback.title)}</strong>${esc(p.feedback.body)}</div>`:''}</div>
      <div class="buttons cp-secondary"><button type="button" class="btn link-btn" data-action="sq-clear" ${locked?'disabled':''}>${ic('reset')} Clear current row</button><button type="button" class="btn link-btn" data-action="practice-hint" ${locked||p.hint?'disabled':''}>${ic('bulb')} Hint</button><button type="button" class="btn link-btn" data-action="practice-reveal" ${locked?'disabled':''}>${ic('eye')} Show solution</button></div>
      ${p.hint&&!locked?`<div class="feedback hint"><strong>Method hint</strong>${esc(q.hint)}</div>`:''}
      ${locked?`<p class="tc-final-equation">${values.join(' + ')} = <strong>${total}</strong> <span>Final D = ${bits(total,W)}₂</span></p>`:''}
    </section>`;
  }
  const css=`
.tc-panel{max-width:1100px;margin:0 auto}.tc-formula{font:29px/1.4 var(--mono);color:var(--navy);margin:0 0 10px}.tc-instruction{font-size:12px;line-height:1.8;color:var(--muted);margin:0 0 20px}.tc-instruction strong{color:#ba5006}.tc-board{padding:20px 16px;background:#fcfdff}.tc-grid{grid-template-columns:75px 39px repeat(7,minmax(25px,1fr)) 85px;gap:7px}.tc-label{font:19px var(--mono);color:var(--navy)}.tc-label small{font:9px/1.4 var(--font);color:var(--muted);display:block;margin-top:4px}.tc-carry-label{font-size:10px}.tc-carry-label small{font-size:9px;display:block;color:#8e6b22}.tc-board .cp-term{height:45px;font-size:25px}.tc-board .cp-denary strong{font-size:24px}.tc-board .cp-fixed{height:30px}.tc-board .cp-slot input.cp-carry{height:30px;font-size:16px}.tc-board .cp-slot input[readonly]{opacity:1}.tc-final-cell input.cp-input{background:#fa902e!important;border:2px solid #da7016!important;color:#321703!important;font-weight:700!important}.tc-final-cell.cp-bad input.cp-input{border-color:#af1532!important;box-shadow:0 0 0 2px #af153233!important}.tc-final-value{background:#fa902e!important;border:2px solid #da7016!important;color:#321703!important}.tc-final-value strong,.tc-final-value small{color:#321703!important}.tc-final-label{color:#bf550b!important;font-weight:700}.tc-final-label small{color:#bf550b!important;font-weight:800;letter-spacing:.7px}.tc-final-rule{border-color:#da7016}.tc-reused-current input.cp-input{box-shadow:0 0 0 2px #ceab63}.tc-toolbar{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:17px;font-size:11px}.tc-current{font-weight:650;color:var(--navy)}.tc-direction{color:var(--muted)}.tc-final-equation{padding:15px 17px;margin:15px 0 0;background:#fff0df;border-left:4px solid #ec801f;color:#a54800;font:19px/1.6 var(--mono)}.tc-final-equation span{display:block;font-size:13px}.tc-panel .practice-head{margin-bottom:16px}.tc-board .cp-rule{margin:6px 0 2px}
@media(max-width:740px){.tc-panel{padding:19px 12px}.tc-grid{grid-template-columns:38px 23px repeat(7,minmax(19px,1fr)) 52px;gap:3px;min-width:273px}.tc-board{padding:13px 6px}.tc-label{font-size:14px}.tc-label small{font-size:7px}.tc-carry-label{font-size:8px}.tc-carry-label small{font-size:7px}.tc-board .cp-term{font-size:19px;height:36px}.tc-board .cp-slot input.cp-input{font-size:19px;height:39px}.tc-board .cp-slot input.cp-carry{font-size:14px;height:26px}.tc-board .cp-fixed{height:26px;font-size:13px}.tc-board .cp-denary strong{font-size:17px}.tc-board .cp-denary small{font-size:7px}.tc-formula{font-size:23px}.tc-instruction{font-size:11px}.tc-board .cp-place,.tc-board .cp-denary-head{font-size:8px}.tc-toolbar{font-size:10px}.tc-final-equation{font-size:15px}.tc-panel .sq-controls{gap:7px}.tc-panel .sq-controls .btn{font-size:10px;padding:9px 10px}.tc-panel .cp-out-bottom{font-size:7px}}
@media print{.tc-panel input.cp-input{display:block!important}.tc-final-cell input,.tc-final-value{print-color-adjust:exact;-webkit-print-color-adjust:exact}}
`;
  change('  function render(p){\n    const q=p.q,seq=prepare(p)',renderTriple.toString()+'\n  function render(p){\n    if(!sub(p))return renderTriple(p);\n    const q=p.q,seq=prepare(p)');
  change('const c=prepare(p).steps[key],mark=c.marks[id(key,row,i)],locked=c.done||p.revealed;', 'const c=prepare(p).steps[key],mark=c.marks[id(key,row,i)],locked=c.done||p.revealed||(!sub(p)&&key!==next(p));');
  change("    if(move){const key=next(p)||keys(p).at(-1);", "    if(move&&sub(p)){const key=next(p)||keys(p).at(-1);");
  change("    const host=document.getElementById('sq-stage-'+key);",`    if(!sub(p)){
      document.querySelectorAll('[data-sq-key="'+key+'"]').forEach(input=>{
        input.parentElement.classList.remove('cp-good','cp-bad');
        input.parentElement.querySelectorAll('.cp-mark').forEach(n=>n.remove());
        input.removeAttribute('aria-invalid');
      });
      const cell=document.getElementById('tc-denary-'+key);
      if(cell){cell.classList.add('cp-pending');cell.innerHTML='<strong>?</strong><small>Check all</small>';}
      document.querySelector('.sq-status')?.replaceChildren();
      const pos=nextBit(c);
      document.querySelectorAll('[data-tc-key="'+key+'"]').forEach(n=>n.classList.toggle('cp-current',Number(n.dataset.tcIndex)===pos));
      if(key==='second')document.querySelectorAll('.tc-subtotal-cell').forEach((n,j)=>n.classList.toggle('tc-reused-current',j===pos));
      return;
    }
    const host=document.getElementById('sq-stage-'+key);`);
  change("      q.prompt='Add three numbers in two stages: A + B = D, then D + C = E.';", "      q.prompt='A + B + C = D. Add A and B into the subtotal D row, then add C below it to find the final D.';");
  change("      q.hint='First add only A and B from right to left. Carry D into the next worksheet, then add D and C. Each addition has only two input numbers. Zero carries may be blank.';", "      q.hint='Fill the subtotal D row using A + B, from right to left. Check it, then add the unchanged D row and C directly underneath. Enter the final answer in the orange row. Zero carries may be blank.';");
  change("      q.steps=[`First: ${q.a} + ${q.b} = ${q.a+q.b} (D).`,`Then: ${q.a+q.b} + ${q.c} = ${total} (E).`,`Keep the checked D unchanged. Both sums fit in seven bits: E = ${q.answer}.`];", "      q.steps=[`Subtotal D: ${q.a} + ${q.b} = ${q.a+q.b}.`,`Add C underneath: ${q.a+q.b} + ${q.c} = ${total}.`,`Final D = ${q.answer}. The subtotal stays in place; the orange row holds the full answer.`];");
  change("return {title:'Then add D + C = E',labels:['D','C'],values:", "return {title:'Add D + C for the final D',labels:['D','C'],values:");
  change("result:'E',signed:false,answer:q.a+q.b+q.c", "result:'D',signed:false,answer:q.a+q.b+q.c");
  change('`A + B = D = ${p.q.a+p.q.b}; then D + C = E = ${p.q.a+p.q.b+p.q.c}. Two inputs per addition, never three input rows at once.`','`${p.q.a} + ${p.q.b} + ${p.q.c} = ${p.q.a+p.q.b+p.q.c}. The orange row is the final D.`');
  change("'D is ready and has been copied below.'", "'Subtotal D is correct. Continue in the orange row.'");
  change("'The next worksheet has only D and C. A and B have already been combined into D. Start on the right.'", "'Keep D where it is. Add D to C directly underneath, working from right to left.'");
  change("PRACTICE_MODES.operations.find(x=>x[0]==='add3')[1]='Add three numbers · A + B = D, then D + C = E';", "PRACTICE_MODES.operations.find(x=>x[0]==='add3')[1]='Add three numbers · A + B + C = D';");
  change("formula:'A+B=D → D+C=E', description:'Two input numbers per addition. Finish D, then combine it with C.'", "formula:'A + B + C = D', description:'A, B, subtotal D, then C underneath. Finish in the orange row.'");
  const styleAnchor="  Object.assign(window.RGSVLab,{makeQuestion,sequential:{prepare,definition,calculation,next,check},version:'2.5'});";
  change(styleAnchor, '  style.textContent += '+JSON.stringify(css)+';\n'+styleAnchor.replace("version:'2.5'", "version:'2.6'"));
  change("  window.RGSVLab.version='2.5';", "  window.RGSVLab.version='2.6';");
  change("document.querySelector('.side-version').textContent='RGSV · DIGITAL LEARNING · V2.5';", "document.querySelector('.side-version').textContent='RGSV · DIGITAL LEARNING · V2.6';");
  return html;
}
