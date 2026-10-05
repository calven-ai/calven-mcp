# Landing pages

**Team:** Demand generation · also content marketing, product marketing, web
**Impact:** High. The landing page converts or wastes the spend behind it; one that opens on the persona's real pain, states what the product does accurately and shows proof from customers converts better and never claims what the product cannot do.
**Prerequisites:** strategy documents approved (messaging, product brief, positioning), personas approved. Better with transcripts ingested (quotes, language), competitors tracked (for comparison pages), own site monitored (claims).

## What the team is trying to do

Build a page with one job: a visitor from a specific ad, email or search converts. Done means a page whose headline names the visitor's pain in their words, whose sections answer their questions in the order they ask them, whose claims are accurate and whose proof is real, reviewed as the persona before it goes live. Without the Universe the page is the homepage with a form.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the visitor and the goal | Persona, source, conversion | Persona canvas, messaging stage | Personas, messaging |
| 2 | Match message to source | The page continues the ad or email | Messaging matrix for the stage | Messaging |
| 3 | Order the questions | What the visitor needs to believe, in order | Jobs, pains, objections for the persona | Persona canvas, quotes (Objection) |
| 4 | Write the headline and hero | Pain in their words, outcome, proof | Customer language, proof points | Quotes, positioning |
| 5 | Write the sections | Capabilities as outcomes, how it works, fit | Product brief, value propositions | Product brief, messaging |
| 6 | Add proof | Quotes, outcomes, logos (rights permitting) | Quotes by highlight | Quotes |
| 7 | Write the FAQ | The objections, answered | Objection handling, battlecard objections | Messaging, battlecards |
| 8 | Fact-check | Every claim | Product brief, claims | Product brief, claims |
| 9 | Review as the visitor | Persona review | `review_against_personas` | |
| 10 | Build, test, publish | CMS, forms, A/B tests | Calven does not help here | |

## Recommended prompts

### Step 1 to 7: draft the page

```
Using Calven MCP, draft a landing page for [persona] arriving from [source: the ad, email or search term].

CONTEXT
The visitor just clicked "[the ad or email line]". The page's one job is [conversion: demo request, trial, download]. They give it eight seconds.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains, jobs to be done, objections.
- Our messaging for [persona] at the [stage] stage, and the pillar the source promised.
- Customer quotes on the pain and the outcome, in their words.
- The product brief for the capabilities the page shows.

WRITE
- Headline and subhead: the pain in the visitor's words, the outcome.
- Three sections in the order the visitor's questions come: what it does for them, how it works, who it is for.
- One proof block with a verbatim quote.
- A five-question FAQ from the persona's objections.
- The CTA, repeated once.

OUTPUT
The page copy by section, with the pillar, brief sections and quotes it uses.

GROUNDING
Ground every claim in the product brief and messaging and every quote in the Universe, cited. Do not invent capabilities, numbers or customer names.

[name the persona, the source line, the stage and the conversion]
```

### Step 3: the visitor's questions

```
Using Calven MCP, list the questions [persona] needs answered before they [convert].

PULL FROM THE UNIVERSE
- The [persona] canvas: jobs, pains, objections.
- Objections and questions people in this role raised on calls, with quotes.

BUILD
The questions in the order they arise, each with the quote that shows it is real and the section that should answer it.

OUTPUT
An ordered list; the page outline.

GROUNDING
Only questions grounded in the canvas or quotes, cited.

[name the persona and the conversion]
```

### Step 8 and 9: fact-check and persona review

```
Using Calven MCP, check this landing page before it ships.

PULL FROM THE UNIVERSE
- The product brief and recent product changes.
- The [persona] canvas, and run the persona review on the text.

CHECK
- Every claim: correct, wrong, stale or not in the brief, with the fix.
- The persona's reaction: what lands, what reads as vendor marketing, the line they would not believe, whether they would convert.

OUTPUT
The page annotated, then the three edits that matter most.

GROUNDING
Confirm only against the Universe and cite it. React only from the canvas.

[paste the page and name the persona]
```

### Gap mode: why a page underperforms

```
Using Calven MCP, tell me why this landing page converts poorly for [persona].

CONTEXT
The page converts at [rate] against [benchmark]. Traffic comes from [source].

PULL FROM THE UNIVERSE
- The [persona] canvas and the objections they raise most.
- Customer language on the page's topic, and the language gaps in our messaging.
- The messaging for the stage the source implies.

DIAGNOSE
- Where the page answers a question the visitor is not asking, or skips one they are.
- Where our wording differs from theirs.
- Where the message breaks from the source.

OUTPUT
The diagnosis in five lines and the rewritten hero and first section.

GROUNDING
Ground the diagnosis in the canvas and quotes. If the Universe does not explain it, say so.

[paste the page, the source line and the numbers]
```

## Ad hoc questions

- What headline would [persona] stop on, in their words, about [pain]?
- What does [persona] need to believe before requesting a demo?
- Which objection should the FAQ answer first for [persona]?
- Give me a verbatim quote about [outcome] for the proof block.
- Is "[claim]" in the product brief?
- What is the value proposition for [persona] at the evaluation stage?
- Which capabilities matter most to [persona]?
- What do customers call [our feature]?
- Does this hero match our positioning: [paste]?
- Which comparison claims can a landing page make about [competitor]?
- What changed in the product since this page was published on [date]?
- What is our boilerplate for the footer?

## Good practice

- Name the source line. The page must continue the sentence the ad started.
- Get the visitor's questions first, then write. The order is the page.
- One proof quote, verbatim, attributed. A wall of logos needs rights the AI tool cannot grant.
- Fact-check and persona-review as two checks; they fail differently.
- After a release, rerun the claim check on every live landing page.

## Not covered today

- Page build, forms, tracking, A/B testing and analytics.
- SEO keyword data for search landing pages.
- Logo and quote usage rights.
