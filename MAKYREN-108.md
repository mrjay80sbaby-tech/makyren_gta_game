# MAKYREN-108 — Optimize Nearest Vehicle Distance Scan

## Scope
Reduce square-root work in the ambient traffic nearest-vehicle telemetry scan while preserving the reported nearest vehicle distance and existing proximity behavior.

## Implemented
- Track the nearest ambient vehicle using squared horizontal distance.
- Convert the final nearest squared distance to an exact distance once per traffic frame.
- Preserve the existing vehicle-avoidance distance calculation for the close-range response path.

## Verification
Source inspection confirmed the nearest-vehicle scan no longer performs a square root for every ambient vehicle. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-109 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
