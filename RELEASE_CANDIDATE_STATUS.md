# Ma'Kyren Release-Candidate Status

Last updated: 2026-11-18 (v1 build, commits MAKYREN-194 through MAKYREN-201).
Live site: https://mrjay80sbaby-tech.github.io/makyren_gta_game/ (GitHub Pages, serves `visual-004/dist`).

## What v1 is

Visual-004 is a playable vertical slice: one street block (x ±8.2, z ±34), walk/drive, one mission
(`first_block`: approach → E enter vehicle → drive to checkpoint z=-22 → complete), R replay,
localStorage persistence, vehicle damage + garage repair, traffic, pedestrians, traffic signals,
3 quality tiers, `?debug=1` perf HUD. Babylon.js 8.32 + Vite 7.

## Verified gates (evidence is a run, not a claim)

| Gate | Status | Evidence |
|---|---|---|
| JS syntax | Passed | `node --check` on `visual-004/src/main.js`, `src/traffic_system.js`, root `game.js`, `preview.js`; `visual-004/smoke-check.mjs` passes. |
| Visual-004 production build | Passed | `npm run build` in `visual-004/` (Vite, ~21 s) run locally 2026-11-18. |
| Babylon/WebGL init | Passed | Headless Chromium reports `window.__MAKYREN_VISUAL_READY__ === true`. |
| Mission completion | Passed | Playwright headless: enter → `drive`, drive to checkpoint → `complete` (car z -22.3), R replay → `approach`. |
| Vehicle enter/exit | Passed | Same Playwright run; E/R touch buttons also verified on a phone viewport with iPhone user agent. |
| Touch E/R buttons | Passed (headless) | Touch E and R buttons exist, 56 px, safe-area aware; mission completed by tapping them in a headless phone viewport. **Real-device tap not yet done.** |
| Real assets loaded | Passed (headless) | `MakyrenTrafficVehicles {loaded:true, count:2}`, `MakyrenRealisticStreetLamps {loaded:true, count:6}`, `MakyrenRealisticTrees {loaded:true, count:6}`, `MakyrenStorefronts {loaded:true, count:6}`, `MakyrenCharacter {loaded:true, animations:[idle,run,walk]}`. Screenshots confirm traffic GLBs, storefronts, and the rigged character rendering. |
| Playwright suite | Passed (local) | 3 tests passed in ~2.5 min headless (SwiftShader), 2026-11-18. CI job `.github/workflows/visual-004-playwright.yml` exists; **first GitHub Actions run has not happened yet** (runs on push to main). |
| Deployment | Pending | Push of MAKYREN-194..201 to main not yet done at time of writing; Pages workflow runs on push. |

## Not verified — do not claim these

- **Real-device FPS on any tier** (Galaxy A35 or iOS Safari). Headless SwiftShader FPS (1–5) is a software renderer and is not representative.
- **Real-device touch flow** on the Galaxy A35 (Android Chrome) or on iOS Safari: load → move → E enter vehicle → drive to checkpoint → R replay, plus FPS at `?quality=mobile&debug=1`.
- **iOS Safari at all.** The code has the iOS guards (WebGL2 check with a plain message, `maximum-scale=1, user-scalable=no`, `env(safe-area-inset-*)` HUD/controls, decimated lamp LOD on mobile), but no iOS device has run it.
- **CI green on HEAD.** The Pages workflow and the Playwright workflow have not run against the v1 commits yet.

## What changed in v1 (MAKYREN-194..201)

- Touch E/R buttons; iOS safe-area + WebGL2 guard; root `game.js`/`preview.js` syntax errors fixed (194).
- First real Playwright smoke test + CI job (195).
- Fixed a real driving crash found by the test: `pulse` read before declaration in `updateGameplay` — entering the vehicle killed the render loop on every device (196).
- Traffic cars are real Kenney Car Kit GLBs; mobile lamp LOD 674 KB (197).
- Concrete sidewalk (ambientCG Concrete 012) + real Kenney low-poly trees (198).
- Kenney City Kit Commercial storefront fronts on street-facing building sides (199).
- Real rigged character: Quaternius Casual male, Walk/Run/Idle mapped to the animator (200).
- Paperwork: every new asset recorded in `visual-004/asset-slots.json`; this status doc rewritten to verified facts only (201).

## Remaining production blockers

- Art: `buildings` and `props` asset slots are still empty (no GLB loaders); storefronts cover only ground-floor fronts. The hero character GLB (1.43 MB) has no decimated mobile LOD in v1.
- The root Three.js prototype is still dead (only its two syntax errors were fixed so CI passes); it is not revived and is not deployed.
- Gameplay is still one street block: no collision-aware traffic proximity, vehicle physics, pedestrian/NPC behavior, combat, additional missions, save migration/versioning, audio, or accessibility settings.
- `supabase.js:2` still commits a publishable anon key — low severity, rotate later.
- The bundle contains a large Babylon module chunk; code splitting or a stricter bundle budget is still owed before a public launch.
