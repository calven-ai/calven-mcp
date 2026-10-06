# Technical discovery


You're heading into technical discovery and need the prospect's architecture, integrations, data, security requirements and success criteria mapped to what the product does. You walk away with a requirements list with a verdict per line (fits, partial, does not fit, confirm) and the two risks that sank similar technical evaluations. Calven surfaces the gap that lost the last three deals on the first call instead of the fourth.

## Prompts

### Build your technical discovery questions

```
Using Calven MCP, build my technical discovery questions for the deal and account below.

FILL IN
- Deal: [deal]
- Account: [account]
- Persona: [persona of the technical buyer]
- Segment: [segment]
- Competitor: [competitor in the evaluation]
- AE notes: [what the AE learned: current tools, scale, constraints]

CONTEXT
The technical buyer matches the persona. They run what the AE notes describe. The competitor is in the evaluation. 45 minutes.

PULL FROM THE UNIVERSE
- The persona's canvas: KPIs, pains, jobs to be done, objections.
- The product brief: integrations, technical architecture, known weaknesses.
- The capability and integration drivers that decided lost deals in the segment, with the buyers' words.
- The discovery and landmine questions on the competitor's battlecard.

BUILD
- Ten questions grouped by architecture, integrations, data, security, scale and success criteria, phrased for this persona.
- The two questions that test the gaps that lost similar deals, marked "ask early".
- The landmine question for the competitor.
- The requirements I should expect to hear that we do not meet, so I can say so early.

OUTPUT
The question set with a reason and a source per question.

GROUNDING
Only the canvas, brief, drivers and battlecard, cited. Do not invent integrations or limits; where the brief is silent on a requirement, mark it "confirm with product".
```

### Map the requirements to the product

```
Using Calven MCP, map these requirements to our product.

FILL IN
- Account: [account]
- Segment: [segment]
- Requirements: [paste the requirements]

CONTEXT
The requirements are the technical requirements from discovery at the account. I need a verdict per line before the demo.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, known weaknesses.
- Product changes in the last 90 days.
- Lost deals in the segment where a similar requirement was the driver.

CHECK
- Each requirement: fits, partial, does not fit, or not in the brief (confirm with product), with the brief section.
- Which "does not fit" lines have cost deals before, and how the record says buyers reacted when told early.

OUTPUT
A table with a verdict per requirement, then the three to raise with the AE now.

GROUNDING
Only the brief and the record, cited. Never upgrade "not in the brief" to "fits".
```

### Find what your discovery notes missed

```
Using Calven MCP, review my technical discovery notes for the deal below.

FILL IN
- Deal: [deal]
- Segment: [segment]
- Competitor: [competitor]
- Persona: [persona of the technical buyer]
- Notes: [paste your notes]

CONTEXT
Tell me what I did not ask in my notes that decides deals like this.

PULL FROM THE UNIVERSE
- The technical drivers that decided deals in the segment and against the competitor.
- The persona's canvas.
- The known weaknesses in the brief.

CHECK
- Requirements areas with no answer in my notes.
- Known weaknesses the prospect will hit that I have not surfaced.
- The three questions for the follow-up.

OUTPUT
A checklist and the three questions.

GROUNDING
Only the Universe, cited.
```

## Advanced prompts

### Backtest your qualification questions

```
Find out which discovery questions would have predicted our technical losses, and cut my list to the ones that work. Use Calven MCP for the closed deals and the technical reasons behind them.

FILL IN
- My discovery questions: [paste your current list]
- Segment: [segment]
- Window: [window]

CONTEXT
My discovery call has 25 questions and I can't tell which ones matter. I want the few whose answers, in hindsight, separated the technical wins from the technical losses.

FROM CALVEN
- Closed deals in the segment and window, won and lost, paged, with tech stack requirements, complexity, product feedback and loss reason.
- Deal drivers in the Capability category, and survey answers on product, from those deals.
- Technical buyer quotes from those deals tagged Objection or Pain.

BACKTEST
- Map each of my questions to the deal fields or quotes that hold its answer. Questions with no mapping get marked untestable.
- For each testable question, compare the answers in won and lost deals and compute the lift.
- Rank the questions by how well their answer predicts a technical loss. If you can run code, fit a small decision tree and show its first three splits.
- Name questions I'm missing: patterns in the losses no question of mine would surface.

OUTPUT
My questions ranked with lift and n, the untestable ones, the three to ask in the first ten minutes, and two new questions to add.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counts come from paged rows. Don't invent a deal field or a loss reason the record doesn't hold.
```

### Practise discovery on a buyer with secrets

```
Run a discovery practice round where you play a technical buyer with hidden requirements, and score how many I uncover. Use Calven MCP to build the buyer from the persona and from what real technical buyers asked.

FILL IN
- Persona: [technical buyer persona]
- Segment: [segment]
- Competitor in the deal: [competitor]

CONTEXT
New SEs ask the questions on the template and miss the requirement that kills the deal in week six. Practice on a real deal is expensive. I want a sparring partner.

FROM CALVEN
- The persona canvas: goals, KPIs, pains and objections.
- Technical buyer quotes in the segment tagged Objection, Pain or Job to be done, and the product feedback tags on lost deals there.
- The competitor's landmines and our known weaknesses from the product brief.

ROLE-PLAY
- Before we start, privately pick three requirements from the evidence: one dealbreaker, one that favours the competitor, one that's easy for us. Don't reveal them.
- Play the buyer in the first person. Answer only what I ask, the way a busy technical buyer would: short, a bit guarded.
- Run up to 15 exchanges.
- Then reveal the three requirements and score me: found, partly found, missed. Add a score for whether I disqualified early on the dealbreaker.

OUTPUT
The transcript, the reveal, the scorecard, and the question that would have found each missed requirement.

GROUNDING
The hidden requirements come from cited quotes, feedback tags or the brief, shown at the reveal. Don't invent a buyer requirement with no evidence behind it.
```

### Map their stack on an evolution chart

```
Map the prospect's architecture on a Wardley-style evolution chart and show where our product fits and where the risk sits. Use Calven MCP for our architecture, our integrations and what buyers in the segment run.

FILL IN
- Prospect: [account]
- Their architecture: [paste discovery notes: systems, data flows, who owns what]
- The need: [the user need the evaluation is about]

CONTEXT
I've got pages of notes and a vague sense of risk. I want one picture the AE and the buyer can both read: what's custom, what's commodity, and which joins are fragile.

FROM CALVEN
- The product brief's technical architecture and integrations.
- The account's tech stack and the tech stack requirements on deals in its segment.
- Technical buyer quotes tagged Pain about their current stack.

METHOD
- Start from the user need and list the components it depends on, top to bottom.
- Place each on the evolution axis (genesis, custom, product, commodity) with a one-line reason.
- Place our product and mark each dependency it touches: native integration, supported through the API, or a gap.
- Flag the risky edges: custom components we'd have to integrate with, and commodity ones the buyer would rather not replace.
- If you can run code, draw the map; otherwise give it as a table with coordinates.

OUTPUT
The map, the three riskiest joins with what to prove in the POC, and one sentence on where we shouldn't compete.

GROUNDING
Integration status comes only from the brief, cited by section. Evolution placements are your judgement, labelled so. Don't invent an integration.
```

## Ad hoc questions

- What does a [technical buyer persona] care about in an evaluation?
- Which technical gaps lost us deals in [segment] this year?
- Do we integrate with [system], according to the brief?
- What does the brief say about our architecture and hosting?
- What are our known weaknesses?
- Which requirement should I rule out early with a [segment] prospect?
- What landmine question exposes [competitor]'s technical weakness?
- What did technical buyers object to most on calls this quarter?
- Has the product changed in [area] recently?
- Which product feedback tag appears most on lost deals?
- Which tech stack requirements show up on deals we lost but never on deals we won?
- What did technical buyers in [segment] say about their current tool before switching?
- Which discovery question does the [competitor] battlecard say exposes their weak spot?
- How complex were our won deals in [segment] compared with the lost ones?
- Which persona usually joins the deal after technical discovery and changes the requirements?
