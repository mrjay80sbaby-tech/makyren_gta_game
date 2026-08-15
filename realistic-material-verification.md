# Realistic Material Verification

The Visual-004 high tier now loads verified CC0 ambientCG maps from the repository: Asphalt 025 C for the road and Facade 001 for the buildings. The 1K JPEG maps are used for color, normal, roughness, and ambient occlusion where available.

The capture shows a visible shift away from the flat blockout: the road has dark wet-asphalt variation and the buildings have real facade surface relief and roughness response. The previous procedural facade texture has been replaced on high and medium tiers. The mobile tier retains the procedural fallback to avoid loading the material payload on low-end devices.

The remaining visual limitation is geometry and asset authenticity: the buildings, vehicle, and character are still procedural forms. The material pass is therefore the first realistic foundation, not the final asset replacement.
