# MAKYREN-015 — Live Gameplay UI Integration

Status: implemented foundation

- HUD action event bridge
- FIRE -> weapon fire hook
- MELEE -> melee hook
- RELOAD -> weapon reload hook
- BAG -> inventory-open event
- Interior interaction bridge
- Mission state/reward bridge
- Save callback hooks

The bridge keeps UI and gameplay systems decoupled so future animation, audio, VFX, and Supabase persistence can be integrated without replacing the HUD.