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

## Advanced prompts

### Balance territories with an optimisation model

```
Build territories that balance expected revenue across reps, not account counts, using an optimisation model. Use Calven MCP for every account's fit and the win rates and deal sizes that turn fit into expected value.

FILL IN
- Reps: [paste reps with region, segment, ramp status and any accounts they must keep]
- Account pool: [region or segment, or write "all"]
- Constraints: [e.g. max accounts per rep, keep named accounts, no cross-region]

CONTEXT
Our territories split the alphabet and the map. Some reps sit on twice the opportunity of others and quota attainment shows it. I want a carve where each rep's expected bookings are within 10% of the mean, with the rules I set.

FROM CALVEN
- CRM accounts in the pool: region, industry, size, fit score and tier, triggers, open deal flag.
- Win rate, average deal size and sales cycle by tier and segment from the ICP dashboard, with n.
- The ICP's Priority Verticals and Disqualifiers, to drop accounts that shouldn't be in anyone's patch.

BUILD
- Expected value per account: P(win | tier, segment) × average deal size, with a labelled discount for accounts with no contacts.
- Assign accounts to reps to minimise the spread of expected value under my constraints. If you can run code, solve it as an integer program or a greedy heuristic and report the spread.
- Compare against the current carve: spread, Tier 1 count per rep, expected value per rep.

OUTPUT
The assignment as a table I can import, a before-and-after chart of expected value per rep, and the 20 accounts that moved with the reason.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Disqualified accounts are listed, not silently dropped. Where a tier rate has fewer than 10 deals, use the segment rate and say so.
```

### Test how fragile the carve is

```
Run a sensitivity analysis on the territory plan: change the ICP weights and win-rate assumptions and see which assignments survive. Use Calven MCP for the fit scorecard and the rates behind it.

FILL IN
- Proposed carve: [paste or attach the territory assignment]
- Weights to test: [the ICP attributes you're unsure of, or write "the top three"]

CONTEXT
Territories are hard to change mid-year. If the plan only works because one assumption happens to be right, I want to know before reps sign off on it.

FROM CALVEN
- The ICP Fit Scorecard with its weights, and the ICP dashboard's predictive attributes with n.
- Each account's fit score, tier and the attributes behind it.
- Win rate and average deal size by tier, with n and the prior period.

METHOD
- Recompute each territory's expected value with each uncertain weight moved up and down 25%, one at a time.
- Do the same with tier win rates at the low and high end of their prior-period range.
- If you can run code, draw a tornado chart per territory and count how many accounts would change tier in each scenario.
- Call a territory fragile when its rank among territories moves two places or more.

OUTPUT
The tornado chart (or table), the fragile territories with the assumption that breaks each, and the two changes that make the plan robust.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a weight the scorecard doesn't hold; ask for it.
```

### War-game how reps will game the rules

```
War-game the territory rules against reps who want to maximise their own commission, and close the loopholes before launch. Use Calven MCP for the account pool's makeup and how deals actually move between segments.

FILL IN
- Territory rules: [paste the rules: ownership, holdout periods, splits, inbound routing]
- Comp plan highlights: [paste accelerators, splits and quota relief rules]

CONTEXT
Every territory plan gets gamed: reps cherry-pick strong accounts, park weak ones, and fight over inbound. I'd rather find the moves on paper than in the first quarter.

FROM CALVEN
- The pool by tier, segment and region, with counts of accounts that have triggers or open deals.
- Closed deals with their account size, segment and owner, so you can see where deals crossed segment lines.
- The ICP's Segment Tiers, so boundaries are clear.

WAR-GAME
- Play three reps: a top performer, a struggling one and a new hire. Each round, each rep makes the move that earns them most under the rules.
- After each round, I (as RevOps) patch the rule. Run three rounds.
- Score each move on how much it costs the company: expected value lost, customer experience, team trust.

OUTPUT
The moves by round with the cost of each, the patched rule set, and the three monitoring checks to run monthly.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Rep behaviour is your simulation, labelled as such; account counts and deal facts come from Calven.
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
- Which region has the highest share of Tier 1 accounts with a recent trigger?
- How many Tier 1 accounts have never had a contact added?
- Which segment closes fastest, and how many decided deals is that based on?
- Which priority vertical has the lowest win rate, with n?
- How many accounts in [region] sit in a blacklisted vertical?
- What's the average deal size in [region] versus the company?
