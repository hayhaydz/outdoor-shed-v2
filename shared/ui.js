/* ui.js — mobile shell: boot(), divider(), contents overlay, steps-data validation. */
'use strict';

/* Page chain: index → parts → tools → [phase divider + its steps]… */
const CHAIN = (() => {
  const c = ['index', 'parts', 'tools'];
  PHASE_ORDER.forEach(pid => { c.push(pid); PHASES[pid].steps.forEach(s => c.push(s)); });
  return c;
})();
const STEP_COUNT = Object.keys(STEPS).length;

function href(id, i) { return id + '.html'; }
function chainPos(id) { const i = CHAIN.indexOf(id); return { i, prev: i > 0 ? CHAIN[i - 1] : null, next: i >= 0 && i < CHAIN.length - 1 ? CHAIN[i + 1] : null }; }

function bars(id, label) {
  const p = chainPos(id);
  const isStep = /^step/.test(id);
  const right = isStep ? (+id.replace('step', '')) + '/' + STEP_COUNT : (p.i >= 0 ? (p.i + 1) + '/' + CHAIN.length : '');
  const t = el('div', 'topbar');
  t.innerHTML = '<span class="ph">' + label + '</span><span class="ct">' + right + '</span>';
  document.body.appendChild(t);
  const pr = el('div', 'progress'); pr.appendChild(el('i'));
  pr.firstChild.style.width = (p.i >= 0 ? ((p.i + 1) / CHAIN.length * 100) : 0) + '%';
  document.body.appendChild(pr);
  document.body.classList.add('hasbar');
  const b = el('div', 'botbar');
  b.innerHTML =
    (p.prev ? '<a href="' + p.prev + '.html">&#9664; PREV</a>' : '<a href="index.html">&#9664; COVER</a>') +
    '<a href="#" class="contents-btn" onclick="openContents(\'' + id + '\');return false;">&#9776; CONTENTS</a>' +
    (p.next ? '<a href="' + p.next + '.html">NEXT &#9654;</a>' : '<a href="index.html">COVER &#9654;</a>');
  document.body.appendChild(b);
}

function openContents(cur) {
  let o = document.getElementById('contents-ovl');
  if (!o) {
    o = el('div', 'ovl'); o.id = 'contents-ovl';
    let h = '<a href="#" class="xbtn" onclick="closeContents();return false;">&#10005; CLOSE</a><h2>Contents</h2>';
    h += '<div class="grp"><div class="gt">Start here</div>' +
      ['index|Cover — what you are building', 'parts|Parts sheet — every piece', 'tools|Tools + golden rules'].map(x => {
        const [id, t] = x.split('|'); return '<a class="it' + (cur === id ? ' cur' : '') + '" href="' + id + '.html"><span class="no">·</span>' + t + '</a>';
      }).join('') + '</div>';
    PHASE_ORDER.forEach(pid => {
      const ph = PHASES[pid];
      h += '<div class="grp"><div class="gt">Phase ' + ph.num + ' · ' + ph.title + '</div>' +
        '<a class="it' + (cur === pid ? ' cur' : '') + '" href="' + pid + '.html"><span class="no">' + ph.num + '</span>' + ph.title + '</a>' +
        ph.steps.map((s, i) => '<a class="it' + (cur === s ? ' cur' : '') + '" href="' + s + '.html"><span class="no">' + s.replace('step', '') + '</span>' + STEPS[s].title + '</a>').join('') +
        '</div>';
    });
    o.innerHTML = h;
    document.body.appendChild(o);
  }
  o.classList.add('open');
}
function closeContents() { const o = document.getElementById('contents-ovl'); if (o) o.classList.remove('open'); }

/* ---- validation: steps-data vs model + draw extras; D11 exactly-3-views ---- */
function validate(id, step) {
  const errs = [];
  const checkPanels = (panels, where) => {
    if (where === 'main' && (!panels || panels.length !== 3)) errs.push(id + ': D11 — needs exactly 3 views, got ' + (panels ? panels.length : 0));
    (panels || []).forEach(v => {
      if (!M.pieces[v.kind]) errs.push(id + ': unknown view kind ' + v.kind);
      ['built', 'new', 'ghost'].forEach(k => (v[k] || []).forEach(p => { if (!M.pieces[v.kind] || !M.pieces[v.kind][p]) errs.push(id + ': missing piece ' + v.kind + '.' + p); }));
      [].concat(v.extras || [], v.post || []).forEach(k => { if (!EXTRAS[k]) errs.push(id + ': missing extra ' + k); });
    });
  };
  checkPanels(step.panels, 'main');
  checkPanels(step.insets, 'inset');
  return errs;
}

/* ---- step page ---- */
function boot(id) {
  const step = STEPS[id];
  const ph = PHASES[step.phase];
  document.title = 'Bike shed v2 — ' + step.title;
  const errs = validate(id, step);
  bars(id, 'PHASE ' + ph.num + ' · ' + ph.title.toUpperCase());

  const s = el('div', 'shell page');
  s.appendChild(el('div', 'kicker', 'STEP ' + id.replace('step', '') + ' OF ' + STEP_COUNT));
  s.appendChild(el('h1', 'steph', step.title));
  if (errs.length) s.appendChild(el('div', 'err', errs.join('<br>')));

  (step.panels || []).forEach(p => s.appendChild(panelBlock(p)));
  (step.insets || []).forEach((p, i) => {
    const d = el('div', 'card inset-card');
    d.appendChild(el('h2', null, 'DETAIL ' + String.fromCharCode(65 + i) + (p.tag ? ' — ' + p.tag : '')));
    d.appendChild(renderPanel(Object.assign({ inset: true, wCss: Math.min(window.innerWidth - 48, 400), minor: p.minor || 50, hMax: 260 }, p)));
    s.appendChild(d);
  });

  if (step.actions && step.actions.length) {
    const c = el('div', 'card'); c.appendChild(el('h2', null, 'Do this'));
    const ul = el('ul', 'actions');
    step.actions.forEach((a, i) => { const li = el('li'); li.innerHTML = '<span class="n">' + (i + 1) + '</span><span>' + a + '</span>'; ul.appendChild(li); });
    c.appendChild(ul); s.appendChild(c);
  }
  if (step.pieces && step.pieces.length) {
    const c = el('div', 'card'); c.appendChild(el('h2', null, 'Piece' + (step.pieces.length > 1 ? 's' : '') + ' this step'));
    const tb = el('table');
    tb.innerHTML = '<tr><th>Code</th><th>Cut</th><th>Orientation</th></tr>';
    step.pieces.forEach(p => {
      const tr = document.createElement('tr');
      const td0 = document.createElement('td'); td0.innerHTML = '<b>' + p[0] + '</b>' + (p[5] ? '<span class="qchip">\u00D7' + p[5] + '</span>' : '');
      const td1 = document.createElement('td'); td1.textContent = p[1];
      const td2 = document.createElement('td');
      if (p[4]) td2.appendChild(glyph(p[4][0], p[4][1]));
      td2.appendChild(Object.assign(el('span', 'orient'), { textContent: p[2] }));
      tr.appendChild(td0); tr.appendChild(td1); tr.appendChild(td2); tb.appendChild(tr);
    });
    c.appendChild(tb); s.appendChild(c);
  }
  if (step.tools && step.tools.length) {
    const c = el('div', 'card'); c.appendChild(el('h2', null, 'Tools'));
    const row = el('div', 'tools');
    step.tools.forEach(t => { const sp = el('span', 'tl'); sp.appendChild(picto(t)); sp.appendChild(document.createTextNode(TOOLNAMES[t] || t)); row.appendChild(sp); });
    c.appendChild(row); s.appendChild(c);
  }
  (step.warnings || []).forEach(w => {
    const d = el('div', 'warnrow');
    d.appendChild(picto(w[0], true));
    d.appendChild(el('div', null, '<span class="wlab">WARNING</span><span class="wtx">' + w[1] + '</span>'));
    s.appendChild(d);
  });
  if (step.checks && step.checks.length) {
    const c = el('div', 'card'); c.appendChild(el('h2', null, 'Check before moving on'));
    const ul = el('ul', 'checks');
    step.checks.forEach(ch => ul.appendChild(el('li', null, ch)));
    c.appendChild(ul); s.appendChild(c);
  }
  document.body.appendChild(s);
  window.__ok = errs.length === 0;
  window.__stepId = id;
}
function initStep(id) { boot(id); }

/* ---- phase divider page ---- */
function divider(id) {
  const ph = PHASES[id];
  document.title = 'Bike shed v2 — phase ' + ph.num + ' · ' + ph.title;
  bars(id, 'PHASE ' + ph.num + ' · ' + ph.title.toUpperCase());
  const s = el('div', 'shell page');
  s.appendChild(el('div', 'divnum', '<small>PHASE</small>' + ph.num));
  s.appendChild(el('div', 'divt', ph.title));
  s.appendChild(el('div', 'divlead', ph.lead));
  (ph.views || []).forEach(v => s.appendChild(panelBlock(Object.assign({ small: true, hMax: 260 }, v))));
  const c = el('div', 'card'); c.appendChild(el('h2', null, 'What you\u2019ll handle'));
  c.appendChild(el('div', null, ph.handle));
  s.appendChild(c);
  const m = el('div', 'meta-row');
  (ph.meta || []).forEach(x => { const sp = el('span'); sp.appendChild(picto(x[0])); sp.appendChild(document.createTextNode(x[1])); m.appendChild(sp); });
  s.appendChild(m);
  const nextStep = ph.steps[0];
  s.appendChild(el('a', 'bigbtn', 'START PHASE ' + ph.num + ' \u2192 STEP ' + nextStep.replace('step', ''))).href = nextStep + '.html';
  document.body.appendChild(s);
}

const TOOLNAMES = {
  drill: 'Drill + PZ2', pilot: '3 mm pilot bit', saw: 'Hand saw', level: 'Level 600–1000',
  tape: 'Tape 5 m', square: 'Comb. square', clamp: 'Clamps \u00D74', hammer: 'Hammer',
  brush: 'Sealer + brush', marker: 'Marker', pencil: 'Pencil', helper: 'Helper \u00D71',
  ladder: 'Ladder', photo: 'Photo the frame', square2: 'Diagonal check'
};
