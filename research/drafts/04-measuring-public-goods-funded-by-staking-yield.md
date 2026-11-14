# Measuring public goods funded by staking yield

###### rwxLabs Research · Grants Data · Public Goods · Draft
###### *Written with AI assistance from the author's prior research. To be reviewed and verified by the author before publication. Program specifics should be checked against Octant's current documentation.*

**Audience:** Golem Foundation and the Octant team, and institutions exploring yield-funded giving or ecosystem programs.

**Short version:** Octant is an early, working answer to a question institutions will soon ask: *can the yield on a treasury fund an ecosystem in a way that's accountable?* The mechanism is onchain. Its accountability depends on whether its outcomes can be measured and compared with other ways of funding the same work. Here is a measurement agenda.

---

## Why this model matters to institutions

The institutional thesis for Ethereum increasingly includes holding ETH and earning staking yield. Once treasuries earn yield, a natural next question is whether some of it should flow back into the ecosystem the treasury depends on. Golem Foundation has run this experiment longer than most: Octant directs a share of staking rewards to public goods projects, and the community decides the allocation.

That makes Octant a reference design. If institutions ever run yield-funded ecosystem programs, the first questions will be "what did Octant learn?" and "how does this compare to a traditional grants program?" Both need data in a comparable form.

## What is already in place

Through the OpenGrants data layer (DAOstar / MetaGov), Octant data is ingested via API and expressed in DAOIP-5, the grants metadata standard. Octant-specific details, such as epoch metadata, go in the standard's `extensions` field, so nothing is lost when it's set beside other programs. Giveth, Stellar Community Fund, Celo Public Goods and Arbitrum STIP-1 data live in the same format.

## A measurement agenda

**1. Flow:** How much yield reaches projects per epoch, and how stable is it as staking rates change? Institutions will want to see funding volatility separated out from allocation decisions.

**2. Concentration:** How concentrated is allocation across projects in each epoch, measured with a Herfindahl-style index? Does matching reduce or amplify concentration?

**3. Overlap:** Which Octant-funded projects are also funded by Gitcoin, Optimism Retro Funding, Giveth or others? Overlap isn't bad in itself, but it tells funders whether they are complements or substitutes.

**4. Retention:** What share of projects return across epochs, and how does that compare with repeat funding in long-running programs? Stellar Community Fund, for reference, shows about 26.6% of projects receiving more than one grant.

**5. Outcomes:** For returning projects, what changed between epochs? This is the hardest question and the most valuable one. It needs outcome fields that DAOIP-5 doesn't yet standardize. Octant is a good candidate to help define them.

**6. Participation:** How many allocators take part, and how concentrated is allocation power? This is governance data as much as funding data, and institutional readers will treat it as a proxy for legitimacy.

## What Golem Foundation could do next

- **Publish a standing dataset** in DAOIP-5 after each epoch, so analysts don't need custom integrations.
- **Pair with a comparison study:** the same projects, funded by Octant and by at least one other mechanism, analyzed side by side.
- **Write the institutional explainer:** a short document that frames Octant in the language of treasury management (yield source, allocation policy, governance, reporting). That's the form an institution's investment committee will read.

## Why rwxLabs

The founder of rwxLabs contributed to community and SDK development at Golem Foundation in 2021–22, interviewed the Tutela privacy research team for the Golem Foundation blog, and has since led the grants data standard (DAOIP-5) and the OpenGrants data layer that already indexes Octant. We would like this to become a joint research note.

---

**Sources:** [Introducing OpenGrants](https://hackmd.io/@torchablazed/rJk0y_Avll) · [DAOIP-5 Extensions brief](https://hackmd.io/@torchablazed/Bkja1q9Slg) · [SCF Grant System Analysis](https://hackmd.io/@torchablazed/H1q6ZQhVWg) · [On privacy in Web3: interview with Tutela (Golem Foundation)](https://golem.foundation/2022/02/07/interview-Tutela.html)

*rwxLabs · Research, Worldbuilding, Execution · rwxlabs.com*
