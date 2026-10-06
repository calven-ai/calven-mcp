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

## Advanced prompts

### Forecast each commit deal from its reference class

```
Forecast each committed deal from the outside view: find the closed deals most like it, take their win rate, and only then adjust for what's specific. Use Calven MCP for the commit deals and their closest closed lookalikes.

FILL IN
- Commit deals: [paste the deals in commit with amount and close date]
- Window for lookalikes: [window, e.g. the last six quarters]

CONTEXT
Reps forecast from the inside view: the champion loves us, the demo went well. Superforecasters start from the base rate of similar cases. I want both views per deal and the gap between them.

FROM CALVEN
- Each commit deal: stage, fit tier, size band, industry, competitors, contact roles, lead source, opened date.
- Closed deals in the window with the same fields and status, paged through.
- Win rates by tier, competitor and threading from the dashboards, with n, as a cross-check.

METHOD
- For each commit deal, pick the 15 to 30 closed deals most similar on tier, size band, competitor and stage reached. Show the matching rule.
- The reference-class win rate is the outside view. Then adjust up or down for at most two deal-specific facts, each stated.
- Compare with the rep's commit. Flag deals where the outside view is under 50%.
- If you can run code, sum the deals as Bernoulli draws to get the commit's expected value and spread.

OUTPUT
A table: deal, amount, reference class size, outside-view rate, adjusted rate, rep call, gap. Then the commit's expected value and the five deals to challenge on the call.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A reference class under 10 deals is reported as too small, with the tier rate used instead.
```

### Stress-test the commit as the CFO

```
Stress-test this week's commit the way a sceptical CFO would before it goes to the board, and help me defend or cut every deal. Use Calven MCP for the evidence on each deal and the loss patterns that match it.

FILL IN
- Commit list: [paste deal, amount, stage, close date, rep's reason]
- Last quarter: [last quarter's commit versus actual, if you have it]

CONTEXT
The CFO will question the number before the board does. I want the hardest questions asked in private, with the evidence ready, and the deals I can't defend cut before the call.

FROM CALVEN
- Each deal's record: fit tier, competitors, contact roles, stage history, opened date.
- Win rate against each competitor and multi-threaded versus single-threaded win rate, with n.
- Top loss drivers for deals in the same segment, with buyer quotes.

RED-TEAM
- Play a CFO who has seen three missed quarters. For each deal, ask the one question that hurts most: no economic buyer, a competitor we lose to, a deal older than our won cycle, a loss pattern match.
- Answer each with the evidence, or concede.
- Grade each deal: defend, haircut (give a percentage), or move out.
- Recompute the commit after the haircuts and compare with last quarter's accuracy.

OUTPUT
The interrogation as a table (deal, CFO question, answer, evidence, grade), the revised commit, and a three-line note I can send the CFO.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Haircuts are your assumption unless a rate supports them; say which.
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
- Which commit deals have a contact marked as Blocker?
- How long do won deals in [segment] usually sit at the negotiation stage?
- Which deals in the forecast have been pushed past their original close date, by stage history?
- What did buyers say in deals we lost after reaching the final stage?
- Which competitor shows up most in deals closing this month?
- What's our win rate on Renewal versus New Business deals this year?
- Which forecast deals are at accounts with a negative customer quote in the last quarter?
