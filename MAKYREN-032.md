# MAKYREN-032 — Vehicle-to-Static-Prop Collision Volumes + Recovery Telemetry

Status: Implemented

## Objective
Extend lightweight vehicle collision handling from road/world boundaries to selected static street props while exposing recovery telemetry.

## Implemented
- Added collision volumes for street bins and delivery crates.
- Added collision volumes for utility poles and non-mobile benches.
- Added public static-prop collider registry at `window.MakyrenStaticPropColliders`.
- Vehicle collision telemetry now tracks total impacts, prop impacts, last collider label, and last impact time.
- Vehicle returns to its last safe position on prop contact.
- Existing mission state and traffic collision behavior remain unchanged.
- No physics engine or new dependency added.

## Verification
Implementation committed. Runtime/build verification is pending.

## Next
MAKYREN-033 — Vehicle collision polish: impact cooldown, directional recovery, and HUD diagnostics.
