# Customer questions


A customer asked a question and wants a written answer the same day, and without the approved brief every CSM answers differently. You get a reply grounded in the brief, with its caveat where it has one, and nobody from product or sales pulled into the thread. Calven also records the questions the brief can't answer, so product marketing knows what to write.

## Prompts

### Answer a customer question from the brief

```
Using Calven MCP, answer this customer question from the product brief.

FILL IN
- Question: [paste the question]
- Contact: [contact]
- Account: [account]
- Window: [time window for product changes, e.g. last 90 days]

CONTEXT
The contact at the account asked the question above. I want a reply I can send today.

PULL FROM THE UNIVERSE
- The product brief sections on the topic: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses.
- Product changes on the topic in the window.
- The messaging objection handling if the question is an objection.

WRITE
- A reply under 120 words: the answer, the caveat if the brief has one, the next step.
- Mark anything the brief does not cover as "not recorded" instead of answering.

OUTPUT
The reply and a one-line note on what the brief does not cover.

GROUNDING
Use only the Universe and cite the section. Do not infer a capability from a related one.
```

### Find questions the brief can't answer

```
Using Calven MCP, check which of these customer questions the product brief answers.

FILL IN
- Questions: [paste the questions]

CONTEXT
These are the questions my team got this week. I want to know which ones have an approved answer and which need product marketing to write one.

PULL FROM THE UNIVERSE
- The product brief, all sections.
- Product changes this month.

CHECK
- For each question: answered by the brief (with the section), partly answered, or not covered.

OUTPUT
A table, then the list for product marketing.

GROUNDING
Use only the Universe and cite it.
```

### Check a colleague's draft reply

```
Using Calven MCP, check this reply before I send it.

FILL IN
- Draft: [paste the draft]
- Account: [account]
- Topic: [topic]

CONTEXT
The draft is a reply to the account about the topic.

PULL FROM THE UNIVERSE
- The product brief on the topic and recent product changes.

CHECK
- Each claim: in the brief, overstated, or not in the brief.
- The accurate wording for each flag.

OUTPUT
The draft annotated and a clean version.

GROUNDING
Use only the Universe and cite it.
```

## Advanced prompts

### Model the questions you could deflect

```
Work out how much of my team's question load the approved product brief could answer, and what that's worth. Use Calven MCP for the brief, recent product changes and the known weaknesses.

FILL IN
- Question log: [attach a CSV of customer questions with date and handling time, or paste a sample]
- Team cost: [blended hourly cost of a CSM]

CONTEXT
Half our Slack questions get the same answer every week. Before I build an FAQ or a bot, I want to know how much it would actually take off the team.

FROM CALVEN
- The product brief: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses.
- Product changes in the last 90 days.
- Customer quotes tagged Objection or Product feedback, to see what customers ask in their own words.

MODEL
- Classify every question: answered fully by the brief, partly, contradicted by a recent change, or not covered.
- Cluster the questions and size each cluster. If you can run code, cluster on the text; otherwise group by hand.
- Compute the deflectable share and the hours it frees, as a range (half to all of the fully answered ones get deflected).
- List the not-covered clusters by volume. Those are brief gaps, not FAQ gaps.

OUTPUT
A table of clusters with volume, coverage and hours, the deflection estimate with range, and the five gaps to send to product marketing.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Coverage judgements cite the brief section. Don't mark a question answered unless the brief says it.
```

### Write an eval set for answer accuracy

```
Write an eval set that tests whether an assistant or a new CSM answers customer questions correctly. Use Calven MCP for the approved answers, the known weaknesses and the claims we can't support.

FILL IN
- Focus area: [area, for example integrations, security, pricing]
- Number of items: [how many questions, for example 30]

CONTEXT
We're rolling out an assistant and onboarding two CSMs. I want a test that catches the wrong answers that sound right, before a customer does.

FROM CALVEN
- The product brief sections for the focus area, including known weaknesses.
- Claims flagged with a concern or as unsupported.
- Recent product changes that make an older answer wrong.
- Messaging objection handling for the area.

BUILD
- Write questions in three tiers: straight lookups, questions where the honest answer is no, and questions built on an old fact a recent change made wrong.
- For each, write the reference answer with its source, the common wrong answer, and a grading rubric: correct, partly correct, wrong, or harmful (overclaims a capability).
- Add five adversarial items: leading questions that invite an overclaim.
- Give the scoring method and the pass mark.

OUTPUT
The eval set as a table (question, tier, reference answer, source, wrong answer, rubric), ready to paste into a sheet. If I say file, make a CSV.

GROUNDING
Every reference answer cites the brief, a change or a claim record. Don't write a reference answer the Universe doesn't support; mark it as needing an owner instead.
```

## Ad hoc questions

- Do we support [integration]?
- What does the product brief say about [security topic]?
- Is [feature] included in the [tier] plan?
- What changed in [area] in the last 60 days?
- What is the approved answer to "[objection]"?
- Does our architecture support [requirement]?
- What are our known weaknesses on [topic]?
- Is there anything in the brief about data residency?
- Write a reply to a customer asking whether we do [capability].
- Which questions do customers ask that our known weaknesses section already answers honestly?
- What's the most common question about [integration], and is the brief's answer still current?
- Which claims on our site would a customer quote back to us that the brief doesn't support?
- What did we change in the last 90 days that makes an old answer wrong?
- How do customers phrase questions about [topic], in their own words?
- Which question would trip up a new CSM because the honest answer is no?
