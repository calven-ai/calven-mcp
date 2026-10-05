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
