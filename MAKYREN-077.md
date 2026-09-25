# MAKYREN-077 — Avoid Redundant Proximity HUD DOM Writes

## Scope
Reduce repeated DOM writes in the Visual-004 proximity HUD while preserving its live collision/proximity feedback.

## Implemented
- Cached whether the proximity HUD is currently visible.
- Cached its last displayed message.
- Only changes `display` when visibility actually changes.
- Only rewrites `textContent` when the proximity message changes between normal/risk states or driving/on-foot modes.
- Preserved all existing distance thresholds and messages.

## Verification
Source inspection confirmed the HUD was assigning `display` and `textContent` on every traffic-system render update while the displayed message often remained unchanged. The correction adds lightweight state caching. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-078 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
