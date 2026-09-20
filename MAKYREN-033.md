# MAKYREN-033 — Vehicle Collision Polish: Cooldown, Directional Recovery + HUD Diagnostics

Status: Implemented

## Implemented
- Added a 450 ms collision recovery cooldown to prevent repeated impact spam.
- Added impact direction telemetry via `lastNormal`.
- Added recovery count telemetry.
- Added explicit collider labels for world-boundary impacts.
- Added temporary HUD feedback for recovered impacts and the collider involved.
- Full reset clears collision telemetry state.
- Existing static prop volumes, traffic collision, mission flow, and mobile limits preserved.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-034 — Vehicle damage-state hooks and non-destructive impact feedback.
