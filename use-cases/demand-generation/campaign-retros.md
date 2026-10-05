# Campaign retros

**Team:** Demand generation · also product marketing, content marketing, revenue operations
**Impact:** Medium. The numbers say what happened; the Universe says why. A retro that reads the losing assets against the personas, the customer's language and the objections turns a report into the next brief.
**Prerequisites:** personas approved, messaging approved. Better with transcripts ingested (quotes, language gaps), CRM connected (what the campaign's leads became).

## What the team is trying to do

Explain why a campaign performed as it did and decide what to change. Done means a retro with the numbers the person brings, the diagnosis per weak asset grounded in the persona and the calls, the fit of the leads it produced, and the changes to the next brief. Without the Universe the retro is a dashboard screenshot and opinions.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Gather the numbers | By asset and channel | Calven does not help here; the person pastes them | |
| 2 | Judge lead quality | Were the leads in profile | Accounts from the campaign by fit tier; deals they became | Crm_accounts, crm_deals |
| 3 | Diagnose weak assets | Why the persona did not respond | Persona canvas, objections, language gaps | Personas, quotes, messaging dashboard |
| 4 | Diagnose strong assets | What to repeat | The pain or quote it rested on | Quotes, themes |
| 5 | Check message drift | Did assets stray from the brief | Messaging | Messaging |
| 6 | Write the retro and the changes | For the next brief | Drafted from the above | |

## Recommended prompts

### Step 2: lead quality

```
Using Calven MCP, tell me whether the [campaign] leads were worth having.

CONTEXT
Below are the accounts the campaign produced.

PULL FROM THE UNIVERSE
- Each account's ICP fit tier and score and the attributes behind it.
- Any deal those accounts opened, with stage and outcome.
- The in-profile vs outside win rate from the ICP dashboard, with n.

BUILD
The share of leads by fit tier, what they became, and the segments the campaign over- and under-delivered.

OUTPUT
A short table and three lines.

GROUNDING
Only the CRM mirror and dashboard, cited. Accounts not in the CRM are "unknown fit".

[paste the account list]
```

### Step 3 to 5: diagnosis

```
Using Calven MCP, diagnose the [campaign] results.

CONTEXT
Below are the assets with their numbers: the winners, the losers, and the brief's persona and message.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains, objections, how they talk.
- Themes and quotes on the campaign's topic in [window].
- Our messaging for the persona and stage, and the language gaps the messaging dashboard shows.

DIAGNOSE
- For each loser: the most likely reason, grounded in the persona or quotes, and the fix.
- For each winner: the pain or phrase it rested on and how to repeat it.
- Where assets drifted from the brief.

OUTPUT
The diagnosis per asset and the five changes to the next brief.

GROUNDING
Ground every diagnosis in the Universe and cite it. Where the Universe cannot explain a result, say so and suggest the test.

[paste the assets, numbers, persona and message]
```

### Step 6: the next brief

```
Using Calven MCP, turn the [campaign] retro into the brief for the next one.

CONTEXT
Below is the retro: the diagnosis per asset and the changes we agreed. The next campaign targets [persona] in [segment] at the [stage] stage.

PULL FROM THE UNIVERSE
- The [persona] canvas and the messaging matrix entry for this persona and stage.
- The pains and buying triggers customers in [segment] named most in [window], with a quote for each.
- The objection the last campaign failed to pre-empt, and how our messaging answers it.

BUILD
- The one message the next campaign carries and why it should land, from the retro and the evidence.
- The pain to open on, the proof to use, the objection to pre-empt, each with its source.
- What the last campaign did that we keep, and what we drop.

OUTPUT
A one-page brief the writer can start from, with sources.

GROUNDING
Carry only the changes the retro supports and the evidence the Universe holds. Do not invent a new angle the quotes do not back.

[paste the retro and name the persona, segment and stage]
```

## Ad hoc questions

- Which of these accounts are Tier 1: [paste]?
- Did any deal open from the [campaign] accounts?
- Why would [persona] ignore "[headline]"?
- Which pain did the winning asset rest on, and how common is it?
- Did the campaign's assets use language customers use?
- Which objection did the campaign fail to pre-empt?
- What should the next [segment] campaign open on?
- Did the leads from [campaign] close at the in-profile win rate or below it?
- Which of the campaign's claims are not in the product brief?

## Good practice

- Bring the numbers; the Universe has none. Paste assets with their results.
- Judge leads by fit before judging the creative. A winning ad that pulled Tier 3 is a loser.
- Ask for the fix per asset, then roll the fixes into the next brief.

## Not covered today

- Attribution, funnel and ad-platform data.
- Accounts not in the CRM.
