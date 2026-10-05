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
