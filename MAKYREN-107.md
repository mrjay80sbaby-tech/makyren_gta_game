# MAKYREN-107 — Optimize Service Point Distance Scan

## Scope
Reduce square-root work in the vehicle-service telemetry scan while preserving the nearest-point distance, service-zone detection, and telemetry values.

## Implemented
- Scan service points using squared horizontal distance.
- Convert only the nearest result to an exact distance after the scan.
- Preserve the existing rounded `nearestDistance` telemetry and service-radius comparison.

## Verification
Source inspection confirmed the service-point scan now performs one square-root conversion instead of one per service point. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-108 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
