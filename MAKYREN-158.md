# MAKYREN-158 — Reuse Pedestrian Initial Z Position

## Scope
Make ambient pedestrian spawn placement and initial district selection share one computed Z coordinate.

## Implemented
- Added named start-position and spacing constants using the existing values `-28` and `18`.
- Computes `initialZ` once per pedestrian and reuses it for both placement and district selection.
- Preserves the existing spawn coordinates and district assignments.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-159 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
