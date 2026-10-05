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

## Ad hoc questions

- What does a [persona] need to see in a demo?
- Which capability answers [pain] according to the product brief?
- What did buyers say our demos won or lost on?
- What should I show that [competitor]'s demo cannot?
- Which customer quote fits the [capability] moment?
- What do technical buyers ask about in demos, from our calls?
- Which use case in the brief matches [segment]?
- What is the "last thing first" outcome for a [persona]?
