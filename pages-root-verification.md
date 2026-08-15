# GitHub Pages Root Verification

The repository root previously returned the GitHub Pages 404 page because the workflow published the Vite output only under `_site/visual-004/`. The deployment workflow now copies the same `visual-004/dist` contents into both `_site/` and `_site/visual-004/`.

After commit `09d4a4b`, the Pages workflow completed successfully. A direct HTTP request to `https://mrjay80sbaby-tech.github.io/makyren_gta_game/` returned HTTP 200 with the title `MA'KYREN — Visual 004` and the expected Visual-004 JavaScript entrypoint. The browser also loaded the root page and exposed the live HUD text `Reach the blue vehicle`, confirming that the correct app is now served at the root URL.

The original nested route remains available at `https://mrjay80sbaby-tech.github.io/makyren_gta_game/visual-004/`.
