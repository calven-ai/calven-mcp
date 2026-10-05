# Pipeline reviews

**Team:** Sales leadership · also revenue operations, account executives
**Impact:** High. The weekly review is where a quarter is saved or lost; a review that starts from fit, competitors in play, threading and known loss patterns asks better questions than one that starts from close dates.
**Prerequisites:** CRM connected (deals, accounts, contacts), ICP approved. Better with win/loss surveys running (loss patterns), competitors tracked (battlecards, win rates) and personas approved (buying-group roles).

## What the team is trying to do

Walk the pipeline each week and leave with next actions that move deals, not updated close dates. Done means the manager knows before the meeting which deals are out of profile, which have a competitor we lose to, which are single-threaded, and which look like deals we have lost before, and asks the rep about those. Without the company's own patterns the review is the rep's optimism against the manager's instinct.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the pipeline | Open deals by stage, amount, close date, owner | Open deals with stage, amount band, fit tier, competitors, contact count | CRM deals |
| 2 | Check coverage and shape | Enough pipeline, concentration risk, in profile? | ICP-fit share of pipeline, pipeline by segment, win rates by segment | ICP dashboard, CRM deals |
| 3 | Flag the risks | Which deals look like past losses | Deals with a competitor we lose to, single-threaded deals, out-of-profile deals, deals at a stage where similar ones stalled | Competitive intelligence dashboard, persona dashboard, deal drivers, CRM deals |
| 4 | Prepare the questions | One per flagged deal | The battlecard trap or the loss driver turned into a question for the rep | Competitor battlecard, deal drivers |
| 5 | Run the review | Deal by deal with the rep | Calven does not help here | |
| 6 | Assign next steps | Who does what by when | Calven does not help here | |
| 7 | Track week to week | What moved and why | Calven does not help here; stage history is readable but the review log lives in the CRM | |

## Recommended prompts

### Steps 1 to 4: the review prep

```
Using Calven MCP, prepare my pipeline review for [team or rep] this week.

CONTEXT
Weekly review, [number] open deals. I want the deals to ask about and the question to ask on each, before the meeting.

PULL FROM THE UNIVERSE
- Open deals for [owner or team]: stage, amount band, close date, ICP fit tier, competitors, contact roles on the deal.
- Win rate by competitor and by segment, with samples.
- Single-threaded versus multi-threaded win rate, and the buying-group roles on our won deals.
- The top reasons we lose in [segment], with the buyer's words.

BUILD
- Shape: pipeline in and out of profile, concentration by rep, segment or competitor.
- Flagged deals: each with the flag (out of profile, competitor we lose to, single-threaded, looks like a past loss) and the one question to ask the rep.
- Clean deals: list only.

OUTPUT
A one-page prep sheet, flagged deals first, with the figure and sample behind each flag.

GROUNDING
Use only CRM records and dashboards in the Universe. Cite every rate with n and the window. Do not invent deal context the CRM does not hold; the rep adds that in the meeting.

[name the team or rep]
```

### Step 2: coverage and shape

```
Using Calven MCP, how healthy is our pipeline entering [quarter]?

PULL FROM THE UNIVERSE
- Open deals by stage and segment, with amount bands.
- ICP-fit share of pipeline and win rate for in-profile versus out-of-profile deals.
- Win rate by segment and by deal size band.

BUILD
- The share of pipeline in profile and what it is worth at our in-profile win rate versus the out-of-profile rate.
- Where pipeline concentrates (one rep, one segment, one competitor).
- The two numbers I should raise with RevOps.

OUTPUT
Six lines with figures and samples.

GROUNDING
Use only dashboards and CRM records in the Universe. Never compute a rate from rows; cite the dashboard figure with n.

[name the quarter]
```

### Step 3: deals that look like losses

```
Using Calven MCP, which open deals look like deals we have lost before?

CONTEXT
I want pattern matches, not opinions.

PULL FROM THE UNIVERSE
- Open deals past [stage] with their segment, competitor and contact roles.
- Lost deals in the last [window] in the same segments: loss reason, competitor, the deciding driver and the buyer's words.

BUILD
- For each open deal that matches a loss pattern: the pattern (segment plus competitor, missing role, product gap named in past losses), the past deal it resembles, and what the buyer said then.

OUTPUT
A table, strongest match first.

GROUNDING
Use only CRM records and deal drivers in the Universe and cite the past deal. Do not match on coincidence; say when the sample is thin.

[name the stage and window]
```

### Step 4: the question for one deal

```
Using Calven MCP, what should I ask [rep] about [deal] this week?

PULL FROM THE UNIVERSE
- The deal record: stage, competitors, contact roles, product feedback, price feedback.
- The battlecard for the competitor on it and the loss reasons against them.
- The buying-group roles on our won deals in this segment.

OUTPUT
Three questions, each with the fact behind it.

GROUNDING
Use only the deal record, battlecard and dashboards in the Universe and cite them.

[name the rep and the deal]
```

## Ad hoc questions

- Which open deals are out of profile?
- Which open deals have [competitor] on them, and what is our win rate against them?
- Which deals past proposal have only one contact?
- What is our win rate for single-threaded deals versus multi-threaded, and the sample?
- Which deals have "Price" in price feedback and what do we usually lose on price to?
- How much of [rep]'s pipeline is Tier 1?
- Which segment has the lowest win rate this year?
- Which open deals are at a stage where we lost most deals in [segment] last year?
- What did buyers say in the last three losses to [competitor]?
- Which deals reached proposal but have no economic buyer on record?
- What is the average cycle for in-profile deals, and which open deals are past it?
- Which product gap is named on the most open deals?

## Good practice

- Ask for flagged deals and one question each. A review prep that lists every deal is the CRM again.
- Always ask for n and the window. A 60% win rate on five deals is a story, not a rule.
- Keep the rep's context out of the prep and in the meeting. The AI tool does not know what happened on Tuesday's call.
- Run the pattern match monthly rather than weekly; loss patterns move slowly.
- Hand the flagged deals to the account executives' deal prep page before the next customer call.

## Not covered today

- Forecast categories, commit numbers, quota and attainment. Those live in the CRM and forecasting tool.
- Activity data (calls, emails, meetings logged).
- Updating stages, close dates or next steps in the CRM.
