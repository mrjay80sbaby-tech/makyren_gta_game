# MAKYREN-175 — Avoid Redundant Pedestrian Rotation Writes

## Scope
Avoid reassigning pedestrian facing rotation every frame when the direction has not changed.

## Implemented
- Calculate the intended Y rotation from the pedestrian's direction.
- Assign `rotation.y` only when it differs from the intended rotation.
- Preserve the same direction-to-rotation mapping and all pedestrian movement and animation behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-176 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
