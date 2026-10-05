# Territory planning


You're designing or rebalancing territories and the pool is sorted by region and headcount. You get the account pool scored and segmented, the imbalance quantified, and the proposed moves with reasons, so each territory carries comparable potential. The assignment happens in the CRM or the planning tool; Calven shows where the strong fits are and the whitespace where you win.

## Prompts

### Score and segment the account pool

```
Using Calven MCP, give me the account pool for territory planning, scored and segmented.

FILL IN
- Planning period: [year or quarter]

CONTEXT
I am rebuilding territories for the planning period. I need every account by tier, segment and region, and the evidence of which attributes predict a win so I can weight potential.

PULL FROM THE UNIVERSE
- Our ICP: segment tiers, priority and secondary verticals, disqualifiers.
- CRM accounts with fit score, fit tier, industry, size, region, employee band, revenue band, funding stage.
- The ICP dashboard: win rate by attribute, predictive attributes, segment win rates, average deal size by fit, with n and window.

BUILD
- The pool: counts of accounts by tier, by priority vertical, by region, by size.
- The weights: the attributes with the highest win rate and the largest deal size lift, with n.
- Disqualified accounts counted separately.

OUTPUT
The pool tables and the weight table.

GROUNDING
Tiers and attributes from the rows; rates from the ICP dashboard with n and window. Do not invent weights the dashboard does not support.
```

### Show how potential splits across territories

```
Using Calven MCP, show me how potential is distributed across the current territories.

FILL IN
- Territory mapping: [paste the mapping of owner or region to accounts, or write "use region"]

CONTEXT
Use the territory mapping, or the region on the account if it says "use region". I want potential per territory, not account count.

PULL FROM THE UNIVERSE
- CRM accounts by region (or by the owner on their deals) with fit tier and segment.
- Open and won deals per segment and region in the last four quarters.

BUILD
- Per territory: Tier 1 accounts, Tier 2 accounts, priority-vertical accounts, accounts with no deal ever, open pipeline, won in the last four quarters.
- The imbalance: the ratio between the strongest and the weakest territory on Tier 1 count and on untouched Tier 1 accounts.

OUTPUT
The balance table and the imbalance lines.

GROUNDING
Use only mirrored rows. Owner data comes from deals, not accounts; say so where an account has no deal and therefore no owner.
```

### Explain a territory to its rep

```
Using Calven MCP, explain the territory below to its rep and flag what changed since the plan.

FILL IN
- Territory: [territory name]
- Plan date: [date the plan was set]

CONTEXT
The plan was set on the plan date. The rep wants to know why their territory looks as it does, and I want the drift.

PULL FROM THE UNIVERSE
- The accounts in the territory with tier, attributes and triggers.
- The ICP dashboard's segment win rates for the segments in the territory.
- Accounts whose tier or attributes changed since the plan date, if the CRM mirror shows it.

BUILD
- The rep's page: the territory in numbers, the ten accounts to work first with reasons, the segments where we win.
- The drift: accounts that moved tier, segments whose win rate moved.

OUTPUT
The rep page, then the drift list.

GROUNDING
Reasons come from the account attributes and the ICP; rates from the dashboard with n. Do not promise potential beyond what the rows show.
```

## Ad hoc questions

- How many Tier 1 accounts are in [region]?
- Which attributes predict a win most, with n?
- Which priority vertical has the most untouched Tier 1 accounts?
- Which territory has the fewest strong-fit accounts?
- What is the average deal size for Tier 1 versus Tier 3?
- Which accounts in [territory] are disqualified by the ICP?
- Which segment should we expand into, according to the ICP dashboard?
- Which accounts changed tier this quarter?
- How much won pipeline came from [region] in the last four quarters?
- Which accounts in [territory] show a trigger right now?
