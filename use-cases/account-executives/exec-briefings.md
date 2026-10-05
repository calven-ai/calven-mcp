# Exec briefings


You've got one meeting with the economic buyer, and it can't be the demo again, one level up. You walk in with a one-page briefing your champion can also use to sell internally: what the exec cares about, the business case in their terms, the competitive read, the proof a peer would believe, and the one ask. Calven adds the company's evidence behind every line.

## Prompts

### Build the exec briefing and a forwardable version

```
Using Calven MCP, build my briefing for a meeting with the executive below.

FILL IN
- Contact: [contact]
- Title: [title]
- Account: [account]
- Executive persona: [executive persona]
- Deal: [deal]
- Champion persona: [champion's persona]
- Problem: [problem, as the champion described it]
- Metric: [metric]
- Competitor: [competitor]

CONTEXT
The contact is the economic buyer on the deal. The champion told me the problem and the metric above. The competitor is the alternative. I get 25 minutes.

PULL FROM THE UNIVERSE
- The executive persona canvas: goals and KPIs, pains, objections, messaging hooks.
- Our positioning: the narrative, value themes, why now, competitive alternatives.
- The competitor's battlecard: how we win and where we lose at the executive level.
- Two quotes from executives at similar accounts, verbatim, with outcomes.
- The objections from economic buyers that decided lost deals, with n.

BUILD
- What this executive cares about, in three lines.
- The business case in their terms: problem, metric, cost of waiting.
- Why us against the competitor, with the trade-off stated.
- The peer proof.
- The objection they will raise and the answer.
- The one ask.

OUTPUT
A one-page briefing with sources, plus a version the champion can forward.

GROUNDING
Use only the Universe, cited. Do not invent outcomes, numbers or executive reactions. Where the economic-buyer evidence is thin, say so.
```

### Rehearse the meeting with the economic buyer

```
Using Calven MCP, role-play the executive persona below in the meeting for the deal.

FILL IN
- Executive persona: [executive persona]
- Deal: [deal]
- Competitor: [competitor]

CONTEXT
Play the economic buyer. They have 25 minutes, were not on the calls, and have seen the competitor's proposal.

PULL FROM THE UNIVERSE
- The executive persona canvas.
- The competitor's battlecard.
- The objections economic buyers raised on lost deals.

ROLE-PLAY
- Open as the executive. Interrupt when I go into features. Raise the objections this persona actually has.
- After "debrief": where I lost you, the one thing that would have made you sponsor it.

OUTPUT
An exchange, then a short debrief.

GROUNDING
Stay true to the canvas and the record. Do not make the executive easier than the evidence says.
```

### Read your briefing as the executive

```
Using Calven MCP, read my exec briefing as the executive persona below.

FILL IN
- Executive persona: [executive persona]
- Briefing: [paste the briefing]

CONTEXT
Tell me what they would skip and what they would doubt in the briefing.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.
- The product brief for any claim.

CHECK
- Lines that are features, not outcomes.
- Claims the brief does not support.
- The question they would still have.

OUTPUT
The briefing annotated with severity, then the three edits.

GROUNDING
Only from the Universe. Say so if it is sound.
```

## Ad hoc questions

- What does a [executive persona] care about and distrust?
- What is our positioning narrative in two sentences?
- Why now, according to our positioning?
- Which executive at a similar company said something quotable about the outcome?
- What objections do economic buyers raise that kill our deals?
- How do we win against [competitor] at the executive level?
- What is the cost-of-inaction argument in our messaging?
- What is the hook for a [executive persona]?
- Which value theme matters most to a [executive persona]?
- Where does our win rate drop when the economic buyer is not engaged?
