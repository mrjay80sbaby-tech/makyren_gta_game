# MAKYREN-140 — Cache Player Vehicle Coordinates

## Scope
Avoid repeated player-vehicle position property reads inside the ambient traffic proximity loop.

## Implemented
- Cache the player vehicle X/Z coordinates once per traffic frame while driving.
- Reuse the cached coordinates for nearest-distance and proximity calculations.
- Preserve existing traffic separation behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-141 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
