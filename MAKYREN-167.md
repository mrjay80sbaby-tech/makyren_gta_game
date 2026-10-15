# MAKYREN-167 — Avoid Redundant Hero Key-Light Writes

## Scope
Avoid setting the hero key light intensity when its target value has not changed.

## Implemented
- Compute the existing day/night and quality-based target intensity.
- Assign `heroKey.intensity` only when its current value differs from the target.
- Preserve all existing intensity values and the continuously updated sun/sky lighting.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-168 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
