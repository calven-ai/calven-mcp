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

## Advanced prompts

### Score bid or no-bid first

```
Decide whether to bid on this RFP with an expected-value model before anyone writes a word. Use Calven MCP for the account's fit, our record in the segment and against the likely competitors.

FILL IN
- RFP summary: [paste the scope, requirements and evaluation criteria]
- Account: [account]
- Effort: [hours you estimate the response takes, and your team's hourly cost]
- Deal size: [the expected contract value]

CONTEXT
We answer every RFP we receive. Some were written for a competitor. I want to know which ones are worth three days of the team.

FROM CALVEN
- The account's ICP fit tier and segment, and the ICP's disqualifiers.
- Our win rate in the segment from the ICP dashboard and against the likely competitors from the competitive dashboard, with n.
- The product brief's capabilities and known weaknesses mapped to the RFP's mandatory requirements.

MODEL
- Check mandatory requirements first: any requirement the brief can't meet is a no-bid unless it's negotiable.
- Estimate win probability: start from the segment base rate, adjust for fit tier, competitor, whether we shaped the RFP, and requirement coverage. Show each adjustment.
- Expected value equals probability times deal size minus response cost. Add the option value of a relationship if we lose, as a stated assumption.
- Run the sensitivity: the win probability at which bidding breaks even.

OUTPUT
Bid or no-bid in one line, the expected value with its range, the break-even probability, and the three requirements that move the decision.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't mark a mandatory requirement met unless the brief says so.
```

### Score the response as three evaluators

```
Score my RFP response the way the buyer's panel will: three evaluators, the buyer's own rubric, scored independently. Use Calven MCP for the evaluator personas and the facts to check our answers against.

FILL IN
- Evaluation rubric: [paste the RFP's scoring criteria and weights]
- Response: [paste the draft response or the key sections]
- Evaluators: [the personas on the panel, for example technical buyer, economic buyer, end user]

CONTEXT
RFP panels score fast and disagree a lot. The section that loses points is usually the one written for the wrong reader.

FROM CALVEN
- The evaluator personas' canvases: goals, objections, what they need to believe.
- The product brief and approved proof points, to check every claim.
- A persona review of the response's executive summary.

METHOD
- Each evaluator scores every section against the rubric independently, with a one-line reason.
- Compute each section's weighted score and the spread between evaluators. A big spread means the section speaks to one reader.
- Fact-check claims against the brief and proof points; an unsupported claim costs points with the technical evaluator.
- Rewrite the two sections with the lowest score or the widest spread.

OUTPUT
The scoring table (section, three scores, spread, weighted total), the claims that failed the fact-check, and the two rewritten sections.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Evaluator scores are simulated from canvases and the review, and labelled so. Don't invent a proof point.
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
- Which RFP requirement types do we lose on most often, judging by lost-deal product feedback?
- Which of our unique attributes has a proof point we can cite in a response?
- What's our win rate in [segment] when [competitor] is also bidding, with n?
- Which claims in our boilerplate are flagged with a concern?
- What do [persona] evaluators object to in vendor responses, per their canvas?
- Which integration questions keep coming up that the brief answers only partly?
