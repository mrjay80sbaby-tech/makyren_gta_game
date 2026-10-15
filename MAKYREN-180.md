# MAKYREN-180 — Avoid Repeated Red-Light Speed Resets

## Scope
Keep traffic vehicles stopped at red lights without repeatedly restoring their normal speed and immediately setting it back to zero every frame.

## Implemented
- Determine whether each vehicle is within its red-light stopping region after the existing driving-proximity response.
- Select a zero target speed for vehicles held at red lights, otherwise use the existing district-adjusted base speed.
- Apply guarded speed and target-speed assignments once per frame from that resolved target, then clamp stopped vehicles to the existing stop line.
- Preserve red-light behavior while walking or driving, the existing stop-line boundaries, and district speed profiles.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-181 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
