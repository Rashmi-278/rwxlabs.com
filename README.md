# rwxlabs.com

Static site for rwxLabs: Research · Worldbuilding · Execution. No build step is needed to serve it.

| Page | What it is |
|---|---|
| `index.html` | Landing page |
| `research.html` | Research tab: filterable list, plus an in-place reader (`?id=…`) that renders HackMD notes and local drafts, with a one-click HackMD embed |
| `institutions.html` | Research mapped to Golem Foundation, Ethlabs, Ethereum Institutional, EF Enterprise and the EEA |
| `work.html` | Track record |
| `research/drafts/*.md` | Institutional series (drafts, not yet on HackMD) |

## Adding or publishing research

1. Edit `research.json`. Every item has either `hackmd` (note id) + `account`, a `local` markdown path, or an `external` URL.
2. To publish a draft: paste it into HackMD under @rwxlabs, then replace the item's `local` with `"hackmd": "<id>", "account": "rwxlabs"` and set `"status": "published"`.
3. Regenerate the machine-readable files:

```bash
python3 scripts/build_meta.py              # llms.txt, feed.xml, sitemap.xml
python3 scripts/build_meta.py --sync-hackmd   # also list HackMD notes missing from the catalog
```

Machine-readable outputs: `research.json`, `llms.txt`, `feed.xml`, `sitemap.xml`.
