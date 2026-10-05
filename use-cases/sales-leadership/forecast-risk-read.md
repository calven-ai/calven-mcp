# Forecast risk read


The forecast call is this week, and you need to decide which late-stage deals belong in commit, best case or neither. You walk in able to say why each commit deal stays, because each one was checked against the patterns that decided similar deals. Calven brings the company's own loss patterns, so the call isn't each rep's confidence, averaged.

## Prompts

### Score every commit deal for risk

```
Using Calven MCP, give me a risk read on every deal in commit for the period below.

FILL IN
- Period: [period, e.g. this quarter]
- Forecast call: [day of the forecast call]
- Commit list: [paste the commit list, or leave blank to use the stage]
- Stage: [stage, used only when the commit list is blank]

CONTEXT
Forecast call on the day above. Use the commit list, or if it is blank, pull every open deal past the stage closing in the period. I want each deal scored against the patterns that decided deals like it.

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
```

### Decide whether one deal stays in commit

```
Using Calven MCP, should the deal below be in commit?

FILL IN
- Deal: [deal]

PULL FROM THE UNIVERSE
- The deal record: stage, amount band, competitor, fit tier, contact roles, price and product feedback.
- Our win rate against that competitor in that segment, and the single- versus multi-threaded rate.
- The deciding drivers in the last five losses that look like this deal.

OUTPUT
Keep or move, the two facts that decide it, and the one question for the rep.

GROUNDING
Use only the Universe, cited with samples. Say when the sample is too thin to judge.
```

### Sanity-check the commit for finance

```
Using Calven MCP, sanity-check our commit for the period below.

FILL IN
- Period: [period, e.g. this quarter]
- Commit: [commit amount]

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
