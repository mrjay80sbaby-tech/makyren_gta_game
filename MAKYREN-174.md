# MAKYREN-174 — Share Ambient Traffic Materials by Color

## Scope
Reduce material-instance overhead for ambient traffic vehicles while preserving their three-color appearance.

## Implemented
- Create a three-material palette for the existing red, blue, and amber traffic colors.
- Assign each ambient vehicle the matching shared material by palette index instead of cloning a separate material for every vehicle.
- Preserve the metallic/roughness values, color values, vehicle count, positions, speeds, and directions.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-175 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
