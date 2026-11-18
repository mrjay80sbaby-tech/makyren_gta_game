# MAKYREN-198 — Concrete Sidewalk + Real Trees

- Sidewalk gets the ambientCG Concrete 012 1K PBR set (CC0): `materials/concrete/{color,normal,roughness}.jpg`, applied on high/medium tiers exactly like the asphalt (albedo color set to white so the texture reads true). No AO map is offered for this set.
- Trees: Kenney Nature Kit low-poly tree GLB (CC0, 62 tris, 5,968 B) replaces the procedural trunk + sphere crowns at all six planter spots, scale 2.5. New `loadRealisticTrees()` follows the lamp pattern (load once, clone per spot, hide procedural trees on success). Non-mobile only, like the planters.
- Smoke check asserts `loadRealisticTrees` and `concrete/color.jpg`.
- Verification: `node --check` + `npm run build` + smoke check pass; headless Chromium (`?quality=medium&debug=1`) reports `MakyrenRealisticTrees {loaded:true, count:6}`; screenshots show the city at night with lit windows, GLB traffic, and lamps (trees are subtle in the dark scene but the load flag + clone count are confirmed).
- Next: MAKYREN-199
