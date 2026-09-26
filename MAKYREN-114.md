# MAKYREN-114 — Simplify Checkpoint Distance Calculation

## Scope
Remove unnecessary square-root work from the checkpoint HUD distance calculation while preserving the displayed value.

## Implemented
- Replaced squared-distance plus `Math.sqrt` with the equivalent direct absolute Z-distance.
- Kept the calculation gated to the active `drive` mission state.
- Preserved the existing non-negative checkpoint distance behavior.

## Verification
Source inspection confirmed the HUD now uses direct absolute Z-distance with no square-root operation. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-115 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
