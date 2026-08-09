# MAKYREN-005A — Mission State + Wanted Meter

Status: implemented

- Mission 01 state machine: find ride → escape heat → complete
- Wanted/heat display from 0–5
- Heat decay over time
- Cash reward on completion
- Local browser persistence for prototype progression
- Existing game.js remains intact
- Mission module loaded from index.html

Controls:
- `E`: interact/steal-ride mission progression
- `M`: complete after heat reaches zero

Next: MAKYREN-005B — connect mission events directly to vehicle state and add police pursuit agents.