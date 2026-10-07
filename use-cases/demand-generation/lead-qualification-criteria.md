# Lead qualification criteria


Marketing and sales need to agree which leads get passed over and in what order: the firmographic and persona criteria, the triggers that raise priority, the disqualifiers and the scoring inputs. You walk away with a definition both teams sign, the evidence behind each criterion, and routing rules that follow it. Calven ties each criterion to the ICP and what wins, so nobody's stuck with last year's definition and no memory of why.

## Prompts

### Draft the lead qualification criteria

```
Using Calven MCP, draft our lead qualification criteria from the ICP and what wins.

FILL IN
- Product: [product, or leave blank for all]

CONTEXT
Marketing and sales will sign this. Each criterion needs the evidence behind it. If a product is named, scope everything to it.

PULL FROM THE UNIVERSE
- The ICP: firmographic, technographic and behavioural attributes, segment tiers, buying triggers, disqualifiers, the fit scorecard.
- The ICP dashboard: win rate by attribute, predictive attributes, tech signals, segment win rates, with n.
- The persona dashboard: win rate by persona in the buying group and contact coverage.
- Triggers present on accounts of won deals.

BUILD
- Fit criteria with the win rate behind each, with n.
- Role criteria: which personas qualify a lead and which only add to it.
- Trigger criteria that raise priority, with the evidence.
- Disqualifiers.
- A suggested weighting and the three criteria that matter most.

OUTPUT
A qualification definition with sources, and a one-page version for sales.

GROUNDING
Numbers from the dashboards with n and window. Criteria only from the ICP and dashboards; mark any criterion below the floor as unproven.
```

### Measure recent leads against the criteria

```
Using Calven MCP, show me how recent leads measure against the criteria.

FILL IN
- Window: [time window, e.g. last quarter]

PULL FROM THE UNIVERSE
- The ICP dashboard reality check: fit score distribution and pipeline gap.
- CRM accounts created in the window by fit tier.

BUILD
The share of recent accounts in each fit tier, how much open pipeline is in profile, and where leads fall outside.

OUTPUT
Five lines with the numbers.

GROUNDING
Numbers from the dashboards with n and window.
```

### Review the criteria you already use

```
Using Calven MCP, review our current lead qualification criteria against the ICP and what actually wins.

FILL IN
- Definition: [paste the current definition]

CONTEXT
The definition is the one marketing and sales signed last year: the fit rules, the role rules, the triggers and the disqualifiers.

PULL FROM THE UNIVERSE
- The ICP: attributes, segment tiers, buying triggers, disqualifiers, the fit scorecard.
- The ICP dashboard: win rate by attribute, predictive attributes and segment win rates, with n.
- The persona dashboard: win rate by persona in the buying group.

CHECK
- Each criterion: supported by the ICP and the dashboards, contradicted, or unproven below the floor.
- Attributes and personas the dashboards show predict a win that the definition ignores.
- Disqualifiers in the ICP the definition does not apply.

OUTPUT
The definition annotated with a verdict per criterion, then the changes to propose at the next review.

GROUNDING
Judge only against the ICP and dashboard numbers, with n and window. Do not add a criterion the Universe does not support.
```

## Advanced prompts

### Backtest a lead score on last year's deals

```
Backtest my lead score against last year's closed deals and tell me whether it separates winners from losers. Use Calven MCP for the closed deals and the attributes on them.

FILL IN
- Lead score: [paste the scoring model: attributes, points, MQL threshold]
- Window: [window, e.g. the last 12 months]

CONTEXT
Sales says MQLs are junk; marketing says sales doesn't follow up. If the score can't tell last year's wins from last year's losses, that's the real problem, and nobody has checked.

FROM CALVEN
- Every closed deal in the window, paged from the CRM, with account size, industry, ICP tier, fit score, triggers, contact role, lead source and outcome.
- Win rate by attribute and the predictive attributes from the ICP dashboard, with n.
- Win rate by persona on the deal from the persona dashboard, with n.

BACKTEST
- Score every closed deal with my model, using the fields the CRM holds. List the inputs it can't supply (behavioural points) and score without them, saying so.
- Plot win rate by score decile. Compute AUC and the win rate above and below the MQL threshold.
- Find the attributes my model weights heavily that don't predict a win, and the predictive ones it ignores.
- Propose a reweighted score and backtest it the same way. If you can run code, do it in a notebook and hold out a quarter of the deals to check it isn't overfit.

OUTPUT
Current versus proposed score: AUC, win rate above and below threshold, share of wins captured. Then the new points table.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Firmographics are as the CRM holds them, not as of the lead date; say so. Don't invent behavioural data.
```

### Size the MQL threshold to sales capacity

```
Set the MQL threshold so the leads we pass match what sales can actually work, with a capacity and cost-of-error model. Use Calven MCP for what a lead is worth in each ICP tier.

FILL IN
- Lead volume: [paste leads per week by score band, with the ICP tier mix of each band if you have it]
- Sales capacity: [SDRs, and how many leads one SDR can work properly per week]
- Response time: [target time to first touch]
- Current threshold: [score]

CONTEXT
Lower the threshold and SDRs drown, response times slip and good leads go cold. Raise it and real buyers sit in nurture. The right line depends on capacity, not on a round number.

FROM CALVEN
- Win rate, average deal size and sales cycle by ICP tier from the ICP dashboard, with n.
- Outcomes by lead source on closed deals, paged from the CRM.

MODEL
- Treat the SDR team as a queue. For each candidate threshold, compute arrivals, utilisation and expected wait to first touch. Flag any threshold above 85% utilisation.
- Price the two errors: a false positive costs SDR time; a false negative costs a share of the expected value of a lead in that band, from the tier win rates and deal sizes.
- Find the threshold that minimises total cost while meeting the response time. Show how it moves with one more SDR.
- Build it as a spreadsheet with formulas.

OUTPUT
The spreadsheet, the recommended threshold with its utilisation and wait time, and a chart of total cost against threshold.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. How fast a waiting lead goes cold is an assumption unless I supply it, so range it.
```

### Settle the MQL definition with a judged debate

```
Settle the MQL definition with a structured debate between sales and marketing, judged on the evidence. Use Calven MCP for the facts both sides have to argue from.

FILL IN
- Marketing's definition: [paste it]
- Sales's position: [paste what sales wants instead, or their complaints]
- Segment: [segment, or write "all"]

CONTEXT
We've had the same argument for three quarters, and each side argues from anecdotes. I want both cases made as strongly as possible, on the same evidence, and a ruling.

FROM CALVEN
- The predictive attributes and win rate by tier from the ICP dashboard, with n.
- Win rate by persona and the multi-threading win rate from the persona dashboard, with n.
- The ICP disqualifiers, and the top loss reasons in the segment from the win/loss dashboard, with n.

METHOD
- Marketing's advocate opens with the strongest case for their definition, citing only the evidence above.
- Sales's advocate opens the same way. Then one rebuttal each, which must answer the other side's best point, not its weakest.
- A judge, played as a VP of Revenue who owns both numbers, rules on each disputed criterion: keep, change or drop, with the evidence that decided it.
- Finish with the definition both sides can sign and the one metric that shows next quarter whether it worked.

OUTPUT
The debate in under 600 words, the ruling table, and the agreed definition.

GROUNDING
Every argument cites a Calven number (with n) or is labelled as opinion. Neither side may cite a figure Calven doesn't hold.
```

## Ad hoc questions

- Which attributes predict a win for us, with n?
- What is the win rate for Tier 1 vs Tier 3 accounts?
- Which personas on a deal raise the win rate?
- What are our ICP disqualifiers?
- What share of open pipeline is in profile?
- Which triggers were present on accounts we won?
- Do accounts with [technology] in the stack win more?
- Which segment should we expand the ICP into, per the dashboard?
- What's our win rate by lead source over [window], with n?
- Which ICP disqualifiers did our lost deals hit anyway?
- How long is the sales cycle for Tier 1 against Tier 3, with n?
- Which tech stack signals predict a win, per the ICP dashboard?
- What share of won revenue came from accounts outside Tier 1?
- Which triggers show up on lost deals as often as on won ones?
- Does deal size change with ICP tier, or only the win rate?
