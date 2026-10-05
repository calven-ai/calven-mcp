# Positioning variants

**Team:** Product marketing · also demand generation, partnerships, sales leadership
**Impact:** Medium. A new vertical, segment or partner channel needs the positioning adapted, not rewritten; a variant built from the core positioning and the segment's own evidence keeps the throughline.
**Prerequisites:** positioning approved, ICP approved (segment tiers, verticals). Better with transcripts ingested (quotes by industry), CRM connected (win rates by segment), market research (vertical trends).

## What the team is trying to do

Adapt the positioning for a context: a vertical, a segment, a region, a partner's customers, a launch. Done means a variant with the positioning statement, what stays, what shifts, three supporting messages and the proof for that context. Without the core in one place the variant becomes a second positioning that contradicts the first.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the context | Vertical, segment, region, channel | ICP priority and secondary verticals, segment tiers | ICP |
| 2 | Read the core | Statement, category, alternatives, attributes, themes | Positioning document | Positioning |
| 3 | Read the segment evidence | Pains, language, trends in that context | Quotes by industry, themes, vertical trends, analyst findings | Quotes, themes, trends, analyst_findings |
| 4 | Read the deal evidence | How we win there | Win rate by segment, drivers in that segment, competitors there | ICP dashboard (segments), deal_drivers, competitive performance |
| 5 | Write the variant | Keep, shift, statement, messages, proof | Drafted from the above | |
| 6 | Check against the core | No contradiction | Positioning stress test | Positioning |
| 7 | Approve in Calven | The variant becomes a vertical variation in messaging | Calven does not help here from the AI tool | |

## Recommended prompts

### Step 2 to 5: the variant

```
Using Calven MCP, create a positioning variant for [vertical, segment or channel].

CONTEXT
We are entering [context]. I need our positioning adapted without breaking the core.

PULL FROM THE UNIVERSE
- Our positioning: statement, category, alternatives, unique attributes, value themes, proof points.
- The ICP's read on [context]: tier, use cases and pains, buying triggers, disqualifiers.
- Customer quotes and themes from accounts in [context], and the trends and analyst findings about it.
- Our win rate and winning drivers in [context], with n.

BUILD
- What stays: the throughline in two lines.
- What shifts: emphasis, proof, language, alternatives, with the evidence for each shift.
- A positioning statement for [context] and three supporting messages.
- The proof for each message from this context, or the gap if there is none.

OUTPUT
The variant with a keep/shift table and sources.

GROUNDING
Ground every shift in evidence from the Universe and cite it. Do not invent a position that contradicts the core. If the context has no quotes or deals, say so.

[name the context]
```

### Step 6: stress test

```
Using Calven MCP, stress-test this variant against our core positioning.

PULL FROM THE UNIVERSE
- Our positioning document.

CHECK
- Each line of the variant: consistent with the core, a justified shift, or a contradiction.
- Any line that adopts a competitor's frame.

OUTPUT
The variant annotated, then a clean version.

GROUNDING
Judge only against the positioning in the Universe and cite the section.

[paste the variant]
```

### Step 3 and 4: what evidence do we have for this context

```
Using Calven MCP, tell me how much evidence the Universe holds for positioning in [vertical, segment or channel].

CONTEXT
Before I write a variant I want to know whether we have enough from this context to ground one, or whether we are guessing.

PULL FROM THE UNIVERSE
- Customer quotes and themes from accounts in [context], with counts.
- Deals in [context]: how many, win rate with n, the drivers that decided them, the competitors met.
- Trends, opportunities and analyst findings that mention [context].
- Whether the ICP names [context] as a priority or secondary vertical.

BUILD
- A coverage table: quotes, deals, drivers, trends, analyst findings, each with the count and the most recent date.
- The three strongest pieces of evidence and what they would let the variant claim.
- The gaps: what a credible variant needs that the Universe does not yet hold, and which agent run or ingestion would fill it.

OUTPUT
The coverage table, the evidence, the gaps.

GROUNDING
Report counts as the Universe returns them. An empty result is "nothing recorded", never an estimate.

[name the context]
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

## Good practice

- Start from the core and shift only with evidence. A variant with no quotes from the context is a guess.
- Keep the category. Changing the frame of reference is a positioning change, not a variant.
- Run the stress test before approval.
- Land the approved variant in Calven as a vertical variation so the messaging agent carries it.

## Not covered today

- Market sizing for the new context beyond what opportunities record.
- Editing the positioning or messaging documents.
