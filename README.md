# MA'KYREN — Open City

Free-to-run browser/mobile 3D open-city prototype.

## Current stack
- Three.js via CDN (no paid engine/license)
- GitHub repository + GitHub Pages-ready static build
- Existing Supabase project for persistence
- Mobile touch controls + desktop keyboard
- ACES tone mapping, shadows, fog, procedural city/vehicle generation
- Original protagonist: Ma'Kyren

## Reality check
This is designed to push visual quality as far as a $0 browser stack can reasonably go. It is **not literally UE5**: Nanite/Lumen and AAA asset pipelines require substantially more compute/content. The architecture intentionally leaves room for higher-quality GLB assets, PBR textures, baked lighting, post-processing, streaming, vehicles, missions, NPCs, and multiplayer later.

## Run
Open `index.html` through any static host. No build step is required.

## Next milestones
1. Production GLB character + animation rig
2. PBR city asset kit and LOD streaming
3. Vehicle enter/drive system
4. NPC pedestrian/traffic simulation
5. Mission system + wanted system
6. Supabase cloud saves
7. Mobile performance tiers
8. WebGPU renderer path where supported
