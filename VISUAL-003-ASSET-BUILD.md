# MAKYREN VISUAL-003 — Real Asset Street Prototype

## Locked visual target
Realistic third-person urban action-game presentation. No LEGO, voxel, toy, block-person, or intentionally low-poly aesthetic.

## Asset strategy — $0
Use only assets whose licenses permit the intended use. Preferred sources:
- Poly Haven: CC0 models, PBR materials, HDRIs
- Khronos glTF sample assets: use only assets with compatible licenses
- Kenney: CC0 assets where appropriate for secondary props

## Production scene
One polished street segment before city expansion:
- Hero character: Ma'Kyren, realistic human proportions and believable skin/hair/clothing silhouette
- One realistic vehicle
- Commercial building frontage
- Sidewalk, curb, asphalt and lane markings
- Streetlights, signs, trash cans, utility details, vegetation and parked vehicles
- PBR material stack: base color, normal, roughness, AO where available
- Baked/static lighting where practical
- LOD tiers for mobile
- Instancing for repeated props

## Renderer requirements
- WebGL 2 where available; WebGL 1 fallback only for diagnostics
- Local engine/assets for production preview; no runtime dependency on third-party CDN
- Adaptive resolution and capped pixel ratio
- Frustum culling and distance-based LOD
- Compressed textures when practical

## Acceptance test
The preview must visibly contain textured, non-block geometry before the next gameplay ticket. If the scene looks like colored cubes, the visual milestone fails.
