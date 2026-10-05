# POC scoping


You're scoping a POC, and the buyer's wish list on the table was half written by the competitor. You want three to five measurable criteria tied to their stated pains, a timeline, named stakeholders on both sides, a success plan they sign before kickoff and a closeout the AE and the economic buyer can read. Calven grounds the criteria in what decided past technical evaluations, so the POC isn't a free trial with a deadline.

## Prompts

### Draft the POC success plan

```
Using Calven MCP, draft the POC success plan for the deal and account below.

FILL IN
- Deal: [deal]
- Account: [account]
- Discovery: [pains, current tools, the metric the buyer gave, the integrations they need]
- Persona: [persona of the technical buyer]
- Segment: [segment]
- Competitor: [competitor running a parallel evaluation]
- Duration: [POC length in weeks]

CONTEXT
The discovery findings are as given. The technical buyer matches the persona. The competitor is running a parallel evaluation. The POC runs for the duration given.

PULL FROM THE UNIVERSE
- The persona's canvas: KPIs and jobs to be done.
- The product brief: capabilities and integrations the criteria can rely on, and known weaknesses to keep out of scope.
- What decided evaluations in the segment: capability and experience drivers, with the buyers' words.
- The competitor's feature comparison and landmines.

BUILD
- Three to five criteria, each measurable, tied to a stated pain, and mapped to a brief section.
- One criterion the competitor cannot meet, and why the buyer cares, grounded in the canvas.
- What is explicitly out of scope and the honest line for it.
- The timeline with check-ins, and the roles needed on both sides.
- The exit: what counts as a technical win.

OUTPUT
A one-page success plan with sources.

GROUNDING
Criteria only on capabilities the brief lists, cited. Do not promise a result the brief does not support. Drivers cited with n.
```

### Find what wins evaluations like this

```
Using Calven MCP, what decided technical evaluations in the segment below?

FILL IN
- Segment: [segment]
- Window: [time window, e.g. last four quarters]

CONTEXT
I want the pattern before I write criteria.

PULL FROM THE UNIVERSE
- Deal drivers in category Capability and Experience on surveyed deals in the segment in the window, with direction, rank and the evidence quotes.
- Product feedback tags on lost deals in the segment in the window.

BUILD
- The three capabilities that decided wins and the three gaps that decided losses, with counts.
- The criterion each suggests, or the scope exclusion.

OUTPUT
Two ranked lists with quotes and n.

GROUNDING
Record data only. Do not generalise from fewer than three deals without saying so.
```

### Write the POC closeout summary

```
Using Calven MCP, write the technical win summary for the POC at the account below.

FILL IN
- Account: [account]
- Persona: [persona of the economic buyer]
- Results: [paste the criteria, results and evaluator comments]

CONTEXT
The results give the criteria, the outcome of each, and what the evaluators said during the POC.

PULL FROM THE UNIVERSE
- The product brief sections each criterion relied on.
- Proof quotes from customers who ran the same use case, verbatim.
- The persona's canvas for the economic buyer who will read this.

BUILD
- Each criterion: result, evidence, the brief section.
- What the evaluators said, verbatim from my notes.
- The business outcome the results imply, in the economic buyer's terms, without inventing numbers.
- Open items and who owns them.

OUTPUT
A one-page summary for the AE and the economic buyer, with sources.

GROUNDING
Claims only from the brief and my pasted results. Customer quotes verbatim. No projected ROI.
```

### Challenge the buyer's proposed criteria

```
Using Calven MCP, review the success criteria the account proposed.

FILL IN
- Account: [account]
- Persona: [persona]
- Competitor: [competitor]
- Criteria: [paste the criteria]

CONTEXT
The criteria are what the buyer sent. Some read like the competitor's feature list. Tell me which to accept, reframe or decline.

PULL FROM THE UNIVERSE
- The product brief and known weaknesses.
- The competitor's feature comparison.
- The persona's canvas, to tie each criterion to a real pain.

CHECK
- Each criterion: we can meet it, partial, we cannot, and whether it maps to a pain the buyer stated.
- Criteria that look written for the competitor, and the reframe to the buyer's pain.

OUTPUT
A table with a verdict and a suggested wording per criterion.

GROUNDING
Only the brief and the record, cited. "Not in the brief" is "confirm", never "yes".
```

## Ad hoc questions

- What does the brief say we can demonstrably do for [use case]?
- Which capability drivers decided wins in [segment]?
- What product gaps lost evaluations in [segment] this year?
- Which criterion could [competitor] not meet?
- What is out of scope given our known weaknesses?
- Which customer ran this use case, and what did they say?
- What is the [technical buyer persona]'s KPI?
- Did integrations decide any lost deal in [segment]?
