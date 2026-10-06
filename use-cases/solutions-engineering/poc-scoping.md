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

## Advanced prompts

### Simulate whether the POC lands on time

```
Simulate my proof of concept plan and tell me the odds it finishes on time with every criterion passed. Use Calven MCP for what similar evaluations tripped on and what the product supports.

FILL IN
- POC plan: [paste criteria, tasks, owners and your best, likely and worst durations]
- Deadline: [the date the buyer expects a decision]
- Segment: [segment]

CONTEXT
POCs die from slippage, not from failed tests. A customer integration that takes two weeks longer turns a technical win into a no decision.

FROM CALVEN
- The product brief's integrations and technical architecture, to check each criterion is achievable as written.
- Deal drivers and product feedback from evaluations in the segment, especially Integrations and Onboarding tags.
- Lost deals in the segment with loss reason No decision or Integrations, with what the buyers said.

SIMULATE
- Model each task as a three-point estimate with its dependencies, and each criterion's chance of passing from the brief and the evidence.
- If you can run code, run 5,000 draws; report the probability of finishing by the deadline and of passing every criterion, and the joint probability.
- Find the task that most often makes it late and the criterion most likely to fail.
- Test two fixes: cutting the weakest criterion, and adding a week. Report what each does to the joint probability.

OUTPUT
The two probabilities and the joint one, the critical task, the fragile criterion, and the change to the plan I should negotiate with the buyer this week.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Durations are mine or stated assumptions. Don't mark a criterion achievable unless the brief supports it.
```

### Pick criteria with a payoff matrix

```
Choose the POC success criteria by game theory: which criteria to push, given what the competitor will push. Use Calven MCP for both products' strengths and how head-to-head deals were decided.

FILL IN
- Competitor: [competitor]
- Candidate criteria: [paste the criteria on the table, ours and the buyer's]
- Buyer's priorities: [what the buyer said matters most]

CONTEXT
The buyer will accept five or six criteria. The competitor's SE is lobbying for theirs. Whoever sets the criteria usually wins the bake-off.

FROM CALVEN
- The feature comparison, strengths and weaknesses from the competitor's dossier.
- Our capabilities and known weaknesses from the product brief.
- The head-to-head record from the competitive dashboard, with n, and capability drivers from those deals.

MODEL
- Score each criterion for us and for them: likely pass, partial, fail, with the evidence.
- Build a payoff matrix: our choice of three criteria to push against their likely three. The payoff is the expected score gap, weighted by the buyer's priorities.
- Find our dominant or best-response set. Say which criterion they'll fight hardest to remove, and why.
- Check fairness: a criteria set the buyer sees as rigged backfires. Drop anything the buyer wouldn't defend to their own boss.

OUTPUT
The criterion table, the payoff matrix, the five criteria to propose with the wording, and the one to concede.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Competitor capability comes only from the dossier. Don't invent a feature for either side.
```

### Stress-test the POC plan as procurement

```
Stress-test my POC plan as the buyer's procurement lead, who'll review it before anyone signs off. Use Calven MCP for the commercial and legal concerns buyers raised and what our packaging allows.

FILL IN
- POC plan: [paste the plan: scope, criteria, timeline, resources, what happens on success]
- Account: [account]

CONTEXT
Technical teams agree a POC, then procurement adds four weeks and a paper process. If the success path isn't commercially clear, a passed POC still stalls.

FROM CALVEN
- The pricing and packaging section of the product brief.
- The pricing and legal section of the win/loss dashboard, with n, and deal drivers in the Commercials category.
- The procurement or economic buyer persona canvas: goals, objections.

RED-TEAM
- Read the plan as procurement. List every point you'd challenge: unclear success-to-purchase path, resources the buyer must commit, data handling, unpriced extras, who owns the result.
- Rate each as a blocker, a delay or a nit, and say how many weeks a blocker adds.
- Rewrite the plan's commercial section so the step from pass to order is explicit and nothing is left for procurement to invent.

OUTPUT
The challenge list with severity, the rewritten commercial section, and the email I send procurement before they ask.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Pricing terms come only from the brief. Don't invent a legal requirement; mark it as one to confirm with legal.
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
- Which POC criteria did buyers in [segment] say actually decided the evaluation?
- How often did evaluations in [segment] end in no decision, and what did the buyers say?
- Which integration most often slowed evaluations down, per buyer quotes?
- What did [competitor]'s won deals have as criteria that ours lacked?
- Which persona usually signs off the POC result, and what are they measured on?
- What did buyers who passed a POC and still didn't buy say?
- Which of our known weaknesses would a strict success criterion expose?
