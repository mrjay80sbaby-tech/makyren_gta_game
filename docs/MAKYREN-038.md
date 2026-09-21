# MAKYREN-038 — Vehicle Service-Point State/Diagnostic Telemetry

## Scope
Add lightweight runtime telemetry for the existing vehicle service-point system without adding backend dependencies or changing the existing repair flow.

## Implemented
- Added `vehicleServiceTelemetry` with:
  - `state`
  - `nearestPointId`
  - `nearestDistance`
  - `inServiceZone`
  - `repairAttempts`
  - `successfulRepairs`
  - `lastRepair`
  - `lastRepairPointId`
  - `lastRepairDistance`
- Added per-frame service-zone telemetry updates.
- Added service-range validation to `repairAtServicePoint()`.
- Exposed telemetry through:
  - `window.MakyrenVehicleRepair.telemetry`
  - `window.MakyrenVehicleService.telemetry`
  - `window.MakyrenVehicleService.updateTelemetry()`
- Preserved existing garage marker, repair feedback, persistent vehicle health, and repair API behavior.
- No backend or external dependency added.

## Verification
GitHub implementation commit completed. Runtime/build verification remains pending.
