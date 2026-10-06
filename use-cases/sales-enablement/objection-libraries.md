# Objection libraries


Reps open the objection library mid-call, and yours was brainstormed two years ago. You want one current list: what buyers object to, how often, which deals it cost, and the approved answer with its proof, plus a gap list for PMM. Calven ranks it from the objections buyers actually raise and ties every answer to a document or a won deal.

## Prompts

### Rank the objections buyers raise

```
Using Calven MCP, build the ranked list of objections buyers raise.

FILL IN
- Window: [time window, e.g. last two quarters]

CONTEXT
I am rebuilding the objection library. I need every objection heard in the window, grouped, ranked by the deals it touched, with the buyer's words.

PULL FROM THE UNIVERSE
- Customer quotes with category Objection in the window, with account, persona and sentiment.
- The themes those quotes cluster into.
- Deal drivers in the window with direction hurt, their category and rank, and the deals behind them.
- The voice-of-customer dashboard's costly objections for the window.

BUILD
- One row per objection group: the objection in the buyer's words, calls (n), deals touched, deals where it decided the outcome, the personas who raise it, the competitors it comes with.
- Order by deals decided, then calls.

OUTPUT
The table, then the three objections to fix first.

GROUNDING
Counts of deals come from the dashboard and the deal drivers with n and window; do not sum rows yourself. Quote buyers verbatim and cite each.
```

### Write the answer and proof per objection

```
Using Calven MCP, write the answer and proof for each objection in this list.

FILL IN
- Objections: [paste the ranked list]

CONTEXT
For each objection in the ranked list I need the approved answer, the proof, and what changed the mind of buyers who raised it and bought.

PULL FROM THE UNIVERSE
- The objection handling section of our messaging.
- The battlecard "They say, you say" lines for any competitor-linked objection.
- Deal drivers with direction helped on deals where the same objection was raised, with the evidence quote.
- Customer quotes with a highlight (quantified outcome, time to value, competitive win) that answer the objection.
- Our positioning's proof points.

WRITE
- Per objection: the approved answer (or "no approved answer" if the messaging has none), the proof with its source, a buyer quote that shows the objection overcome, and the discovery question that surfaces it early.

OUTPUT
The library entries, then the objections with no approved answer for PMM.

GROUNDING
Use only approved lines and recorded quotes, cited. Do not write an answer the messaging does not support; mark the gap.
```

### Check the library for over-claims

```
Using Calven MCP, check this objection library for over-claims and read it as our personas.

FILL IN
- Library: [paste the library]

CONTEXT
The library is a draft. First confirm every product claim, then run the persona review on the answers.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- The persona review for the answers.

CHECK
- Mark each product claim confirmed, wrong or not in the brief.
- Per persona: the answers that would not land, with the finding and severity.

OUTPUT
The library annotated, then the list of answers to rewrite.

GROUNDING
Judge only against the Universe. If the brief is silent on a claim, say so rather than passing it.
```

### Decide what to add and retire

```
Using Calven MCP, tell me what to add to and retire from the objection library.

FILL IN
- Library: [paste the library's objection list]

CONTEXT
The library is the current one. I review it quarterly.

PULL FROM THE UNIVERSE
- Objections raised on calls in the last quarter, with frequency.
- Objections in the library not heard on any call in the last two quarters.
- Any objection whose approved answer conflicts with a product change in the last quarter.

BUILD
- Add: new objections with frequency and the buyer's words.
- Retire: entries with no recent evidence.
- Rewrite: entries a product change made wrong.

OUTPUT
The three lists.

GROUNDING
Cite the quotes and changes. Do not retire an entry on a guess; show the absence.
```

## Advanced prompts

### Put a dollar figure on every objection

```
Put a pipeline cost on every objection in the library and show which few account for most of the money. Use Calven MCP for the costly objections, the deals they touched and how those deals ended.

FILL IN
- Window: [window, e.g. last 12 months]
- Library: [paste the current objection list, or write "build from evidence"]

CONTEXT
The library treats every objection as equal. Reps and I have limited time, and I want to spend it on the objections that cost real deals, not the ones that are merely common.

FROM CALVEN
- The costly objections and objection themes from the voice-of-customer dashboard, with n.
- Customer quotes tagged Objection in the window, with the deal each sits on.
- Those deals from the CRM: amount, status, stage reached and loss reason, plus the deal drivers ranked as deciding.

MODEL
- Match each quote to a library objection, or to "not in the library".
- For each objection: deals touched, pipeline touched, pipeline lost, and the share of those losses where the objection was the deciding driver. Show my row-level counts next to the dashboard figures and say where they differ.
- Rank by pipeline lost where the objection decided the deal, and draw the Pareto: how many objections account for 80 percent of it.
- Run a sensitivity check: if the deal-to-quote match is wrong for a quarter of deals, does the top five change?
- If you can run code, output the Pareto chart and the table as a CSV.

OUTPUT
The Pareto chart, the ranked table, the top objections a rep must have cold, and the ones to demote to the appendix.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A deal counts against an objection only when a quote or a driver ties them; don't infer it from the loss reason alone.
```

### Run a tournament between three answers

```
Run a head-to-head tournament between three answers to our hardest objection and let the buyer personas judge. Use Calven MCP for the personas, the objection in the buyer's words and the proof we can cite.

FILL IN
- Objection: [the objection]
- Answers: [paste three candidate answers, or write "draft them"]
- Personas: [personas who raise it, or write "the ones who raise it most"]

CONTEXT
Everyone has a favourite answer to this one. Instead of arguing in a meeting, I want the answers tested against the people who actually raise it.

FROM CALVEN
- How buyers phrase the objection, verbatim, and which personas raise it most.
- What persuaded buyers who raised it and bought anyway, from won-deal drivers and quotes.
- The approved answer from messaging objection handling, as a baseline if I didn't paste one.
- A persona review of each answer against the personas.

SIMULATE
- If I asked you to draft, write three answers that differ in strategy: reframe, proof, and concede-and-redirect.
- Run every pair head to head. For each pair and each persona, the persona picks the answer that moves them more and says why in one line, drawing on their canvas and the review findings.
- Score with an Elo rating or simple win counts. Show where personas disagree: an answer that wins with the economic buyer and loses with the technical buyer is a finding.
- Take the winner and improve it with the best line from the losers.

OUTPUT
The match table, the ranking per persona and overall, the final answer (under 60 words) with its proof point, and when to use the runner-up instead.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Every persona's verdict traces to their canvas or the review, cited; don't let a persona prefer something their canvas gives no reason for.
```

### Sort objections into the forces that block a switch

```
Sort the objection library by the forces that block a buyer from switching, so each answer fights the right force. Use Calven MCP for what buyers said, what they're trying to get done and why deals were won or lost.

FILL IN
- Persona: [persona]
- Objection list: [paste the library, or write "use the top objections on record"]

CONTEXT
Most of our answers argue features. But an objection about migration risk is anxiety, and an objection about "we already have something" is habit. Answer the wrong force and the buyer nods and doesn't move.

FROM CALVEN
- The persona canvas: jobs to be done, pains and gains.
- Customer quotes from this persona tagged Objection, Pain and Buying trigger.
- Deal drivers that helped and hurt in deals this persona was on.

METHOD
- Use the jobs-to-be-done forces of progress: push (pain with the current way), pull (the appeal of the new way), anxiety (fear of the new) and habit (comfort with the old).
- Classify each objection by the force behind it, with the quote that shows it.
- Check each current answer: which force does it address? Mark mismatches.
- Find the force with the least coverage. Often it's habit, and the fix is a smaller first step, not a better argument.
- Rewrite the answers to the three worst mismatches so they work on the right force.

OUTPUT
A four-column forces map with objections placed and quotes beside them, a mismatch table, and the three rewritten answers.

GROUNDING
Classifications are your judgement, so label them; every placement must cite a quote or driver. Don't invent an anxiety the buyers never voiced.
```

## Ad hoc questions

- What are the five objections we hear most this quarter?
- Which objection cost us the most deals this year?
- How do buyers phrase the price objection, in their own words?
- What is our approved answer to "[objection]"?
- Which objections come up with [competitor] in the deal?
- What persuaded buyers who raised "[objection]" and still bought?
- Which objections does our messaging not cover?
- Give me a quote where a customer says the integration concern turned out fine.
- Which persona raises "[objection]" most?
- Did any objection appear for the first time this month?
- Is our answer to "[objection]" still true after the last release?
- Which discovery question surfaces "[objection]" before the demo?
- Which objection do buyers raise in won deals as often as in lost ones, so it isn't really decisive?
- Which objection shows up only when [competitor] is on the deal?
- What's the earliest stage a buyer raises "[objection]", judging by the deals it sits on?
- Which objection did our last product change answer that the library still treats as open?
- Which persona's objections have the weakest approved answers in our messaging?
- Which objection did reps handle best on calls, with the rep's exact words?
