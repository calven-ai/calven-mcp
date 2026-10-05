# Demo storylines

**Team:** Account executives · also solutions engineering, product marketing
**Impact:** Medium. The demo is where the buying group forms its opinion, and a feature tour loses to a story every time.
**Prerequisites:** personas approved, product brief approved. Better with call transcripts ingested (what buyers asked to see), win/loss surveys running (what demos won on), competitors tracked.

## What the team is trying to do

Agree with the SE on the story the demo tells for this buying group: the pain each persona came with, the moment that answers it, the order, the proof, and the trap to set for the competitor's demo. Done means a one-page storyline the SE builds the demo from and the AE narrates to. Without the company's own evidence, the demo is the standard flow and the buyer waits for their part.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Name the audience | Who attends, which persona each is | Persona canvases for the attendees; contacts on the deal | Personas, CRM contacts |
| 2 | Find the pain per persona | What each came to see solved | Pains and jobs to be done per persona; what this account said in discovery | Persona canvas, rep's notes |
| 3 | Pick the moments | The capability that answers each pain, and the "last thing first" | Product brief capabilities and use cases mapped to the pains | Product brief |
| 4 | Order the story | What to show first, what to skip | The persona's priorities; what buyers said demos won or lost on | Persona canvas, deal drivers, quotes |
| 5 | Place the proof | The customer story at the right moment | Quotes by highlight; displacement wins | Quotes, battlecard |
| 6 | Set the trap | Where to show what the competitor's demo cannot | Battlecard landmines and feature comparison | Battlecard, deep dive |
| 7 | Build the demo | Environment, data, click path | Calven does not help here; the SE owns it | |
| 8 | Debrief | What landed, what did not | Review against what buyers at this stage usually need | Persona canvas, quotes |

## Recommended prompts

### Step 1 to 6: the storyline

```
Using Calven MCP, build the demo storyline for [deal] at [account].

CONTEXT
Attending: [names and titles]. In discovery they said [the pains and what they asked to see]. [Competitor] demos next week. We have 45 minutes.

PULL FROM THE UNIVERSE
- The persona canvases for each attendee: pains, jobs to be done, what they need to believe.
- The product brief: the capabilities and use cases that answer those pains.
- What buyers said our demos won or lost on, from win/loss and calls.
- The [competitor] battlecard: landmines and the feature comparison.
- One proof quote per persona, verbatim.

BUILD
- One line per attendee: the pain they came with and the moment that answers it.
- The order: the strongest outcome first, then the path to it, what to skip.
- Where to place each proof.
- The one thing to show that [competitor]'s demo cannot, and how to set it up without naming them.
- The question to ask at the end.

OUTPUT
A one-page storyline for the SE, with sources.

GROUNDING
Capabilities only from the product brief; do not script a feature it does not list. Quotes verbatim. If a persona has no canvas, say so.

[paste the attendees and the discovery notes; name the deal and competitor]
```

### Step 8: debrief against the record

```
Using Calven MCP, debrief my demo for [deal].

CONTEXT
Below are my notes on how the demo went: what got questions, what got silence, what they asked to see again.

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

[paste your notes]
```

### Review mode: check the storyline as the buyer

```
Using Calven MCP, review this demo storyline as [persona].

CONTEXT
Below is the storyline. Tell me where this persona would lose interest.

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review on the text.

REACT
- The moment they would check their phone.
- The moment they would lean in.
- What they would want to see that is not there.

OUTPUT
Findings with severity, then the edits.

GROUNDING
Only from the canvas.

[paste the storyline and name the persona]
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

## Good practice

- Build the storyline with the SE, not for them. The prompt gives both of you the same evidence.
- Lead with the outcome the persona cares about. The persona review will catch a feature-first opening.
- Script only what the brief lists. A demoed feature that is not in the brief is a promise.
- Debrief after every demo. The silence is data.

## Not covered today

- The demo environment, data and click path.
- Recording the demo. The call tool does that; Calven ingests it in the app.
