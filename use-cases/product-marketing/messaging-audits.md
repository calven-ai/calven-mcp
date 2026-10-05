# Messaging audits


You want to know whether what the company publishes and says matches the approved positioning, uses buyers' words and holds up as the persona reads it. You walk away with a verdict and a fix per asset, plus a read on where the framework itself has gaps. With the framework and the record of how customers talk in Calven, the audit stops being one PMM's taste against another writer's.

## Prompts

### Catch drift from the approved messaging

```
Using Calven MCP, audit the asset below against our approved messaging.

FILL IN
- Asset: [paste the page, deck or sequence]
- Persona: [persona]
- Stage: [stage]

CONTEXT
The asset is aimed at the persona at the stage given. I want every line that drifts from the approved story.

PULL FROM THE UNIVERSE
- Our messaging: narrative, pillars, value propositions for the persona, boilerplate, objection handling.
- Our positioning: category, differentiation, proof points.

CHECK
- Flag each line that is off-pillar, uses language we moved away from, or adopts a competitor's frame.
- For each flag, name what it conflicts with and give the on-message rewrite.
- Note the pillars the asset never mentions.

OUTPUT
The asset annotated inline, then a clean on-message version, then a pillar coverage line.

GROUNDING
Judge only against the messaging and positioning in the Universe and cite what each flag conflicts with. If the asset is on-message, say so.
```

### Check the asset speaks like customers

```
Using Calven MCP, check whether this asset speaks the way our customers do.

FILL IN
- Asset: [paste the asset]

CONTEXT
I want to know where our wording differs from how buyers describe the same thing.

PULL FROM THE UNIVERSE
- The customer-language gaps the messaging dashboard shows.
- Themes and quotes on the topics the asset covers, with the recurring phrases.

CHECK
- For each key phrase in the asset, the phrase customers use instead, with a quote.
- Which of our terms customers never use.

OUTPUT
A two-column table: ours, theirs, with the quote and how often it appears. Then the rewrite of the three lines that differ most.

GROUNDING
Use only phrases grounded in quotes and cite them. Do not invent customer language.
```

### Check the facts and the persona read

Use the claim-check prompt from [claim-checks.md](claim-checks.md) and the persona review prompt from the launch messaging page. Run both on the whole asset.

### See whether the field pitches the story

```
Using Calven MCP, tell me whether the field pitches the approved story.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know which pillars reps use on calls, which they skip, and how their wording differs from ours.

PULL FROM THE UNIVERSE
- Messaging field adoption: pillar pull-through for the window and the period before.
- Vendor quotes by category (value claim, differentiation, proof point), with the rep and the account.

BUILD
- A table: pillar, share of calls it appears on, change, n.
- For each pillar, how reps say it vs the approved wording, with two quotes.
- Claims reps make that are not in the framework.

OUTPUT
One page, with the three coaching points for enablement.

GROUNDING
Numbers from the dashboard with n and window. Quotes verbatim and cited.
```

### Find the gaps in the messaging framework

```
Using Calven MCP, find the gaps in our messaging framework.

FILL IN
- Product: [product, or leave blank for all]

CONTEXT
Before the quarterly messaging review I want to know what the framework fails to answer. If a product is named, scope everything to it.

PULL FROM THE UNIVERSE
- Messaging effectiveness: the objections buyers raise and which the framework covers.
- Quality and consistency: weak flags and drift findings.
- Voice-of-customer themes with no matching pillar or value prop.

BUILD
- Objections with no response in the framework, ranked by how often buyers raise them, with a quote.
- Pains and jobs customers name that no pillar addresses.
- Claims the framework makes with weak or no evidence.

OUTPUT
A gap list with a suggested fix for each, for the messaging agent to work through.

GROUNDING
Ground every gap in the dashboards, themes and quotes and cite them. If the framework covers everything buyers raise, say so.
```

### Assemble the messaging audit

```
Using Calven MCP, assemble the messaging audit from the checks below.

FILL IN
- Assets checked: [number]
- Results: [paste the check results]

CONTEXT
I ran the drift, language, fact, persona and field checks on that many assets.

BUILD
- Summary: how consistent the company sounds, in three lines.
- A table: asset, verdict (on-message, minor fixes, rewrite), the main issue.
- The five fixes that matter most across assets.
- The framework changes to propose.

OUTPUT
An audit document the content and web owners can act on.

GROUNDING
Change nothing in the findings. Every fix traces to a check in the results.
```

## Ad hoc questions

- Is this headline on-message for [persona]: "[headline]"?
- Which pillar has the weakest customer-language fit?
- What words do customers use for [our term]?
- Which of our pages or documents went stale after the last product change?
- Do reps use the [pillar] pillar on calls?
- Which objections does our messaging not cover?
- What is our approved boilerplate?
- What is the one-liner for [product]?
- Which claims on our site have no proof behind them?
- Does this paragraph adopt [competitor]'s framing: [paste]?
- Which value proposition do we use for [persona] at the [stage] stage?
- What did the messaging agent flag as weak in the framework?
