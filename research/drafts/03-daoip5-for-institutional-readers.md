# DAOIP-5 for institutional readers

###### rwxLabs Research · Standards · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication.*

**Audience:** Enterprise Ethereum Alliance, Ethereum Institutional (Standards & Best Practices), and compliance or reporting teams at institutions that fund, or plan to fund, onchain ecosystems.

**Short version:** DAOIP-5 is an open metadata standard for describing grant and funding programs. It was written for Web3 grants, but it describes something institutions do constantly: allocating capital through programs, in rounds, to identified recipients, with payments over time. That makes it a candidate building block for **institutional reporting on ecosystem spending**.

---

## What the standard describes

DAOIP-5 models funding as four linked objects:

- **Grant System:** the organization or mechanism that runs funding (for example, a foundation's grants program).
- **Grant Pool:** a specific round or budget with a theme, timeframe and allocation mechanism.
- **Project:** a recipient, ideally with a persistent identifier across programs.
- **Application / Payout:** the request, the decision, the awarded amount and the payments.

Data is expressed as **JSON-LD**, so it's machine-readable and linkable across sources. An `extensions` field (with `x-` prefixed keys, following the precedent set by OpenAPI) lets each program add its own fields without breaking interoperability. Octant's epoch metadata and KarmaGAP project identifiers are two examples already in use.

## Why it matters beyond grants

Institutions entering Ethereum will fund things: developer programs, ecosystem funds, hackathon prizes, research grants, liquidity incentives. Each creates the same reporting needs:

| Institutional need | DAOIP-5 answer |
|---|---|
| Consistent internal reporting across programs | One schema for every program and round |
| Auditability | Applications link to awards, and awards link to payouts |
| Benchmarking against peers | Shared format allows like-for-like comparison |
| Recipient identity across programs | Project identifiers and extensions (for example, KarmaGAP UIDs) |
| Selective disclosure | Fields can be withheld under a declared privacy level ([see the privacy ladder](./02-a-privacy-ladder-for-funding-data.md)) |

## Adoption so far

Adoption is real but early. The pattern is useful because it shows three ways an organization can participate, at different costs:

1. **API integration:** the program gives API access, and the data layer transforms it continuously (Giveth, Octant).
2. **Data integration:** the program shares CSV or JSON with consent, which is converted and published as static DAOIP-5 files (Stellar Community Fund, Celo).
3. **Native endpoints:** the program serves its own DAOIP-5 endpoint (Questbook).

The Stellar Development Foundation also published a DAOIP-3 attestation linking the foundation, which handles payments, to the Stellar Community Fund, which governs allocation. That's a small but meaningful example of an organization formally stating *who decides* and *who pays*. Institutions need the same separation in their own records.

## Honest limits

- Adoption is held back by cost, not disagreement. Most organizations told us standardized reporting "doesn't make them money" and is "nice to have."
- Project identity across programs is still partly manual matching.
- Outcome and impact fields aren't yet standardized. That is the next frontier, and an area where institutional requirements could usefully shape the spec.

## Where institutional bodies can help

- **Reference it.** Industry best-practice documents can name DAOIP-5 as an acceptable format for ecosystem-funding disclosures.
- **Require it lightly.** Ask funded ecosystems for DAOIP-5 exports as part of partnership reporting.
- **Extend it.** Contribute extension fields for institutional needs, such as jurisdiction, entity type and reporting period, through the open DAOIP process.

---

**Sources:** [DAOIP-5 spec](https://github.com/metagov/daostar/blob/main/DAOIPs/daoip-5.md) · [DAOIP-5 Extensions brief](https://hackmd.io/@torchablazed/Bkja1q9Slg) · [Stellar Development Foundation DAOIP-5 adoption](https://hackmd.io/@torchablazed/Sk5hSYqgkl) · [Introducing OpenGrants](https://hackmd.io/@torchablazed/rJk0y_Avll)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
