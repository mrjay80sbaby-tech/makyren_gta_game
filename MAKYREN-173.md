# MAKYREN-173 — Avoid Redundant Traffic Metadata Writes

## Scope
Reduce unnecessary per-frame assignments for ambient traffic state while retaining its existing calculated values.

## Implemented
- Guard traffic speed assignment when the target speed is unchanged.
- Guard writes for traffic marker, lane direction, signal phase, district, district label, and target speed metadata.
- Preserve all existing target-speed calculations, lane-direction calculations, signal phase updates, and collision/proximity logic.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-174 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
