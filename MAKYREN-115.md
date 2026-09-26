# MAKYREN-115 — Gate Vehicle Entry Distance Math

## Scope
Avoid calculating player-to-vehicle distance on gameplay frames where the vehicle interaction key is not being pressed.

## Implemented
- Compute the vehicle proximity distance only while `E` is held.
- Preserve the existing enter/exit threshold and interaction behavior.
- Keep the service-point interaction path unchanged.

## Verification
Source inspection confirmed the distance calculation is gated by the interaction key and retains the existing 25-unit squared threshold. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-116 — inspect the current Visual-004 production state and execute the next smallest scoped optimization/correction.
