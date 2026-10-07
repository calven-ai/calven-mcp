# Partner FAQ


Right now the partner FAQ is your inbox, and that doesn't scale or stay consistent. You get a partner-facing FAQ covering product and capabilities, plans and list pricing, integrations, positioning, competitive lines, when to bring you in and how to escalate, so partners find the answer before they email. Calven sources every answer and flags the ones that go stale.

## Prompts

### Build the partner FAQ

```
Using Calven MCP, build a partner FAQ.

FILL IN
- Questions: [paste the question list]

CONTEXT
The questions are ones partners have asked us. Answers must be partner-safe: list pricing only, no internal competitive notes, no deal data.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, limits, pricing and packaging.
- Positioning and messaging: one-liner, category, boilerplate, objection handling.
- Battlecards: the talk track and "how we win" per competitor.
- The ICP: buying triggers and disqualifiers.

WRITE
- For each question: the answer in three sentences or fewer, the source, and "ask your partner manager" where the Universe is silent or the answer is internal.
- Group by product, pricing, positioning, competitors, fit, process.

OUTPUT
The FAQ with sources per answer.

GROUNDING
Answer only from the Universe. Do not state a price or capability the brief does not list. Mark process questions (deal registration, margins) as outside Calven.
```

### Find objections the FAQ should cover

```
Using Calven MCP, which customer objections should the partner FAQ cover?

CONTEXT
I built the FAQ from partner emails. I want to add the objections customers actually raise, since partners hear them too.

PULL FROM THE UNIVERSE
- The objection handling section of our messaging.
- The objections customers raised most on calls, with quotes.
- The messaging effectiveness read: which objections our messaging covers and which it does not.

BUILD
- A list of objections ranked by frequency, with the approved response or "no approved response yet".

OUTPUT
The list with sources.

GROUNDING
Use only objections recorded in the Universe. Flag the ones with no approved response for the PMM rather than drafting one.
```

### Flag stale answers in the FAQ

```
Using Calven MCP, which answers in this FAQ are stale?

FILL IN
- FAQ: [paste the FAQ]
- Date: [date it was last reviewed]

CONTEXT
The FAQ was last reviewed on the date above.

PULL FROM THE UNIVERSE
- Product changes and drift findings since the date.
- Competitive signals of high severity since the date.
- The current product brief pricing section.

CHECK
- Flag each answer that a change may have made wrong, with the change.

OUTPUT
The FAQ annotated with stale flags and the corrected answers.

GROUNDING
Flag only on recorded changes. If nothing changed, say so.
```

## Advanced prompts

### Find the answers that buy back your week

```
Analyse my log of partner questions, find the answers that would save me the most hours, and tell me which ones Calven can answer and which need a person. Use Calven MCP to check each answer against the product brief, pricing and objection handling.

FILL IN
- Question log: [attach a CSV or paste: date, partner, question, minutes spent answering]
- Weekly hours for partner questions: [hours]

CONTEXT
I answer the same partner questions by email every week. An FAQ helps only if it covers the questions that cost the most time, and only if the answers are approved.

FROM CALVEN
- The product brief: capabilities, integrations, pricing and packaging, known weaknesses.
- Objection handling from our messaging.
- Product changes from the last 90 days, since those create new questions.

METHOD
- Cluster the questions into topics, and count frequency and total minutes per cluster.
- Rank clusters by minutes saved if a partner could self-serve the answer. Draw the Pareto curve and mark the clusters behind 80 percent of the time.
- For each top cluster, check whether Calven holds an approved answer. Mark it answerable, partly answerable or needs a person, and say which document is missing what.
- Model my weekly load before and after the FAQ as a simple queue: questions arriving per week against hours available, and the backlog that builds.
- If you can run code, do the clustering, the Pareto and the queue in Python.

OUTPUT
The ranked clusters with minutes saved, answerability per cluster, the before-and-after load, and the ten FAQ entries to write first.

GROUNDING
Label every number as Calven (cited), mine (the log), or your assumption. Don't mark a question answerable unless you found the answer in a Calven document.
```

### Predict next month's partner questions

```
Predict the questions partners will ask next month, before they ask them, by playing out how each recent change reaches a partner's customer call. Use Calven MCP for what changed in our product and our market.

FILL IN
- Partner types: [resellers, referral partners, implementation partners]
- Current FAQ: [paste the FAQ]

CONTEXT
The FAQ always lags. A launch or a competitor's price cut happens, partners get asked about it, and I write the answer after the third email. I want the answers ready before the first one.

FROM CALVEN
- Product changes and drift findings from the last 60 days.
- Competitive signals from the last 60 days, with their so-what.
- Market trends seen in the last 60 days.

SIMULATE
- For each change, play a short customer call where a partner rep gets asked about it. Write the customer's question in their words and the rep's most likely wrong or vague answer.
- Score each question for likelihood (how many customers will ask) and damage (what a wrong answer costs).
- Check the current FAQ for each one: covered, partly covered or missing.
- For the missing ones, draft the answer from the product brief and objection handling, and name the document that needs updating if the source is stale.

OUTPUT
A table of predicted questions with source change, likelihood, damage and FAQ status, then draft answers for the top eight.

GROUNDING
Every predicted question traces to a recorded change, signal or trend, cited. Answers come from Calven documents only. If a drift finding says a document is stale, flag the answer instead of guessing the new fact.
```

## Ad hoc questions

- What is the approved answer to "does it integrate with [system]"?
- What does [plan] include, and what should a partner route to sales?
- How should a partner describe our category in one sentence?
- What is the partner-safe line against [competitor]?
- When should a partner not bring us in?
- What are the top five objections customers raise, and the responses?
- Which answers in the FAQ are affected by last month's product changes?
- What is our boilerplate?
- Is "[question from a partner]" answered anywhere in the product brief?
- What are the buying triggers a partner should listen for?
- What's the most common product feedback category on lost deals?
- Which claims about us carry a flagged concern?
- What does the product brief say we don't do, so partners stop promising it?
- Which product changes in the last 90 days touch pricing or packaging?
- How do customers phrase questions about [topic] in their own words?
- What do customer quotes typed Onboarding / implementation say about how long setup takes?
