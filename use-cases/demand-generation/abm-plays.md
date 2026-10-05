# ABM plays

**Team:** Demand generation · also business development, account executives, revenue operations
**Impact:** High. An account-based play lives or dies on choosing the right accounts and saying the right thing to each buyer in them; the CRM mirror with ICP fit, the personas and the deal record do both.
**Prerequisites:** CRM connected (accounts with ICP fit, contacts, deals), ICP approved, personas approved, messaging approved. Better with competitors tracked (for displacement plays), transcripts and win/loss (what won similar accounts).

## What the team is trying to do

Run a coordinated play on a list of named accounts: pick them by fit and signal, understand each one's buying group, tailor the message per persona, agree the sequence with sales, and measure engagement. Done means a ranked target list with the reason per account, an account brief per Tier 1 account, persona-level messages and assets, and a play calendar shared with sales. Without the Universe the list is a firmographic export and the messaging is one email for everyone.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Build the target list | Fit, signals, coverage | Accounts by ICP fit tier and score, triggers, region, size; never worked or closed-lost | Crm_accounts, crm_deals |
| 2 | Agree the list with sales | Shared view | The reason per account | ICP, crm_accounts |
| 3 | Map the buying group | Who to reach in each account | Contacts by role; which personas sit on won deals | Crm_contacts, persona dashboard |
| 4 | Write account briefs | The account's situation, history, who | Account record, past deals and loss reasons, contacts | Crm_accounts, crm_deals, crm_contacts |
| 5 | Tailor messages per persona | What each buyer hears | Persona canvases, messaging matrix, segment quotes | Personas, messaging, quotes |
| 6 | Pick the proof | Similar accounts that bought | Won deals in the segment, drivers, quotes | Deal_drivers, quotes |
| 7 | Set the competitive angle | If the account uses a rival | Battlecard, switch reasons | Battlecards, deal_drivers |
| 8 | Build the assets | Landing pages, emails, ads, direct mail copy | From the above | |
| 9 | Run and coordinate with sales | Sequences, ads, weekly reviews | Calven does not help here | |
| 10 | Measure and reprioritise | Engagement, pipeline | The fit read on engaged accounts | Crm_accounts |

## Recommended prompts

### Step 1: the target list

```
Using Calven MCP, build the target account list for an ABM play in [segment].

CONTEXT
We can work [number] accounts. Sales wants fit and a reason per account.

PULL FROM THE UNIVERSE
- CRM accounts in [segment] with ICP fit tier and score, triggers, size, region.
- Which of them have no deal, and which closed lost more than six months ago with the loss reason.
- Our ICP: the attributes that predict a win, and the disqualifiers.

BUILD
A ranked table: account, fit tier and score, the attributes that drive it, triggers, history (never worked / lost on X in month Y), and the one-line reason to include. Exclude disqualified accounts and say why.

OUTPUT
The table, strongest fit first, with the in-profile win rate from the ICP dashboard as context, with n.

GROUNDING
Fit from the Universe only; where an account lacks data for an attribute, say so. Numbers with n.

[name the segment and the number of accounts]
```

### Step 3 and 4: account brief

```
Using Calven MCP, write the account brief for [account].

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

[name the account]
```

### Step 5 and 6: persona messages for the play

```
Using Calven MCP, write the persona messages for the [segment] ABM play.

CONTEXT
The buying group is [personas]. The play runs [channels]. Each persona gets its own message and proof.

PULL FROM THE UNIVERSE
- The persona canvases: pains, KPIs, objections, hooks.
- The messaging matrix for each persona at the awareness and consideration stages.
- Won deals in [segment]: the drivers that decided them and the buyer quotes.

BUILD
For each persona: the opening pain in their words, the message, the proof from a similar account, the objection to pre-empt, and the CTA. Then the one line that ties the personas together for the account.

OUTPUT
A message table by persona, with sources.

GROUNDING
Ground every line in the canvases, matrix and deal evidence, cited. Do not invent outcomes or account names.

[name the segment, personas and channels]
```

### Step 7: displacement play

```
Using Calven MCP, set the angle for accounts on [competitor].

PULL FROM THE UNIVERSE
- CRM accounts with [competitor] in their tech stack, by fit tier.
- The battlecard: where we win, landmines, objection handling.
- Won deals against [competitor]: the switching reasons with quotes.

BUILD
- The accounts worth the play, ranked by fit.
- The three switching reasons in the buyer's words.
- The sequence of messages: trigger, landmine, proof, ask.

OUTPUT
The list and the angle.

GROUNDING
Only the CRM mirror, battlecard and deal evidence, cited.

[name the competitor]
```

### Step 10: reprioritise

```
Using Calven MCP, re-rank the engaged accounts from the play.

CONTEXT
Below are the accounts that engaged, with the engagement signal.

PULL FROM THE UNIVERSE
- ICP fit tier and score for each, and any open deal.
- Missing personas in each account's buying group.

BUILD
The engaged accounts ranked by fit, with the next persona to reach and the message for them.

GROUNDING
Fit and contacts from the Universe only.

[paste the engaged accounts]
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

## Good practice

- Rank by fit and reason, not by logo. Sales accepts a list it can argue with.
- Write the account brief before the messages. The history changes the angle.
- One message per persona. The CFO and the practitioner do not share a pain.
- Use won-deal drivers from the same segment as proof.
- Re-rank on engagement with the fit read; a Tier 3 account that clicked is still Tier 3.

## Not covered today

- Intent data, web visits and ad engagement. Those stay in the ABM platform; paste them in.
- Research on the account beyond the CRM mirror. The AI tool does not browse.
- Sequences, ads and direct mail execution.
- Writing anything back to the CRM.
