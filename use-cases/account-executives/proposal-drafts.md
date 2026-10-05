# Proposal drafts

**Team:** Account executives · also solutions engineering, sales leadership
**Impact:** Medium. The proposal is read by people who were never on a call, and it is where overclaims get written down.
**Prerequisites:** positioning and product brief approved, messaging approved. Better with win/loss surveys running (proof), competitors tracked.

## What the team is trying to do

Write the proposal narrative: the buyer's problem as they stated it, our approach, why us against the alternatives they are weighing, the proof, the packaging and the plan. Done means a draft the SE and manager edit rather than rewrite, with every product and pricing statement traceable to the brief. Without the company's approved story, proposals are last quarter's template with the logo swapped.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Restate the problem | In the buyer's words, with their metric | The persona's pains and the phrases customers use | Persona canvas, quotes |
| 2 | Describe the approach | What we do and how, for this buyer | Product brief: overview, capabilities, use cases, integrations | Product brief |
| 3 | Position against the alternatives | Why us, honestly | Positioning: competitive alternatives, unique attributes, value themes; the battlecard for the named competitor | Positioning document, battlecard |
| 4 | Bring proof | Customer evidence for each claim | Proof points in positioning; quotes by highlight | Positioning, quotes |
| 5 | State the packaging | Plan, inclusions, pricing framing | Pricing & Packaging | Product brief |
| 6 | Add the plan | Implementation, timeline, success criteria | Calven does not help here; the SE supplies it | |
| 7 | Commercial terms | Discounts, legal, terms | Calven does not help here | |
| 8 | Fact-check | Every claim against the brief | Product brief, claims, product changes | Product brief, claims, drift findings |

## Recommended prompts

### Step 1 to 5: the narrative

```
Using Calven MCP, draft the proposal narrative for [deal] at [account].

CONTEXT
[Account], a [segment] company, is choosing between us and [competitor]. The champion is a [persona]; the economic buyer is a [persona]. Below are the problem they stated, the metric they gave, and what we showed.

PULL FROM THE UNIVERSE
- The [persona] pains and the words customers use for them.
- The product brief: overview, the capabilities and integrations relevant to what we showed, pricing and packaging.
- Our positioning: unique attributes, value themes, competitive alternatives, proof points.
- The [competitor] battlecard: where we win, honestly where we lose.
- Two proof quotes from similar accounts, verbatim.

WRITE
- The problem, in their words, with their metric.
- Our approach, in plain terms.
- Why us against [competitor], with the trade-off stated.
- The proof.
- The packaging we propose and what it includes.

OUTPUT
The narrative sections, ready for the SE to add the implementation plan, with a source line per section.

GROUNDING
Every product and pricing statement from the brief, cited. Positioning claims from the positioning document. Quotes verbatim. Do not invent timelines, outcomes or features.

[paste the problem, metric and what you showed; name the deal, personas and competitor]
```

### Step 8: fact-check the proposal

```
Using Calven MCP, fact-check this proposal.

CONTEXT
Below is the full proposal. I need every product, integration, pricing and proof claim checked.

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

[paste the proposal]
```

### Review mode: read it as the economic buyer

```
Using Calven MCP, read this proposal as [economic buyer persona].

CONTEXT
Below is the proposal. The person who signs is a [persona] who was not on the calls.

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review on the text.

REACT
- What they would skip, what they would doubt, what they would need to see.
- The question they would ask the champion.

OUTPUT
Findings with severity, then the three edits.

GROUNDING
React only from the canvas. Do not invent reactions it does not support.

[paste the proposal and name the persona]
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

## Good practice

- Paste the problem and metric as the buyer stated them. The narrative is theirs, not ours.
- Keep the honest trade-off in. A proposal that admits where the competitor is stronger survives the comparison the buyer will run anyway.
- Fact-check the whole document after the SE adds their sections.
- Read it as the economic buyer before sending. They were not on the calls.

## Not covered today

- Implementation plans, timelines, SOW language, terms and discounts. Those come from the SE, the deal desk and legal.
- The document template and formatting.
