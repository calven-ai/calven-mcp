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

## Advanced prompts

### Backtest stage weights against fit weights

```
Backtest two ways of weighting the pipeline on last year's quarters, stage-based and fit-based, and tell me which one would have forecast better. Use Calven MCP for the deals as they stood and how they closed, plus the win rates by tier.

FILL IN
- Quarters to test: [e.g. the last four quarters]
- Current stage weights: [paste the probability per stage finance uses]
- Actual bookings: [paste bookings per quarter, or write "use won deals"]

CONTEXT
Finance weights the pipeline by stage. If fit and threading predict closure better, the forecast is wrong in a way we can fix, and the board will notice the difference in a quarter or two.

FROM CALVEN
- Deals with a close date in each test quarter, paged through: amount, status, furthest stage, fit tier, contact role, competitors.
- Win rate by fit tier and by threading from the ICP and persona dashboards, with n.
- Win rate by competitor from the competitive dashboard, with n.

BACKTEST
- Method A: amount × my stage weight for the furthest stage reached.
- Method B: amount × the tier win rate, adjusted for threading and competitor.
- Method C: a blend (state the weights).
- Compare each method's forecast with actual bookings per quarter. Report error and mean absolute percentage error.
- If you can run code, do it in a notebook and show which deals drove the biggest misses.

OUTPUT
A table: quarter, actual, forecast A, B, C, error each. Then the winning method, how much it would have improved accuracy, and the caveats.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Furthest stage is a proxy for the stage at forecast time; say so. Using full-year win rates leaks some hindsight into the backtest; flag it.
```

### Find the coverage each segment needs

```
Work out the pipeline coverage ratio each segment actually needs to hit its number, from its own win rate and slip, instead of the 3x rule. Use Calven MCP for win rates, cycles and the slip history by segment.

FILL IN
- Targets: [paste the bookings target by segment for the quarter]
- Open pipeline: [paste pipeline by segment, or write "use Calven"]
- Confidence wanted: [e.g. 80% chance of hitting target]

CONTEXT
A flat 3x coverage target is too much for one segment and far too little for another. The CFO needs to know where the plan is under-covered before the quarter starts.

FROM CALVEN
- Win rate, average deal size and sales cycle by segment from the ICP dashboard, with n.
- Open deals by segment with amount and close date, if I said to use Calven.
- Closed deals from last year with close date and stage history, to estimate how often deals slip out of the quarter.

MODEL
- Required coverage = 1 ÷ (win rate × share that closes in quarter). Compute it per segment.
- Add a buffer for variance: with deal counts per segment, use a binomial approximation to get the coverage that hits target at my confidence level.
- Compare required coverage with actual coverage. Show the gap in dollars.
- Run sensitivity: the coverage needed if win rate is 5 points lower.

OUTPUT
A table: segment, win rate (n), slip rate, required coverage, actual coverage, gap. Then the two segments to fix and the sensitivity table.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Slip rate from stage history is approximate where history is incomplete; report how many deals had it.
```

### Run a pre-mortem on the quarter's number

```
Run a pre-mortem on the quarter: assume it's the last day and we missed by 20%, and tell me why while I can still act. Use Calven MCP for the risks sitting in the pipeline and the patterns that sank past quarters.

FILL IN
- Quarter: [quarter]
- Forecast: [the number you're committing to the board]
- Known risks: [anything sales has already flagged]

CONTEXT
The forecast has been reviewed by everyone who built it. A pre-mortem makes it safe to say what could go wrong before it does, and gives me the early signals to watch.

FROM CALVEN
- Open deals closing in the quarter with fit tier, competitors, contact roles, stage and amount.
- Top loss drivers and no-decision share for the last two quarters, with n.
- Competitor signals from the last 90 days for competitors in the open deals.

METHOD
- Write five short failure stories, each with a different cause: concentration in a few large deals, a competitor move, buyers stalling to no decision, out-of-profile pipeline that never converts, deals slipping past quarter end.
- Rate each for likelihood and dollar impact, grounded in the pipeline and the loss history.
- For the top two, name the signal I'd see by week four and the action that limits the damage.

OUTPUT
A table of the five failure modes with likelihood, impact, early signal and action. Then a revised forecast range and the week-four checklist.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a competitor move that isn't in the signals.
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
- How much open pipeline is in deals older than our average won cycle?
- What share of last quarter's losses had been in commit at some point, by stage history?
- Which segment's win rate is moving down while its pipeline grows?
- What's the win rate on deals with three or more contacts versus one?
- How concentrated is the open pipeline: what share sits in the ten largest deals?
