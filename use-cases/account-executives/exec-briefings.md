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

## Advanced prompts

### Converge an executive panel on the case

```
Run a Delphi panel of executive personas on my business case and let them converge on what would get it approved. Use Calven MCP to build the panel from our personas and real executive objections.

FILL IN
- Business case: [paste the case: problem, metric, cost, expected return, timing]
- Executives: [the executive personas who'll weigh in: the economic buyer, the CFO, the sponsor]
- Competitor: [competitor]

CONTEXT
The economic buyer won't decide alone. They'll test it with peers before they sign. A single role-play gives me one opinion. I want the consensus a room of executives would reach, and the points they never agree on.

FROM CALVEN
- Each executive persona's canvas: goals and KPIs, pains, objections.
- The objections economic buyers raised on lost deals, from win/loss, with n.
- Executive-level quotes on outcomes from similar accounts, verbatim.
- Our positioning's why-now and the battlecard's where-we-lose against the competitor.

METHOD
- Round 1: each panelist rates the case 1 to 10 on urgency, credibility and return, anonymously, with a reason.
- Share the anonymous spread. Round 2: each revises their rating and says what moved them.
- Round 3: each states the one condition for a yes.
- Stop when ratings converge within 2 points or after three rounds. Report what stayed split.

OUTPUT
The ratings per round, the converged view, the conditions for a yes, the unresolved objection, and the rewritten top half of my briefing that meets the conditions.

GROUNDING
Label every rating and reason as from the canvas, the record (cited, with n), or your extrapolation. Don't invent an executive objection nobody recorded.
```

### Stress-test the business case as the CFO

```
Stress-test my business case the way their CFO will: find the assumption it hangs on and how far it can move before the case breaks. Use Calven MCP for the real outcomes customers report and the CFO's view.

FILL IN
- Business case: [paste or attach the model: inputs, costs, benefits, payback]
- Our price: [annual price in the proposal]
- Their numbers: [paste what the champion gave you: team size, hours, current spend]

CONTEXT
The champion loves the case. The CFO will pull one thread and see if it unravels. I want to pull it first.

FROM CALVEN
- The finance or economic buyer persona canvas: KPIs, objections, what counts as proof.
- Customer quotes tagged Quantified outcome or Time-to-value, verbatim, with the account.
- Pricing and packaging from the product brief.
- Loss reasons and price feedback on lost deals in the segment, with n.

MODEL
- Rebuild the case as inputs and formulas. Mark each input as theirs, a customer outcome from Calven, or an assumption.
- Run one-at-a-time sensitivity: move each input 25 percent down and show the change in payback. Rank them in a tornado.
- Find the break-even for the top two inputs: the value at which payback passes twelve months.
- If you can run code, build it as a spreadsheet with live formulas.

OUTPUT
The tornado ranking, break-even values, the three questions the CFO will ask, and a conservative version of the case that still pays back.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't turn a single customer quote into an average outcome.
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
- Which outcome do executives in our won-deal quotes cite most?
- What does the economic buyer persona's canvas say counts as proof?
- On lost deals, did the economic buyer cite price or priority, with n?
- Which executive persona has no canvas?
- What's the why-now line in our positioning, and which trend backs it?
- What did [competitor]'s executive pitch sound like, from the battlecard?
