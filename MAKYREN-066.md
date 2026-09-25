# MAKYREN-066 — Pedestrian Collision-Risk HUD Feedback

## Scope
Make the existing on-foot proximity HUD distinguish ordinary pedestrian proximity from the existing pedestrian collision threshold.

## Implemented
- When on foot and within 1.05 units of a pedestrian, the HUD displays `PEDESTRIAN PROXIMITY • COLLISION RISK`.
- Outside that threshold but within the existing 5-unit proximity range, it displays `PEDESTRIAN PROXIMITY`.
- Driving HUD behavior remains unchanged.
- Bumped traffic-system telemetry version from `038` to `039`.

## Verification
Source inspection confirmed the pedestrian collision threshold is 1.05 units and the proximity HUD already runs from the same traffic update loop. The correction surfaces that existing threshold without changing collision behavior. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-067 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
