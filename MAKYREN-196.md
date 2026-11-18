# MAKYREN-196 — Fix Driving Crash: `pulse` Used Before Declaration

- Found by the new Playwright mission test (MAKYREN-195): the moment the player enters the vehicle, `updateGameplay` throws `ReferenceError: pulse is not defined` on every driving frame.
- Cause: the vehicle-service-marker loop read `pulse` before its `const pulse` declaration later in the same function scope (temporal dead zone). The exception killed the render loop, so the car could never move and the mission could never complete — on any device, since the bug shipped. The old "Passed" mission claims were source-inspection only and never caught it.
- Fix: hoist `pulsePhase` / `pulse` above the service-marker loop and remove the duplicate declaration in the checkpoint block. One `const pulse` remains.
- Verification: headless Chromium (SwiftShader, `?quality=mobile&debug=1`) full mission run — enter: state `drive`; drive to checkpoint: state `complete`, car z -22.3; R replay: state `approach`, car back at z -6; no page errors. Playwright suite: 3 passed.
- Next: MAKYREN-197
