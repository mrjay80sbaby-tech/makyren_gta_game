# MAKYREN-083 — Reuse Cached Service-Point Telemetry in HUD

## Scope
Remove a duplicate service-point distance scan from the Visual-004 gameplay HUD path.

## Implemented
- Reused `vehicleServiceTelemetry.nearestPointId` to determine whether the vehicle is at a repair service point for the HUD prompt.
- Preserved the event-driven `getNearestVehicleServicePoint()` lookup used by the E interaction path.
- Preserved all repair, telemetry, and HUD behavior.

## Verification
Source inspection confirmed the HUD performed a second nearest-service-point scan after `updateVehicleServiceTelemetry()` had already calculated the current nearest point. The HUD now consumes the cached telemetry instead. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-084 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
