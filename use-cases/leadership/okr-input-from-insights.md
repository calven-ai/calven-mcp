# OKR input from Insights

**Team:** Leadership · also RevOps, product marketing, sales leadership
**Impact:** Medium. GTM objectives get targets without baselines, and key results nobody can measure. Calven's dashboards hold baselines with samples for win rate, ICP focus, multi-threading, messaging adoption and customer sentiment, so key results start from a number and can be checked each quarter.
**Prerequisites:** win/loss surveys running, CRM connected, call transcripts ingested. Which KPIs exist depends on which agents run; the Insights overview says which dashboards have data.

## What the team is trying to do

Set quarterly GTM objectives with key results that have a baseline, a target and a way to read them. Done means a list of candidate key results per objective, each with the current value, its sample, the prior period, and the dashboard it is read from, plus the quarterly check-in.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Inventory the measurable | Which GTM metrics have a baseline | The Insights overview: every dashboard's KPIs and which have data | Insights overview |
| 2 | Pick key results per objective | Map objectives to KPIs | Dashboard KPIs: competitive win rate, ICP share of wins, ICP-fit pipeline, multi-threading win rate, contact coverage, messaging alignment, customer-language fit, net sentiment, drift resolved | Insights dashboards |
| 3 | Set baselines and targets | Current value, prior period, sample | KPI comparison data | Insights dashboards |
| 4 | Quarterly check-in | Read progress | The same KPIs with change | Insights dashboards |
| 5 | Explain misses | What is behind a KPI that did not move | Drill-downs: deals, drivers, themes | `get_insight_detail`, deal drivers |
| 6 | Record the OKRs | In the OKR tool | Calven does not help here | |

## Recommended prompts

### Step 1 to 3: candidate key results with baselines

```
Using Calven MCP, propose key results with baselines for these GTM objectives.

CONTEXT
Below are next quarter's objectives. I want key results we can read from our own dashboards, each with its current value, sample, prior period and the dashboard it comes from.

PULL FROM THE UNIVERSE
- The Insights overview for the trailing quarter with comparison: every KPI with data, and which dashboards have none.

BUILD
- Per objective: two or three candidate key results, each with baseline, n, prior period value, and the dashboard and section.
- Key results that cannot be read from Calven, marked as such.

OUTPUT
A key results table.

GROUNDING
Use only dashboard KPIs with their samples. Do not propose a target; give me the baseline and the prior period. A KPI that cannot be compared is marked, not treated as flat.

[paste the objectives]
```

### Step 4: the quarterly check-in

```
Using Calven MCP, read our GTM key results for [quarter].

CONTEXT
Below are the key results with their baselines and targets. I want the current value and the change.

PULL FROM THE UNIVERSE
- The dashboards each key result reads from, for [quarter], compared with the prior quarter.

BUILD
- A table: key result, baseline, target, current, change, sample, status.

OUTPUT
The check-in table.

GROUNDING
Use only the dashboards, cited with n. Mark a KPI that cannot be compared and say why.

[paste the key results]
```

### Step 5: explain a miss

```
Using Calven MCP, explain why [key result] did not move.

CONTEXT
[key result] was [baseline] and is now [current]. I want what is behind it from our deals and calls.

PULL FROM THE UNIVERSE
- The drill-downs behind the KPI: deals, drivers, verbatims or themes as applicable.

BUILD
- The three factors the evidence shows, each with the rows behind it.
- What the evidence does not explain.

OUTPUT
A short diagnosis.

GROUNDING
Use only the Universe, cited. Do not speculate beyond the rows.

[name the key result]
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

## Good practice

- Start from the overview. It tells you which KPIs exist before you promise one.
- Keep the sample beside every key result; a 5-point win-rate move on 20 deals is noise.
- Use the same window every quarter.
- Explain misses from drill-downs, not from the meeting.

## Not covered today

- Revenue, pipeline generation, marketing funnel and product usage KPIs. Those live in the CRM, marketing and analytics tools.
- Writing OKRs to the OKR tool.
