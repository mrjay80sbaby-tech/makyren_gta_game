# MAKYREN-179 — Keep Traffic Signals Active on Foot

## Scope
Ensure ambient traffic still obeys red lights when the player is walking rather than driving.

## Implemented
- Scoped player-vehicle proximity calculations and pushback to the driving state.
- Kept crosswalk and red-light stop-line handling outside that driving-only branch, so traffic signal behavior runs in either player mode.
- Preserved the existing signal phase, stop-line coordinates, and driving proximity response.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-180 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
