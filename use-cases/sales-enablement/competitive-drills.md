# Competitive drills


Your rep's next competitive call will hit the competitor's strengths, and you'd rather they hear them in rehearsal first. You get a drill script per Tier 1 competitor and persona, plus a debrief rubric against the approved battlecard. With Calven the role-play buyer argues from the real objections, so the drill isn't easy and the rep learns something.

## Prompts

### Run a competitive role-play as the buyer

```
Using Calven MCP, run a competitive drill: you are the persona below at a company in the segment below, evaluating us against the competitor.

FILL IN
- Persona: [persona]
- Segment: [segment]
- Competitor: [competitor]

CONTEXT
I am the rep. Play the buyer realistically: you like the competitor for their real strengths, you raise the objections this persona raises, and you push back when I over-claim. Keep going until I say "debrief".

PULL FROM THE UNIVERSE
- The persona's canvas: KPIs, pains, objections, how they talk.
- The competitor's battlecard: their positioning and messaging, strengths, the bullshit detector, where we lose.
- What buyers said when they chose the competitor over us, from win/loss responses and deal drivers.

ROLE-PLAY
Open as the buyer would. Raise the competitor's strengths in the buyer's words. Do not make it easier than the evidence says it is.

DEBRIEF (when I say so)
- Where I was strong, where I lost you, with the battlecard section I should have used.
- Landmines I could have set and did not.
- Any claim I made that the product brief does not support.
- The two things to practise before the real call.

GROUNDING
Stay inside the persona and battlecard as recorded. Do not invent competitor features or buyer reactions the Universe does not support.
```

### Debrief a drill or a real call

```
Using Calven MCP, debrief this competitive conversation against the competitor's battlecard.

FILL IN
- Competitor: [competitor]
- Transcript: [paste the transcript]

CONTEXT
The transcript is a drill or a real call where the competitor was in play. Score it against our approved plays.

PULL FROM THE UNIVERSE
- The competitor's battlecard: How We Win, Where We Lose, Landmines, Objection Handling, Proof Points.
- The product brief for any capability claimed.

CHECK
- Plays used, plays missed, with the section.
- Buyer objections and whether the answer matched Objection Handling.
- Claims not in the brief.

OUTPUT
A scorecard (used / missed / wrong), then the three lines to practise.

GROUNDING
Judge only against the battlecard and the brief. Do not credit a play the card does not contain.
```

### Pick which drills to build this quarter

```
Using Calven MCP, tell me which competitive drills to build this quarter.

CONTEXT
I can build four drills. I want the competitor and persona pairs where we lose most.

PULL FROM THE UNIVERSE
- The competitive dashboard: win rate per competitor with n, fight or avoid, loss reasons.
- The persona dashboard: personas present on lost deals.
- Battlecard coverage, so I do not build a drill on a competitor with no card.

BUILD
- Four pairs ranked by deals lost, each with the loss reason to drill and the card section that answers it.

OUTPUT
The ranked list.

GROUNDING
Numbers with n and window. Pairs below the floor are listed as such.
```

## Advanced prompts

### Run a bake-off against their rep

```
Run a bake-off: the competitor's rep pitches the buyer first, then I pitch, and the buyer decides. Use Calven MCP for the competitor's pitch, the buyer and our battlecard.

FILL IN
- Competitor: [competitor]
- Persona: [persona]
- Segment: [segment]

CONTEXT
Role-plays usually have the buyer read objections off a list. Real deals are decided against a rival who pitched well the day before. I want to sit in that second slot.

FROM CALVEN
- The competitor's positioning, talk track, strengths and pricing from their dossier.
- Our battlecard: how we win, where we lose, landmines, objection handling.
- The persona canvas: goals, pains, objections.
- Why buyers in the segment chose the competitor, from lost-deal drivers and quotes.

SIMULATE
- Part 1: play the competitor's best rep giving a 3-minute pitch to the persona, using their real strengths and setting their own landmines for us. Show it to me.
- Part 2: play the persona. I pitch. Ask the questions their pitch left in the buyer's head, in the buyer's words, one at a time.
- Part 3: step out of character as a neutral judge. The buyer picks who goes to the next round, with the two reasons that decided it, referencing both pitches.
- Score me against the battlecard: landmines defused, landmines set, proof used, honesty about where we lose.

OUTPUT
Their pitch, the transcript, the buyer's decision, my scorecard, and the one line I should have said.

GROUNDING
Their pitch uses only what their dossier records, cited; mark extrapolation. The buyer's reactions trace to the canvas and real quotes, and the judge's reasons cite them.
```

### Build a drill ladder from real losses

```
Build a five-level drill ladder against one competitor, from the moments we actually lost deals to them, with a mastery bar at each level. Use Calven MCP for the losses, the buyers' words and the battlecard.

FILL IN
- Competitor: [competitor]
- Mastery bar: [e.g. two clean passes in a row per level]

CONTEXT
Reps drill the easy version once and stop. A ladder makes them earn each level, and building it from real losses means they practise what actually beat us.

FROM CALVEN
- Lost deals against the competitor with deal drivers ranked as deciding, and the buyer quotes behind them.
- The competitor's battlecard and dossier.
- The personas on those deals, with canvases.
- The competitor's signals from the last 90 days, for the hardest level.

BUILD
- Cluster the deciding drivers into the five moments we lose most: for example pricing pressure, a feature gap, the incumbent, a reference request, a late-stage discount.
- Order them by difficulty, judged by how often reps lost when it came up.
- For each level: the buyer setup, the opening line in the buyer's real words, two escalations, the model answer from the battlecard, and a scoring rubric (accurate, on-message, honest, advances the deal).
- Level 5 combines two moments and adds a recent competitor move.
- Write a progress tracker a rep fills in after each attempt.

OUTPUT
The five-level ladder as a drill pack, the rubric, and the tracker as a table.

GROUNDING
Every buyer line is verbatim or marked as paraphrase with its source quote. Levels must come from recorded losses, cited; don't invent a losing moment that isn't in the drivers.
```

## Ad hoc questions

- Play [persona] evaluating us against [competitor] and push back on price.
- What does [competitor] claim that our bullshit detector says is overstated?
- Where do we lose to [competitor], and what should I avoid saying?
- Which landmine works best against [competitor] with a technical buyer?
- What did buyers say when they picked [competitor] over us?
- What is our proof point against [competitor]'s time-to-value claim?
- Score this answer to "[competitor objection]" against the battlecard: [paste].
- Which competitor should I rehearse against before a [segment] call?
- Which competitor beats us most often in deals with a technical buyer?
- What's the question [competitor]'s buyers ask us that reps have never had a good answer to?
- Which landmine has [competitor] been setting for us, judging by what buyers repeated on calls?
- What did the last three buyers who chose [competitor] say about pricing?
- Which of our proof points has [competitor]'s dossier already tried to discredit?
- How did the best rep on record handle [competitor] coming up on a call?
- Which competitor has changed their pitch most in the last quarter, according to their signals?
