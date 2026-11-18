# MAKYREN-197 — Traffic Cars Are Real Kenney GLBs + Mobile Lamp LOD

- Add four Kenney Car Kit 3.1 traffic GLBs (CC0): `traffic/sedan.glb`, `hatchback-sports.glb`, `taxi.glb`, `police.glb` (172–197 KB each, ~2,100 tris). Each references the shared `Textures/colormap.png`; a copy is placed in `traffic/Textures/` because Babylon resolves that URI relative to each GLB's own folder.
- New `loadTrafficVehicles()` in `src/main.js` reuses the proven hero-vehicle loader pattern: `MakyrenLoadAsset` with `autoAdd:false`, GLB parented to the procedural traffic box (the movement/collision proxy), box hidden on success, GLB rotated to its lane direction, scale 1.3. Procedural box stays as fallback if a GLB fails. Mobile keeps 2 traffic cars.
- Mobile tier now loads the decimated lamp LOD `street_lamp_01_mobile.glb` (674 KB, 7,820 tris, down from 6.9 MB / 30,610 tris) via a new `streetLampMobile` slot; high/medium keep the full lamp.
- Asset slots added to `window.MakyrenAssetSlots` (`trafficSedan`, `trafficHatchback`, `trafficTaxi`, `trafficPolice`, `streetLampMobile`); smoke check asserts `loadTrafficVehicles` and `streetLampMobile`.
- Full intake record (sources, licenses, sizes, tri counts) in `visual-004/ASSET-INTAKE-V1.md`.
- Verification: `node --check` + `npm run build` + smoke check pass; headless Chromium (SwiftShader, `?quality=mobile&debug=1`) reports `MakyrenTrafficVehicles {loaded:true, count:2}`, `MakyrenRealisticStreetLamps {loaded:true, count:6}`, hero loaded; screenshot confirms GLB traffic cars (orange sedan, green hatchback) rendering with wheels/cabins instead of plain boxes. Real-device FPS still owed (Jay's tap).
- Next: MAKYREN-198
