# Landing pages


You're building a page with one job: a visitor from a specific ad, email or search converts. You walk away with a headline that names their pain in their words, sections that answer their questions in the order they ask them, accurate claims and real proof, all reviewed as the persona before it goes live. Calven gives you that buyer evidence, so the page is more than the homepage with a form.

## Prompts

### Draft the landing page

```
Using Calven MCP, draft a landing page for the persona and source below.

FILL IN
- Persona: [persona]
- Source: [the ad, email or search term the visitor arrives from]
- Source line: [the ad or email line they clicked]
- Stage: [buying stage]
- Conversion: [demo request, trial, download]

CONTEXT
The visitor just clicked the source line. The page's one job is the conversion. They give it eight seconds.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, jobs to be done, objections.
- Our messaging for the persona at the stage, and the pillar the source promised.
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
```

### List the visitor's questions in order

```
Using Calven MCP, list the questions the persona below needs answered before they convert.

FILL IN
- Persona: [persona]
- Conversion: [the conversion, e.g. demo request, trial, download]

PULL FROM THE UNIVERSE
- The persona's canvas: jobs, pains, objections.
- Objections and questions people in this role raised on calls, with quotes.

BUILD
The questions in the order they arise, each with the quote that shows it is real and the section that should answer it.

OUTPUT
An ordered list; the page outline.

GROUNDING
Only questions grounded in the canvas or quotes, cited.
```

### Fact-check the page and review as the persona

```
Using Calven MCP, check this landing page before it ships.

FILL IN
- Persona: [persona]
- Page: [paste the page]

PULL FROM THE UNIVERSE
- The product brief and recent product changes.
- The persona's canvas, and run the persona review on the text.

CHECK
- Every claim: correct, wrong, stale or not in the brief, with the fix.
- The persona's reaction: what lands, what reads as vendor marketing, the line they would not believe, whether they would convert.

OUTPUT
The page annotated, then the three edits that matter most.

GROUNDING
Confirm only against the Universe and cite it. React only from the canvas.
```

### Diagnose an underperforming page

```
Using Calven MCP, tell me why this landing page converts poorly for the persona below.

FILL IN
- Persona: [persona]
- Rate: [conversion rate]
- Benchmark: [benchmark]
- Source: [traffic source and the source line]
- Page: [paste the page]

CONTEXT
The page converts at the rate against the benchmark. Traffic comes from the source.

PULL FROM THE UNIVERSE
- The persona's canvas and the objections they raise most.
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
```

## Advanced prompts

### Run a five-second test with synthetic visitors

```
Run a five-second test on my landing page with synthetic visitors built from our personas. Use Calven MCP for who the visitors are and what the page is meant to say.

FILL IN
- Page: [paste the above-the-fold copy, or attach a screenshot]
- Personas: [two or three personas the page targets]
- Traffic source: [where visitors come from: the ad, the email or the search term]

CONTEXT
A visitor decides in seconds whether a page is for them. I want to know what each persona takes away from the first screen before I pay for traffic.

FROM CALVEN
- The persona canvases: role, goals, pains, the words they use.
- Our one-liner and the value proposition for each persona from the messaging document.
- A persona review of the above-the-fold copy.

SIMULATE
- For each persona, arrive from the traffic source with their goals in mind and read only what fits in five seconds: headline, subhead, first visual, button.
- Answer the five-second questions in their voice: what does this company do, is it for me, what happens if I click, what would stop me.
- Compare each answer to the intended message and score the match from 0 to 3.
- Rewrite the headline and subhead three ways and rerun the test on each.

OUTPUT
A table of persona by question with the answer, the intended answer and the score. Then the best rewrite with its scores and why it wins.

GROUNDING
Persona answers trace to the canvas or the review, cited; mark extrapolation as yours. This is a pre-test, not a substitute for real visitors, so don't present scores as conversion rates.
```

### Red-team the page with hostile readers

```
Red-team my landing page with three hostile readers and fix what they find. Use Calven MCP for the claims we can make and the attacks a competitor would use.

FILL IN
- Page: [paste the full page copy]
- Competitor: [competitor the visitor is most likely comparing us to]

CONTEXT
The page goes in front of paid traffic next week. Our own team reads it generously. The buyer's procurement lead, a skeptical practitioner and the competitor's AE won't.

FROM CALVEN
- The product brief: capabilities, integrations, known weaknesses, pricing and packaging.
- The claims register: every claim we make, its status and any concern raised.
- The competitor's battlecard: their talk track, landmines and the "they say, you say" lines.

RED-TEAM
- Procurement lead: hunts for claims that would fail a security or contract review, and vague pricing language.
- Skeptical practitioner: hunts for claims the product brief doesn't support, buzzwords, and proof that isn't proof.
- The competitor's AE: writes the three-sentence email they'd send a prospect who just read this page.
- Each attack quotes the exact line it targets and rates the damage: embarrassing, costly or deal-losing.

OUTPUT
A findings table (line, attacker, attack, damage, evidence, fix), the competitor's email, then the page with the fixes applied.

GROUNDING
Every attack that calls a claim wrong cites the product brief or the claims register. Every competitor line traces to the battlecard. Mark the rest as your judgement, and don't invent a capability gap.
```

### Build the test backlog from a hypothesis tree

```
Build my landing page test backlog from a hypothesis tree, ranked by expected lift per week of traffic. Use Calven MCP for what the persona needs to believe and what usually stops them.

FILL IN
- Page: [paste the page copy]
- Page data: [paste sessions, conversion rate, scroll depth, form drop-off and conversion by source]
- Persona: [persona]
- Monthly traffic: [visits per month]

CONTEXT
I have traffic for maybe two tests a quarter. I want to spend them on the reason the page underperforms, not on button colors.

FROM CALVEN
- The persona canvas: pains, gains, objections and jobs to be done.
- Objection quotes and the costliest objections from the voice-of-customer dashboard, with n.
- The messaging matrix entry for the persona at the stage the page serves.

METHOD
- Break "the visitor doesn't convert" into a tree: wrong visitor, doesn't get it, doesn't believe it, doesn't need it this quarter, too much friction. Keep the branches mutually exclusive.
- For each branch, write the hypothesis, the evidence for it (my data or Calven's), and the test that would confirm it.
- Score each test on the chance the hypothesis is true, the likely lift if it is, and the weeks of traffic needed to read it at my volume. Rank by expected lift per week.

OUTPUT
The tree, a ranked backlog of five tests (hypothesis, evidence, change, metric, duration) and the one to run first.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Each objection hypothesis cites a quote or the canvas. Don't invent page data I didn't give you.
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
- Which claims in our claims register carry a concern or have no source?
- How does [competitor] attack our claim about [capability], and what does the battlecard say back?
- Which quote with a Quantified outcome highlight fits [persona] best?
- What did lost buyers say they didn't believe, from deal drivers and survey answers?
- What do AI assistants say about us when asked about our category?
- Which messaging pillar shows the biggest customer-language gap?
