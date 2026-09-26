# MAKYREN-117 — Gate Service Telemetry by Vehicle Mode

## Scope
Avoid scanning vehicle service points while the player is on foot, where service-zone telemetry is inactive.

## Implemented
- Run the service-point distance scan only while the vehicle is active.
- Reset service-zone telemetry to an explicit out-of-range state while on foot.
- Preserve vehicle-mode service detection and repair behavior.

## Verification
Source inspection confirmed the service-point scan is gated by vehicle mode and on-foot telemetry is explicitly reset. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-118 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
