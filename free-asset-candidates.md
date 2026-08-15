# Free Asset Candidates

Search results identified these candidate sources for the first verified production asset replacement:

- Poly Haven tree models: https://polyhaven.com/models/nature/trees
- Poly Haven street lamp model: https://polyhaven.com/a/street_lamp_01
- Poly Haven outdoor street-light models: https://polyhaven.com/models/lighting/street-outdoor?s=eraser
- Kenney 3D asset category, including 3D City Kit and 3D Car Kit: https://kenney.nl/assets/category:3D
- OpenGameArt City Kit Suburban, described as Kenney CC0 content: https://opengameart.org/content/city-kit-suburban

Before importing any candidate, open the individual asset page, verify its license, download only the required format/resolution, record the asset identifier and source, and provide a procedural fallback. The repository already verifies Poly Haven and Kenney’s general CC0 policies in `asset-license-verification.md`.

## Individual-page verification

The Poly Haven Street Lamp 01 page identifies the model as CC0, 31.41 MB at 4K, and 31K triangles. It is a plausible high-quality replacement for the procedural street lamp, but its 4K download is too large for direct mobile delivery; a lower-resolution export or optimized GLB should be prepared before import. Source: https://polyhaven.com/a/street_lamp_01

The Poly Haven Tree Small 02 page identifies the model as CC0 and 5M triangles at the listed 4K download size of 263.02 MB. It includes LOD metadata, but the full asset is not suitable for direct browser delivery. It should only be considered after offline decimation, texture resizing, and GLB optimization. Source: https://polyhaven.com/a/tree_small_02
