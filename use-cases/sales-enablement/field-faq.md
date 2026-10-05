# Field FAQ

**Team:** Sales enablement · also product marketing, solutions engineering, customer success
**Impact:** Medium. The questions reps ask in Slack every week are the same questions, and the answers drift. An FAQ answered from the approved documents, with the source on each answer, ends the thread and stays right when the documents change.
**Prerequisites:** strategy documents approved (product brief, positioning, messaging, ICP). Better with competitors tracked, call transcripts ingested (the questions buyers ask) and own website monitored (product changes).

## What the team is trying to do

Keep one answer to each recurring field question, sourced, current and findable. Done means an FAQ ordered by how often each question comes up, every answer citing a document section, and a quarterly refresh. Without the company's own knowledge the answer is whoever replied first in the channel.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the questions | Mine Slack, 1:1s, call notes | Calven does not hold the Slack thread. It holds what buyers asked on calls, which is most of what reps ask next | Quotes, themes |
| 2 | Answer them | Find the right answer | Answers from the product brief, positioning, messaging, ICP and battlecards, with sections | Strategy documents, battlecards |
| 3 | Mark the unknowns | Questions the documents do not answer | A list for product and PMM | All of the above |
| 4 | Publish | Store where reps look | Calven does not help here | |
| 5 | Refresh | Keep answers current | Product changes, drift findings, document versions since the last refresh | Product changes, drift findings, list documents |
| 6 | Answer on demand | A rep asks a new question | The same documents, in the rep's AI tool, with the source | Strategy documents |

## Recommended prompts

### Step 2 and 3: answer the question list

```
Using Calven MCP, answer these field questions from our approved documents.

CONTEXT
Below are the questions reps asked this month. Each answer must cite the document and section, in two to four sentences a rep can paste to a buyer.

PULL FROM THE UNIVERSE
- The product brief, positioning, messaging and ICP.
- Battlecards for any competitor named.

BUILD
- Each question with its answer and source.
- A separate list of questions the documents do not answer, for product or PMM.

OUTPUT
The FAQ entries and the open list.

GROUNDING
Answer only from the documents. Say "not in the documents" rather than answering from general knowledge.

[paste the questions]
```

### Step 5: refresh

```
Using Calven MCP, check this FAQ for answers that changed.

CONTEXT
Below is the FAQ with its last refresh date.

PULL FROM THE UNIVERSE
- Product changes and drift findings since that date.
- Current versions of the documents each answer cites.

CHECK
- Each answer: still right, changed (give the new answer and section), or retire.

OUTPUT
The annotated FAQ.

GROUNDING
Change an answer only on a recorded change, cited.

[paste the FAQ and the date]
```

### Gap mode: the questions buyers ask that reps do not

```
Using Calven MCP, list the questions buyers asked on calls that our FAQ does not cover.

CONTEXT
Below is the FAQ. I want the buyer questions from the last quarter that are missing.

PULL FROM THE UNIVERSE
- Customer quotes in the last quarter that are questions about the product, pricing, integrations, security or comparison, with frequency.

BUILD
- The missing questions ranked by frequency, each with the buyer's wording and the document that should answer it.

OUTPUT
The gap list.

GROUNDING
Cite the quotes. Do not write the answers; mark them for the next FAQ pass.

[paste the FAQ question list]
```

## Ad hoc questions

- Do we integrate with [system]?
- What is in the [plan] tier, and what is not?
- Do we support [deployment option or region]?
- What is our answer to "[buyer question]"?
- Which verticals do we not sell to?
- What is the difference between us and [competitor] on [topic]?
- Is [capability] generally available, in beta, or not something we do? (The brief says what we do; it does not promise timing.)
- What changed in pricing this year?
- What is our boilerplate?
- Where is the claim "[claim]" supported?

## Good practice

- Answer from the brief and cite it. An answer with a section reference stops the follow-up question.
- Keep the open list visible. Questions the documents cannot answer are the product brief's backlog.
- Mine buyer questions on calls each quarter. They become rep questions a month later.
- Teach reps to ask their own AI tool first. The FAQ page is the fallback for people without a connection.
- Refresh after each release, not on the calendar.

## Not covered today

- The Slack channel itself, search in it, and the knowledge base where the FAQ lives.
- Legal, security questionnaire and contract answers beyond what the product brief states. See legal and procurement.
- Timing of features. The brief records what the product does; questions about dates go to product.
