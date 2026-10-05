# Forecast inputs


The forecast call is this week and the commit is mostly rep confidence. You walk in with a risk list for the commit and best-case deals: which ones look like past losses, which are single-threaded, which face a competitor you lose to, with the evidence per deal. Calven brings the loss history that rep confidence leaves out.

## Prompts

### Build the risk read for the forecast call

```
Using Calven MCP, give me the risk read on deals closing in the period below.

FILL IN
- Period: [period, e.g. this quarter]
- Forecast call: [day of the forecast call]
- Amount floor: [amount]

CONTEXT
Forecast call on the day above. I want each deal closing in the period above the amount floor flagged for the risks the CRM does not score, with the win rate behind each flag.

PULL FROM THE UNIVERSE
- Open deals closing in the period with amount, stage, deal type, account fit tier, competitors in play, contact count band and the roles on the deal.
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
```

### Find what could sink a committed deal

```
Using Calven MCP, tell me what could sink the deal below.

FILL IN
- Deal: [deal]

CONTEXT
The deal is in commit. I want the evidence for and against before the call.

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
```

### List deals missing forecast data

```
Using Calven MCP, list the deals in the period below missing what the forecast needs.

FILL IN
- Period: [period, e.g. this quarter]

CONTEXT
Before the call: deals missing amount, close date, competitor or a primary contact.

PULL FROM THE UNIVERSE
- Open deals closing in the period and their fields.

BUILD
- Deals grouped by missing field, with owner.

OUTPUT
The list.

GROUNDING
Report only what the mirrored rows lack.
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
