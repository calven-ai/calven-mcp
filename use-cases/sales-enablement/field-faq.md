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

## Advanced prompts

### Cluster the field's questions and find root causes

```
Cluster every question the field asked in the last year and find out why each cluster keeps coming back: a gap in the documents, or an answer nobody can find. Use Calven MCP to check each cluster against what the Universe already says.

FILL IN
- Questions: [attach an export of field questions: Slack messages, form submissions or tickets, with dates]
- Current FAQ: [paste the FAQ, or write "none"]

CONTEXT
I answer the same twenty questions a month. Writing more FAQ entries hasn't helped. I want to know which questions are a content problem and which are a findability problem.

FROM CALVEN
- The product brief, messaging (including objection handling and boilerplate), positioning and ICP.
- The battlecards, for competitor questions.
- Product changes in the last year, for questions that spike after a release.

METHOD
- Clean and cluster the questions by intent. If you can run code, embed and cluster them, then name each cluster; otherwise group by hand and show your groups.
- For each cluster: volume, trend by month, and whether it spikes after a product change.
- Check each cluster against the Universe: answered clearly, answered but buried, contradicted between documents, or not answered.
- Root cause per cluster: content gap, findability, contradiction, or a release we didn't brief.

OUTPUT
A table of clusters: example questions, volume, trend, Universe status, root cause, fix. Then the ten FAQ entries that would remove the most questions, each with its source.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. An answer counts as in the Universe only with a cited document and section; don't write an FAQ answer the documents don't support.
```

### Forecast the questions the next release will trigger

```
Predict the questions the next release will trigger from the field and from buyers, using what happened after past releases as the reference class, and have the answers ready. Use Calven MCP for past product changes and what buyers said after them.

FILL IN
- Release: [paste the release notes or describe the change]
- Release date: [date]

CONTEXT
After every release, the same thing happens: a week of reps asking the same questions in Slack and getting different answers. I want to be ahead of it this time.

FROM CALVEN
- Past product changes with dates, severity and so-what.
- Customer quotes and objections in the 60 days after each of those changes that touch the changed area.
- Drift findings each change caused: what went stale.
- The product brief entry for the area being changed.

METHOD
- Pick the three past changes most like this one (same area, same severity, same audience) and say why.
- For each, list what buyers asked or objected to afterwards and what went stale.
- Generalise: question types that follow a change like this (does it work with, what does it cost, does it replace, what happens to existing customers, how does it compare).
- Forecast the 15 most likely questions for this release, each with a likelihood (high, medium, low) and the past evidence that supports it.
- Answer each from the product brief. Where the brief doesn't answer, write the question PMM must answer before launch.

OUTPUT
The forecast table: question, likelihood, evidence, approved answer with source or "PMM to answer". Then the FAQ section ready to publish on release day.

GROUNDING
Likelihoods are your judgement; label them. Every answer cites the product brief, and every "past evidence" entry cites a dated change or quote.
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
- Which questions do buyers ask on calls that our FAQ doesn't answer?
- Where do two of our documents give different answers to the same question?
- What's the honest answer to "[question]" if the product brief says we don't do it?
- Which integration do buyers ask about most that the product brief doesn't list?
- What did we change in packaging that reps might still be quoting the old way?
- Which FAQ answer is most likely out of date after this month's product changes?
