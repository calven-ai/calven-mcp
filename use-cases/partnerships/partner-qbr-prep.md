# Partner QBR prep


You're prepping the partner QBR and the pipeline numbers don't explain anything on their own. You walk in with why their deals were won and lost, what competitors did, what's happening in their segment, where enablement is thin, and a joint plan with named accounts. The numbers come from the PRM or CRM; Calven brings the why and the market context.

## Prompts

### Prepare the market and win/loss section

```
Using Calven MCP, prepare the market and win/loss section of the QBR with the partner below for the quarter.

FILL IN
- Partner: [partner]
- Quarter: [quarter]
- Segment: [segment]
- Region: [region]

CONTEXT
The partner sells into the segment in the region. I have their pipeline numbers. I need why deals were won and lost, what competitors did, and what the market did, for their segment.

PULL FROM THE UNIVERSE
- Deals in the segment in the quarter with the partner as lead source if recorded, otherwise all deals in the segment: outcomes, loss reasons, competitors.
- Deal drivers on those deals: top win and loss reasons with evidence quotes.
- The competitive performance read for the quarter: win rate per competitor with n; competitive signals in the quarter.
- Trends and opportunities touching the segment.

BUILD
- Why we won and why we lost in this segment, with quotes.
- The competitors that mattered and what they did.
- The two market shifts the partner should know.
- The one enablement gap the loss reasons point at.

OUTPUT
A QBR section in that order, with sources and n.

GROUNDING
Numbers from the dashboards only, with n and window. If partner-sourced deals are not tagged in the CRM, say so and use the segment view, labelled.
```

### List joint target accounts

```
Using Calven MCP, list the accounts to work on with the partner below next quarter.

FILL IN
- Partner: [partner]
- Segment: [segment]
- Region: [region]

CONTEXT
The partner covers the segment in the region. I want accounts in profile that nobody is working, or that we lost long enough ago to retry.

PULL FROM THE UNIVERSE
- CRM accounts in the segment and region by ICP tier.
- Deals on those accounts: none, open, or closed-lost more than 6 months ago with the loss reason.
- Contacts known at each.

BUILD
- A table: account, tier, status (never worked / lost on <reason> on <date>), known contact, suggested angle.

OUTPUT
The ranked table with sources.

GROUNDING
Use only CRM data in the Universe. Exclude accounts with an open deal. If contact names are withheld, give the role.
```

### Find objections your talk track misses

```
Using Calven MCP, which objections came up in the partner's deals that our partner talk track does not cover?

FILL IN
- Partner: [partner, or leave blank and name the segment]
- Segment: [segment, or leave blank]

CONTEXT
I want to fix the enablement kit before next quarter.

PULL FROM THE UNIVERSE
- Deal drivers that hurt us on deals with the partner as lead source (or in the segment), grouped.
- The objection handling section of our messaging.

BUILD
- A list: objection, how often, whether the messaging covers it, suggested fix.

OUTPUT
The list with sources.

GROUNDING
Count only recorded drivers. Flag uncovered objections for the PMM rather than writing responses.
```

## Advanced prompts

### Find what drives this partner's wins

```
Run a driver analysis on this partner's deals to find what actually separates their wins from their losses, so the QBR is about levers, not totals. Use Calven MCP for the deal attributes, the buyers' stated reasons and the segment benchmark.

FILL IN
- Partner: [partner]
- Window: [window]
- Their deals: [paste the deal names the partner sourced or influenced, or write "use lead source"]
- Their activity data: [attach what they track: rep, first meeting date, demo date, certification, or write "none"]

CONTEXT
Most partner QBRs show pipeline totals and argue about them. I want to walk in with three findings about what wins for this partner and a plan built on them.

FROM CALVEN
- The partner's closed CRM deals in the window: size, industry, ICP tier, competitors, contact roles, furthest stage, cycle, loss reason.
- Deal drivers for any of those deals that were surveyed.
- Win rate and sales cycle for the partner's segment from the ICP dashboard, with n, as the benchmark.

METHOD
- Join the CRM fields with the partner's activity data on deal name.
- Compare wins and losses on each attribute and report the difference with the n behind it.
- If there are 30 or more closed deals and you can run code, fit a logistic regression on the four strongest attributes and report the effects with intervals. Below that, stay with the comparisons and say why.
- Check the findings against the deal drivers: does what buyers said match what the fields show?

OUTPUT
Three findings with evidence, the partner's results against the segment benchmark, and the two changes for next quarter that follow from them.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counts from paged deals are row counts, not dashboard rates. Don't claim a driver from fewer than ten deals.
```

### Replay the partner's lost deals

```
Replay the partner's lost deals as counterfactuals: what if they'd brought us in earlier, engaged a second buyer, or used the battlecard? Use Calven MCP for the deals, the buyers' own reasons and the competitive playbook.

FILL IN
- Partner: [partner]
- Quarter: [quarter]
- Partner's lost deals: [paste the deal names, or write "use lead source"]

CONTEXT
"We lost on price" ends most QBR conversations. I want to show the partner which losses were winnable, what would have changed them and what that's worth, so next quarter's plan has teeth.

FROM CALVEN
- Each lost deal from the CRM: furthest stage, contact roles, competitor, loss reason, price and product feedback.
- Survey responses and deal drivers for the lost deals that were surveyed.
- The battlecard for each competitor that won, and the multi-threading win rate from the persona dashboard, with n.

METHOD
- For each deal, write a short timeline from the fields and, where there is one, the buyer's own account.
- Test three counterfactuals: we got involved earlier, a second buyer persona was engaged, a battlecard move was used. Judge whether each plausibly changes the outcome, citing the evidence.
- Sort the deals into lost for good, winnable with one change, and unclear.
- Sum the value of the winnable ones as a range.

OUTPUT
A table per deal with the counterfactual verdicts, the winnable value range, and the one behaviour change to agree with the partner at the QBR.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Mark each counterfactual as your judgement. Don't put words in a buyer's mouth the survey doesn't contain, and keep amounts out of any version the partner sees.
```

## Ad hoc questions

- What were the top loss reasons in [segment] last quarter?
- What is our win rate against [competitor] in [segment], with n?
- What did [competitor] change last quarter?
- Which trends touch [segment] right now?
- Which Tier 1 accounts in [region] has nobody worked?
- Which deals in [segment] did we lose on price, and what did buyers say?
- Are partner-sourced deals tagged by lead source in our CRM?
- Which objections hurt us most in [segment] deals?
- Which accounts lost more than six months ago on [reason] are worth a retry?
- What proof point from [segment] can I show the partner?
- How does our win rate in [segment] compare with the prior period?
- Which competitor took the biggest share of our losses this quarter?
- Which [segment] deals ran single-threaded, and how did they end?
- What did win/loss respondents say about our sales team?
- Which approved market opportunity in [segment] could anchor next quarter's joint plan?
- Did average deal size in [segment] move against the prior period?
