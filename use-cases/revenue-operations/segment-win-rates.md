# Segment win rates


Your win-rate cut is a pivot table on a CRM export that changes every time someone reruns it. You get a table by segment, competitor and persona with n per cell, compared to the prior period, with the movers and the reasons behind them in the buyer's words. Calven attaches the evidence for why each number moved.

## Prompts

### Cut win rates and show what moved

```
Using Calven MCP, give me win rates for the window below by segment, competitor and persona, with what moved.

FILL IN
- Window: [time window, e.g. last quarter]
- Pack: [QBR, board or planning]

CONTEXT
This goes into the pack named above. Every rate needs n and the prior period.

PULL FROM THE UNIVERSE
- The win/loss dashboard: competitive win rate, win rate by segment and attribute, with n and the comparison to the prior period.
- The competitive dashboard: win rate per competitor with n and fight-or-avoid.
- The persona dashboard: win rate by persona and by threading.
- The Insights overview for the window: the KPIs and the biggest movers.

BUILD
- One table per dimension: cell, win rate, n, prior period, change in points.
- The three biggest movers across all dimensions.
- Cells below the reporting floor, listed as such.

OUTPUT
The tables and the movers.

GROUNDING
Every rate comes from a dashboard with n and window. Never compute a rate from rows. When a comparison cannot be made, report the reason, not "no change".
```

### Explain one win-rate shift

```
Using Calven MCP, explain why our win rate against the competitor below moved in the segment and window below.

FILL IN
- Competitor: [competitor]
- Segment: [segment]
- Window: [time window, e.g. last quarter]
- Prior rate: [prior win rate]
- Current rate: [current win rate]

CONTEXT
The rate changed from the prior rate to the current rate. I need the reasons in the buyer's words and the deals behind it.

PULL FROM THE UNIVERSE
- The deals against the competitor in the segment in the window, won and lost, from the competitive drill-down.
- Deal drivers on those deals, with direction, rank and the evidence quote.
- Competitive signals for the competitor in the window.

BUILD
- What decided the wins and what decided the losses, each with deals (n) and a quote.
- Whether a competitor move or a product change lines up with the shift.

OUTPUT
A half page: the shift, the reasons, the evidence.

GROUNDING
Use the drill-down deals and their drivers, cited. Do not attribute the shift to a cause the evidence does not name.
```

### Reconcile a win-rate table from another deck

```
Using Calven MCP, check this win-rate table against the dashboards.

FILL IN
- Table: [paste the table]
- Window: [time window the table covers]

CONTEXT
Someone built the table from a CRM export. I want each cell reconciled with Calven's number.

PULL FROM THE UNIVERSE
- The same cuts from the win/loss, competitive and persona dashboards for the same window.

CHECK
- Each cell: Calven's rate with n, the difference, and the likely reason (window, definition of decided, scope).

OUTPUT
The reconciled table.

GROUNDING
Report the dashboard's definition when they differ. Do not adjust Calven's number to match.
```

## Advanced prompts

### Shrink small-sample win rates before ranking

```
Rank our segments by win rate without being fooled by small samples: shrink each rate toward the overall average in proportion to how little data it has. Use Calven MCP for the win rates and their sample sizes.

FILL IN
- Window: [window]
- Cut: [segment, competitor, persona or lead source]

CONTEXT
The top of every win-rate table is a segment that won four of five deals. Leadership reads it as a strategy. I want a ranking where a 60% on 80 deals beats an 80% on 5, with the reasoning shown.

FROM CALVEN
- Win rates by the cut from the dashboards, each with wins, losses and n for the window.
- The company-wide win rate for the same window, with n.
- Which cells are below the dashboard's reporting floor.

METHOD
- Use empirical Bayes: fit a beta prior to the cells, then compute each cell's shrunk rate and a 90% credible interval.
- If you can run code, do it in a short script and show the prior's parameters.
- Re-rank on the shrunk rate. Show which cells moved most and why.
- Mark the pairs whose intervals don't overlap: those are the only differences worth a decision.

OUTPUT
A table: cell, raw rate, n, shrunk rate, interval, old rank, new rank. Then three lines on what the ranking supports and what it doesn't.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Never compute a rate from rows when the dashboard has it; cells below the floor stay out of the ranking.
```

### Split the win-rate change into mix and rate

```
Our overall win rate moved this quarter. Decompose the change into mix (we sold to different segments) and rate (we won more or less within each segment). Use Calven MCP for win rates and deal counts by segment for both periods.

FILL IN
- This period: [quarter]
- Prior period: [quarter]
- Cut: [segment, deal size band or competitor]

CONTEXT
A headline win rate can rise while every segment gets worse, just because the mix shifted toward easy deals. Before anyone takes credit or blame, I want to know which it was.

FROM CALVEN
- Win rate and number of decided deals per cell for both periods, from the dashboards, with n.
- The overall win rate for both periods, with n.
- The top deal drivers in the cells that moved most, with a buyer quote each.

METHOD
- Run a shift-share decomposition: total change = mix effect + rate effect + interaction. Show the arithmetic per cell.
- Check for a Simpson's paradox: any cell where the direction disagrees with the total.
- For the two cells contributing most, explain the move with the deal drivers.
- If you can run code, chart a waterfall from prior rate to current rate.

OUTPUT
The waterfall (or table), the share of the change from mix versus rate, the paradox check, and a three-line explanation I can paste into the QBR.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Flag any cell under 10 deals in either period as too small to read.
```

### Debate where to double down

```
Run a structured debate on the planning question every win-rate review raises: double down on our strongest segment or fix our weakest. Use Calven MCP for the win rates, the deal drivers and the ICP's view of each segment.

FILL IN
- Strongest segment: [segment]
- Weakest segment: [segment]
- Budget or headcount at stake: [what's being allocated]

CONTEXT
The planning meeting usually picks whoever argues loudest. I want both cases made properly, with evidence, and judged by someone who has to answer for the number.

FROM CALVEN
- Win rate, average deal size, sales cycle and open pipeline for both segments, from the ICP dashboard, with n.
- The deciding deal drivers in each segment, with evidence quotes.
- The ICP's Segment Tiers and Priority Verticals, and any market opportunities or trends tagged to either segment.

METHOD
- Advocate A argues to double down: compounding win rate, cheaper pipeline, references.
- Advocate B argues to fix the weak segment: size of the prize, fixable loss drivers, strategic need.
- Two rounds: opening case, then rebuttal to the other side's strongest point.
- A judge playing the CRO scores both on evidence, upside and risk, and rules. The judge may split the allocation.

OUTPUT
The two cases (200 words each), the rebuttals, the ruling with the score sheet, and the one metric that would reverse the ruling in a quarter.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Advocates may only cite recorded evidence; anything else is labelled as argument.
```

## Ad hoc questions

- What is our competitive win rate this quarter versus last, with n?
- Which segment has the highest win rate, and how many deals is that?
- What is our win rate against [competitor] this year?
- Do we win more when a technical buyer is on the deal?
- How does win rate differ for multi-threaded deals?
- Which lead source has the best win rate?
- Which competitor should we avoid, by win rate?
- What moved most in the last quarter?
- What is the win rate for deals in [deal size band]?
- Which cells are below the reporting floor this quarter?
- Which segment's win rate rose while its deal count fell?
- What is our win rate when two competitors are on the deal versus one?
- Which persona's presence changes win rate most, with n?
- Which competitor do we beat in Enterprise but lose to in Mid-market?
- Where did win rate fall but pipeline won rise this quarter?
- Which segment's losses are mostly no decision rather than a competitor?
