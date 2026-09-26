# MAKYREN-088 — Avoid Per-Frame Traffic Metadata Allocation

## Scope
Reduce transient allocation in the active Visual-004 ambient traffic update without changing traffic behavior or telemetry.

## Implemented
- Reused each ambient vehicle's existing metadata object during the frame update.
- Replaced the per-frame object spread with direct field assignments.
- Preserved traffic, lane direction, signal phase, district, district label, and target-speed metadata values.
- Preserved initialization fallback behavior when metadata is absent.

## Verification
Source inspection confirmed the active traffic callback no longer creates a replacement metadata object for each ambient vehicle on every frame. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-089 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
