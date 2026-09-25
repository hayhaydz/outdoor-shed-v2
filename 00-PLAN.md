# 00 — PLAN · v2 Guide (IKEA-style, mobile-first, accurate)

**Date:** 2026-09-25 · **Status:** approved plan, build not yet started
**Folder:** `2026-09-25-v2-guide/` (this folder — plan + the new guide, self-contained)
**Replaces:** `guide/` (v1 web guide, left untouched as reference)
**Inputs:** `guide/shared/*` (v1 engine — geometry basis) · user Q&A 2026-09-25 (decision log §2) · `visuals-2026-09-24/HANDOVER.md` (cut/stick data only — NOT its frame geometry, see §3.5) · `v2-2026-09-17/09–12` (technique prose, sequencing, warnings)
**Audience:** a phone, held by one builder, possibly with cold fingers. Everything below serves that.

---

## 1. Mandate

Rebuild the assembly guide as an **IKEA-style assembly manual**: mobile-focused, diagram-dominant, near-zero prose, and — above all — **accurate to the design that will actually be built**. Rendering is **strictly 2D orthographic CAD** (see D10/D11): flat elevations/sections/plan only — no axonometric, no perspective, no 3D anywhere. The v1 guide has good bones (declarative steps, one piece per step, canvas engine, zero dependencies) but:

- its diagrams contain real geometry errors (worst: the rear-wall top-rail stack — the exact thing the offcut example exposed),
- its side elevation's ground zone is visual soup (ghost "checkered" threshold block, unlabelled dark-orange datum dash = the "random red line", ground line, brace dashes all piled on the same 200 px),
- diagrams are small, uniform and explain little: no joint close-ups, no orientation logic, no hardware counts, no pictos.

Fix all three by rebuilding the presentation layer around a **single verified geometry model**.

---

## 2. Decision log (user, 2026-09-25 — binding)

| # | Question | Decision |
|---|---|---|
| D1 | Geometry truth | **The v1 guide engine is the design truth** (rise 190, FH between posts, top side rails at 1390, SL/RC all flat, rear clad 14 courses) — with the corrections in §4. The v2.2 markdown docs describe a *different, superseded* frame (see §3.5). |
| D2 | Rear wall top rail | **RR2 top edge sits ON the box line at 1390, perfectly level with FH (front header) and SR3/SR4 (side top rails).** "We want a box." RR2 is on edge, band 1315–1390, between the posts, 190 below the rear post tops. |
| D3 | Rear offcut | A short offcut (~190) **fills the vertical space between RR2's top (1390) and the roof cross member plane (post tops, 1580)** at mid-wall, aligned above RS. Installed while the wall is still flat. |
| D4 | Roof frame orientation | **All flat** (50 tall): SL1/SL2 flat on the slope over the post lines; RC1/RC2/RC3 flat between them. |
| D5 | Cross-member naming | Front → rear = **RC1, RC2, RC3** (RC3 is the one on the rear post tops). |
| D6 | Style | **Strict IKEA**: white paper, black line-art, grey context, ONE accent for the new piece, red only for warnings, pictos, circled callouts, minimal text. |
| D7 | Step granularity | Keep one-piece-per-step; **add steps where it helps following** — never fewer. |
| D8 | Additions chosen | **Parts sheet page · tools + golden-rules page · phase dividers.** Explicitly NOT chosen: swipe nav, progress tracking, exploded cover axon. |
| D9 | Build status | Nothing is built yet — the guide teaches the *intended* build; the geometry must be internally consistent (it now is, §3.3). |
| D10 | Rendering mode | **2D orthographic CAD only.** No 3D, no axonometric, no exploded 3D stacks, no perspective — anywhere, including phase dividers. Every canvas is a true flat projection on a visible **CAD grid with correct aspect ratios** (uniform mm scale on both axes, never stretched). |
| D11 | Views per step | **Every step shows multiple 2D views — always front, side AND top** (triptych, §6.3), with the step's piece highlighted in all of them. No step ever ships a single view. |
| D12 | Corner detail (2026-09-25, later session) | **NO folding.** Timber splits across a 90° bend — never wrap or kerf a board around a corner. Rear boards keep their 2188 cut read as **2130 wall + 2×29 square-cut tails** oversailing each side wall; tails sealed same-day, no nails in them. Side boards, doors and battens unchanged — battens stay reserved (front drip edge / door catches). |

---

## 3. Authoritative geometry — SOURCE OF TRUTH

All dimensions mm. Nominal sections: frame 75×50, batten 50×22, boards 22×125 feather-edge, sheet Onduline 760×1000×2.6.

### 3.1 Coordinate system & constants

```
x : width     0 = outer face LEFT posts  → 2130
y : height    0 = post bottoms (pad bearing plane) → up
z : depth     0 = outer face FRONT posts → 950 (rear)     [ONE z everywhere — v1 engine
                                                            had plan/side flipped vs each other]
```

| Constant | Value | Meaning |
|---|---|---|
| W_MEM / POST / W_ALL | 1980 / 75 / 2130 | members between posts / post face across / overall width |
| D_RAIL / D_ALL | 850 / 950 | side rails between posts / overall depth |
| H_FP / H_RP | 1390 / 1580 | front / rear post lengths (already cut) |
| **BOX** | **1390** | the level plane of ALL wall-top rails: FH top, SR3/SR4 top, RR2 top |
| CLR | 150 | ventilation line (RR1/SR1/SR2 bottom edges; FT top face; cladding datum) |
| RISE / RUN / SLOPE | 190 / 850 / 870.9 ≈ 871 | roof rise = 1580−1390 = 1630−1440; pitch atan(190/850) = **12.6°** (> Onduline 10° min) |
| Roof bearings | (z 0–50, y 1390) → (z 900–950, y 1580) | FH top face → rear post tops |
| Roof frame tops | 1440 → 1630 | flat members +50 above each bearing; sheets bear on these tops |
| Sheets | 760×1000, 8 corr @ 95 | side lap 1 corr = 95; boundaries −75…685 / 590…1350 / 1255…2015 / strip 1920…2205 |
| Roof envelope | 2174 wall faces; sheets cover 2280 | eaves ≈ 53/side; down-slope overhang ≈ 16/end (recompute exactly at build) |
| Cladding | 25 lap / 100 exposure | sides: 14 courses from 150 + raked course · rear: 14 courses from 145, laps eased to land on 1580 · doors: 12 courses = 1200 exactly |
| Doors | 960 × 1200, overlay | stiles 1200; rails 700 centred 250/950 from bottom; diagonal ~990 scribed |

### 3.2 Piece table (exact bands — encode verbatim in `model.js`)

**Rear elevation (x, y):**

| Piece | x | y | Notes |
|---|---|---|---|
| RP1 / RP2 | 0–75 / 2055–2130 | 0–1580 | rear corner posts |
| RR1 | 75–2055 | 150–225 | on edge, bottom ON the 150 line |
| **RR2** | 75–2055 | **1315–1390** | on edge, **TOP on the box line** (190 below post tops) — CORRECTED (was 1505–1580) |
| **RS** | 1027.5–1102.5 | **225–1315** | cut 1150 → **scribe/trim to ~1090** in place so top beds under RR2 — CORRECTED (was 225–1375) |
| **FILL** | 1027.5–1102.5 | **1390–1580** | ~190 offcut above RR2 up to post-top plane, aligned above RS; fixed while wall is flat — CORRECTED (was 1375–1505 under old RR2) |
| RC3r | 75–2055 | 1580–1630 | flat, ends over the post tops' inner halves, between the SLs — **NOT resting on RR2** |
| SLr1 / SLr2 | 0–75 / 2055–2130 | ≈1580–1634 | rear ends of the sloped side pieces |
| Rear cladding | −29–2159 | 145 → 1580 | 14 courses, first at 145, laps eased (~102.5 avg cover); boards 2188 = 2130 + 2×29 square-cut tails (D12 — no folding) |

**Front elevation (x, y):**

| Piece | x | y |
|---|---|---|
| FP1 / FP2 | 0–75 / 2055–2130 | 0–1390 |
| FT (threshold) | 75–2055 | 75–150 (top face ON the 150 line) |
| FH (header) | 75–2055 | 1340–1390 (flat, top on box line) |
| DL1 / DL2 (linings) | 75–97 / 2033–2055 | 150–1340 (50×22, door stops) |
| RC1f | 75–2055 | 1390–1440 (flat over FH) |

**Side elevation (z, y):**

| Piece | z | y |
|---|---|---|
| FP / RP | 0–50 / 900–950 | 0–1390 / 0–1580 |
| FT / FH | 0–50 | 75–150 / 1340–1390 |
| SRb (SR1/SR2) | 50–900 | 150–225 |
| SRt (SR3/SR4) | 50–900 | 1315–1390 (top on box line) |
| RR1 / RR2 | 900–950 | 150–225 / 1315–1390 |
| RS / FILL | 900–950 | 225–1315 / 1390–1580 |
| SLp | polygon on slope | deck(s), s −49.5…920.5, flat (50 slope-normal) |
| RCp1 / RCp2 / RCp3 | polygons at bearings | front (over FH) / mid (z ≈ 450–500) / rear (over post tops) |
| Side cladding | 0–950 | 150 → ~1550 + raked course 14 chasing the slope |

**Plan (x, z) — front drawn at the BOTTOM of the canvas:** SL1 x 0–75 · SL2 x 2055–2130 (both z ≈ 2–950) · RC1 z 0–50 · RC2 z 450–500 · RC3 z 900–950 (all x 75–2055) · posts at corners · FT z 0–50.

**Door (per door, face up):** DS stiles x 0–50 and 910–960, y 0–1200 · DR rails x 130–830 at y 225–275 and 925–975 · DIAG ~990 bottom-hinge→top-lock, mirrored on door 2 · BOARDS 12 courses y 0–1200, bottom-up, 25/100.

### 3.3 Invariants (assert in `model.js`, surface as visible chips on `qa.html`)

1. **Box line:** `FH.top == SR3.top == SR4.top == RR2.top == 1390`
2. **Rear mid-wall vertical is contiguous:** 225 → (RS) → 1315 → (RR2) → 1390 → (FILL) → 1580 == rear post-top plane. Zero gaps, zero overlaps.
3. Rise consistency: `1580 − 1390 == 1630 − 1440 == 190`; SLOPE = √(850²+190²) ≈ 871.
4. Lap chain: 685 → 1350 → 2015 → 2205; `(2280 − 2174)/2 == 53`.
5. Courses: sides 14×100 from 150; rear 14 from 145 landing 1580; doors 12×100 = 1200 = stile length.
6. 150-line users: RR1/SR1/SR2 bottom = 150; FT top = 150; side cladding datum 150; rear datum 145.
7. RS as-fit = 1315 − 225 = 1090 (from the 1150 cut; 60 trim). FILL = 1580 − 1390 = 190 (cut from the ~225 offcuts of sticks S3/S4).
8. Posts-only bearing: only 4 posts + threshold mid-span block touch pads.

### 3.4 Heights summary everyone checks

2130 wide · 950 deep · box line 1390 · rear post tops 1580 · roof frame tops 1440→1630 · 150 open strip under every wall.

### 3.5 What NOT to import (stale v2.2-doc claims — do not "fix" toward these)

`v2-2026-09-17/01,06,10,11,12` and `visuals-2026-09-24/HANDOVER.md` carry a superseded frame: rear total 1655 / front 1440 via RR2-on-posts + FH-on-posts, rise 215 / 14.2° / slope 877, mid side rails at ~800, RCs on edge at s 219/438/657, SLs inset x 25–75, rear cladding 15 courses, 2080 sheet measure. **None of it applies.** Those files remain useful for: stick→piece cut mapping, purchase/fixings data, technique prose (pilots, toe-screwing, braces, crest nailing), scheduling. The geometry in §3 is the only truth.

---

## 4. Corrections vs the v1 guide (the delta this build must land)

| # | Where (v1) | Was | Now |
|---|---|---|---|
| C1 | rear & side GEOM RR2 | 1505–1580, "top flush with post tops" | **1315–1390, top on box line 1390**, 190 below post tops; set by measuring down 190 from post tops |
| C2 | rear & side GEOM RS | tops ~1375 (1150 on RR1), gap above open | top beds **under RR2 at 1315**; step teaches scribe + trim 1150→~1090 |
| C3 | FILL (old step 16) | ~130 filling 1375–1505 under RR2, scribed after standing | **~190 filling 1390–1580 above RR2**, deterministic length, fixed while wall is flat; source: S3/S4 ~225 offcut |
| C4 | build order | RR1 → RR2 → RS → (stand) → FILL | RR1 → **RR2 → RS (fit to RR2) → FILL** all flat; wall stands complete |
| C5 | step 21 text | "RC3 lying directly ON TOP of RR2 — rail on rail, full contact" | RC3 lies on the **rear post tops**, ends between the SLs; mid-wall beneath it is the FILL offcut |
| C6 | side elevation ground zone (`pads` extra) | ground line + 2 ghost pads + big ghost dashed threshold block + braces | redrawn: ground line with 45° hatch below, pads as solid blocks, threshold block solid + bedding dim, braces in distinct tagged style (§6.2) |
| C7 | `line150`/`line150r` extras | bare dark-orange dash | styled **datum**: fine dash + level-marker glyph + "150" label; never unlabeled colour |
| C8 | homepage prose | "wall tops flat planes: 1390 front, 1580 rear" | "box line 1390 on all four walls; rear posts rise 190 more to carry the roof" |
| C9 | homepage parts table | RR2 "top edge flush with post tops"; RS plain 1150 | RR2 "top on the box line"; RS "1150 → trim ~1090 to bed under RR2"; FILL "~190, above RR2" |
| C10 | plan/side z flip | plan z opposite to side z | one z axis; flip only at plan draw time |

Everything else in the v1 engine is confirmed correct and carries over: rise 190 constants, deck(s) maths, SL/RC flat orientation, sheet layout + nailing rows (SL1, RC1, RC2, RC3, SL2), cladding courses/courses' counts (sides 14, rear 14 eased, doors 12), door frame layout, lining positions, screw/pilot guidance, brace discipline.

---

## 5. Architecture & files

Zero dependencies, no build step, works offline from `file://` on a phone.

```
2026-09-25-v2-guide/
  00-PLAN.md                 ← this document
  index.html                 cover: title block, 3 corrected elevations, lead, parts table link
  parts.html                 IKEA page-1 parts sheet (NEW)
  tools.html                 tools + consumables + golden rules (NEW)
  phase00.html … phase10.html   11 phase dividers (NEW)
  step01.html … step41.html     41 steps (regenerated stubs, same 9-line pattern as v1)
  qa.html                    dev harness: renders every view + invariant chips (NEW, unlinked)
  shared/
    model.js                 constants, piece table, derived views, asserts   (NEW)
    draw.js                  IKEA drawing system (replaces shed.js)
    ui.js                    boot(), page shell, nav, contents overlay        (absorbs shed.js boot)
    steps-data.js            declarative step/phase/page content (rewritten)
    guide.css                IKEA mobile shell (rewritten)
```

**Module contracts:**

- `model.js` — `M` object: `M.C` (constants), `M.pieces` (named bands/polygons per view, ALL derived or verified against §3.2), `M.view(kind)` returns ready-to-draw piece lists for the canonical projections (front, side, rear, top/plan, plus face/edge/plan for flat-built work), `M.checks[]` runs §3.3 and returns pass/fail strings. No DOM. **2D only — the model stores bands/polygons per projection, never 3D meshes.**
- `draw.js` — canvas2d helpers: `grid()` (§6.3), `piece()`, `dimH/dimV()` (extension lines + arrowheads), `datum()`, `ground()`, `pad()`, `brace()`, `screws(n)`, `callout()`, `inset()`, `glyph()` (end-view orientation), `picto()` (tools/warnings), `chip()` (×N), `courseLines()`. Pure functions, no page knowledge. Every view transform is **uniform-scale** (one mm→px factor for both axes).
- `ui.js` — `boot(STEP, prev, next, meta)` renders the page shell per §7; `divider(PHASE)`; validation of steps-data against model (v1's `validate()` idea, extended to invariants).
- `steps-data.js` — `PAGES`, `PHASES`, `STEPS`, `ORDER`; declarative: per step `panels[]` (each = view + overlays + insets), `actions[]` (≤4 short lines), `pieces[]` (code, cut, orientation, position), `warnings[]`, `checks[]`.

---

## 6. IKEA design system

### 6.1 Palette & strokes

| Role | Spec |
|---|---|
| paper | `#ffffff`, page bg `#f4f3f0` (warm light grey), cards pure white |
| ink | `#16161a` — all line-art, text, numerals |
| built/context | fill `#ececec`, stroke `#8f8f96`, 1.1 px |
| **new this step** | fill `#fff` + accent halo `rgba(accent,.18)` 3 px outer, stroke ink **2.2 px** — the only accent use on canvases |
| accent | amber `#F2A900` family (exact hex fixed in draw.js; used ONLY for the new piece + small emphasis) |
| warnings | red `#C8341C`, triangle pictos, never for data lines |
| checks | green `#1E7B34` ticks only |
| ghost/next | dashed `#9a9a9a`, no fill |
| sheets | translucent ink-grey fill + corrugation lines (green tint retired) |

Type: system stack; step numerals 28–34 px; labels 10 px caps min; body 13.5 px min. Text on canvas always horizontal or 90°, never along slopes except the rake callout.

### 6.2 Components (each a draw.js function)

1. **Dimension** — extension lines offset from geometry, thin dimension line, filled arrowheads both ends, value centred above the line. Verticals mirror.
2. **Datum line** — long-dash 1 px ink; at each end a level-marker glyph (▽ + value); label "150 LINE". Replaces every bare coloured dash.
3. **Ground** — single 2 px line at y=0 + 45° hatch ticks below (8 px, every ~14 px) fading out; soil never drawn as blocks.
4. **Pads** — solid `#d9d9d9` blocks with ink outline under posts; threshold mid-span block solid + cross-hatch + bedding dimension (top = 75 above corner pads' tops, i.e. threshold underside).
5. **Brace (temporary)** — thin double-stroke diagonal + "TEMP" tag chip; when a step removes them: dashed + ✕ chip + green tick note.
6. **Callout** — 18 px ink circle, white fill, bold 11 px numeral; used to number joints/actions referenced by the action lines (IKEA's ①②③ pattern).
7. **Screws** — 4 px ink dot with 1 px ring; pair = "×2" chip; pilot-note picto (drill + 3mm) where near ends. Count chips must match the step's screw budget.
8. **Orientation glyph** — end-view cross-section 24 px max beside each new piece row: shows which face is up; caption "50 up — on edge, 75 tall" style. (Carried from v1, restyled.)
9. **Detail inset** — dashed circle on the source view + two connector lines to a bordered panel at 1.6–2× zoom; mandatory for: toe-screwing RS, RR2 set-down from post tops, SL wedge over rear post top, SL inner-face flush (plan), lap valley-over-ridge, crest nailing, corner tail detail (square-cut, never folded), door layering stack.
10. **Tool pictos** — 24 px line icons: drill, pilot bit, saw, level, tape, square, clamp, hammer, brush+sealer, marker, pencil, helper (2-person). Shown as a row on steps that need them; also grouped on tools.html.
11. **Warning pictos** — triangle + glyph: split-risk (pilot first), end-grain sealer, wind/brace, heavy/two-person, ladder care. Max one per step; red only here.
12. **Quantity chip** — "×4" pill next to pieces and hardware.
13. **Check boxes** — square outline, green tick when printed and done; 1–3 per step, phrased as measurable ("top edge reads 1390 at both ends").
14. **CAD grid** — background grid on every canvas: minor lines every **100 mm**, major every **500 mm** (minor `#ececec` ~0.6 px, major `#dcdcdc` ~0.9 px, drawn under everything); corner caption `GRID 100 mm`; axes labelled x/y (elevations) or x/z (plan) with origin tick at 0. The grid is the visual proof of true proportion — 100 mm must measure the same on both axes of every view.

### 6.3 Grid, scale & the per-step view triptych

- **Uniform scale, always.** Each view's transform uses ONE mm→px factor for both axes (`s = min(fitW, fitH)`), letterboxing rather than stretching. Squares stay square: a 75×50 post renders 75:50 on screen, the roof's 12.6° reads as 12.6°. `draw.js` exposes the per-view scale; `qa.html` asserts axis-scale equality per canvas.
- **Grid** per §6.2-14 on every view, inset panels included (insets may use a finer minor line, e.g. 50 mm, captioned).
- **Triptych rule (D11):** every step page renders THREE stacked, consistently-ordered 2D views, each on its own gridded canvas, the new piece highlighted in ALL three:
  - **Standing-box steps:** V1 = primary elevation for the step (front / side / rear as appropriate), V2 = the elevation 90° away (V1's perpendicular check), V3 = **TOP** (plan, doors at bottom).
  - **Flat-built wall steps (rear 02–07, front 08–11):** V1 = **FRONT/face view** (the wall as it lies face-up), V2 = **SIDE/end section** (looking along the wall — this is where on-edge vs flat orientation is visible), V3 = **TOP/plan** (looking down at the layout).
  - **Door steps (36–40):** V1 = face view, V2 = edge section (the layered 22/44/66 stack end-on), V3 = plan of the layer being placed.
  - **Base step (01):** V1 = side at ground, V2 = front at ground, V3 = plan of the 5-pad layout.
- Views share one subject and one step; V1 is the largest canvas, V2/V3 slightly smaller but same grid density. Labels above each canvas: `FRONT`, `SIDE`, `TOP` (flat work: `FACE`, `SECTION`, `PLAN`) + subject caption ("wall lying face up").
- Detail insets (§6.2-9) are supplements to the triptych, never substitutes.

### 6.4 Canvas rules

- Width = `min(viewport − 24, 440)`; DPR-scaled for sharpness; each panel gets its own canvas with its own auto-computed bounds (padding 16) from the model — no hand-tuned `bnd` arrays.
- Min stroke 1 px, min text 10 px; nothing important within 12 px of canvas edge.
- Every view labels its direction ("REAR ELEVATION — looking at the tall end", "PLAN — doors at bottom").
- New-piece highlight only on the step's focus piece(s); everything else context-grey. Previous step's piece loses highlight (v1 did this — keep).

---

## 7. Mobile shell & navigation

- Sticky top bar (40 px): `PHASE 3 · STAND THE BOX` left, `12/41` right, thin progress underline (static, per-page).
- Sticky bottom bar (48 px+safe-area): ◀ PREV · ☰ CONTENTS · NEXT ▶ — thumb targets, always reachable.
- Step body order: triptych views (V1 → V2 → V3, §6.3) → insets → actions → warnings → checks.
- Contents = full-screen overlay: phases with their steps, current highlighted; also reachable from index.
- No swipe, no localStorage (D8) — static files, bookmark any step.
- Page order: index → parts → tools → phase00 → steps… phase divider precedes each phase's first step; dividers are also in the contents list.
- Safe-area padding; portrait-first; canvases recompute on resize/rotate.

---

## 8. Page inventory

### 8.1 `index.html` — cover
Title block (project, "read parts + tools first"), the corrected **4-view multi-view sheet on the CAD grid — FRONT · SIDE · REAR · TOP** (rear shows the true stack: RR1 → RS → RR2@1390 → FILL → post top → RC3; dims 2130 / 1580 / 1390 / 150), 5-line lead (sequence + the 4 ideas: box line, 150 strip, all-flat roof, posts-only bearing), links into parts/tools/phase00. All views uniform-scale on the shared grid.

### 8.2 `parts.html` — parts sheet (IKEA page 1)
Every piece drawn to scale, grouped by subsystem, each with code, ×qty, cut length, orientation glyph:
- **Frame 75×50 (18 + 4 blocks):** per stick mapping (S1→RR1+RP1 … S8→SR1–4) with offcuts noted; **RS: "cut 1150 — trim to ~1090 at step 06"**; **FILL: "~190 — cut from S3/S4 ~225 offcut"**; blocks 140 ×4.
- **Battens 50×22:** DL1/DL2 1200; DS 1200×4; DR 700×4; DIAG ~990 ×2 scribed; B3 remainder kept whole.
- **Boards:** rear 2188 ×15 (+1 spare); sides 944–950 ×28 (+2 spare); doors 960 ×24.
- **Sheets:** 3 full + strip diagram (cut the 4th along a valley → 285 strip + spare).
- **Fixings/consumables:** 5.0×80 ×100 (budget ~64 frame day), 4.0×45 / 4.0×65 door screws, ring-shanks, ~90–105 Onduline 65 mm, sealer.

### 8.3 `tools.html` — tools + golden rules
Tool row (pictos §6.2-10) with one-line purposes; consumables; the 4 golden rules as icon panels: ① 3 mm pilot near every end ② 2 screws minimum per joint ③ diagonals equal before rigid ④ braces stay until boards. Plus the pad/base spec summary (5 pads, level ±5, threshold block bedded to +75).

### 8.4 Phase dividers `phase00…phase10`
Big number, phase title, **2D multi-view mini sheet of the phase's assembly on the CAD grid** (front + side + top projections of the pieces this phase adds — flat orthographic only, no axonometric/exploded 3D per D10), "what you'll handle" strip, time + helper note. List:

| # | Phase | Steps | Notes |
|---|---|---|---|
| 00 | The base | 01 | 5 pads + threshold block |
| 01 | Rear wall, flat | 02–07 | RP1 RP2 RR1 RR2 RS FILL |
| 02 | Front wall, flat | 08–11 | FP1 FP2 FT FH |
| 03 | Stand the box | 12–13 | braces before hands-off |
| 04 | Side rails | 14–17 | SR1–SR4, box line |
| 05 | Roof frame | 18–22 | SL1 SL2 RC1 RC2 RC3, all flat |
| 06 | Door linings | 23–24 | + photo-the-frame checkpoint |
| 07 | Roof sheets | 25–29 | dry-lay set, then nail |
| 08 | Side cladding | 30–32 | left wall, then mirror |
| 09 | Rear cladding | 33–35 | square-cut tails (no folding), braces off, weatherproof |
| 10 | Doors + finish | 36–41 | built flat, never hung here |

### 8.5 Steps 01–41 (each: shell per §7 · **triptych front/side/top per §6.3** · panels per §6)

Every step renders V1 + V2 + TOP regardless of the primary view below — the table names only the **primary (V1)**; the other two follow the §6.3 mapping (flat-built work uses FACE/SECTION/PLAN labelling).

| # | Piece/Action | V1 primary | Required insets/notes |
|---|---|---|---|
| 01 | 5 pads + threshold block | side at ground | bedding dim (+75 gauge trick), level ±5 |
| 02 | RP1 | rear, face up | straight-edge discipline, labelling face |
| 03 | RP2 | rear, face up | 150 marks on both posts |
| 04 | RR1 | rear, face up | bottom ON 150 line; diagonals before screws |
| 05 | RR2 | rear, face up | **measure down 190 from post tops → top on box line 1390**; on edge |
| 06 | RS | rear, face up | **scribe & trim 1150→~1090** to bed under RR2; toe-screw inset |
| 07 | FILL ~190 | rear, face up | above RR2 → post-top plane; seal ends; wall now complete-flat |
| 08–09 | FP1 FP2 | front, face up | marks for FT |
| 10 | FT | front, face up | top face = 150 line |
| 11 | FH | front, face up | flat, top on box line; door opening 150→1340 |
| 12 | Stand rear wall | side standing | braces picto/wind warning; new ground system |
| 13 | Stand front wall | side standing | 850 both sides; square/plumb checks |
| 14–15 | SR1 SR2 | side | bottom on 150 line |
| 16–17 | SR3 SR4 | side | **top on box line 1390**; level with FH/RR2 |
| 18–19 | SL1 SL2 | plan + rear-corner zoom | flat on slope; inner face at x=75 (1980 world); **wedge over rear post top** inset; front-end shave note |
| 20 | RC1 | plan | flat over FH; dry-fit check |
| 21 | RC2 | plan | mid-slope, bridges |
| 22 | RC3 | plan + rear elevation | **on post tops, not RR2**; FILL behind at mid-wall; sight-down check |
| 23–24 | DL1 DL2 | front | plumb; measure real opening; frame photo checkpoint |
| 25–28 | sheets 1–3 + strip | plan | SW first; 95 = one corrugation; valley-over-ridge inset; strip under-laps; NO nails yet |
| 29 | Nail down | plan + crest inset | crests only; 5 rows; washer just seats; count ~90–105 |
| 30 | side course 1 | side | bottom on 150; thick edge down; ventilation warning |
| 31 | courses 2–13 | side | level every 2–3; one wall at a time (bracing note) |
| 32 | course 14 rake | side | scribe to slope; mirror right wall |
| 33 | rear course 1 + corner tails | rear | 145 start; square-cut-tail inset — NEVER fold |
| 34 | courses 2–14 | rear | eased laps to land 1580; level checks |
| 35 | corners + braces OFF | rear | weatherproof gate; rack test |
| 36 | door stiles + 960 spacers | door | width via spacer blocks |
| 37 | rails over stiles | door | layer 2, centred 250/950 |
| 38 | diagonal | door | bottom-hinge → top-lock inset; compression direction |
| 39 | boards ×12 | door | bottom-up; nails not screws (security note) |
| 40 | door 2 mirrored | door | mirrored diagonal; hinge-side labels |
| 41 | the finished box | all 3 elevations | final check list: 1390 box, 1580 rear, 150 strip open, roof rows, seals |

Screw budgets carried/adjusted from v1 + docs (~64 frame-day screws; door screws 4.0×45/65; nails 2 per crossing).

---

## 9. Work packages (build order)

| WP | Deliverable | Verify |
|---|---|---|
| 1 | `model.js` full piece table + all projections (front/side/rear/top + face/section/plan) + asserts | qa harness prints all invariants green |
| 2 | `draw.js` full component set (incl. `grid()`, uniform-scale transforms) + `qa.html` | render sample views incl. new ground/pads/datum on grid; screenshot check |
| 3 | `guide.css` + `ui.js` shell (top/bottom bars, contents overlay) | stub page at 390×844 |
| 4 | `index.html` + `parts.html` + `tools.html` | screenshots; number audit vs §3 |
| 5 | 11 phase dividers | screenshots |
| 6 | steps 01–07 (base + rear wall, NEW sequence) | regression: rear stack bands exact |
| 7 | steps 08–13 (front wall, standing) | ground zone visual check |
| 8 | steps 14–24 (rails, roof frame, linings) | RC3/FILL relationship correct; wedge inset |
| 9 | steps 25–35 (sheets + cladding) | lap chain; course counts |
| 10 | steps 36–41 (doors, finish) | layering insets |
| 11 | full QA sweep (§10) + polish pass | ship |

---

## 10. QA plan

1. **qa.html gate:** every steps-data reference resolves in model; all §3.3 invariants green; **every step page exposes exactly 3 views (D11)**; **per-canvas scale assert: X-scale == Y-scale (aspect true) and grid spacing in px == round(s × 100)**; zero-error rule like v1's `__ok`.
2. **Visual sweep:** screenshot every page at 390×844 (and one pass at 320 for small phones); check: no callout collisions, no text < 10 px, insets legible, ground zones clean, grid visible but quiet on every canvas, no 3D/axon drawing anywhere (D10).
3. **Number audit:** every dimension string rendered on canvases traced to a model constant (spot list: 2130, 950, 1390, 1580, 150, 145, 190, 871, 12.6°, 95, 53, 2188, 29, 960, 1200, 1090, 190-FILL, 850).
4. **Complaint regression (the user's three):** homepage rear elevation shows RR2 at 1315–1390 with the ~190 offcut above it reaching the post-top plane; side elevation bottom shows ONLY hatched ground + solid pads + labelled datum; no unexplained coloured lines anywhere.
5. **Dry-run read:** open steps 05–07 and 18–22 cold; each must be followable from panels alone (IKEA test).

## 11. Out of scope / future

- **Any 3D rendering** — axonometric, perspective, exploded 3D, isometric (explicitly declined, D10). Multi-view 2D projections only.
- Door hanging, ironmongery, hinges/hasp (deliberately deferred to the doors track — unchanged from v1).
- PWA/offline manifest, swipe, progress persistence (explicitly declined, D8).
- PDF export of the new guide (old PDFs untouched).
- If measured timber (68–73 × 45–48 actual) matters later: nominal drawn, note on parts page only.

## 12. Source hierarchy (if anything conflicts)

1. This document §3 (geometry truth + corrections)
2. User decision log §2
3. v1 `guide/shared/steps-data.js` (technique content to port)
4. `v2-2026-09-17/09–12` prose (technique, scheduling, warnings — not geometry)
5. `visuals-2026-09-24/HANDOVER.md` (cuts/sticks/purchases — not geometry)
