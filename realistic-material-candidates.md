# Realistic PBR Material Candidates

The first realistic material pass can use the following verified ambientCG assets, all described on their individual pages as CC0:

| Surface | Candidate | Browser-oriented download | Source |
|---|---|---:|---|
| Wet asphalt | Asphalt 025 C | 1K JPG ZIP, 8 MB | https://ambientcg.com/view?id=Asphalt025C |
| Building/facade | Facade 001 | 1K JPG ZIP, 3 MB | https://ambientcg.com/view?id=Facade001 |
| Sidewalk/wall detail | Concrete 012 | 1K JPG ZIP, 8 MB | https://ambientcg.com/view?id=Concrete012 |

The asset pages provide larger 2K and 4K packages, but the 1K packages are the appropriate initial browser target. The materials should be converted to WebP or KTX2 where the build pipeline supports it, with normal and roughness maps retained only on high and medium tiers. Mobile should use the base color plus a reduced normal map or a baked combined texture.

These materials are more aligned with the user’s explicit realistic direction than the current procedural facade texture. The implementation order should replace the road first, then facade, then sidewalk, because those surfaces occupy the largest visible image areas.
