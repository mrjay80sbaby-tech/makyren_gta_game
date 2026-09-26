# MAKYREN-097 — Gate Vehicle Proximity Work by Drive Mode

## Scope
Avoid calculating ambient-vehicle proximity distances while the player is on foot, when the active traffic telemetry is pedestrian-based.

## Implemented
- Cached the vehicle's enabled drive state once per traffic frame.
- Vehicle-to-player proximity distance is now calculated only while the vehicle is enabled.
- Preserved ambient vehicle separation behavior while driving.
- Preserved pedestrian proximity telemetry while on foot.

## Verification
Source inspection confirmed vehicle proximity distance work is gated by the cached drive state. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-098 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
