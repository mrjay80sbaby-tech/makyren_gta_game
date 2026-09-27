# MAKYREN-146 — Carry Pedestrian Collision Position Locally

## Scope
Reduce repeated player-root transform writes in the on-foot pedestrian collision loop while preserving cumulative separation behavior.

## Implemented
- Added local pedestrian collision coordinates seeded from the frame-cached player position.
- Applied successive pedestrian separation responses to the local coordinates.
- Wrote updated coordinates back to the player root after each response.
- Preserved collision thresholds, push strength, and telemetry.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-147 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
