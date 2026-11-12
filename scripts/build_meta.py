#!/usr/bin/env python3
"""Generate llms.txt, feed.xml and sitemap.xml from research.json.

Run after editing research.json:   python3 scripts/build_meta.py
Optional: --sync-hackmd lists notes on the HackMD profiles that are not yet in research.json.
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


def page(it):
    if it.get("external"):
        return it["external"]
    return f"{SITE}/research.html?id={it['id']}"


def raw(it):
    if it.get("hackmd"):
        return f"https://hackmd.io/{it['hackmd']}/download"
    if it.get("local"):
        return f"{SITE}/{it['local']}"
    return None


def canonical(it):
    if it.get("hackmd"):
        return f"https://hackmd.io/@{it['account']}/{it['hackmd']}"
    return page(it)


items = sorted(cat["items"], key=lambda i: i["date"], reverse=True)
inst = cat["institutions"]

# ---- llms.txt (https://llmstxt.org) ----
L = [
    "# rwxLabs",
    "",
    "> rwxLabs (Research · Worldbuilding · Execution) is an independent lab, operated by Sun Flora Collective (OPC) Pvt. Ltd., "
    "publishing research on grants data and standards (DAOIP-5, EIP-4824), DAO governance, ecosystem evaluation and CROPS "
    "(censorship resistance, open source, privacy, security) for Ethereum institutions. Founder and lead researcher: Rashmi V Abbigeri.",
    "",
    "Research is written in the open on HackMD (https://hackmd.io/@rwxlabs, https://hackmd.io/@torchablazed). "
    "Every item below links to raw markdown suitable for retrieval. Items marked [draft] are unreviewed and should not be quoted as conclusions. "
    f"The full machine-readable catalog is {SITE}/research.json.",
    "",
    "## Institutional series",
]
for it in items:
    if it["status"] == "draft":
        fors = ", ".join(inst[k]["name"] for k in it.get("for", []) if k in inst)
        L.append(f"- [{it['title']}]({raw(it)}) [draft]: {it['summary']}" + (f" For: {fors}." if fors else ""))
L += ["", "## Published research"]
for it in items:
    if it["status"] != "draft":
        L.append(f"- [{it['title']}]({raw(it) or page(it)}) ({it['date'][:7]}): {it['summary']}")
L += [
    "",
    "## About",
    f"- [Track record]({SITE}/work.html): engagements, talks and hackathon builds since 2020",
    f"- [For institutions]({SITE}/institutions.html): research mapped to Golem Foundation, Ethlabs, Ethereum Institutional, EF Enterprise and the EEA",
    "",
    "## Optional",
    "- [DAOIP-5 specification](https://github.com/metagov/daostar/blob/main/DAOIPs/daoip-5.md)",
    "- [EIP-4824](https://eips.ethereum.org/EIPS/eip-4824)",
    "- Contact: hello@rwxlabs.com",
    "",
]
(ROOT / "llms.txt").write_text("\n".join(L))

# ---- RSS ----
def rfc822(d):
    return datetime.strptime(d, "%Y-%m-%d").replace(tzinfo=timezone.utc).strftime("%a, %d %b %Y 00:00:00 +0000")

R = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    "<title>rwxLabs Research</title>",
    f"<link>{SITE}/research.html</link>",
    f'<atom:link href="{SITE}/feed.xml" rel="self" type="application/rss+xml"/>',
    "<description>Research on grants data, governance, ecosystems and CROPS for Ethereum institutions.</description>",
    "<language>en</language>",
]
for it in items:
    title = it["title"] + (" [draft]" if it["status"] == "draft" else "")
    R += [
        "<item>",
        f"<title>{escape(title)}</title>",
        f"<link>{escape(page(it))}</link>",
        f'<guid isPermaLink="false">rwxlabs:{escape(it["id"])}</guid>',
        f"<pubDate>{rfc822(it['date'])}</pubDate>",
        f"<description>{escape(it['summary'])}</description>",
        *[f"<category>{escape(cat['tracks'][t])}</category>" for t in it["tracks"]],
        "</item>",
    ]
R += ["</channel>", "</rss>", ""]
(ROOT / "feed.xml").write_text("\n".join(R))

# ---- sitemap ----
urls = [f"{SITE}/", f"{SITE}/research.html", f"{SITE}/institutions.html", f"{SITE}/work.html"]
urls += [page(i) for i in items if not i.get("external")]
S = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
S += [f"<url><loc>{escape(u)}</loc></url>" for u in urls]
S += ["</urlset>", ""]
(ROOT / "sitemap.xml").write_text("\n".join(S))

print(f"wrote llms.txt, feed.xml, sitemap.xml ({len(items)} items)")

if "--sync-hackmd" in sys.argv:
    known = {i.get("hackmd") for i in items}
    for user in ("rwxlabs", "torchablazed"):
        with urllib.request.urlopen(f"https://hackmd.io/api/@{user}/overview") as r:
            data = json.load(r)
        for n in data.get("notes", []):
            if n.get("shortId") not in known:
                print(f"  not in catalog: @{user}/{n.get('shortId')}  {n.get('title')}")
