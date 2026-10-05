# Competitive drills

**Team:** Sales enablement · also account executives, sales managers
**Impact:** Medium. Reps lose competitive deals on the questions they did not rehearse. A drill where the AI tool plays the buyer with the competitor's pitch in hand, then debriefs against the battlecard, is practice with the real objections.
**Prerequisites:** competitors tracked (battlecards, deep dives), personas approved. Better with win/loss surveys running (what buyers said when they chose the competitor) and call transcripts ingested.

## What the team is trying to do

Rehearse a competitive conversation before it happens: the buyer raises the competitor's strengths, the rep answers, the drill ends with a debrief against the approved battlecard. Done means a drill script per Tier 1 competitor and persona, and a debrief rubric. Without the company's own knowledge the role-play buyer is easy, and the rep learns nothing.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the matchup | Competitor and persona | Competitors with the lowest win rate; personas most present in those deals | Competitive dashboard, persona dashboard |
| 2 | Build the buyer brief | What the buyer believes and will say | The persona's pains and objections; the competitor's strengths and positioning; what buyers who chose the competitor said | Persona canvas, battlecard (Strengths, Their Positioning), deal drivers, survey responses |
| 3 | Run the drill | Role-play live | The AI tool plays the buyer from the brief | Persona canvas, battlecard |
| 4 | Debrief | Score against the approved plays | Where we win, landmines, objection handling and proof points the rep used or missed | Battlecard |
| 5 | Repeat and track | Schedule, record scores | Calven does not help here | |

## Recommended prompts

### Step 2 and 3: the drill

```
Using Calven MCP, run a competitive drill: you are [persona] at a [segment] company, evaluating us against [competitor].

CONTEXT
I am the rep. Play the buyer realistically: you like [competitor] for their real strengths, you raise the objections this persona raises, and you push back when I over-claim. Keep going until I say "debrief".

PULL FROM THE UNIVERSE
- The [persona] canvas: KPIs, pains, objections, how they talk.
- The [competitor] battlecard: their positioning and messaging, strengths, the bullshit detector, where we lose.
- What buyers said when they chose [competitor] over us, from win/loss responses and deal drivers.

ROLE-PLAY
Open as the buyer would. Raise [competitor]'s strengths in the buyer's words. Do not make it easier than the evidence says it is.

DEBRIEF (when I say so)
- Where I was strong, where I lost you, with the battlecard section I should have used.
- Landmines I could have set and did not.
- Any claim I made that the product brief does not support.
- The two things to practise before the real call.

GROUNDING
Stay inside the persona and battlecard as recorded. Do not invent competitor features or buyer reactions the Universe does not support.

[name the persona, segment and competitor]
```

### Step 4: debrief a recorded drill or a real call

```
Using Calven MCP, debrief this competitive conversation against the [competitor] battlecard.

CONTEXT
Below is a transcript (a drill or a real call) where [competitor] was in play. Score it against our approved plays.

PULL FROM THE UNIVERSE
- The [competitor] battlecard: How We Win, Where We Lose, Landmines, Objection Handling, Proof Points.
- The product brief for any capability claimed.

CHECK
- Plays used, plays missed, with the section.
- Buyer objections and whether the answer matched Objection Handling.
- Claims not in the brief.

OUTPUT
A scorecard (used / missed / wrong), then the three lines to practise.

GROUNDING
Judge only against the battlecard and the brief. Do not credit a play the card does not contain.

[paste the transcript]
```

### Gap mode: which drills to build

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

## Ad hoc questions

- Play [persona] evaluating us against [competitor] and push back on price.
- What does [competitor] claim that our bullshit detector says is overstated?
- Where do we lose to [competitor], and what should I avoid saying?
- Which landmine works best against [competitor] with a technical buyer?
- What did buyers say when they picked [competitor] over us?
- What is our proof point against [competitor]'s time-to-value claim?
- Score this answer to "[competitor objection]" against the battlecard: [paste].
- Which competitor should I rehearse against before a [segment] call?

## Good practice

- Give the buyer the competitor's real strengths. A drill where we always win teaches overconfidence.
- Name the persona. The economic buyer and the technical buyer raise different objections about the same competitor.
- Ask for the debrief with sections cited, so the rep opens the card afterwards.
- Run the drill after every battlecard update; the new landmine needs practice.
- Debrief real calls the same way. The rubric is the same card.

## Not covered today

- Recording, scoring over time and manager dashboards.
- Competitor demos or trial environments. The battlecard and dossier record what the agent found; the AI tool does not browse the competitor's product.
