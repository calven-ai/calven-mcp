# Forecast inputs

**Team:** Revenue operations · also sales leadership, finance
**Impact:** Medium. The forecast call runs on stage, amount and the rep's confidence. Calven adds the risk signals the CRM does not score: fit, persona coverage, the competitor in the deal and the loss pattern it matches, with the win rates behind each. The forecast itself is submitted in the CRM.
**Prerequisites:** CRM connected (deals, contacts, accounts). Better with win/loss surveys running (loss drivers), competitors tracked and personas approved.

## What the team is trying to do

Give the forecast call a deal-level risk read for the deals that decide the quarter: which committed deals look like past losses, which are single-threaded, which face a competitor we lose to. Done means a risk list for the commit and best-case deals with the evidence per deal. Without the company's own knowledge the forecast is the sum of rep confidence.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the quarter's deals | Open deals closing in the period | Deals by close date, amount, stage, deal type | CRM deals |
| 2 | Score fit | In profile or not | Account fit tier; win rate in versus out of profile | CRM accounts, ICP dashboard |
| 3 | Score threading | Contacts and roles on the deal | Contact count band, roles present; multi-threading win rate | CRM deals, contacts, persona dashboard |
| 4 | Score competitor exposure | Who is in the deal | Competitors in play; win rate per competitor | CRM deals, competitive dashboard |
| 5 | Match loss patterns | Does the deal look like a loss | Deciding loss drivers by segment and competitor; deals matching | Deal drivers, win/loss dashboard |
| 6 | Write the risk list | Per deal: risk flags and evidence | The list for the call | All of the above |
| 7 | Submit the forecast | Categories, numbers, commentary | Calven does not help here | |

## Recommended prompts

### Step 1 to 5: the risk read for the forecast call

```
Using Calven MCP, give me the risk read on deals closing in [period].

CONTEXT
Forecast call on [day]. I want each deal closing in [period] above [amount] flagged for the risks the CRM does not score, with the win rate behind each flag.

PULL FROM THE UNIVERSE
- Open deals closing in [period] with amount, stage, deal type, account fit tier, competitors in play, contact count band and the roles on the deal.
- The ICP dashboard: in-profile versus out-of-profile win rate.
- The persona dashboard: multi-threaded versus single-threaded win rate; which buying roles are on won deals.
- The competitive dashboard: win rate per competitor.
- The win/loss dashboard: top loss drivers by segment and competitor.

BUILD
- Per deal: flags (out of profile, single-threaded, no economic buyer, against an avoid competitor, matches loss pattern X), each with the rate and n behind it.
- A risk order: deals with the most flags and the largest amounts first.

OUTPUT
The risk table, then the five deals to discuss first.

GROUNDING
Rates from the dashboards with n and window; attributes from the mirrored rows. Do not assign probabilities; report flags and the evidence.

[name the period and the amount floor]
```

### Review mode: challenge a committed deal

```
Using Calven MCP, tell me what could sink [deal].

CONTEXT
[Deal] is in commit. I want the evidence for and against before the call.

PULL FROM THE UNIVERSE
- The deal: stage, amount, close date, competitors, contacts and roles, account fit.
- The battlecard for any competitor in play: Where We Lose.
- Deal drivers on past deals in the same segment against the same competitor.
- The persona canvas for the primary contact's role: objections.

BUILD
- Against: the risks with evidence.
- For: what past wins in this profile had that this deal has.
- The question to ask the rep.

OUTPUT
A half page.

GROUNDING
Cite every point. Do not estimate a probability.

[name the deal]
```

### Gap mode: committed deals missing the data the forecast needs

```
Using Calven MCP, list the deals in [period] missing what the forecast needs.

CONTEXT
Before the call: deals missing amount, close date, competitor or a primary contact.

PULL FROM THE UNIVERSE
- Open deals closing in [period] and their fields.

BUILD
- Deals grouped by missing field, with owner.

OUTPUT
The list.

GROUNDING
Report only what the mirrored rows lack.

[name the period]
```

## Ad hoc questions

- Which deals closing this quarter are single-threaded?
- Which committed deals face a competitor we lose to more than we win?
- Is [deal] in profile, and what is the win rate for its tier?
- Which deals closing this month look like last quarter's losses on price?
- Which large deals have no economic buyer listed?
- What is our win rate against [competitor] in [segment]?
- Which deals have no competitor recorded past the proposal stage?
- What did buyers say decided deals like [deal]?

## Good practice

- Flag, do not score. Calven gives rates with n; the forecast category is the manager's call.
- Run the read before the call, so the discussion is about the flagged deals, not about finding them.
- Pair each flag with the rate behind it. "Single-threaded" means more with "multi-threaded deals win at X percent, n".
- Challenge commit deals with the battlecard's Where We Lose. It is the most specific risk list there is.
- Keep the data gap list going to owners weekly.

## Not covered today

- Forecast categories, submission, roll-ups and accuracy tracking. That is the CRM and the forecasting tool.
- Deal activity (emails, meetings, last touch). Calven has contacts and roles, not activity.
- Quota and coverage math.
