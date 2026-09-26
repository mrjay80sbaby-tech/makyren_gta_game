# MAKYREN-100 — Optimize On-Foot Pedestrian Collision Gate

## Scope
Use squared horizontal distance for the pedestrian collision threshold and cache the player's X/Z position during the pedestrian collision pass.

## Implemented
- Cached the player's X/Z position once before iterating pedestrians.
- Replaced the 1.05-unit threshold's direct `Math.hypot()` check with squared-distance comparison.
- Retained the square root only after a collision is confirmed, where the normalized separation response requires the actual length.
- Preserved the existing collision threshold and push behavior.

## Verification
Source inspection confirmed the collision gate now rejects non-colliding pedestrians without calculating a square root. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-101 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
