# MAKYREN-036 — Vehicle Repair Interaction + Service-Point Hooks

Status: Implemented

## Implemented
- Added a procedural Downtown Garage vehicle service point.
- Added visible service-pad/marker geometry.
- Added proximity detection through `getNearestVehicleServicePoint()`.
- Added `window.MakyrenVehicleServicePoints`.
- Added `window.MakyrenVehicleRepair.repairAtServicePoint()`.
- While driving, pressing E at the service point repairs the vehicle instead of exiting.
- Existing persistent vehicle health, collision recovery, mission flow, traffic, and asset loading are preserved.
- No backend or external dependency was added.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-037 — Vehicle repair feedback and service-point gameplay hooks.
