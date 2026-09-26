# MAKYREN-099 — Cache Player Vehicle Position for Traffic Collisions

## Scope
Avoid repeatedly reading the player's vehicle position during the ambient-vehicle collision loop.

## Implemented
- Reused the cached drive-state check for the vehicle collision branch.
- Cached the player's X/Z position once before iterating ambient vehicles.
- Preserved the existing rectangular collision thresholds and push response.

## Verification
Source inspection confirmed player vehicle position is now read once per traffic collision pass. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-100 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
