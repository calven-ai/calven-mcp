# Lead routing rules


Your scoring sheet weights job title and company size by habit, and you need to decide who gets which leads and how fast. You get a scoring and routing spec with every rule traced to an ICP criterion or a measured win predictor, plus a check of the current rules against that evidence. Calven supplies the ICP and the predictors, so each rule has a reason.

## Prompts

### Check lead scoring against the win predictors

```
Using Calven MCP, check our lead scoring model against the ICP and the win predictors.

FILL IN
- Scoring sheet: [paste the scoring sheet: attributes, values and points]

CONTEXT
I want each weight in the scoring sheet traced to an ICP criterion and to a measured win-rate lift, and the weights that have no evidence.

PULL FROM THE UNIVERSE
- The ICP: attributes, segment tiers, disqualifiers, the fit scorecard.
- The ICP dashboard: win rate by attribute, predictive attributes, tech win signals, with n and the baseline.
- The persona dashboard: win rate by persona and buying role.

CHECK
- Per scoring line: the ICP criterion it encodes (or none), the measured lift (or below floor), and a verdict: keep, raise, lower, drop.
- Attributes with a measured lift that the sheet does not score.
- Disqualifiers the sheet does not apply.

OUTPUT
The annotated sheet, then the additions and the disqualifiers.

GROUNDING
Lifts from the dashboard with n; criteria from the ICP. Do not propose a weight for an attribute below the floor.
```

### Write the inbound routing spec by persona

```
Using Calven MCP, write the routing spec for inbound leads by persona and fit.

CONTEXT
Routing: Tier 1 accounts to AEs, Tier 2 to BDRs, Tier 3 to nurture, disqualified to a holding queue; within an account, the contact's persona decides the play. I need the spec with the mapping from title to persona.

PULL FROM THE UNIVERSE
- Personas with role title, seniority, department and buying role.
- The ICP's tiers and disqualifiers.
- The persona dashboard: which buying roles convert and which personas are on won deals.

BUILD
- The title-to-persona mapping table with the buying role.
- The routing rules by tier and persona, each with the criterion and the evidence.
- The exceptions: titles that match no persona.

OUTPUT
The spec.

GROUNDING
Use only approved personas and the ICP. Titles that match no persona go to exceptions, not to a guess.
```

### Audit last quarter's routed leads

```
Using Calven MCP, audit last quarter's routed leads against fit.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know whether strong-fit accounts reached an opportunity faster than weak-fit ones, as a check on the routing.

PULL FROM THE UNIVERSE
- Contacts with lifecycle stage and their account's fit tier.
- Deals opened in the window by account tier and lead source.
- The ICP dashboard's ICP-fit pipeline share for the window.

BUILD
- Contacts by tier and lifecycle stage.
- Deals opened by tier and lead source.
- Tier 1 accounts with contacts still at Lead or MQL.

OUTPUT
The two tables and the stuck list.

GROUNDING
Use mirrored rows and the dashboard share. Calven has no timestamps for stage changes on contacts; say so and report the current stage.
```

## Advanced prompts

### Replay new routing rules on last year's leads

```
Replay a proposed set of routing rules on last year's contacts and deals, and show what would have gone to the right queue and what would have been dropped. Use Calven MCP for the contacts, the deals they became and the win predictors.

FILL IN
- Proposed rules: [paste the routing and scoring rules]
- Current rules: [paste the rules in place, or write "none"]
- Window: [window]

CONTEXT
Routing changes go live on a guess, and the first sign they're wrong is a won deal that sat in a nurture queue for six weeks. I'd rather replay the rules on history first.

FROM CALVEN
- Contacts created in the window with title, persona role, lifecycle stage and account, paged through.
- The deals those accounts opened, with status, amount and lead source.
- The accounts' fit tier and score, and the ICP's Disqualifiers.
- Win rate by persona and by first contact role from the persona dashboard, with n.

BACKTEST
- Apply each rule set to every contact as if it arrived fresh. Record the queue it lands in.
- For contacts whose account went on to win, count how many each rule set routed to sales first. For losses and disqualified accounts, count how many it sent to sales anyway.
- If you can run code, report a confusion matrix per rule set and the won pipeline each one would have delayed.

OUTPUT
A side-by-side of current and proposed rules: won pipeline routed correctly, won pipeline misrouted, sales time spent on disqualified accounts. Then the three rule edits that fix the worst misroutes.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Contacts with no title or role are counted and reported, not guessed into a persona.
```

### Size the sales queue the rules will create

```
Model the queue the new routing rules will create: how many leads per rep per week, how long each waits, and where the SLA breaks. Use Calven MCP for how many accounts and contacts match each rule and how they convert.

FILL IN
- Routing rules: [paste the rules]
- Inbound volume: [leads per week, by source if you have it]
- Capacity: [reps or SDRs on the queue and the first-touch time per lead]
- SLA: [target response time]

CONTEXT
A tighter score sends more leads to sales, and nobody checks whether the team can answer them inside the SLA. A slow first touch costs more than a missed lead.

FROM CALVEN
- The share of contacts in the last two quarters that would match each rule, from contacts with persona role and account fit tier.
- Lead-to-deal conversion and win rate by lead source and by fit tier, from the dashboards, with n.
- The ICP's Disqualifiers, to estimate how many leads the rules drop.

MODEL
- Split my inbound volume by rule using the match shares.
- Treat each queue as an M/M/c system: arrival rate, service rate, servers. Compute utilisation and the expected wait. If you can run code, simulate a week with peaks.
- Find the volume or rule threshold where the SLA breaks.
- Estimate the pipeline at risk from slow first touch as a labelled assumption.

OUTPUT
A table per queue: arrivals, utilisation, expected wait, SLA hit rate. Then the breaking point and the cheapest fix (headcount, a stricter rule, or a nurture lane).

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a conversion rate for a source the dashboards don't break out; use the overall rate and flag it.
```

## Ad hoc questions

- Which ICP attributes should carry the most points?
- Which persona converts best, and what titles map to it?
- Which Tier 1 accounts have contacts stuck at MQL?
- Does company size predict a win in our data?
- Which disqualifiers should routing apply?
- What is the win rate when the first contact is a technical buyer?
- Which lead source produces the most in-profile deals?
- What titles do our economic buyer personas hold?
- Which attribute in our scoring sheet has no win-rate evidence?
- Which job titles show up on won deals but aren't mapped to any persona?
- How many contacts at Tier 1 accounts are still Lead after 90 days?
- Which lead source sends the most contacts at disqualified accounts?
- Do deals that start with an end user win less than ones that start with a buyer?
- Which persona converts from MQL to opportunity fastest?
- Which accounts have more than five contacts and no opportunity?
