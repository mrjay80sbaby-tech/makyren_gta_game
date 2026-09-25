# MAKYREN-055 — On-Foot Pedestrian Collision Separation

## Scope
Extend the existing on-foot traffic collision gate to ambient pedestrians.

## Implemented
- Added pedestrian proximity separation while `playerRoot` is enabled.
- Uses the existing collision telemetry state and cooldown presentation.
- Preserves pedestrian movement and animation behavior.
- Vehicle collision handling remains unchanged.
- No vehicle damage is applied to pedestrian contact.

## Verification
Source inspection confirmed the production slice already gated ambient vehicle collision to on-foot mode, while pedestrians had no equivalent separation. The smallest correction was to add pedestrian separation inside the same on-foot gate. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-056 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
