# Product collateral


You're writing a one-pager, solution brief, feature page, datasheet, release narrative or demo storyline for a specific buyer. You walk away with an asset that opens with the buyer's problem, states capabilities accurately, puts the value in the buyer's words, carries proof and ends with a next step. Calven gives you the current product brief, so you're not copying the last datasheet while the capabilities drift from the product.

## Prompts

### Draft a one-pager or solution brief

```
Using Calven MCP, draft the asset below on the capability, for the persona in the segment.

FILL IN
- Asset: [one-pager / solution brief / feature page]
- Capability: [product or capability]
- Persona: [persona]
- Segment: [segment]
- Minutes: [minutes the reader will spend on it]
- Stack: [tools in their stack]

CONTEXT
Reps send this after a first call. The reader is the persona; they have the minutes given and one question: what does this do for me.

PULL FROM THE UNIVERSE
- The product brief: the capabilities, integrations and packaging relevant to the capability.
- The persona's canvas: pains, jobs to be done, gains.
- Our value propositions for the persona and the pillar this capability serves.
- Customer quotes on the capability or the pain it solves, with attribution.

DRAFT
- Open with the problem in the persona's words.
- Three capabilities, each stated accurately and turned into the outcome for this persona.
- One proof quote and, if we have one, a quantified outcome.
- How it fits with the tools in their stack, from the integrations list.
- A next step.

OUTPUT
The asset copy under its section headings, plus a note of which brief sections and quotes it uses.

GROUNDING
Ground every capability in the product brief and every quote in the Universe, cited. Do not invent capabilities, integrations, numbers or customer names.
```

### Turn a feature into buyer value

```
Using Calven MCP, translate the feature below into buyer value for the persona.

FILL IN
- Feature: [feature]
- Persona: [persona]

CONTEXT
I have a feature description from product and need benefit copy, not a spec.

PULL FROM THE UNIVERSE
- The product brief entry for the feature: what it does and how it works.
- The persona's canvas: the pain or job this feature touches.
- Customer language on that pain.

TRANSLATE
- What the feature does, in one accurate sentence.
- The outcome it creates for the persona, in their words.
- Two benefit lines ready to use, and the proof quote if one exists.

OUTPUT
Feature, value, copy, proof.

GROUNDING
Ground the feature in the brief and cite it. Do not promise an outcome the brief does not support.
```

### Write the why-not-the-alternatives section

```
Using Calven MCP, write the "why not the alternatives" section for the asset below.

FILL IN
- Asset: [asset]
- Persona: [persona]
- Competitor: [competitor or category of alternative]

CONTEXT
The asset is aimed at the persona. It needs a short, honest section on how we differ from the competitor.

PULL FROM THE UNIVERSE
- Our positioning: competitive alternatives and unique attributes.
- The competitor's battlecard: how we win, where we lose, landmines.

WRITE
- Three differences, each stated as a buyer outcome, not a feature.
- One sentence on where the alternative fits better, so the section stays credible.

OUTPUT
The section, under 120 words, with sources.

GROUNDING
Use only the positioning and battlecard and cite them. No claim about the competitor the dossier does not hold.
```

### Review an existing asset

```
Using Calven MCP, review this one-pager or datasheet and tell me what to fix.

FILL IN
- Asset: [paste the one-pager or datasheet]
- Written: [when it was written]
- Persona: [persona]

CONTEXT
The asset dates from when it was written. I want it current, accurate and on-message for the persona.

PULL FROM THE UNIVERSE
- The product brief and recent product changes.
- Our messaging for the persona.
- The persona's canvas, and run the persona review on the asset.

CHECK
- Claims that are wrong or stale, with the correct wording.
- Lines that are off-message, with the rewrite.
- The persona's reaction: what lands, what they would skip.

OUTPUT
The asset annotated, then the rewritten version.

GROUNDING
Judge only against the Universe and cite it. If the asset is sound, say so.
```

### Write a demo storyline

```
Using Calven MCP, write a demo storyline for the persona in the segment below.

FILL IN
- Persona: [persona]
- Segment: [segment]

CONTEXT
The SE has 25 minutes. The story must follow the buyer's day, not our menu.

PULL FROM THE UNIVERSE
- The persona's canvas: jobs to be done and pains, in order of impact.
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
```

## Advanced prompts

### Build an ROI calculator from customer outcomes

```
Build an interactive ROI calculator for the one-pager, with every default value traced to a real customer outcome. Use Calven MCP for the quantified outcomes, our pricing and the persona's KPIs.

FILL IN
- Product or capability: [product or capability]
- Persona: [persona]
- Cost inputs: [paste internal benchmarks to use, e.g. loaded hourly cost by role, or write "let the buyer enter them"]

CONTEXT
Reps get asked "what's it worth to us" and answer with adjectives. A calculator the buyer can change turns that into a number they own, as long as the defaults are honest.

FROM CALVEN
- Quotes with the Quantified outcome or Time-to-value highlight for the capability, with account and segment.
- Pricing and packaging from the product brief.
- The persona canvas: KPIs and the goals they're measured on.

BUILD
- Pick three value drivers that map to the persona's KPIs (time saved, cost avoided, revenue gained), with one formula each.
- Set each default to the median of the customer outcomes, and use the lowest and highest customer values as the slider range.
- Subtract the price from the brief. Show payback in months and three-year net value.
- Add a conservative toggle that halves every benefit.
- Write it as a single HTML file with inputs, live results, and a note under each default naming its source. If you can't write files, give me the formulas in a table.

OUTPUT
The calculator, a one-paragraph explanation a rep can read aloud, and the sources behind every default.

GROUNDING
Label every default as Calven (cited, with n) or the buyer's input. Don't set a default from one quote without saying it's one customer. Don't invent a price.
```

### Settle feature-led versus outcome-led in a debate

```
Stage a structured debate between a feature-led and an outcome-led version of the one-pager, judged by the buyer. Use Calven MCP for the product facts, the persona and the proof each side may use.

FILL IN
- Asset: [the one-pager or solution brief topic]
- Persona: [persona who judges]
- Draft: [paste the current draft, or write "none"]

CONTEXT
Product wants capabilities up front, sales wants outcomes. We keep compromising into a page that does neither. A debate surfaces the strongest case for each, and the buyer decides.

FROM CALVEN
- The product brief: capabilities, integrations, differentiators.
- The messaging pillars and the value proposition for the persona.
- The persona canvas and quotes from that role on how they evaluate vendors.
- A persona review of both versions, as a check on the judge.

METHOD
- Write the first half of the asset twice, feature-led and outcome-led, each as strong as it can be, from the same facts.
- Debate in three rounds: opening case, rebuttal, closing. Each side may cite only the Universe.
- The judge is the persona, played from the canvas. They score each round on clarity, credibility and relevance to their KPIs, and give the reason in their own voice.
- Compare the judge's verdict with the persona review and explain any difference.
- Ask the judge for the hybrid they'd actually read: which sections lead with outcomes and which with features.

OUTPUT
The two versions, the debate in under 500 words, the scorecard, and the hybrid outline with its first section written.

GROUNDING
Cite every claim each side makes. Label the judge's reasons as simulated from the canvas and the review. Don't add capabilities the brief doesn't list.
```

### Sort the features with a Kano model

```
Sort the features into must-haves, performance features and delighters with a Kano analysis, so the collateral leads with the right ones. Use Calven MCP for what buyers said and what decided deals.

FILL IN
- Features: [paste the feature list for the asset]
- Segment: [segment]

CONTEXT
Collateral lists features in roadmap order. Buyers read them differently: some they expect and only notice when missing, some they compare vendors on, some surprise them. Leading with a must-have wastes the headline. Burying a delighter wastes the differentiator.

FROM CALVEN
- Quotes mentioning each feature in the segment, with sentiment and category.
- Deal drivers in the Capability category, won and lost, and the product gaps that cost deals.
- The product brief's differentiators and known weaknesses, and the feature comparisons in the competitor dossiers.

METHOD
- Classify each feature: must-be (its absence hurts deals, its presence earns no praise), performance (buyers compare on it), attractive (praised when present, never missed), or indifferent.
- Evidence decides the class: loss drivers point to must-be, head-to-head comparisons to performance, unprompted positive quotes to attractive.
- Note where a competitor already matches us, which turns a delighter into a performance feature.
- Recommend the order: one delighter in the headline, performance features in the body with proof, must-haves as a checklist.

OUTPUT
A Kano table (feature, class, evidence with n, competitor parity), then the collateral outline in the recommended order.

GROUNDING
Every classification cites its evidence. Mark a feature with too little evidence as unclassified rather than guessing.
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
- Which capability do customers praise most that our collateral never mentions?
- Which missing feature do lost buyers name that our one-pager seems to imply we have?
- What time-to-value do customers quote for [capability], and from how many accounts?
- Which integration do lost deals ask for that the brief doesn't list?
- Which of our listed differentiators does [competitor] also have, per the dossier?
- Which [persona] objection should a one-pager answer before the first call?
