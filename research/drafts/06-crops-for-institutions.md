# CROPS for institutions

###### rwxLabs Research · CROPS · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication.*

**Audience:** Ethlabs, the Ethereum Foundation, Ethereum Institutional, and institutional risk and architecture teams.

**Short version:** Censorship resistance, open source, privacy and security (CROPS) are usually presented as Ethereum's *values*. For institutions they are better understood as **risk controls**, and that framing is how they will get funded, adopted and defended inside banks and asset managers.

---

## The translation problem

When Ethereum advocates talk to institutions, CROPS often sounds like ideology. When institutions talk back, they ask about operational resilience, vendor lock-in, data protection and attack surface. These are the same properties in a different vocabulary. Ecosystem organizations that can translate between the two will get much further.

## Each property, as a control

| CROPS property | Institutional risk it addresses | What to evidence |
|---|---|---|
| **Censorship resistance** | Counterparty and platform risk: a single intermediary can refuse, delay or reverse a transaction | Inclusion guarantees, validator and builder diversity, inclusion-list designs |
| **Open source** | Vendor lock-in and key-person risk: you can audit, fork, or switch vendors | Licenses (truly OSI-approved, not "source-available"), multiple independent client teams |
| **Privacy** | Data protection, client confidentiality, front-running and information leakage | Confidential transfer designs, selective disclosure, auditor access paths |
| **Security** | Loss of funds, operational outage | Formal verification, audit history, bug bounties, incident record |

## Where institutions can be misled

Our [FOSS research for CROPS](https://hackmd.io/@rwxlabs/HkCAqljMMl) collects the strongest criticism from free-software practitioners. Two points matter directly to institutions:

- **"Open source" labels are sometimes wrong.** Source-available licenses, such as Business Source License code labeled "open source", don't give you the right to fork and operate. Risk teams should check licenses, not marketing copy.
- **"Decentralized" can hide central chokepoints.** Moxie Marlinspike's 2022 critique showed how dApps leaned on a few RPC and API providers. That dependency is now an explicit roadmap item (light clients, peer-to-peer data networks, statelessness), but an institution's *own* deployment can still re-create it. Running through one RPC provider is a concentration risk whether or not the chain is decentralized.

## A CROPS checklist for an institutional deployment

1. Do we depend on a single RPC, indexer, sequencer or relayer? What is the fallback?
2. Are the critical components under OSI-approved licenses? Could we run them ourselves?
3. What does a counterparty learn from our onchain activity? Is that acceptable to our compliance team *and* our trading desk?
4. Can a third party censor or delay our transactions? Under what conditions? How would we detect it?
5. What is the security track record of each contract and client we rely on?

An institution that can answer these five questions has done CROPS due diligence, whether or not it ever uses the acronym.

## Why this matters for Ethereum's institutional push

Competing ecosystems pitch speed and convenience. Ethereum's durable advantage is that it can offer properties institutions otherwise buy from intermediaries: resilience, auditability, and neutrality. Framing CROPS as risk controls turns values into a procurement argument. We think organizations like Ethlabs (R&D) and Ethereum Institutional (outreach) should share one vocabulary for it.

## What we're doing

rwxLabs is building CROPS stewardship research for the Ethereum ecosystem: what the critics say, what has actually been fixed, and how to explain the rest to institutions. We also run CROPS-themed community programming through the Ethereum Bengaluru community hub.

---

**Sources:** [Understanding FOSS community, for CROPS](https://hackmd.io/@rwxlabs/HkCAqljMMl) · [Ethereum Bengaluru Community Hub programming](https://hackmd.io/@torchablazed/BJ_3G98CZx)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
