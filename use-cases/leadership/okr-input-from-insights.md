# OKR input from Insights


You're setting next quarter's GTM objectives and you don't want targets without baselines. You get candidate key results per objective, each with its current value, sample, prior period and the dashboard it's read from, plus a quarterly check-in. Calven's dashboards already hold those baselines for win rate, ICP focus, multi-threading, messaging adoption and customer sentiment.

## Prompts

### Propose key results with baselines

```
Using Calven MCP, propose key results with baselines for these GTM objectives.

FILL IN
- Objectives: [paste the objectives]

CONTEXT
The objectives are for next quarter. I want key results we can read from our own dashboards, each with its current value, sample, prior period and the dashboard it comes from.

PULL FROM THE UNIVERSE
- The Insights overview for the trailing quarter with comparison: every KPI with data, and which dashboards have none.

BUILD
- Per objective: two or three candidate key results, each with baseline, n, prior period value, and the dashboard and section.
- Key results that cannot be read from Calven, marked as such.

OUTPUT
A key results table.

GROUNDING
Use only dashboard KPIs with their samples. Do not propose a target; give me the baseline and the prior period. A KPI that cannot be compared is marked, not treated as flat.
```

### Read this quarter's key results

```
Using Calven MCP, read our GTM key results for the quarter below.

FILL IN
- Quarter: [quarter]
- Key results: [paste the key results]

CONTEXT
The key results come with their baselines and targets. I want the current value and the change.

PULL FROM THE UNIVERSE
- The dashboards each key result reads from, for the quarter, compared with the prior quarter.

BUILD
- A table: key result, baseline, target, current, change, sample, status.

OUTPUT
The check-in table.

GROUNDING
Use only the dashboards, cited with n. Mark a KPI that cannot be compared and say why.
```

### Explain a key result that didn't move

```
Using Calven MCP, explain why the key result below did not move.

FILL IN
- Key result: [key result]
- Baseline: [baseline]
- Current: [current value]

CONTEXT
It was at the baseline and is now at the current value. I want what is behind it from our deals and calls.

PULL FROM THE UNIVERSE
- The drill-downs behind the KPI: deals, drivers, verbatims or themes as applicable.

BUILD
- The three factors the evidence shows, each with the rows behind it.
- What the evidence does not explain.

OUTPUT
A short diagnosis.

GROUNDING
Use only the Universe, cited. Do not speculate beyond the rows.
```

## Advanced prompts

### Check if a key result can move detectably

```
Check whether each proposed key result can move by enough, on our volume, to tell a real change from noise. Use Calven MCP for the baselines and the sample sizes behind them.

FILL IN
- Proposed key results: [paste them, with targets]
- Expected volume: [deals or calls you expect next quarter, or write "use last quarter"]

CONTEXT
"Raise competitive win rate from 42% to 48%" sounds precise. On 30 deals a quarter, that move sits inside the noise. A key result we can't measure ends in an argument, not a decision.

FROM CALVEN
- The baseline for each key result from its dashboard (win rate, in-profile share, multi-threading, messaging alignment, sentiment), with n and the last four quarters.
- Data availability from the Insights overview: which dashboards have enough data.

MODEL
- For each key result, compute the smallest change detectable at 80% power and a 10% significance level, given the baseline and the expected n.
- Compare it with the target and grade each: measurable, measurable over two quarters, or noise.
- For the noise ones, propose a measurable alternative: a longer window, a pooled metric or a leading indicator with more volume.
- If you can run code, run the calculation and show a table of the n needed against effect size.

OUTPUT
A table (key result, baseline, n, target change, detectable change, grade, alternative), then the rewritten set of key results.

GROUNDING
Label every number as Calven (cited, with n), computed by you (with the method), or your assumption. Don't recompute a baseline from rows; use the dashboard number.
```

### Build the driver tree under the revenue goal

```
Build the driver tree from the revenue objective down to the key results the GTM team controls, and show which branch carries the most weight. Use Calven MCP for the rate at each branch.

FILL IN
- Objective: [the revenue or growth objective]
- Quarterly history: [paste bookings, pipeline created and deal counts by quarter, or write "none"]

CONTEXT
Key results get picked because they're easy to report. A driver tree shows which ones actually move the objective, and by how much per point.

FROM CALVEN
- Win rate, deal size and cycle by segment from the ICP dashboard, with n.
- Multi-threading win rate against single-threaded, and contact coverage, from the persona dashboard.
- Competitive win rate and the top loss reasons.
- Messaging alignment and evidence-backed pillars from the messaging dashboard.

MODEL
- Build the tree: revenue is deals times deal size; deals are pipeline times win rate; win rate breaks into its drivers (in-profile share, threading, competitive win rate).
- Attach the Calven baseline to each node.
- Compute what one point of improvement at each leaf is worth in revenue.
- If I pasted history and you can run code, check the tree against it: which drivers moved with revenue over the quarters.

OUTPUT
The tree as an outline or a diagram, the value-per-point table ranked, and the three key results to pick because they carry the most revenue per point.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Value per point is arithmetic on stated baselines; say so, and don't present a correlation as a cause.
```

## Ad hoc questions

- Which dashboards have data this quarter, and which do not?
- What is our competitive win rate, baseline and prior quarter?
- What share of wins were in-profile last quarter?
- What is the multi-threading win rate versus single-threaded?
- What is messaging alignment and customer-language fit right now?
- What is net customer sentiment and its change?
- How many documents were flagged for drift and how many resolved?
- What is contact coverage on open pipeline?
- Which KPI moved most this quarter?
- Which KPI has the smallest sample behind it?
- Which KPI got worse two quarters running?
- What's the win-rate gap between in-profile and out-of-profile deals, with n?
- How many deals did win/loss cover last quarter, and is that enough to report a win rate per competitor?
- How many pillars are evidence-backed, and did that change last quarter?
- Which dashboard has no data, and which agent would fill it?
