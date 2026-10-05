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
