# Realistic Visual Target and Asset Plan

The current procedural scene is not an acceptable final visual direction for the explicit realistic requirement. The replacement target is a small, authored, realistic vertical slice: one street intersection with real PBR road and facade materials, realistic building and storefront proportions, a detailed vehicle, a human-scale character, physically plausible street lamps, decals, and restrained post-processing. Procedural geometry is allowed only as a fallback when an optimized production asset is unavailable.

ambientCG provides PBR surfaces, HDRIs, substances, and 3D assets. Its license documentation states that downloadable assets are CC0 1.0, can be modified and distributed commercially, can be included as raw files in a video game, and do not require credit. Sources: https://ambientcg.com/ and https://docs.ambientcg.com/license/

The first realistic replacement pass should prioritize materials and hero objects rather than expanding the city. A practical order is: road/asphalt and sidewalk PBR materials; a realistic street-lamp model; one detailed vehicle; one realistic tree/planter set; one building facade or storefront kit; and one character model. Every imported asset must be resized, compressed, and tested against the mobile tier.

The browser limitation is important: the project can approach realistic presentation through optimized GLB/PBR content and Babylon lighting, but it cannot obtain literal UE5 Nanite/Lumen parity at zero cost in a lightweight browser build. The correct engineering target is a realistic, authored, optimized vertical slice rather than a large procedural city.
