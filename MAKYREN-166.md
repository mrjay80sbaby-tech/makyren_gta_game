# MAKYREN-166 — Reuse Scene Clear Color

## Scope
Remove the per-frame `Color4` allocation from the dynamic lighting update.

## Implemented
- Update the existing scene clear-color object's RGBA components in place as daylight changes.
- Preserve the original channel formulas and alpha value.
- Avoid allocating a new `Color4` on every lighting frame.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-167 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
