# Territory and quota input

**Team:** Sales leadership · also revenue operations, finance
**Impact:** Medium. Territories and quotas are set once a year and argued about every week; the leader's input lands when it comes with win rate by segment and region, the in-profile account base, and where the ICP is growing.
**Prerequisites:** CRM connected (accounts with fit, deals), ICP approved. Better with win/loss surveys running.

## What the team is trying to do

Give RevOps and finance a grounded view of where the opportunity is: which segments and regions convert, how many in-profile accounts sit unworked in each, which deal sizes close, and where the ICP should expand. Done means a one-page input with numbers and samples, not a wish list. Territory design and routing rules themselves live with revenue operations.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Read last year | Win rate and deal size by segment, region, size band | Win rate by attribute and segment, average deal size, cycle | ICP dashboard, win/loss dashboard |
| 2 | Count the base | In-profile accounts per segment and region, worked or not | Accounts by tier, industry, region, with deal history | CRM accounts, CRM deals |
| 3 | Find the expansion | Segments outside the ICP that convert | ICP expansion recommendations, win rate baselines | ICP dashboard (expand ICP, win predictors) |
| 4 | Weigh capacity | Reps, ramp, coverage | Calven does not help here | |
| 5 | Write the input | One page to RevOps and finance | The numbers assembled with sources | |
| 6 | Set quotas | Capacity model | Calven does not help here | |

## Recommended prompts

### Steps 1 to 3: the territory input

```
Using Calven MCP, give me the data for my territory and quota input for [year].

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

[name the year]
```

### Step 2: the unworked base

```
Using Calven MCP, how many Tier 1 accounts in [region] have never had a deal, by industry?

PULL FROM THE UNIVERSE
- CRM accounts in [region] with Tier 1 fit and no deal on record.

OUTPUT
Counts by industry and the ten largest by employee band.

GROUNDING
CRM mirror only; say if the pipeline category is restricted.

[name the region]
```

### Step 3: where to expand

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

## Good practice

- Argue from three dimensions, not one. Segment, region and size band each tell a different story.
- Ask for worked versus unworked. Capacity goes where the base is untouched.
- Treat expansion figures as current state; the read says which ignore the window.
- Hand the input to RevOps as the page, not as a conclusion. The territory design is theirs.

## Not covered today

- Capacity, ramp, quota math and comp. Those live in the planning model.
- Account ownership and assignment.
- Market size outside the CRM.
