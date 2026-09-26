# MAKYREN-132 — Cache Vehicle Mode Per Gameplay Frame

## Scope
Avoid repeated `vehicleMode` reads after input/state transitions within the same gameplay frame.

## Implemented
- Cache the post-input vehicle mode as `driving` once per frame.
- Reuse it for movement, animation, service telemetry, collision, camera focus, and HUD presentation branches.
- Preserve the live `vehicleMode` toggle path and mission transitions.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-133 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
