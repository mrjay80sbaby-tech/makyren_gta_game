# MAKYREN-049 — Preserve Traffic Base-Speed Metadata

## Scope
Make the Visual-004 traffic speed handoff explicit and stable without changing the existing district speed profiles or movement behavior.

## Implemented
- Added each ambient vehicle's original base speed to its metadata when the traffic vehicle is created.
- The traffic system can now consume the explicit `baseSpeed` value instead of relying on its array index as a fallback.
- Existing district speed multipliers and live `speed` assignment from MAKYREN-048 remain unchanged.
- No changes to lanes, signals, collisions, missions, garage systems, or controls.

## Verification
Repository source inspection confirmed the traffic system already consumes `metadata.baseSpeed` when present and that the gameplay loop consumes the live `speed` value. The implementation was committed directly to Visual-004. No local/runtime build was executed, so no successful build or runtime verification is claimed.

## Next
MAKYREN-050 — inspect the current Visual-004 production state and execute the next smallest scoped correction.
