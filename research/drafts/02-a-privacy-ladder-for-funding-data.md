# A privacy ladder for funding data

###### rwxLabs Research · Grants Data · Privacy · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication.*

**Audience:** Golem Foundation / Octant, Ethereum Institutional (Standards & Best Practices), and any foundation that funds work but can't publish everything.

**Short version:** Most funders can't make all their grant data public, and the reasons are legitimate. Treating transparency as all-or-nothing means the ecosystem only learns from the few organizations brave enough to publish everything. A tiered privacy model lets every funder contribute *something* to ecosystem-wide analysis.

---

## The problem with "just publish it"

Stellar, Optimism, Arbitrum and Gitcoin publish their grant data, and the ecosystem is better for it. Many other funders don't, and it's rarely out of bad faith. Through standardization work at DAOstar we kept hitting the same barriers:

- **Anchoring bias:** published amounts become the default ask in future rounds.
- **Political pressure:** stakeholders contest individual decisions.
- **Competitive exposure:** early disclosure tips off strategy.
- **Recipient safety:** some grantees, for example privacy tooling or projects in hostile jurisdictions, are put at risk by being named.

Institutions face the same constraints in their own reporting. Confidentiality is the default in traditional finance, and Ethereum's institutional pitch increasingly leans on privacy. A data standard that only works under full disclosure won't be adopted by the organizations institutions care most about.

## Five facts, seven levels

Any funding event reduces to five facts: **who** funded, **whom**, **how much**, **when**, and **in what category**. Each can be public or protected independently. That gives a ladder:

| Level | Grantor | Grantee | Amount | Time | Category | Typical use |
|---|---|---|---|---|---|---|
| 0 | ✅ | ✅ | ✅ | ✅ | ✅ | Full transparency |
| 1 | 🛡️ | ✅ | ✅ | ✅ | ✅ | Anonymous funders |
| 2 | ✅ | 🛡️ | ✅ | ✅ | ✅ | Protected recipients |
| 3 | ✅ | ✅ | 🛡️ | ✅ | ✅ | Confidential amounts |
| 4 | 🛡️ | 🛡️ | ✅ | ✅ | ✅ | Anonymous parties |
| 5 | 🛡️ | 🛡️ | 🛡️ | ✅ | ✅ | Timing patterns only |
| 6 | 🛡️ | 🛡️ | 🛡️ | 🛡️ | ✅ | Category insight only |

✅ public · 🛡️ protected

Even Level 6 is useful. If every funder reported only the *category* of each grant, the ecosystem could see, for instance, privacy tooling grants rising from a small share to a much larger one within a quarter after a regulatory signal. That trend is valuable to founders, investors, researchers and policymakers alike. No individual grant has to be exposed to see it.

## How it maps to standards

The ladder slots into existing infrastructure rather than replacing it:

- **DAOIP-5** already defines the five facts as fields across grant systems, pools, projects and applications. A privacy level is metadata about which fields are populated, which fits the standard's `extensions` mechanism.
- **Aggregation** happens over whatever is public at each level, so analysts can always state which share of the ecosystem a given insight covers.
- **Privacy-preserving computation** (commitments, attestations, or MPC-style aggregation) is the natural next step: protected fields can still contribute to totals without being revealed. This is research we want to do with partners who have real data and real constraints.

## Why Octant is a good test case

Golem Foundation's Octant directs staking rewards to public goods through community allocation, and it already exposes data through an API. OpenGrants ingests it in DAOIP-5 form. Programs like this, where the allocation is public by design but the people allocating may want privacy, are exactly where a tiered model is worth testing: which fields are public by default, which are protected, and what aggregate insight still survives.

## What we recommend

1. **Funders:** declare a privacy level per program and publish at that level, instead of publishing nothing.
2. **Standards bodies and institutional groups:** adopt the five-fact model as the minimum vocabulary for funding disclosures.
3. **Analysts:** always report coverage. "Category X grew to 15% *of funding reported at Level ≤ 6*" is honest; "of all funding" usually isn't.

---

**Sources:** [Building Standards for Web3 Grants: Privacy, Transparency, and Lessons Learnt](https://hackmd.io/@torchablazed/S1aR6XELgg) · [DAOIP-5 Extensions brief](https://hackmd.io/@torchablazed/Bkja1q9Slg) · [Introducing OpenGrants](https://hackmd.io/@torchablazed/rJk0y_Avll)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
