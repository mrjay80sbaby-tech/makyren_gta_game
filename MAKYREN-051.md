# MAKYREN-051 — Enforce Red-Light Traffic Stop Speed

## Scope
Close the ordering gap between the traffic signal/braking system and the ambient traffic movement loop.

## Implemented
- When an ambient vehicle is approaching the crosswalk during a red signal, its live `speed` is now set to `0`.
- Its `targetSpeed` metadata is also set to `0` for the active stop.
- Existing stop positions remain unchanged.
- This ensures the later Visual-004 movement loop cannot immediately advance a vehicle after the traffic system has clamped it to the red-light stop point.

## Verification
Source inspection confirmed the traffic system runs before the gameplay movement loop and that the movement loop consumes the live vehicle speed. The change therefore addresses the identified handoff directly. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-052 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
