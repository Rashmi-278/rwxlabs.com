#!/usr/bin/env python3
"""Generate llms.txt, feed.xml and sitemap.xml from research.json.

Run after editing research.json:  python3 scripts/build_meta.py
Add --sync-hackmd to list public HackMD notes not yet in research.json.
Only items with "status": "published" are included.
"""
import json
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://rwxlabs.com"
cat = json.loads((ROOT / "research.json").read_text())
items = sorted((i for i in cat["items"] if i.get("status") == "published"), key=lambda i: i["date"], reverse=True)


def page(it):
    return it.get("external") or f"{SITE}/research.html?id={it['id']}"


def raw(it):
    return f"https://hackmd.io/{it['hackmd']}/download" if it.get("hackmd") else page(it)


L = [
    "# rwxLabs",
    "",
    "> rwxLabs (Research · Worldbuilding · Execution) is an independent lab operated by Sun Flora Collective (OPC) Pvt. Ltd. "
    "Writeups by Rashmi V Abbigeri on grants data, governance, ecosystems and open source.",
    "",
    "Writeups are written on HackMD; each link below points to raw markdown.",
    "",
    "## Writeups",
]
L += [f"- [{it['title']}]({raw(it)}) ({it['date'][:7]}): {it['summary']}" for it in items]
L += ["", "## Optional", "- Contact: hello@rwxlabs.com", ""]
(ROOT / "llms.txt").write_text("\n".join(L))


def rfc822(d):
    return datetime.strptime(d, "%Y-%m-%d").replace(tzinfo=timezone.utc).strftime("%a, %d %b %Y 00:00:00 +0000")


R = ['<?xml version="1.0" encoding="UTF-8"?>', '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">', "<channel>",
     "<title>rwxLabs Writeups</title>", f"<link>{SITE}/research.html</link>",
     f'<atom:link href="{SITE}/feed.xml" rel="self" type="application/rss+xml"/>',
     "<description>Writeups from rwxLabs.</description>", "<language>en</language>"]
for it in items:
    R += ["<item>", f"<title>{escape(it['title'])}</title>", f"<link>{escape(page(it))}</link>",
          f'<guid isPermaLink="false">rwxlabs:{escape(it["id"])}</guid>', f"<pubDate>{rfc822(it['date'])}</pubDate>",
          f"<description>{escape(it['summary'])}</description>", "</item>"]
R += ["</channel>", "</rss>", ""]
(ROOT / "feed.xml").write_text("\n".join(R))

urls = [f"{SITE}/", f"{SITE}/research.html"] + [page(i) for i in items if not i.get("external")]
S = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
S += [f"<url><loc>{escape(u)}</loc></url>" for u in urls] + ["</urlset>", ""]
(ROOT / "sitemap.xml").write_text("\n".join(S))
print(f"wrote llms.txt, feed.xml, sitemap.xml ({len(items)} published items)")

if "--sync-hackmd" in sys.argv:
    known = {i.get("hackmd") for i in cat["items"]}
    for user in ("rwxlabs", "torchablazed"):
        with urllib.request.urlopen(f"https://hackmd.io/api/@{user}/overview") as r:
            for n in json.load(r).get("notes", []):
                if n.get("shortId") not in known:
                    print(f"  not listed: @{user}/{n.get('shortId')}  {n.get('title')}")
