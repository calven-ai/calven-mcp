# CRM data quality

**Team:** Revenue operations · also sales leadership
**Impact:** Medium. Every number in this folder depends on CRM fields being filled. Calven mirrors the CRM and counts what is missing (deals without size or close date, no competitor past proposal, no primary contact, accounts without industry), which gives RevOps a hygiene list tied to the analyses it breaks. The fix happens in the CRM.
**Prerequisites:** CRM connected.

## What the team is trying to do

Find the gaps in the CRM that break forecasting, win-rate cuts and ICP scoring, assign them to owners, and track whether they close. Done means a weekly gap list by owner and the analyses each gap affects. Without the company's own knowledge the hygiene report is a generic completeness score.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the fields that matter | Which fields feed which analysis | The fields Calven's dashboards depend on: amount, close date, outcome, competitors, loss reason, contact roles, account industry, size, region | Capabilities |
| 2 | Count the gaps | How many rows lack them | Deals missing size or close date (scoreboard), deals with incomplete stage history, accounts without industry or size, contacts without role | Win/loss dashboard, CRM deals, accounts, contacts |
| 3 | Assign | Who fixes what | Deals by owner | CRM deals |
| 4 | Show the cost | What each gap breaks | Which dashboard sections read as placeholders because of the gap | Insights overview (availability) |
| 5 | Fix | Edit in the CRM | Calven does not help here | |
| 6 | Re-measure | Did it close | The same counts next week | Same |

## Recommended prompts

### Step 2 to 4: the weekly gap list

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

### Step 6: did the gaps close

```
Using Calven MCP, compare this week's CRM gaps with last week's list.

CONTEXT
Below is last week's gap list. I want what closed, what is still open and what is new.

PULL FROM THE UNIVERSE
- The same gap counts and rows as last week's prompt.

CHECK
- Closed, still open, new, by owner.

OUTPUT
The three lists and the count trend.

GROUNDING
Compare row by row on the mirrored data; do not estimate.

[paste last week's list]
```

### Step 1 and 4: which fields feed which analysis

```
Using Calven MCP, map our CRM fields to the analyses they feed and show which ones are failing today.

CONTEXT
I am writing the required-field policy for sales. I want each field tied to the number it feeds, and the dashboards that currently show no data because of a gap.

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

[name the product if scoped]
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

## Good practice

- Tie every gap to the analysis it breaks. Owners fix what they understand.
- Start with deals closing this quarter; those gaps hit the forecast first.
- Run it weekly and track the count. Hygiene is a trend, not a cleanup.
- Use the availability note as the headline. "Two dashboards empty" is the number leadership hears.

## Not covered today

- Editing, deduplicating or enriching CRM records.
- Fields Calven does not mirror (custom fields, activity, tasks).
- Validation rules and required-field settings in the CRM.
