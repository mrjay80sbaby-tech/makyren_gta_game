# MAKYREN-178 — Guard Repeated Red-Light Speed Writes

## Scope
Avoid rewriting unchanged traffic speed metadata while a vehicle is held at a red-light stop line.

## Implemented
- Guard the vehicle speed assignment so zero is written only when the speed changes.
- Guard the existing metadata target-speed assignment so zero is written only when its value changes.
- Reuse the existing per-vehicle metadata reference; signal logic, stop-line clamping, and target values are unchanged.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-179 — inspect current Visual-004 production source and implement one small, worthwhile scoped improvement.
