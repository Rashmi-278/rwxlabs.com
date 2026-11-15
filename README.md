# rwxlabs.com

Static site for rwxLabs: Research · Worldbuilding · Execution. No build step is needed to serve it.

- `index.html`: single-screen landing page
- `research.html`: writeups list, plus a reader (`?id=…`) that renders HackMD notes in place

## Adding a writeup

1. Publish the note on HackMD.
2. Add an entry to `research.json` with `"hackmd": "<shortId>"`, `"account"`, `"date"`, `"title"`, `"summary"` and `"status": "published"`. Only published entries are shown.
3. Regenerate the feed and other generated files:

```bash
python3 scripts/build_meta.py
```
