# MAKYREN-141 — Cache On-Foot Player Coordinates

## Scope
Avoid repeated player-root X/Z property reads during the traffic-system pedestrian proximity and collision passes.

## Implemented
- Cache the on-foot player X/Z coordinates once per traffic frame.
- Reuse them for nearest-pedestrian distance and pedestrian/vehicle collision checks.
- Preserve collision thresholds and response behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-142 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
