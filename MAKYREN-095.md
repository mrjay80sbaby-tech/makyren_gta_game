# MAKYREN-095 — Cache Per-Frame Nearest Traffic Distances

## Scope
Avoid repeating full traffic-collection distance scans when the proximity HUD reads nearest traffic telemetry.

## Implemented
- Added per-frame cached nearest vehicle and pedestrian distances.
- Reused distances already computed during the active traffic/pedestrian update loops where possible.
- Changed `nearestVehicleDistance` and `nearestPedestrianDistance` telemetry getters to return the current frame's cached values.
- Preserved `nearestTrafficDistance` mode-aware behavior and existing HUD thresholds.

## Verification
Source inspection confirmed the telemetry getters no longer perform collection-wide `reduce()` distance scans. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-096 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
