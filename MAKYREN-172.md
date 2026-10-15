# MAKYREN-172 — Avoid Redundant Pedestrian Metadata Writes

## Scope
Reduce repeated metadata assignments in the per-frame pedestrian update while preserving computed values.

## Implemented
- Guard `baseSpeed`, district, district label, target speed, and speed assignments so fields are written only when their values change.
- Compute the district-adjusted target speed once and reuse it for both target and active speed metadata.
- Preserve per-frame district calculation, movement, animation, and speed recalculation behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-173 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
