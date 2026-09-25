# MAKYREN-082 — Avoid Redundant Checkpoint Marker State Writes

## Scope
Reduce repeated checkpoint marker state assignments during the Visual-004 gameplay update.

## Implemented
- Compare the checkpoint marker's enabled state with the mission's active checkpoint state before changing it.
- Only update `setEnabled()` and visibility when the checkpoint transitions between active and inactive.
- Preserve checkpoint rotation, scaling, emissive animation, and mission progression.

## Verification
Source inspection confirmed the checkpoint marker state was being assigned every gameplay frame even though its enabled state changes only when the mission enters or leaves the DRIVE stage. The correction gates those state writes behind the actual state transition. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-083 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
