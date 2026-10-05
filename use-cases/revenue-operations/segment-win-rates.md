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
