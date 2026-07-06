# taratorkinofficial.github.io

Everything for the Taratorkin Official studio site lives in this one repo.

```
publish-*.bat     ← one-click publish buttons (see below)
publish.mjs       ← the script behind them
sources/
  v1/             ← design: orange editorial print
  v2/             ← design: blue riso, tactile depth
  v3/             ← design: premium dark glass
docs/             ← the built site — GitHub Pages serves this folder
```

The old (pre-rebuild) site is preserved in git history under the tag
`legacy-site` and can always be re-published.

## Publish / switch designs

Double-click one of these, then push (GitHub Desktop → Push origin):

| Button | Result |
| --- | --- |
| `publish-legacy.bat` | old site at root + all three designs at `/v1` `/v2` `/v3` |
| `publish-v1.bat` | orange print at root, other designs stay as mirrors |
| `publish-v2.bat` | blue riso at root, other designs stay as mirrors |
| `publish-v3.bat` | dark glass at root, other designs stay as mirrors |

Mirrors are always `noindex` + disallowed in robots.txt, so search engines
only ever see the root design.

## Edit content (games, team, pitch, texts)

Content lives in typed data files, identical across the three designs:

- `sources/v3/src/data/games.ts` — the games list (title, links, cover)
- `sources/v3/src/data/team.ts` — team members
- `sources/v3/src/data/pitch.ts` — publisher-pitch copy
- `sources/v3/src/data/site.ts` — email/links/stats + Cloudflare token

Edit the same file in each design you keep alive, then run a publish button.

## Preview while editing

`sources/v1|v2|v3/dev-preview.bat` — double-click, browser opens with live
reload (every file save refreshes the page). Close the window to stop.

## One-time GitHub setting

Settings → Pages → Build and deployment → Deploy from a branch →
Branch: `main`, Folder: `/docs` → Save.

## Analytics

Cloudflare Web Analytics (cookieless): dash.cloudflare.com → Web Analytics.
The beacon is baked into all designs and injected into the legacy pages at
publish time.
