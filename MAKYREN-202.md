# MAKYREN-202 — Phone black-screen fix (2026-11-18)

## Report
Jay tap-tested v1 on his Galaxy A35: the page showed only the static
`MA'KYREN • VISUAL-004` HUD on a dark background — no 3D scene, no D-pad,
no E/R buttons.

## Findings
- Desktop renders fine; the live site serves the v1 bundle (chunk hash
  verified). No console evidence was obtainable from the phone itself:
  the cloud browser has no console/JS evaluation, and the sandbox
  browser cannot reach the live site through the egress proxy.
- The mobile preset was the prime suspect and is confirmed bad on its
  own: `windows:false` (no lit windows), glow 0.25, camera 30 (high/far),
  fog 0.014, near-black clear color — on a phone screen the night scene
  reads as plain black, and the dark-navy touch buttons blend into it.
- Second defect: `makeTouchControls()` was called at the END of setup,
  so any throw during scene setup (or a slow module load) leaves the
  phone with no buttons at all and no visible error.
- Third defect: no loading indicator and no on-screen error surface, so
  a phone failure was undiagnosable without remote debugging.

## Fix (this change)
- `makeTouchControls()` now runs right after engine creation; the
  `keyboardKeys`/`touchKeys` declarations moved up with it. Buttons exist
  even if later setup throws. Buttons brightened (#0e2a4de6).
- Mobile preset: `windows:true`, glow 0.45, camera 26, fog 0.008,
  hemispheric light 1.95 on mobile. The phone scene now shows lit
  windows, street, cars and the character (verified by screenshot at
  390x844 with touch).
- `index.html`: static "Loading Ma'Kyren…" indicator (removed when the
  scene reports ready) plus an inline error handler that prints any boot
  error in a red box on the phone itself.
- No asset, gameplay, or desktop-high behavior changed.

## Verification (sandbox)
- `npm run build` passes; smoke check passes; Playwright 3 passed
  (load → walk → E enter → drive to checkpoint → R replay; touch E/R
  on phone viewport).
- Phone-viewport probe of the local preview: ready=true, touch controls
  present and visible, canvas 390x844, 0 failed requests, screenshot
  shows lit street scene + D-pad + E/R.
- Note: headless SwiftShader logs many Babylon shader-compile fallback
  errors (uniform-buffer limits of the software renderer); Babylon falls
  back and the scene still renders. Not a device failure signal.
