# MAKYREN-118 — Gate Service Marker Updates

## Scope
Avoid updating vehicle service marker transforms and visibility while the player is on foot.

## Implemented
- Gate service marker scaling and visibility updates to vehicle mode.
- Preserve the active nearest-service marker behavior while driving.
- Eliminate redundant `vehicleMode` checks inside each marker iteration.

## Verification
Source inspection confirmed service marker updates are skipped entirely while on foot. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-119 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
