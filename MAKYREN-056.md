# MAKYREN-056 — Pedestrian District Count Telemetry

## Scope
Expose district-level pedestrian population telemetry through the existing Visual-004 traffic API.

## Implemented
- Added `pedestrianDistrictCounts` to `window.MakyrenTraffic`.
- Counts pedestrians using their live district metadata, with a position-derived fallback.
- Preserves the existing vehicle `districtCounts` API and all movement behavior.

## Verification
Source inspection confirmed pedestrian district metadata is now updated continuously. The new getter provides the same district observability already available for ambient vehicles without adding runtime UI or changing gameplay behavior. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-057 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
