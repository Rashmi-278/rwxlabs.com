# Grant data is institutional intelligence

###### rwxLabs Research · Grants Data · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication.*

**Audience:** Ethereum Institutional (Institutional Intelligence), the Ethereum Foundation's enterprise team, and ecosystem treasuries.

**Short version:** Grant programs are the oldest continuous record of how an ecosystem spends money to grow. Read as a dataset, a grant program answers questions institutions already ask about any market: where capital goes, how much reaches the builders, who builds again, and how long work takes to ship. Ecosystems that can't show this data are asking institutions to take their growth on faith.

---

## Why institutions should care about grants

Institutional due diligence on a blockchain ecosystem usually covers price, liquidity, TVL, fees and validator decentralization. All of these are *outputs*. Grant funding is one of the few *inputs* we can measure: it shows the ecosystem deliberately paying for the infrastructure, tooling and applications it expects to need.

So a grant program is an ecosystem's R&D ledger. An institution evaluating a chain for tokenization, payments or treasury exposure should ask for it the same way it would ask a company for R&D spend.

## A worked example: the Stellar Community Fund

As part of the OpenGrants work at DAOstar (MetaGov), we indexed the Stellar Community Fund's (SCF) raw grant data and normalized it into the DAOIP-5 standard. The full report is [on HackMD](https://hackmd.io/@torchablazed/H1q6ZQhVWg). Headline figures, as indexed on 11 Nov 2025:

| Signal | Value | What an institution reads from it |
|---|---|---|
| Program duration | 2019–2025, 39 completed rounds | Continuity: the program survived multiple market cycles |
| Applications funded | 730 of 734 with payment data | Data completeness: the record is close to whole |
| Projects | 537 unique projects | Breadth of the builder base |
| Disbursement rate | 88.6% of awarded funds paid | Operational execution: awards turn into payments |
| Repeat funding | 26.6% of projects funded more than once | Retention: builders come back, and the program backs follow-on work |
| Milestone completion | 8.2% completed all milestones; 83% in early stages | Delivery lag: much of the recent work is still in progress |
| Largest category | Applications, $21.19M (~42%) | Strategy: the fund prioritises end-user products over infrastructure |

None of these numbers is a verdict. Taken together, though, they describe a program that pays reliably, keeps its builders, and has bet on the application layer. These are the qualitative claims ecosystem marketing usually makes without evidence.

## Five questions to ask any ecosystem's grant data

1. **Does money actually move?** Compare awarded amounts with paid amounts, by round. A falling payment rate in recent rounds is normal (milestones are pending). A falling rate in *old* rounds is a red flag.
2. **Who comes back?** Repeat funding is a proxy for builder retention, which is one of the hardest things to fake.
3. **How concentrated is it?** If a handful of projects take most of the funding, the ecosystem's growth story depends on them. In SCF's case the top five projects each received between $270K and $355K.
4. **What is the strategy, in dollars?** Category splits reveal what a foundation *actually* prioritises, which is often different from its blog posts.
5. **Can it be compared?** A single program's numbers mean little until you can set them beside another program's. This is the problem a shared standard solves.

## The comparability problem

Every grant program stores data differently: Airtable, spreadsheets, custom APIs, third-party grant managers. Projects are not uniquely identified across programs. Payment data often lives somewhere else entirely. That's why OpenGrants converts each program's data into **DAOIP-5**, a JSON-LD metadata standard for grant systems, grant pools, projects and applications. Once data is in one format, cross-ecosystem questions become queries rather than research projects. To date, OpenGrants has ingested or structured data from Giveth, Octant, Stellar Community Fund, Celo Public Goods, Arbitrum STIP-1 and Optimism (partial).

## What we recommend

- **For institutional intelligence teams:** treat standardized grant data as a recurring input to ecosystem reports, alongside onchain activity. Ask ecosystems for DAOIP-5-formatted data. It costs them little and makes your comparison work repeatable.
- **For foundations and treasuries:** publish grant data in a standard format, even partially. The [privacy ladder](./02-a-privacy-ladder-for-funding-data.md) shows how to do this without exposing sensitive fields.
- **For researchers:** build the comparisons. The data layer exists. What's still missing is analysis that institutions can cite.

---

**Sources:** [SCF Grant System Analysis Report](https://hackmd.io/@torchablazed/H1q6ZQhVWg) · [Introducing OpenGrants](https://hackmd.io/@torchablazed/rJk0y_Avll) · [DAOIP-5 specification](https://github.com/metagov/daostar/blob/main/DAOIPs/daoip-5.md)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
