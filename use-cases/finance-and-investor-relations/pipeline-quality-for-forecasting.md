# Pipeline quality for forecasting


You're building a forecast finance can defend, and one blended close rate won't survive a shift in the mix. You get segment-level win rates, the share of pipeline in profile, and the deals that are single-threaded or against a competitor we rarely beat, all called out. Calven gives you the split behind the number so the forecast doesn't miss by however much the mix moved.

## Prompts

### Get win rates to weight the pipeline

```
Using Calven MCP, give me the conversion rates I should use to weight this quarter's pipeline.

FILL IN
- Window: [time window, e.g. last four quarters]
- Product: [product, or leave blank for all]

CONTEXT
I build the revenue forecast. I weight open pipeline by segment and want the win rate per segment from our own history, not a blended number.

PULL FROM THE UNIVERSE
- Win rate by segment, account size, industry and region, with n for each, over the window.
- The attributes that predict a win and the win rate for deals with and without them.
- Win rate against each competitor we meet.

BUILD
- A table: segment, win rate, n, prior-period win rate, the dashboard it came from.
- A second table: attributes that move the win rate up or down, with the lift.
- A note on which segments have too few decided deals to trust.

OUTPUT
The two tables, ready to paste into the model, with sources.

GROUNDING
Use only rates from the Insights dashboards and cite n and the window. Where a segment reports a floor instead of a rate, mark it "sample too small". Never compute a rate from rows yourself.
```

### Flag the deals to discount in the forecast

```
Using Calven MCP, flag the deals in this quarter's pipeline I should discount in the forecast.

FILL IN
- Window: [close window, e.g. this quarter]
- Threshold: [win-rate threshold you treat as a risk]

CONTEXT
I need a deal-by-deal list of risks finance can take into the forecast review with sales.

PULL FROM THE UNIVERSE
- Open deals closing in the window: amount, stage, ICP fit tier, competitors in the deal, contact role and count.
- The share of pipeline in profile and the fit distribution.
- Win rate against each competitor named in those deals.
- Which personas sit on won deals, and which deals are single-threaded.

CHECK
For each open deal, flag: outside the ICP, against a competitor we beat less than the threshold of the time, single-threaded or missing the economic buyer, close date already slipped.

OUTPUT
A table: deal, amount, close date, flags, the evidence for each flag. Sort by amount at risk.

GROUNDING
Use only CRM rows and dashboard rates in the Universe and cite them. If deal amounts or names are withheld by the workspace settings, say so rather than estimating.
```

### Show pipeline coverage by segment

```
Using Calven MCP, show me pipeline coverage by segment for the window below.

FILL IN
- Window: [time window, e.g. this quarter]
- Segment targets: [paste the segment targets]

CONTEXT
I want to know where we have enough in-profile pipeline to hit the segment target, and where we do not, before sales leadership asks for more marketing spend.

PULL FROM THE UNIVERSE
- Open pipeline by segment and ICP tier, with amounts.
- Win rate per segment with n.

BUILD
- A table: segment, open pipeline, in-profile share, win rate, implied closable amount.
- The segments where implied closable falls short of the segment targets.

OUTPUT
The table and a three-line read on where coverage is thin.

GROUNDING
Use only CRM pipeline and dashboard rates and cite them. Do not add rows up for a rate; use the dashboard's. Say where amounts are withheld.
```

### Explain why last quarter's forecast missed

```
Using Calven MCP, explain why last quarter's forecast missed.

FILL IN
- Window: [time window, e.g. last quarter]
- Forecast: [forecast amount]
- Actual: [closed amount]

CONTEXT
We closed the actual amount against the forecast. I want the reasons from the deals, not a theory.

PULL FROM THE UNIVERSE
- Deals that were due to close in the window and were lost or slipped: loss reason, lost to, stage reached.
- The loss drivers extracted from win/loss responses for those deals, with the buyer's words.
- Win rate against the competitors involved.

ANALYZE
- Group the misses by cause: price, missing feature, competitor, no decision, slipped.
- For each group: the deals, the amount, the pattern, one verbatim.
- What finance should change in the weighting next quarter.

OUTPUT
A one-page read with a table per cause.

GROUNDING
Use only the deals and responses recorded in the Universe and cite them. If a deal has no loss reason or survey, list it as "no recorded reason" rather than inferring one.
```

## Ad hoc questions

- What share of our open pipeline is in ICP profile right now?
- What is our win rate for Tier 1 accounts versus Tier 3, and on how many deals?
- Which open deals over [amount] are against [competitor], and how often do we beat them?
- Which open deals have only one contact?
- What was the average sales cycle for mid-market deals this year?
- How many deals slipped past their close date last quarter, and why were they lost?
- Which lead source converts best?
- Which attributes predict a win in our ICP data?
- How many open deals are on accounts flagged as disqualifiers in the ICP?
- What is the win rate on deals where the economic buyer is a contact?
- Are deal amounts visible to me through MCP, or withheld?
- What did buyers on no-decision deals say about why they stalled?
