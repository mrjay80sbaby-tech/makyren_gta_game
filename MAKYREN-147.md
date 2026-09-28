# MAKYREN-147 — Preserve Cumulative On-Foot Collision Position

## Scope
Correct the on-foot collision optimization so the ambient-vehicle collision pass starts from the position produced by pedestrian collision separation earlier in the same frame.

## Implemented
- Seeded the vehicle collision coordinates from the pedestrian-adjusted local coordinates.
- Preserved the prior ordering and cumulative separation behavior.
- Kept collision thresholds, push strengths, and telemetry unchanged.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-148 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
