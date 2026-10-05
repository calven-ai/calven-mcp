# Sales FAQs


Prospects keep asking reps the same product questions: what it does, what it doesn't, integrations, security, packaging, how it compares. You get one FAQ with true answers that reps and their AI tool can answer from, refreshed when the product changes. Calven builds it from the product brief, so the FAQ is the brief in question shape.

## Prompts

### Build the sales FAQ

```
Using Calven MCP, build the sales FAQ for the product below.

FILL IN
- Product: [product]

CONTEXT
Reps ask the same questions every week. I want an FAQ answered from the product brief, honest about what we do not do.

PULL FROM THE UNIVERSE
- The questions reps ask and the caveats they give on calls, from rep quotes.
- Capability objections from deal drivers and the objection handling in our messaging.
- The product brief: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses.

BUILD
- Twenty questions grouped by topic (capabilities, integrations, security and architecture, packaging, comparisons, implementation), each with a three-line answer and the brief section it comes from.
- A "we do not do this" list from the known weaknesses, with the honest answer for each.

OUTPUT
The FAQ.

GROUNDING
Answer only from the product brief and messaging in the Universe and cite the section. Where the brief is silent, write "not in the brief; ask product" instead of answering.
```

### Add the competitive answers

```
Using Calven MCP, add the competitive questions to the sales FAQ.

FILL IN
- Competitor: [competitor]

CONTEXT
Prospects ask how we compare with the competitor. I want FAQ answers that match the battlecard.

PULL FROM THE UNIVERSE
- The competitor's battlecard: objection handling, how we win, where we lose, talk track.
- The product brief's known weaknesses.

WRITE
- Five questions prospects ask about the competitor, each with the battlecard answer and the honest caveat where we lose.

OUTPUT
The five FAQ entries.

GROUNDING
Use only the battlecard and brief, cited. Do not claim capabilities the brief does not list.
```

### Fact-check an existing FAQ

```
Using Calven MCP, fact-check this sales FAQ.

FILL IN
- FAQ: [paste the FAQ]
- Window: [time window since it was published, e.g. last six months]

CONTEXT
The FAQ is as published. Our product changed since. I need every stale or wrong answer found.

PULL FROM THE UNIVERSE
- The product brief as published.
- Product changes in the window and the drift findings on published documents.
- The claims register for the claims the FAQ makes.

CHECK
- Mark each answer correct, stale, overstated or not in the brief, with the fix.

OUTPUT
The FAQ annotated, then the list of answers to rewrite.

GROUNDING
Confirm only against the brief, changes and claims in the Universe, cited.
```

## Ad hoc questions

- Does our product do [capability]? What does the brief say?
- Which integrations does the product brief list?
- What does the brief say we do not do?
- What do reps say on calls when asked about [topic]?
- How should a rep answer "how do you compare with [competitor]"?
- Which questions came up as capability objections in lost deals this quarter?
- Is [claim] in the product brief?
- What changed in the product in the last 60 days?
- Which answers in our FAQ reference a document flagged as stale?
- What is in the [tier] plan?
- What is our honest answer on [known weakness]?
- What do we say when a buyer asks about [security topic]?
- Which questions came up on calls this month that we have no answer for?
