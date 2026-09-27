# MAKYREN-144 — Reuse Cached Vehicle Coordinates in Collision Pass

## Scope
Reuse the player vehicle coordinates already cached at the start of the traffic frame in the driving collision pass.

## Implemented
- Replaced repeated player vehicle X/Z property reads with the existing cached values.
- Preserved collision bounds, push response, and damage telemetry behavior.

## Verification
Source inspection only. No local build or runtime test was performed.

## Next
MAKYREN-145 — inspect the current Visual-004 production state and execute the next smallest scoped correction or optimization.
