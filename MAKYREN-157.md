# MAKYREN-157 — Name Pedestrian Bobbing Constants

## Scope
Replace inline frequency and amplitude values in the ambient pedestrian vertical bobbing animation with named constants.

## Implemented
- Added `pedestrianBobFrequency` with the existing value `4`.
- Added `pedestrianBobAmplitude` with the existing value `.025`.
- Updated the bobbing expression to use both constants without changing the formula or values.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-158 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
