# MAKYREN-102 — Optimize Nearest Pedestrian Distance Scan

## Scope
Reduce square-root work in the on-foot nearest-pedestrian telemetry path without changing its public distance value or no-pedestrian behavior.

## Implemented
- Compare pedestrian distances using squared horizontal distance during the scan.
- Convert the final nearest squared distance to an exact distance once after the loop.
- Preserve `Infinity` when the player is not on foot or no pedestrian distance is available.
- Preserve the existing `nearestPedestrianDistance` API used by traffic telemetry and HUD behavior.

## Verification
Source inspection confirmed the scan performs one square-root conversion after the pedestrian loop rather than one per pedestrian. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-103 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
