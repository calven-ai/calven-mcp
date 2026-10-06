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

## Advanced prompts

### Size the team from the account base

```
Size how many reps each segment needs from the accounts we hold, the deals they produce and how long a deal takes, instead of from last year's headcount. Use Calven MCP for the in-profile accounts and our real conversion and cycle by segment.

FILL IN
- Bookings target: [next year's target by segment]
- Rep capacity: [deals a rep can run at once, quota, ramp months]
- Coverage rule: [accounts per rep you'd accept, or write "propose one"]

CONTEXT
Territories get drawn around last year's reps. The real question is how much selling each segment can absorb, and whether we have the accounts to feed it.

FROM CALVEN
- In-profile accounts per segment and region, by ICP tier, and how many have had a deal.
- Win rate, average deal size and sales cycle per segment from the ICP dashboard, with n.
- The share of open pipeline in profile per region.

MODEL
- Per segment: bookings target over deal size gives deals needed; over win rate gives opportunities; with the cycle, gives concurrent opportunities. Divide by rep capacity for reps needed.
- Check against the account base: opportunities needed against untouched in-profile accounts. Flag where we'd run out of accounts.
- Treat it as a queue: if opportunities arrive faster than reps can work them, show the wait and what it does to the cycle.
- If you can run code, build it as a spreadsheet with the inputs on one tab.

OUTPUT
A table per segment (deals needed, opportunities, concurrent load, reps needed, accounts available, verdict), which segments are short on accounts and which are short on reps, and the hiring split that follows.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't assume a never-worked account converts at the segment rate; state the rate you use.
```

### Test the territories for fairness

```
Simulate each proposed territory's attainable bookings and check that no rep was handed a quota their accounts can't reach. Use Calven MCP for the accounts in each territory and how deals like theirs convert.

FILL IN
- Territories: [attach the territory map: account names or rules per rep]
- Quotas: [quota per rep]

CONTEXT
Reps forgive a hard quota. They don't forgive one that's harder than the next rep's. I want the fairness check done before the plan goes out.

FROM CALVEN
- For each territory's accounts: ICP tier, segment, region, size, triggers, and open or past deals.
- Win rate and average deal size per segment and tier from the ICP dashboard, with n.

SIMULATE
- For each territory, estimate attainable bookings: accounts times the chance of a deal times win rate times deal size, by tier.
- Add variance. If you can run code, run 5,000 draws per territory and give P10, P50 and P90.
- Compute each rep's chance of reaching quota and compare across reps.
- Find the account swaps between territories that bring those chances closest together.

OUTPUT
A table (rep, accounts by tier, P50 attainable, quota, chance of reaching it), the fairness spread, the swaps that close it, and the one territory that needs a quota change.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The chance of opening a deal at an account is your assumption; state it and show what happens if it halves.
```

## Ad hoc questions

- What is our win rate in EMEA versus NA, with samples?
- Which size band closes fastest?
- How many unworked Tier 1 accounts do we hold in [industry]?
- Which segment outside the ICP has a win rate above our baseline?
- What is the average deal size for Tier 1 versus Tier 3 accounts?
- Which region has the most open pipeline out of profile?
- Which attributes predict a win most strongly?
- How many in-profile accounts have an open deal?
- Which region has the most in-profile accounts that have never had a deal?
- Which industry has the shortest sales cycle?
- Which account trigger shows up most on accounts we've won?
- Which competitor shows up most in each region's deals?
- How many Tier 1 accounts in EMEA have an open deal?
- Which size band has the highest win rate, with n?
- Which Tier 2 industry wins like a Tier 1?
