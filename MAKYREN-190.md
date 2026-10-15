# MAKYREN-190 — Scope Keyboard Gameplay Input

- Ignore gameplay keydown input while focus is inside editable content, inputs, textareas, or selects.
- Prevent arrow-key page scrolling while gameplay input is active, without suppressing keys used in editable fields.
- Keep keyup cleanup active so previously held keys can still be released.
- Verification: source inspection only; no local build or runtime test performed.
- Next: MAKYREN-191
