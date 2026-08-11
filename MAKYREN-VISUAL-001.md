# MAKYREN-VISUAL-001 — High-Detail Asset Pipeline

Status: foundation locked

Goal: replace primitive prototype geometry with a convincing cinematic mobile city while preserving the $0 constraint.

## Rules
- Do not restart the repository.
- Do not replace completed gameplay systems.
- Prefer local assets so the preview does not depend on CDN availability.
- Use GLB/glTF as the primary 3D asset format.
- Use PBR materials where supported.
- Use LODs and texture budgets for mobile performance.
- Separate hero assets from background assets.

## Visual tiers
1. Hero: Ma'Kyren, close vehicles, weapons, nearby buildings.
2. Midground: traffic, pedestrians, storefronts, street furniture.
3. Background: simplified buildings, skyline, terrain.

## Asset targets
- Ma'Kyren: rigged humanoid, detailed skin/hair/clothing materials.
- Vehicles: modular body/interior/wheel/light parts.
- Buildings: modular facade kits with windows, doors, signs and roof pieces.
- Environment: roads, curbs, sidewalks, vegetation, utility objects, lighting props.
- Materials: asphalt, concrete, glass, metal, painted surfaces, skin, cloth.

## Performance targets
- Mobile adaptive resolution.
- Aggressive LOD beyond hero range.
- Frustum/distance culling.
- Texture compression where available.
- Avoid unnecessary realtime lights and shadows.

## Preview gate
No further gameplay-ticket expansion until the visual preview demonstrates the new asset pipeline and materially improves over the blockout.