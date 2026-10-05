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
