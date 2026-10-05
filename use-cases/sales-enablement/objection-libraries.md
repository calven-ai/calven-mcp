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
