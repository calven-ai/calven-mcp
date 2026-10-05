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
