# MAKYREN-046 — On-Foot Traffic Collision Gating

## Scope
Correct the existing Visual-004 on-foot traffic separation guard without changing traffic movement, vehicle collision, mission, garage, or control logic.

## Implemented
- Updated the pedestrian/player-versus-traffic collision guard in `visual-004/src/traffic_system.js`.
- The separation check now runs when the player character root is enabled, which directly represents on-foot mode in the current production slice.
- Vehicle mode remains excluded because the player character root is disabled while driving.
- No changes were made to traffic speed metadata, red-light behavior, vehicle collision handling, missions, persistence, garage service, damage, or HUD.

## Verification
Repository inspection confirmed the guard was corrected and the implementation was committed. A local/runtime build was not executed in this ticket, and no successful build run is being claimed.

## Next
MAKYREN-047 — continue with the next production-state gap after inspecting the current Visual-004 code.
