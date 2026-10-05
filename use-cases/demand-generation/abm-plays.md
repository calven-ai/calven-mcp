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
