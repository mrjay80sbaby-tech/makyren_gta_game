# MAKYREN-076 — Cache Proximity HUD Accessibility Semantics

## Scope
Avoid rewriting the proximity HUD accessibility attribute during every render update.

## Implemented
- Set `aria-live="polite"` once when the proximity HUD is initialized.
- Removed the repeated per-frame `setAttribute()` call.
- Preserved the HUD's visibility, text, thresholds, and accessibility behavior.

## Verification
Source inspection confirmed the accessibility attribute was static but being rewritten whenever proximity feedback was active. The correction moves that setup to initialization. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-077 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
