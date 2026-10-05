# Technical questions


A buyer asked a product question and you'd rather answer it straight than stall for the SE. You get an answer from the approved product brief on what it does, how it works, what it integrates with and what it costs, a plain "we don't" when the brief says so, and a clear call on which questions go to the SE. Calven adds the approved source, so you're not answering from the last demo you saw after the product moved on.

## Prompts

### Answer a buyer's technical question

```
Using Calven MCP, answer a technical question from the contact below.

FILL IN
- Contact: [contact]
- Account: [account]
- Persona: [persona]
- Question: [the question]

CONTEXT
The contact, who is the persona above, asked the question. I want a straight answer I can send today, including a plain "no" if that is the truth.

PULL FROM THE UNIVERSE
- The product brief sections that cover this: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses.
- Product changes in the last 90 days that touch this topic, and any drift finding on the brief.
- The claims register for any related statement on our site.

BUILD
- The answer in two or three sentences, in plain words.
- What we do not do, if that is part of the honest answer, and the usual workaround or alternative.
- Whether this is a question for the solutions engineer, and why.

OUTPUT
The reply I can send, then a line citing the brief sections it relies on.

GROUNDING
Every claim must be in the product brief or a recorded product change; cite the section. Where the brief is silent, write "I will confirm with our product team" rather than a guess.
```

### Check whether your product answer still holds

```
Using Calven MCP, check whether this product answer is still true.

FILL IN
- Topic: [topic]
- Answer: [paste what you tell buyers]

CONTEXT
The answer is what I have been telling buyers about the topic. I want to know if the product moved.

PULL FROM THE UNIVERSE
- The product brief sections on the topic.
- Product changes touching the topic and any document they left stale.
- Claims on our site about the topic and their status.

CHECK
- Each statement: correct, stale, wrong or not in the brief.
- The corrected wording.

OUTPUT
My answer annotated, then the clean version.

GROUNDING
Confirm only against the brief, changes and claims in the Universe, cited. Do not fill gaps from general knowledge of the product category.
```

### Find questions the product brief can't answer

```
Using Calven MCP, which technical questions from buyers does our product brief not answer?

FILL IN
- Window: [time window, e.g. last quarter]
- Product: [product, or leave blank for all]

CONTEXT
I want the list for product marketing so the brief gets better.

PULL FROM THE UNIVERSE
- Customer quotes and objections that are product questions, from the window.
- Product feedback tagged on lost deals.
- The product brief sections.

CHECK
- Which questions the brief answers, which it does not.
- Which unanswered ones appear on lost deals, with count.

OUTPUT
A table: question, how often, on lost deals, covered yes or no. Then the five to add first.

GROUNDING
Counts from the Universe only, cited with window. Do not invent questions.
```

## Ad hoc questions

- Do we integrate with [system]?
- Does the product do [capability]? Say no if we do not.
- What does the brief say about hosting, data residency and SSO?
- What changed in the product in the last 90 days?
- Is "[claim on our website]" a supported claim?
- What are our known weaknesses, as the brief states them?
- Which plan includes [feature]?
- What is the approved answer on API access and rate limits?
- What do we say when a buyer asks about [feature we lack]?
- Is this a question for the solutions engineer?
- What is the workaround we recommend for [gap]?
- Has any document gone stale since the last release?
