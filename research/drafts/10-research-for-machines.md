# Research for machines

###### rwxLabs Research · Data Infrastructure · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication.*

**Audience:** every research-producing organization in the Ethereum ecosystem, including Ethlabs, the Ethereum Foundation, Ethereum Institutional, Golem Foundation and the EEA, and the institutional research teams who read their work.

**Short version:** Institutions increasingly read research *through* AI systems: internal assistants, research agents, retrieval pipelines. Research that lives only as a PDF or a blog post is invisible to those systems, or gets misquoted. Ethereum's research organizations should publish for machines as well as for people. It's cheap, and it decides whose research shapes institutional decisions.

---

## The shift

When an analyst at a bank asks an internal assistant "how concentrated is grant funding in ecosystem X?", the answer comes from whatever the system can retrieve and parse. If our research isn't retrievable, cleanly structured and citable, the answer will come from someone else's research, or from nowhere.

## Five layers of machine-readability

**1. Raw text at a stable URL.**
Every article should be available as plain markdown. HackMD already does this: any note has a `/download` endpoint that returns raw markdown. rwxLabs links these directly.

**2. A catalog.**
A single JSON file listing every piece of research: title, date, summary, topics, intended audience, canonical URL and raw URL. Ours is at [`/research.json`](https://rwxlabs.com/research.json).

**3. An `llms.txt`.**
A short markdown file at the site root that tells language models what the organization does and where the important material is. Ours is at [`/llms.txt`](https://rwxlabs.com/llms.txt).

**4. Structured data and citations.**
Schema.org `ScholarlyArticle` metadata and a ready-made citation on every article, so retrieval systems attribute correctly.

**5. Queryable datasets.**
For data-heavy research, go beyond documents: expose the dataset through an API or an **MCP server**, so AI assistants can query it directly instead of paraphrasing a chart. The [ENS Retro](https://ensretro.metagov.org/) does this with mcp.ensretro.metagov.org. The OpenGrants data layer serves DAOIP-5 grants data through an API at grants.daostar.org.

## Standards help here too

Data standards and machine-readability are the same project. DAOIP-5 is JSON-LD *because* grants data should be linkable and machine-parseable. EIP-4824 gives AI systems a single descriptor to read when they need to know what a DAO is. Research built on standardized data is much easier for machines to use correctly.

## Recommendations for research organizations

1. Publish markdown alongside every PDF or post.
2. Maintain a JSON catalog and an `llms.txt`.
3. Label each piece with its **intended audience** and **status** (draft, reviewed, superseded), so systems don't present a draft as a conclusion.
4. Expose datasets through an API or MCP endpoint, with clear licensing.
5. Disclose AI assistance in authorship, as rwxLabs does on every draft.

## What rwxLabs is doing

This site is our implementation. The research tab renders HackMD notes in place. Every article has a raw-markdown link and a citation. `research.json` and `llms.txt` are published at the root. A research MCP server, so assistants can search and cite rwxLabs research directly, is the next step.

---

**Sources:** [Introducing OpenGrants](https://hackmd.io/@torchablazed/rJk0y_Avll) · [ENS Retro](https://ensretro.metagov.org/) · [llms.txt proposal](https://llmstxt.org/)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
