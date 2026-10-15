# MAKYREN-171 — Update Shared Signal Colors Once

## Scope
Avoid repeating traffic signal material color assignments after the red/yellow/green lamp materials were shared in MAKYREN-170.

## Implemented
- Update the three shared lamp materials directly in `setSignal`.
- Preserve the existing phase-to-emissive-color mapping and signal state updates.
- Remove the two-side loop from material updates because both signal heads now reference the same three materials.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-172 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
