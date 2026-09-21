# MAKYREN-039 — Vehicle service-point UI/interaction polish

## Scope
Polish the existing vehicle service-point interaction without changing the underlying repair mechanics.

## Implemented
- Added tracked service-point marker references for runtime presentation updates.
- Active garage marker now pulses and becomes fully visible while the player vehicle is inside the nearest service zone.
- HUD now distinguishes a ready garage state from normal vehicle interaction.
- Damaged vehicles show `DOWNTOWN GARAGE READY` while inside the service zone.
- Healthy vehicles show `DOWNTOWN GARAGE • VEHICLE HEALTHY` while inside the service zone.
- Existing E-to-repair behavior, persistent vehicle health, repair feedback, and telemetry remain intact.
- No backend or external dependency added.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-040 — Mission objective/checkpoint progression polish.
