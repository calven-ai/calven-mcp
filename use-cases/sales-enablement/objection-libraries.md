# Objection libraries

**Team:** Sales enablement · also product marketing, BDRs
**Impact:** High. The objection library is the asset reps open mid-call. Built from the objections buyers actually raise, ranked by the deals they touch, with answers drawn from deals we won, it replaces the list someone brainstormed two years ago.
**Prerequisites:** call transcripts ingested (customer quotes, themes), messaging approved (objection handling). Better with win/loss surveys running (deal drivers, loss reasons) and competitors tracked (battlecard objection handling).

## What the team is trying to do

Keep one current list of the objections buyers raise, how often, which deals they cost, and the approved answer with its proof. Done means a library ordered by impact, every answer tied to a document or a won deal, and a gap list for PMM. Without the company's own knowledge the library is generic ("too expensive", "no budget") and the answers are opinions.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the objections | Ask reps, review calls, read loss notes | Objections buyers raised on calls, verbatim, with frequency and sentiment; objections in the voice-of-customer read tied to lost deals | Quotes (Objection), themes, voice-of-customer dashboard (costly objections) |
| 2 | Rank them | Decide which objections matter most | Deals each objection touched and whether it decided the deal | Deal drivers, CRM deals (loss reasons) |
| 3 | Group them | Cluster by theme: price, capability, integration, trust, timing, competitor | Themes already clustered; competitor mentions tagged | Themes, quotes (Competitor mention) |
| 4 | Write the answers | Draft or confirm the response per objection | The approved objection handling in the messaging; "They say, you say" lines in battlecards; what persuaded buyers who had the same objection and bought | Messaging, battlecards, deal drivers (direction helped), quotes |
| 5 | Attach proof | Add the quote, the number or the case behind each answer | Customer quotes with highlight (quantified outcome, time to value, competitive win); positioning proof points | Quotes, positioning |
| 6 | Check the claims | Make sure no answer over-promises | Product brief, claims register | Product brief, claims |
| 7 | Review as the buyer | Hear how the persona reads each answer | Persona review of the answers | `review_against_personas` |
| 8 | Publish | Load into the enablement platform or the battlecard tool | Calven does not help here | |
| 9 | Maintain | Add new objections, retire old ones | New objections in the window; objections not heard for two quarters | Quotes, themes |

## Recommended prompts

### Step 1 to 3: the ranked list

```
Using Calven MCP, build the ranked list of objections buyers raise.

CONTEXT
I am rebuilding the objection library. I need every objection heard in [window], grouped, ranked by the deals it touched, with the buyer's words.

PULL FROM THE UNIVERSE
- Customer quotes with category Objection in [window], with account, persona and sentiment.
- The themes those quotes cluster into.
- Deal drivers in [window] with direction hurt, their category and rank, and the deals behind them.
- The voice-of-customer dashboard's costly objections for [window].

BUILD
- One row per objection group: the objection in the buyer's words, calls (n), deals touched, deals where it decided the outcome, the personas who raise it, the competitors it comes with.
- Order by deals decided, then calls.

OUTPUT
The table, then the three objections to fix first.

GROUNDING
Counts of deals come from the dashboard and the deal drivers with n and window; do not sum rows yourself. Quote buyers verbatim and cite each.

[name the window]
```

### Step 4 and 5: the answers and proof

```
Using Calven MCP, write the answer and proof for each objection in this list.

CONTEXT
Below is the ranked objection list. For each I need the approved answer, the proof, and what changed the mind of buyers who raised it and bought.

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

[paste the ranked list]
```

### Step 6 and 7: check and review

```
Using Calven MCP, check this objection library for over-claims and read it as our personas.

CONTEXT
Below is the draft library. First confirm every product claim, then run the persona review on the answers.

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

[paste the library]
```

### Step 9: maintain

```
Using Calven MCP, tell me what to add to and retire from the objection library.

CONTEXT
Below is the current library. I review it quarterly.

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

[paste the library's objection list]
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

## Good practice

- Rank by deals decided, not by how loud the objection is. The dashboard's costly objections are the list to start with.
- Keep the buyer's phrasing as the entry title. Reps recognise "we already have something that does this" faster than "incumbent".
- Every answer has a proof and a source. An answer without proof is a rebuttal, and buyers hear the difference.
- Split competitor-linked objections out and point them to the battlecard, so one update fixes both.
- Send the "no approved answer" list to PMM every quarter. The library grows from what the field hears.
- Run the persona review before publishing. An answer that satisfies the rep can still read as defensive to the buyer.

## Not covered today

- Publishing the library into the enablement platform or the CRM, and tracking which entries reps open.
- Writing new approved lines into the messaging document. That is the messaging agent's and the PMM's work in Calven.
- Objections from the open web (review sites, analyst reports) in real time. The market research and competitive agents record what they find; the AI tool reads those records.
