# Campaign retros


The campaign's numbers are in and you need to explain why it performed as it did and decide what to change. You walk away with a retro: your numbers, a diagnosis per weak asset grounded in the persona and the calls, the fit of the leads it produced, and the changes to the next brief. Calven brings the persona and the call evidence, so the retro is more than a dashboard screenshot and opinions.

## Prompts

### Judge whether the leads were worth having

```
Using Calven MCP, tell me whether the leads from the campaign below were worth having.

FILL IN
- Campaign: [campaign]
- Accounts: [paste the account list]

CONTEXT
The accounts are the ones the campaign produced.

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
```

### Diagnose the campaign results

```
Using Calven MCP, diagnose the results of the campaign below.

FILL IN
- Campaign: [campaign]
- Persona: [the brief's persona]
- Message: [the brief's message]
- Window: [time window, e.g. the campaign's run]
- Assets: [paste the assets with their numbers]

CONTEXT
The assets come with their numbers: the winners and the losers.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, objections, how they talk.
- Themes and quotes on the campaign's topic in the window.
- Our messaging for the persona and stage, and the language gaps the messaging dashboard shows.

DIAGNOSE
- For each loser: the most likely reason, grounded in the persona or quotes, and the fix.
- For each winner: the pain or phrase it rested on and how to repeat it.
- Where assets drifted from the brief.

OUTPUT
The diagnosis per asset and the five changes to the next brief.

GROUNDING
Ground every diagnosis in the Universe and cite it. Where the Universe cannot explain a result, say so and suggest the test.
```

### Turn the retro into the next brief

```
Using Calven MCP, turn the retro of the campaign below into the brief for the next one.

FILL IN
- Campaign: [campaign]
- Persona: [persona]
- Segment: [segment]
- Stage: [buying stage]
- Window: [time window, e.g. last quarter]
- Retro: [paste the retro]

CONTEXT
The retro holds the diagnosis per asset and the changes we agreed. The next campaign targets the persona in the segment at the stage.

PULL FROM THE UNIVERSE
- The persona's canvas and the messaging matrix entry for this persona and stage.
- The pains and buying triggers customers in the segment named most in the window, with a quote for each.
- The objection the last campaign failed to pre-empt, and how our messaging answers it.

BUILD
- The one message the next campaign carries and why it should land, from the retro and the evidence.
- The pain to open on, the proof to use, the objection to pre-empt, each with its source.
- What the last campaign did that we keep, and what we drop.

OUTPUT
A one-page brief the writer can start from, with sources.

GROUNDING
Carry only the changes the retro supports and the evidence the Universe holds. Do not invent a new angle the quotes do not back.
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
