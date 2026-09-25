/* steps-data.js — declarative content: PHASES + STEPS (41). Views per D11: every step = triptych.
   Geometry ids resolve in model.js M.pieces. Technique ported from v1 guide + v2 docs 09–12. */
'use strict';

const PHASES = {
  phase00: { num: '00', title: 'The base', steps: ['step01'], lead: 'Five pads and one bedded block. Nothing else ever touches the ground.', handle: '4 corner pads \u00D74 \u00B7 threshold block \u00D71 \u00B7 slate/packing', meta: [['level', 'Level \u00B15 mm'], ['helper', 'Solo OK']],
    views: [{ kind: 'plan', label: 'TOP', sub: 'the 5-pad layout', extras: ['padsPlan'], ghost: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp'], dims: [{ k: 'h', a: 0, b: 2130, y: -80, t: '2130' }, { k: 'v', a: 0, b: 950, x: 2320, t: '950', s: 'r' }] }] },
  phase01: { num: '01', title: 'Rear wall, built flat', steps: ['step02', 'step03', 'step04', 'step05', 'step06', 'step07'], lead: 'The tall wall, assembled face-up on the ground. RR2 sits on the box line \u2014 the FILL offcut completes the wall while it is still flat.', handle: 'RP1 \u00B7 RP2 \u00B7 RR1 \u00B7 RR2 \u00B7 RS (1150 \u2192 ~1090) \u00B7 FILL ~190', meta: [['drill', '~30 min'], ['helper', 'Solo OK']],
    views: [{ kind: 'rear', label: 'FACE', sub: 'the wall lying face up', built: ['RP1', 'RP2'], new: ['RR1', 'RR2', 'RS', 'FILL'], extras: ['datum150r', 'datumBOX'], labels: { RS: 'RS ~1090', FILL: 'FILL 190' }, dims: [{ k: 'v', a: 0, b: 1580, x: 2260, t: '1580', s: 'r' }] }] },
  phase02: { num: '02', title: 'Front wall, built flat', steps: ['step08', 'step09', 'step10', 'step11'], lead: 'Same recipe, shorter posts. The middle stays empty \u2014 that is the door opening.', handle: 'FP1 \u00B7 FP2 \u00B7 FT \u00B7 FH', meta: [['drill', '~30 min'], ['helper', 'Solo OK']],
    views: [{ kind: 'front', label: 'FACE', sub: 'the wall lying face up', built: ['FP1', 'FP2'], new: ['FT', 'FH'], extras: ['datum150r', 'datumBOX'], dims: [{ k: 'v', a: 0, b: 1390, x: 2260, t: '1390', s: 'r' }] }] },
  phase03: { num: '03', title: 'Stand the box', steps: ['step12', 'step13'], lead: 'Two walls upright, 850 apart, braced before anyone lets go.', handle: 'Both walls \u00B7 4+ temporary braces \u00B7 pegs', meta: [['helper', 'Helper needed'], ['wind', 'Calm-ish day']],
    views: [{ kind: 'side', label: 'SIDE', sub: 'both walls standing', built: ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundS', 'padsS', 'blockS', 'bracesR', 'bracesF', 'datum150'], dims: [{ k: 'v', a: 0, b: 1580, x: 1120, t: '1580', s: 'r' }] }] },
  phase04: { num: '04', title: 'Side rails', steps: ['step14', 'step15', 'step16', 'step17'], lead: 'Four rails lock the box: two bottoms on the 150 line, two tops on the box line 1390.', handle: 'SR1 \u00B7 SR2 \u00B7 SR3 \u00B7 SR4 (850 each)', meta: [['drill', '~45 min'], ['square2', 'Diagonals \u00B15']],
    views: [{ kind: 'side', label: 'SIDE', sub: 'bottom rails 150 \u00B7 top rails on the box line', built: ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL'], new: ['SRb', 'SRt'], extras: ['groundS', 'padsS', 'blockS', 'datum150', 'datumBOXs'], dims: [{ k: 'v', a: 0, b: 1390, x: 1120, t: '1390', s: 'r' }] }] },
  phase05: { num: '05', title: 'Roof frame', steps: ['step18', 'step19', 'step20', 'step21', 'step22'], lead: 'Two sloped pieces flat over the post lines, three rails flat between them. All five rows, tops flush, on the slope.', handle: 'SL1 \u00B7 SL2 (970) \u00B7 RC1 \u00B7 RC2 \u00B7 RC3 (1980)', meta: [['ladder', 'Ladder care'], ['helper', 'Helper useful']],
    views: [{ kind: 'plan', label: 'TOP', sub: 'the 5 nailing rows', built: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p'], new: ['SL1', 'SL2', 'RC1', 'RC2', 'RC3'], extras: ['envp'] }] },
  phase06: { num: '06', title: 'Door linings', steps: ['step23', 'step24'], lead: 'Two battens become the door stops \u2014 then photograph the frame: it is your nailing map.', handle: 'DL1 \u00B7 DL2 (1200 batten)', meta: [['drill', '~20 min'], ['photo', 'Photo checkpoint']],
    views: [{ kind: 'front', label: 'FRONT', sub: 'linings inside the opening', built: ['FP1', 'FP2', 'FT', 'FH'], new: ['DL1', 'DL2'], dims: [{ k: 'v', a: 150, b: 1340, x: -140, t: '1190', s: 'l' }] }] },
  phase07: { num: '07', title: 'Roof sheets', steps: ['step25', 'step26', 'step27', 'step28', 'step29'], lead: 'Dry-lay the set from the SW edge \u2014 one-corrugation laps facing NE \u2014 adjust, then nail the crests.', handle: '3 sheets + 1 strip (285) \u00B7 ~90\u2013105 nails', meta: [['ladder', 'On the roof'], ['wind', 'Not in gusts']],
    views: [{ kind: 'plan', label: 'TOP', sub: 'the 4-piece set', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SL1', 'SL2', 'RC1', 'RC2', 'RC3'], new: ['S1', 'S2', 'S3', 'ST'], sheet: true, extras: ['envp'], post: ['corr'] }] },
  phase08: { num: '08', title: 'Side cladding', steps: ['step30', 'step31', 'step32'], lead: '14 courses a side, first on the 150 line, top course raked to the slope. One wall at a time.', handle: '28 boards (944\u2013950) + 2 spare', meta: [['hammer', '~1\u00BE h'], ['level', 'Level every 2\u20133']],
    views: [{ kind: 'side', label: 'SIDE', sub: 'courses 1\u201314 + rake', built: ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL', 'SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3'], new: ['CLADs1', 'CLADs_RUN', 'CLADs14'], extras: ['groundS', 'padsS', 'datum150', 'slope'], labels: { CLADs1: 'course 1', CLADs_RUN: 'courses 2\u201313', CLADs14: 'rake' } }] },
  phase09: { num: '09', title: 'Rear cladding', steps: ['step33', 'step34', 'step35'], lead: '14 courses from 145, every board oversailing both corners with square-cut tails — nothing folds. Weatherproof gate: braces come off here.', handle: '15 boards (2188) + 1 spare \u00B7 sealer', meta: [['ladder', 'Ladder work'], ['wind', 'Boards catch wind']],
    views: [{ kind: 'rear', label: 'REAR', sub: '14 courses, square-cut corner tails', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2'], new: ['CLADr_ALL'], extras: ['groundR', 'padsR', 'datum145', 'wraps'], post: ['lapsR'], labels: { CLADr_ALL: 'courses 1\u201314' } }] },
  phase10: { num: '10', title: 'Doors + finish', steps: ['step36', 'step37', 'step38', 'step39', 'step40', 'step41'], lead: 'Two layered sandwiches built flat \u2014 never hung in this guide. Then the final walk-around.', handle: 'Stiles \u00D74 \u00B7 rails \u00D74 \u00B7 diagonals \u00D72 \u00B7 24 boards', meta: [['drill', 'Evening track'], ['photo', 'Final survey']],
    views: [{ kind: 'door', label: 'DOOR', sub: 'the layered sandwich', built: ['DSa', 'DSb', 'DRa', 'DRb'], new: ['DIAG', 'BOARDS'], post: ['lapsD'], dims: [{ k: 'v', a: 0, b: 1200, x: 1080, t: '1200', s: 'r' }] }] }
};
const PHASE_ORDER = ['phase00', 'phase01', 'phase02', 'phase03', 'phase04', 'phase05', 'phase06', 'phase07', 'phase08', 'phase09', 'phase10'];

/* view bundles */
const SIDE_CTX = ['groundS', 'padsS', 'blockS', 'bracesR', 'bracesF', 'datum150'];
const WALLS_SIDE = ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL'];
const ROOF_PLAN = ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p', 'SL1', 'SL2', 'RC1', 'RC2', 'RC3'];

const STEPS = {

/* ---------- PHASE 00 — the base ---------- */
step01: { phase: 'phase00', title: '5 pads + the threshold block',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'at ground', extras: ['groundS', 'padsS', 'blockS'], ghost: ['FP', 'RP', 'FT'], extras2: null,
      dims: [{ k: 'v', a: 0, b: 75, x: 620, t: '75', s: 'r' }, { k: 'v', a: 0, b: 150, x: -120, t: '150', s: 'l' }], callouts: [[25, -60], [475, -110]] },
    { kind: 'front', label: 'FRONT', sub: 'at ground', extras: ['groundF', 'padsF', 'blockF'], ghost: ['FP1', 'FP2', 'FT'],
      dims: [{ k: 'h', a: 0, b: 2130, y: -120, t: '2130' }] },
    { kind: 'plan', label: 'TOP', sub: 'the 5-pad layout', extras: ['padsPlan'], ghost: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp'],
      dims: [{ k: 'h', a: 0, b: 2130, y: -80, t: '2130' }, { k: 'v', a: 50, b: 900, x: 2320, t: '850', s: 'r' }] }
  ],
  actions: [
    'Set <b>4 corner pads</b> where the post bottoms land \u2014 level within <b>\u00B15 mm</b> of each other (level + tape).',
    'Bed the <b>threshold block</b> under the middle of the door side, ~25\u201330 deeper than the pads.',
    'Gauge trick: stand a 75\u00D750 offcut on a corner pad \u2014 block top meets its top = exactly <b>+75</b>.',
    'Slate-pack the block snug. Soft ground = bigger pads.'
  ],
  pieces: [['PAD', '215\u00D7440 block, flat', 'full block, flat on ground', 0, 0, 4], ['BLOCK', '215\u00D7440 block', 'full block, bedded deeper', 0, 0, 1]],
  tools: ['level', 'tape', 'square'],
  checks: ['4 pads level within 5 mm.', 'Block top = 75 above the pads\u2019 tops (offcut gauge).'] },

/* ---------- PHASE 01 — rear wall, flat ---------- */
step02: { phase: 'phase01', title: 'RP1 \u2014 first rear post',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', new: ['RP1'],
      dims: [{ k: 'h', a: 0, b: 2130, y: 1700, t: '2130' }, { k: 'v', a: 0, b: 1580, x: 2260, t: '1580', s: 'r' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'looking along the wall', new: ['RPs'] },
    { kind: 'plan', label: 'TOP', sub: 'this wall\u2019s place (drawn standing)', new: ['PR1'], ghost: ['PF1', 'PF2'] }
  ],
  actions: [
    'Lay <b>RP1</b> (1580) hard against a straight edge \u2014 an untouched 3.6 m stick or a wall \u2014 bottom end squared from it.',
    'Write <b>RP1</b> on the face you can see: that is the wall\u2019s outside face.',
    'Measure <b>150 up</b> from the bottom end, square a pencil line across \u2014 RR1 lands on it.'
  ],
  pieces: [['RP1', '1580 \u00D7 75\u00D750', '75 across \u00B7 50 deep (vertical)', 0, [75, 50]]],
  tools: ['tape', 'pencil', 'marker'],
  checks: ['Bottom end flush with the straight edge.'] },

step03: { phase: 'phase01', title: 'RP2 \u2014 second rear post',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1'], new: ['RP2'],
      dims: [{ k: 'h', a: 0, b: 2130, y: 1700, t: '2130' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'looking along the wall', new: ['RPs'] },
    { kind: 'plan', label: 'TOP', sub: 'this wall\u2019s place', built: ['PR1'], new: ['PR2'], ghost: ['PF1', 'PF2'] }
  ],
  actions: [
    'Mirror of RP1, ~2 m apart \u2014 the exact gap sets itself when RR1 fits between them.',
    'Both bottom ends hard against the <b>same</b> straight edge.',
    'Square the <b>150 line</b> across RP2 as well \u2014 two posts, two lines, one level.'
  ],
  pieces: [['RP2', '1580 \u00D7 75\u00D750', '75 across \u00B7 50 deep (vertical)', 0, [75, 50]]],
  tools: ['tape', 'pencil', 'square'],
  checks: ['150 lines level across both posts.'] },

step04: { phase: 'phase01', title: 'RR1 \u2014 bottom rail, on the 150 line',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1', 'RP2'], new: ['RR1'], extras: ['datum150r'],
      screws: [[107, 187], [137, 187], [1993, 187], [2023, 187]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 0, b: 150, x: -140, t: '150', s: 'l' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'on edge \u2014 75 tall', built: [], new: ['RPs', 'RR1s'] },
    { kind: 'plan', label: 'TOP', sub: 'between the posts', built: ['PR1', 'PR2'], new: ['RR1p'] }
  ],
  actions: [
    'RR1 slides <b>between</b> the posts \u2014 ends meet the posts\u2019 inner faces.',
    'Bottom edge <b>ON the two 150 lines</b>. On edge: 50 up, 75 tall.',
    'Clamp, then check <b>diagonals corner-to-corner equal within 3 mm</b> BEFORE screwing.',
    '2 \u00D7 5.0\u00D780 per joint, 3 mm pilots, ~25 in from edges, staggered.'
  ],
  pieces: [['RR1', '1980 \u00D7 75\u00D750', '50 up (on edge, 75 tall)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'clamp', 'tape'],
  warnings: [['split', 'Pilot 3 mm first \u2014 every screw within 100 mm of an end splits untreated timber without one.']],
  checks: ['Diagonals equal within 3 mm.', 'Bottoms still flush with the straight edge.'] },

step05: { phase: 'phase01', title: 'RR2 \u2014 top rail, on the BOX LINE',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1', 'RP2', 'RR1'], new: ['RR2'], extras: ['datumBOX'],
      screws: [[107, 1352], [137, 1352], [1993, 1352], [2023, 1352]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 1390, b: 1580, x: 2260, t: '190 down', s: 'r' }, { k: 'v', a: 0, b: 1390, x: -140, t: '1390', s: 'l' }],
      callouts: [[1065, 1440]] },
    { kind: 'rearSec', label: 'SECTION', sub: 'on edge \u2014 75 tall', new: ['RPs', 'RR1s', 'RR2s'] },
    { kind: 'plan', label: 'TOP', sub: 'same slot as RR1', built: ['PR1', 'PR2'], new: ['RR2p'] }
  ],
  insets: [
    { kind: 'rear', tag: 'measure DOWN 190 from the post tops', bnd: [-60, 560, 1180, 1660], built: ['RP1', 'RR1'], new: ['RR2'], extras: ['datumBOX'],
      dims: [{ k: 'v', a: 1390, b: 1580, x: 480, t: '190', s: 'r' }], minor: 50 }
  ],
  actions: [
    'Measure <b>DOWN 190</b> from each post top, square lines across both posts.',
    'Clamp RR2\u2019s <b>top edge on the lines</b> \u2192 top = the <b>box line 1390</b>, level with FH and the side top rails later.',
    'On edge, like RR1. 2 \u00D7 5.0\u00D780 per joint, pilots first.'
  ],
  pieces: [['RR2', '1980 \u00D7 75\u00D750', '50 up (on edge, 75 tall)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'clamp', 'square'],
  checks: ['Top edge reads 1390 at both ends.', 'Straight edge across post tops: RR2 top sits exactly 190 below, flush gap under it.'] },

step06: { phase: 'phase01', title: 'RS \u2014 mid strut: scribe, trim, bed under RR2',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1', 'RP2', 'RR1', 'RR2'], new: ['RS'],
      screws: [[1047, 240], [1082, 240], [1047, 1300], [1082, 1300]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 225, b: 1315, x: 1150, t: '~1090 as fit', s: 'r' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'vertical \u2014 on the rail', built: ['RR1s', 'RR2s'], new: ['RSs'] },
    { kind: 'plan', label: 'TOP', sub: 'centred on the wall', built: ['PR1', 'PR2', 'RR2p'], new: ['RSp'] }
  ],
  insets: [
    { kind: 'rearSec', tag: 'toe-screwing \u2014 screw enters the edge at ~45\u00B0', bnd: [-80, 140, 120, 420], built: ['RR1s'], new: ['RSs'],
      screws: [[10, 232]], minor: 50 }
  ],
  actions: [
    'Stand RS (cut 1150) on RR1, centred (~990 from each post). Plumb it.',
    '<b>Scribe</b>: mark where its top meets RR2\u2019s underside, take it out, <b>trim ~60 \u2192 ~1090</b> so it beds snug UNDER RR2 (top at 1315).',
    'Toe-screw the bottom: 2 screws at ~45\u00B0 through the strut edge into the rail.',
    '2 screws down through RR2\u2019s top edge into the strut top.'
  ],
  pieces: [['RS', '1150 \u2192 trim ~1090 \u00D7 75\u00D750', '75 across \u00B7 50 deep (vertical)', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'saw', 'level'],
  checks: ['RS beds snug under RR2 \u2014 no gap, no force.', 'Plumb across the wall.'] },

step07: { phase: 'phase01', title: 'FILL ~190 \u2014 the wall completes flat',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS'], new: ['FILL'],
      screws: [[1045, 1420], [1085, 1420]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 1390, b: 1580, x: 1150, t: '190', s: 'r' }, { k: 'v', a: 0, b: 1580, x: 2260, t: '1580', s: 'r' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'the contiguous stack', built: ['RPs', 'RR1s', 'RR2s', 'RSs'], new: ['FILLs'] },
    { kind: 'plan', label: 'TOP', sub: 'above RS', built: ['PR1', 'PR2', 'RR2p'], new: ['FILLp'] }
  ],
  actions: [
    'Cut <b>~190</b> from the S3/S4 ~225 offcut \u2014 it fills 1390\u21921580, <b>aligned above RS</b>, up to the post-top plane.',
    'Seal both fresh ends today.',
    '2 toe-screws through its edge into RR2. The cladding nails it again later.',
    'Re-check the whole wall\u2019s diagonals \u2014 the wall now stands <b>complete</b>, no after-standing fill job left.'
  ],
  pieces: [['FILL', '~190 \u00D7 75\u00D750', '75 across \u00B7 50 deep (vertical)', 0, [75, 50]]],
  tools: ['saw', 'brush', 'drill', 'pilot'],
  warnings: [['sealer', 'Seal every fresh cut end the same day \u2014 end grain drinks water.']],
  checks: ['Mid-wall stack contiguous: 225 \u2192 1315 \u2192 1390 \u2192 1580, zero gaps.'] },

/* ---------- PHASE 02 — front wall, flat ---------- */
step08: { phase: 'phase02', title: 'FP1 \u2014 first front post',
  panels: [
    { kind: 'front', label: 'FACE', sub: 'wall lying face up', new: ['FP1'],
      dims: [{ k: 'h', a: 0, b: 2130, y: 1500, t: '2130' }, { k: 'v', a: 0, b: 1390, x: 2260, t: '1390', s: 'r' }] },
    { kind: 'frontSec', label: 'SECTION', sub: 'looking along the wall', new: ['FPs'] },
    { kind: 'plan', label: 'TOP', sub: 'door end', new: ['PF1'], ghost: ['PR1', 'PR2'] }
  ],
  actions: [
    'Same straight edge. FP1 (1390) is the door-end left corner \u2014 the middle of this wall stays <b>empty</b>: the door opening.',
    'Label the face. Measure <b>75 up</b> from the bottom, square a line \u2014 FT lands on it.'
  ],
  pieces: [['FP1', '1390 \u00D7 75\u00D750', '75 across \u00B7 50 deep (vertical)', 0, [75, 50]]],
  tools: ['tape', 'pencil', 'marker'] },

step09: { phase: 'phase02', title: 'FP2 \u2014 second front post',
  panels: [
    { kind: 'front', label: 'FACE', sub: 'wall lying face up', built: ['FP1'], new: ['FP2'],
      dims: [{ k: 'h', a: 0, b: 2130, y: 1500, t: '2130' }] },
    { kind: 'frontSec', label: 'SECTION', sub: 'looking along the wall', new: ['FPs'] },
    { kind: 'plan', label: 'TOP', sub: 'door end', built: ['PF1'], new: ['PF2'], ghost: ['PR1', 'PR2'] }
  ],
  actions: [
    'Mirror of FP1 on the same straight edge.',
    'Square the <b>75 line</b> across FP2 too \u2014 both posts marked.'
  ],
  pieces: [['FP2', '1390 \u00D7 75\u00D750', '75 across \u00B7 50 deep (vertical)', 0, [75, 50]]],
  tools: ['tape', 'pencil', 'square'] },

step10: { phase: 'phase02', title: 'FT \u2014 threshold, top face on the 150 line',
  panels: [
    { kind: 'front', label: 'FACE', sub: 'wall lying face up', built: ['FP1', 'FP2'], new: ['FT'], extras: ['datum150r'],
      screws: [[107, 112], [137, 112], [1993, 112], [2023, 112]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 0, b: 150, x: -140, t: '150', s: 'l' }, { k: 'v', a: 0, b: 75, x: 2260, t: '75', s: 'r' }] },
    { kind: 'frontSec', label: 'SECTION', sub: 'on edge \u2014 75 tall', new: ['FPs', 'FTs'] },
    { kind: 'plan', label: 'TOP', sub: 'between the posts', built: ['PF1', 'PF2'], new: ['FTp'] }
  ],
  actions: [
    'FT between the posts, bottom edge on the <b>75 lines</b> \u2192 its <b>top face lands exactly on 150</b>.',
    'On edge. Sits 75 higher than RR1 on purpose \u2014 it is the door sill the bike wheels roll over.',
    'Diagonals equal within 3 mm, then 2 \u00D7 5.0\u00D780 per joint.'
  ],
  pieces: [['FT', '1980 \u00D7 75\u00D750', '50 up (on edge, 75 tall)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'clamp', 'tape'],
  checks: ['Top face = 150 at both ends.', 'Diagonals equal within 3 mm.'] },

step11: { phase: 'phase02', title: 'FH \u2014 header, flat, top on the box line',
  panels: [
    { kind: 'front', label: 'FACE', sub: 'wall lying face up', built: ['FP1', 'FP2', 'FT'], new: ['FH'], extras: ['datumBOX'],
      screws: [[107, 1365], [137, 1365], [1993, 1365], [2023, 1365]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 0, b: 1390, x: 2260, t: '1390', s: 'r' }, { k: 'v', a: 150, b: 1340, x: -140, t: '1190 opening', s: 'l' }] },
    { kind: 'frontSec', label: 'SECTION', sub: 'FLAT \u2014 only 50 tall', new: ['FPs', 'FTs', 'FHs'] },
    { kind: 'plan', label: 'TOP', sub: 'same slot as FT', built: ['PF1', 'PF2'], new: ['FHp'] }
  ],
  actions: [
    'FH between the posts, <b>FLAT</b> (75 up, only 50 tall), <b>top edge on the box line 1390</b> \u2014 flush with the post tops.',
    'Door opening is now 150 \u2192 1340.',
    'Sanity check: lay a batten from a front post top towards a rear post top \u2014 that <b>190 step IS the roof slope</b> (12.6\u00B0).',
    '2 \u00D7 5.0\u00D780 per joint, pilots first.'
  ],
  pieces: [['FH', '1980 \u00D7 75\u00D750', '75 up (flat, 50 tall)', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'clamp', 'square'],
  warnings: [['split', 'FH flat, not on edge \u2014 on edge the wall top becomes 75 tall and breaks the box line.']],
  checks: ['Straight edge across all three: post tops + FH top touch together.', 'Front total 1390.'] },

/* ---------- PHASE 03 — stand the box ---------- */
step12: { phase: 'phase03', title: 'Stand the rear wall + braces',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'rear wall standing', built: ['RP', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundS', 'padsS', 'bracesR', 'datum150', 'arcUp'],
      dims: [{ k: 'v', a: 0, b: 1580, x: 1120, t: '1580', s: 'r' }], callouts: [[1100, 700]] },
    { kind: 'rear', label: 'REAR', sub: 'the wall you just built', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datum150r'] },
    { kind: 'plan', label: 'TOP', sub: 'rear wall in place', built: ['PR1', 'PR2', 'RR1p', 'RR2p', 'RSp', 'FILLp'], ghost: ['PF1', 'PF2', 'FTp'],
      dims: [{ k: 'v', a: 50, b: 900, x: 2320, t: '850 next', s: 'r' }] }
  ],
  actions: [
    'Walk the wall upright to the <b>rear line of the pads</b> (helper: one holds, one checks plumb on two faces).',
    'It is floppy \u2014 normal. The cladding makes it rigid later.',
    '<b>Braces BEFORE hands off</b>: one per corner, rail \u2192 diagonal down/out \u2192 ground peg, screwed.',
    'Only the 4 posts touch the pads \u2014 bottom rails ride the 150 line.'
  ],
  pieces: [['BRACE', 'batten offcut \u00D72+', 'diagonal, rail \u2192 peg', 0, 0, 4]],
  tools: ['drill', 'level', 'helper'],
  warnings: [['wind', 'The wind owns an unbraced wall tonight \u2014 braces solid before anyone lets go.']],
  checks: ['Plumb on two faces of a post.', 'Braces solid before hands leave.'] },

step13: { phase: 'phase03', title: 'Stand the front wall, 850 away',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'both walls standing', built: ['RP', 'RR1', 'RR2', 'RS', 'FILL', 'FP', 'FT', 'FH'], extras: SIDE_CTX,
      dims: [{ k: 'h', a: 50, b: 900, y: -120, t: '850' }, { k: 'v', a: 0, b: 1390, x: -120, t: '1390', s: 'l' }] },
    { kind: 'front', label: 'FRONT', sub: 'door wall on its pads', built: ['FP1', 'FP2', 'FT', 'FH'], extras: ['groundF', 'padsF', 'blockF', 'datum150r'],
      dims: [{ k: 'h', a: 0, b: 2130, y: -120, t: '2130' }] },
    { kind: 'plan', label: 'TOP', sub: 'both walls, 850 apart', built: ['PR1', 'PR2', 'RR1p', 'RR2p', 'PF1', 'PF2', 'FTp'],
      dims: [{ k: 'v', a: 50, b: 900, x: 2320, t: '850', s: 'r' }] }
  ],
  actions: [
    'Stand the front wall on its pads \u2014 including the <b>bedded block</b> under the threshold (its top meets FT\u2019s underside).',
    'Brace it the same way: one per corner, header \u2192 peg forward.',
    'Measure <b>850 post-face to post-face, BOTH sides</b> \u2014 the side rails lock it next phase.'
  ],
  pieces: [['BRACE', 'batten offcut \u00D72+', 'diagonal, header \u2192 peg', 0, 0, 4]],
  tools: ['drill', 'level', 'tape', 'helper'],
  checks: ['850 both sides within a few mm.', 'Both walls plumb.'] },

/* ---------- PHASE 04 — side rails ---------- */
step14: { phase: 'phase04', title: 'SR1 \u2014 bottom side rail (left)',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'left wall', built: WALLS_SIDE, new: ['SRb'], labels: { SRb: 'SR1' }, extras: SIDE_CTX,
      screws: [[75, 187], [875, 187]], screwChip: '\u00D72', dims: [{ k: 'v', a: 0, b: 150, x: -120, t: '150', s: 'l' }] },
    { kind: 'rear', label: 'REAR', sub: 'level across from RR1', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datum150r', 'datumBOX'] },
    { kind: 'plan', label: 'TOP', sub: 'between front and rear posts', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['SR1p'], labels: { SR1p: 'SR1' } }
  ],
  actions: [
    'SR1 (850) between the front and rear posts, <b>bottom edge on the 150 line</b> \u2014 level across from RR1.',
    'On edge. Deliberately above the threshold: the threshold is a sill, not a rail row.',
    '2 \u00D7 5.0\u00D780 through each post into the rail end, pilots first.'
  ],
  pieces: [['SR1', '850 \u00D7 75\u00D750', '50 up (on edge, 75 tall)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'],
  checks: ['Bottom edge = 150, level with RR1.'] },

step15: { phase: 'phase04', title: 'SR2 \u2014 bottom side rail (right)',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'right wall (same view)', built: WALLS_SIDE, new: ['SRb'], labels: { SRb: 'SR2' }, extras: SIDE_CTX },
    { kind: 'rear', label: 'REAR', sub: 'all three bottom rails share 150', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datum150r'] },
    { kind: 'plan', label: 'TOP', sub: 'right wall', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['SR2p'], labels: { SR2p: 'SR2' } }
  ],
  actions: [
    'Identical to SR1, right wall \u2014 the drawing shows the same side view.',
    'Check: SR1, RR1, SR2 bottoms all on the one 150 line.'
  ],
  pieces: [['SR2', '850 \u00D7 75\u00D750', '50 up (on edge, 75 tall)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'] },

step16: { phase: 'phase04', title: 'SR3 \u2014 TOP side rail (left), on the box line',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'left wall', built: WALLS_SIDE.concat(['SRb']), new: ['SRt'], labels: { SRt: 'SR3' }, extras: SIDE_CTX.concat(['datumBOXs']),
      screws: [[75, 1352], [875, 1352]], screwChip: '\u00D72', dims: [{ k: 'v', a: 0, b: 1390, x: 1120, t: '1390', s: 'r' }] },
    { kind: 'rear', label: 'REAR', sub: 'level with RR2 \u2014 the box line', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datumBOX'] },
    { kind: 'plan', label: 'TOP', sub: 'directly above SR1', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SR1p'], new: ['SR3p'], labels: { SR3p: 'SR3' } }
  ],
  actions: [
    'SR3 horizontal, directly above SR1, <b>top edge on the box line 1390</b> (band 1315\u20131390).',
    'Level across from RR2 / FH \u2014 four wall tops, one line.',
    'It touches the sloped rail only at the front \u2014 the growing gap to the rear is expected (the rake + a scribed wedge offcut covers it, step 32).',
    '2 screws per end into the posts.'
  ],
  pieces: [['SR3', '850 \u00D7 75\u00D750', '50 up (on edge, 75 tall)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'],
  checks: ['Top edge reads 1390 at both ends, level.'] },

step17: { phase: 'phase04', title: 'SR4 \u2014 TOP side rail (right)',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'right wall', built: WALLS_SIDE.concat(['SRb']), new: ['SRt'], labels: { SRt: 'SR4' }, extras: SIDE_CTX.concat(['datumBOXs']) },
    { kind: 'rear', label: 'REAR', sub: 'all four tops on the box line', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datumBOX'] },
    { kind: 'plan', label: 'TOP', sub: 'directly above SR2', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SR2p'], new: ['SR4p'], labels: { SR4p: 'SR4' } }
  ],
  actions: [
    'Mirror of SR3. Check across: SR3 and SR4 tops level with each other.',
    'All four side rails in: 2 bottoms on 150, 2 tops on 1390.'
  ],
  pieces: [['SR4', '850 \u00D7 75\u00D750', '50 up (on edge, 75 tall)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'] },

/* ---------- PHASE 05 — roof frame ---------- */
step18: { phase: 'phase05', title: 'SL1 \u2014 flat on the slope, over the LEFT post line',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'over the left post line', built: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p'], new: ['SL1'], extras: ['envp'],
      screws: [[37, 925], [37, 25]], screwChip: '\u00D72',
      dims: [{ k: 'h', a: 75, b: 2055, y: 1030, t: '1980 inner face to inner face' }], det: [380, 480, 130, 'A'] },
    { kind: 'side', label: 'SIDE', sub: 'flat on the slope \u2014 50 tall', built: WALLS_SIDE.concat(['SRb', 'SRt']), new: ['SLp'], extras: ['groundS', 'padsS', 'slope'], labels: { SLp: 'SL1' } },
    { kind: 'rear', label: 'REAR', sub: 'its rear end lands on the post tops', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], new: ['SLr1'], ghost: ['SLr2'], extras: ['groundR', 'padsR'] }
  ],
  insets: [
    { kind: 'side', tag: 'the wedge over the rear post top', bnd: [620, 1190, 1080, 1930], built: ['RP', 'RR2', 'FILL'], new: ['SLp'], extras: ['slope'], minor: 50 },
    { kind: 'plan', tag: 'inner face flush at x = 75', bnd: [-140, 540, -80, 1120], built: ['PF1', 'PR1'], new: ['SL1'], extras: ['envp'],
      dims: [{ k: 'h', a: 75, b: 2055, y: -50, t: '1980' }], minor: 50 }
  ],
  actions: [
    'Carry SL1 (970) up. It lies <b>FLAT</b> (75 across, 50 tall) over the <b>whole left post line</b> (x 0\u201375), running up the slope.',
    'Bearings: front wall-top plane \u2192 rear post tops. Flush with the posts\u2019 outer faces \u2014 <b>inner face at x=75</b> so the rails drop in at 1980.',
    'Front end: shave its underside ~12.6\u00B0 where it passes the front wall top \u2014 the tip becomes the eaves over the doors.',
    '2 screws down into each post top it crosses.'
  ],
  pieces: [['SL1', '970 \u00D7 75\u00D750', '75 across \u00B7 50 tall, FLAT on the slope', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'ladder', 'helper'],
  warnings: [['heavy', '970 stick up a ladder \u2014 helper passes, you place.']],
  checks: ['Lies flat, no rocking.', '1980 clearance to the far side (check at both ends once SL2 is on).'] },

step19: { phase: 'phase05', title: 'SL2 \u2014 flat on the slope, over the RIGHT post line',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'mirror over the right post line', built: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p', 'SL1'], new: ['SL2'], extras: ['envp'],
      screws: [[2093, 925], [2093, 25]], screwChip: '\u00D72',
      dims: [{ k: 'h', a: 75, b: 2055, y: 1030, t: '1980' }] },
    { kind: 'side', label: 'SIDE', sub: 'same plane, same wedge', built: WALLS_SIDE.concat(['SRb', 'SRt']), new: ['SLp'], extras: ['groundS', 'padsS', 'slope'], labels: { SLp: 'SL1 + SL2' } },
    { kind: 'rear', label: 'REAR', sub: 'both rear ends home', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'SLr1'], new: ['SLr2'], extras: ['groundR', 'padsR'] }
  ],
  actions: [
    'Mirror of SL1: x 2055\u20132130, straight over the right post line.',
    'Same wedge over the rear post, same front shave \u2014 mirror everything.',
    'Check: <b>1980 between the two inner faces, both ends</b> \u2014 the same 1980 world as the rails below.'
  ],
  pieces: [['SL2', '970 \u00D7 75\u00D750', '75 across \u00B7 50 tall, FLAT on the slope', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'ladder', 'helper'],
  checks: ['1980 between inner faces at both ends.'] },

step20: { phase: 'phase05', title: 'RC1 \u2014 front roof rail, flat over FH',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'the same 1980 slot', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SL1', 'SL2'], new: ['RC1'], extras: ['envp'],
      screws: [[87, 25], [1993, 25]], screwChip: '\u00D72' },
    { kind: 'side', label: 'SIDE', sub: 'flat at the front bearing', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp']), new: ['RCp1'], extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'front', label: 'FRONT', sub: 'directly above FH \u2192 roof plane 1440', built: ['FP1', 'FP2', 'FT', 'FH', 'SLf1', 'SLf2'], new: ['RC1f'], extras: ['groundF', 'padsF'],
      dims: [{ k: 'v', a: 1390, b: 1440, x: -140, t: '1440', s: 'l' }] }
  ],
  actions: [
    '<b>Dry-fit first</b>: RC1 should drop in snug between the side pieces. Tight or gap = the SLs are off their post lines.',
    'Flat over FH (z 0\u201350) \u2014 the front nailing row. Top flush with the SL tops.',
    '2 screws through each side piece into the rail ends \u2014 the same joint as the walls below.'
  ],
  pieces: [['RC1', '1980 \u00D7 75\u00D750', '75 across \u00B7 50 tall, FLAT on the slope', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'ladder'],
  checks: ['Top flush with the side pieces \u2014 the sheets must sit flat.'] },

step21: { phase: 'phase05', title: 'RC2 \u2014 middle roof rail, mid-slope',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'mid-slope (z ~450\u2013500)', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SL1', 'SL2', 'RC1'], new: ['RC2'], extras: ['envp'],
      screws: [[87, 475], [1993, 475]], screwChip: '\u00D72' },
    { kind: 'side', label: 'SIDE', sub: 'bridges \u2014 air below is the shed', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1']), new: ['RCp2'], extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'rear', label: 'REAR', sub: 'RC2 hidden mid-slope (dashed)', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'SLr1', 'SLr2'], ghost: ['RC2r'], extras: ['groundR', 'padsR'] }
  ],
  actions: [
    'RC2 flat between the side pieces at mid-slope \u2014 the middle nailing row.',
    'Like the side pieces it <b>bridges</b>: nothing under its middle, by design.',
    '2 screws through each side piece into the ends.'
  ],
  pieces: [['RC2', '1980 \u00D7 75\u00D750', '75 across \u00B7 50 tall, FLAT on the slope', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'ladder'] },

step22: { phase: 'phase05', title: 'RC3 \u2014 on the POST TOPS, not on RR2',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'rear row, over the post tops', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SL1', 'SL2', 'RC1', 'RC2'], new: ['RC3'], extras: ['envp'],
      screws: [[87, 925], [1993, 925]], screwChip: '\u00D72' },
    { kind: 'side', label: 'SIDE', sub: 'rear bearing \u2192 roof plane 1630', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2']), new: ['RCp3'], extras: ['groundS', 'padsS', 'slope'],
      dims: [{ k: 'v', a: 1580, b: 1630, x: 1120, t: '1630', s: 'r' }] },
    { kind: 'rear', label: 'REAR', sub: 'the true rear stack', built: ['RP1', 'RP2', 'RR1', 'RS', 'FILL', 'RR2', 'SLr1', 'SLr2'], new: ['RC3r'], extras: ['groundR', 'padsR'],
      dims: [{ k: 'v', a: 1390, b: 1580, x: 1150, t: '190', s: 'r' }], labels: { FILL: 'FILL behind' } }
  ],
  actions: [
    'RC3 flat between the side pieces, lying <b>ON the rear post tops</b> \u2014 NOT on RR2 (RR2 is 190 down, on the box line).',
    'Behind it at mid-wall: the FILL offcut fills 1390\u21921580. Post top \u2192 RC3 = the 1630 roof plane.',
    '2 screws through each side piece into the ends. Sight down the roof: <b>5 rows, tops flush</b>, no rocking sheet later.'
  ],
  pieces: [['RC3', '1980 \u00D7 75\u00D750', '75 across \u00B7 50 tall, FLAT on the slope', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'ladder'],
  checks: ['Five parallel rows, tops level \u2014 straight edge down the slope touches all.'] },

/* ---------- PHASE 06 — door linings ---------- */
step23: { phase: 'phase06', title: 'DL1 \u2014 door lining (left)',
  panels: [
    { kind: 'front', label: 'FRONT', sub: 'inside the opening', built: ['FP1', 'FP2', 'FT', 'FH'], new: ['DL1'], extras: ['groundF', 'padsF', 'blockF', 'datum150r'],
      screws: [[86, 300], [86, 1300]], screwChip: '\u00D72', dims: [{ k: 'v', a: 150, b: 1340, x: -140, t: '1190', s: 'l' }] },
    { kind: 'side', label: 'SIDE', sub: 'hard against the post\u2019s inner face', built: WALLS_SIDE, new: ['DLs'], extras: SIDE_CTX, labels: { DLs: 'DL1' } },
    { kind: 'plan', label: 'TOP', sub: 'the door stop strip', built: ['PF1', 'PF2', 'FTp'], new: ['DL1p'] }
  ],
  actions: [
    'DL1 vertical, hard against FP1\u2019s <b>inner face</b>, bottom on the threshold. The closed door rests against it.',
    'Opening is 1190 tall vs the 1200 batten \u2014 <b>trim ~10</b> off the top if it stands proud.',
    'Plumb-check, then 2 screws top + bottom into the post.'
  ],
  pieces: [['DL1', '1200 \u00D7 50\u00D722', '50 across \u00B7 22 deep (vertical)', 0, [50, 22]]],
  tools: ['drill', 'pilot', 'level', 'tape'],
  checks: ['Plumb both faces.'] },

step24: { phase: 'phase06', title: 'DL2 + the frame checkpoint',
  panels: [
    { kind: 'front', label: 'FRONT', sub: 'the true door opening', built: ['FP1', 'FP2', 'FT', 'FH', 'DL1'], new: ['DL2'],
      screws: [[2044, 300], [2044, 1300]], screwChip: '\u00D72' },
    { kind: 'side', label: 'SIDE', sub: 'both linings in', built: WALLS_SIDE, new: ['DLs'], extras: SIDE_CTX, labels: { DLs: 'DL1+DL2' } },
    { kind: 'plan', label: 'TOP', sub: 'measure the REAL opening now', built: ['PF1', 'PF2', 'FTp', 'DL1p'], new: ['DL2p'] }
  ],
  actions: [
    'Mirror on the right post.',
    '<b>Measure the real opening</b> between the linings \u2014 the doors are cut to it, not to the drawing.',
    'Whole-box diagonals at the top rails within 5 mm; 4 posts plumb; rack test \u2014 braces stop it moving more than a few mm.',
    '<b>PHOTO the frame</b> \u2014 it is the nailing map for the cladding.'
  ],
  pieces: [['DL2', '1200 \u00D7 50\u00D722', '50 across \u00B7 22 deep (vertical)', 0, [50, 22]]],
  tools: ['drill', 'pilot', 'level', 'photo', 'square2'],
  checks: ['Diagonals of the whole box within 5 mm.', 'All 4 posts plumb, two faces each.', 'Frame photographed.'] },

/* ---------- PHASE 07 — roof sheets ---------- */
step25: { phase: 'phase07', title: 'Sheet 1 \u2014 SW edge, dry-lay',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'windward edge first', built: ROOF_PLAN, new: ['S1'], sheet: true, extras: ['envp'], post: ['corr'],
      dims: [{ k: 'h', a: -75, b: 685, y: 1030, t: '760' }] },
    { kind: 'side', label: 'SIDE', sub: 'corrugations run down-slope', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'front', label: 'FRONT', sub: '~16 proud over the doors (eaves)', built: ['FP1', 'FP2', 'FT', 'FH', 'RC1f', 'SLf1', 'SLf2'], new: ['SHEETf'], sheet: true, extras: ['groundF', 'padsF'] }
  ],
  insets: [
    { kind: 'plan', tag: 'the lap: valley over ridge, 95 = one corrugation', bnd: [430, 850, -60, 1060], built: ['S1'], new: ['S2'], sheet: true, post: ['corr'],
      dims: [{ k: 'h', a: 590, b: 685, y: -30, t: '95' }], minor: 50 }
  ],
  actions: [
    'Pass the sheets up (2.2 kg each, one hand each).',
    'Sheet 1 at the <b>SW edge</b> \u2014 prevailing UK wind is SW, so start there: every later overlap faces NE, away from the weather.',
    'Corrugations run <b>down-slope</b> \u2014 the 760 width spans across the shed. <b>Never rotate a sheet.</b>',
    '<b>NO nails yet</b> \u2014 dry-lay all four (steps 25\u201328), adjust, then nail (29).'
  ],
  pieces: [['S1', '760 \u00D7 1000 Onduline', 'corrugations down-slope', 0, 0]],
  tools: ['ladder', 'helper', 'tape'],
  warnings: [['wind', 'Gusts wrestle a 1 m sheet \u2014 if the wind bothers the ladder, it bothers the sheet more.']],
  checks: ['Overhang ~53 past the wall faces, roughly equal ends.'] },

step26: { phase: 'phase07', title: 'Sheet 2 \u2014 one-corrugation lap',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'laps 95 onto sheet 1, facing NE', built: ROOF_PLAN.concat(['S1']), new: ['S2'], sheet: true, extras: ['envp'], post: ['corr'],
      dims: [{ k: 'h', a: 590, b: 685, y: 1030, t: '95' }] },
    { kind: 'side', label: 'SIDE', sub: 'the set on the slope', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'front', label: 'FRONT', sub: 'eaves line straight', built: ['FP1', 'FP2', 'FT', 'FH', 'RC1f', 'SLf1', 'SLf2'], new: ['SHEETf'], sheet: true, extras: ['groundF', 'padsF'] }
  ],
  actions: [
    'Sheet 2 overlaps sheet 1 by <b>EXACTLY one corrugation (95)</b>: the upper sheet\u2019s valley drops over the lower\u2019s ridge \u2014 snug, like stacked egg-boxes.',
    'Keep it floating loose \u2014 still no nails.'
  ],
  pieces: [['S2', '760 \u00D7 1000 Onduline', 'corrugations down-slope', 0, 0]],
  tools: ['ladder', 'helper'] },

step27: { phase: 'phase07', title: 'Sheet 3',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'same lap again', built: ROOF_PLAN.concat(['S1', 'S2']), new: ['S3'], sheet: true, extras: ['envp'], post: ['corr'] },
    { kind: 'side', label: 'SIDE', sub: 'three sheets on', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'front', label: 'FRONT', sub: 'still dry', built: ['FP1', 'FP2', 'FT', 'FH', 'RC1f', 'SLf1', 'SLf2'], new: ['SHEETf'], sheet: true, extras: ['groundF', 'padsF'] }
  ],
  actions: [
    'Same lap again \u2014 3 sheets now cover 2090 across a 2174 wall-face envelope: <b>26 short</b>. That is what the strip is for.'
  ],
  pieces: [['S3', '760 \u00D7 1000 Onduline', 'corrugations down-slope', 0, 0]],
  tools: ['ladder', 'helper'] },

step28: { phase: 'phase07', title: 'The 3-corrugation strip \u2014 NE edge',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'strip laps UNDER sheet 3', built: ROOF_PLAN.concat(['S1', 'S2', 'S3']), new: ['ST'], sheet: true, extras: ['envp'], post: ['corr'],
      dims: [{ k: 'h', a: -75, b: 2205, y: 1030, t: '2280 total cover' }, { k: 'h', a: -75, b: 0, y: -60, t: '53' }] },
    { kind: 'side', label: 'SIDE', sub: 'the set complete, still dry', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'front', label: 'FRONT', sub: 'equal eaves both sides', built: ['FP1', 'FP2', 'FT', 'FH', 'RC1f', 'SLf1', 'SLf2'], new: ['SHEETf'], sheet: true, extras: ['groundF', 'padsF'] }
  ],
  actions: [
    'The strip (285, cut from the 4th sheet along a valley) laps <b>UNDER</b> sheet 3 by one corrugation \u2014 its free edge is the NE eaves.',
    'Total 2280 = <b>~53 eaves each side</b>. Slide the set side-to-side until the overhangs look equal.',
    'Climb down and look from the ground: equal laps, straight edges, both eaves even.'
  ],
  pieces: [['STRIP', '285 \u00D7 1000 (3 corr)', 'corrugations down-slope', 0, 0]],
  tools: ['ladder', 'helper', 'tape'],
  checks: ['Overhangs equal both sides (~53).', 'Down-slope: ~16 proud at the doors and the rear \u2014 or slide ~20 forward to favour the doors.'] },

step29: { phase: 'phase07', title: 'Nail it down \u2014 crests only',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'every crest \u00D7 every row', built: ROOF_PLAN.concat(['S1', 'S2', 'S3', 'ST']), sheet: true, extras: ['envp'], post: ['corr', 'nails'] },
    { kind: 'side', label: 'SIDE', sub: 'the 5 rows', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'rear', label: 'REAR', sub: 'rear row over RC3', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2'], new: ['SHEETr'], sheet: true, extras: ['groundR', 'padsR'] }
  ],
  insets: [
    { kind: 'plan', tag: 'crest nailing \u2014 never a valley', bnd: [280, 940, 360, 600], built: ['S2'], sheet: true, post: ['corr', 'nails'], minor: 50 }
  ],
  actions: [
    'Nail through the <b>CRESTS only</b> \u2014 a valley hole IS a leak.',
    'At each of the 5 rows (SL1 \u00B7 RC1 \u00B7 RC2 \u00B7 RC3 \u00B7 SL2): every crest of every sheet + every lap crest.',
    'Nail vertical, hit until the <b>washer just squashes</b> \u2014 stop. Overdriving cracks, underdriving lifts.',
    'Count as you go: <b>~90\u2013105</b> expected.'
  ],
  pieces: [['NAILS', 'Onduline 65 mm', 'vertical, washer just seats', 0, 0, 105]],
  tools: ['hammer', 'ladder'],
  warnings: [['wind', 'Never leave a lap unnailed overnight in rain \u2014 finish the laps first if nails run short.']],
  checks: ['No crest missed on any row.', 'Drip test: water clears the door faces and wall boards.'] },

/* ---------- PHASE 08 — side cladding ---------- */
step30: { phase: 'phase08', title: 'Side course 1 \u2014 bottom on the 150 line',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'left wall \u2014 this board sets the wall', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['CLADs1'], extras: ['groundS', 'padsS', 'datum150'],
      dims: [{ k: 'v', a: 0, b: 150, x: -120, t: '150', s: 'l' }], labels: { CLADs1: 'course 1' } },
    { kind: 'rear', label: 'REAR', sub: 'rear starts at 145 (next phase)', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datum145'] },
    { kind: 'plan', label: 'TOP', sub: 'covers the posts\u2019 side faces', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['CLADsLp'] }
  ],
  actions: [
    'Measure <b>150 up from the post BOTTOMS</b> (the pads are the zero, not the soil), both ends, join with a level line.',
    'First board: bottom edge on the line, <b>thick edge DOWN</b>, spanning the full 950 \u2014 ends cover the posts\u2019 side faces.',
    'Level along its TOP \u2014 clear soil rather than move the board.',
    '2 ringshanks per crossing, ~25 in from edges, never the feather-thin edge.'
  ],
  pieces: [['BOARD', '944\u2013950 \u00D7 22\u00D7125', '125 face out \u00B7 thick edge down', 0, [125, 22]]],
  tools: ['hammer', 'level', 'tape'],
  warnings: [['warn', 'The 150 gap underneath is INTENTIONAL ventilation \u2014 never board over it.']],
  checks: ['Bottom edge on 150, level along the top.'] },

step31: { phase: 'phase08', title: 'Side courses 2\u201313',
  panels: [
    { kind: 'side', label: 'SIDE', sub: '25 lap \u00B7 100 exposure, bottom-up', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1']), new: ['CLADs_RUN'], extras: ['groundS', 'padsS', 'datum150'], post: ['lapsS'],
      labels: { CLADs_RUN: 'courses 2\u201313' } },
    { kind: 'rear', label: 'REAR', sub: 'still open \u2014 sides first, rear tails oversail past them', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR'] },
    { kind: 'plan', label: 'TOP', sub: 'the wall thickens by one board', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['CLADsLp'] }
  ],
  actions: [
    'Repeat 12 times: lap <b>25 over</b> the board below (100 exposed), thick edge down, bottom-up.',
    'Nails: 2 per end crossing into the posts, 2 wherever a board crosses a rail (bottom now, top rail from ~course 12).',
    '<b>Level every 2\u20133 courses</b> \u2014 drift accumulates silently and course 14 inherits every mm.',
    'Brace off once this wall has 4+ boards \u2014 <b>one wall at a time, never both</b>.'
  ],
  pieces: [['BOARD', '944\u2013950 \u00D7 22\u00D7125 \u00D712', '125 face out \u00B7 thick edge down', 0, [125, 22], 12]],
  tools: ['hammer', 'level', 'tape'],
  checks: ['Course 13 top edge at ~1450, level.'] },

step32: { phase: 'phase08', title: 'Side course 14 \u2014 the rake',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'top edge cut at the roof\u2019s angle', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN']), new: ['CLADs14'], extras: ['groundS', 'padsS', 'slope', 'datum150'],
      labels: { CLADs14: 'rake' } },
    { kind: 'rear', label: 'REAR', sub: 'the triangle a wedge offcut will fill', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'wraps'] },
    { kind: 'plan', label: 'TOP', sub: 'then mirror the right wall', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['CLADsLp', 'CLADsRp'],
      labels: { CLADsLp: 'LEFT', CLADsRp: 'RIGHT \u2014 repeat' } }
  ],
  actions: [
    'Hold the board unnailed at course-14 height; measure <b>down from the sloped rail</b> at each end, add the 25 lap, connect \u2014 that line IS the slope (12.6\u00B0).',
    'Cut, seal the cut end, nail it on.',
    'The growing triangular gap near the rear corner is EXPECTED \u2014 fill it with a scribed wedge offcut (side-board offcut, cut ends sealed).',
    '<b>Repeat steps 30\u201332 for the right wall</b>: same 150 line, same laps, same rake.'
  ],
  pieces: [['BOARD', '944\u2013950, cut 12.6\u00B0', 'top edge raked', 0, [125, 22]]],
  tools: ['saw', 'hammer', 'level', 'brush'],
  checks: ['Rake line parallel to the sloped rail.', 'Right wall mirrored, both walls\u2019 braces now off.'] },

/* ---------- PHASE 09 — rear cladding ---------- */
step33: { phase: 'phase09', title: 'Rear course 1 at 145 + corner tails',
  panels: [
    { kind: 'rear', label: 'REAR', sub: '2188 = 2130 wall + 2 \u00D7 29 tails', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2'], new: ['CLADr1'], extras: ['groundR', 'padsR', 'datum145', 'wraps'],
      dims: [{ k: 'v', a: 0, b: 145, x: -140, t: '145', s: 'l' }], labels: { CLADr1: 'course 1' } },
    { kind: 'side', label: 'SIDE', sub: 'the tails roof over the side boards\u2019 ends', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN', 'CLADs14']), new: ['WRAPs'], labels: { WRAPs: 'tails' } },
    { kind: 'plan', label: 'TOP', sub: 'both corners, every course', built: ['PF1', 'PF2', 'PR1', 'PR2', 'CLADsLp', 'CLADsRp'], new: ['WRp1', 'WRp2'] }
  ],
  insets: [
    { kind: 'plan', tag: 'the corner — square-cut, NEVER folded', bnd: [-160, 260, 740, 1100], built: ['PR1', 'CLADsLp'], new: ['WRp1'], minor: 50,
      dims: [{ k: 'h', a: -29, b: 0, y: 1060, t: '29 tail' }] }
  ],
  actions: [
    'Rear boards are <b>2188</b>: 2130 across the wall + a <b>29 square-cut tail</b> past EACH side wall.',
    'Start at <b>145</b> (5 below the side datum): 14 courses \u00D7 102.5 = 1435 lands flush at the 1580 plane.',
    '<b>Do NOT bend the tails around the corner</b> \u2014 timber splits, it does not fold. Leave them square, seal every end the same day: each tail roofs over the side boards\u2019 end grain.',
    'Count the stack: 14 go on, 1 spare \u2014 the ladder is no place to find a missing course.'
  ],
  pieces: [['BOARD', '2188 \u00D7 22\u00D7125', '125 face out \u00B7 thick edge down \u00B7 ends square', 0, [125, 22]]],
  tools: ['hammer', 'level', 'ladder', 'brush'],
  warnings: [['warn', 'Never fold or kerf a board around the corner — it WILL crack. Square-cut tails are the detail.']],
  checks: ['Course 1 bottom on 145; tails square-cut and sealed both corners.'] },

step34: { phase: 'phase09', title: 'Rear courses 2\u201314 \u2014 eased laps to land 1580',
  panels: [
    { kind: 'rear', label: 'REAR', sub: '13 more, laps eased ~22\u201325', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2', 'CLADr1'], new: ['CLADr_RUN'], extras: ['groundR', 'padsR', 'datum145', 'wraps'], post: ['lapsR'],
      labels: { CLADr_RUN: 'courses 2\u201314' }, dims: [{ k: 'v', a: 145, b: 1580, x: 2260, t: '1435', s: 'r' }] },
    { kind: 'side', label: 'SIDE', sub: 'tails past every course', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN', 'CLADs14']), new: ['WRAPs'] },
    { kind: 'plan', label: 'TOP', sub: 'corners close', built: ['PF1', 'PF2', 'PR1', 'PR2', 'CLADsLp', 'CLADsRp'], new: ['WRp1', 'WRp2'] }
  ],
  actions: [
    'Thirteen more, bottom-up: eased laps <b>~22\u201325</b> so course 14 lands <b>flush at the 1580 plane</b>.',
    'Every course: <b>face nails only</b> \u2014 2 into RP1, 2 into RS, 2 into RP2 (the frame photo is your map). <b>No nails in the tails</b>: nothing solid sits behind them.',
    'Level-check every 2\u20133 courses.',
    'Shy at the top? Nudge the last lap to ~18\u201320. Proud? Ease the last two up 3 each. Disaster? The spare covers it.'
  ],
  pieces: [['BOARD', '2188 \u00D7 22\u00D7125 \u00D713', '125 face out \u00B7 thick edge down', 0, [125, 22], 13]],
  tools: ['hammer', 'level', 'ladder'],
  checks: ['Course 14 flush with the 1580 plane.'] },

step35: { phase: 'phase09', title: 'Corners + braces OFF \u2014 box weatherproof',
  panels: [
    { kind: 'rear', label: 'REAR', sub: 'complete', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2', 'CLADr_ALL'], extras: ['groundR', 'padsR', 'datum145', 'wraps'], post: ['lapsR'] },
    { kind: 'side', label: 'SIDE', sub: 'braces off \u2014 the boards ARE the structure', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN', 'CLADs14', 'WRAPs']), extras: ['groundS', 'padsS', 'bracesOff'] },
    { kind: 'plan', label: 'TOP', sub: 'all four walls closed', built: ['PF1', 'PF2', 'PR1', 'PR2', 'CLADsLp', 'CLADsRp', 'WRp1', 'WRp2'], ghost: ['S1', 'S2', 'S3', 'ST'] }
  ],
  actions: [
    'From each side, the row of square tails steps just past the wall line, roofing over the side boards\u2019 end grain \u2014 nothing folded, nothing snapped.',
    'Small top-corner gaps are normal \u2014 dab sealer on any exposed end grain.',
    '<b>LAST braces off now</b> \u2014 every wall has far more than 4 boards.',
    'Rack test: push corner-to-corner \u2014 rock solid.'
  ],
  pieces: [],
  tools: ['brush', 'hammer'],
  checks: ['Rack test: solid.', 'Roof edges clear of doors and walls; no daylight through any lap.', 'Every cut end sealed; the 150 strip still open.'] },

/* ---------- PHASE 10 — doors + finish ---------- */
step36: { phase: 'phase10', title: 'Door 1 \u2014 stiles + 960 spacers',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'face up, hinge side left', new: ['DSa', 'DSb'], labels: { DSa: 'DS1', DSb: 'DS2' },
      dims: [{ k: 'h', a: 0, b: 960, y: -80, t: '960 \u2014 spacer blocks' }, { k: 'v', a: 0, b: 1200, x: 1080, t: '1200', s: 'r' }] },
    { kind: 'doorSec', label: 'SECTION', sub: 'layer 1 of 4', new: ['L_DS'], labels: { L_DS: 'stiles 22' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'where the door lands (overlay)', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'],
      dims: [{ k: 'h', a: 15, b: 975, y: 90, t: '960' }] }
  ],
  insets: [
    { kind: 'doorSec', tag: 'the 4-layer sandwich \u2014 22 / 44 / 66 / 88', new: ['L_DS', 'L_DR', 'L_DIAG', 'L_BOARDS'], minor: 50 }
  ],
  actions: [
    'Build on flat ground / old ply. Layer 1: the two stiles ARE the door\u2019s full height, ~800 apart, edges to a straight edge.',
    '<b>WIDTH before screws</b>: clamp two spacer blocks cut to exactly <b>960</b>, one at each end, OUTSIDE the stiles.',
    'Mark rail centres on both stiles: <b>250 and 950</b> from the bottom end.'
  ],
  pieces: [['DS1', '1200 \u00D7 50\u00D722', '50 up (flat, 22 thick)', 0, [50, 22]], ['DS2', '1200 \u00D7 50\u00D722', '50 up (flat, 22 thick)', 0, [50, 22]]],
  tools: ['clamp', 'tape', 'square', 'pencil'],
  checks: ['960 between stile outer edges, spacers snug.'] },

step37: { phase: 'phase10', title: 'Rails OVER the stiles',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'layer 2', built: ['DSa', 'DSb'], new: ['DRa', 'DRb'], labels: { DSa: 'DS1', DSb: 'DS2', DRa: 'DR1', DRb: 'DR2' },
      screws: [[200, 250], [280, 250], [680, 250], [760, 250], [200, 950], [280, 950], [680, 950], [760, 950]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 0, b: 250, x: -120, t: '250', s: 'l' }, { k: 'v', a: 0, b: 950, x: -60, t: '950', s: 'l' }] },
    { kind: 'doorSec', label: 'SECTION', sub: 'stack now 44', built: ['L_DS'], new: ['L_DR'], labels: { L_DR: 'rails 44' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'overlay position', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'] }
  ],
  actions: [
    'Layer 2: rails laid ACROSS the stiles at the marks, ends inset ~130 from each stile\u2019s outer edge.',
    'Clamp before screwing; keep the spacers in until both rails are on.',
    '2 \u00D7 4.0\u00D745 per rail end (2-layer stack = 44 mm).'
  ],
  pieces: [['DR1', '700 \u00D7 50\u00D722', '50 up (flat), over the stiles', 0, [50, 22]], ['DR2', '700 \u00D7 50\u00D722', '50 up (flat), over the stiles', 0, [50, 22]]],
  tools: ['drill', 'clamp', 'square'],
  checks: ['Rails centred at 250 / 950, square across.'] },

step38: { phase: 'phase10', title: 'The diagonal \u2014 bottom-HINGE \u2192 top-LOCK',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'layer 3', built: ['DSa', 'DSb', 'DRa', 'DRb'], new: ['DIAG'],
      screws: [[350, 430], [560, 700]], det: [420, 480, 150, 'A'] },
    { kind: 'doorSec', label: 'SECTION', sub: 'stack now 66', built: ['L_DS', 'L_DR'], new: ['L_DIAG'], labels: { L_DIAG: 'diagonal 66' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'overlay position', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'] }
  ],
  insets: [
    { kind: 'door', tag: 'compression direction \u2014 the ONLY right way', bnd: [40, 940, 130, 1110], built: ['DSa', 'DSb', 'DRa', 'DRb'], new: ['DIAG'], minor: 50 }
  ],
  actions: [
    'The diagonal runs <b>bottom-HINGE-side corner of the lower rail \u2192 top-LOCK-side corner of the upper rail</b>.',
    'Doors sag at the top-lock corner \u2014 this direction puts the diagonal in <b>compression</b>. The other direction braces nothing.',
    'Scribe from the B3 remainder: cut ~5 proud, offer, trim to a SNUG fit \u2014 tight squeezes the frame together, loose does nothing.',
    '4.0\u00D745 into single layers, 4.0\u00D765 through the 3-layer stack (66). Heads hidden on this inside face.'
  ],
  pieces: [['DIAG', '~990 \u00D7 50\u00D722, scribed', '50 up (flat), over both layers', 0, [50, 22]]],
  tools: ['saw', 'drill', 'pilot', 'square2'],
  checks: ['Frame diagonals equal within 3 mm.', 'Hinge side labelled with an arrow in marker.'] },

step39: { phase: 'phase10', title: 'Board the door \u2014 12 courses',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'layer 4 \u2014 the skin', built: ['DSa', 'DSb', 'DRa', 'DRb'], new: ['BOARDS'], post: ['lapsD'],
      dims: [{ k: 'v', a: 0, b: 1200, x: 1080, t: '1200', s: 'r' }] },
    { kind: 'doorSec', label: 'SECTION', sub: 'full stack 88', built: ['L_DS', 'L_DR', 'L_DIAG'], new: ['L_BOARDS'], labels: { L_BOARDS: 'boards 88' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'overlay, ~15 outer / ~30 centre gaps', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'],
      dims: [{ k: 'h', a: 0, b: 15, y: 90, t: '15' }, { k: 'h', a: 975, b: 1155, y: 90, t: '30' }] }
  ],
  actions: [
    'Start at the BOTTOM: first board flush with the stile bottoms, thick edge down. 25 lap / 100 exposure.',
    '<b>12 courses \u00D7 100 = 1200 = exactly the stile height</b> \u2014 course 12 lands flush. No easing needed.',
    '2 ringshank nails per crossing (~5 crossings per board), 25 in from edges, never the feather edge.',
    'Seal the bottom board\u2019s bottom edge \u2014 it lives in the splash zone.'
  ],
  pieces: [['BOARD', '960 \u00D7 22\u00D7125 \u00D712', '125 face out \u00B7 thick edge down', 0, [125, 22], 12]],
  tools: ['hammer', 'brush', 'square'],
  warnings: [['warn', 'NAILED, never screwed \u2014 the door\u2019s outside cannot be dismantled with a screwdriver. That is the point.']],
  checks: ['Course 12 flush with the stile tops.'] },

step40: { phase: 'phase10', title: 'Door 2 \u2014 identical but MIRRORED',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'face up, hinge side RIGHT', built: ['DSa', 'DSb', 'DRa', 'DRb'], new: ['DIAGm'],
      labels: { DSa: 'DS3', DSb: 'DS4', DRa: 'DR3', DRb: 'DR4', DIAGm: 'DIAG mirrored' } },
    { kind: 'doorSec', label: 'SECTION', sub: 'same stack, mirrored', built: ['L_DS', 'L_DR', 'L_DIAG'], new: ['L_BOARDS'] },
    { kind: 'doorPlan', label: 'PLAN', sub: 'the second overlay', built: ['PPa', 'PPb', 'DLa', 'DLb', 'D1'], new: ['D2'] }
  ],
  actions: [
    'Same four stages: stiles + 960 spacers \u2192 rails \u2192 diagonal \u2192 boards.',
    'The diagonal still runs bottom-hinge \u2192 top-lock \u2014 which now <b>leans the other way</b>. Hinge side is RIGHT.',
    'Label the hinge side. Between sessions doors lie FLAT under the rack tarp \u2014 never on edge.',
    'The 60 mm of shared gaps: ~15 outer edges, ~30 centre meeting edge.'
  ],
  pieces: [['DOOR 2', '960 \u00D7 1200', 'mirror of door 1', 0, 0]],
  tools: ['clamp', 'drill', 'hammer', 'marker'] },

step41: { phase: 'phase10', title: 'The finished box',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'complete', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN', 'CLADs14', 'WRAPs']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope', 'datum150'],
      dims: [{ k: 'v', a: 0, b: 1580, x: 1120, t: '1580', s: 'r' }, { k: 'v', a: 0, b: 150, x: -120, t: '150', s: 'l' }] },
    { kind: 'front', label: 'FRONT', sub: 'doors overlay (hanging = later track)', built: ['FP1', 'FP2', 'FT', 'FH', 'DL1', 'DL2', 'RC1f', 'SLf1', 'SLf2', 'SHEETf'], sheet: true, ghost: ['DOORSg', 'DOORSc'], extras: ['groundF', 'padsF', 'blockF'],
      dims: [{ k: 'h', a: 0, b: 2130, y: -120, t: '2130' }] },
    { kind: 'plan', label: 'TOP', sub: 'the whole shed', built: ['PF1', 'PF2', 'PR1', 'PR2', 'CLADsLp', 'CLADsRp', 'WRp1', 'WRp2', 'SL1', 'SL2', 'RC1', 'RC2', 'RC3'], new: ['S1', 'S2', 'S3', 'ST'], sheet: true, extras: ['envp'], post: ['corr'] }
  ],
  actions: [
    'Frame, roof, cladding, both door panels built. Hanging (hinges, hasp) is deliberately NOT this guide \u2014 it happens on the doors track.',
    'Final walk-around with the checklist below \u2014 then chain the bike to the anchor and lock it.'
  ],
  pieces: [],
  tools: ['photo'],
  checks: ['Box line 1390 on all four walls; rear posts 1580 above it.', 'Roof: 4 pieces, laps facing NE, ~53 eaves, 5 rows nailed.', 'Sides 14 courses from 150, raked; rear 14 from 145, square-cut tails, flush at 1580.', 'All braces off, box rigid, every cut end sealed, 150 strip open.'] }

};

