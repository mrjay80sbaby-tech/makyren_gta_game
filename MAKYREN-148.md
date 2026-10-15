# MAKYREN-148 — Preserve Cumulative Pedestrian Separation

## Scope
Correct the pedestrian collision loop to calculate each separation response from the current locally accumulated player position.

## Implemented
- Changed pedestrian collision deltas to use `pedestrianPlayerX` and `pedestrianPlayerZ`.
- Preserved cumulative pushes across multiple pedestrians in the same frame.
- Left collision thresholds, push strength, ordering, and telemetry unchanged.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-149 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
