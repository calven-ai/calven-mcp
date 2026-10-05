# RFP and RFI responses

**Team:** Solutions engineering · also account executives, product marketing, legal
**Impact:** Medium. An RFP is hundreds of answers under deadline, and the differentiating ones are the ones written from memory.
**Prerequisites:** product brief, positioning and messaging approved. Better with competitors tracked, win/loss surveys running, own site and docs monitored (claims).

## What the team is trying to do

Answer the product, integration, architecture and differentiation questions from the approved sources in the approved wording, mark what the sources do not cover for a human, and write the executive summary and the "why us" sections on positioning rather than template. Done means a draft where every product answer cites the brief and every unanswerable question is flagged, not guessed. Without the company's own sources, the RFP is last year's answer library with the dates changed.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Triage the questions | Product, security, commercial, legal, company | Calven does not help with triage beyond the product set | |
| 2 | Answer product questions | Capabilities, integrations, architecture, limits | Product brief with section citations; product changes for currency | Product brief, product changes |
| 3 | Answer differentiation questions | Why us, what is unique | Positioning: unique attributes, value themes, proof points; messaging boilerplate | Positioning, messaging |
| 4 | Answer competitive questions | How we compare to named alternatives | Battlecard and feature comparison for each named competitor | Battlecard, deep dive |
| 5 | Add proof | References, outcomes | Quotes by highlight, verbatim, with permission status unknown to Calven | Quotes |
| 6 | Write the executive summary | The buyer's problem, our approach, why us | The persona canvas for the evaluator; positioning narrative | Persona canvas, positioning |
| 7 | Mark the gaps | Questions the sources cannot answer | A list of unanswered questions for product, security and legal | All |
| 8 | Security, legal, commercial | Certifications, terms, pricing tables | Calven does not help here beyond the product brief's pricing section; see `security-questionnaires.md` | |
| 9 | Final review | Consistency, claims, tone | A claims check across the document | Product brief, claims |

## Recommended prompts

### Step 2 to 4 and 7: answer a batch of questions

```
Using Calven MCP, answer these RFP questions from our approved sources.

CONTEXT
Below are [n] questions from [account]'s RFP, product and differentiation only. [Competitor] is the incumbent, if relevant. I need the approved wording and a flag on anything we cannot answer from the sources.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses, and recent product changes.
- Our positioning and messaging: unique attributes, value themes, proof points, boilerplate.
- The [competitor] battlecard and feature comparison for comparative questions.

ANSWER
- Each question: the answer in two to five sentences in the approved wording, the source section, and a status: answered, partial, or needs a human (product, security, legal).
- For partial answers: what is supported and what is not.

OUTPUT
A table: question, answer, source, status. Then the list of questions for humans.

GROUNDING
Only the Universe, cited. Never answer a product question the brief does not cover; mark it. Competitor claims only from the dossier.

[paste the questions; name the account and competitor]
```

### Step 6: the executive summary

```
Using Calven MCP, write the executive summary for [account]'s RFP.

CONTEXT
The RFP states the problem as: [paste]. The evaluators are [personas]. [Competitor] is the incumbent.

PULL FROM THE UNIVERSE
- The persona canvases for the evaluators: pains, gains, what they need to believe.
- Our positioning: narrative, unique attributes, value themes, why now, proof points.
- The [competitor] battlecard "how we win" for the honest contrast.
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

[paste the problem statement; name the account, personas and competitor]
```

### Step 9: claims check across the document

```
Using Calven MCP, check every product claim in this RFP response.

CONTEXT
Below is the full response. Flag anything not in the brief or stale.

PULL FROM THE UNIVERSE
- The product brief, product changes, drift findings and the claims register.

CHECK
- Each product, integration, pricing and differentiation claim: supported, stale, overstated, not in the sources.
- Inconsistent answers to similar questions.

OUTPUT
The response annotated, then the list for human review.

GROUNDING
Against the Universe only. Silence is "not in the sources".

[paste the response]
```

### Gap mode: what our answer library should add

```
Using Calven MCP, which RFP questions keep coming up that our sources cannot answer?

CONTEXT
Below are the questions marked "needs a human" from the last [n] RFPs.

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

[paste the questions]
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

## Good practice

- Batch product questions and send them in one prompt. Answers stay consistent.
- Keep the status column. The RFP's value is in what you do not guess.
- Write the executive summary from positioning, not from the answer library.
- Run the claims check on the final document, after every contributor has written their part.
- Keep security, legal and commercial sections with their owners; see `security-questionnaires.md` for the boundary.

## Not covered today

- Security certifications, policies and controls beyond the brief's architecture section.
- Legal terms, insurance, company financials, references' permission status.
- The RFP tool and the answer library itself. Calven supplies the approved facts; the library lives where it lives.
