# MAKYREN-067 — Count On-Foot Traffic Impacts

## Scope
Align on-foot collision telemetry with the existing impact counter used by vehicle collisions.

## Implemented
- Incremented `collisionState.impacts` for pedestrian contacts while on foot.
- Incremented `collisionState.impacts` for ambient-vehicle contacts while on foot.
- Preserved the existing source classification and collision cooldown.
- Bumped traffic-system telemetry version from `039` to `040`.

## Verification
Source inspection found on-foot collisions set `active` and `lastImpact` but did not increment the shared impact counter. The correction makes the counter represent both driving and on-foot traffic contacts without changing collision thresholds or separation behavior. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-068 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
