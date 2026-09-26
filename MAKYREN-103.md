# MAKYREN-103 — Cache Traffic Signal Emissive Colors

## Scope
Remove repeated `Color3` allocations when traffic signals change phase while preserving the existing signal appearance and phase behavior.

## Implemented
- Added shared cached emissive colors for red, yellow, and green on/off states.
- Reused those color objects during signal phase updates.
- Preserved all existing signal phase values and visual states.

## Verification
Source inspection confirmed signal updates now reuse cached emissive colors instead of allocating new `Color3` objects on each phase change. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-104 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
