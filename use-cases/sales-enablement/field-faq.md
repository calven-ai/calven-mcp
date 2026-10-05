# Field FAQ


The same rep questions land in Slack every week, and the answer is whoever replied first. You end up with one FAQ ordered by how often each question comes up, every answer citing a document section, refreshed quarterly. Calven answers from the approved documents, so the FAQ stays right when they change.

## Prompts

### Answer the field's recurring questions

```
Using Calven MCP, answer these field questions from our approved documents.

FILL IN
- Questions: [paste the questions]

CONTEXT
The questions are the ones reps asked this month. Each answer must cite the document and section, in two to four sentences a rep can paste to a buyer.

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
```

### Refresh the answers that changed

```
Using Calven MCP, check this FAQ for answers that changed.

FILL IN
- FAQ: [paste the FAQ]
- Date: [the FAQ's last refresh date]

CONTEXT
Check the FAQ against everything recorded since its last refresh date.

PULL FROM THE UNIVERSE
- Product changes and drift findings since that date.
- Current versions of the documents each answer cites.

CHECK
- Each answer: still right, changed (give the new answer and section), or retire.

OUTPUT
The annotated FAQ.

GROUNDING
Change an answer only on a recorded change, cited.
```

### Find buyer questions the FAQ misses

```
Using Calven MCP, list the questions buyers asked on calls that our FAQ does not cover.

FILL IN
- FAQ: [paste the FAQ question list]

CONTEXT
I want the buyer questions from the last quarter that are missing from the FAQ.

PULL FROM THE UNIVERSE
- Customer quotes in the last quarter that are questions about the product, pricing, integrations, security or comparison, with frequency.

BUILD
- The missing questions ranked by frequency, each with the buyer's wording and the document that should answer it.

OUTPUT
The gap list.

GROUNDING
Cite the quotes. Do not write the answers; mark them for the next FAQ pass.
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
