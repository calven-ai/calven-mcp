# Positioning variants


You're adapting the positioning for a vertical, a segment, a region, a partner's customers or a launch. You walk away with a variant: the positioning statement, what stays, what shifts, three supporting messages and the proof for that context. Calven keeps the core in one place, so the variant doesn't turn into a second positioning that contradicts the first.

## Prompts

### Create a positioning variant

```
Using Calven MCP, create a positioning variant for the context below.

FILL IN
- Context: [vertical, segment or channel]

CONTEXT
We are entering this context. I need our positioning adapted without breaking the core.

PULL FROM THE UNIVERSE
- Our positioning: statement, category, alternatives, unique attributes, value themes, proof points.
- The ICP's read on the context: tier, use cases and pains, buying triggers, disqualifiers.
- Customer quotes and themes from accounts in the context, and the trends and analyst findings about it.
- Our win rate and winning drivers in the context, with n.

BUILD
- What stays: the throughline in two lines.
- What shifts: emphasis, proof, language, alternatives, with the evidence for each shift.
- A positioning statement for the context and three supporting messages.
- The proof for each message from this context, or the gap if there is none.

OUTPUT
The variant with a keep/shift table and sources.

GROUNDING
Ground every shift in evidence from the Universe and cite it. Do not invent a position that contradicts the core. If the context has no quotes or deals, say so.
```

### Stress-test a variant against the core

```
Using Calven MCP, stress-test this variant against our core positioning.

FILL IN
- Variant: [paste the variant]

PULL FROM THE UNIVERSE
- Our positioning document.

CHECK
- Each line of the variant: consistent with the core, a justified shift, or a contradiction.
- Any line that adopts a competitor's frame.

OUTPUT
The variant annotated, then a clean version.

GROUNDING
Judge only against the positioning in the Universe and cite the section.
```

### Check the evidence for this context

```
Using Calven MCP, tell me how much evidence the Universe holds for positioning in the context below.

FILL IN
- Context: [vertical, segment or channel]

CONTEXT
Before I write a variant I want to know whether we have enough from this context to ground one, or whether we are guessing.

PULL FROM THE UNIVERSE
- Customer quotes and themes from accounts in the context, with counts.
- Deals in the context: how many, win rate with n, the drivers that decided them, the competitors met.
- Trends, opportunities and analyst findings that mention the context.
- Whether the ICP names the context as a priority or secondary vertical.

BUILD
- A coverage table: quotes, deals, drivers, trends, analyst findings, each with the count and the most recent date.
- The three strongest pieces of evidence and what they would let the variant claim.
- The gaps: what a credible variant needs that the Universe does not yet hold, and which agent run or ingestion would fill it.

OUTPUT
The coverage table, the evidence, the gaps.

GROUNDING
Report counts as the Universe returns them. An empty result is "nothing recorded", never an estimate.
```

## Advanced prompts

### Converge on the variant with a Delphi panel

```
Run a Delphi panel of synthetic experts from the segment and converge on the positioning variant round by round. Use Calven MCP for the core positioning and to seat the panel from our personas and the segment's evidence.

FILL IN
- Segment: [segment or vertical]
- Draft variant: [paste the draft, or write "none"]

CONTEXT
A vertical variant usually gets written by one PMM and approved by people outside the vertical. A Delphi panel collects independent judgements, shares them anonymously, and lets the panel revise until it agrees or clearly doesn't.

FROM CALVEN
- The core positioning: statement, alternatives, unique attributes, value themes, proof points.
- The ICP's read on the segment: pains, triggers, disqualifiers, tier.
- The personas for the segment and quotes from customers in it.
- Trends the market research agent tracks for the vertical.

METHOD
- Seat six panelists: a buyer, a stakeholder and a user persona, each in two versions (an early-stage company and a mature one). Each draws only on the canvas and quotes.
- Round one: each answers independently what the category frame, the main alternative, the lead value theme and the proof should be for this segment, with confidence from 1 to 5.
- Round two: show the anonymous summary (the median and the spread). Each panelist revises or defends.
- Round three: final positions. Report where consensus formed and where it didn't.
- Write the variant from the consensus, keeping the core's throughline.

OUTPUT
A round-by-round table of the four elements, the final variant, and the open disagreements to test with real customers.

GROUNDING
Label panel views as simulated from Calven personas and quotes, cited. Don't let the variant contradict the core positioning or add a proof point the Universe lacks.
```

### Score which segments earn their own variant

```
Build a weighted scoring model that says which segments earn their own positioning variant, and test how much the answer depends on the weights. Use Calven MCP for each segment's fit, win rate, pipeline and evidence.

FILL IN
- Candidate segments: [list three to eight segments or verticals]
- Effort per variant: [team weeks or cost to produce and maintain one, or write "assume"]

CONTEXT
Every sales leader wants a variant for their vertical. Each one costs writing, enablement and upkeep, and a variant with no evidence behind it is a guess. I want a ranking I can defend.

FROM CALVEN
- The ICP: segment tiers, priority and secondary verticals, disqualifiers.
- Win rate, deal count, average deal size and ICP-fit pipeline per segment from the ICP dashboard, with n.
- How many customer quotes and proof points come from each segment.
- Trends tied to each vertical, with severity.

MODEL
- Score each segment 1 to 5 on five criteria: ICP priority, pipeline size, win-rate gap against our average (a gap means the core story isn't landing), depth of evidence, and market momentum.
- Propose weights, compute the weighted score, and rank.
- Run a sensitivity: move each weight up and down by half and show how often each segment stays in the top two. A segment that stays there in most runs is a robust pick.
- Set the top scores against the effort per variant to say how many variants we can afford.
- If you can run code or write files, build it as a spreadsheet with the weights as inputs.

OUTPUT
The ranked table, the sensitivity result, and the call: which segments get a variant, which get a paragraph in the core, which get nothing.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Mark any segment under five decided deals as too thin to score on win rate.
```

## Ad hoc questions

- Is [vertical] a priority or secondary vertical in our ICP?
- What do customers in [industry] say about [pain]?
- What is our win rate in [segment], with n?
- Which competitor do we meet most in [vertical]?
- Which trends does the market research agent track for [vertical]?
- What are the disqualifiers for [segment]?
- Which proof points come from [industry] customers?
- What is our positioning statement?
- Which competitive alternative do buyers in [vertical] name most, and is it in our positioning?
- Which value theme do [industry] customers mention most in their own words?
- Is our win rate in [segment] above or below the company average, and on how many deals?
- Which segment has a high ICP fit score but a low win rate?
- Which of our proof points has no customer from [vertical] behind it?
- Which buying triggers show up in [segment] that our core positioning ignores?
- Does any analyst finding frame the category differently for [vertical]?
