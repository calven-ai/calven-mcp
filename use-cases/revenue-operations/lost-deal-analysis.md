# Lost deal analysis


The quarter closed and you need to explain the losses beyond the rep's pick list. You get a readout with counts by reason, competitor, segment and deciding force (competitive, capability, experience, commercials), the three patterns, and what each team should change. Calven adds the buyer's own words, so you see where they disagree with the CRM loss reason.

## Prompts

### Build the quarterly loss readout

```
Using Calven MCP, build the lost deal readout for the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Audience: sales leadership, PMM and product. I want why we lost, counted the way the dashboard counts, with the buyer's words, and the cuts by competitor and segment.

PULL FROM THE UNIVERSE
- The win/loss dashboard for the window: loss count, pipeline lost, loss outcomes (competitor, no decision, in-house), top loss drivers, driver categories, with n and the prior period.
- The competitive dashboard: loss reasons per competitor.
- Deal drivers with direction hurt and rank "decided" in the window, with category and the evidence quote.
- Lost deals in the window with segment, size band and furthest stage.

BUILD
- The numbers: losses, pipeline lost, outcome split, versus the prior period.
- The forces: driver categories with counts.
- The top five deciding loss drivers, each with deals (n) and two buyer quotes.
- The cuts: losses by competitor with the top reason each; losses by segment with the top reason each.
- Where in the funnel we lose: furthest stage reached.

OUTPUT
The readout, one page plus the quote appendix.

GROUNDING
Counts from the dashboards with n and window; quotes verbatim and cited. Do not count rows yourself. Deals without a survey are reported as "no buyer reason recorded".
```

### Compare rep loss reasons with buyer reasons

```
Using Calven MCP, compare the CRM loss reason with what the buyer said for each lost deal in the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know how often the rep's pick list matches the buyer's reason, to fix the pick list or the habit.

PULL FROM THE UNIVERSE
- Lost deals in the window with the CRM loss reason.
- The deciding deal driver per deal with its category and quote.

CHECK
- Per deal: CRM reason, buyer's deciding driver, match or mismatch.
- The mismatch rate and the most common mismatch pair.

OUTPUT
The table and the two lines of findings.

GROUNDING
Use only deals with a recorded driver. Report the count without a driver separately.
```

### Turn the loss readout into team actions

```
Using Calven MCP, turn the loss readout into actions for product, PMM, enablement and leadership.

FILL IN
- Readout: [paste the readout]

CONTEXT
Each team gets the losses in the readout it can act on, with the evidence.

PULL FROM THE UNIVERSE
- Deal drivers by category: Capability to product, Competitive to PMM and enablement, Commercials to leadership, Experience to sales leadership.
- The product gaps and amount at risk from the Insights overview.
- The battlecard objection handling for the competitors named, to see what is already covered.

BUILD
- Per team: the drivers, the deals and amount they touched, the buyer quotes, and whether an answer already exists in the Universe.

OUTPUT
Four short lists.

GROUNDING
Amount at risk comes from the overview and covers won and lost deals; say so. Do not propose fixes; list the evidence.
```

## Ad hoc questions

- Why did we lose deals last quarter, in the buyer's words?
- How many losses were no decision versus a competitor?
- Which loss driver decided the most deals this year?
- What did the buyer at [lost deal] say decided it?
- Which competitor do we lose to on price, and which on capability?
- Which segment lost most on integrations?
- How often does the rep's loss reason match the buyer's?
- Which product gap cost the most deals, and how much pipeline?
- At which stage do we lose most deals?
- Which lost deals have no survey response yet?
