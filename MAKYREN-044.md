# MAKYREN-044 — Mission HUD and Objective Readability Polish

## Scope
Polish the Visual-004 mission HUD hierarchy and readability without changing mission logic or progression.

## Implemented
- Separated mission branding, stage, title, objective, distance, instruction, and transient feedback into distinct visual hierarchy levels.
- Improved HUD contrast, spacing, sizing, borders, background treatment, and mobile-width constraints.
- Preserved approach, drive, complete, replay, persistence, telemetry, garage, traffic, collision, damage, and control behavior.
- Kept the existing mission objective content and checkpoint distance semantics; only presentation was changed.
- No backend or external dependency added.

## Verification
Implementation committed. Runtime/build/smoke verification was not performed in this ticket.

## Next
MAKYREN-045 — continue with the next production ticket after reviewing the current Visual-004 state.
