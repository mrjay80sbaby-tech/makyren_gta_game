# MAKYREN-091 — Correct Cached Signal Phase Reference

## Scope
Correct the signal transition reference introduced by MAKYREN-090 so the cached `signalIndex` is used consistently for the next phase.

## Implemented
- Replaced the stale `nextIndex` reference with the cached `signalIndex` when selecting `nextPhase`.
- Preserved the direct modulo-based phase transition introduced in MAKYREN-090.

## Verification
Source inspection confirmed the signal transition now uses `signalIndex` consistently. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-092 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
