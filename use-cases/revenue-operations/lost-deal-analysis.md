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

## Advanced prompts

### Separate root causes from symptoms

```
Build a causal map of why we lose, separating root causes from the symptoms reps report. Use Calven MCP for the buyer-reported deal drivers, the evidence quotes and the rep's loss reason on each deal.

FILL IN
- Window: [window]
- Segment: [segment, or write "all"]

CONTEXT
"Price" and "missing feature" are symptoms. A buyer who says price often means we never showed value to the economic buyer. Fixing symptoms is how loss readouts repeat every quarter. I want the causes.

FROM CALVEN
- Lost deals in the window with rep loss reason, competitor, contact roles and stage reached.
- Every deal driver on those deals: driver, detail, direction, whether it decided the deal, category, and the evidence quote.
- The win/loss dashboard's top loss drivers, with n.

METHOD
- Group drivers into a fishbone with four bones: Competitive, Capability, Experience, Commercials.
- For each frequent driver, ask "why" up to five times using the other drivers and deal facts on the same deals (for example: price, because value wasn't shown, because no economic buyer was engaged).
- Draw the result as a causal graph: root causes on the left, symptoms on the right, edges weighted by how many deals show both.
- If you can run code, render it as a graph image.

OUTPUT
The causal graph, the three root causes with the share of lost pipeline that traces to each, and one quote per root cause.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A causal link needs two or more deals showing both ends; single-deal links are labelled as hypotheses.
```

### Rank loss fixes by pipeline recovered

```
Rank the fixes for our top loss drivers by how much pipeline each would recover per unit of effort. Use Calven MCP for the losses each driver decided and the amounts at stake.

FILL IN
- Window: [window]
- Candidate fixes: [paste the fixes on the table with a rough cost or effort each]

CONTEXT
The loss readout produces a list of fixes every quarter, and the cheapest one gets done. I want them ranked by expected pipeline recovered, with the uncertainty shown, so the right one gets funded.

FROM CALVEN
- Deal drivers that decided lost deals in the window, with category and the deal's amount.
- Product gaps from the win/loss dashboard with deals and amount at risk, with n.
- The competitive dashboard's loss reasons by competitor, with n.

MODEL
- Map each fix to the drivers it addresses and sum the lost pipeline they decided.
- Apply a flip rate: the share of those deals the fix would have saved. Use a low, mid and high labelled assumption.
- Compute recovered pipeline per unit of cost for each fix, at all three flip rates.
- Show the break-even flip rate: how effective each fix must be to beat the next one.

OUTPUT
A ranked table: fix, drivers addressed, deals and pipeline decided, recovered pipeline at three flip rates, per unit of cost, break-even. Then the recommendation in three lines.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Only drivers marked as deciding the deal count toward the pipeline; mention secondary ones separately.
```

### Grow a decision tree that predicts losses

```
Grow a small decision tree from our closed deals that predicts a loss, then turn it into a checklist reps can use at the qualification stage. Use Calven MCP for closed deals with their attributes and outcomes.

FILL IN
- Window: [window, e.g. the last four quarters]
- Stage to apply it at: [stage]

CONTEXT
Loss patterns repeat, but the readout comes after the money is gone. A three-question checklist that catches most losses early is worth more than any slide.

FROM CALVEN
- Closed deals in the window, paged through: status, loss reason, fit tier, size band, industry, region, lead source, competitors, contact role, complexity, deal type.
- The ICP dashboard's predictive attributes, with n, as a cross-check.

METHOD
- Fit a decision tree, depth three at most, predicting lost versus won. If you can run code, use scikit-learn with cross-validation; otherwise build it by hand from the strongest splits.
- Hold out the most recent quarter and test on it: precision and recall for losses.
- Translate each leaf into a plain question a rep answers yes or no.

OUTPUT
The tree, its holdout precision and recall, and a five-line checklist with the loss rate behind each answer.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Report how many deals had missing fields and how you handled them. Warn if the holdout has fewer than 30 deals.
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
- Which losses had a champion but no economic buyer on the deal?
- What do buyers say about us in deals we lost at the final stage?
- Which loss driver grew most compared with the prior period?
- Which competitor wins on Experience drivers rather than Capability?
- What's the average amount of deals lost on no decision versus to a competitor?
- Which integrations do buyers name in deals we lost on integrations?
