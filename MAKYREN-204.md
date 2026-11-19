# MAKYREN-204 — Steering feel: tame the turn, bring the camera in

## Jay's report (2026-11-19 ~00:25 EST, after 203 went live)
"Left n right still ain't steering it's just moving the camera."

## Diagnosis — the steering code worked; the view lied
- Live site was serving the 203 build (chunk `index-DQn6zKIH.js` matched local).
- A real touch-hold probe (CDP touchStart on the ▶ D-pad button + W, 2.5s, phone viewport)
  proved the touch D-pad steers: heading PI → -0.22 (a 192° spin), x +5.8. No page errors.
- The problem was feel, not function:
  1. Turn rate 2.1 rad/s was far too twitchy: a 2.5s hold spun the car ~192° and the chase
     camera whipped around to follow — all the player perceived was the camera moving.
  2. The chase camera was too far away (radius 26 on mobile, narrow portrait FOV): in a
     straight-drive probe the car was a tiny red dot and the frame was mostly empty road,
     so a turn read as the world sliding past a dot, not as the car turning.

## Fix
- `visual-004/src/main.js`
  - Steering: max rate 2.1 → 1.15 rad/s, speed-sensitive (scales with |carSpeed|/11,
    0.35x at standstill), input smoothing (`steerSmooth` lerps at dt*5) so the binary
    touch button doesn't snap the heading.
  - Chase camera: driving lerp 2.2/s → 1.1/s, so the camera trails the turn and the car's
    nose visibly swings instead of the view whipping.
  - Mobile camera radius 26 → 16, and portrait screens get FOV 1.05 (was 0.8), so the
    car fills the frame and the street sides stay visible while turning.
- `visual-004/index.html` — HUD now shows the build version (`v204 • ...`) so the next
  screenshot proves which build the phone is running (rules out stale cache).
- `visual-004/tests/visual-004.spec.js` — steering test now bounds the turn as controlled
  (heading delta between -4.0 and -0.25 rad over a 2.5s hold). Bounds are loose on purpose:
  headless FPS varies (2-7) and dt clamps at 0.1s, so game time runs slower than real time
  at low FPS — the same hold turns ~0.4 rad at 2 FPS and ~2.2 rad at 7 FPS. The turn rate
  itself was measured directly in the touch probe.

## Verification (sandbox)
- `npm run build` passed.
- Touch probe (phone viewport, real touch hold on ▶ + W, 2.5s): heading delta -2.23 rad
  (~128°), x +7.4, z -17.5 — a controlled steering arc, no page errors. Screenshot shows
  the red car big in frame, visibly angled across the road.
- Playwright: **5 passed** (full suite, 4.0m), including the steering test and the
  street-expansion test.

## Status
- Awaiting Jay's A35 retest. If the HUD does not say v204, close the tab fully and reopen
  the link — the browser may be holding the old page.
