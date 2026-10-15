# MAKYREN-155 — Name Ambient Traffic Wrap Boundary

## Scope
Replace the inline ambient-traffic Z-axis wrap value with a named constant in the Visual-004 gameplay loop.

## Implemented
- Added `trafficWrapBoundaryZ` with the existing value of `35`.
- Reused it for both positive and negative traffic wrap checks and destinations.
- Preserved traffic wrapping behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-156 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
