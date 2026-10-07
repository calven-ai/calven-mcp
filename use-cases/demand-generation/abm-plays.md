# ABM plays


You're running a play on named accounts: picking them by fit and signal, mapping each buying group, tailoring the message per persona and agreeing the sequence with sales. You walk away with a ranked target list with the reason per account, a brief per Tier 1 account, persona-level messages and assets, and a play calendar shared with sales. With Calven the list is more than a firmographic export, and the messaging is more than one email for everyone.

## Prompts

### Build the ABM target account list

```
Using Calven MCP, build the target account list for an ABM play in the segment below.

FILL IN
- Segment: [segment]
- Accounts: [number of accounts we can work]

CONTEXT
We can work the number of accounts above. Sales wants fit and a reason per account.

PULL FROM THE UNIVERSE
- CRM accounts in the segment with ICP fit tier and score, triggers, size, region.
- Which of them have no deal, and which closed lost more than six months ago with the loss reason.
- Our ICP: the attributes that predict a win, and the disqualifiers.

BUILD
A ranked table: account, fit tier and score, the attributes that drive it, triggers, history (never worked / lost on X in month Y), and the one-line reason to include. Exclude disqualified accounts and say why.

OUTPUT
The table, strongest fit first, with the in-profile win rate from the ICP dashboard as context, with n.

GROUNDING
Fit from the Universe only; where an account lacks data for an attribute, say so. Numbers with n.
```

### Write the account brief

```
Using Calven MCP, write the account brief for the account below.

FILL IN
- Account: [account]

PULL FROM THE UNIVERSE
- The account record: industry, size, region, tech stack, triggers, ICP fit and why.
- Every deal with this account: stage, outcome, loss reason, competitors, contacts on it.
- Contacts at the account by role and lifecycle stage.
- Which personas are missing from the buying group compared with won deals in this segment.

BUILD
- The account in five lines.
- History with us and what it means for the approach.
- The buying group: who we know, their role, who we are missing.
- The angle, from the triggers and the segment's top pains.

OUTPUT
A one-page brief for marketing and the AE.

GROUNDING
Only the CRM mirror and dashboards in the Universe, cited. Contact details follow the workspace security settings. Do not research the account elsewhere.
```

### Write persona messages for the play

```
Using Calven MCP, write the persona messages for the ABM play in the segment below.

FILL IN
- Segment: [segment]
- Personas: [the personas in the buying group]
- Channels: [channels]

CONTEXT
The buying group is the personas above. The play runs on the channels above. Each persona gets its own message and proof.

PULL FROM THE UNIVERSE
- The persona canvases: pains, KPIs, objections, hooks.
- The messaging matrix for each persona at the awareness and consideration stages.
- Won deals in the segment: the drivers that decided them and the buyer quotes.

BUILD
For each persona: the opening pain in their words, the message, the proof from a similar account, the objection to pre-empt, and the CTA. Then the one line that ties the personas together for the account.

OUTPUT
A message table by persona, with sources.

GROUNDING
Ground every line in the canvases, matrix and deal evidence, cited. Do not invent outcomes or account names.
```

### Set the angle for displacement accounts

```
Using Calven MCP, set the angle for accounts on the competitor below.

FILL IN
- Competitor: [competitor]

PULL FROM THE UNIVERSE
- CRM accounts with the competitor in their tech stack, by fit tier.
- The battlecard: where we win, landmines, objection handling.
- Won deals against the competitor: the switching reasons with quotes.

BUILD
- The accounts worth the play, ranked by fit.
- The three switching reasons in the buyer's words.
- The sequence of messages: trigger, landmine, proof, ask.

OUTPUT
The list and the angle.

GROUNDING
Only the CRM mirror, battlecard and deal evidence, cited.
```

### Re-rank the engaged accounts

```
Using Calven MCP, re-rank the engaged accounts from the play.

FILL IN
- Engaged accounts: [paste the engaged accounts with the engagement signal]

CONTEXT
The engaged accounts are the ones that engaged, with the engagement signal.

PULL FROM THE UNIVERSE
- ICP fit tier and score for each, and any open deal.
- Missing personas in each account's buying group.

BUILD
The engaged accounts ranked by fit, with the next persona to reach and the message for them.

GROUNDING
Fit and contacts from the Universe only.
```

## Advanced prompts

### Backtest the target list on last year's deals

```
Backtest how I pick ABM accounts against last year's closed deals before I commit the list. Use Calven MCP for the ICP scorecard and the closed deals to test it on.

FILL IN
- Segment: [segment]
- Window: [window, e.g. the last 12 months]
- My selection rule: [paste how you pick accounts: fit score cut-off, size, triggers, intent signals]

CONTEXT
I'm about to put a quarter of sales and marketing time behind a list of named accounts. If my rule can't tell last year's winners from last year's losers, it won't pick next year's either.

FROM CALVEN
- The ICP fit scorecard and the segment tiers from the ICP document.
- Every closed deal in the segment for the window, paged from the CRM, with account, ICP tier, fit score, triggers, tech stack, outcome and amount.
- The ICP dashboard's predictive attributes and win rate by attribute, with n.

BACKTEST
- Apply my rule to the accounts behind those deals and split them into "would have picked" and "would have skipped".
- Compare win rate, average deal size and revenue captured for each half. Show precision (wins among picks) and recall (share of all wins the rule caught).
- Then try two alternatives: the ICP scorecard alone, and the scorecard plus the strongest predictive attribute. Same metrics.
- If you can run code, do it in a notebook and show a lift chart for each rule.

OUTPUT
A table of the three rules with precision, recall, win rate, revenue captured and list size. Then the rule I should use and the wins my current rule would have missed.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Fit scores and triggers are as the CRM holds them, not as of the deal date; say so. Flag the segment if too few deals closed to trust the comparison, and don't backfill a field a deal doesn't carry.
```

### Split the ABM budget by expected value

```
Split my ABM budget across one-to-one, one-to-few and one-to-many by expected value, not by habit. Use Calven MCP for win rates, deal sizes and cycle length by ICP tier.

FILL IN
- Budget: [ABM budget for the period]
- Tier mapping: [which ICP tiers go into 1:1, 1:few and 1:many]
- Cost per account: [paste what one account costs you in each program tier, or write "estimate it"]
- Window: [window]

CONTEXT
Every quarter the 1:1 tier gets the most money because it feels most strategic. I want to know whether the marginal dollar earns more there or one tier down.

FROM CALVEN
- Win rate, average deal size and sales cycle for Tier 1, Tier 2 and Tier 3 from the ICP dashboard, with n.
- The count of CRM accounts per ICP tier, and how many already have an open deal.
- The multi-threading win rate against single-threaded from the persona dashboard, with n.

MODEL
- For each program tier, expected value per account = chance of an opportunity × win rate × deal size, discounted for cycle length. The opportunity rate is my number or a labelled assumption.
- Treat heavier coverage as a lift on win rate, capped by the multi-threading gap. Range it.
- Allocate so the last dollar in each tier earns about the same. Show the diminishing-returns curve per tier.
- Build it as a spreadsheet with formulas I can change, not a static table.

OUTPUT
The spreadsheet, a one-line allocation per program tier, and the two assumptions that would flip it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The multi-threading gap is a ceiling, not proof that ABM causes it; don't present it as the effect.
```

### Plan the path into the buying committee

```
Plan the order I reach the buying committee at one account, as a decision tree with odds. Use Calven MCP for who we know there, which roles sit on our wins and what threading does to the win rate.

FILL IN
- Account: [account]
- Deal: [deal, or write "no open deal"]

CONTEXT
We have one or two contacts at this account and a quarter to turn it into a real opportunity. Who I go to next, and through whom, matters more than what the first email says.

FROM CALVEN
- The account's contacts with role and lifecycle stage, and its deal history, from the CRM.
- Contact roles on won versus lost deals in the account's segment, and win rate by persona and by threading from the persona dashboard, with n.
- The persona canvases for the roles missing at the account: goals, pains, objections, watering holes.

METHOD
- Map the committee: known contacts, missing roles, the likely blocker. Take each role from the CRM, not from a guess at the title.
- Build a decision tree of entry sequences (champion first, then economic buyer; technical buyer first; and so on). At each branch, estimate the chance the next person engages and what that does to the deal's odds, anchored on the persona dashboard.
- Pick the sequence with the highest expected value, plus the fallback if the first contact goes quiet.
- For each step, write the one message that persona needs, from their canvas.

OUTPUT
The committee map, the decision tree with probabilities, the recommended path with a message per step, and the signal that says switch to the fallback.

GROUNDING
Label every probability as Calven (cited, with n) or your assumption. Don't invent contacts or roles the CRM doesn't hold; list missing roles as gaps to source.
```

## Ad hoc questions

- Which Tier 1 accounts in [segment] has nobody worked?
- Which accounts closed lost on [reason] more than six months ago?
- What is our in-profile win rate vs outside, with n?
- Who do we know at [account], and what roles are missing?
- Why did we lose [account] last time, and who was the champion?
- Which accounts have [trigger: recent funding, exec hire]?
- Which personas sit on won deals in [segment] that lost deals lack?
- What would [persona] at a [segment] account care about first?
- Which accounts run [competitor]?
- What proof do we have from accounts like [account]?
- What is [account]'s ICP fit score and why?
- Which segment closes fastest for us?
- Which Tier 1 accounts picked up a trigger in the last 90 days but have no open deal?
- Which accounts we lost to [competitor] still have their champion in the CRM?
- How much higher is the win rate on multi-threaded deals than single-threaded, with n?
- Which contact role is most often missing on our lost deals in [segment]?
- Which Tier 2 accounts share the most attributes with our last five Tier 1 wins?
- Which open deals in [segment] have only one contact on them?
- What did [persona] at won accounts say made them buy, verbatim?
