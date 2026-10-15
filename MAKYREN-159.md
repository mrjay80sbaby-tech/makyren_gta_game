# MAKYREN-159 — Reuse Pedestrian Base Speed

## Scope
Avoid evaluating the same pedestrian base-speed expression twice during spawn initialization.

## Implemented
- Computes each pedestrian's base speed once.
- Reuses it for both `metadata.baseSpeed` and the district-adjusted initial `metadata.speed`.
- Preserves the existing speed values and district multiplier.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-160 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
