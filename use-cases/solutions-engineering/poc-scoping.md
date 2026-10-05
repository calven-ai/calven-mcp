# POC scoping

**Team:** Solutions engineering · also account executives, sales leadership
**Impact:** High. The proof of concept is where enterprise deals are won or lost, and a POC without criteria is a free trial with a deadline.
**Prerequisites:** product brief approved, win/loss surveys running. Better with personas approved, competitors tracked, call transcripts ingested.

## What the team is trying to do

Agree three to five measurable success criteria tied to the buyer's stated pains, a timeline, named stakeholders on both sides and a closeout that produces a technical win. Done means a success plan the buyer signs before kickoff and a closeout summary that the AE and the economic buyer can read. Without the company's own evidence, criteria come from the buyer's wish list, which the competitor wrote half of.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Confirm the pains and metric | What the POC must prove, in business terms | Discovery notes; the persona's KPIs and jobs to be done | Persona canvas |
| 2 | Draft the criteria | Measurable, tied to the pains, achievable with the product | The product brief: what the product can demonstrably do; known weaknesses to keep out of scope | Product brief |
| 3 | Learn from past POCs | What won or lost evaluations like this | Capability and experience drivers on surveyed deals in this segment; product feedback on lost deals | Deal drivers, CRM deals |
| 4 | Set the competitive criterion | A criterion the rival cannot meet, that the buyer cares about | Feature comparison, landmines; persona pains | Deep dive, battlecard, persona canvas |
| 5 | Write the success plan | Criteria, timeline, owners, exit | A drafted plan from the above | All |
| 6 | Run the POC | Environment, data, support, check-ins | Calven does not help here | |
| 7 | Close it out | The technical win summary | A summary that maps results to criteria and to the brief; proof quotes for the business case | Product brief, quotes |

## Recommended prompts

### Step 1 to 5: the success plan

```
Using Calven MCP, draft the POC success plan for [deal] at [account].

CONTEXT
Discovery found: [pains, current tools, the metric the buyer gave, the integrations they need]. The technical buyer is a [persona]. [Competitor] is running a parallel evaluation. The POC is [weeks] long.

PULL FROM THE UNIVERSE
- The [persona] canvas: KPIs and jobs to be done.
- The product brief: capabilities and integrations the criteria can rely on, and known weaknesses to keep out of scope.
- What decided evaluations in [segment]: capability and experience drivers, with the buyers' words.
- The [competitor] feature comparison and landmines.

BUILD
- Three to five criteria, each measurable, tied to a stated pain, and mapped to a brief section.
- One criterion [competitor] cannot meet, and why the buyer cares, grounded in the canvas.
- What is explicitly out of scope and the honest line for it.
- The timeline with check-ins, and the roles needed on both sides.
- The exit: what counts as a technical win.

OUTPUT
A one-page success plan with sources.

GROUNDING
Criteria only on capabilities the brief lists, cited. Do not promise a result the brief does not support. Drivers cited with n.

[paste the discovery findings; name the deal, persona, segment, competitor and duration]
```

### Step 3: what wins evaluations like this

```
Using Calven MCP, what decided technical evaluations in [segment]?

CONTEXT
I want the pattern before I write criteria.

PULL FROM THE UNIVERSE
- Deal drivers in category Capability and Experience on surveyed deals in [segment], with direction, rank and the evidence quotes.
- Product feedback tags on lost deals in [segment].

BUILD
- The three capabilities that decided wins and the three gaps that decided losses, with counts.
- The criterion each suggests, or the scope exclusion.

OUTPUT
Two ranked lists with quotes and n.

GROUNDING
Record data only. Do not generalise from fewer than three deals without saying so.

[name the segment and window]
```

### Step 7: the closeout summary

```
Using Calven MCP, write the technical win summary for the POC at [account].

CONTEXT
Below are the criteria and the results, plus what the evaluators said during the POC.

PULL FROM THE UNIVERSE
- The product brief sections each criterion relied on.
- Proof quotes from customers who ran the same use case, verbatim.
- The [persona] canvas for the economic buyer who will read this.

BUILD
- Each criterion: result, evidence, the brief section.
- What the evaluators said, verbatim from my notes.
- The business outcome the results imply, in the economic buyer's terms, without inventing numbers.
- Open items and who owns them.

OUTPUT
A one-page summary for the AE and the economic buyer, with sources.

GROUNDING
Claims only from the brief and my pasted results. Customer quotes verbatim. No projected ROI.

[paste the criteria, results and evaluator comments; name the account and economic buyer persona]
```

### Review mode: challenge the buyer's criteria

```
Using Calven MCP, review the success criteria [account] proposed.

CONTEXT
Below are the criteria the buyer sent. Some read like [competitor]'s feature list. Tell me which to accept, reframe or decline.

PULL FROM THE UNIVERSE
- The product brief and known weaknesses.
- The [competitor] feature comparison.
- The [persona] canvas, to tie each criterion to a real pain.

CHECK
- Each criterion: we can meet it, partial, we cannot, and whether it maps to a pain the buyer stated.
- Criteria that look written for [competitor], and the reframe to the buyer's pain.

OUTPUT
A table with a verdict and a suggested wording per criterion.

GROUNDING
Only the brief and the record, cited. "Not in the brief" is "confirm", never "yes".

[paste the criteria; name the account, persona and competitor]
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

## Good practice

- Paste the discovery findings. Criteria tied to the buyer's own pains survive the competitor's influence.
- Keep known weaknesses out of scope explicitly. The honest exclusion beats a failed criterion.
- Include one criterion the competitor cannot meet, only if the persona canvas says the buyer cares.
- Close every POC with the summary, even the lost ones. The lost ones feed product.

## Not covered today

- Running the POC: environment, data, support, check-ins, usage data.
- ROI projections. Calven holds customer quotes about return, not a model.
- Legal terms for the evaluation.
