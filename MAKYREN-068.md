# MAKYREN-068 — Proximity HUD Accessibility

## Scope
Improve accessibility semantics for the existing proximity feedback without changing its visual behavior.

## Implemented
- Added `aria-live="polite"` to the proximity HUD when active.
- Preserved all existing proximity thresholds and messages.
- Bumped traffic-system telemetry version from `040` to `041`.
- No gameplay, collision, or movement behavior changed.

## Verification
Source inspection confirmed the proximity HUD is dynamically updated with status text but had no live-region semantics. The correction allows assistive technology to receive meaningful status updates while preserving the existing display logic. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-069 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
