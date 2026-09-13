function updateTriplePracticeV27(html) {
  'use strict';
  // Apply only to the verified v2.6 source. Do not change arithmetic or other modules.
  function change(before, after) {
    if (html.split(before).length !== 2) throw new Error('Triple practice update: source mismatch.');
    html = html.replace(before, () => after);
  }
  change('<div class="tc-formula">A + B + C = D</div>', '<div class="tc-formula">${q.a} + ${q.b} + ${q.c} = D</div>');
  change('Add A and B into D. Keep D in place, then add C directly below it. The <strong>orange row</strong> is the final D.', '<span class="mono">A + B = AB</span>, then <span class="mono">AB + C = D</span>. Keep AB in place and add C directly below it. The <strong>pale-orange row</strong> is the final D.');
  change('Continuous addition: A, B, subtotal D, C, final D', 'Continuous addition: A, B, subtotal AB, C, final D');
  change("'ADD A + B':'NOW ADD D + C'", "'ADD A + B':'NOW ADD AB + C'");
  change("${k==='first'?'A + B':'D + C'}", "${k==='first'?'A + B':'AB + C'}");
  // Omit the entire second carry row until every first-addition bit and carry is correct.
  change("        ${carries('second')}\n", "        ${steps.first.done?carries('second'):''}\n");
  change('data-tc-label="subtotal">D<small>subtotal<br>A + B', 'data-tc-label="subtotal">AB<small>subtotal<br>A + B');
  change("'Fill the subtotal D row: A + B.':'Continue in the orange row: D + C.'", "'Fill AB: A + B. The second carry row appears after AB is correct.':'Continue with AB + C = D in the pale-orange row.'");
  change("q.prompt='A + B + C = D. Add A and B into the subtotal D row, then add C below it to find the final D.';", "q.prompt=`${q.a} + ${q.b} + ${q.c} = D. First A + B = AB, then AB + C = D.`;");
  change("q.hint='Fill the subtotal D row using A + B, from right to left. Check it, then add the unchanged D row and C directly underneath. Enter the final answer in the orange row. Zero carries may be blank.';", "q.hint='First A + B = AB: fill the subtotal AB from right to left. Check it to reveal the second carry row. Then AB + C = D: add the unchanged AB and C directly underneath. Enter D in the pale-orange row. Zero carries may be blank.';");
  change('q.steps=[`Subtotal D: ${q.a} + ${q.b} = ${q.a+q.b}.`,`Add C underneath: ${q.a+q.b} + ${q.c} = ${total}.`,`Final D = ${q.answer}. The subtotal stays in place; the orange row holds the full answer.`];', 'q.steps=[`A + B = AB: ${q.a} + ${q.b} = ${q.a+q.b}.`,`AB + C = D: ${q.a+q.b} + ${q.c} = ${total}.`,`Final D = ${q.answer}. AB stays in place; the pale-orange row holds the full answer.`];');
  change("{title:'First add A + B = D',labels:['A','B'],values:[q.a,q.b],result:'D'", "{title:'First add A + B = AB',labels:['A','B'],values:[q.a,q.b],result:'AB'");
  change("{title:'Add D + C for the final D',labels:['D','C']", "{title:'Then add AB + C = D',labels:['AB','C']");
  change("'Subtotal D is correct. Continue in the orange row.'", "'AB is correct. The second carry row is now ready.'");
  change("'Keep D where it is. Add D to C directly underneath, working from right to left.'", "'Keep AB where it is. Now add AB + C = D from right to left, using the second carry row and the pale-orange result row.'");
  change('The orange row is the final D.`', 'The pale-orange row is the final D.`');
  change("description:'A, B, subtotal D, then C underneath. Finish in the orange row.'", "description:'First A + B = AB, then AB + C = D. Finish in the pale-orange row.'");
  const anchor="  Object.assign(window.RGSVLab,{makeQuestion,sequential:{prepare,definition,calculation,next,check},version:'2.6'});";
  const css=`
/* v2.7: soft peach rather than saturated orange; retain red error markers. */
.tc-instruction strong{color:#805431}
.tc-final-cell input.cp-input,.tc-final-value{background:#fff2e5!important;border:1px solid #e4bf99!important;color:#754b2b!important}
.tc-final-value strong,.tc-final-value small{color:#754b2b!important}
.tc-final-label,.tc-final-label small{color:#946034!important}
.tc-final-rule{border-color:#d9aa76}
.tc-final-equation{background:#fff5eb;border-left:3px solid #e4bf99;color:#754b2b}
`;
  change(anchor, '  style.textContent += '+JSON.stringify(css)+';\n'+anchor.replace("version:'2.6'", "version:'2.7'"));
  change("  window.RGSVLab.version='2.6';", "  window.RGSVLab.version='2.7';");
  change("document.querySelector('.side-version').textContent='RGSV · DIGITAL LEARNING · V2.6';", "document.querySelector('.side-version').textContent='RGSV · DIGITAL LEARNING · V2.7';");
  return html;
}
