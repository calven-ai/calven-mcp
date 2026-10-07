# Technical objections


A buyer just said it won't scale, won't integrate or security won't sign off, and you need an answer you can send in writing. You get a response their architect won't bounce back: the approved product truth, a buyer who raised the same concern and bought, and a plain yes when the objection is correct. Calven means every SE gives the same answer, and the honest no arrives early.

## Prompts

### Answer one technical objection in writing

```
Using Calven MCP, help me answer a technical objection in the deal below.

FILL IN
- Deal: [deal]
- Contact: [contact]
- Persona: [persona]
- Account: [account]
- Objection: [paste the objection]
- Competitor: [competitor that claims to handle it, or leave blank]

CONTEXT
The contact, who matches the persona, at the account raised the objection. The competitor, if named, claims to handle it. I want the honest answer, in writing, for their architect.

PULL FROM THE UNIVERSE
- The product brief sections on this topic: capabilities, integrations, technical architecture, known weaknesses, and recent product changes.
- Whether this objection decided deals: drivers mentioning it with rank, product feedback on lost deals.
- Buyers who raised it and bought, with their words, and how our own reps or SEs answered it on calls that went well.
- The competitor's feature comparison and the "they say, you say" for this claim.

BUILD
- What they are really asking.
- The answer from the brief, in plain words, including the honest limit if there is one.
- The workaround or the alternative, only if the brief supports it.
- The proof: one buyer who had the concern and bought, verbatim.
- The competitive line, if a competitor is named.
- Whether this is a question for engineering.

OUTPUT
The written response, then a line citing the brief sections and the deals behind it.

GROUNDING
Every technical claim from the brief, cited. Where the brief is silent, write "I will confirm with engineering". Quotes verbatim. No competitor claim beyond the dossier.
```

### See whether this objection decides deals

```
Using Calven MCP, has the objection below decided deals?

FILL IN
- Objection: [objection]
- Topic: [topic]
- Tag: [product feedback tag]
- Window: [time window, e.g. last four quarters]

CONTEXT
I want to know whether to fight the objection or scope around it.

PULL FROM THE UNIVERSE
- Deal drivers mentioning the topic, with direction, rank and outcome, in the window.
- Lost deals with product feedback tagged with the tag, with amounts if the workspace shows them.
- The verbatims.

BUILD
- How often it was raised, how often it decided the outcome, which way.
- What buyers who still bought said settled it.

OUTPUT
The counts with n, then the quotes.

GROUNDING
Record data only, cited. No inference beyond the sample.
```

### Find objections the brief can't answer

```
Using Calven MCP, which technical objections can our product brief not answer?

FILL IN
- Window: [time window, e.g. last month]

CONTEXT
For the monthly product feedback roundup.

PULL FROM THE UNIVERSE
- Technical objections from calls and surveys in the window, by frequency.
- The product brief.
- Lost deals where each objection was a driver.

CHECK
- Covered by the brief, partially covered, not covered.
- For the uncovered: deals lost, with count.

OUTPUT
A table, then the five to raise with product.

GROUNDING
Counts from the Universe only, cited with window.
```

### Check your written technical answer

```
Using Calven MCP, check my written answer to a technical objection.

FILL IN
- Objection: [objection]
- Persona: [persona]
- Answer: [paste your answer]

CONTEXT
The answer is my reply to the objection for a buyer who matches the persona.

PULL FROM THE UNIVERSE
- The product brief, product changes and the claims register.

CHECK
- Any claim not in the brief or contradicted by a change.
- Any place I hedge where the brief gives a clear answer, or claim where it gives none.

OUTPUT
My answer annotated, then the clean version.

GROUNDING
Against the Universe only. Say so if it is sound.
```

## Advanced prompts

### Debate the objection before the buyer does

```
Stage a structured debate on a technical objection: one side argues it holds, the other that it doesn't, and a judge decides. Use Calven MCP for the product facts, the buyers' words and how the objection played out in deals.

FILL IN
- Objection: [paste the objection as the buyer said it]
- Persona: [technical buyer persona]

CONTEXT
I have a stock answer and I believe it. That's the risk. I want the strongest case for the objection before I answer it in front of the buyer.

FROM CALVEN
- The product brief sections the objection touches, including known weaknesses.
- Buyer quotes raising the objection, and our reps' answers on calls we won.
- Deal drivers where the objection appears, with outcome.

METHOD
- Side A, the buyer's skeptic, steelmans the objection from the weaknesses and the losses. Three arguments with evidence.
- Side B, our SE, answers each from the brief and the wins. No claim beyond the brief.
- One rebuttal round each.
- A judge playing the persona scores each argument on evidence and relevance to their goals, and declares who carried each point.
- Where A wins, write the honest concession and the mitigation.

OUTPUT
The debate in under 500 words, the judge's scorecard, and the answer to give: concede what's true, win what's winnable, in five sentences.

GROUNDING
Every argument cites the brief, a quote or a driver. Don't let Side B claim a capability the brief doesn't list, and don't invent a deal outcome.
```

### Measure what the objection costs

```
Measure how much this objection really costs us in win rate, separating it from segment and competitor effects. Use Calven MCP for the closed deals and the tags that mark the objection.

FILL IN
- Objection: [the objection]
- Product feedback tag: [the closest tag, for example Integrations, Security, API]
- Window: [window]

CONTEXT
Everyone says this objection loses us deals. Product wants a number before they fund the fix, and I suspect it mostly shows up in a segment we lose anyway.

FROM CALVEN
- Closed deals in the window, won and lost, paged, with product feedback, account size, industry, competitors and loss reason.
- Deal drivers that mention the objection, with direction and whether they decided the deal.
- The overall win rate from the win/loss dashboard, with n, as the reference.

METHOD
- Flag deals where the objection appears, by tag or by driver.
- Compare win rates with and without the flag, then within segment and within competitor, to see if the gap survives.
- If you can run code, fit a logistic regression with the flag plus segment and competitor, and report the effect with a confidence interval.
- Translate the effect into pipeline: deals affected times the win-rate gap times average amount.

OUTPUT
A short memo: the raw gap, the adjusted gap with n, the pipeline at stake as a range, and whether the objection is a product problem or a targeting problem.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Row counts are labelled as counts. With fewer than 30 flagged deals, say the result is directional.
```

### Write the test that settles it

```
Design a short, falsifiable technical test that settles the objection, which the buyer can run themselves. Use Calven MCP for what the product supports and how buyers phrased the doubt.

FILL IN
- Objection: [the objection, for example "it won't scale to our volume"]
- Their environment: [paste what you know: data volumes, systems, constraints]

CONTEXT
Arguing about an objection loses to proving it. A test the buyer designs with me, runs in two hours and can't argue with beats any slide.

FROM CALVEN
- The product brief's technical architecture, integrations and known limits for the area.
- Buyer quotes raising the objection, to see what would convince them.
- Product changes in the area in the last six months.

METHOD
- Turn the objection into a hypothesis with one metric and a pass threshold the buyer agrees is meaningful.
- Design the test: setup, data, steps, what's measured, how many runs to separate signal from noise.
- Pre-register the result: write down what pass and fail look like and what each means for the deal, before running it.
- Check the test against the brief's limits: if the brief says it may fail, say so and scope the test to where we're strong, openly.

OUTPUT
A one-page test protocol the buyer can follow, the pass threshold, the pre-registered decision, and a two-line note to the AE on the risk.

GROUNDING
Every capability the test relies on is in the brief, cited by section. Don't invent a performance figure; thresholds are the buyer's or a stated assumption.
```

## Ad hoc questions

- Does the product do [capability], per the brief?
- What does the brief say about scale, limits and architecture?
- Do we integrate with [system]? What is the honest answer?
- Has "[objection]" ever decided a deal?
- How did we answer "[objection]" on calls we won?
- What does [competitor] claim about [capability], and what does our dossier say?
- What changed in the product around [area] recently?
- What is our known weakness on [topic]?
- Which buyer raised [concern] and bought anyway? What did they say?
- Is "[claim on our docs]" a supported claim?
- Which technical objection shows up most on deals we still won?
- What did our SEs say on calls when [objection] came up and the deal closed?
- Is [objection] more common in one segment or with one competitor?
- Which objection have buyers raised that the product brief doesn't address at all?
- Has a product change in the last six months made an old objection answer wrong?
- Which persona raises [objection], and what are they really worried about?
