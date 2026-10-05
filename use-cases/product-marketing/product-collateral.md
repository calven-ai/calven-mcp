# Product collateral

**Team:** Product marketing · also sales enablement, demand generation, solutions engineering
**Impact:** High. One-pagers, solution briefs and feature pages are the assets reps send most; built from the product brief, the persona's pains and real proof, they stay true and on-message without a review cycle per asset.
**Prerequisites:** product brief approved, messaging approved, personas approved. Better with transcripts ingested (quotes), competitors tracked (for comparison sections).

## What the team is trying to do

Produce the assets that explain what the product does for a specific buyer: one-pagers, solution briefs, feature pages, datasheets, release narratives, demo storylines. Done means an asset that opens with the buyer's problem, states capabilities accurately, turns them into value in the buyer's words, carries proof and ends with a next step. Without a current product brief the writer copies the last datasheet and the capabilities drift from the product.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the asset, persona and segment | What format, for whom | Persona roster, ICP segments | Personas, ICP |
| 2 | Pull the product truth | Capabilities, integrations, architecture, packaging | The product brief sections | Product brief |
| 3 | Pull the buyer's problem | Pains and jobs for this persona | Canvas pains and jobs, quotes | Persona canvas, quotes |
| 4 | Translate features to value | Benefit per capability, for this persona | Messaging value propositions, persona gains | Messaging, persona canvas |
| 5 | Add proof | Quotes, outcomes, displacement wins | Quotes by highlight, deal drivers | Quotes, deal_drivers |
| 6 | Add the comparison, if any | Where we differ from the alternatives | Positioning competitive alternatives, battlecards | Positioning, battlecards |
| 7 | Draft | The asset | Drafted from the above | |
| 8 | Fact-check and persona-review | Claims and reaction | Product brief, claims, persona review | Product brief, claims, `review_against_personas` |
| 9 | Design and publish | Layout, PDF, CMS | Calven does not help here | |

## Recommended prompts

### Step 2 to 7: draft a one-pager or solution brief

```
Using Calven MCP, draft a [one-pager / solution brief / feature page] on [product or capability] for [persona] in [segment].

CONTEXT
Reps send this after a first call. The reader is [persona]; they have [minutes] and one question: what does this do for me.

PULL FROM THE UNIVERSE
- The product brief: the capabilities, integrations and packaging relevant to [capability].
- The [persona] canvas: pains, jobs to be done, gains.
- Our value propositions for [persona] and the pillar this capability serves.
- Customer quotes on [capability] or the pain it solves, with attribution.

DRAFT
- Open with the problem in the persona's words.
- Three capabilities, each stated accurately and turned into the outcome for this persona.
- One proof quote and, if we have one, a quantified outcome.
- How it fits with [tools in their stack] from the integrations list.
- A next step.

OUTPUT
The asset copy under its section headings, plus a note of which brief sections and quotes it uses.

GROUNDING
Ground every capability in the product brief and every quote in the Universe, cited. Do not invent capabilities, integrations, numbers or customer names.

[name the asset, capability, persona and segment]
```

### Step 4: feature to benefit

```
Using Calven MCP, translate [feature] into buyer value for [persona].

CONTEXT
I have a feature description from product and need benefit copy, not a spec.

PULL FROM THE UNIVERSE
- The product brief entry for [feature]: what it does and how it works.
- The [persona] canvas: the pain or job this feature touches.
- Customer language on that pain.

TRANSLATE
- What the feature does, in one accurate sentence.
- The outcome it creates for [persona], in their words.
- Two benefit lines ready to use, and the proof quote if one exists.

OUTPUT
Feature, value, copy, proof.

GROUNDING
Ground the feature in the brief and cite it. Do not promise an outcome the brief does not support.

[name the feature and persona]
```

### Step 6: comparison section

```
Using Calven MCP, write the "why not the alternatives" section for a [asset] aimed at [persona].

CONTEXT
The asset needs a short, honest section on how we differ from [competitor or category of alternative].

PULL FROM THE UNIVERSE
- Our positioning: competitive alternatives and unique attributes.
- The battlecard for [competitor]: how we win, where we lose, landmines.

WRITE
- Three differences, each stated as a buyer outcome, not a feature.
- One sentence on where the alternative fits better, so the section stays credible.

OUTPUT
The section, under 120 words, with sources.

GROUNDING
Use only the positioning and battlecard and cite them. No claim about the competitor the dossier does not hold.

[name the asset, persona and competitor]
```

### Step 8: review an existing asset

```
Using Calven MCP, review this [one-pager / datasheet] and tell me what to fix.

CONTEXT
Below is an asset from [when]. I want it current, accurate and on-message for [persona].

PULL FROM THE UNIVERSE
- The product brief and recent product changes.
- Our messaging for [persona].
- The [persona] canvas, and run the persona review on the text.

CHECK
- Claims that are wrong or stale, with the correct wording.
- Lines that are off-message, with the rewrite.
- The persona's reaction: what lands, what they would skip.

OUTPUT
The asset annotated, then the rewritten version.

GROUNDING
Judge only against the Universe and cite it. If the asset is sound, say so.

[paste the asset and name the persona]
```

### Demo storyline

```
Using Calven MCP, write a demo storyline for [persona] in [segment].

CONTEXT
The SE has 25 minutes. The story must follow the buyer's day, not our menu.

PULL FROM THE UNIVERSE
- The [persona] canvas: jobs to be done and pains, in order of impact.
- The product brief: the capabilities that serve each job.
- Objections for this persona and the responses.
- One proof quote per job if we have it.

BUILD
- Three scenes, each: the job, the pain moment, what we show, the line to say, the proof.
- The two objections to expect and when to pre-empt them.
- The close.

OUTPUT
A storyline the SE can rehearse from.

GROUNDING
Show only capabilities in the brief. Quotes verbatim and cited.

[name the persona and segment]
```

## Ad hoc questions

- What does [feature] do, as the brief states it?
- Which integrations do we list for [category]?
- What is the benefit of [feature] for [persona]?
- Which three capabilities matter most to [persona]?
- Do we have a time-to-value quote for [capability]?
- What are our known weaknesses on [area], per the brief?
- Which pillar does [capability] belong to?
- What is the one-liner for [product]?
- What should a solution brief for [segment] lead with?
- Which proof point works for [capability] with a [persona]?
- Is this datasheet still accurate: [paste]?
- What do we call [feature] officially?

## Good practice

- Name the persona. A one-pager with no reader is a feature list.
- Pull the brief section, then write. Capabilities first keeps the copy accurate; benefits first keeps it readable. Ask for both.
- One proof per claim. More proof is a case study.
- Include the integrations the persona's stack needs. It is the question they ask first.
- Re-check every collateral piece after a release using the product changes and drift findings.

## Not covered today

- Layout, design and the PDF. The copy goes to the designer or the template.
- Screenshots and demo environments.
- Updating the product brief when the product moves. That is the product intelligence agent and the PMM in Calven.
