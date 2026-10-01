/* model.js — v2 guide geometry model. SOURCE OF TRUTH = 00-PLAN.md §3 (2026-09-25).
   2D orthographic ONLY: named bands/polygons per projection. No DOM, no 3D.
   x: width 0..2080 (0 = outer face LEFT posts) · y: height 0.. (0 = post bottoms / pad bearing)
   z: depth 0..950 (0 = outer face FRONT posts). ONE z axis everywhere; plan drawn front-at-bottom.
   v2.4 AS-BUILT (25 Sep evening): frame flipped — walls 75 THICK, rails 50 tall, posts 50 along
   the wall line (screws cross the 50 → 30 mm bites). Side rails = INSIDE overlaps (SRb 200–275,
   SRt 1265–1340). SLs centred on the post lines (inner faces x=50 / x=2030). Overall 2080.
   See 18-v2.4-as-built-orientation-flip.md. */
const M = (() => {

  const C = {
    W_MEM: 1980, POST: 50, W_ALL: 2080,          // members between posts / post face / overall width (v2.4)
    D_RAIL: 850, D_ALL: 950,                      // side rails as cut (inside overlaps, 25/post) / overall depth
    H_FP: 1390, H_RP: 1580, BOX: 1390,            // front post, rear post, BOX LINE (FH/RR2 tops)
    CLR: 150, RCLR: 145,                          // ventilation line / rear cladding datum
    RISE: 190, RUN: 850,                          // 1580−1390 = 1630−1440
    SLOPE: Math.sqrt(850 * 850 + 190 * 190),      // ≈ 870.98
    PITCH: Math.atan2(190, 850) * 180 / Math.PI,  // 12.62° (> Onduline 10° min)
    FR_W: 75, FR_T: 50,                           // frame 75×50 nominal (v2.4 as built: 75 = wall thickness)
    BAT_W: 50, BAT_T: 22,                         // batten 50×22
    BRD_T: 22, BRD_W: 125, LAP: 25, EXPO: 100,    // feather-edge board, lap, exposure
    SH_W: 760, SH_L: 1000, CORR: 95, EAVES: 78,   // Onduline sheet, one corrugation, eaves overhang (v2.4)
    DOOR_W: 936, DOOR_H: 1200,                    // v2.8 (29 Sep eve, doc 23): doors as CUT, kept — the opening moves instead
    RS_CUT: 1150, RS_FIT: 1140,                   // RS as cut / as fitted under RR2 (1340−200, v2.4)
    FILL_LEN: 190,                                // 1580−1390, from S3/S4 ~225 offcut
    ROOF_TOP_F: 1440, ROOF_TOP_R: 1630,           // flat roof frame +50 above each bearing
    SHEET_COVER: 2280, ENV_W: 2124                // sheets cover / wall-face envelope (2080 + 2×22, v2.4)
  };
  const COS = C.RUN / C.SLOPE, SIN = C.RISE / C.SLOPE;
  // Roof deck line in side view (z,y): s=0 at front bearing inner edge → s=SLOPE at rear bearing.
  const deck = s => [50 + s * COS, 1390 + s * SIN];
  const nrm = [-SIN, COS];
  const quad = (s0, s1, th) => {
    const a = deck(s0), b = deck(s1);
    return [[a[0], a[1]], [b[0], b[1]], [b[0] + th * nrm[0], b[1] + th * nrm[1]], [a[0] + th * nrm[0], a[1] + th * nrm[1]]];
  };
  // SL deck band: s −49.5…920.5, 50 slope-normal thick
  const dp = deck(-49.5), dq = deck(920.5);
  const SLP = [[dp[0], dp[1]], [dq[0], dq[1]], [dq[0] + 50 * nrm[0], dq[1] + 50 * nrm[1]], [dp[0] + 50 * nrm[0], dp[1] + 50 * nrm[1]]];
  // Sheet seen edge-on in side view (thickness exaggerated 8, drawn above frame tops)
  const sp = deck(-68.5), sq = deck(905.5);
  const SHEETp = [[sp[0] + 50 * nrm[0], sp[1] + 50 * nrm[1]], [sq[0] + 50 * nrm[0], sq[1] + 50 * nrm[1]],
                  [sq[0] + 58 * nrm[0], sq[1] + 58 * nrm[1]], [sp[0] + 58 * nrm[0], sp[1] + 58 * nrm[1]]];
  // Door diagonal (door 1, hinge LEFT: bottom-hinge → top-lock), 50 wide band.
  // v2.8 (29 Sep eve, doc 23): 936 door — centreline (25,250)→(911,950), ≈1129 scribed.
  const DIAG1 = [[10, 270], [896, 970], [926, 930], [40, 230]];
  const DIAG2 = DIAG1.map(p => [936 - p[0], p[1]]); // mirrored for door 2 (hinge right)

  const RS_X0 = 1027.5, RS_X1 = 1102.5; // RS/FILL centred on 1065

  /* ---- Piece table (§3.2, corrections C1–C3 applied; v2.4 as-built bands) ---- */
  const pieces = {

    rear: { // (x,y)
      RP1: [0, 50, 0, 1580], RP2: [2030, 2080, 0, 1580],
      RR1: [50, 2030, 150, 200],                         // v2.4: flat, 50 tall
      RR2: [50, 2030, 1340, 1390],                       // C1: top ON the box line, 190 below post tops
      RS: [RS_X0, RS_X1, 200, 1340],                     // C2: as fitted (scribe/trim 1150→~1140)
      FILL: [RS_X0, RS_X1, 1390, 1580],                  // C3: above RR2 up to post-top plane
      RC3r: [50, 2030, 1580, 1630],                      // on the rear post tops, NOT on RR2 (C5)
      RC2r: [50, 2030, 1434, 1484],                      // RC2 projected (hidden, mid-slope)
      SHEETr: [-100, 2180, 1630, 1638],                  // sheet rear edge (thickness exaggerated), run centred
      SLr1: [-25, 50, 1580, 1634], SLr2: [2030, 2105, 1580, 1634], // v2.4: centred on the post lines
      CLADr1: [-54, 2134, 145, 270],                     // D12: 2188 board = 2080 wall + 2×54 sq-cut tails
      CLADr_RUN: [-54, 2134, 270, 1580],                 // courses 2–14 (eased laps, land 1580)
      CLADr_ALL: [-54, 2134, 145, 1580]
    },

    front: { // (x,y)
      FP1: [0, 50, 0, 1390], FP2: [2030, 2080, 0, 1390],
      FT: [50, 2030, 100, 150],                          // top face ON the 150 line (bottom at 100, v2.4)
      FH: [50, 2030, 1340, 1390],                        // flat, top on box line
      DL1: [50, 72, 150, 1340], DL2: [2001, 2023, 150, 1340], // linings FLAT (v2.8, step 49) — 22 in, faces at 72/2001
      DLedge1: [50, 100, 150, 1340],                     // v2.8 step 49 ghost: left lining AS BUILT (on edge, 50 in)
      RC1f: [50, 2030, 1390, 1440], SLf1: [-25, 50, 1384, 1438], SLf2: [2030, 2105, 1384, 1438],
      SHEETf: [-100, 2180, 1438, 1446],                  // sheet eaves edge over the doors (exaggerated)
      // v2.6 (29 Sep): flat corner boards on the front posts (19 §4b) + the hanging hardware.
      // v2.8 (29 Sep eve, doc 23): doors 936 as cut; linings FLAT (22 in — rotated at step 49);
      // as-built clear between lining faces ≈1929 → gaps 14 / 29 / 14 (lining faces 72 / 2001).
      CBf1: [0, 125, 325, 1375], CBf2: [1955, 2080, 325, 1375],   // corner boards, thick edge toward the opening
      DOORSg: [86, 1022, 155, 1355], DOORSc: [1051, 1987, 155, 1355], // door pair, overlay (ghost)
      HASP: [962, 1072, 975, 1040],                     // hasp across the 29 centre gap (schematic)
      TB1: [1700, 1760, 180, 222], TB2: [1700, 1760, 1290, 1332] // turn-buttons, slave door top + bottom
    },

    side: { // (z,y) — front at LEFT (z 0), rear at RIGHT (z 950); walls 75 thick (v2.4)
      FP: [0, 75, 0, 1390], RP: [875, 950, 0, 1580],
      FT: [0, 75, 100, 150], FH: [0, 75, 1340, 1390],
      DLs: [75, 97, 150, 1340],                          // door linings, inner 22 of front wall (v2.8: FLAT)
      DLedge: [75, 125, 150, 1340],                      // v2.8 step 49 ghost: the lining AS BUILT (on edge, 50 in) — rotates to DLs
      SRb: [50, 900, 200, 275], SRt: [50, 900, 1265, 1340],  // v2.4: inside overlaps; SRb bottom = RR1 top, SRt top = FH/RR2 underside
      RR1: [875, 950, 150, 200], RR2: [875, 950, 1340, 1390],// C1
      RS: [875, 950, 200, 1340], FILL: [875, 950, 1390, 1580],// C2/C3
      SLp: SLP, RCp1: quad(-50, 0, 50), RCp2: quad(410, 461, 50), RCp3: quad(871, 921, 50),
      SHEETp, WRAPs: [950, 1004, 145, 1580],             // D12: rear-board tails oversail past the side wall — square-cut, never folded
      CLADs1: [0, 950, 150, 275],
      CLADs_RUN: [0, 950, 275, 1450],                    // courses 2–13 (top of 13 = 1450)
      CLADs14: [[0, 1425], [950, 1425], [950, 1615], [0, 1435]] // raked top course, chases the slope
    },

    plan: { // (x,z) — front drawn at the BOTTOM (z 0), rear at top (z 950)
      PF1: [0, 50, 0, 75], PF2: [2030, 2080, 0, 75],
      PR1: [0, 50, 875, 950], PR2: [2030, 2080, 875, 950],
      FTp: [50, 2030, 0, 75], FHp: [50, 2030, 0, 75],
      RR1p: [50, 2030, 875, 950], RR2p: [50, 2030, 875, 950],
      RSp: [RS_X0, RS_X1, 875, 950], FILLp: [RS_X0, RS_X1, 875, 950], RC3p: [50, 2030, 875, 950],
      SL1: [-25, 50, 2, 950], SL2: [2030, 2105, 2, 950],  // v2.4: centred on the post lines, inner faces x=50/2030
      RC1: [50, 2030, 0, 75], RC2: [50, 2030, 450, 500], RC3: [50, 2030, 875, 950],
      SR1p: [50, 100, 50, 900], SR2p: [1980, 2030, 50, 900], SR3p: [50, 100, 50, 900], SR4p: [1980, 2030, 50, 900], // v2.4: INSIDE the posts, 25 overlap per end
      CLADsLp: [-22, 0, 0, 950], CLADsRp: [2080, 2102, 0, 950],
      WRp1: [-54, 0, 950, 1004], WRp2: [2080, 2134, 950, 1004], // D12: tails poke past the rear plane
      DL1p: [50, 72, 0, 75], DL2p: [2008, 2030, 0, 75],
      S1: [-100, 660, 22, 966], S2: [565, 1325, 22, 966], S3: [1230, 1990, 22, 966], ST: [1895, 2180, 22, 966], // v2.4: run centred, 100 eaves per side
      ENV: [0, 2080, 0, 950],
      ANCHp: [1560, 1840, 560, 840],          // phase 11: the 280×280 bucket block, rear right
      BIKE1: [1130, 1310, 140, 660], BIKE2: [1360, 1540, 140, 660] // parked frames (ghosts, chain reach)
    },

    door: { // (x,y) door 1 face up, hinge side LEFT
      // v2.9 (1 Oct, doc 24): BOTH rails = the four old 700s AS CUT, slid hard to the HINGE
      // side, hinge ends flush — each sits OVER the hinge stile → the straps keep their
      // board+rail+stile = 66 anchors with zero offcut-length dependency. The lock side gets
      // the kit: DV (second vertical, inboard of the lock stile — doubles the lock edge),
      // DFA (186 fill completing the lower line, butted at 700) and DFB (~250 at the hasp
      // height 600) → hasp screws bite board+fill+vertical = 66 (was DRa [0,936] + DRb/DRc stubs).
      DSa: [0, 50, 0, 1200], DSb: [886, 936, 0, 1200],
      DRa: [0, 700, 225, 275], DRb: [0, 700, 925, 975],
      DFA: [700, 886, 225, 275], DFB: [636, 886, 575, 625], DV: [836, 886, 100, 1100],
      DIAG: DIAG1, DIAGm: DIAG2,
      BOARDS: [0, 936, 0, 1200],
      // hinge bands (AG160 450 straps) on the hinge stile, eye end UP: bottoms 75 in from the
      // door ends — each 450 band CROSSES its own 700 rail where it sits on the hinge stile
      BANDb: [12, 38, 75, 525], BANDt: [12, 38, 675, 1125],
      BANDb2: [898, 924, 75, 525], BANDt2: [898, 924, 675, 1125] // door 2, hinge RIGHT
    },

    rearSec: { // (z,y) rear-wall edge section (looking along the wall) — orientation view
      RPs: [0, 75, 0, 1580], RR1s: [0, 75, 150, 200], RR2s: [0, 75, 1340, 1390],
      RSs: [0, 75, 200, 1340], FILLs: [0, 75, 1390, 1580]
    },

    frontSec: { // (z,y) front-wall edge section
      FPs: [0, 75, 0, 1390], FTs: [0, 75, 100, 150], FHs: [0, 75, 1340, 1390], DLfs: [75, 97, 150, 1340]
    },

    doorSec: { // (x, stack) layer stack section at a stile/rail crossing — heights 22/44/66/88
      L_DS: [0, 936, 0, 22], L_DR: [0, 936, 22, 44], L_DIAG: [[0, 44], [700, 44], [936, 66], [240, 66]],
      L_BOARDS: [0, 936, 66, 88],
      L_BAND: [0, 50, 88, 94] // v2.6: the hinge strap lies ON the boards (board 88 + strap ~6)
    },

    doorPlan: { // (x,z) horizontal slice through the opening: posts, linings, overlay doors
      PPa: [0, 50, 0, 75], PPb: [2030, 2080, 0, 75],
      DLa: [50, 72, 0, 75], DLb: [2001, 2023, 0, 75],
      D1: [86, 1022, -22, 0], D2: [1051, 1987, -22, 0]   // v2.8: gaps 14 outer / 29 centre, door width 936, clear 1929
    },

    /* ---- PHASE 11 — the anchor (doc 21). Bucket section schematic, mm-ish, on the 100 grid.
       Interior 280 wide × 340 tall · floor y=0 · rim y=340 · pour stops 25 below (315). ---- */
    anchor: { // (x,y) cross-section through the bucket
      BKT: [[-14, 0], [-14, 352], [0, 352], [0, 14], [266, 14], [266, 352], [280, 352], [280, 0], [-14, 0]], // walls+floor U
      PWDR_A: [0, 280, 0, 85],        // half of bag 1 (~6–7 L powder)
      PWDR_B: [0, 280, 0, 170],       // bag 1 complete (~13 L)
      PWDR_C: [0, 280, 0, 315],       // bag 2 complete — STOP, 25 below the rim
      WTRa: [0, 280, 85, 93],         // 1 L sitting on the half-bag surface
      WTRb: [0, 280, 170, 178],
      WTRc: [0, 280, 315, 323],
      ANC_BODY: [100, 180, 140, 315], // Ryde 180 body, buried top at the pour top
      HOOP_L: [104, 112, 315, 402], HOOP_R: [168, 176, 315, 402], HOOP_T: [104, 176, 402, 414], // hoop proud, clears chain+lock
      SPAR: [-90, 370, 356, 374],     // temporary brace batten taped to the hoop
      BOTTLE: [350, 430, 0, 230]      // the 1 L measure
    },

    anchorPlan: { // (x,z) the bucket from above
      ApW1: [-14, 294, -14, 0], ApW2: [-14, 294, 340, 354], ApW3: [-14, 0, 0, 354], ApW4: [280, 294, 0, 354],
      ApPLATE: [100, 180, 130, 210],  // buried body
      ApHOOP: [92, 188, 216, 232]     // the hoop bar — chain threads here
    }
  };

  /* Course lines (lap lines) for cladding runs */
  const courses = {
    side: { y0: 150, n: 14, pitch: 100, lines: Array.from({ length: 13 }, (_, i) => 250 + i * 100) },   // tops 250…1450
    rear: { y0: 145, n: 14, pitch: 102.5, lines: Array.from({ length: 13 }, (_, i) => 247.5 + i * 102.5) }, // land 1580
    door: { y0: 0, n: 12, pitch: 100, lines: Array.from({ length: 11 }, (_, i) => 100 + i * 100) }
  };

  /* View kinds → axis labels + auto-bounds floors (mm). Canvas letterboxes inside, uniform scale. */
  const VIEWS = {
    rear:     { ax: 'x·y', cap: 'REAR ELEVATION',        env: [-340, 2470, -160, 1840] },
    front:    { ax: 'x·y', cap: 'FRONT ELEVATION',       env: [-340, 2470, -160, 1640] },
    side:     { ax: 'z·y', cap: 'SIDE ELEVATION',        env: [-280, 1240, -220, 1960] },
    plan:     { ax: 'x·z', cap: 'PLAN — front at bottom',env: [-400, 2560, -180, 1140] },
    door:     { ax: 'x·y', cap: 'DOOR — face up',        env: [-220, 1260, -160, 1380] },
    rearSec:  { ax: 'z·y', cap: 'SECTION — looking along the wall', env: [-160, 220, -80, 1800] },
    frontSec: { ax: 'z·y', cap: 'SECTION — looking along the wall', env: [-160, 220, -80, 1620] },
    doorSec:  { ax: 'x·h', cap: 'SECTION — the layer stack',        env: [-140, 1120, -80, 260] },
    doorPlan: { ax: 'x·z', cap: 'PLAN — doors overlay the opening', env: [-120, 2260, -120, 220] },
    anchor:     { ax: 'x·y', cap: 'SECTION — through the bucket', env: [-150, 530, -90, 480] },
    anchorPlan: { ax: 'x·z', cap: 'TOP — the bucket',             env: [-120, 420, -110, 470] }
  };

  const view = kind => pieces[kind] || null;

  /* ---- Invariants (§3.3, v2.4) — surfaced as chips on qa.html ---- */
  const P = pieces;
  const eq = (a, b, eps = 0.01) => Math.abs(a - b) <= eps;
  const checks = [
    { t: '1 Box line: FH.top = RR2.top = 1390 (SRt.top = 1340 = their underside — v2.4 shift)', ok: eq(P.front.FH[3], 1390) && eq(P.rear.RR2[3], 1390) && eq(P.side.SRt[3], 1340) },
    { t: '2 Rear mid-wall vertical contiguous 200→1340→1390→1580 = post-top plane', ok:
        eq(P.rear.RS[2], 200) && eq(P.rear.RS[3], 1340) && eq(P.rear.RR2[2], 1340) && eq(P.rear.RR2[3], 1390) &&
        eq(P.rear.FILL[2], 1390) && eq(P.rear.FILL[3], 1580) && eq(P.rear.RP1[3], 1580) },
    { t: '3 Rise: 1580−1390 = 1630−1440 = 190; SLOPE ≈ 871', ok:
        eq(C.H_RP - C.BOX, 190) && eq(C.ROOF_TOP_R - C.ROOF_TOP_F, 190) && Math.abs(C.SLOPE - 870.98) < 0.05 },
    { t: '4 Lap chain 660 / 1325 / 1990 / 2180 centred; (2280−2124)/2 = 78 face eaves', ok:
        eq(P.plan.S1[1], 660) && eq(P.plan.S2[1], 1325) && eq(P.plan.S3[1], 1990) && eq(P.plan.ST[1], 2180) &&
        eq((C.SHEET_COVER - C.ENV_W) / 2, 78) },
    { t: '5 Courses: sides 14×100 from 150 (top 1450); rear 14×102.5 from 145 land 1580; doors 12×100 = 1200', ok:
        eq(courses.side.y0 + 14 * courses.side.pitch, 1550) && eq(courses.side.lines[12], 1450) &&
        eq(courses.rear.y0 + 14 * courses.rear.pitch, 1580) && eq(courses.door.n * courses.door.pitch, 1200) },
    { t: '6 Datums: RR1 bottom = 150; FT top = 150 (bottom 100); SRb bottom = RR1.top = 200', ok:
        eq(P.rear.RR1[2], 150) && eq(P.rear.RR1[3], 200) && eq(P.side.SRb[2], 200) && eq(P.front.FT[3], 150) && eq(P.front.FT[2], 100) },
    { t: '7 RS as-fit = 1140 (1340−200); FILL = 190 (1580−1390)', ok:
        eq(P.rear.RS[3] - P.rear.RS[2], C.RS_FIT) && eq(P.rear.FILL[3] - P.rear.FILL[2], C.FILL_LEN) },
    { t: '8 v2.4 overlaps: SR = 850 = 800 gap + 2×25; screws cross the 50 everywhere', ok:
        eq(75 - P.plan.SR1p[2], 25) && eq(P.plan.SR1p[3] - 875, 25) && eq(P.plan.SR1p[3] - P.plan.SR1p[2], 850) },
    { t: '9 Corner tails (D12): 2188 = 2080 + 2×54, square-cut — NO folding', ok:
        eq(2188, C.W_ALL + 2 * 54) && eq(P.side.WRAPs[0], C.D_ALL) && eq(P.side.WRAPs[1], C.D_ALL + 54) && eq(P.plan.WRp1[2], C.D_ALL) },
    { t: '10 Doors v2.9: BOTH rails 700 as-cut, hinge-flush, sitting OVER the hinge stile; fill A completes the lower line to 886; lock vertical doubles the lock edge; 12 courses ×100 = 1200', ok:
        eq(P.door.DRa[1], 700) && eq(P.door.DRb[1], 700) && eq(P.door.DRa[0], 0) && eq(P.door.DRb[0], 0) &&
        eq(P.door.DFA[0], 700) && eq(P.door.DFA[1], 886) && eq(P.door.DV[0], 836) && eq(P.door.DV[1], 886) &&
        eq(courses.door.n * courses.door.pitch, C.DOOR_H) },
    { t: '11 Hinge bands cross both 700 rail zones on the hinge stile (225–275 / 925–975) → strap→board→rail→stile = 66 anchors; hasp zone = board + fill B + vertical = 66 (DFB centred 600)', ok:
        P.door.BANDb[2] < 225 && P.door.BANDb[3] > 275 && P.door.BANDt[2] < 925 && P.door.BANDt[3] > 975 &&
        eq(P.door.BANDt[3] - P.door.BANDt[2], 450) && eq(P.doorSec.L_BAND[2], 88) && eq(P.door.DFB[2] + P.door.DFB[3], 1200) },
    { t: '12 Door gaps v2.8: 936 + 936 + 29 centre + 2×14 outer = 1929 clear between the FLAT linings (faces 72 / 2001)', ok:
        eq(P.doorPlan.D2[0] - P.doorPlan.D1[1], 29) && eq(P.doorPlan.D1[0] - 72, 14) && eq(2001 - P.doorPlan.D2[1], 14) &&
        eq(P.doorPlan.D1[1] - P.doorPlan.D1[0], C.DOOR_W) }
  ];

  return { C, COS, SIN, deck, nrm, pieces, courses, VIEWS, view, checks };
})();
