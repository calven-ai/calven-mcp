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
