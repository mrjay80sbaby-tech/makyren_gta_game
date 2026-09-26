# MAKYREN-101 — Gate Vehicle Proximity Square Roots by Threshold

## Scope
Avoid calculating a square root for every ambient vehicle during driving proximity updates when the vehicle is clearly outside the 3.8-unit separation threshold.

## Implemented
- Switched the proximity gate to squared horizontal distance.
- Calculate the actual distance only when a vehicle is inside the 3.8-unit separation threshold.
- Preserve nearest-vehicle telemetry by updating the cached nearest distance only when a vehicle is closer.
- Preserve the existing separation strength and threshold behavior.

## Verification
Source inspection confirmed the vehicle separation path now avoids unconditional square-root calculations for out-of-range traffic. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-102 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
