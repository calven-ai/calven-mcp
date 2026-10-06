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

## Advanced prompts

### Red-team our answers as their architect

```
Red-team our technical story as the buyer's enterprise architect and security lead would, and find the answer that ends the evaluation. Use Calven MCP for what the product brief actually says, what changed recently and what we've claimed.

FILL IN
- Deal: [deal]
- Their environment: [paste what you know: cloud, identity provider, data warehouse, compliance needs]
- What we've told them so far: [paste the answers, emails or deck slides]

CONTEXT
The technical review is where a deal I think is won goes quiet. Their architect will read every answer looking for the gap. I want to find it first.

FROM CALVEN
- The product brief: capabilities, integrations, technical architecture, known weaknesses.
- Product changes from the last 90 days and any drift findings that left a document stale.
- Claims about security, integrations and data handling, with their proof status.

RED-TEAM
- Play two reviewers: the enterprise architect (fit with their stack, scale, failure modes) and the security lead (data flows, access, residency).
- Each writes the ten hardest follow-up questions to our answers, aimed at the gap between what we said and what the brief supports.
- Score every answer we gave: supported, overstated, contradicted, or silent in the brief.
- Pick the single question most likely to stall the deal and write the honest answer, including what we don't do.

OUTPUT
A findings table (question, reviewer, our answer's status, the brief's evidence, the risk), the top three rewrites, and the list for the SE.

GROUNDING
Judge only against the product brief, product changes and claims, cited by section. Where the brief is silent, say "not in the brief" and send it to the SE. Never invent a capability or certification.
```

### Score the RFP against the brief, weighted by risk

```
Turn the buyer's requirements into a weighted fit matrix in a spreadsheet, so I know my real fit score before I answer the RFP. Use Calven MCP for what the product does, what it doesn't and which plan includes what.

FILL IN
- Requirements: [paste or attach the RFP requirements or the buyer's checklist]
- Their weights: [paste their weighting, or write "none"]
- Competitor: [competitor in the deal, or "none"]

CONTEXT
An RFP looks like 200 equal lines. It isn't. A few lines decide it, and those are the ones I need to get right or walk away from.

FROM CALVEN
- The product brief: capabilities, integrations, pricing and packaging, known weaknesses.
- Recent product changes, so an old gap isn't scored as open.
- The competitor's feature comparison from their dossier, if one is named.

MODEL
- For each requirement: our status (meets, partial, workaround, no), the plan that includes it, the brief section, and a risk weight (how likely a "no" here loses the deal: use their weights if given, otherwise your stated assumption).
- Weighted fit score overall and for the must-haves. Same for the competitor where the dossier covers it.
- Sensitivity: which three requirements, if I'm wrong about them, move the score the most.
- If you can run code or make files, build it as a spreadsheet with formulas so I can change a status and watch the score move.

OUTPUT
The spreadsheet (or a table), the fit score with the must-have score, the three lines to send to the SE, and a bid or no-bid line.

GROUNDING
Label every number as Calven (cited), mine, or your assumption. A status with no brief section behind it is "not in the brief", never "meets".
```

### Write a test set of hard technical questions

```
Write an eval set of the hardest technical questions buyers ask us, each with a golden answer from the product brief, so I can test any draft answer (mine or an AI tool's) before it goes out. Use Calven MCP for the questions buyers raise and the facts that answer them.

FILL IN
- Focus: [an area, e.g. integrations, security, data handling, or "all"]
- Answers to grade: [paste draft answers to test, or write "none"]

CONTEXT
Wrong technical answers come from confident guessing. I want a fixed test set that catches the guess every time, and that I can reuse when the product changes.

FROM CALVEN
- The product brief: capabilities, integrations, technical architecture, known weaknesses, pricing and packaging.
- Buyer quotes tagged Objection or Product feedback about the focus area, to phrase questions the way buyers do.
- Product changes and claims in the focus area, with their proof status.

BUILD
- 20 questions. Include trick ones: a capability we don't have, a plan limit, an integration that changed recently, a question where "it depends" is the right answer.
- For each: the golden answer in under 50 words, the brief section, and the failure modes to catch (overclaiming, wrong plan, stale fact).
- A grading rule: pass, partial, fail, with what each means.
- If I pasted drafts, grade them against the set.

OUTPUT
The eval set as a table (or a CSV), the grading rule, and any graded drafts.

GROUNDING
Golden answers come only from the brief and product changes, cited. Where the brief can't answer a question, the golden answer is "not in the brief, ask the SE". Don't invent facts to complete the set.
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
- Which product feedback category shows up most on deals we lost?
- Which integrations do deals in [segment] list in their tech stack requirements that the brief doesn't mention?
- What does the [competitor] dossier say they do that our brief lists as a known weakness?
- Which technical claims on our site have no proof on record?
- How many lost deals this year carry Integrations as the loss reason or Security as product feedback?
- What did buyers say about onboarding or implementation, in their own words?
