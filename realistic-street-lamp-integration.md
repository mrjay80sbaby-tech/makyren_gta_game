# Realistic Street-Lamp Integration

The Visual-004 vertical slice now includes a verified **Street Lamp 01** model from [Poly Haven](https://polyhaven.com/a/street_lamp_01), released under the **CC0** license. The source asset is an ornate cast-iron outdoor lamp with glass panes, exposed bulb, weathered black finish, detailed base, finial, and mounting hardware.

The source GLTF was downloaded from Poly Haven’s public asset delivery endpoint at the 2K texture tier and converted to a self-contained GLB for browser delivery. The mesh contains approximately 30,610 source triangles and is authored at meter-scale dimensions of approximately 0.70 m wide by 3.87 m tall. The resulting GLB is approximately 6.9 MB and is served from `visual-004/public/assets/street_lamp_01.glb`. Existing asphalt and facade PBR maps are served from the same public asset tree.

At runtime, `MakyrenLoadAsset('streetLamp', {autoAdd:false})` imports the asset once, uses the imported root as a template, and clones it to the six street-light positions. The procedural pole and bulb remain as an automatic fallback until the imported asset finishes loading; after a successful import they are disabled. The original spotlights continue to drive the blue-hour/night lighting cycle, so the imported geometry participates in the established cinematic lighting rather than replacing gameplay behavior.

| Item | Value |
|---|---:|
| Source | Poly Haven Street Lamp 01 |
| License | CC0 |
| Source geometry | ~30,610 triangles |
| Authored dimensions | ~0.70 m × 3.87 m |
| Runtime format | Embedded-texture GLB |
| Runtime payload | ~6.9 MB |
| Scene instances | 6 cloned lamp roots |
| Mobile behavior | Hardware scaling and 0.92 lamp scale; procedural fallback retained |

The current payload is suitable for a vertical slice, but a later mobile-specific pass should generate a separate 1K texture variant or a lower triangle LOD. This is intentionally tracked as a performance optimization, not as a license or loading blocker.
