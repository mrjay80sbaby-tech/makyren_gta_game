# MAKYREN-163 — Share Pedestrian Materials

## Scope
Avoid creating duplicate body and skin material instances for ambient pedestrians when their material properties are identical.

## Implemented
- Assigned the shared `pedestrianBodyMat` to each pedestrian body.
- Assigned the shared `pedestrianSkinMat` to each pedestrian head.
- Removed per-pedestrian material cloning while preserving the existing appearance and geometry.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-164 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
