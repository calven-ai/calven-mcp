# Demo storylines


You and the SE need to agree on the story the demo tells this buying group before anyone opens the product. You get a one-page storyline the SE builds from and you narrate to: the pain each persona came with, the moment that answers it, the order, the proof, and the trap for the competitor's demo. Calven adds the personas and proof behind it, so the buyer doesn't sit through the standard flow waiting for their part.

## Prompts

### Build the demo storyline for this buying group

```
Using Calven MCP, build the demo storyline for the deal below.

FILL IN
- Deal: [deal]
- Account: [account]
- Attendees: [names and titles]
- Discovery: [paste the pains they raised in discovery and what they asked to see]
- Competitor: [competitor]

CONTEXT
The attendees and discovery notes are above. The competitor demos next week. We have 45 minutes.

PULL FROM THE UNIVERSE
- The persona canvases for each attendee: pains, jobs to be done, what they need to believe.
- The product brief: the capabilities and use cases that answer those pains.
- What buyers said our demos won or lost on, from win/loss and calls.
- The competitor's battlecard: landmines and the feature comparison.
- One proof quote per persona, verbatim.

BUILD
- One line per attendee: the pain they came with and the moment that answers it.
- The order: the strongest outcome first, then the path to it, what to skip.
- Where to place each proof.
- The one thing to show that the competitor's demo cannot, and how to set it up without naming them.
- The question to ask at the end.

OUTPUT
A one-page storyline for the SE, with sources.

GROUNDING
Capabilities only from the product brief; do not script a feature it does not list. Quotes verbatim. If a persona has no canvas, say so.
```

### Debrief the demo against the record

```
Using Calven MCP, debrief my demo for the deal below.

FILL IN
- Deal: [deal]
- Notes: [paste your notes: what got questions, what got silence, what they asked to see again]

CONTEXT
The notes say how the demo went.

PULL FROM THE UNIVERSE
- The persona canvases for the attendees.
- What buyers at the evaluation stage usually need to see, from quotes and drivers.

CHECK
- Which pains from the canvases we answered and which we did not.
- What the silence likely means for each persona.
- What to send in the follow-up.

OUTPUT
A short read and three follow-up items.

GROUNDING
Only from the Universe, cited. Do not read more into the silence than the canvas supports.
```

### Read the storyline as the buyer

```
Using Calven MCP, review this demo storyline as the persona below.

FILL IN
- Persona: [persona]
- Storyline: [paste the storyline]

CONTEXT
Tell me where this persona would lose interest in the storyline.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.

REACT
- The moment they would check their phone.
- The moment they would lean in.
- What they would want to see that is not there.

OUTPUT
Findings with severity, then the edits.

GROUNDING
Only from the canvas.
```

## Advanced prompts

### Chart each persona's attention beat by beat

```
Run my demo storyline past a synthetic focus group of the buying group and chart where each person's attention rises and drops. Use Calven MCP to build each panelist from our personas and their own words.

FILL IN
- Storyline: [paste the demo beats in order, with minutes per beat]
- Attendees: [persona per attendee]
- Segment: [segment]

CONTEXT
Forty-five minutes, four people, four different reasons to be there. A storyline that holds the technical buyer can lose the economic buyer by minute ten. I want to see that before the call, not in the silence after it.

FROM CALVEN
- Each attendee's persona canvas: goals, pains, jobs to be done, objections.
- Verbatim quotes from those roles in the segment about what they wanted to see.
- A persona review of the storyline text.

SIMULATE
- Play each panelist through the beats in order, in the first person, one line per beat.
- Each scores every beat for attention from 1 to 10, with the reason in their words.
- Build the attention curve per persona and the group average. Mark the beats where any key person drops below 4.
- Find the moment each person decides, yes or no, whether this is worth more of their time.
- If you can run code, chart the curves.

OUTPUT
The attention table (beats by persona), the chart or a text version of it, the two dead zones, and a reordered storyline that keeps every key person above 5.

GROUNDING
Label every score as from the canvas, a quote or the review, or as your extrapolation. Don't give a persona an interest the canvas doesn't support.
```

### Pick the features to show in your time

```
Decide which capabilities make the cut for a time-boxed demo, as a trade-off, not a wish list. Use Calven MCP for what each buyer values, what the product does and what wins against the competitor.

FILL IN
- Time: [minutes available for product]
- Candidate features: [paste the capabilities you could show, with minutes each takes]
- Attendees: [persona per attendee, with their weight in the decision]
- Competitor: [competitor]

CONTEXT
We have more good material than minutes. Every feature I add pushes another out. I want the set that moves the people who decide, not the set the SE likes showing.

FROM CALVEN
- The persona canvases for the attendees: pains and jobs to be done.
- The product brief entry for each candidate feature, to confirm it exists and what it does.
- The battlecard for the competitor: feature comparison and where we win.
- Deal drivers from won and lost deals against them that name a capability, with n.

METHOD
- Score each feature per persona on value, 0 to 3, from the canvas. Add a differentiation score from the battlecard and drivers.
- Weight by each persona's say in the decision and divide by the minutes it costs.
- Solve it like a knapsack: the set with the most weighted value that fits the time.
- Show the runner-up set and what you'd give up to switch.
- If you can run code, do the optimization in code.

OUTPUT
A table of features with scores, cost and value per minute, the chosen set in demo order, and what to cut with one line on why.

GROUNDING
Label every score as Calven (cited), mine, or your assumption. Drop any feature the product brief doesn't list and say so.
```

## Ad hoc questions

- What does a [persona] need to see in a demo?
- Which capability answers [pain] according to the product brief?
- What did buyers say our demos won or lost on?
- What should I show that [competitor]'s demo cannot?
- Which customer quote fits the [capability] moment?
- What do technical buyers ask about in demos, from our calls?
- Which use case in the brief matches [segment]?
- What is the "last thing first" outcome for a [persona]?
- Which capability do buyers in [segment] mention most in won-deal drivers?
- What did lost buyers say they wanted to see that we didn't show?
- Which [competitor] landmine can I set during the demo without naming them?
- Which known weakness in the product brief should the demo steer clear of?
- What job to be done does a [persona] hire us for, in their words?
- Which integration do [segment] buyers ask about on calls most often?
- What's the shortest proof quote for the [capability] moment, verbatim?
