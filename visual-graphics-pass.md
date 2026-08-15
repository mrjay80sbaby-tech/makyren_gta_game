# Visual Graphics Pass

This pass targets the highest-impact improvements that are feasible in the free browser stack. Visual-004 now uses ACES tone mapping, increased contrast and exposure, tiered camera distance, denser distance fog, a blue-hour/night opening state, directional street-lamp spotlights, high-tier sun shadow generation, road and sidewalk shadow receivers, a more responsive asphalt material, and a smoother emissive glow kernel.

The high tier enables the shadow map and the closer camera; medium keeps the cinematic materials without the shadow cost; mobile keeps the lighter quality path. Procedural facades and geometry remain fallbacks for future optimized CC0 GLB/PBR imports.
