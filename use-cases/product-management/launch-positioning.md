# Launches positioned from day one

**Team:** Product management · also product marketing, demand generation, sales enablement
**Impact:** High. A launch written from the engineering spec describes the feature. One written from the positioning, the persona's pains and what customers asked for sells it. The claims check keeps it true.
**Prerequisites:** strategy documents approved (positioning, messaging, product brief), personas approved. Better with call transcripts ingested (quotes on the problem), win/loss surveys (the deals that asked), own website and docs monitored (claims, product changes, drift).

## What the team is trying to do

Take a feature from "done" to a launch that lands with the buyer and stays consistent with the company story. Done means: the feature's value statement under the right pillar, the persona it serves and the pain it removes in their words, the proof, the claims checked against the product brief, the sales FAQ, and a readiness list of documents the launch leaves stale. In a company without a PMM, this is the PM's job; with one, this is how the PM and PMM start from the same evidence.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Frame the launch | Decide the tier, the audience and the problem the feature solves | The persona canvas (pains, jobs), the themes and quotes on the problem, the deals that asked for it | Persona, themes, quotes, deal drivers |
| 2 | Position the feature | Place it under a value pillar, write the value statement | Positioning (value themes, unique attributes), messaging (pillars, value propositions by persona) | Positioning, messaging |
| 3 | Write the messaging | Headline, one-liner, three benefits, proof | Messaging matrix per persona and stage, customer quotes as proof, the product brief for what it does | Messaging, quotes, product brief |
| 4 | Fact-check | Confirm every claim | The product brief, the claims register, recent product changes | Product brief, claims, product changes |
| 5 | Review as the buyer | Read the launch copy as the persona | Persona review | `review_against_personas` |
| 6 | Competitive angle | Decide what to say about rivals, if anything | Battlecards and the signals around the same capability | Battlecard, competitive signals |
| 7 | Readiness check | Find the documents the launch makes stale | Drift findings tied to the product change; claims that now need updating | Product drift findings, claims |
| 8 | Enable sales | FAQ, talk track, objections | Objection handling in messaging, battlecard objections, product brief known weaknesses | Messaging, battlecard, product brief |
| 9 | Ship the launch | Blog, email, in-app, release notes, webinar | Calven does not help here beyond the copy checks above | |
| 10 | Post-launch | Read what customers say about it | Themes and quotes after the launch date | Themes, quotes |

## Recommended prompts

### Step 1: the launch frame

```
Using Calven MCP, frame the launch of [feature] for [product].

CONTEXT
[feature] ships in [timeframe]. Before writing anything I want to know who it is for, which pain it removes in the buyer's words, and who asked for it.

PULL FROM THE UNIVERSE
- The personas whose pains and jobs this feature addresses, from their canvases.
- Customer themes and quotes about the problem it solves.
- Deal drivers and lost deals that named this capability.

BUILD
- The primary persona and one secondary, with the pain and the job to be done in their words.
- The three strongest quotes about the problem.
- The deals that asked for it: how many, outcome, amount at stake.

OUTPUT
A launch frame on one page: persona, pain, evidence, deals.

GROUNDING
Use only canvases, quotes and drivers in the Universe and cite them. If no deal named this capability, say so.

[name the feature and the product]
```

### Step 2 and 3: positioning and messaging for the feature

```
Using Calven MCP, write the launch messaging for [feature].

CONTEXT
The launch frame is below. I need messaging that fits our positioning and sounds like our customers.

PULL FROM THE UNIVERSE
- Our positioning: value themes and unique attributes, so the feature lands under the right one.
- The messaging: the pillar it belongs to and the value proposition for [persona].
- The product brief entry for what the feature does.
- Customer quotes on the problem, for proof and language.

WRITE
- The pillar it supports and why.
- A headline, a one-liner, three benefits each tied to a pain, and one proof point with its quote.
- A short "what it is not" line from the product brief, so sales does not overclaim.

OUTPUT
The messaging block, with the pillar and sources noted.

GROUNDING
Use only claims the product brief supports and quotes from the Universe. Do not invent outcomes or numbers. Do not introduce a value theme the positioning does not have.

[paste the launch frame]
```

### Step 4: claims check

```
Using Calven MCP, fact-check the launch copy for [feature].

CONTEXT
Below is the launch copy: blog, email and in-app text. Every product, pricing and integration claim must be right.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Recent product changes and the claims register.

CHECK
- Mark each claim correct, overstated, stale or not in the brief.
- For each flagged claim, give the accurate wording.
- Note any claim that duplicates one already on our site with a different number.

OUTPUT
The copy annotated inline, then a list of claims a human must confirm with engineering.

GROUNDING
Confirm only against the product brief and claims in the Universe and cite the section. Where the brief is silent, write "not in the brief".

[paste the launch copy]
```

### Step 5: the persona read

```
Using Calven MCP, review the launch announcement as [persona].

CONTEXT
Below is the announcement. I want the persona's honest reaction before it goes out.

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review on the text.

REACT
- What lands, what reads as vendor marketing, the line they would not believe, the question they still have.
- Whether the headline names a problem they recognise.

OUTPUT
The findings with severity, then the three edits.

GROUNDING
React only from what the Universe says about this persona.

[paste the announcement]
```

### Step 7: launch readiness, what went stale

```
Using Calven MCP, list what the [feature] launch makes stale.

CONTEXT
[feature] changes what the product does in [area]. I need every published document and claim that now tells an old story.

PULL FROM THE UNIVERSE
- Product changes recorded for [area] and the drift findings tied to them, with the document each one affects and the verdict.
- Claims about [area] on our site and in our documents.
- Battlecards and the product brief sections that mention [area].

BUILD
- A table: document or claim, what it says now, what changed, the suggested fix, owner.

OUTPUT
The readiness table.

GROUNDING
Use only drift findings, claims and documents in the Universe and cite them. If the product change has not been recorded yet, say so, and list the documents that mention [area] as candidates instead.

[name the feature and the area]
```

### Step 8: the sales FAQ for the launch

```
Using Calven MCP, write the sales FAQ for the [feature] launch.

CONTEXT
Sales will get questions from prospects and customers on day one. I need the ten most likely questions with answers that are true.

PULL FROM THE UNIVERSE
- The product brief: what the feature does, integrations, packaging, known weaknesses.
- Objection handling in our messaging and in the battlecards where competitors have a similar capability.
- Customer quotes that show how buyers describe the problem.

WRITE
- Ten questions and answers: what it does, who it is for, what it does not do, how it compares, packaging, migration, security, timing (no dates), proof.
- A "do not say" list of claims the brief does not support.

OUTPUT
The FAQ and the do-not-say list.

GROUNDING
Use only claims in the product brief and messaging, cited. Do not invent pricing, dates or integrations.

[name the feature]
```

## Ad hoc questions

- Which pillar does [feature] belong under in our messaging?
- Which persona has the pain [feature] removes? Quote their canvas.
- Did any lost deal name [feature]? How many, and against whom?
- What do customers call the problem [feature] solves?
- Is "[claim]" supported by the product brief?
- Which published documents mention [area] and might be stale after the launch?
- What is our value proposition for [persona] at the awareness stage?
- Does [competitor] have something like [feature]? What does the battlecard say?
- Give me three customer quotes as proof for [feature]'s benefit.
- What does the product brief say we do not do in [area]?
- Which claims on our site about [area] have no proof point?
- How would [persona] react to this headline: "[headline]"?

## Good practice

- Frame before you write. The persona, the pain and the deals that asked are the brief; the copy follows.
- Pick one pillar. A feature that supports three pillars supports none on the slide.
- Fact-check the final copy, not the draft. Claims drift during editing.
- Run the readiness check as soon as the product change is recorded. Drift findings show up per document; fixing them before launch day is cheaper.
- Keep "what it is not" in the FAQ. The product brief's known weaknesses are there to stop overclaiming.
- Ask the AI tool for sources on every proof point and keep quotes verbatim.

## Not covered today

- Publishing the blog post, sending the email, shipping the in-app message. Those live in your content and marketing tools.
- Editing the product brief, messaging or battlecards. That is the product intelligence, messaging and competitive intelligence agents' work in Calven, approved by the PMM.
- Adoption numbers after launch. Product analytics stay in your analytics tool; Calven holds what customers said.
