# Product and capability questions


A customer asks what the product does, how a capability works or what it integrates with, and the usual sources are memory, old macros and a colleague in Slack. You get an answer at first contact you can stand behind without pinging product, matching what sales promised and what the website says. Calven gives you the approved brief, so the customer hears one version of the truth.

## Prompts

### Answer a product question from the brief

```
Using Calven MCP, answer a customer's product question from our approved product brief.

FILL IN
- Question: [paste the customer's question]

CONTEXT
I need the accurate answer to the question, in our approved words, and I need to know if anything about it changed recently.

PULL FROM THE UNIVERSE
- The product brief sections that cover this capability: features, use cases, integrations, technical architecture.
- Any product change in the last 90 days that touches it, and any document that change left stale.

ANSWER
- What the product does for this question, in two or three sentences a customer can read.
- What it does not do, if the brief says so.
- Whether a recent change affects the answer.

OUTPUT
The customer-ready answer, then the brief section it relies on, then a one-line note on recent changes.

GROUNDING
Answer only from the product brief and product changes in the Universe and cite the section. If the brief does not cover it, say "not in the brief" and do not guess.
```

### Tell a customer no without losing them

```
Using Calven MCP, help me tell a customer we do not do what they asked, without losing them.

FILL IN
- Request: [paste the customer's request]

CONTEXT
The request is for a capability we do not have. I want an honest answer, the closest thing we do offer, and how other customers get the same job done.

PULL FROM THE UNIVERSE
- The product brief: what we do that is closest, and the known weaknesses section if it names this gap.
- Customer quotes and themes about the same job, so I can see how others handle it.

WRITE
- A plain "we do not do X" line.
- The closest approved alternative, if any.
- One sentence on how other customers approach it, grounded in a quote.

OUTPUT
A short reply I can send, and a note on whether this gap already appears in customer themes.

GROUNDING
Do not promise anything the brief does not say. Do not invent a workaround. Cite the quote and the brief section.
```

### Write a technical answer for an engineer

```
Using Calven MCP, write a technical answer about the capability below for a customer who is an engineer.

FILL IN
- Capability: [capability]
- Question: [paste the question]

CONTEXT
The customer wants specifics on the question: how it works, limits, integration behaviour.

PULL FROM THE UNIVERSE
- The product brief: the capability, the technical architecture section, the integrations section.

WRITE
- The answer at an engineer's level: how it works, what the limits are, what it connects to.
- The one thing the brief does not state that they will probably ask next, flagged for product.

OUTPUT
The reply, with each technical statement tied to a brief section.

GROUNDING
Use only the product brief. Do not add architecture details from general knowledge of similar products.
```

### Report brief gaps back to product

```
Using Calven MCP, tell me how often customers ask for what our product brief does not cover.

FILL IN
- Gap: [capability or job]

CONTEXT
I answered a ticket today where the brief had no answer for the gap. Before I raise it with product I want to know if it is a pattern.

PULL FROM THE UNIVERSE
- Customer-voice themes and quotes about this job or capability, with counts and sentiment.
- Any product gap in the win/loss read that matches it.

BUILD
- How many times it comes up, from whom, with the two strongest quotes.
- Whether it shows up as a loss reason or product gap in deals.

OUTPUT
A short note I can post to product, with sources.

GROUNDING
Cite every count and quote. If the Universe has nothing on it, say so; one ticket is not a pattern.
```

## Ad hoc questions

- Does our product do [capability]? Quote the product brief.
- Which integrations does the brief list for [system]?
- What is the approved way to describe [feature] to a customer?
- Did anything change in [feature] in the last 60 days?
- What does the brief say we do not do?
- A customer asks whether [feature] works with [tool]. What is the answer?
- Which of our help articles might be stale after the last product change?
- How do other customers get [job] done, in their words?
- Is "[claim the customer saw on our site]" true according to the brief?
- What is the technical architecture section's answer on [data residency / limits / API]?
- Which plan includes [feature]?
- What is the approved boilerplate description of the product?
