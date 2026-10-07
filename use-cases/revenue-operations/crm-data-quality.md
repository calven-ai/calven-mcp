# CRM data quality


Forecasting, win-rate cuts and ICP scoring all break on the same missing CRM fields, and a completeness score won't tell you which ones. You get a weekly gap list by owner, with the analyses each gap affects, and you see whether last week's gaps closed. Calven maps which fields feed which analysis, so every gap comes with a reason to fix it.

## Prompts

### List this week's CRM gaps by owner

```
Using Calven MCP, list the CRM gaps that break our analyses this week.

CONTEXT
A weekly hygiene list for deal owners. Open and recently closed deals first.

PULL FROM THE UNIVERSE
- The win/loss scoreboard's counts of deals missing size and close date.
- Open deals past the proposal stage with no competitor recorded, no primary contact, or no loss reason when lost, with owner.
- Accounts with deals but no industry, size or region.
- Contacts on open deals with no role.
- The Insights overview's availability section, for dashboards with no data.

BUILD
- Gaps by owner: deal, field missing, why it matters (the analysis it breaks).
- Account and contact gaps as separate lists.
- The dashboards currently showing placeholders because of a gap.

OUTPUT
The lists.

GROUNDING
Report only what the mirrored rows lack. Do not infer a value.
```

### Check whether last week's gaps closed

```
Using Calven MCP, compare this week's CRM gaps with last week's list.

FILL IN
- Last week's list: [paste last week's list]

CONTEXT
I want what closed since last week's list, what is still open and what is new.

PULL FROM THE UNIVERSE
- The same gap counts and rows as last week's prompt.

CHECK
- Closed, still open, new, by owner.

OUTPUT
The three lists and the count trend.

GROUNDING
Compare row by row on the mirrored data; do not estimate.
```

### Map fields to the analyses they feed

```
Using Calven MCP, map our CRM fields to the analyses they feed and show which ones are failing today.

FILL IN
- Product: [product, or leave blank for the whole company]

CONTEXT
I am writing the required-field policy for sales. I want each field tied to the number it feeds, and the dashboards that currently show no data because of a gap. If a product is named, scope everything to it.

PULL FROM THE UNIVERSE
- The Insights overview: which dashboards have data, which show placeholders, and the availability notes.
- The win/loss scoreboard: deals missing size and close date.
- The ICP dashboard reality check: accounts without a fit score and the pipeline gap.
- The persona dashboard: contact coverage.

BUILD
- A table: field (amount, close date, outcome, loss reason, competitors, contact role, account industry, size, region), the dashboard sections it feeds, and today's gap count where the Universe reports one.
- The dashboards showing placeholders now, and the field gap behind each.
- The three fields to make required first, ranked by what they unblock.

OUTPUT
The table and the ranking, with sources.

GROUNDING
Gap counts only where a dashboard or the mirrored rows report them, with n and window. Do not estimate a count the Universe does not give.
```

## Advanced prompts

### Bound the error the gaps put in your win rates

```
Work out how wrong our win rates and pipeline numbers could be because of missing CRM fields, by filling the gaps with the best and worst case. Use Calven MCP for which deals are missing which fields and the rates those fields feed.

FILL IN
- Window: [window]
- Metrics that matter: [e.g. win rate by competitor, ICP share of wins, pipeline by segment]

CONTEXT
Hygiene requests lose to selling time unless the cost is concrete. "Forty deals have no competitor" is easy to ignore. "Our win rate against our main rival could be anywhere from 38% to 61%" isn't.

FROM CALVEN
- Closed and open deals in the window, paged through, with which of these are empty: competitors, loss reason, amount, close date, primary contact, account industry.
- The dashboard rates for the metrics I named, with n.
- The CRM data quality picture from the dashboards' data availability notes.

METHOD
- For each metric, list the deals excluded because a field is missing.
- Compute bounds: assume every excluded deal went the best way for the metric, then the worst way. The truth sits between.
- Rank fields by how wide a range their gaps create, weighted by how much the metric drives decisions.
- If you can run code, show each metric as a bar with the reported value and its bounds.

OUTPUT
A table: metric, reported value with n, lower bound, upper bound, field responsible, deals to fix. Then the ten records to fix first, by owner.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Bounds are arithmetic on recorded rows, never an estimate of the missing values.
```

### Write stage exit rules as checks you can run

```
Turn our stage definitions into machine-checkable exit rules, then run them against every open deal and show who fails which rule. Use Calven MCP for the open deals and the fields each rule checks.

FILL IN
- Stage definitions: [paste the stage names with exit criteria]
- Required fields: [any fields your team already requires, or write "none"]

CONTEXT
Stage definitions live in a document and get applied by memory. Written as rules a script can test, they become a weekly report that names the gap before the pipeline review does.

FROM CALVEN
- Open deals with stage, reached stages, amount, close date, competitors, contact roles, primary contact, account fit tier, owner.
- The persona dashboard's view of which roles are on won deals, to justify role-based rules.

BUILD
- Translate each exit criterion into a rule on fields (for example: past discovery requires a primary contact and an amount; past proposal requires a competitor or "none" and an economic buyer role).
- Write the rules as a small config file (YAML or JSON) and, if you can run code, a script that applies them to the deals.
- Run it. Count failures by rule, by stage and by owner.
- Flag any criterion that can't be checked with the mirrored fields.

OUTPUT
The rules file, the script, a failure table by owner and a list of criteria that need a new field.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't infer a field from another one; empty means fail.
```

## Ad hoc questions

- How many open deals have no close date?
- Which late-stage deals have no competitor recorded?
- Which lost deals this quarter have no loss reason?
- Which accounts with open deals have no industry?
- Which deals closing this month have no primary contact?
- Which dashboards show no data right now, and why?
- Which owner has the most deals missing an amount?
- How many deals have incomplete stage history?
- Which lost deals have no loss reason and no survey response, so we'll never know why?
- Which accounts are missing a size, so they drop out of segment win rates?
- How many deals are past their close date and still open?
- Which contacts on open deals have no role recorded?
- Which accounts have no ICP fit score?
- Which owner's deals skip stages most often in their stage history?
- How many won deals have no amount, so they're missing from pipeline won?
