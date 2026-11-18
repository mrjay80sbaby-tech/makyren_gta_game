# MAKYREN-194 — Touch E/R Buttons, iOS Safe-Area + WebGL2 Guard, Root Syntax Fixes

- Add E (enter/exit vehicle, repair) and R (replay mission) touch buttons, 56 px, bottom-right, safe-area aware. E/R keys stay held ~150 ms after release so a quick tap still hits the edge latch in `updateGameplay`.
- D-pad, HUD, perf HUD, and traffic proximity HUD now respect `env(safe-area-inset-*)` (notch / Dynamic Island).
- Viewport meta gains `maximum-scale=1, user-scalable=no` so double-tap zoom cannot steal touch controls on iOS Safari.
- Engine creation failure now shows a plain WebGL2 message (iOS 15+ floor for Babylon 8) instead of a black screen.
- Fix one-character syntax errors in `game.js:6` (missing `)`) and `preview.js:86` (extra `)`) so the Pages workflow `node --check` gate passes on HEAD.
- Smoke check now asserts the new `touch-actions`, `KeyE`, `KeyR`, and `webgl-unavailable` tokens.
- Verification: `node --check` passes on `game.js`, `preview.js`, `visual-004/src/main.js`, `visual-004/src/traffic_system.js`; `npm run build` passes in 21.7 s; `node visual-004/smoke-check.mjs` passes. No real-device test yet — phone taps still owed (see v1 checklist).
- Next: MAKYREN-195
