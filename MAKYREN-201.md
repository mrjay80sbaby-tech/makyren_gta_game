# MAKYREN-201 — Paperwork: asset records + honest status doc

- Updated `visual-004/asset-slots.json` with every v1 asset, each with source + license + fallback:
  - `character`: Quaternius Casual male (Poly Pizza mirror, CC0), 1.43 MB, no mobile LOD in v1 (recorded as an accepted exception).
  - `streetLampMobile`: Poly Haven Street Lamp 01 decimated via glTF-Transform, 674 KB, mobile only.
  - `traffic`: 4 Kenney Car Kit 3.1 GLBs (CC0), mobile keeps 2 cars.
  - `storefronts`: 4 Kenney City Kit Commercial 2.1 pieces (CC0), non-mobile only.
  - `tree`: source corrected to Kenney Nature Kit (CC0); Poly Haven Tree Small 02 explicitly recorded as NOT shipped.
  - `materials.concrete`: ambientCG Concrete 012 (CC0), high/medium only.
  - `buildings` / `props` slots remain empty — recorded as still unfilled, not faked.
- Rewrote `RELEASE_CANDIDATE_STATUS.md` to verified facts only: gates table cites actual runs (build, smoke check, Playwright 3 passed locally headless, asset flags, screenshots); a "Not verified — do not claim these" section lists real-device FPS, real-device touch flow, iOS Safari, and CI-green-on-HEAD as still owed; v1 change list and remaining blockers included.
- Unused character candidates (Kenney protagonist GLB + skin PNG, Quaternius female GLB) moved from `visual-004/public/assets/character/` (shipped tree) to `visual-004/assets/character/` (source-only, not in `dist/`).
- Next: final verification, then push MAKYREN-194..201 to main.
