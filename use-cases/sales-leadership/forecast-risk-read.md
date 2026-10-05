# Forecast risk read

**Team:** Sales leadership · also revenue operations, finance
**Impact:** High. The forecast call commits a number; a risk read that scores each late-stage deal against what has sunk deals like it (competitor, segment, threading, loss reason) gives the leader a reason to move a deal out of commit before the quarter does.
**Prerequisites:** CRM connected (deals, contacts), win/loss surveys running (deal drivers, loss patterns). Better with competitors tracked (win rates per competitor) and personas approved (buying-group roles).

## What the team is trying to do

Decide which late-stage deals belong in commit, best case or neither, with a reason. Done means every deal in commit has been checked against the patterns that decided similar deals and the leader can say why it stays. Without the company's own loss patterns the call is each rep's confidence, averaged.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the late-stage deals | Commit and best case by rep | Deals at the late stages with amount band, close date, competitor, fit, contact roles | CRM deals |
| 2 | Score the risk | Pattern each deal against what sinks deals like it | Win rate by competitor, segment and persona threading; loss drivers for similar deals | Competitive intelligence, ICP, persona and win/loss dashboards, deal drivers |
| 3 | Read the buyer evidence | What did buyers say in the losses this resembles | The deciding drivers and quotes from similar lost deals | Deal drivers, surveyed deals |
| 4 | Decide | Keep, move, flag | Calven does not help here | |
| 5 | Prepare the finance line | The number and the caveat | The in-profile versus out-of-profile win rate applied as a sanity check | ICP dashboard |
| 6 | Submit | Forecast tool | Calven does not help here | |

## Recommended prompts

### Steps 1 to 3: the risk read

```
Using Calven MCP, give me a risk read on every deal in commit for [period].

CONTEXT
Forecast call is [day]. The commit list is at the bottom (or pull every open deal past [stage] closing in [period]). I want each deal scored against the patterns that decided deals like it.

PULL FROM THE UNIVERSE
- Each deal: stage, amount band, close date, segment, ICP fit tier, competitors, contact roles.
- Win rate by competitor, by segment and by ICP tier, with samples.
- Multi-threaded versus single-threaded win rate and the roles on our won deals.
- The deciding drivers in lost deals from the same segment or against the same competitor, with the buyer's words.

BUILD
- Per deal: a risk level (low, medium, high) with the two patterns that set it, the past loss it most resembles, and what would have to be true for it to close.
- A summary: the deals to move out of commit and why.

OUTPUT
A table sorted by risk, then the three-line summary for the call.

GROUNDING
Use only CRM records, dashboards and deal drivers in the Universe. Cite every rate with n and window. Do not estimate close probability as a number; give the level and the patterns.

[paste the commit list, or name the stage and period]
```

### Step 2: one deal

```
Using Calven MCP, should [deal] be in commit?

PULL FROM THE UNIVERSE
- The deal record: stage, amount band, competitor, fit tier, contact roles, price and product feedback.
- Our win rate against that competitor in that segment, and the single- versus multi-threaded rate.
- The deciding drivers in the last five losses that look like this deal.

OUTPUT
Keep or move, the two facts that decide it, and the one question for the rep.

GROUNDING
Use only the Universe, cited with samples. Say when the sample is too thin to judge.

[name the deal]
```

### Step 5: the sanity check for finance

```
Using Calven MCP, sanity-check our [period] commit of [amount].

PULL FROM THE UNIVERSE
- Open pipeline in the period by ICP tier and segment.
- Win rate for in-profile and out-of-profile deals, and by segment, with samples.
- Average cycle length for in-profile deals.

BUILD
- What the open pipeline is worth at the in-profile and out-of-profile rates, and how that compares to the commit.
- Deals whose close date is inside our average cycle from their open date.

OUTPUT
Five lines with figures and samples, and the caveat to give finance.

GROUNDING
Use only dashboard figures in the Universe, cited. This is a sanity check on patterns, not a forecast model; say so.

[name the period and the commit]
```

## Ad hoc questions

- What is our win rate against [competitor] in [segment], and the sample?
- Which commit deals are single-threaded?
- Which commit deals are out of profile?
- What decided the last five deals we lost to [competitor]?
- Which late-stage deals have "More expensive" in price feedback, and how often do those close?
- What is our in-profile win rate versus out of profile this year?
- Which deals have been open longer than our average cycle?
- Which product gap appears on commit deals and how many deals has it cost?
- Do deals with an exec sponsor on record close more often? Sample?
- Which lost deal most resembles [deal]?

## Good practice

- Ask for levels and patterns, not probabilities. The dashboards hold rates, not per-deal odds.
- Paste the commit list if the forecast tool holds categories the CRM mirror does not.
- Ask for the question for the rep on every high-risk deal. The read is for the call, not instead of it.
- Rerun on the same list the day before the call; contact roles and stages move.
- Keep the finance sanity check to the dashboard rates. The forecast model stays in the forecast tool.

## Not covered today

- Forecast categories, commit history, quota and attainment.
- A per-deal close probability. Calven holds patterns and rates, not a scoring model.
- Writing the forecast anywhere.
