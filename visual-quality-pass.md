# Visual Quality Pass

Visual-004 now uses a CC0 Kenney Car Kit sports-sedan GLB as the hero vehicle instead of the procedural box-and-wheel assembly. The model is delivered at `visual-004/public/assets/hero_vehicle.glb` with its shared 512px `Textures/colormap.png` dependency. The gameplay vehicle remains as a hidden collision/movement proxy, while the imported GLB follows its position, heading, reset state, and world bounds. If the GLB fails to load, the original procedural vehicle remains available as a fallback.

The urban scene now builds a reusable kit around each randomized building. Taller buildings receive multiple balcony modules with slabs, rails, and posts. Selected building faces receive emissive color signage. Street edges receive bins, lids, bollards, and delivery crates, while rooftop mechanical units provide additional silhouette detail. This kit is generated deterministically from the existing city seed, so layouts remain reproducible while no longer appearing as identical rows of boxes.

Lighting is composed as a three-part setup: a directional daylight source, a warm hero key spotlight, and a cool blue city-rim light. The street lamps and vehicle headlights continue to respond to the night cycle. A Babylon `DefaultRenderingPipeline` now provides FXAA and quality-tiered bloom. ACES tone mapping, exposure, contrast, and blue-hour color curves are tuned together so emissive windows and lamps bloom without washing out the asphalt, facade texture, or hero-car silhouette.

| Area | Implementation | Fallback / mobile behavior |
|---|---|---|
| Hero vehicle | Kenney `sedan-sports.glb`, CC0, shared 512px colormap | Procedural vehicle proxy remains available; mobile keeps reduced post-processing |
| Building kit | Balconies, rails, rooftop units, facade windows, emissive signs | Balcony density and windows are reduced on mobile |
| Street clutter | Bins, lids, bollards, delivery crates, benches, utility poles | Core clutter remains lightweight primitive geometry |
| Lighting | Sun, warm hero key, cool city rim, street lamps, headlights | Lower intensity and no high-resolution shadows on mobile |
| Post-processing | FXAA, bloom, ACES, exposure/contrast, ColorCurves | Bloom disabled on mobile; lower samples and kernel on medium |

The hero-car source is [Kenney’s Car Kit](https://kenney.nl/assets/car-kit), which is listed as Creative Commons CC0. The street-lamp and PBR surface sources remain documented in the existing asset integration records.

## Animation and reflection extension

The character now exposes `window.MakyrenCharacterAnimator` with `idle`, `walk`, and `sprint` states. Separate limb meshes are driven by a deterministic phase-based gait and breathing cycle, so an imported skeleton animation can replace the procedural layer without changing gameplay input. The current build retains the procedural fallback because no compatible CC0 animated character GLB was available in the existing asset set.

The renderer now includes Babylon’s SSR pipeline as an opt-in high-tier path at `?ssr=1`, using downsampled reflections, a bounded 32-step ray budget, and a guard that disables SSR below 24 FPS. The default high-quality URL leaves SSR off for playability. A custom wet-road shader was prototyped and rejected after visual verification exposed a blank-frame regression; it was removed before release.

The available free vehicle remains the CC0 Kenney sports sedan, now augmented with PBR trim, clear-coat metal, lenses, mirrors, and beltline detail. A genuinely photorealistic CC0 replacement could not be legally staged from the inspected public sources: the promising Sketchfab concept-car page identifies the model as public-domain but exposes no unauthenticated downloadable archive, while the accessible BMW repository uses CC BY 4.0 rather than the project’s stricter CC0-only policy.
