# Proposal drafts


You need a proposal narrative that's more than last quarter's template with the logo swapped. You get a draft the SE and your manager edit rather than rewrite: the buyer's problem as they stated it, our approach, why us over the alternatives they're weighing, the proof, the packaging and the plan. Calven adds the company's approved story, with every product and pricing statement traceable to the brief.

## Prompts

### Draft the proposal narrative

```
Using Calven MCP, draft the proposal narrative for the deal below.

FILL IN
- Deal: [deal]
- Account: [account]
- Segment: [segment]
- Competitor: [competitor]
- Champion persona: [champion's persona]
- Economic buyer persona: [economic buyer's persona]
- Problem: [the problem they stated]
- Metric: [the metric they gave]
- Shown: [what we showed]

CONTEXT
The account, a company in the segment, is choosing between us and the competitor. The champion and economic buyer personas, the problem, the metric and what we showed are above.

PULL FROM THE UNIVERSE
- The champion persona's pains and the words customers use for them.
- The product brief: overview, the capabilities and integrations relevant to what we showed, pricing and packaging.
- Our positioning: unique attributes, value themes, competitive alternatives, proof points.
- The competitor's battlecard: where we win, honestly where we lose.
- Two proof quotes from similar accounts, verbatim.

WRITE
- The problem, in their words, with their metric.
- Our approach, in plain terms.
- Why us against the competitor, with the trade-off stated.
- The proof.
- The packaging we propose and what it includes.

OUTPUT
The narrative sections, ready for the SE to add the implementation plan, with a source line per section.

GROUNDING
Every product and pricing statement from the brief, cited. Positioning claims from the positioning document. Quotes verbatim. Do not invent timelines, outcomes or features.
```

### Fact-check every claim in the proposal

```
Using Calven MCP, fact-check this proposal.

FILL IN
- Proposal: [paste the full proposal]

CONTEXT
I need every product, integration, pricing and proof claim in the proposal checked.

PULL FROM THE UNIVERSE
- The product brief, recent product changes and drift findings, and the claims register.
- The positioning proof points and the quotes.

CHECK
- Mark each claim correct, stale, wrong, or not in the brief.
- Mark each proof as verbatim and attributed, or not.

OUTPUT
The proposal annotated, then the list a human must still confirm.

GROUNDING
Against the Universe only, cited. Silence in the brief is "not in the brief", never a pass.
```

### Read the proposal as the economic buyer

```
Using Calven MCP, read this proposal as the economic buyer persona below.

FILL IN
- Persona: [economic buyer persona]
- Proposal: [paste the proposal]

CONTEXT
The person who signs is the persona above and was not on the calls.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.

REACT
- What they would skip, what they would doubt, what they would need to see.
- The question they would ask the champion.

OUTPUT
Findings with severity, then the three edits.

GROUNDING
React only from the canvas. Do not invent reactions it does not support.
```

## Ad hoc questions

- What are our unique attributes against [competitor]?
- Which proof points does positioning approve for [value theme]?
- What is in the [plan] package?
- How do customers describe [pain]? Give me phrases.
- Which quote shows a measurable outcome for [segment]?
- Where do we honestly lose to [competitor]?
- Does the brief say we integrate with [system]?
- What is the approved boilerplate?
