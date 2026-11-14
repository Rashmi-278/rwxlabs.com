# Retro analysis as accountability

###### rwxLabs Research · Governance · Data · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication. Findings of the ENS Retro itself should be cited from ensretro.metagov.org, not from this note.*

**Audience:** DAOs and foundations with large treasuries, and institutions that hold governance tokens or depend on DAO-governed protocols.

**Short version:** A *retro*, a structured look back at how an organization governed and spent, is how a DAO earns trust from people outside it. Institutions already expect this from any entity they engage: audited accounts, governance reviews, post-mortems. Our methodology from the ENS Retro shows how to make one reproducible.

---

## Why retros matter to institutions

An institution evaluating a DAO-governed protocol is implicitly asking: *will this organization make sound decisions with shared resources?* Forum posts and votes are public, but scattered. A retro turns them into a body of evidence that someone can actually review: who decided, what was spent, what it achieved, and what changed as a result.

## How we approached the ENS Retro

From February to April 2026, rwxLabs' founder was lead data analyst on the [ENS Retro analysis](https://ensretro.metagov.org/) with MetaGov. The design principles, not the findings, are what transfer to other organizations:

**1. Separate the data from the interpretation.** Raw data pipelines are published on their own ([source.ensretro.metagov.org](https://source.ensretro.metagov.org)), with the research code base open on GitHub ([metagov/ENS-Retro-Data](https://github.com/metagov/ENS-Retro-Data)). Anyone can challenge an interpretation without having to challenge the data.

**2. Make it queryable, not just readable.** A dashboard serves human readers. An **MCP server** ([mcp.ensretro.metagov.org](https://mcp.ensretro.metagov.org)) lets AI assistants and analysts query the same dataset directly. This is how institutions' research teams increasingly work, so a retro should be available on their terms.

**3. Include stakeholders, not only transactions.** Onchain records show *what* happened. Stakeholder input shows *why*, and where participants believe the process failed. A retro needs both.

**4. Publish the method.** Every metric should be reproducible from the published pipeline. If a number can't be recomputed, it's an opinion.

## A retro template for any treasury

| Section | Question | Typical sources |
|---|---|---|
| Mandate | What was the organization supposed to do in this period? | Constitution, budgets, strategy posts |
| Spending | Where did the money go, by program and recipient? | Treasury transactions, grant data (ideally DAOIP-5) |
| Decision-making | Who proposed, who voted, how concentrated was power? | Governance contracts, Snapshot and Tally, delegate data |
| Delivery | What was delivered against what was promised? | Milestones, reports, repositories |
| Stakeholder view | Where do participants see friction or failure? | Surveys, interviews, forum analysis |
| Recommendations | What should change in the next period? | Synthesis |

## What institutions can ask for

- **A periodic retro** from any DAO whose governance they rely on, with open data and published methods.
- **Machine-readable access** (API or MCP) to the retro dataset, so it fits into their own monitoring.
- **Governance metadata** published via EIP-4824 (daoURI), so the basic facts of who the organization is and where its governance happens are discoverable without forum archaeology.

## What we offer

rwxLabs designs and runs reproducible retros: data pipelines, dashboards, AI-accessible endpoints, and stakeholder analysis. The ENS Retro is our reference implementation.

---

**Sources:** [ENS Retro](https://ensretro.metagov.org/) · [ENS-Retro-Data repository](https://github.com/metagov/ENS-Retro-Data) · [State of Governance and Funding Models talk](https://hackmd.io/@torchablazed/BJRe_58Kfe)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
