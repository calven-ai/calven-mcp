# Technical discovery

**Team:** Solutions engineering · also account executives
**Impact:** High. Technical discovery decides what gets demoed, what the POC proves and whether the deal is winnable at all.
**Prerequisites:** personas approved (technical buyer, user personas), product brief approved. Better with win/loss surveys running (technical loss drivers), competitors tracked (landmines), call transcripts ingested.

## What the team is trying to do

Learn the prospect's architecture, integrations, data, security requirements and success criteria, map them to what the product does, and say early what will not fit. Done means a requirements list with a verdict per line (fits, partial, does not fit, confirm) and the two risks that have sunk similar technical evaluations. Without the company's own record, the SE discovers the same gap on the fourth call that lost the last three deals.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Read the technical buyer | What they are measured on, what they fear, how they evaluate | The technical buyer and user persona canvases | Persona canvas |
| 2 | Know what sinks evaluations | The technical drivers that decided lost deals | Deal drivers in category Capability; product feedback tags on lost deals | Deal drivers, CRM deals |
| 3 | Build the question set | Architecture, integrations, data, security, scale, success criteria | Questions from the canvas's jobs to be done and the brief's integrations and architecture sections; battlecard discovery questions | Persona canvas, product brief, battlecard |
| 4 | Run the call | The conversation | Calven does not help here | |
| 5 | Map requirements to the product | Fits, partial, does not fit | The product brief: capabilities, integrations, technical architecture, known weaknesses; recent product changes | Product brief, product changes |
| 6 | Flag the risks | What needs confirming, what to rule out | Known weaknesses; the gaps that cost deals in this segment | Product brief, deal drivers |
| 7 | Hand to the AE | The technical read on the deal | A summary for the deal record | All |

## Recommended prompts

### Step 1 to 3: the technical discovery set

```
Using Calven MCP, build my technical discovery questions for [deal] at [account].

CONTEXT
The technical buyer is a [persona]. They run [what the AE learned: current tools, scale, constraints]. [Competitor] is in the evaluation. 45 minutes.

PULL FROM THE UNIVERSE
- The [persona] canvas: KPIs, pains, jobs to be done, objections.
- The product brief: integrations, technical architecture, known weaknesses.
- The capability and integration drivers that decided lost deals in [segment], with the buyers' words.
- The discovery and landmine questions on the [competitor] battlecard.

BUILD
- Ten questions grouped by architecture, integrations, data, security, scale and success criteria, phrased for this persona.
- The two questions that test the gaps that lost similar deals, marked "ask early".
- The landmine question for [competitor].
- The requirements I should expect to hear that we do not meet, so I can say so early.

OUTPUT
The question set with a reason and a source per question.

GROUNDING
Only the canvas, brief, drivers and battlecard, cited. Do not invent integrations or limits; where the brief is silent on a requirement, mark it "confirm with product".

[name the deal, persona, segment, competitor and what the AE learned]
```

### Step 5 and 6: map the requirements

```
Using Calven MCP, map these requirements to our product.

CONTEXT
Below are the technical requirements from discovery at [account]. I need a verdict per line before the demo.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, known weaknesses.
- Product changes in the last 90 days.
- Lost deals where a similar requirement was the driver.

CHECK
- Each requirement: fits, partial, does not fit, or not in the brief (confirm with product), with the brief section.
- Which "does not fit" lines have cost deals before, and how the record says buyers reacted when told early.

OUTPUT
A table with a verdict per requirement, then the three to raise with the AE now.

GROUNDING
Only the brief and the record, cited. Never upgrade "not in the brief" to "fits".

[paste the requirements and name the account and segment]
```

### Review mode: what I missed

```
Using Calven MCP, review my technical discovery notes for [deal].

CONTEXT
Below are my notes. Tell me what I did not ask that decides deals like this.

PULL FROM THE UNIVERSE
- The technical drivers that decided deals in [segment] and against [competitor].
- The [persona] canvas.
- The known weaknesses in the brief.

CHECK
- Requirements areas with no answer in my notes.
- Known weaknesses the prospect will hit that I have not surfaced.
- The three questions for the follow-up.

OUTPUT
A checklist and the three questions.

GROUNDING
Only the Universe, cited.

[paste your notes]
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

## Good practice

- Paste what the AE learned. The question set is sharper when the AI tool knows the current tools and scale.
- Ask for the "does not fit" list before the demo. Saying it early is the technical win's first step.
- Treat "not in the brief" as a question for product, not as a yes.
- Rerun the mapping after a release.

## Not covered today

- Configuration depth, API specifics and edge cases beyond the brief. That is documentation and engineering.
- The prospect's own architecture documents. Paste the relevant parts.
- Live product documentation. Calven monitors docs for changes; the AI tool may read the docs themselves separately.
