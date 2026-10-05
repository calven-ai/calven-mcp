# RFP and RFI responses


An RFP just landed with hundreds of questions and a deadline. You get a draft where every product, integration and architecture answer cites the brief in the approved wording, every question the sources can't answer is flagged for a human, and the executive summary and "why us" sections stand on the positioning. Calven keeps it from being last year's answer library with the dates changed.

## Prompts

### Answer a batch of RFP questions

```
Using Calven MCP, answer these RFP questions from our approved sources.

FILL IN
- Account: [account]
- Competitor: [incumbent competitor, or leave blank if none]
- Questions: [paste the questions]

CONTEXT
The questions come from the account's RFP, product and differentiation only. The competitor, if named, is the incumbent. I need the approved wording and a flag on anything we cannot answer from the sources.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses, and recent product changes.
- Our positioning and messaging: unique attributes, value themes, proof points, boilerplate.
- The competitor's battlecard and feature comparison for comparative questions.

ANSWER
- Each question: the answer in two to five sentences in the approved wording, the source section, and a status: answered, partial, or needs a human (product, security, legal).
- For partial answers: what is supported and what is not.

OUTPUT
A table: question, answer, source, status. Then the list of questions for humans.

GROUNDING
Only the Universe, cited. Never answer a product question the brief does not cover; mark it. Competitor claims only from the dossier.
```

### Write the RFP executive summary

```
Using Calven MCP, write the executive summary for the account's RFP.

FILL IN
- Account: [account]
- Problem: [paste the RFP's problem statement]
- Personas: [personas of the evaluators]
- Competitor: [incumbent competitor]

CONTEXT
The RFP states the problem as given. The evaluators match the personas. The competitor is the incumbent.

PULL FROM THE UNIVERSE
- The persona canvases for the evaluators: pains, gains, what they need to believe.
- Our positioning: narrative, unique attributes, value themes, why now, proof points.
- The competitor's battlecard "how we win" for the honest contrast.
- Two proof quotes, verbatim.

WRITE
- Their problem restated in their words.
- Our approach in plain terms.
- Why us, with the trade-off stated.
- The proof.

OUTPUT
A one-page summary with a source line.

GROUNDING
Claims only from positioning and the brief, cited. Quotes verbatim. No invented outcomes.
```

### Check every product claim in the response

```
Using Calven MCP, check every product claim in this RFP response.

FILL IN
- Response: [paste the response]

CONTEXT
The response is the full one. Flag anything not in the brief or stale.

PULL FROM THE UNIVERSE
- The product brief, product changes, drift findings and the claims register.

CHECK
- Each product, integration, pricing and differentiation claim: supported, stale, overstated, not in the sources.
- Inconsistent answers to similar questions.

OUTPUT
The response annotated, then the list for human review.

GROUNDING
Against the Universe only. Silence is "not in the sources".
```

### Find what the answer library should add

```
Using Calven MCP, which RFP questions keep coming up that our sources cannot answer?

FILL IN
- RFPs: [number of recent RFPs the questions come from]
- Questions: [paste the questions marked "needs a human"]

CONTEXT
The questions are the ones marked "needs a human" across the recent RFPs.

PULL FROM THE UNIVERSE
- The product brief, to confirm each is still unanswered.
- Product changes since each RFP, in case the answer now exists.

BUILD
- Questions now answerable, with the answer and source.
- Questions still open, grouped by owner (product, security, legal).

OUTPUT
Two lists.

GROUNDING
Only the Universe, cited.
```

## Ad hoc questions

- What does the brief say about [capability or integration]?
- What is our approved boilerplate?
- What are our unique attributes, per positioning?
- How do we compare to [competitor] on [capability], per the dossier?
- Which proof point is approved for [value theme]?
- What is in each plan, per pricing and packaging?
- Has the product changed in [area] since [date]?
- Is "[claim]" a supported claim on our site?
- What do evaluators who are [persona] need to believe?
