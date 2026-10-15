# MAKYREN-183 — Stabilize Exact-Overlap Collision Separation

## Scope
Ensure on-foot collision separation still moves the player when their position exactly overlaps a pedestrian or ambient vehicle.

## Implemented
- Added a deterministic horizontal fallback direction when collision distance is effectively zero.
- Applied the fallback to both pedestrian and vehicle separation.
- Preserved existing push distances and cumulative collision handling for nonzero distances.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-184 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
