# Territory and quota input


RevOps and finance are setting territories and quotas, and your input only lands with numbers. You get a one-page view with samples: which segments and regions convert, how many in-profile accounts sit unworked in each, which deal sizes close and where the ICP should expand. Territory design and routing rules stay with revenue operations; Calven gives you the evidence behind your ask.

## Prompts

### Pull the data for territory and quota input

```
Using Calven MCP, give me the data for my territory and quota input for the year below.

FILL IN
- Year: [year]

CONTEXT
RevOps and finance are building territories. I want to argue from evidence: where we win, where the unworked base is, where the ICP should expand.

PULL FROM THE UNIVERSE
- Win rate, average deal size and cycle by segment, region and deal size band, with samples.
- In-profile accounts (Tier 1 and 2) by segment and region, split into worked (any deal) and never worked.
- The ICP expansion recommendations and the attributes that predict a win.

BUILD
- A table per dimension (segment, region, size band): win rate (n), deal size, unworked in-profile accounts.
- The two segments to add capacity to and the one to reduce, with the figures.
- The expansion candidate worth a pilot territory.

OUTPUT
A one-page input with every figure sourced.

GROUNDING
Dashboard figures only, cited with n and window. Count accounts from the CRM mirror; never derive a win rate from rows.
```

### Count unworked Tier 1 accounts by industry

```
Using Calven MCP, how many Tier 1 accounts in the region below have never had a deal, by industry?

FILL IN
- Region: [region]

PULL FROM THE UNIVERSE
- CRM accounts in the region with Tier 1 fit and no deal on record.

OUTPUT
Counts by industry and the ten largest by employee band.

GROUNDING
CRM mirror only; say if the pipeline category is restricted.
```

### Find where the ICP should expand

```
Using Calven MCP, where does the ICP read say we should expand?

PULL FROM THE UNIVERSE
- The expansion recommendations: segments outside the profile with their win rate, deals and open pipeline.
- The win-rate baselines they are compared against.

OUTPUT
The candidates ranked, with figures and samples, and the one worth a pilot.

GROUNDING
Dashboard figures only, cited. Note which figures ignore the window.
```

## Ad hoc questions

- What is our win rate in EMEA versus NA, with samples?
- Which size band closes fastest?
- How many unworked Tier 1 accounts do we hold in [industry]?
- Which segment outside the ICP has a win rate above our baseline?
- What is the average deal size for Tier 1 versus Tier 3 accounts?
- Which region has the most open pipeline out of profile?
- Which attributes predict a win most strongly?
- How many in-profile accounts have an open deal right now?
