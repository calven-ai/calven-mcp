# Segment win rates

**Team:** Revenue operations · also sales leadership, product marketing, finance
**Impact:** High. Where we win is the input to every planning decision: territories, quotas, the ICP, the competitive plays, where marketing spends. Calven computes win rates by segment, competitor and persona the way the dashboard does, with the sample, so the number in the board deck matches the one in the review.
**Prerequisites:** CRM connected (deals with outcome, segment, competitors, contact role). Better with win/loss surveys running (drivers behind the rates) and personas approved.

## What the team is trying to do

Cut win rate by the dimensions that drive decisions, compare to the prior period, and explain the movement with evidence. Done means a win-rate table with n per cell, the movers, and the reasons behind them in the buyer's words. Without the company's own knowledge the cut is a pivot table on a CRM export that changes every time someone re-runs it.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the cuts | Segment, competitor, persona, deal size, lead source | The dimensions the dashboards already compute | Win/loss, competitive, persona, ICP dashboards |
| 2 | Pull the rates | Compute win rate per cut with n | Win rate by segment and attribute, by competitor, by persona, by threading, each with n and the prior period | Dashboards |
| 3 | Find the movers | What changed versus last period | KPI comparisons and the biggest movers in each ranked list | Insights overview |
| 4 | Explain | Why a cell moved | Deal drivers and loss reasons for the deals in the cell; the deals themselves | Deal drivers, insight detail (deals by competitor, loss outcome), CRM deals |
| 5 | Present | A table and a page of reasons | The table and the narrative with sources | All of the above |
| 6 | Decide | Change territories, plays, focus | Calven does not help here; see territory planning and ICP refreshes | |

## Recommended prompts

### Step 2 and 3: the win-rate table and the movers

```
Using Calven MCP, give me win rates for [window] by segment, competitor and persona, with what moved.

CONTEXT
This goes into the [QBR / board / planning] pack. Every rate needs n and the prior period.

PULL FROM THE UNIVERSE
- The win/loss dashboard: competitive win rate, win rate by segment and attribute, with n and the comparison to the prior period.
- The competitive dashboard: win rate per competitor with n and fight-or-avoid.
- The persona dashboard: win rate by persona and by threading.
- The Insights overview for [window]: the KPIs and the biggest movers.

BUILD
- One table per dimension: cell, win rate, n, prior period, change in points.
- The three biggest movers across all dimensions.
- Cells below the reporting floor, listed as such.

OUTPUT
The tables and the movers.

GROUNDING
Every rate comes from a dashboard with n and window. Never compute a rate from rows. When a comparison cannot be made, report the reason, not "no change".

[name the window and the pack]
```

### Step 4: explain a cell

```
Using Calven MCP, explain why our win rate against [competitor] in [segment] moved in [window].

CONTEXT
The rate changed from [prior] to [current]. I need the reasons in the buyer's words and the deals behind it.

PULL FROM THE UNIVERSE
- The deals against [competitor] in [segment] in [window], won and lost, from the competitive drill-down.
- Deal drivers on those deals, with direction, rank and the evidence quote.
- Competitive signals for [competitor] in the window.

BUILD
- What decided the wins and what decided the losses, each with deals (n) and a quote.
- Whether a competitor move or a product change lines up with the shift.

OUTPUT
A half page: the shift, the reasons, the evidence.

GROUNDING
Use the drill-down deals and their drivers, cited. Do not attribute the shift to a cause the evidence does not name.

[name the competitor, segment and window]
```

### Review mode: reconcile a number from another deck

```
Using Calven MCP, check this win-rate table against the dashboards.

CONTEXT
Below is a table someone built from a CRM export. I want each cell reconciled with Calven's number.

PULL FROM THE UNIVERSE
- The same cuts from the win/loss, competitive and persona dashboards for the same window.

CHECK
- Each cell: Calven's rate with n, the difference, and the likely reason (window, definition of decided, scope).

OUTPUT
The reconciled table.

GROUNDING
Report the dashboard's definition when they differ. Do not adjust Calven's number to match.

[paste the table and name the window]
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

## Good practice

- Always ask for n. A cell with four deals is a story, not a rate.
- Use one window for the whole pack. Mixed windows are where reconciliation fights start.
- Explain movers with drivers, not with hypotheses. The quote is the explanation.
- Treat "cannot compare" as a finding. It usually means the prior period had too few deals.
- Save the table prompt with your cuts and rerun it each quarter so the pack is comparable.

## Not covered today

- Quota attainment, bookings and revenue. Those come from the CRM and finance; Calven reports deal outcomes and amounts as mirrored.
- Rates on deals without a competitor or outcome recorded. They are counted as missing, not estimated.
- Editing deal outcomes or amounts.
