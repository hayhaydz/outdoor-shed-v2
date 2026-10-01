/* steps-data.js — declarative content: PHASES + STEPS (49). Views per D11: every step = triptych.
   Geometry ids resolve in model.js M.pieces. Technique ported from v1 guide + v2 docs 09–12.
   v2.9 (1 Oct, doc 24): the four 700 rails used AS CUT, slid hard to the HINGE side (hinge
   ends flush over the hinge stile — the 66 mm strap anchors survive, no offcut lottery); the
   lock side gets a DOUBLED vertical + offset fill pieces (186 on the lower line, ~250 at the
   hasp height 600) → hasp screws bite board+fill+vertical = 66 mm of frame.
   v2.8 (29 Sep evening, doc 23): boards stay 936 AS CUT, the OPENING moves instead (linings
   rotated flat, step 49); diagonal ~1129 scribed; gaps ~14/29/14 over the ~1929 clear.
   v2.6 (29 Sep, doc 22): doors — hinge-band anchor scheme + steps 46–48 (bands on · hang · lock).
   Plain-words companion: ../v2-2026-09-17/24 (frame, numbers) + 22 (the words). */
'use strict';

const PHASES = {
  phase00: { num: '00', title: 'The base', steps: ['step01'], lead: 'Five pads and one bedded block. Nothing else ever touches the ground.', handle: '4 corner pads \u00D74 \u00B7 threshold block \u00D71 \u00B7 slate/packing', meta: [['level', 'Level \u00B15 mm'], ['helper', 'Solo OK']],
    views: [{ kind: 'plan', label: 'TOP', sub: 'the 5-pad layout', extras: ['padsPlan'], ghost: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp'], dims: [{ k: 'h', a: 0, b: 2080, y: -80, t: '2080 (v2.4)' }, { k: 'v', a: 0, b: 950, x: 2320, t: '950', s: 'r' }] }] },
  phase01: { num: '01', title: 'Rear wall, built flat', steps: ['step02', 'step03', 'step04', 'step05', 'step06', 'step07'], lead: 'The tall wall, assembled face-up on the ground. RR2 sits on the box line \u2014 the FILL offcut completes the wall while it is still flat.', handle: 'RP1 \u00B7 RP2 \u00B7 RR1 \u00B7 RR2 \u00B7 RS (1150 \u2192 ~1140, v2.4) \u00B7 FILL ~190', meta: [['drill', '~30 min'], ['helper', 'Solo OK']],
    views: [{ kind: 'rear', label: 'FACE', sub: 'the wall lying face up', built: ['RP1', 'RP2'], new: ['RR1', 'RR2', 'RS', 'FILL'], extras: ['datum150r', 'datumBOX'], labels: { RS: 'RS ~1090', FILL: 'FILL 190' }, dims: [{ k: 'v', a: 0, b: 1580, x: 2260, t: '1580', s: 'r' }] }] },
  phase02: { num: '02', title: 'Front wall, built flat', steps: ['step08', 'step09', 'step10', 'step11'], lead: 'Same recipe, shorter posts. The middle stays empty \u2014 that is the door opening.', handle: 'FP1 \u00B7 FP2 \u00B7 FT \u00B7 FH', meta: [['drill', '~30 min'], ['helper', 'Solo OK']],
    views: [{ kind: 'front', label: 'FACE', sub: 'the wall lying face up', built: ['FP1', 'FP2'], new: ['FT', 'FH'], extras: ['datum150r', 'datumBOX'], dims: [{ k: 'v', a: 0, b: 1390, x: 2260, t: '1390', s: 'r' }] }] },
  phase03: { num: '03', title: 'Stand the box', steps: ['step12', 'step13'], lead: 'Two walls upright, 800 apart (v2.4), braced before anyone lets go.', handle: 'Both walls \u00B7 4+ temporary braces \u00B7 pegs', meta: [['helper', 'Helper needed'], ['wind', 'Calm-ish day']],
    views: [{ kind: 'side', label: 'SIDE', sub: 'both walls standing', built: ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundS', 'padsS', 'blockS', 'bracesR', 'bracesF', 'datum150'], dims: [{ k: 'v', a: 0, b: 1580, x: 1120, t: '1580', s: 'r' }] }] },
  phase04: { num: '04', title: 'Side rails', steps: ['step14', 'step15', 'step16', 'step17'], lead: 'v2.4: four rails lock the box as INSIDE overlaps \u2014 bottoms at 200, tops at 1340.', handle: 'SR1 \u00B7 SR2 \u00B7 SR3 \u00B7 SR4 (850 each)', meta: [['drill', '~45 min'], ['square2', 'Diagonals \u00B15']],
    views: [{ kind: 'side', label: 'SIDE', sub: 'v2.4: bottom rails 200 \u00B7 top rails 1340, inside the posts', built: ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL'], new: ['SRb', 'SRt'], extras: ['groundS', 'padsS', 'blockS', 'datum150', 'datumBOXs'], dims: [{ k: 'v', a: 0, b: 1340, x: 1120, t: '1340', s: 'r' }] }] },
  phase05: { num: '05', title: 'Roof frame', steps: ['step18', 'step19', 'step20', 'step21', 'step22'], lead: 'Two sloped pieces flat over the post lines, three rails flat between them. All five rows, tops flush, on the slope.', handle: 'SL1 \u00B7 SL2 (970) \u00B7 RC1 \u00B7 RC2 \u00B7 RC3 (1980)', meta: [['ladder', 'Ladder care'], ['helper', 'Helper useful']],
    views: [{ kind: 'plan', label: 'TOP', sub: 'the 5 nailing rows', built: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p'], new: ['SL1', 'SL2', 'RC1', 'RC2', 'RC3'], extras: ['envp'] }] },
  phase06: { num: '06', title: 'Door linings', steps: ['step23', 'step24'], lead: 'Two battens become the door stops \u2014 then photograph the frame: it is your nailing map.', handle: 'DL1 \u00B7 DL2 (1200 batten)', meta: [['drill', '~20 min'], ['photo', 'Photo checkpoint']],
    views: [{ kind: 'front', label: 'FRONT', sub: 'linings inside the opening', built: ['FP1', 'FP2', 'FT', 'FH'], new: ['DL1', 'DL2'], dims: [{ k: 'v', a: 150, b: 1340, x: -140, t: '1190', s: 'l' }] }] },
  phase07: { num: '07', title: 'Roof sheets', steps: ['step25', 'step26', 'step27', 'step28', 'step29'], lead: 'Dry-lay the set from the SW edge \u2014 one-corrugation laps facing NE \u2014 adjust, then nail the crests.', handle: '3 sheets + 1 strip (285) \u00B7 ~90\u2013105 nails', meta: [['ladder', 'On the roof'], ['wind', 'Not in gusts']],
    views: [{ kind: 'plan', label: 'TOP', sub: 'the 4-piece set', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SL1', 'SL2', 'RC1', 'RC2', 'RC3'], new: ['S1', 'S2', 'S3', 'ST'], sheet: true, extras: ['envp'], post: ['corr'] }] },
  phase08: { num: '08', title: 'Side cladding', steps: ['step30', 'step31', 'step32'], lead: 'Courses 1\u201313 DONE Sat 26 Sep (both walls to the 1390 box line). Remaining: the raked top course under the roof edge \u2014 SCREWED, not nailed (decision 27 Sep: evening noise + wrist).', handle: '28 boards (944\u2013950) + 2 spare \u00B7 4.0\u00D765 screws + 3 mm pilots', meta: [['drill', 'Driver only \u2014 no hammer'], ['level', 'Level every 2\u20133']],
    views: [{ kind: 'side', label: 'SIDE', sub: 'courses 1\u201314 + rake', built: ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL', 'SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3'], new: ['CLADs1', 'CLADs_RUN', 'CLADs14'], extras: ['groundS', 'padsS', 'datum150', 'slope'], labels: { CLADs1: 'course 1', CLADs_RUN: 'courses 2\u201313', CLADs14: 'rake' } }] },
  phase09: { num: '09', title: 'Rear cladding', steps: ['step33', 'step34', 'step35'], lead: 'Courses to ~1390 DONE Sat 26. Remaining: top ~2 courses to the 1580 plane + four FLAT corner boards \u2014 nothing folds, nothing bends (27 Sep). Weatherproof gate: braces off here.', handle: 'Top courses \u00D72 \u00B7 4 corner boards (ZERO-BUY: spares/offcuts, 19 \u00A74b) \u00B7 4.0\u00D765 + sealer', meta: [['drill', 'Driver only \u2014 no hammer'], ['wind', 'Boards catch wind']],
    views: [{ kind: 'rear', label: 'REAR', sub: '14 courses, square-cut corner tails', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2'], new: ['CLADr_ALL'], extras: ['groundR', 'padsR', 'datum145', 'wraps'], post: ['lapsR'], labels: { CLADr_ALL: 'courses 1\u201314' } }] },
  phase10: { num: '10', title: 'Doors + finish', steps: ['step49', 'step36', 'step37', 'step38', 'step39', 'step40', 'step46', 'step47', 'step48', 'step41'], lead: 'Two flat sandwiches \u2014 and one trick that makes the hole bigger instead of the doors smaller. v2.9 (1 Oct, doc 24): the four old <b>700 rails are used AS CUT</b>, both slid hard to the <b>HINGE side</b> of each door \u2014 the hinge anchors keep their full 66 mm. The lock side gets a <b>doubled edge</b> (a second vertical) + short <b>offset fill pieces</b>, so the padlock hasp screws bite frame, not boards. Steps 46\u201348 = bands \u00B7 hang \u00B7 lock.', handle: 'Stiles \u00D74 (1200) \u00B7 rails = the four 700s AS CUT (2/door, hinge-flush) \u00B7 lock verticals \u00D72 (B3 remainder + B2) \u00B7 fill pieces \u00D72+/door (rear board offcuts: 186 + ~250) \u00B7 diagonals \u00D72 (~1129 scribed, B1 + B3) \u00B7 24 boards (936 \u2014 ALREADY CUT, kept) \u00B7 4\u00D7450 bands + 4 hooks + hasp (owned)', meta: [['drill', 'Evening track'], ['photo', 'Final survey']],
    views: [{ kind: 'door', label: 'DOOR', sub: '700 bars hinge-side \u00B7 lock kit \u00B7 bands over both', built: ['DSa', 'DSb', 'DRa', 'DRb', 'DV', 'DFA', 'DFB'], new: ['DIAG'], ghost: ['BANDb', 'BANDt'], post: ['lapsD', 'eyesL', 'anchorsL'], dims: [{ k: 'v', a: 0, b: 1200, x: 1080, t: '1200', s: 'r' }] }] },
  phase11: { num: '11', title: 'The anchor', steps: ['step42', 'step43', 'step44', 'step45'], lead: 'Two bags of no-mix concrete + the 27 L bucket = a ~45 kg block with the security anchor cast in. Powder first, THEN a little water — never the other way round. Sets in 5–10 minutes, so every step is ready-first.', handle: '2 × 20 kg Build It Postfix (AH689) · 27 L bucket · Ryde cement-in anchor · 1 L bottle (the measure) · poking stick', meta: [['timer', 'Set in 5–10 min'], ['level', 'Level ground'], ['helper', 'Solo OK']],
    views: [{ kind: 'anchor', label: 'SECTION', sub: 'the finished block', built: ['BKT', 'PWDR_C', 'ANC_BODY', 'HOOP_L', 'HOOP_R', 'HOOP_T'], extras: ['rimA', 'chainA'],
      labels: { PWDR_C: '2 bags ≈ 26–27 L', ANC_BODY: 'Ryde 180' }, dims: [{ k: 'v', a: 315, b: 414, x: -90, t: '~100 clear', s: 'l' }] }] }
};
const PHASE_ORDER = ['phase00', 'phase01', 'phase02', 'phase03', 'phase04', 'phase05', 'phase06', 'phase07', 'phase08', 'phase09', 'phase10', 'phase11'];

/* view bundles */
const SIDE_CTX = ['groundS', 'padsS', 'blockS', 'bracesR', 'bracesF', 'datum150'];
const WALLS_SIDE = ['FP', 'RP', 'FT', 'FH', 'RR1', 'RR2', 'RS', 'FILL'];
const ROOF_PLAN = ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p', 'SL1', 'SL2', 'RC1', 'RC2', 'RC3'];
const ANCH_SHED = ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p', 'SL1', 'SL2', 'RC1', 'RC2', 'RC3', 'CLADsLp', 'CLADsRp', 'WRp1', 'WRp2'];
const HOOP = ['ANC_BODY', 'HOOP_L', 'HOOP_R', 'HOOP_T'];

const STEPS = {

/* ---------- PHASE 00 — the base ---------- */
step01: { phase: 'phase00', title: '5 pads + the threshold block',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'at ground', extras: ['groundS', 'padsS', 'blockS'], ghost: ['FP', 'RP', 'FT'], extras2: null,
      dims: [{ k: 'v', a: 0, b: 75, x: 620, t: '75', s: 'r' }, { k: 'v', a: 0, b: 150, x: -120, t: '150', s: 'l' }], callouts: [[25, -60], [475, -110]] },
    { kind: 'front', label: 'FRONT', sub: 'at ground', extras: ['groundF', 'padsF', 'blockF'], ghost: ['FP1', 'FP2', 'FT'],
      dims: [{ k: 'h', a: 0, b: 2080, y: -120, t: '2080 (v2.4)' }] },
    { kind: 'plan', label: 'TOP', sub: 'the 5-pad layout', extras: ['padsPlan'], ghost: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp'],
      dims: [{ k: 'h', a: 0, b: 2080, y: -80, t: '2080 (v2.4)' }, { k: 'v', a: 75, b: 875, x: 2320, t: '800', s: 'r' }] }
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
      dims: [{ k: 'h', a: 0, b: 2080, y: 1700, t: '2080 (v2.4)' }, { k: 'v', a: 0, b: 1580, x: 2260, t: '1580', s: 'r' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'looking along the wall', new: ['RPs'] },
    { kind: 'plan', label: 'TOP', sub: 'this wall\u2019s place (drawn standing)', new: ['PR1'], ghost: ['PF1', 'PF2'] }
  ],
  actions: [
    'Lay <b>RP1</b> (1580) hard against a straight edge \u2014 an untouched 3.6 m stick or a wall \u2014 bottom end squared from it.',
    'Write <b>RP1</b> on the face you can see: that is the wall\u2019s outside face.',
    'Measure <b>150 up</b> from the bottom end, square a pencil line across \u2014 RR1 lands on it.'
  ],
  pieces: [['RP1', '1580 \u00D7 75\u00D750', '50 across \u00B7 75 deep (vertical) \u2014 v2.4', 0, [50, 75]]],
  tools: ['tape', 'pencil', 'marker'],
  checks: ['Bottom end flush with the straight edge.'] },

step03: { phase: 'phase01', title: 'RP2 \u2014 second rear post',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1'], new: ['RP2'],
      dims: [{ k: 'h', a: 0, b: 2080, y: 1700, t: '2080 (v2.4)' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'looking along the wall', new: ['RPs'] },
    { kind: 'plan', label: 'TOP', sub: 'this wall\u2019s place', built: ['PR1'], new: ['PR2'], ghost: ['PF1', 'PF2'] }
  ],
  actions: [
    'Mirror of RP1, ~2 m apart \u2014 the exact gap sets itself when RR1 fits between them.',
    'Both bottom ends hard against the <b>same</b> straight edge.',
    'Square the <b>150 line</b> across RP2 as well \u2014 two posts, two lines, one level.'
  ],
  pieces: [['RP2', '1580 \u00D7 75\u00D750', '50 across \u00B7 75 deep (vertical) \u2014 v2.4', 0, [50, 75]]],
  tools: ['tape', 'pencil', 'square'],
  checks: ['150 lines level across both posts.'] },

step04: { phase: 'phase01', title: 'RR1 \u2014 bottom rail, on the 150 line',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1', 'RP2'], new: ['RR1'], extras: ['datum150r'],
      screws: [[107, 175], [137, 175], [1993, 175], [2023, 175]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 0, b: 150, x: -140, t: '150', s: 'l' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'FLAT \u2014 50 tall (v2.4)', built: [], new: ['RPs', 'RR1s'] },
    { kind: 'plan', label: 'TOP', sub: 'between the posts', built: ['PR1', 'PR2'], new: ['RR1p'] }
  ],
  actions: [
    'RR1 slides <b>between</b> the posts \u2014 ends meet the posts\u2019 inner faces.',
    'Bottom edge <b>ON the two 150 lines</b>. v2.4 as built: FLAT \u2014 75 up, 50 tall (band 150\u2013200) \u2014 so the screws cross the posts\u2019 50 and bite 30 mm, not 5.',
    'Clamp, then check <b>diagonals corner-to-corner equal within 3 mm</b> BEFORE screwing.',
    '2 \u00D7 5.0\u00D780 per joint, 3 mm pilots, ~25 in from edges, staggered.'
  ],
  pieces: [['RR1', '1980 \u00D7 75\u00D750', '75 up (flat, 50 tall \u2014 v2.4)', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'clamp', 'tape'],
  warnings: [['split', 'Pilot 3 mm first \u2014 every screw within 100 mm of an end splits untreated timber without one.']],
  checks: ['Diagonals equal within 3 mm.', 'Bottoms still flush with the straight edge.'] },

step05: { phase: 'phase01', title: 'RR2 \u2014 top rail, on the BOX LINE',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1', 'RP2', 'RR1'], new: ['RR2'], extras: ['datumBOX'],
      screws: [[107, 1365], [137, 1365], [1993, 1365], [2023, 1365]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 1390, b: 1580, x: 2260, t: '190 down', s: 'r' }, { k: 'v', a: 0, b: 1390, x: -140, t: '1390', s: 'l' }],
      callouts: [[1065, 1440]] },
    { kind: 'rearSec', label: 'SECTION', sub: 'FLAT \u2014 50 tall (v2.4)', new: ['RPs', 'RR1s', 'RR2s'] },
    { kind: 'plan', label: 'TOP', sub: 'same slot as RR1', built: ['PR1', 'PR2'], new: ['RR2p'] }
  ],
  insets: [
    { kind: 'rear', tag: 'measure DOWN 190 from the post tops', bnd: [-60, 560, 1180, 1660], built: ['RP1', 'RR1'], new: ['RR2'], extras: ['datumBOX'],
      dims: [{ k: 'v', a: 1390, b: 1580, x: 480, t: '190', s: 'r' }], minor: 50 }
  ],
  actions: [
    'Measure <b>DOWN 190</b> from each post top, square lines across both posts.',
    'Clamp RR2\u2019s <b>top edge on the lines</b> \u2192 top = the <b>box line 1390</b>, level with FH later (band 1340\u20131390, v2.4).',
    'Flat like RR1. 2 \u00D7 5.0\u00D780 per joint, pilots first.'
  ],
  pieces: [['RR2', '1980 \u00D7 75\u00D750', '75 up (flat, 50 tall \u2014 v2.4)', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'clamp', 'square'],
  checks: ['Top edge reads 1390 at both ends.', 'Straight edge across post tops: RR2 top sits exactly 190 below, flush gap under it.'] },

step06: { phase: 'phase01', title: 'RS \u2014 mid strut: scribe, trim, bed under RR2',
  panels: [
    { kind: 'rear', label: 'FACE', sub: 'wall lying face up', built: ['RP1', 'RP2', 'RR1', 'RR2'], new: ['RS'],
      screws: [[1047, 215], [1082, 215], [1047, 1380], [1082, 1380]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 200, b: 1340, x: 1150, t: '~1140 as fit', s: 'r' }] },
    { kind: 'rearSec', label: 'SECTION', sub: 'vertical \u2014 on the rail', built: ['RR1s', 'RR2s'], new: ['RSs'] },
    { kind: 'plan', label: 'TOP', sub: 'centred on the wall', built: ['PR1', 'PR2', 'RR2p'], new: ['RSp'] }
  ],
  insets: [
    { kind: 'rearSec', tag: 'toe-screwing \u2014 screw enters the edge at ~45\u00B0', bnd: [-80, 140, 120, 420], built: ['RR1s'], new: ['RSs'],
      screws: [[10, 207]], minor: 50 }
  ],
  actions: [
    'Stand RS (cut 1150) on RR1, centred (~990 from each post). Plumb it.',
    '<b>Scribe</b>: mark where its top meets RR2\u2019s underside, take it out, <b>trim ~10 \u2192 ~1140</b> (v2.4) so it beds snug UNDER RR2 (top at 1340).',
    'Toe-screw the bottom: 2 screws at ~45\u00B0 through the strut edge into the rail.',
    '2 screws down through RR2\u2019s top edge into the strut top.'
  ],
  pieces: [['RS', '1150 \u2192 trim ~1140 \u00D7 75\u00D750', '50 across \u00B7 75 deep (vertical) \u2014 v2.4', 0, [50, 75]]],
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
  pieces: [['FILL', '~190 \u00D7 75\u00D750', '50 across \u00B7 75 deep (vertical) \u2014 v2.4', 0, [50, 75]]],
  tools: ['saw', 'brush', 'drill', 'pilot'],
  warnings: [['sealer', 'Seal every fresh cut end the same day \u2014 end grain drinks water.']],
  checks: ['Mid-wall stack contiguous: 200 \u2192 1340 \u2192 1390 \u2192 1580, zero gaps.'] },

/* ---------- PHASE 02 — front wall, flat ---------- */
step08: { phase: 'phase02', title: 'FP1 \u2014 first front post',
  panels: [
    { kind: 'front', label: 'FACE', sub: 'wall lying face up', new: ['FP1'],
      dims: [{ k: 'h', a: 0, b: 2080, y: 1500, t: '2080 (v2.4)' }, { k: 'v', a: 0, b: 1390, x: 2260, t: '1390', s: 'r' }] },
    { kind: 'frontSec', label: 'SECTION', sub: 'looking along the wall', new: ['FPs'] },
    { kind: 'plan', label: 'TOP', sub: 'door end', new: ['PF1'], ghost: ['PR1', 'PR2'] }
  ],
  actions: [
    'Same straight edge. FP1 (1390) is the door-end left corner \u2014 the middle of this wall stays <b>empty</b>: the door opening.',
    'Label the face. Measure <b>100 up</b> from the bottom, square a line \u2014 FT\u2019s bottom lands on it (its top = the 150 line, v2.4).'
  ],
  pieces: [['FP1', '1390 \u00D7 75\u00D750', '50 across \u00B7 75 deep (vertical) \u2014 v2.4', 0, [50, 75]]],
  tools: ['tape', 'pencil', 'marker'] },

step09: { phase: 'phase02', title: 'FP2 \u2014 second front post',
  panels: [
    { kind: 'front', label: 'FACE', sub: 'wall lying face up', built: ['FP1'], new: ['FP2'],
      dims: [{ k: 'h', a: 0, b: 2080, y: 1500, t: '2080 (v2.4)' }] },
    { kind: 'frontSec', label: 'SECTION', sub: 'looking along the wall', new: ['FPs'] },
    { kind: 'plan', label: 'TOP', sub: 'door end', built: ['PF1'], new: ['PF2'], ghost: ['PR1', 'PR2'] }
  ],
  actions: [
    'Mirror of FP1 on the same straight edge.',
    'Square the <b>100 line</b> across FP2 too \u2014 both posts marked.'
  ],
  pieces: [['FP2', '1390 \u00D7 75\u00D750', '50 across \u00B7 75 deep (vertical) \u2014 v2.4', 0, [50, 75]]],
  tools: ['tape', 'pencil', 'square'] },

step10: { phase: 'phase02', title: 'FT \u2014 threshold, top face on the 150 line',
  panels: [
    { kind: 'front', label: 'FACE', sub: 'wall lying face up', built: ['FP1', 'FP2'], new: ['FT'], extras: ['datum150r'],
      screws: [[107, 125], [137, 125], [1993, 125], [2023, 125]], screwChip: '\u00D72',
      dims: [{ k: 'v', a: 0, b: 150, x: -140, t: '150', s: 'l' }, { k: 'v', a: 0, b: 100, x: 2260, t: '100', s: 'r' }] },
    { kind: 'frontSec', label: 'SECTION', sub: 'FLAT \u2014 50 tall (v2.4)', new: ['FPs', 'FTs'] },
    { kind: 'plan', label: 'TOP', sub: 'between the posts', built: ['PF1', 'PF2'], new: ['FTp'] }
  ],
  actions: [
    'FT between the posts, bottom edge on the <b>100 lines</b> \u2192 its <b>top face lands exactly on 150</b> (v2.4: FT is 50 tall).',
    'Flat like the rear rails. Its top is the 150 door-sill line the bike wheels roll over.',
    'Diagonals equal within 3 mm, then 2 \u00D7 5.0\u00D780 per joint.'
  ],
  pieces: [['FT', '1980 \u00D7 75\u00D750', '75 up (flat, 50 tall \u2014 v2.4)', 0, [75, 50]]],
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
      dims: [{ k: 'v', a: 75, b: 875, x: 2320, t: '800 next (v2.4)', s: 'r' }] }
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

step13: { phase: 'phase03', title: 'Stand the front wall, 800 away',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'both walls standing', built: ['RP', 'RR1', 'RR2', 'RS', 'FILL', 'FP', 'FT', 'FH'], extras: SIDE_CTX,
      dims: [{ k: 'h', a: 75, b: 875, y: -120, t: '800 (v2.4)' }, { k: 'v', a: 0, b: 1390, x: -120, t: '1390', s: 'l' }] },
    { kind: 'front', label: 'FRONT', sub: 'door wall on its pads', built: ['FP1', 'FP2', 'FT', 'FH'], extras: ['groundF', 'padsF', 'blockF', 'datum150r'],
      dims: [{ k: 'h', a: 0, b: 2080, y: -120, t: '2080 (v2.4)' }] },
    { kind: 'plan', label: 'TOP', sub: 'both walls, 800 apart', built: ['PR1', 'PR2', 'RR1p', 'RR2p', 'PF1', 'PF2', 'FTp'],
      dims: [{ k: 'v', a: 75, b: 875, x: 2320, t: '800', s: 'r' }] }
  ],
  actions: [
    'Stand the front wall on its pads \u2014 including the <b>bedded block</b> under the threshold (its top meets FT\u2019s underside, now 100 up \u2014 v2.4).',
    'Brace it the same way: one per corner, header \u2192 peg forward.',
    'Measure <b>800 post-face to post-face, BOTH sides</b> (v2.4: walls are 75 thick) \u2014 the side-rail overlaps lock it next phase.'
  ],
  pieces: [['BRACE', 'batten offcut \u00D72+', 'diagonal, header \u2192 peg', 0, 0, 4]],
  tools: ['drill', 'level', 'tape', 'helper'],
  checks: ['800 both sides within a few mm.', 'Both walls plumb.'] },

/* ---------- PHASE 04 — side rails ---------- */
step14: { phase: 'phase04', title: 'SR1 \u2014 bottom side rail (left), INSIDE OVERLAP',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'left wall', built: WALLS_SIDE, new: ['SRb'], labels: { SRb: 'SR1' }, extras: SIDE_CTX,
      screws: [[62, 237], [888, 237]], screwChip: '\u00D72', dims: [{ k: 'v', a: 0, b: 200, x: -120, t: '200', s: 'l' }] },
    { kind: 'rear', label: 'REAR', sub: 'level across from RR1\u2019s TOP', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datum150r', 'datumBOX'] },
    { kind: 'plan', label: 'TOP', sub: 'INSIDE the posts \u2014 25 overlap per end', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['SR1p'], labels: { SR1p: 'SR1' } }
  ],
  actions: [
    '<b>v2.4 \u2014 no trimming, no through-post screws:</b> hold SR1 (850) flat against the <b>INSIDE faces</b> of the corner posts, on edge (75 tall), <b>ends overlapping each post by 25</b> \u2014 800 gap + 2\u00D725 = the 850 cut exactly.',
    '<b>Bottom edge at 200</b> \u2014 the same plane as RR1\u2019s top edge (it cannot sit at 150: RR1\u2019s end fills the wall thickness there). Level across from RR1 to check.',
    '2 \u00D7 5.0\u00D780 per end <b>through the rail into the post</b> \u2014 face grain, 30 mm, the strongest joint in the frame. Screws spaced in the rail height (~215 / ~255), about 60 from the post\u2019s front face.'
  ],
  pieces: [['SR1', '850 \u00D7 75\u00D750', 'on edge \u00B7 INSIDE overlap (v2.4)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'],
  warnings: [['split', 'Pilots first \u2014 the screws sit close to the rail\u2019s end grain.']],
  checks: ['Bottom edge = 200, level with RR1\u2019s top.', '25 of post behind each rail end, both ends.'] },

step15: { phase: 'phase04', title: 'SR2 \u2014 bottom side rail (right)',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'right wall (same view)', built: WALLS_SIDE, new: ['SRb'], labels: { SRb: 'SR2' }, extras: SIDE_CTX },
    { kind: 'rear', label: 'REAR', sub: 'all three bottom rails share 150', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datum150r'] },
    { kind: 'plan', label: 'TOP', sub: 'right wall', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['SR2p'], labels: { SR2p: 'SR2' } }
  ],
  actions: [
    'Identical to SR1, right wall \u2014 inside overlap, bottom at 200.',
    'Check: RR1\u2019s top edge and the SR1/SR2 bottoms all read the one 200 plane.'
  ],
  pieces: [['SR2', '850 \u00D7 75\u00D750', 'on edge \u00B7 INSIDE overlap (v2.4)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'] },

step16: { phase: 'phase04', title: 'SR3 \u2014 TOP side rail (left), tucked under the box line',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'left wall', built: WALLS_SIDE.concat(['SRb']), new: ['SRt'], labels: { SRt: 'SR3' }, extras: SIDE_CTX.concat(['datumBOXs']),
      screws: [[62, 1302], [888, 1302]], screwChip: '\u00D72', dims: [{ k: 'v', a: 0, b: 1340, x: 1120, t: '1340 (v2.4)', s: 'r' }] },
    { kind: 'rear', label: 'REAR', sub: 'level with RR2\u2019s underside', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datumBOX'] },
    { kind: 'plan', label: 'TOP', sub: 'directly above SR1', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SR1p'], new: ['SR3p'], labels: { SR3p: 'SR3' } }
  ],
  actions: [
    '<b>v2.4:</b> SR3 directly above SR1, same inside-overlap treatment (25 per post), <b>top edge at 1340</b> \u2014 the underside plane of FH/RR2 (band 1265\u20131340). It cannot reach the 1390 box line: FH/RR2 fill the wall thickness at 1340\u20131390 \u2014 the rail tucks under their ends.',
    'Level across from RR2\u2019s / FH\u2019s underside to check.',
    '2 \u00D7 5.0\u00D780 per end <b>through the rail into the post</b>, spaced in the rail height.',
    'It touches the sloped rail only at the front \u2014 the growing gap to the rear is expected (the rake + a scribed wedge offcut covers it, step 32).'
  ],
  pieces: [['SR3', '850 \u00D7 75\u00D750', 'on edge \u00B7 INSIDE overlap (v2.4)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'],
  checks: ['Top edge reads 1340 at both ends, level with FH/RR2 undersides.'] },

step17: { phase: 'phase04', title: 'SR4 \u2014 TOP side rail (right)',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'right wall', built: WALLS_SIDE.concat(['SRb']), new: ['SRt'], labels: { SRt: 'SR4' }, extras: SIDE_CTX.concat(['datumBOXs']) },
    { kind: 'rear', label: 'REAR', sub: 'all four tops on the box line', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datumBOX'] },
    { kind: 'plan', label: 'TOP', sub: 'directly above SR2', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SR2p'], new: ['SR4p'], labels: { SR4p: 'SR4' } }
  ],
  actions: [
    'Mirror of SR3. Check across: SR3 and SR4 tops level with each other.',
    'All four side rails in (v2.4): 2 bottoms on the 200 plane, 2 tops at 1340 \u2014 all inside overlaps.'
  ],
  pieces: [['SR4', '850 \u00D7 75\u00D750', 'on edge \u00B7 INSIDE overlap (v2.4)', 0, [50, 75]]],
  tools: ['drill', 'pilot', 'level'] },

/* ---------- PHASE 05 — roof frame ---------- */
step18: { phase: 'phase05', title: 'SL1 \u2014 flat on the slope, over the LEFT post line',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'over the left post line', built: ['PF1', 'PF2', 'PR1', 'PR2', 'FTp', 'RR2p'], new: ['SL1'], extras: ['envp'],
      screws: [[12, 925], [12, 25]], screwChip: '\u00D72',
      dims: [{ k: 'h', a: 50, b: 2030, y: 1030, t: '1980 inner face to inner face' }], det: [380, 480, 130, 'A'] },
    { kind: 'side', label: 'SIDE', sub: 'flat on the slope \u2014 50 tall', built: WALLS_SIDE.concat(['SRb', 'SRt']), new: ['SLp'], extras: ['groundS', 'padsS', 'slope'], labels: { SLp: 'SL1' } },
    { kind: 'rear', label: 'REAR', sub: 'its rear end lands on the post tops', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], new: ['SLr1'], ghost: ['SLr2'], extras: ['groundR', 'padsR'] }
  ],
  insets: [
    { kind: 'side', tag: 'the wedge over the rear post top', bnd: [620, 1190, 1080, 1930], built: ['RP', 'RR2', 'FILL'], new: ['SLp'], extras: ['slope'], minor: 50 },
    { kind: 'plan', tag: 'inner face on the posts\u2019 INNER faces \u2014 x = 50 (v2.4)', bnd: [-140, 540, -80, 1120], built: ['PF1', 'PR1'], new: ['SL1'], extras: ['envp'],
      dims: [{ k: 'h', a: 50, b: 2030, y: -50, t: '1980' }], minor: 50 }
  ],
  actions: [
    'Carry SL1 (970) up. It lies <b>FLAT</b> (75 across, 50 tall) <b>centred on the left post line</b> (v2.4: the post spans x 0\u201350 \u2014 full bearing, 25 skirt past the wall face), running up the slope.',
    'Bearings: front wall-top plane \u2192 rear post tops. <b>Inner face at x=50</b> (the posts\u2019 inner faces) so the rails drop in at 1980 \u2014 the 25 past the outer face is the skirt.',
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
      screws: [[2067, 925], [2067, 25]], screwChip: '\u00D72',
      dims: [{ k: 'h', a: 50, b: 2030, y: 1030, t: '1980' }] },
    { kind: 'side', label: 'SIDE', sub: 'same plane, same wedge', built: WALLS_SIDE.concat(['SRb', 'SRt']), new: ['SLp'], extras: ['groundS', 'padsS', 'slope'], labels: { SLp: 'SL1 + SL2' } },
    { kind: 'rear', label: 'REAR', sub: 'both rear ends home', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'SLr1'], new: ['SLr2'], extras: ['groundR', 'padsR'] }
  ],
  actions: [
    'Mirror of SL1: x 2030\u20132105 (inner face at 2030), straight over the right post line.',
    'Same wedge over the rear post, same front shave \u2014 mirror everything.',
    'Check: <b>1980 between the two inner faces, both ends</b> \u2014 the same 1980 world as the rails below.'
  ],
  pieces: [['SL2', '970 \u00D7 75\u00D750', '75 across \u00B7 50 tall, FLAT on the slope', 0, [75, 50]]],
  tools: ['drill', 'pilot', 'ladder', 'helper'],
  checks: ['1980 between inner faces at both ends.'] },

step20: { phase: 'phase05', title: 'RC1 \u2014 front roof rail, flat over FH',
  panels: [
    { kind: 'plan', label: 'TOP', sub: 'the same 1980 slot', built: ['PF1', 'PF2', 'PR1', 'PR2', 'SL1', 'SL2'], new: ['RC1'], extras: ['envp'],
      screws: [[67, 25], [2013, 25]], screwChip: '\u00D72' },
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
      screws: [[67, 475], [2013, 475]], screwChip: '\u00D72' },
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
      screws: [[67, 925], [2013, 925]], screwChip: '\u00D72' },
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
      screws: [[61, 300], [61, 1300]], screwChip: '\u00D72', dims: [{ k: 'v', a: 150, b: 1340, x: -140, t: '1190', s: 'l' }] },
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
      screws: [[2019, 300], [2019, 1300]], screwChip: '\u00D72' },
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
      dims: [{ k: 'h', a: -100, b: 660, y: 1030, t: '760' }] },
    { kind: 'side', label: 'SIDE', sub: 'corrugations run down-slope', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope'] },
    { kind: 'front', label: 'FRONT', sub: '~16 proud over the doors (eaves)', built: ['FP1', 'FP2', 'FT', 'FH', 'RC1f', 'SLf1', 'SLf2'], new: ['SHEETf'], sheet: true, extras: ['groundF', 'padsF'] }
  ],
  insets: [
    { kind: 'plan', tag: 'the lap: valley over ridge, 95 = one corrugation', bnd: [430, 850, -60, 1060], built: ['S1'], new: ['S2'], sheet: true, post: ['corr'],
      dims: [{ k: 'h', a: 565, b: 660, y: -30, t: '95' }], minor: 50 }
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
  checks: ['Overhang ~78 past the wall faces (v2.4: walls 2080 wide), roughly equal ends.'] },

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
    'Total 2280 = <b>~78 eaves each side</b> (v2.4: walls 2080). Slide the set side-to-side until the overhangs look equal.',
    'Climb down and look from the ground: equal laps, straight edges, both eaves even.'
  ],
  pieces: [['STRIP', '285 \u00D7 1000 (3 corr)', 'corrugations down-slope', 0, 0]],
  tools: ['ladder', 'helper', 'tape'],
  checks: ['Overhangs equal both sides (~78).', 'Down-slope: ~16 proud at the doors and the rear \u2014 or slide ~20 forward to favour the doors.'] },

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
    '\u2713 <b>DONE Sun 27 Sep</b> \u2014 sheets + strip on, all rows fixed. <b>3 DEFECT NAILS</b> (2 deflected off knots, 1 snapped): do NOT pry them out \u2014 a torn sheet is a real repair. Snip flush, mastic over, one replacement nail 60\u201380 along the row into CLEAR grain (aim between knots off the frame photo) \u2014 19 \u00A73.',
    'Nail through the <b>CRESTS only</b> \u2014 a valley hole IS a leak.',
    'Nail vertical, hit until the <b>washer just squashes</b> \u2014 stop. Overdriving cracks, underdriving lifts.',
    'Replacement nails: one light tap to start, then firm single hits \u2014 ~4 taps total, do them in a daytime minute.'
  ],
  pieces: [['NAILS', 'Onduline 65 mm', 'vertical, washer just seats', 0, 0, 105]],
  tools: ['hammer', 'ladder'],
  warnings: [['wind', 'Never leave a lap unnailed overnight in rain \u2014 finish the laps first if nails run short.']],
  checks: ['No crest missed on any row.', 'Defect spots: snipped, mastic\u2019d, replacement nails into clear grain \u2014 first-rain check inside.', 'Drip test: water clears the door faces and wall boards.'] },

/* ---------- PHASE 08 — side cladding ---------- */
step30: { phase: 'phase08', title: 'Side course 1 \u2014 bottom on the 150 line',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'left wall \u2014 this board sets the wall', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3']), new: ['CLADs1'], extras: ['groundS', 'padsS', 'datum150'],
      dims: [{ k: 'v', a: 0, b: 150, x: -120, t: '150', s: 'l' }], labels: { CLADs1: 'course 1' } },
    { kind: 'rear', label: 'REAR', sub: 'rear starts at 145 (next phase)', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL'], extras: ['groundR', 'padsR', 'datum145'] },
    { kind: 'plan', label: 'TOP', sub: 'covers the posts\u2019 side faces', built: ['PF1', 'PF2', 'PR1', 'PR2'], new: ['CLADsLp'] }
  ],
  actions: [
    '\u2713 <b>DONE Sat 26 Sep</b> \u2014 course 1 stands on both walls (kept for re-dos/repairs).',
    'Measure <b>150 up from the post BOTTOMS</b> (the pads are the zero, not the soil), both ends, join with a level line.',
    'First board: bottom edge on the line, <b>thick edge DOWN</b>, spanning the full 950 \u2014 ends cover the posts\u2019 side faces.',
    '2 \u00D7 <b>4.0\u00D765 screws</b> per crossing (3 mm pilots), ~25 in from edges, never the feather-thin edge.'
  ],
  pieces: [['BOARD', '944\u2013950 \u00D7 22\u00D7125', '125 face out \u00B7 thick edge down', 0, [125, 22]]],
  tools: ['drill', 'pilot', 'level', 'tape'],
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
    '\u2713 <b>DONE Sat 26 Sep</b> \u2014 ~12 courses per wall, to the 1390 box line.',
    'Repeat: lap <b>25 over</b> the board below (100 exposed), thick edge down, bottom-up.',
    'Screws: 2 \u00D7 4.0\u00D765 per end crossing into the posts, 3 mm pilots. v2.4 rails sit inside the posts (SRb 200\u2013275, SRt 1265\u20131340): course 1 fixes high (~250) into SRb; the course topping ~1350 fixes into SRt; all other courses = posts + laps, as always.',
    '<b>Level every 2\u20133 courses</b> \u2014 drift accumulates silently and the rake inherits every mm. Brace off per wall once it has 4+ boards \u2014 <b>one wall at a time, never both</b>.'
  ],
  pieces: [['BOARD', '944\u2013950 \u00D7 22\u00D7125 \u00D712', '125 face out \u00B7 thick edge down', 0, [125, 22], 12]],
  tools: ['drill', 'pilot', 'level', 'tape'],
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
    '<b>THE ROOF IS THE DATUM NOW</b> (the sheet\u2019s side edge is exactly parallel to the hidden rail): hold the board in place uncut, bottom lapping 22\u201325 over the course below. Lay a straight 1\u20131.2 m batten <b>ON the sheet</b>, overhanging its edge ~40\u201350, pencil along its underside \u2014 repeat at both ends of the wall.',
    'Take it down; draw the cut line <b>10\u201315 mm ABOVE</b> the scribed line (the ~53 mm sheet overhang hides the top edge without touching the sheet) \u2014 two ticks + straightedge. Cut, <b>seal the cut end</b>.',
    'Offer back: top tucked under the eaves overhang. Fix: 2 \u00D7 <b>4.0\u00D765</b> at each post crossing (3 mm pilots) + 2 into the SRt band (1265\u20131340).',
    '<b>Repeat up the wall</b> until it closes under the roof line, then mirror the right wall. The shrinking rear-corner triangle is EXPECTED \u2014 it vents the eaves and the corner board (step 35) tidies it. Screw a scribed wedge offcut over it only if a gap is huge.'
  ],
  pieces: [['BOARD', '944\u2013950, scribed to the sheet', 'top edge raked', 0, [125, 22]]],
  tools: ['saw', 'drill', 'pilot', 'brush'],
  checks: ['Rake cut parallel to the sheet edge \u2014 top hidden under the overhang, not touching the sheet.', 'Right wall mirrored, both walls\u2019 braces now off.'] },

/* ---------- PHASE 09 — rear cladding ---------- */
step33: { phase: 'phase09', title: 'Rear course 1 at 145 + corner tails',
  panels: [
    { kind: 'rear', label: 'REAR', sub: '2188 = 2080 wall + 2 \u00D7 54 tails (v2.4)', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2'], new: ['CLADr1'], extras: ['groundR', 'padsR', 'datum145', 'wraps'],
      dims: [{ k: 'v', a: 0, b: 145, x: -140, t: '145', s: 'l' }], labels: { CLADr1: 'course 1' } },
    { kind: 'side', label: 'SIDE', sub: 'the tails roof over the side boards\u2019 ends', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN', 'CLADs14']), new: ['WRAPs'], labels: { WRAPs: 'tails' } },
    { kind: 'plan', label: 'TOP', sub: 'both corners, every course', built: ['PF1', 'PF2', 'PR1', 'PR2', 'CLADsLp', 'CLADsRp'], new: ['WRp1', 'WRp2'] }
  ],
  insets: [
    { kind: 'plan', tag: 'the corner — square-cut, NEVER folded', bnd: [-160, 260, 740, 1100], built: ['PR1', 'CLADsLp'], new: ['WRp1'], minor: 50,
      dims: [{ k: 'h', a: -29, b: 0, y: 1060, t: '29 tail' }] }
  ],
  actions: [
    '\u2713 <b>DONE Sat 26 Sep</b> \u2014 lower courses on with their tails. (If any low board got the old wrapped method: no undoing \u2014 the corner boards at step 35 simply overlay the lot.)',
    'Rear boards are <b>2188</b>: 2080 across the wall (v2.4) + a <b>54 square-cut tail</b> past EACH side wall.',
    'Start at <b>145</b> (5 below the side datum): 14 courses \u00D7 102.5 = 1435 lands flush at the 1580 plane.',
    '<b>Do NOT bend the tails around the corner</b> \u2014 timber splits, it does not fold. Leave them square, seal every end the same day: each tail roofs over the side boards\u2019 end grain.'
  ],
  pieces: [['BOARD', '2188 \u00D7 22\u00D7125', '125 face out \u00B7 thick edge down \u00B7 ends square', 0, [125, 22]]],
  tools: ['drill', 'pilot', 'level', 'ladder', 'brush'],
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
    '\u2713 <b>To ~1390 Sat 26. REMAINING: the top ~2 courses</b> \u2014 ease the laps so the LAST course lands <b>flush at the 1580 plane</b> (the 2 spare 2188s cover disasters).',
    'Plain boards, <b>no wrapping</b> \u2014 used as-cut at 2188; they run ~29 past each corner line and the corner boards (step 35) cover those ends. The last course tucks under the rear sheet edge\u2019s ~16 overhang.',
    'Every course: <b>face screws only</b> \u2014 2 \u00D7 4.0\u00D765 into RP1, RS, RP2 (3 mm pilots; the frame photo is your map). <b>No fixings in the tails</b>: nothing solid sits behind them.',
    'Level-check every 2\u20133 courses. Small gaps at the very top corners are normal \u2014 sealer on any exposed end grain.'
  ],
  pieces: [['BOARD', '2188 \u00D7 22\u00D7125 \u00D713', '125 face out \u00B7 thick edge down', 0, [125, 22], 13]],
  tools: ['drill', 'pilot', 'level', 'ladder'],
  checks: ['Course 14 flush with the 1580 plane.'] },

step35: { phase: 'phase09', title: 'Corner boards + braces OFF \u2014 box weatherproof',
  panels: [
    { kind: 'rear', label: 'REAR', sub: 'complete', built: ['RP1', 'RP2', 'RR1', 'RR2', 'RS', 'FILL', 'RC3r', 'SLr1', 'SLr2', 'CLADr_ALL'], extras: ['groundR', 'padsR', 'datum145', 'wraps'], post: ['lapsR'] },
    { kind: 'side', label: 'SIDE', sub: 'braces off \u2014 the boards ARE the structure', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN', 'CLADs14', 'WRAPs']), extras: ['groundS', 'padsS', 'bracesOff'] },
    { kind: 'plan', label: 'TOP', sub: 'all four walls closed', built: ['PF1', 'PF2', 'PR1', 'PR2', 'CLADsLp', 'CLADsRp', 'WRp1', 'WRp2'], ghost: ['S1', 'S2', 'S3', 'ST'] }
  ],
  actions: [
    'Four <b>FLAT vertical corner boards</b> \u2014 one per corner, screwed flat to the post face, outer edge flush with the corner line. <b>NOTHING bends or wraps</b> (user decision 27 Sep). They cover the side cladding\u2019s end-grain columns, the rear courses\u2019 board ends, and frame the front so the doors close past the ~15 outer gaps.',
    'Scribe each top under the sheet edge exactly like the rakes (step 32): <b>fronts finish ~1375, rears ~1565</b>. Seal every cut; small top-corner gaps are normal \u2014 dab sealer on exposed end grain.',
    'Fix: <b>3\u20134 \u00D7 4.0\u00D765</b> per board into the post (top / mid / bottom, 3 mm pilots; the front top screw can catch the header band, the rear top screw the FILL/RR2 zone). Material is <b>ZERO-BUY</b>: rear top courses get first claim on 2 m+ boards (count them first) \u2192 halve a spare long board (2 jointless boards per half) \u2192 else one full 1.05 m board per corner + offcut fill low down.',
    '<b>LAST braces off now</b> (one wall at a time) \u2192 rack test corner-to-corner. <b>THE BOX IS WEATHERPROOF \u2014 the go/no-go gate.</b> Hooks later fix THROUGH the front corner boards (step 41); doors hang outboard of them, no re-sizing.'
  ],
  pieces: [['CORNER BOARD', 'scribed top \u00D74 \u00B7 zero-buy stock', 'flat on the post face \u00B7 thick edge toward the opening (front pair)', 0, [125, 22], 4]],
  tools: ['drill', 'pilot', 'saw', 'brush'],
  checks: ['Four corner boards on, tops sealed under the sheet edge.', 'Rack test: solid.', 'Every cut end sealed; the 150 strip still open.'] },

/* ---------- PHASE 10 — doors + finish (v2.8 29 Sep evening: doc 23 — ZERO-BUY, boards stay 936 as cut,
   the OPENING moves; bottom rail full-width + split upper pair; 49 = the opening recovery) ---------- */
step49: { phase: 'phase10', title: 'Make the hole bigger \u2014 turn the side strips FLAT',
  panels: [
    { kind: 'front', label: 'FRONT', sub: 'the door hole \u2014 strips flat, corner boards straight', built: ['FP1', 'FP2', 'FT', 'FH'], new: ['DL1', 'DL2', 'CBf1', 'CBf2'],
      dims: [{ k: 'h', a: 72, b: 2001, y: 700, t: '1929 clear' }] },
    { kind: 'front', label: 'LINING', sub: 'edge-on NOW (ghost) \u2192 flat', bnd: [-160, 560, 250, 1150], built: ['FP1', 'FT', 'FH'], ghost: ['DLedge1'], new: ['DL1'] },
    { kind: 'doorPlan', label: 'PLAN', sub: 'flat strips \u2192 57 mm of gaps for the doors', built: ['PPa', 'PPb', 'DLa', 'DLb'], ghost: ['D1', 'D2'],
      dims: [{ k: 'h', a: 72, b: 86, y: 90, t: '14' }, { k: 'h', a: 1022, b: 1051, y: 90, t: '29' }, { k: 'h', a: 1051, b: 1987, y: 150, t: '936' }] }
  ],
  insets: [
    { kind: 'side', tag: 'same strip, two ways round \u2014 50 in vs 22 in', bnd: [20, 180, 500, 1000], ghost: ['DLedge'], new: ['DLs'], minor: 50 }
  ],
  actions: [
    'THE PROBLEM, PLAINLY: your two doors together are <b>1872 wide</b> (2 \u00D7 936). The hole is <b>1873</b>. That is 1 mm of wiggle \u2014 like a swollen wooden drawer. Doors need gaps (~15 each side, ~30 up the middle) or they jam and can never be adjusted. <b>We are NOT trimming the doors. We make the HOLE bigger.</b>',
    'THE TRICK: down each side of the hole there is a tall thin strip (the LINING \u2014 a 1200 batten). It is standing <b>on its edge</b>, so 50 mm of it pokes INTO the hole. Unscrew it.',
    'Turn it <b>FLAT</b> \u2014 wide face against the post, only <b>22 mm</b> poking in. Screw it back (same screws, 3 mm pilots). You just bought <b>28 mm</b> of hole. Both sides: <b>+56 \u2192 the hole is ~1929</b>. The doors now fit with ~14 / 29 / 14 gaps \u2014 almost exactly the plan\u2019s 15 / 30 / 15.',
    'Nothing touches these strips once the doors hang \u2014 the doors sit IN FRONT of the whole wall. The strips are just tidy edges now; losing the deep edge costs nothing.',
    'THE TWO WONKY BOARDS at the front corners (CORNER BOARDS \u2014 the door hooks screw through them on hang day): unscrew each, stand it <b>upright per the level bubble</b>, <b>thick edge toward the hole</b>, outer edge in line with the corner, screw back (3\u20134 \u00D7 4.0\u00D765, pilots). Straight board = straight hook pins = a door that swings instead of jamming. (This does NOT widen the hole \u2014 doors pass in front \u2014 it makes the side gaps EVEN.)',
    'MEASURE + WRITE DOWN \u2014 5 numbers (doc 23 \u00A77): the hole between the flat strips at <b>top / middle / bottom</b> (want \u22651912, best ~1929; if one end is narrower, the hooks get set off the NARROW end) \u2026 and the lengths of your <b>3 batten offcuts</b> (B1 / B2 / B3 \u2014 the diagonals and lock-side verticals come out of them next).'
  ],
  pieces: [['LINING', '1200 \u00D750\u00D722 \u00D72 (reused, no cut)', 'FLAT \u2014 22 mm into the hole', 0, [50, 22], 2], ['CORNER BOARD', 'repositioned, no cut', 'plumb \u00B7 thick edge toward the hole', 0, [125, 22], 2]],
  tools: ['drill', 'pilot', 'level', 'tape', 'marker', 'pencil'],
  checks: ['Both strips flat, poking ~22, equal both sides \u2014 hole within ~5 top-to-bottom.', 'Corner boards plumb, one plane across both, thick edges toward the hole.', 'All 5 numbers written down before any door gets built.'] },

step36: { phase: 'phase10', title: 'Door 1 \u2014 the two tall posts + a board as the ruler',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'face up, hinge side left', new: ['DSa', 'DSb'], labels: { DSa: 'DS1', DSb: 'DS2' },
      dims: [{ k: 'h', a: 0, b: 936, y: -80, t: '936 \u2014 one board is your ruler' }, { k: 'v', a: 0, b: 1200, x: 1080, t: '1200', s: 'r' }] },
    { kind: 'doorSec', label: 'SECTION', sub: 'layer 1 of 4', new: ['L_DS'], labels: { L_DS: 'stiles 22' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'where the door lands (overlay)', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'],
      dims: [{ k: 'h', a: 86, b: 1022, y: 90, t: '936' }] }
  ],
  insets: [
    { kind: 'doorSec', tag: 'the 4-layer sandwich \u2014 22 / 44 / 66 / 88', new: ['L_DS', 'L_DR', 'L_DIAG', 'L_BOARDS'], minor: 50 }
  ],
  actions: [
    'THE DOOR IS A SANDWICH, built lying flat: two tall posts (STILES) \u2192 bars across (RAILS) \u2192 one slanting stick (the DIAGONAL) \u2192 the 12 boards screwed on top. This step: only the two tall posts.',
    'Lay the two 1200 stiles flat on the ground, roughly 800 apart, bottom ends against something straight (a long level or a straight offcut) so they start even.',
    'WIDTH, ZERO TOOLS: lay one of your <b>936 door boards</b> across the stiles\u2019 ends. Slide the stiles until the board\u2019s ends sit EXACTLY on the outer edges of both stiles. <b>The board IS the ruler \u2014 the door is 936 wide.</b>',
    'Mark both stiles at <b>250 and 950 up from the bottom</b> (the bars land on those marks). Draw a fat arrow on one stile: <b>HINGE SIDE</b> \u2014 every step after this needs it.',
    'Clamp lightly so nothing slides. Nothing gets screwed yet.'
  ],
  pieces: [['DS1', '1200 \u00D750\u00D722', '50 up (flat, 22 thick)', 0, [50, 22]], ['DS2', '1200 \u00D750\u00D722', '50 up (flat, 22 thick)', 0, [50, 22]]],
  tools: ['clamp', 'tape', 'square', 'pencil', 'marker'],
  checks: ['Board ends flush with BOTH stile outer edges \u2014 width 936.', 'Marks at 250 and 950 on both stiles.', 'Hinge side labelled with an arrow.'] },

step37: { phase: 'phase10', title: 'The bars \u2014 both 700s hard to the HINGE side (+ the lock kit)',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'layer 2 \u2014 two 700 bars hinge-flush \u00B7 lock kit on the right', built: ['DSa', 'DSb'], new: ['DRa', 'DRb', 'DV', 'DFA', 'DFB'], labels: { DSa: 'DS1', DSb: 'DS2', DRa: 'DR1 \u2014 700', DRb: 'DR2 \u2014 700', DV: 'lock vert', DFA: 'fill 186', DFB: 'fill \u2014 hasp' },
      screws: [[15, 250], [35, 250], [15, 950], [35, 950], [861, 250], [861, 600], [861, 950]], screwChip: '\u00D72 per joint',
      dims: [{ k: 'h', a: 0, b: 700, y: -80, t: '700 \u2014 as cut' }, { k: 'h', a: 700, b: 886, y: -80, t: '186 fill' }, { k: 'v', a: 0, b: 250, x: -120, t: '250', s: 'l' }, { k: 'v', a: 0, b: 950, x: -60, t: '950', s: 'l' }] },
    { kind: 'doorSec', label: 'SECTION', sub: 'stack now 44', built: ['L_DS'], new: ['L_DR'], labels: { L_DR: 'rails 44' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'overlay position', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'] }
  ],
  insets: [
    { kind: 'door', tag: 'the anchor zone \u2014 each bar sits OVER the hinge stile', bnd: [-60, 330, 120, 500], built: ['DSa'], new: ['DRa'], screws: [[25, 250]], minor: 50 },
    { kind: 'door', tag: 'lock edge: doubled vertical + fills \u2014 the hasp bites 66 mm of frame', bnd: [540, 1010, 100, 1150], built: ['DSb'], new: ['DV', 'DFA', 'DFB'], screws: [[861, 250], [861, 600], [861, 950]], minor: 50 }
  ],
  actions: [
    'WHY THIS SHAPE (doc 24): your four bars were cut <b>700</b> for an older, narrower door plan. They cannot span 936 \u2014 and nothing is being bought. So <b>slide BOTH bars hard to the HINGE side</b>, ends flush with the hinge edge. There each bar sits <b>ON TOP of the hinge stile</b> \u2014 exactly where the metal straps will cross it (step 46): strap \u2192 board \u2192 bar \u2192 stile = <b>66 mm, the anchors</b>. A full-width bar would give the hinges nothing more than that. The hinge side is the side that carries the door \u2014 that is where the wood goes.',
    'NO CUTTING OF THE 700s \u2014 they go on as cut. The gap they leave on the lock side is <b>186</b> (bar end at 700, lock stile face at 886).',
    'THE LOCK KIT, three small pieces: <b>FILL A</b> \u2014 a 186 piece butted hard against the LOWER bar\u2019s end, finishing that line to the lock stile (cut from a rear board offcut ~270). <b>FILL B</b> \u2014 a ~250 piece at the <b>600 mark</b> (the future hasp height). <b>LOCK VERTICAL</b> \u2014 a second vertical batten tight against the lock stile\u2019s inner face, centred top-to-bottom (door 1: the B3 remainder ~1030 \u00B7 door 2: the B2 offcut ~980). 3 skew screws into the stile.',
    'THE POINT OF THE KIT: the lock edge is now <b>DOUBLE thickness</b>, and the hasp screws (step 48) land on <b>board + fill B + vertical = 66 mm of solid frame</b> \u2014 not thin wedge boards. That is the whole idea.',
    'HEIGHTS: bars on the <b>250 / 950</b> marks as before. The one alignment that matters: <b>hinge ends FLUSH with the hinge edge</b> \u2014 that IS the anchor.',
    'SCREWS: 3 mm pilot always. Bars \u2192 hinge stile: <b>2 \u00D7 4.0\u00D745</b> each. Fills: 2 screws each into the lock vertical. The butt joints need no screws of their own \u2014 the board rows above (step 39) screw through BOTH sides of every butt and tie them.',
    'KEEP EVERY FILL BELOW THE 750 MARK \u2014 the slanting stick (next step) passes through this zone above that height.'
  ],
  pieces: [['DR1/DR2', '700 \u00D750\u00D722 \u00D72/door \u2014 AS CUT, never recut', 'flat, OVER the hinge stile \u00B7 hinge ends flush', 0, [50, 22], 4], ['LOCK VERT', '~975\u20131030 \u00D750\u00D722', 'stile layer, tight inboard of the lock stile', 0, [50, 22], 2], ['FILL A', '186 \u00D7 rear board offcut (~270\u00D7125\u00D722)', 'lower line \u00B7 butts the bar end at 700', 0, [50, 22], 2], ['FILL B', '~250 \u00D7 rear board offcut', 'centre 600 \u2014 the hasp backing', 0, [50, 22], 2]],
  tools: ['drill', 'pilot', 'clamp', 'square', 'saw'],
  checks: ['Both bar ends flush with the hinge edge, each bar sitting OVER the hinge stile \u2014 the anchors.', 'Lock vertical tight to the lock stile, centred; fills butted tight, everything below 750.', 'Every screw into a 3 mm pilot first.'] },

step38: { phase: 'phase10', title: 'The slanting stick \u2014 squeeze the door square',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'layer 3 \u2014 corner to corner over the bars', built: ['DSa', 'DSb', 'DRa', 'DRb', 'DV', 'DFA', 'DFB'], new: ['DIAG'],
      screws: [[250, 428], [500, 626], [750, 823]], det: [500, 626, 150, 'A'] },
    { kind: 'doorSec', label: 'SECTION', sub: 'stack now 66', built: ['L_DS', 'L_DR'], new: ['L_DIAG'], labels: { L_DIAG: 'diagonal 66' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'overlay position', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'] }
  ],
  insets: [
    { kind: 'door', tag: 'compression direction \u2014 the ONLY right way', bnd: [40, 910, 130, 1110], built: ['DSa', 'DSb', 'DRa', 'DRb', 'DV', 'DFA', 'DFB'], new: ['DIAG'], minor: 50 }
  ],
  actions: [
    'WHY: every door on Earth slowly droops into a leaning parallelogram \u2014 the top corner away from the hinges sags. One slanting stick corner-to-corner stops it, but ONLY leaning the right way: <b>starts at the BOTTOM on the HINGE side, ends at the TOP on the LOCK side</b>. That way the droop SQUEEZES the stick \u2014 and wood is brilliant at being squeezed. The other way it hangs loose and does nothing.',
    'DO NOT MEASURE ANYTHING. Lay your longest batten offcut (<b>B1 ~1185</b> for door 1) across the finished frame in that direction, corner to corner. Pencil a line along BOTH sides of it.',
    'Cut <b>5 mm LONGER</b> than the lines \u2014 a tight fit squeezes the frame square; a loose one braces nothing. Offer it up and tap it in \u2014 it should fight you a little. Shave micro-slivers off if it truly won\u2019t go.',
    '3 mm pilot + a screw EVERYWHERE it touches wood: 4.0\u00D745 over one layer, <b>4.0\u00D765 through the fat 3-layer spots</b>. Its top end now lands on the <b>DOUBLED lock edge</b> (stile + vertical) \u2014 put the long screws in there.',
    'V2.9 NOTE \u2014 this stick is no longer optional decoration: the lock-side corners of the frame are butt joints held by the board skin, so the <b>slanting stick is what actually stops the door racking</b>. Screw every crossing, no skips.',
    'SQUARE CHECK: tape corner-to-corner both ways \u2014 within 3 mm. Then screw a <b>long BOARD OFFCUT loosely across as a temporary brace</b> (all four 700s are bars now \u2014 doc 24). It comes off after boarding. Door 2\u2019s stick leans the OTHER way \u2014 but still bottom-hinge \u2192 top-lock.'
  ],
  pieces: [['DIAG', '~1129 \u00D750\u00D722, scribed +5', 'door 1: B1 \u00B7 door 2: the B3 remainder (after its lock vertical)', 0, [50, 22], 2]],
  tools: ['saw', 'drill', 'pilot', 'square2'],
  checks: ['Frame diagonals equal within 3 mm.', 'Diagonal snug \u2014 it does not rattle or slide.', 'Hinge-side arrows still visible.'] },

step39: { phase: 'phase10', title: 'Boards on \u2014 12 rows, bottom to top',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'layer 4 \u2014 the skin (936, as cut)', built: ['DSa', 'DSb', 'DRa', 'DRb', 'DV', 'DFA', 'DFB'], new: ['BOARDS'], post: ['lapsD'],
      screws: [[25, 25], [911, 25], [25, 250], [262, 250], [500, 250], [737, 250], [911, 250]], screwChip: '2 per crossing \u00B7 fat half',
      dims: [{ k: 'v', a: 0, b: 1200, x: 1080, t: '1200', s: 'r' }] },
    { kind: 'doorSec', label: 'SECTION', sub: 'full stack 88', built: ['L_DS', 'L_DR', 'L_DIAG'], new: ['L_BOARDS'], labels: { L_BOARDS: 'boards 88' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'overlay, ~14 outer / ~29 centre gaps', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'],
      dims: [{ k: 'h', a: 72, b: 86, y: 90, t: '14' }, { k: 'h', a: 1022, b: 1051, y: 90, t: '29' }] }
  ],
  insets: [
    { kind: 'door', tag: 'the bottom board: screwed at the stile ends ONLY \u2014 nothing behind its middle', bnd: [-40, 400, -50, 350], built: ['DSa'], new: ['BOARDS'], screws: [[25, 25]], minor: 25 }
  ],
  actions: [
    'Your boards are <b>already cut at 936 \u2014 leave them alone</b>. Twelve rows per door, each row shows 100 mm: 12 \u00D7 100 = <b>1200 = exactly the stile height</b>, so row 12 lands flush. Nothing to fudge.',
    'ROW 1 at the BOTTOM: flush with the stile bottoms, <b>FAT edge DOWN</b> (every board is a wedge \u2014 thick edge down makes rain run off it, like a roof tile).',
    'THE BOTTOM BOARD GETS SCREWS AT ITS TWO ENDS ONLY \u2014 2 into each stile, 4 total, through the fat half. Nothing behind its middle, <b>on purpose</b> (the door must swing clear of the ground \u2014 a screw into air grips nothing). Row 2 laps over it 25, and row 3 lands on the lower bar + its fill: each row holds the one below.',
    'Every next row overlaps the last by <b>25</b> \u2014 like tiles or fish scales \u2014 so 100 mm shows. 2 screws per REAL crossing: both stiles <b>and the doubled lock edge</b> on every row; along the lower bar + its fill on row 3; onto the hasp-height fill at row 6; into the slanting stick wherever it passes behind.',
    'BUTT JOINTS (rows 3 and 6): one screw <b>each side</b> of every butt joint \u2014 the boards are what tie the fills to the bars. Running short of \u00D745s? The lock vertical drops to ONE screw on rows 1\u20132 and 11\u201312 (edge rows carry least).',
    'SCREW RULES: through the <b>FAT half</b> of each board, 25\u201340 up from its fat bottom edge \u2014 NEVER near the crisp-thin top edge, it splits. 3 mm pilot ALWAYS. Head flush, not buried.',
    'SEAL: every cut end + the bottom board\u2019s bottom edge \u2014 it is the closest wood to the ground on the whole shed.'
  ],
  pieces: [['BOARD', '936 \u00D722\u00D7125 \u00D712 \u2014 AS CUT, never trimmed', '125 face out \u00B7 thick edge down', 0, [125, 22], 12]],
  tools: ['drill', 'pilot', 'brush', 'square'],
  warnings: [['warn', 'SCREWED, not nailed (decision 27 Sep: evening noise + wrist) \u2014 and an improvement: \u00D745 pokes \u22646 mm through the 22 battens where the planned 50 mm nails would have poked ~15. Boards can be re-tightened after the first wet season; the anchor + chain is the real asset protection.']],
  checks: ['Row 12 flush with the stile tops.', 'Bottom board: 4 end screws, zero mid-span.', 'No screw near a thin edge; every hole piloted.'] },

step40: { phase: 'phase10', title: 'Door 2 \u2014 same but MIRRORED',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'face up, hinge side RIGHT', built: ['DSa', 'DSb', 'DRa', 'DRb', 'DV', 'DFA', 'DFB'], new: ['DIAGm'],
      labels: { DSa: 'DS3', DSb: 'DS4', DRa: 'DR3 \u2014 700', DRb: 'DR4 \u2014 700', DV: 'lock vert', DIAGm: 'DIAG mirrored' }, ghost: ['BANDb2', 'BANDt2'], post: ['lapsD', 'eyesR', 'anchorsR'] },
    { kind: 'doorSec', label: 'SECTION', sub: 'same stack, mirrored', built: ['L_DS', 'L_DR', 'L_DIAG'], new: ['L_BOARDS'] },
    { kind: 'doorPlan', label: 'PLAN', sub: 'the second overlay', built: ['PPa', 'PPb', 'DLa', 'DLb', 'D1'], new: ['D2'],
      dims: [{ k: 'h', a: 1051, b: 1987, y: 90, t: '936' }] }
  ],
  actions: [
    'Same stages, mirror image: stiles + a board as the ruler \u2192 both 700 bars hard to the <b>RIGHT</b> (hinge) edge + the lock kit down the LEFT edge (lock vertical from the <b>B2</b> offcut ~980 \u00B7 this door\u2019s diagonal from the <b>B3</b> remainder) \u2192 slanting stick \u2192 boards.',
    '<b>HINGE SIDE IS RIGHT</b> this time \u2014 arrow on the right stile before anything else.',
    'The slanting stick still runs bottom-HINGE \u2192 top-LOCK, so it <b>leans the other way</b>. (Door 1: bottom-left \u2192 top-right. Door 2: bottom-right \u2192 top-left.)',
    'Gaps when hung: <b>~14</b> at the outer edges, <b>~29</b> up the middle between the two doors.',
    'Store both doors FLAT under the rack tarp until hanging day \u2014 never stood on edge.'
  ],
  pieces: [['DOOR 2', '936 \u00D7 1200', 'mirror of door 1', 0, 0]],
  tools: ['clamp', 'drill', 'pilot', 'marker'] },

/* ---------- steps 46–48 (v2.6, 29 Sep): bands → hang → lock — doc 22, docs 11 B5 / 12 C / 16 chunk 4 ---------- */
step46: { phase: 'phase10', title: 'Metal straps on \u2014 eyes UP, slid off the lap lines',
  panels: [
    { kind: 'door', label: 'DOOR', sub: 'door 1 \u2014 straps on the hinge stile', built: ['DSa', 'DSb', 'DRa', 'DRb', 'DV', 'DFA', 'DFB', 'DIAG', 'BOARDS'], new: ['BANDb', 'BANDt'], labels: { BANDb: 'BAND 450', BANDt: 'BAND 450' },
      post: ['lapsD', 'eyesL', 'anchorsL'],
      screws: [[25, 250], [25, 950], [25, 400], [25, 800], [25, 1100]], screwChip: 'M5 \u00D760 bars \u00B7 \u00D745 plain',
      dims: [{ k: 'v', a: 0, b: 75, x: -120, t: '75', s: 'l' }, { k: 'v', a: 1125, b: 1200, x: -60, t: '75', s: 'l' }] },
    { kind: 'doorSec', label: 'SECTION', sub: 'the strap lies ON the boards', built: ['L_DS', 'L_DR', 'L_DIAG', 'L_BOARDS'], new: ['L_BAND'], labels: { L_BAND: 'strap ~6' } },
    { kind: 'doorPlan', label: 'PLAN', sub: 'overlay position', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1'] }
  ],
  insets: [
    { kind: 'door', tag: 'the anchor: strap \u2192 board \u2192 bar \u2192 stile = 66', bnd: [-50, 300, 100, 500], built: ['DSa', 'DRa', 'BOARDS'], new: ['BANDb'], screws: [[25, 250]], minor: 25 }
  ],
  actions: [
    'THE WORDS: the <b>STRAP</b> is the 450 metal arm that screws flat onto the door; the <b>EYE</b> is the ring curled at its top end; the <b>HOOK + PIN</b> are the coat-hook that goes on the post. The door hangs from two pins <b>like a coat on two wall hooks</b> \u2014 gravity holds it, and it lifts off any time you like.',
    'Per door: 2 straps down the HINGE-side stile, <b>75 in from the top and bottom, EYE ENDS UP</b>.',
    'PARK BETWEEN THE LINES: every board has a shadow line every 100 mm (a lap edge). Dry-hold each strap and slide it up/down a few mm until every hole lands on clean FAT wood <b>between</b> the lines \u2014 like parking between the lines, not on them. <b>Any hole that won\u2019t park cleanly gets skipped</b> (straps always have spares).',
    'Screws: 3.5 mm pilot, owned <b>M5 CSK in every usable hole</b>, snug to the seat. <b>\u00D760 where the strap crosses a bar</b> \u2014 each strap crosses its own <b>700 bar right where it sits on the hinge stile</b> (225\u2013275 and 925\u2013975) \u2014 both are strap \u2192 board \u2192 bar \u2192 stile = <b>66 mm, the anchors</b>. <b>\u00D745</b> everywhere else (plain board + stile = 44).',
    'The wedge boards tilt the strap slightly \u2014 it bridges them like a ruler on a staircase. <b>NORMAL.</b> The door hangs on the pins, not on strap flatness. Just keep each strap <b>parallel to the stile edge</b> (lay the level along it) \u2014 the horizontal shadow lines will try to fool your eye.',
    'Same two insets on door 2, mirrored stile \u2014 all four hooks then land level, two per post.'
  ],
  pieces: [['BAND', '450 hook & band strap \u00D72/door', 'eye end UP \u00B7 over the boards', 0, 0], ['M5 CSK', '\u00D745 plain \u00B7 \u00D760 bar anchors', '3.5 mm pilots', 0, 0]],
  tools: ['drill', 'pilot35', 'level', 'marker', 'pencil'],
  checks: ['Every bar-zone hole carries its M5\u00D760 anchor screw (both 700 bars over the hinge stile).', 'All holes parked between the lap lines \u2014 slid, not forced.', 'Straps parallel to the stile edge, 75 in from both ends.', 'Eyes up + free to rotate, both doors.'] },

step47: { phase: 'phase10', title: 'Hang day \u2014 gravity marks the hooks',
  panels: [
    { kind: 'front', label: 'FRONT', sub: 'hooks THROUGH the straightened corner boards', built: ['FP1', 'FP2', 'FT', 'FH', 'DL1', 'DL2', 'CBf1', 'CBf2'], ghost: ['DOORSg', 'DOORSc'], post: ['hooksF'], extras: ['groundF', 'padsF', 'blockF'],
      dims: [{ k: 'v', a: 150, b: 1340, x: -140, t: '1190', s: 'l' }] },
    { kind: 'doorPlan', label: 'PLAN', sub: 'doors overlay outboard \u2014 gaps 14 / 29 / 14', built: ['PPa', 'PPb', 'DLa', 'DLb'], new: ['D1', 'D2'],
      dims: [{ k: 'h', a: 72, b: 86, y: 90, t: '14' }, { k: 'h', a: 1022, b: 1051, y: 90, t: '29' }] },
    { kind: 'front', label: 'HINGE POST', sub: 'zoom \u2014 pins from the hanging eyes', bnd: [-160, 340, 500, 1450], built: ['FP1', 'FT', 'FH', 'CBf1'], post: ['hooksF'] }
  ],
  actions: [
    'Helper + calm \u2014 gusts make door-hanging miserable. Straps on (46), anchor already in (14 \u00A71), corner boards already straightened (49).',
    'Rest door 1 in the opening on ~5 mm packers. <b>Through each hanging EYE, pencil a mark on the post</b> \u2014 the ring swings to exactly where the pin must be. Gravity IS the measuring tool: nothing earlier had to be perfect.',
    'Hooks fix <b>through the front corner boards into the posts</b>: 4 mm pilots, <b>5.0\u00D780, threads rubbed on soap</b> (~17 board + ~60 into the 75 post). A 3\u20138 mm tip may poke inside at the hinge line \u2014 snip / file flush.',
    'Mount each hook on the <b>FAT half</b> of the corner board (thick edge faces the hole \u2014 set at step 49). Plate rocks on the wedge? Chisel a 2\u20133 mm flat seat or pack the low side with a shaving \u2014 so the <b>pin stands plumb</b>.',
    'Lift the door slightly, drop the eyes over the pins \u2014 it now hangs by itself, like the coat on the hooks. Door 2 the same, hinge side RIGHT.',
    '<b>Tap the ADJUSTABLE hooks</b> (small taps, re-check, repeat) until: middle gap <b>~29</b>, outer <b>~14</b>, door edges upright, no rubbing. A door scraping its corner board = washer-pack the band eye. That tapping is the ENTIRE alignment procedure.',
    'Level along the bottom edge: runs downhill = tap one hook. Doors lift off the pins any time for tweaks \u2014 that is the hook & band perk.'
  ],
  pieces: [['HOOK', 'L-pin + plate \u00D74', 'through the corner board \u00B7 fat half', 0, 0], ['PACKERS', '~5 mm scrap', 'under the door while marking', 0, 0]],
  tools: ['drill', 'pilot4', 'level', 'helper', 'marker', 'tape'],
  warnings: [['heavy', '\u224822\u201325 kg per door \u2014 the helper lifts and holds, you guide the eyes onto the pins. Never let a door hang from one band alone.']],
  checks: ['Pins plumb per post \u2014 door swings free without drift.', 'Gaps ~29 centre / ~14 outer, edges upright.', 'Eyes fully seated; bands not fouling the boards.'] },

step48: { phase: 'phase10', title: 'Lock up \u2014 hasp, turn-buttons, padlock',
  panels: [
    { kind: 'front', label: 'CENTRE', sub: 'the hasp across the 29 gap', bnd: [820, 1440, 780, 1520], ghost: ['DOORSg', 'DOORSc'], new: ['HASP'],
      dims: [{ k: 'h', a: 1022, b: 1051, y: 1500, t: '29' }] },
    { kind: 'front', label: 'FRONT', sub: 'slave door held by turn-buttons', built: ['FP1', 'FP2', 'FT', 'FH', 'DL1', 'DL2', 'CBf1', 'CBf2'], ghost: ['DOORSg', 'DOORSc'], new: ['TB1', 'TB2'], post: ['hooksF'] },
    { kind: 'doorPlan', label: 'PLAN', sub: 'the closed pair, outboard of the stops', built: ['PPa', 'PPb', 'DLa', 'DLb', 'D1', 'D2'],
      dims: [{ k: 'h', a: 72, b: 86, y: 90, t: '14' }, { k: 'h', a: 1022, b: 1051, y: 90, t: '29' }] }
  ],
  actions: [
    '<b>FIT-CHECK FIRST</b> (12 \u00A7C1): hold the owned hasp across the closed centre gap \u2014 loop reaches the staple, staple clears both door faces, padlock shackle threads BOTH. Only then mark holes.',
    'Hasp base on the door you open first; loop + staple on the slave door. <b>M5 CSK</b>, 3.5 mm pilots, into board + stile \u2014 same park-between-the-lines trick as the straps.',
    '<b>TURN-BUTTONS</b> from board offcuts (~100\u00D740 each \u2014 all four 700s are rails now, doc 24): one screw through the centre of each, they rotate to hold the slave door at top + bottom \u2014 it then behaves like part of the frame.',
    'Padlock on. Chain: anchor \u2192 bike frames, high and tight (step 45).',
    'Aftercare, two minutes a year: re-tighten board screws after the first wet season; lift the doors off the pins, tap the hooks true, re-hang. Screws allow re-tightening \u2014 nails never could.'
  ],
  pieces: [['HASP', 'heavy duty + staple', 'across the 29 centre gap \u00B7 bites 66 mm of frame', 0, 0], ['TURN-BUTTON', '~100\u00D740 board offcut \u00D72', 'one centre screw \u00B7 rotates', 0, 0]],
  tools: ['drill', 'pilot35', 'marker', 'tape'],
  checks: ['Hasp closes without forcing; padlock through loop + staple.', 'Slave door held top + bottom \u2014 no rattle in wind.', 'Nothing unsealed; bike chained to the anchor \u2014 DONE.'] },

step41: { phase: 'phase10', title: 'The finished box',
  panels: [
    { kind: 'side', label: 'SIDE', sub: 'complete', built: WALLS_SIDE.concat(['SRb', 'SRt', 'SLp', 'RCp1', 'RCp2', 'RCp3', 'CLADs1', 'CLADs_RUN', 'CLADs14', 'WRAPs']), new: ['SHEETp'], sheet: true, extras: ['groundS', 'padsS', 'slope', 'datum150'],
      dims: [{ k: 'v', a: 0, b: 1580, x: 1120, t: '1580', s: 'r' }, { k: 'v', a: 0, b: 150, x: -120, t: '150', s: 'l' }] },
    { kind: 'front', label: 'FRONT', sub: 'doors on (steps 46\u201348)', built: ['FP1', 'FP2', 'FT', 'FH', 'DL1', 'DL2', 'RC1f', 'SLf1', 'SLf2', 'SHEETf', 'CBf1', 'CBf2'], sheet: true, ghost: ['DOORSg', 'DOORSc'], post: ['hooksF'], extras: ['groundF', 'padsF', 'blockF'],
      dims: [{ k: 'h', a: 0, b: 2080, y: -120, t: '2080 (v2.4)' }] },
    { kind: 'plan', label: 'TOP', sub: 'the whole shed', built: ['PF1', 'PF2', 'PR1', 'PR2', 'CLADsLp', 'CLADsRp', 'WRp1', 'WRp2', 'SL1', 'SL2', 'RC1', 'RC2', 'RC3'], new: ['S1', 'S2', 'S3', 'ST'], sheet: true, extras: ['envp'], post: ['corr'] }
  ],
  actions: [
    'Opening recovered (49: linings flat + corner boards straight) \u2192 doors built flat (36\u201340) \u2192 straps on (46) \u2192 <b>hang + lock this week</b> (47\u201348, helper + daylight): hooks through the corner boards, tap-to-adjust, hasp + turn-buttons + padlock.',
    'Anchor first if not yet in: Ryde cement-in + Postcrete through the still-open front (~45 min). Chain loops anchor \u2192 bike frames, off the ground.',
    'Roof: mastic the 3 defect spots when the tube lands; first-rain check inside. Then the final walk-around with the checklist \u2014 bike in, locked, done.'
  ],
  pieces: [],
  tools: ['photo', 'helper'],
  checks: ['Box line 1390 on rear + front walls (side tops tucked at 1340, v2.4); rear posts 1580 above it.', 'Roof: 4 pieces, laps facing NE, ~78 eaves, 5 rows nailed \u2014 3 defect spots snipped + mastic\u2019d, watched at first rain.', 'Sides closed under the roof line (scribed rakes); rear flush at 1580; four flat corner boards \u2014 nothing bent anywhere.', 'All braces off, box rigid, every cut end sealed, 150 strip open.', 'Doors 936 as cut (zero-buy): 700 bars hinge-side + doubled lock edge (v2.9, doc 24), straps anchored (46), hung + locked (47\u201348) \u2014 gaps ~29 / ~14 \u2014 bike in, chained to the anchor.'] },

/* ---------- PHASE 11 — the anchor (doc 21: bucket pour, baby steps) ---------- */
step42: { phase: 'phase11', title: 'Everything ready BEFORE bag 1 opens',
  panels: [
    { kind: 'anchor', label: 'SECTION', sub: 'the anchor braced in the empty bucket', built: ['BKT', 'BOTTLE'], new: HOOP, ghost: ['SPAR'], extras: ['rimA'],
      labels: { ANC_BODY: 'Ryde 180 body' }, dims: [{ k: 'v', a: 140, b: 315, x: -90, t: '180 buried', s: 'l' }, { k: 'v', a: 315, b: 414, x: 470, t: 'hoop proud', s: 'r' }] },
    { kind: 'anchorPlan', label: 'TOP', sub: 'the hoop faces where the bikes park', built: ['ApW1', 'ApW2', 'ApW3', 'ApW4'], new: ['ApHOOP'], ghost: ['ApPLATE'],
      labels: { ApHOOP: 'chain here' } },
    { kind: 'plan', label: 'PLAN', sub: 'final home — rear right, in through the still-open front', built: ANCH_SHED, new: ['ANCHp'], ghost: ['BIKE1', 'BIKE2'], extras: ['chainP'] }
  ],
  actions: [
    'Bucket on level ground <b>in its final home</b> inside the shed — carried empty. Once poured it is ~45 kg and never moves.',
    'Brace the anchor: tape it to a spar laid across the rim — hoop UP, <b>facing where the bikes park</b> (the chain must reach both frames).',
    'Line the kit up: both bags <b>open</b>, 1 L bottle full, poking stick, gloves. Nothing else exists once you start.',
    'No mixing anywhere — this concrete goes in <b>dry</b>, water after. Total water for everything: <b>5–6 L</b>.'
  ],
  pieces: [['ANCHOR', 'Ryde cement-in, hoop Ø 50', '180 buried · hoop proud, faces the bikes', 0, [80, 180]], ['BUCKET', '27 L, clean', 'level, in its final home', 0, 0], ['POSTFIX', 'Build It 20 kg (AH689)', 'no-mix — pour dry, water after', 0, 0, 2], ['MEASURE', '1 L bottle', '≈3 L per bag', 0, 0]],
  tools: ['level', 'bottle', 'marker', 'tape'],
  warnings: [['warn', 'Once water touches powder you have ~5 MINUTES. Missing something when bag 1 opens? Stop — bag unopened means concrete is still fine tomorrow.']],
  checks: ['Hoop faces the bike parking spot.', 'Bucket level — a sloped pour cures lopsided.', 'Bags open, bottle full, stick to hand.'] },

step43: { phase: 'phase11', title: 'Bag 1 — half, water, poke. Then the rest',
  panels: [
    { kind: 'anchor', label: 'SECTION', sub: 'bag 1 in (≈13 L)', built: ['BKT', 'BOTTLE'].concat(HOOP), new: ['PWDR_B'], ghost: ['WTRb', 'SPAR'], extras: ['rimA'],
      labels: { PWDR_B: 'bag 1 ≈ 13 L' }, callouts: [[235, 182], [55, 115]] },
    { kind: 'anchorPlan', label: 'TOP', sub: 'nothing to see from above — that is fine', built: ['ApW1', 'ApW2', 'ApW3', 'ApW4'], ghost: ['ApPLATE', 'ApHOOP'] },
    { kind: 'plan', label: 'PLAN', sub: 'the pour happens inside the closed box', built: ANCH_SHED, new: ['ANCHp'], ghost: ['BIKE1', 'BIKE2'] }
  ],
  insets: [
    { kind: 'anchor', tag: 'the rhythm: HALF a bag → 1 bottle → poke 15–20×', bnd: [-40, 340, 30, 250], built: ['BKT'], new: ['PWDR_A'], ghost: ['WTRa'], minor: 50 }
  ],
  actions: [
    'Pour in <b>half of bag 1</b> — the bucket fills roughly a quarter.',
    '<b>One bottle of water (1 L)</b>, poured slowly over the top ①, then <b>poke 15–20 times</b> ② — right down to the floor, so water reaches the bottom.',
    'Now the <b>rest of bag 1</b> → another bottle → poke again. Powder first, water after — always this order.',
    'Done right: the surface looks dark and wet. Pale dry patches = a splash more water, never a flood.'
  ],
  pieces: [['POSTFIX', 'bag 1 — 20 kg', 'half → 1 L → poke → half', 0, 0], ['WATER', '1 L bottle measures', '2 bottles this step', 0, 0, 2]],
  tools: ['bottle', 'timer'],
  warnings: [['warn', 'NEVER fill the bucket with water. 5–6 L does BOTH bags — the powder fills the bucket, the water only soaks it.']],
  checks: ['No pale dry patches after poking.', 'Water soaks in within a minute — pooling that stays means STOP adding.'] },

step44: { phase: 'phase11', title: 'Bag 2 — same again, STOP 25 below the rim',
  panels: [
    { kind: 'anchor', label: 'SECTION', sub: 'both bags in — the pour stops here', built: ['BKT', 'PWDR_B'].concat(HOOP), new: ['PWDR_C'], ghost: ['WTRc'], extras: ['rimA'],
      dims: [{ k: 'v', a: 0, b: 315, x: -90, t: '2 bags ≈ 26–27 L', s: 'l' }, { k: 'v', a: 315, b: 340, x: 470, t: 'STOP ~25', s: 'r' }] },
    { kind: 'anchorPlan', label: 'TOP', sub: 'only the hoop stays proud', built: ['ApW1', 'ApW2', 'ApW3', 'ApW4'], new: ['ApHOOP'], ghost: ['ApPLATE'],
      labels: { ApHOOP: 'chain here' } },
    { kind: 'plan', label: 'PLAN', sub: 'the block is done — 5–7 days from now it holds the chain', built: ANCH_SHED, new: ['ANCHp'], ghost: ['BIKE1', 'BIKE2'], extras: ['chainP'] }
  ],
  actions: [
    'Bag 2, the same rhythm: half → 1 L → poke → rest → last 1–1.5 L → poke.',
    '<b>Poke hard around the anchor\u2019s legs</b> — dry pockets against the steel are the one weak point of a deep pour.',
    'Stop with the surface <b>~25 below the rim</b> — the hoop must stand clear so chain + lock thread through.',
    'Done looks like: dark and wet all over, no pale patches, small pools soaking away.'
  ],
  pieces: [['POSTFIX', 'bag 2 — 20 kg', 'same rhythm · stop 25 below the rim', 0, 0], ['WATER', '1 L bottle measures', '2–2.5 bottles this step', 0, 0, 2]],
  tools: ['bottle', 'timer'],
  warnings: [['heavy', '~45 kg from here on — the bucket does not get carried again. It IS the mould.']],
  checks: ['Concrete ~25 below the rim; hoop fully clear.', 'No dry pockets left by the anchor legs.'] },

step45: { phase: 'phase11', title: 'Wait a week — then chain the bike',
  panels: [
    { kind: 'anchor', label: 'SECTION', sub: 'curing — hard ≠ strong', built: ['BKT', 'PWDR_C'].concat(HOOP), extras: ['rimA', 'chainA'],
      labels: { PWDR_C: 'curing — day 1 is weak' }, dims: [{ k: 'v', a: 315, b: 414, x: -90, t: '~100 clear', s: 'l' }] },
    { kind: 'anchorPlan', label: 'TOP', sub: 'the hoop is the only metal that matters', built: ['ApW1', 'ApW2', 'ApW3', 'ApW4'], new: ['ApHOOP'], ghost: ['ApPLATE'] },
    { kind: 'plan', label: 'PLAN', sub: 'chain: anchor hoop → both frames, off the ground', built: ANCH_SHED, new: ['ANCHp'], ghost: ['BIKE1', 'BIKE2'], extras: ['chainP'] }
  ],
  actions: [
    'Rock-hard in 10 minutes — but <b>weak for days</b>. Full strength at <b>5–7 days</b>. No chain load before then; parking the bike and laying the chain through is fine.',
    'After a week: cut the bucket off if you want it pretty — or leave it on under the shed floor, the plastic protects the block.',
    'Chain loops <b>anchor hoop → both bike frames</b>, high and tight, <b>off the ground</b> — croppers and sledgehammers both need the floor.',
    'Photo. The shed is done.'
  ],
  pieces: [['CHAIN', '1 m hardened kit (owned)', 'hoop → both frames · off the ground', 0, 0]],
  tools: ['photo'],
  warnings: [['warn', 'Day-one fast-set concrete can look set and still crumble under a yank — the week is not optional.']],
  checks: ['5–7 days cured before the chain takes real load.', 'Chain high and tight, resting on nothing.', 'Bike in, locked, photo taken.'] }

};

