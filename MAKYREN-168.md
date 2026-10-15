# MAKYREN-168 — Compute Checkpoint Pulse on Demand

## Scope
Skip checkpoint-only pulse calculations when the mission checkpoint is inactive.

## Implemented
- Move the pulse sine and scale calculations into the active-checkpoint branch.
- Preserve the existing animation formula and values while the checkpoint is enabled.
- Avoid the unnecessary per-frame sine calculation outside the driving checkpoint stage.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-169 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
