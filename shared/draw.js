/* draw.js — IKEA-style 2D orthographic CAD drawing system (00-PLAN §6).
   Pure canvas helpers + panel renderer. Uniform scale ALWAYS (one mm→px factor per view). */
'use strict';

const PAL = {
  paper: '#ffffff', page: '#f4f3f0',
  ink: '#16161a', dim: '#3c3c43',
  builtFill: '#ececec', builtStroke: '#8f8f96',
  newFill: '#ffffff', accent: '#F2A900', halo: 'rgba(242,169,0,0.18)',
  ghost: '#9a9a9a',
  warn: '#C8341C', check: '#1E7B34',
  gridMinor: '#ececec', gridMajor: '#dcdcdc',
  pad: '#d9d9d9',
  sheetFill: 'rgba(22,22,26,0.10)', sheetStroke: 'rgba(22,22,26,0.55)'
};
const FONT = '-apple-system,BlinkMacSystemFont,\'Segoe UI\',system-ui,sans-serif';
const f = (px, w) => (w || 700) + ' ' + px + 'px ' + FONT;

function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

/* ---- transform: uniform scale, letterboxed ---- */
function T(bnd, w, h, pad) {
  pad = pad == null ? 16 : pad;
  const s = Math.min((w - 2 * pad) / (bnd[1] - bnd[0]), (h - 2 * pad) / (bnd[3] - bnd[2]));
  const ox = (w - s * (bnd[1] - bnd[0])) / 2, oy = (h - s * (bnd[3] - bnd[2])) / 2;
  return { s, sx: s, sy: s, w, h, X: v => ox + (v - bnd[0]) * s, Y: v => h - oy - (v - bnd[2]) * s };
}

function mkCanvas(wCss, hCss) {
  const c = document.createElement('canvas'); const dpr = window.devicePixelRatio || 1;
  c.width = Math.round(wCss * dpr); c.height = Math.round(hCss * dpr);
  c.style.width = wCss + 'px'; c.style.height = hCss + 'px';
  const x = c.getContext('2d'); x.scale(dpr, dpr); return [c, x];
}

/* ---- §6.2-14 CAD grid ---- */
function gridDraw(ctx, t, bnd, minor) {
  minor = minor || 100; const major = minor * 5;
  const x0 = Math.floor(bnd[0] / minor) * minor, x1 = Math.ceil(bnd[1] / minor) * minor;
  const y0 = Math.floor(bnd[2] / minor) * minor, y1 = Math.ceil(bnd[3] / minor) * minor;
  for (let g = x0; g <= x1; g += minor) {
    const majorL = Math.abs(g % major) < 0.01;
    ctx.strokeStyle = majorL ? PAL.gridMajor : PAL.gridMinor;
    ctx.lineWidth = majorL ? 0.9 : 0.6;
    ctx.beginPath(); ctx.moveTo(t.X(g), 0); ctx.lineTo(t.X(g), t.h); ctx.stroke();
  }
  for (let g = y0; g <= y1; g += minor) {
    const majorL = Math.abs(g % major) < 0.01;
    ctx.strokeStyle = majorL ? PAL.gridMajor : PAL.gridMinor;
    ctx.lineWidth = majorL ? 0.9 : 0.6;
    ctx.beginPath(); ctx.moveTo(0, t.Y(g)); ctx.lineTo(t.w, t.Y(g)); ctx.stroke();
  }
  // origin tick + axis letters + grid caption
  ctx.strokeStyle = PAL.dim; ctx.lineWidth = 1;
  const ox = t.X(0), oy = t.Y(0);
  if (ox > 8 && ox < t.w - 8 && oy > 8 && oy < t.h - 8) {
    ctx.beginPath(); ctx.moveTo(ox - 5, oy); ctx.lineTo(ox + 5, oy); ctx.moveTo(ox, oy - 5); ctx.lineTo(ox, oy + 5); ctx.stroke();
  }
  ctx.fillStyle = '#8a8a92'; ctx.font = f(10, 600);
  ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
  ctx.fillText('0', Math.max(4, ox + 2), Math.min(t.h - 2, oy - 2));
  ctx.textAlign = 'right'; ctx.textBaseline = 'top';
  ctx.fillText('GRID ' + minor + ' mm', t.w - 4, 4);
}

/* ---- §6.2 pieces ---- */
function pathOf(ctx, t, r) {
  if (r[0] && typeof r[0] === 'object') { r.forEach((p, i) => i ? ctx.lineTo(t.X(p[0]), t.Y(p[1])) : ctx.moveTo(t.X(p[0]), t.Y(p[1]))); }
  else { ctx.rect(t.X(r[0]), t.Y(r[3]), (r[1] - r[0]) * t.s, (r[3] - r[2]) * t.s); }
}
function pieceDraw(ctx, t, r, mode, lab) {
  if (mode === 'new') {
    ctx.beginPath(); pathOf(ctx, t, r);
    ctx.save(); ctx.strokeStyle = PAL.accent; ctx.lineWidth = 7.2; ctx.globalAlpha = 0.55; ctx.stroke(); ctx.restore();
    ctx.fillStyle = PAL.newFill; ctx.fill();
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.2; ctx.stroke();
  } else if (mode === 'sheet') {
    ctx.beginPath(); pathOf(ctx, t, r);
    ctx.fillStyle = PAL.sheetFill; ctx.fill(); ctx.strokeStyle = PAL.sheetStroke; ctx.lineWidth = 1.4; ctx.stroke();
  } else if (mode === 'ghost') {
    ctx.save(); ctx.setLineDash([5, 4]); ctx.beginPath(); pathOf(ctx, t, r);
    ctx.strokeStyle = PAL.ghost; ctx.lineWidth = 1.2; ctx.stroke(); ctx.restore();
  } else { // built
    ctx.beginPath(); pathOf(ctx, t, r);
    ctx.fillStyle = PAL.builtFill; ctx.fill(); ctx.strokeStyle = PAL.builtStroke; ctx.lineWidth = 1.1; ctx.stroke();
  }
  if (lab) labelIn(ctx, t, r, lab, mode === 'new');
}
function labelIn(ctx, t, r, lab, strong) {
  const poly = r[0] && typeof r[0] === 'object';
  let a, b, c, d;
  if (poly) { let xs = r.map(p => p[0]), ys = r.map(p => p[1]); a = Math.min(...xs); b = Math.max(...xs); c = Math.min(...ys); d = Math.max(...ys); }
  else [a, b, c, d] = r;
  const w = (b - a) * t.s, h = (d - c) * t.s;
  ctx.font = f(10.5, 800); ctx.fillStyle = strong ? PAL.ink : '#55555c';
  if (h >= 12 && w >= 34) { ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(lab, t.X((a + b) / 2), t.Y((c + d) / 2)); }
  else if (w < 34 && h >= 40) {
    ctx.save(); ctx.translate(t.X((a + b) / 2), t.Y((c + d) / 2)); ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(lab, 0, 0); ctx.restore();
  }
}

/* ---- §6.2-1 dimensions (extension ticks + filled arrowheads) ---- */
function arrow(ctx, x, y, dir) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 6 * dir, y - 2.6); ctx.lineTo(x - 6 * dir, y + 2.6); ctx.closePath(); ctx.fill(); }
function dimH(ctx, t, a, b, y, txt) {
  const x0 = t.X(a), x1 = t.X(b), yy = t.Y(y);
  ctx.strokeStyle = PAL.dim; ctx.lineWidth = 1; ctx.fillStyle = PAL.dim;
  ctx.beginPath();
  ctx.moveTo(x0, yy - 5); ctx.lineTo(x0, yy + 5); ctx.moveTo(x1, yy - 5); ctx.lineTo(x1, yy + 5);
  ctx.moveTo(x0 + 7, yy); ctx.lineTo(x1 - 7, yy); ctx.stroke();
  arrow(ctx, x0, yy, 1); arrow(ctx, x1, yy, -1);
  ctx.fillStyle = PAL.ink; ctx.font = f(10.5, 800); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText(txt, (x0 + x1) / 2, yy - 3);
}
function dimV(ctx, t, a, b, x, txt, side) {
  const y0 = t.Y(a), y1 = t.Y(b), xx = t.X(x);
  ctx.strokeStyle = PAL.dim; ctx.lineWidth = 1; ctx.fillStyle = PAL.dim;
  ctx.beginPath();
  ctx.moveTo(xx - 5, y0); ctx.lineTo(xx + 5, y0); ctx.moveTo(xx - 5, y1); ctx.lineTo(xx + 5, y1);
  ctx.moveTo(xx, y0 - 7); ctx.lineTo(xx, y1 + 7); ctx.stroke();
  ctx.save(); ctx.translate(xx + 2.6, y0 - 1); ctx.rotate(Math.PI / 2); arrow(ctx, 0, 0, 1); ctx.restore();
  ctx.save(); ctx.translate(xx - 2.6, y1 + 1); ctx.rotate(Math.PI / 2); arrow(ctx, 0, 0, -1); ctx.restore();
  ctx.fillStyle = PAL.ink; ctx.font = f(10.5, 800);
  const left = side === 'l';
  ctx.save(); ctx.translate(xx + (left ? -5 : 5), (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.textBaseline = left ? 'bottom' : 'top'; ctx.fillText(txt, 0, 0); ctx.restore();
}

/* ---- §6.2-2 datum line (▽ + value + label) ---- */
function datumDraw(ctx, t, x0, x1, y, val, name) {
  ctx.save(); ctx.setLineDash([14, 6]); ctx.strokeStyle = PAL.dim; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(t.X(x0), t.Y(y)); ctx.lineTo(t.X(x1), t.Y(y)); ctx.stroke(); ctx.restore();
  ctx.fillStyle = PAL.dim; ctx.font = f(10, 700);
  [[x0], [x1]].forEach(([xx]) => {
    const px = t.X(xx), py = t.Y(y);
    ctx.beginPath(); ctx.moveTo(px, py - 3); ctx.lineTo(px - 4, py - 10); ctx.lineTo(px + 4, py - 10); ctx.closePath(); ctx.fill();
  });
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  const mx = t.X((x0 + x1) / 2), my = t.Y(y);
  ctx.fillStyle = PAL.ink; ctx.font = f(10.5, 800);
  ctx.fillText(name + ' ' + val, mx, my + 4);
}

/* ---- §6.2-3 ground + hatch ---- */
function groundDraw(ctx, t, x0, x1) {
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(t.X(x0), t.Y(0)); ctx.lineTo(t.X(x1), t.Y(0)); ctx.stroke();
  ctx.lineWidth = 1;
  for (let x = x0; x <= x1; x += 14 / t.s) {
    const px = t.X(x), py = t.Y(0), k = (px - t.X(x0)) / (t.X(x1) - t.X(x0));
    ctx.strokeStyle = 'rgba(22,22,26,' + (0.55 * (1 - k * k)).toFixed(3) + ')';
    ctx.beginPath(); ctx.moveTo(px, py + 1); ctx.lineTo(px - 8, py + 9); ctx.stroke();
  }
}

/* ---- §6.2-4 pads / blocks ---- */
function padDraw(ctx, t, r) {
  const x = t.X(r[0]), y = t.Y(r[3]), w = (r[1] - r[0]) * t.s, h = (r[3] - r[2]) * t.s;
  ctx.fillStyle = PAL.pad; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.2;
  ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h);
}
function blockDraw(ctx, t, r) {
  const x = t.X(r[0]), y = t.Y(r[3]), w = (r[1] - r[0]) * t.s, h = (r[3] - r[2]) * t.s;
  ctx.fillStyle = PAL.pad; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.2;
  ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h);
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.strokeStyle = 'rgba(22,22,26,0.5)'; ctx.lineWidth = 0.8;
  for (let d = -h; d < w; d += 7) { ctx.beginPath(); ctx.moveTo(x + d, y + h); ctx.lineTo(x + d + h, y); ctx.stroke(); }
  ctx.restore();
}

/* ---- §6.2-5 temporary brace ---- */
function braceDraw(ctx, t, x0, y0, x1, y1, off) {
  const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
  ctx.strokeStyle = PAL.dim; ctx.lineWidth = 1;
  [3.5, -3.5].forEach(o => { ctx.beginPath(); ctx.moveTo(t.X(x0 + o * nx), t.Y(y0 + o * ny)); ctx.lineTo(t.X(x1 + o * nx), t.Y(y1 + o * ny)); ctx.stroke(); });
  ctx.beginPath(); ctx.moveTo(t.X(x0), t.Y(y0)); ctx.lineTo(t.X(x1), t.Y(y1)); ctx.setLineDash([2, 3]); ctx.strokeStyle = '#b9b9c0'; ctx.stroke(); ctx.setLineDash([]);
  chipDraw(ctx, t.X((x0 + x1) / 2) + 6, t.Y((y0 + y1) / 2), 'TEMP');
}
function chipDraw(ctx, px, py, txt, col) {
  ctx.font = f(10, 800);
  const w = ctx.measureText(txt).width + 10;
  ctx.fillStyle = '#ffffff'; ctx.strokeStyle = col || PAL.dim; ctx.lineWidth = 1;
  ctx.beginPath();
  const r = 5, x = px - w / 2, y = py - 7, h = 14;
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = col || PAL.dim; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(txt, px, py);
}

/* ---- §6.2-6 callout · §6.2-7 screws ---- */
function calloutDraw(ctx, px, py, n) {
  ctx.beginPath(); ctx.arc(px, py, 9, 0, 7);
  ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.6; ctx.stroke();
  ctx.fillStyle = PAL.ink; ctx.font = f(11, 800); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(n), px, py + 0.5);
}
function screwsDraw(ctx, t, pts, pair) {
  pts.forEach(p => {
    const px = t.X(p[0]), py = t.Y(p[1]);
    ctx.beginPath(); ctx.arc(px, py, 2.1, 0, 7); ctx.fillStyle = PAL.ink; ctx.fill();
    ctx.beginPath(); ctx.arc(px, py, 3.8, 0, 7); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1; ctx.stroke();
  });
  if (pair) pts.length && chipDraw(ctx, t.X(pts[0][0]) + 4, t.Y(pts[0][1]) - 12, pair);
}

/* ---- detail source mark (§6.2-9) ---- */
function detMark(ctx, t, cx, cy, r, label) {
  ctx.save(); ctx.setLineDash([6, 4]); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.arc(t.X(cx), t.Y(cy), r * t.s, 0, 7); ctx.stroke(); ctx.restore();
  const px = t.X(cx) + r * t.s * 0.72, py = t.Y(cy) - r * t.s * 0.72;
  ctx.beginPath(); ctx.arc(px, py, 8, 0, 7); ctx.fillStyle = PAL.ink; ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = f(10, 800); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, px, py + 0.5);
}

/* ---- slope helper ---- */
function slopeDash(ctx, t) {
  const a = M.deck(0), b = M.deck(M.C.SLOPE);
  ctx.save(); ctx.setLineDash([8, 5]); ctx.strokeStyle = PAL.dim; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(t.X(a[0]), t.Y(a[1])); ctx.lineTo(t.X(b[0]), t.Y(b[1])); ctx.stroke(); ctx.restore();
  ctx.fillStyle = PAL.dim; ctx.font = f(10, 700);
  ctx.save(); const mx = t.X((a[0] + b[0]) / 2), my = t.Y((a[1] + b[1]) / 2);
  ctx.translate(mx, my - 6); ctx.rotate(Math.atan2(t.Y(a[1]) - t.Y(b[1]), t.X(b[0]) - t.X(a[0])));
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; ctx.fillText(M.C.PITCH.toFixed(1) + '\u00B0', 0, 0); ctx.restore();
}

/* ---- lap course lines ---- */
function courseLines(ctx, t, x0, x1, ys) {
  ctx.strokeStyle = 'rgba(22,22,26,0.30)'; ctx.lineWidth = 1;
  ys.forEach(y => { ctx.beginPath(); ctx.moveTo(t.X(x0), t.Y(y)); ctx.lineTo(t.X(x1), t.Y(y)); ctx.stroke(); });
}

/* ---- corrugation lines (plan sheets) ---- */
function corrDraw(ctx, t) {
  ctx.strokeStyle = 'rgba(22,22,26,0.28)'; ctx.lineWidth = 1;
  for (let x = -37; x <= 2160; x += M.C.CORR) { ctx.beginPath(); ctx.moveTo(t.X(x), t.Y(966)); ctx.lineTo(t.X(x), t.Y(22)); ctx.stroke(); }
}

/* ---- §6.2-8 orientation glyph (returns canvas) ---- */
function glyph(w, h) {
  const s = 24 / Math.max(w, h), gw = Math.max(7, Math.round(w * s)), gh = Math.max(7, Math.round(h * s));
  const [c, x] = mkCanvas(gw, gh);
  c.style.verticalAlign = '-6px'; c.style.marginRight = '7px'; c.style.display = 'inline-block';
  x.fillStyle = '#ffffff'; x.strokeStyle = PAL.ink; x.lineWidth = 1.6;
  x.fillRect(0.8, 0.8, gw - 1.6, gh - 1.6); x.strokeRect(0.8, 0.8, gw - 1.6, gh - 1.6);
  return c;
}

/* ---- §6.2-10/11 pictos (returns canvas 26×26) ---- */
function picto(name, warnStyle) {
  const S = 26, [c, x] = mkCanvas(S, S);
  x.strokeStyle = x.fillStyle = warnStyle ? PAL.warn : PAL.ink; x.lineWidth = 1.6; x.lineCap = 'round'; x.lineJoin = 'round';
  const L = () => x.stroke(), FR = () => x.fill();
  const tri = () => { x.beginPath(); x.moveTo(13, 3); x.lineTo(24, 23); x.lineTo(2, 23); x.closePath(); };
  switch (name) {
    case 'drill': x.beginPath(); x.rect(4, 8, 13, 7); L(); x.beginPath(); x.rect(17, 9.5, 5, 4); L(); x.beginPath(); x.moveTo(8, 15); x.lineTo(6, 23); x.lineTo(11, 23); x.lineTo(10, 15); x.closePath(); L(); break;
    case 'pilot': x.beginPath(); x.moveTo(6, 4); x.lineTo(20, 4); L(); x.beginPath(); x.moveTo(13, 4); x.lineTo(13, 16); L(); x.beginPath(); x.moveTo(13, 16); x.lineTo(10.5, 22); x.lineTo(13, 24); x.lineTo(15.5, 22); x.closePath(); L(); x.font = f(9, 800); x.textAlign = 'center'; x.fillText('3', 19.5, 24); break;
    case 'saw': x.beginPath(); x.moveTo(3, 9); x.lineTo(17, 9); x.lineTo(17, 15); x.lineTo(3, 15); x.closePath(); L(); x.beginPath(); for (let i = 3; i < 17; i += 3.5) { x.moveTo(i, 15); x.lineTo(i + 1.5, 19); } L(); x.beginPath(); x.rect(17, 8, 7, 8); L(); break;
    case 'level': x.beginPath(); x.rect(2, 9, 22, 8); L(); x.beginPath(); x.arc(13, 13, 2.6, 0, 7); L(); x.beginPath(); x.moveTo(13, 7.5); x.lineTo(13, 4); L(); break;
    case 'tape': x.beginPath(); x.rect(4, 6, 18, 14); L(); x.beginPath(); x.arc(13, 13, 4, 0, 7); L(); x.beginPath(); x.moveTo(22, 13); x.lineTo(26, 13); L(); break;
    case 'square': x.beginPath(); x.moveTo(4, 4); x.lineTo(4, 22); x.lineTo(11, 22); x.lineTo(11, 11); x.lineTo(22, 11); x.lineTo(22, 4); x.closePath(); L(); break;
    case 'clamp': x.beginPath(); x.arc(13, 12, 8, Math.PI * 0.5, Math.PI * 2.35); L(); x.beginPath(); x.moveTo(13, 20); x.lineTo(13, 26); L(); x.beginPath(); x.moveTo(5, 12); x.lineTo(5, 20); x.lineTo(10, 20); L(); break;
    case 'hammer': x.beginPath(); x.rect(4, 7, 12, 5); L(); x.beginPath(); x.moveTo(14, 12); x.lineTo(20, 12); L(); x.beginPath(); x.moveTo(9, 12); x.lineTo(9, 23); L(); x.beginPath(); x.moveTo(6.5, 12); x.lineTo(11.5, 12); L(); break;
    case 'brush': x.beginPath(); x.rect(9, 3, 8, 10); L(); x.beginPath(); x.rect(9, 13, 8, 6); L(); x.beginPath(); x.moveTo(9, 19); x.lineTo(9, 23); x.moveTo(13, 19); x.lineTo(13, 23); x.moveTo(17, 19); x.lineTo(17, 23); L(); break;
    case 'marker': x.beginPath(); x.moveTo(8, 22); x.lineTo(8, 9); x.lineTo(18, 4); x.lineTo(18, 22); x.closePath(); L(); x.beginPath(); x.moveTo(8, 22); x.lineTo(18, 22); L(); break;
    case 'pencil': x.beginPath(); x.moveTo(6, 22); x.lineTo(6, 12); x.lineTo(20, 4); x.lineTo(22, 8); x.lineTo(9, 20); x.closePath(); L(); x.beginPath(); x.moveTo(6, 22); x.lineTo(9, 20); L(); break;
    case 'helper': [[7], [18]].forEach(([bx]) => { x.beginPath(); x.arc(bx, 6, 2.2, 0, 7); L(); x.beginPath(); x.moveTo(bx, 8.2); x.lineTo(bx, 15); x.moveTo(bx - 3.5, 11); x.lineTo(bx + 3.5, 11); x.moveTo(bx, 15); x.lineTo(bx - 3, 21); x.moveTo(bx, 15); x.lineTo(bx + 3, 21); L(); }); break;
    case 'ladder': x.beginPath(); x.moveTo(6, 3); x.lineTo(10, 23); x.moveTo(20, 3); x.lineTo(16, 23); x.moveTo(7.2, 8); x.lineTo(18.8, 8); x.moveTo(8, 13); x.lineTo(18, 13); x.moveTo(8.8, 18); x.lineTo(17.2, 18); L(); break;
    case 'split': tri(); L(); x.beginPath(); x.moveTo(12, 9); x.lineTo(14, 13); x.lineTo(11, 16); x.lineTo(13, 20); L(); break;
    case 'sealer': tri(); L(); x.beginPath(); x.moveTo(8, 19); x.lineTo(18, 19); L(); x.beginPath(); x.moveTo(9, 19); x.lineTo(9, 15); x.moveTo(13, 19); x.lineTo(13, 15); x.moveTo(17, 19); x.lineTo(17, 15); L(); break;
    case 'wind': x.beginPath(); x.moveTo(3, 8); x.bezierCurveTo(12, 4, 20, 10, 24, 7); x.moveTo(3, 14); x.bezierCurveTo(12, 10, 20, 16, 24, 13); x.moveTo(3, 20); x.bezierCurveTo(10, 17, 16, 21, 21, 19); L(); break;
    case 'heavy': x.beginPath(); x.rect(7, 6, 12, 9); L(); x.beginPath(); x.moveTo(13, 15); x.lineTo(13, 19); x.moveTo(10, 17); x.lineTo(13, 20); x.lineTo(16, 17); L(); x.font = f(9, 800); x.textAlign = 'center'; x.fillText('2', 4, 24); break;
    case 'square2': x.beginPath(); x.rect(4, 10, 18, 8); L(); x.beginPath(); x.moveTo(13, 6); x.lineTo(13, 2); x.moveTo(10, 4); x.lineTo(13, 1); x.lineTo(16, 4); L(); break;
    case 'photo': x.beginPath(); x.rect(4, 7, 18, 13); L(); x.beginPath(); x.arc(13, 13.5, 3.5, 0, 7); L(); x.beginPath(); x.moveTo(17, 9); x.lineTo(19, 6.5); L(); break;
    case 'warn': tri(); L(); x.beginPath(); x.moveTo(13, 10); x.lineTo(13, 16); x.moveTo(13, 18.6); x.lineTo(13, 19.4); x.lineWidth = 2; L(); break;
    case 'tick': x.beginPath(); x.arc(13, 13, 10, 0, 7); x.strokeStyle = PAL.check; L(); x.strokeStyle = PAL.check; x.beginPath(); x.moveTo(8, 13.5); x.lineTo(11.5, 17); x.lineTo(18.5, 9.5); x.lineWidth = 2.2; L(); break;
  }
  return c;
}

/* ---- view extras registry (draw-time overlays) ---- */
const CO = M.courses;
const EXTRAS = {
  groundS: (c, t) => groundDraw(c, t, -140, 1080),
  groundR: (c, t) => groundDraw(c, t, -160, 2290),
  groundF: (c, t) => groundDraw(c, t, -160, 2290),
  padsS: (c, t) => { padDraw(c, t, [0, 50, -38, 0]); padDraw(c, t, [900, 950, -38, 0]); },
  blockS: (c, t) => blockDraw(c, t, [420, 530, -65, 75]),
  padsF: (c, t) => { padDraw(c, t, [0, 75, -38, 0]); padDraw(c, t, [2055, 2130, -38, 0]); },
  blockF: (c, t) => blockDraw(c, t, [940, 1190, -65, 75]),
  padsR: (c, t) => { padDraw(c, t, [0, 75, -38, 0]); padDraw(c, t, [2055, 2130, -38, 0]); },
  padsPlan: (c, t) => {
    padDraw(c, t, [-20, 95, -20, 70]); padDraw(c, t, [2035, 2150, -20, 70]);
    padDraw(c, t, [-20, 95, 880, 970]); padDraw(c, t, [2035, 2150, 880, 970]);
    blockDraw(c, t, [940, 1190, -25, 75]);
  },
  datum150: (c, t) => datumDraw(c, t, -90, 1040, 150, '150', ''),
  datum150r: (c, t) => datumDraw(c, t, -120, 2250, 150, '150', ''),
  datum145: (c, t) => datumDraw(c, t, -120, 2250, 145, '145', ''),
  datumBOX: (c, t) => datumDraw(c, t, -120, 2250, 1390, '1390', 'BOX LINE'),
  datumBOXs: (c, t) => datumDraw(c, t, -90, 1040, 1390, '1390', 'BOX LINE'),
  bracesR: (c, t) => { braceDraw(c, t, 925, 1500, 1180, 20); braceDraw(c, t, 925, 1500, 660, 20); },
  bracesF: (c, t) => { braceDraw(c, t, 25, 1440, -180, 20); braceDraw(c, t, 25, 1440, 300, 20); },
  bracesOff: (c, t) => { // removal state: dashed + ✕ + green tick note
    [[925, 1500, 1180, 20], [925, 1500, 660, 20], [25, 1440, -180, 20], [25, 1440, 300, 20]].forEach(b => {
      c.save(); c.setLineDash([4, 5]); c.strokeStyle = '#b9b9c0'; c.lineWidth = 1.4;
      c.beginPath(); c.moveTo(t.X(b[0]), t.Y(b[1])); c.lineTo(t.X(b[2]), t.Y(b[3])); c.stroke(); c.restore();
      const mx = t.X((b[0] + b[2]) / 2), my = t.Y((b[1] + b[3]) / 2);
      c.strokeStyle = PAL.check; c.lineWidth = 1.8;
      c.beginPath(); c.moveTo(mx - 4, my - 4); c.lineTo(mx + 4, my + 4); c.moveTo(mx + 4, my - 4); c.lineTo(mx - 4, my + 4); c.stroke();
    });
  },
  slope: (c, t) => slopeDash(c, t),
  envp: (c, t) => { const e = M.pieces.plan.ENV; c.save(); c.setLineDash([8, 5]); c.strokeStyle = PAL.dim; c.lineWidth = 1; c.beginPath(); c.rect(t.X(e[0]), t.Y(e[3]), (e[1] - e[0]) * t.s, (e[3] - e[2]) * t.s); c.stroke(); c.restore(); },
  corr: (c, t) => corrDraw(c, t),
  nails: (c, t) => {
    c.fillStyle = PAL.ink;
    [25, 475, 925].forEach(z => { for (let x = -37; x <= 2160; x += M.C.CORR) { c.beginPath(); c.arc(t.X(x), t.Y(z), 1.8, 0, 7); c.fill(); } });
    [37, 2093].forEach(x => { for (let z = 80; z <= 920; z += 190) { c.beginPath(); c.arc(t.X(x), t.Y(z), 1.8, 0, 7); c.fill(); } });
  },
  lapsS: (c, t) => courseLines(c, t, 14, 936, CO.side.lines),
  lapsR: (c, t) => courseLines(c, t, 20, 2110, CO.rear.lines),
  lapsD: (c, t) => courseLines(c, t, 8, 952, CO.door.lines),
  wraps: (c, t) => {
    c.save(); c.setLineDash([6, 4]); c.strokeStyle = PAL.dim; c.lineWidth = 1.2;
    [0, 2130].forEach(x => { c.beginPath(); c.moveTo(t.X(x), t.Y(-20)); c.lineTo(t.X(x), t.Y(1580)); c.stroke(); });
    c.restore();
  },
  arcUp: (c, t) => {
    c.save(); c.strokeStyle = PAL.dim; c.lineWidth = 1.6;
    c.beginPath(); c.arc(t.X(930), t.Y(0), 500 * t.s, Math.PI, Math.PI * 1.5); c.stroke();
    const ex = t.X(930) - 0 * t.s, ey = t.Y(0) - 500 * t.s;
    c.beginPath(); c.moveTo(ex, ey); c.lineTo(ex - 8, ey + 3); c.lineTo(ex - 3, ey + 8); c.closePath(); c.fillStyle = PAL.dim; c.fill();
    c.restore();
    chipDraw(c, t.X(600), t.Y(560), 'STAND UP');
  }
};

/* ---- panel renderer ---- */
const SCALES = []; // QA: per-canvas {sx, sy, gridPx}
function renderPanel(cfg) {
  const maxW = Math.min(window.innerWidth - 24, 440);
  const wCss = Math.min(maxW, cfg.wCss || maxW);
  const bnd = cfg.bnd ? cfg.bnd.slice() : M.VIEWS[cfg.kind].env.slice();
  const pad = 16;
  let s = (wCss - 2 * pad) / (bnd[1] - bnd[0]);
  let hCss = 2 * pad + (bnd[3] - bnd[2]) * s;
  const hMax = cfg.hMax || (cfg.small ? 300 : 520);
  if (hCss > hMax) { hCss = hMax; s = (hCss - 2 * pad) / (bnd[3] - bnd[2]); }
  const wEff = 2 * pad + (bnd[1] - bnd[0]) * s;
  const [cv, ctx] = mkCanvas(wEff, hCss);
  cv.className = 'cv' + (cfg.inset ? ' insetcv' : '');
  const t = T(bnd, wEff, hCss, pad);

  gridDraw(ctx, t, bnd, cfg.minor || 100);
  const G = M.pieces[cfg.kind] || {};
  const get = id => G[id];
  (cfg.extras || []).forEach(k => EXTRAS[k] && EXTRAS[k](ctx, t));
  (cfg.built || []).forEach(id => get(id) && pieceDraw(ctx, t, get(id), 'built', cfg.labels && cfg.labels[id]));
  (cfg.ghost || []).forEach(id => get(id) && pieceDraw(ctx, t, get(id), 'ghost'));
  (cfg.new || []).forEach(id => get(id) && pieceDraw(ctx, t, get(id), cfg.sheet ? 'sheet' : 'new', cfg.labels && cfg.labels[id] || id));
  if (cfg.screws) screwsDraw(ctx, t, cfg.screws, cfg.screwChip);
  (cfg.callouts || []).forEach((cl, i) => calloutDraw(ctx, t.X(cl[0]), t.Y(cl[1]), i + 1));
  if (cfg.det) detMark(ctx, t, cfg.det[0], cfg.det[1], cfg.det[2], cfg.det[3] || 'A');
  (cfg.post || []).forEach(k => EXTRAS[k] && EXTRAS[k](ctx, t));
  (cfg.dims || []).forEach(d => d.k === 'h' ? dimH(ctx, t, d.a, d.b, d.y, d.t) : dimV(ctx, t, d.a, d.b, d.x, d.t, d.s));

  SCALES.push({ sx: t.sx, sy: t.sy, gridPx: t.s * (cfg.minor || 100), minor: cfg.minor || 100, ok: Math.abs(t.sx - t.sy) < 1e-9 });
  return cv;
}

/* panel block: label + caption + canvas */
function panelBlock(cfg) {
  const wrap = el('div', 'panel');
  const head = el('div', 'vname');
  head.innerHTML = '<b>' + (cfg.label || M.VIEWS[cfg.kind].cap) + '</b>' + (cfg.sub ? '<span class="vsub"> — ' + cfg.sub + '</span>' : '');
  wrap.appendChild(head);
  wrap.appendChild(renderPanel(cfg));
  return wrap;
}
