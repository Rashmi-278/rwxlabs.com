# Governance due diligence for institutions

###### rwxLabs Research · Governance · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication.*

**Audience:** Ethereum Institutional, Enterprise Ethereum Alliance, and institutional risk teams integrating with DeFi protocols, L2s or DAO-governed infrastructure.

**Short version:** When an institution builds on a protocol, it inherits that protocol's governance. Upgrade keys, parameter votes, treasury decisions and emergency powers are all counterparty risk. Few institutional due-diligence templates cover this well. Here is a practical checklist, grounded in the DAO standards work at DAOstar.

---

## Governance is a counterparty

Traditional due diligence asks who controls a company, how decisions are made, and what happens in an emergency. For onchain protocols the same questions apply, but the answers are spread across contracts, forums, multisigs and token distributions. The risk is concrete: a governance vote can change fees, collateral parameters, upgrade logic or treasury policy that an institution's product depends on.

## The checklist

**1. Identity and discoverability**
- Does the organization publish a **daoURI** (EIP-4824) describing its name, members, proposals, activity, contracts and governance documents?
- Is there a legal wrapper? In which jurisdiction? What does it control, and what does it not?

**2. Upgrade and emergency powers**
- Which contracts are upgradeable, and by whom?
- Is there a security council or emergency multisig? Who sits on it, what is the threshold, and is there a timelock?
- Has emergency power been used before? Was it disclosed?

**3. Decision-making concentration**
- What share of voting power do the top 10 holders or delegates control?
- What are turnout and quorum history? Could a small coalition pass a proposal?
- Are delegates compensated, and do they disclose conflicts?

**4. Treasury and spending**
- How large is the treasury, in what assets, and who can move it?
- Is grant and contributor spending published in a standard format (for example, DAOIP-5)?
- Has the organization run a [retro](./07-retro-analysis-as-accountability.md) or published an audit of its spending?

**5. Constitution and process**
- Is there a written constitution or governance charter? (MetaGov's [Constitutions of Web3](https://constitutions.metagov.org/) archive is a good comparison set.)
- How is the constitution amended? How are disputes resolved?

**6. Change monitoring**
- Can the institution subscribe to proposal and execution events?
- What notice period exists between a vote passing and taking effect?

## Scoring it

Score each section Green, Amber or Red, with the evidence linked. Two Reds in sections 2–3 should block integration until there's a mitigating control, such as a timelock long enough to exit or contractual commitments from the legal wrapper.

## Why standards make this cheaper

Most of this checklist is slow today because the information isn't in one place. Standards fix that:

- **EIP-4824** gives every DAO a single discoverable descriptor.
- **DAOIP-5** makes treasury grant spending comparable.
- **Attestations** (such as DAOIP-3, used by the Stellar Development Foundation to link the foundation and the Stellar Community Fund) make the relationship between legal entities and onchain decision-makers explicit.

Institutional bodies that endorse these standards reduce the due-diligence cost for every member institution at once.

## Where rwxLabs fits

rwxLabs' founder has been research engineer and tech lead at DAOstar (MetaGov) since 2023, working on EIP-4824 adoption and DAOIP-5, and previously built governance tooling on the Boardroom Governance SDK. We run governance reviews using this checklist and publish the method with the result.

---

**Sources:** [Governance on StarkNet](https://hackmd.io/@torchablazed/rJe8739Np) · [Stellar Development Foundation DAOIP-5 adoption](https://hackmd.io/@torchablazed/Sk5hSYqgkl) · [State of Governance and Funding Models talk](https://hackmd.io/@torchablazed/BJRe_58Kfe) · [EIP-4824](https://eips.ethereum.org/EIPS/eip-4824)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
