# MAKYREN-199 — Storefront Kit on Street-Facing Building Sides

- Four Kenney City Kit Commercial 2.1 pieces (CC0) attached at ground level on the street-facing building sides, six spots total (x ±11.2, z -18 / 6 / 30, matching the existing neon sign positions): `storefronts/building-e.glb`, `building-j.glb`, `building-k.glb`, `low-detail-building-wide-a.glb`. Each references the shared `Textures/colormap.png`; a copy is placed in `storefronts/Textures/` (same relative-URI reason as the traffic cars).
- New `loadStorefronts()` in `src/main.js`: loads each GLB once, clones per spot, rotates the front toward the road, per-piece scale (E 2.0, J/K 1.8, Wide 3.0). Non-mobile only, like the balconies and rooftop units. The 12 building boxes + facade PBR maps stay as the masses behind them; the existing neon signs stay above. A failed GLB load leaves the procedural buildings untouched.
- Honest scope note: the kit has no purpose-built flat shopfront slab — these are low-rise blocks used as shopfront annexes, not a full facade rebuild. The street is still one block, honestly so.
- Smoke check asserts `loadStorefronts`.
- Verification: `node --check` + `npm run build` + smoke check pass; headless Chromium (`?quality=medium&debug=1`) reports `MakyrenStorefronts {loaded:true, count:6}`; screenshot shows the pale shopfront block at the building base on the street side.
- Next: MAKYREN-200
