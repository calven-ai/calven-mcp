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

## Advanced prompts

### Replay the campaign as a counterfactual

```
Replay my finished campaign as if we'd made two different calls, and estimate what we'd have got. Use Calven MCP for what the leads became and how each tier really converts.

FILL IN
- Campaign: [campaign]
- Results: [paste spend, leads, MQLs and opportunities, by segment and channel]
- Lead list: [attach the campaign's leads: company and title]
- Alternatives: [the two calls to replay, e.g. "Tier 1 only" or "the angle we rejected"]

CONTEXT
The retro will say what happened. The next budget decision needs what would have happened if we'd chosen differently, with the arithmetic shown so nobody argues from gut feel.

FROM CALVEN
- The ICP tier of each company on the lead list, and any deal it opened, with stage and outcome, from the CRM.
- Win rate, deal size and sales cycle by tier and segment from the ICP dashboard, with n.
- A persona review of the rejected angle, if one of the alternatives is a different message.

METHOD
- Rebuild the actual funnel from my results and the CRM: what the leads became, by tier.
- For each alternative, rebuild the funnel under its rules: drop or reweight leads, swap in the tier's real conversion and win rates, and adjust for the persona review where the message changes. Show every step.
- Give each counterfactual as a low, expected and high range, and name the assumption that carries most of the difference.

OUTPUT
A side-by-side of the actual campaign and the two counterfactuals (leads, opportunities, pipeline, cost per opportunity), then a three-line recommendation for the next campaign.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A counterfactual is an estimate; never present it as what would certainly have happened.
```

### Find what really drove the pipeline

```
Find which lead attributes actually drove pipeline in my campaign, with a driver analysis on my export. Use Calven MCP to add fit, persona and outcome to every lead.

FILL IN
- Lead export: [attach a CSV: lead, company, title, source, channel, asset, date, became opportunity yes or no]
- Campaign: [campaign]

CONTEXT
The campaign report splits results by channel. The real driver might be company size, persona or the asset someone downloaded, and a channel can look good only because of who it happened to reach.

FROM CALVEN
- For each company: ICP tier, size, industry and any deal with stage and outcome, from the CRM.
- For each contact the CRM holds: role and lifecycle stage. Map the remaining titles to our approved personas.
- The ICP dashboard's predictive attributes, with n, to compare against.

METHOD
- Join my export to the Calven fields. Report the match rate and what didn't match.
- Fit a logistic regression of became-opportunity on tier, persona, size, channel and asset. If the sample is too small, use cross-tabs with confidence intervals and say why.
- Show which attributes predict pipeline, which only looked good in the channel report, and whether this campaign's drivers agree with the ICP dashboard.
- If you can run code, do it in a notebook and show the odds ratios.

OUTPUT
A ranked driver table with effect size and confidence, the two findings that change the next brief, and the matched dataset as a CSV.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Call out correlation versus cause. Don't force a title onto a persona it doesn't fit; leave it unmapped.
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
- Which titles on the [campaign] lead list map to none of our personas?
- What share of [campaign] accounts already had an open deal before the campaign started?
- Which competitors showed up on deals opened from [campaign] accounts?
- Which objections did [persona] raise on calls during the [campaign] window?
- Which pillar has the weakest field adoption, and did [campaign] lean on it?
- Did [campaign] reach the contact roles that sit on our won deals?
- Which trend did the winning asset ride, and is it still rising?
