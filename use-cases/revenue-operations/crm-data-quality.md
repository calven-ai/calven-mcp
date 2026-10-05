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

## Ad hoc questions

- How many open deals have no close date?
- Which late-stage deals have no competitor recorded?
- Which lost deals this quarter have no loss reason?
- Which accounts with open deals have no industry?
- Which deals closing this month have no primary contact?
- Which dashboards show no data right now, and why?
- Which owner has the most deals missing an amount?
- How many deals have incomplete stage history?
