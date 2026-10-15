# MAKYREN-153 — Name Crosswalk and Stop-Line Thresholds

## Scope
Replace inline directional crosswalk bounds and traffic-light stop-line coordinates with named constants.

## Implemented
- Added explicit bounds for both lane directions.
- Added named stop-line Z coordinates for both lane directions.
- Preserved all numeric values, direction checks, and stop-line clamping behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-154 — inspect the current Visual-004 production source and execute the next smallest worthwhile scoped correction or optimization.
