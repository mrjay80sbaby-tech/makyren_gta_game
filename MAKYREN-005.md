# MAKYREN-005 — Mission + Wanted Foundation

Status: planned and documented.

## Objective
Introduce the gameplay loop that turns the open city into a mission-driven crime-action sandbox.

## Systems
- Mission state machine
- Objective tracking
- Cash/reward progression
- Wanted/heat level 0–5
- Police spawn/response hooks
- Pursuit state
- Mission completion/failure hooks
- Supabase persistence integration point

## Implementation order
1. Mission data model
2. HUD mission state
3. Trigger volumes
4. Wanted meter
5. Police vehicle/NPC behavior
6. Mission rewards
7. Save/load progression

## Constraint
Keep the implementation browser/mobile-first and $0-cost. Do not add paid engine dependencies or restart existing systems.

## Next
Implement the mission state machine and wanted meter in `game.js`, then move persistent progression into Supabase.