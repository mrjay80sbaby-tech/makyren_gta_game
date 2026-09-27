# MAKYREN-145 — Carry On-Foot Collision Position Locally

## Scope
Avoid repeated player-root X/Z property reads during the on-foot ambient-vehicle collision loop while preserving cumulative separation behavior.

## Implemented
- Seed local collision coordinates from the frame-cached player position.
- Apply successive vehicle pushes to those local coordinates.
- Write the updated coordinates back to the player root after each collision response.
- Preserve existing thresholds, push strength, and collision telemetry.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-146 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
