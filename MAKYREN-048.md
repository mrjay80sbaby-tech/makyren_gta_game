# MAKYREN-048 — Garage Repair Prompt Accuracy

## Scope
Align the Visual-004 garage repair HUD prompt with the actual service-zone condition.

## Implemented
- The HUD now shows `E repair vehicle` only while the vehicle is actually inside the Downtown Garage service radius.
- Previously, the prompt could appear whenever a service point was merely the nearest point, even when the vehicle was outside its repair radius.
- Repair validation itself remains unchanged.

## Implementation
- Commit: `f8cd4eb43dfd68510edc8a57af379a68d7f1be46`

## Verification
Production source was inspected and the change was committed. No local/runtime build was executed, so no successful build verification is claimed.

## Next
MAKYREN-049 — inspect the current Visual-004 production state and execute the next smallest scoped improvement.
