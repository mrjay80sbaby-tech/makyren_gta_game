# MAKYREN-065 — Mode-Aware Proximity HUD

## Scope
Align the existing proximity HUD with the player's current movement mode.

## Implemented
- On foot, proximity now evaluates the nearest pedestrian.
- While driving, proximity continues to evaluate the nearest ambient vehicle.
- On-foot proximity displays `PEDESTRIAN PROXIMITY`.
- Driving retains the existing traffic proximity/braking messaging.
- Bumped traffic-system telemetry version from `037` to `038`.

## Verification
Source inspection confirmed the telemetry already distinguished on-foot and vehicle proximity, while the HUD remained vehicle-only. The correction connects the HUD to the same mode-aware behavior without changing collision thresholds or movement. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-066 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
