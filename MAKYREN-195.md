# MAKYREN-195 — First Real Playwright Smoke Test

- Add `@playwright/test` (dev), `playwright.config.js` (Chromium, SwiftShader WebGL, `vite preview` on 127.0.0.1:4173 under the repo base path), and `tests/visual-004.spec.js` with three tests: load + ready flag, full mission (walk, enter vehicle, drive to checkpoint, replay), and touch E/R buttons on a phone viewport.
- Add `.github/workflows/visual-004-playwright.yml`: install, build, install Chromium, run the suite, upload traces on failure.
- The mission test runs at `?quality=mobile`: SwiftShader cannot compile the high-tier PBR shader set (uniform-block limit), so high-tier frames stall and input is missed. E/R keys are held 2 s so the edge latch lands even at ~2 FPS in software rendering. No FPS is asserted — headless FPS is not representative of a real phone.
- Verification: suite run locally (see MAKYREN-196 for the drive bug it caught); 3 passed after the fix.
- Next: MAKYREN-196
