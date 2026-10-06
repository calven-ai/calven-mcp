# Pipeline reviews


It's the weekly pipeline review, and you want next actions that move deals instead of updated close dates. Before the meeting you know which deals are out of profile, which face a competitor we lose to, which are single-threaded and which look like deals we've lost before, and those are what you ask the rep about. Calven brings the company's own patterns, so it's more than the rep's optimism against your instinct.

## Prompts

### Prepare your weekly pipeline review

```
Using Calven MCP, prepare my pipeline review for the team or rep below this week.

FILL IN
- Team or rep: [team or rep]
- Open deals: [number of open deals]
- Segment: [segment]

CONTEXT
Weekly review of the open deals above. I want the deals to ask about and the question to ask on each, before the meeting.

PULL FROM THE UNIVERSE
- Open deals for the team or rep: stage, amount band, close date, ICP fit tier, competitors, contact roles on the deal.
- Win rate by competitor and by segment, with samples.
- Single-threaded versus multi-threaded win rate, and the buying-group roles on our won deals.
- The top reasons we lose in the segment, with the buyer's words.

BUILD
- Shape: pipeline in and out of profile, concentration by rep, segment or competitor.
- Flagged deals: each with the flag (out of profile, competitor we lose to, single-threaded, looks like a past loss) and the one question to ask the rep.
- Clean deals: list only.

OUTPUT
A one-page prep sheet, flagged deals first, with the figure and sample behind each flag.

GROUNDING
Use only CRM records and dashboards in the Universe. Cite every rate with n and the window. Do not invent deal context the CRM does not hold; the rep adds that in the meeting.
```

### Check pipeline health entering the quarter

```
Using Calven MCP, how healthy is our pipeline entering the quarter below?

FILL IN
- Quarter: [quarter]

PULL FROM THE UNIVERSE
- Open deals by stage and segment, with amount bands.
- ICP-fit share of pipeline and win rate for in-profile versus out-of-profile deals.
- Win rate by segment and by deal size band.

BUILD
- The share of pipeline in profile and what it is worth at our in-profile win rate versus the out-of-profile rate.
- Where pipeline concentrates (one rep, one segment, one competitor).
- The two numbers I should raise with RevOps.

OUTPUT
Six lines with figures and samples.

GROUNDING
Use only dashboards and CRM records in the Universe. Never compute a rate from rows; cite the dashboard figure with n.
```

### Find open deals that look like losses

```
Using Calven MCP, which open deals look like deals we have lost before?

FILL IN
- Stage: [stage]
- Window: [time window for past losses, e.g. 12 months]

CONTEXT
I want pattern matches, not opinions.

PULL FROM THE UNIVERSE
- Open deals past the stage with their segment, competitor and contact roles.
- Lost deals in the window in the same segments: loss reason, competitor, the deciding driver and the buyer's words.

BUILD
- For each open deal that matches a loss pattern: the pattern (segment plus competitor, missing role, product gap named in past losses), the past deal it resembles, and what the buyer said then.

OUTPUT
A table, strongest match first.

GROUNDING
Use only CRM records and deal drivers in the Universe and cite the past deal. Do not match on coincidence; say when the sample is thin.
```

### Get the questions to ask about one deal

```
Using Calven MCP, what should I ask the rep below about the deal below this week?

FILL IN
- Rep: [rep]
- Deal: [deal]

PULL FROM THE UNIVERSE
- The deal record: stage, competitors, contact roles, product feedback, price feedback.
- The battlecard for the competitor on it and the loss reasons against them.
- The buying-group roles on our won deals in this segment.

OUTPUT
Three questions, each with the fact behind it.

GROUNDING
Use only the deal record, battlecard and dashboards in the Universe and cite them.
```

## Advanced prompts

### Run a survival curve on pipeline age

```
Run a survival analysis on our deals to find the age at which an open deal is probably dead, then flag every open deal past it. Use Calven MCP for the closed and open deals with their dates.

FILL IN
- Window: [the last four quarters, or longer]
- Cut: [segment, deal size band, or none]

CONTEXT
Close dates lie; age doesn't. Our own history says how long winning deals take and when the chance of winning falls away. The review should spend its time on deals that are still alive.

FROM CALVEN
- Closed deals in the window: opened date, close date, outcome, segment, deal size band, furthest stage.
- Open deals: opened date, stage, amount, segment.
- Average sales cycle by segment from the ICP dashboard, with n, to sanity-check the result.

METHOD
- Treat each deal's age at close as the time and a win as the event; losses and open deals are censored.
- Build a Kaplan-Meier curve per segment: the chance that a deal still open at day X goes on to win.
- Find the age where that chance falls below half the segment's starting win rate.
- If you can run code, draw the curves and output the cut-off per segment.

OUTPUT
The curves, the cut-off age per segment, the list of open deals past it with amount and stage, and the three to ask about first on Monday.

GROUNDING
The curves are computed by you from the deals you paged; give the counts. Flag any segment with fewer than 20 closed deals as unreliable.
```

### Build a deal scoring calculator

```
Build an interactive deal scoring calculator managers can use in the review, weighted by what predicts wins in our own data. Use Calven MCP for the win rates by fit, competitor, threading and segment.

FILL IN
- Format: [interactive HTML page or spreadsheet]
- Factors: [the factors to score, or write "use the predictive attributes"]

CONTEXT
Every manager scores deals in their head, differently. A shared calculator with weights from our own win rates makes the review argue about facts.

FROM CALVEN
- The predictive attributes and win rate by attribute from the ICP dashboard, with n.
- Win rate per competitor from the competitive dashboard, with n.
- Multi-threaded against single-threaded win rate, and win rate by persona, from the persona dashboard, with n.
- The baseline win rate.

BUILD
- Turn each factor into a multiplier on the baseline: the factor's win rate divided by the baseline. Shrink factors with a small n toward 1.
- Build the calculator: dropdowns for segment, tier, competitor, number of contacts and roles present. Show the score, the factors that moved it most and the n behind each.
- Test it: score three deals by hand and check the calculator matches.
- Put three lines of instructions at the top.

OUTPUT
The working calculator file, the weight table with sources, and the three test cases.

GROUNDING
Every weight cites the dashboard rate and n behind it. Don't stack factors as if they were independent without saying so; note where they overlap.
```

### Replay losses to the review that missed them

```
Replay last quarter's lost deals week by week and find the pipeline review where each one could still have been saved. Use Calven MCP for the lost deals, their history and what the buyers said.

FILL IN
- Quarter: [quarter]
- Review notes: [paste last quarter's review notes or CRM next steps, or write "none"]

CONTEXT
A loss is decided weeks before it's marked lost. If I know the week the signal was visible, I know what the review should have asked.

FROM CALVEN
- Lost deals in the quarter: stages reached, opened and close dates, contacts by role, competitor, loss reason, price and product feedback.
- Deal drivers and evidence quotes for the surveyed ones.
- Competitor signals from the same weeks.

METHOD
- For each loss, rebuild the timeline: when it reached each stage, when the competitor appeared, which roles were on it.
- Mark the first week a warning sign was visible in the record: a stalled stage, a lone contact, a competitor arriving, a price signal.
- Compare with my review notes: was it discussed, and what was decided?
- Find the warning sign that appeared earliest and most often.

OUTPUT
A table (deal, first warning sign, week visible, raised in review or not, what would have helped), the most common early sign, and three review questions that catch it.

GROUNDING
Dates and signs come from the deal record, drivers and signals, cited. Don't infer a buyer's intent the record doesn't show; mark judgement as yours.
```

## Ad hoc questions

- Which open deals are out of profile?
- Which open deals have [competitor] on them, and what is our win rate against them?
- Which deals past proposal have only one contact?
- What is our win rate for single-threaded deals versus multi-threaded, and the sample?
- Which deals have "Price" in price feedback and what do we usually lose on price to?
- How much of [rep]'s pipeline is Tier 1?
- Which segment has the lowest win rate this year?
- Which open deals are at a stage where we lost most deals in [segment] last year?
- What did buyers say in the last three losses to [competitor]?
- Which deals reached proposal but have no economic buyer on record?
- What is the average cycle for in-profile deals, and which open deals are past it?
- Which product gap is named on the most open deals?
- Which open deals have a contact flagged as Blocker?
- Which open deals are against a competitor that made a high-severity move this month?
- Which lead source brings the most in-profile deals?
- Which open deals sit at an account in a disqualified vertical?
- At which stage do lost deals in [segment] most often stall?
- Which open deal has the largest amount and the fewest contacts?
