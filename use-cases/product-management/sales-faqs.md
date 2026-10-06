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

## Advanced prompts

### Write an eval set for rep AI answers

```
Write an eval set that grades how well any AI tool answers our product questions, so I can catch overclaims before a rep repeats them. Use Calven MCP for the true answers and the questions buyers really ask.

FILL IN
- Product: [product]
- Answers to grade: [paste answers your sales AI tool or reps gave, or write "none"]

CONTEXT
Reps ask their AI tool what the product does and paste the answer into emails. Nobody checks it. I want a fixed test set I can run every time the product or the tool changes.

FROM CALVEN
- The product brief: capabilities, integrations, pricing and packaging, known weaknesses.
- Capability objections and questions buyers raised, from quotes and lost-deal drivers.
- The claims register, especially claims flagged with a concern.

BUILD
- Write 40 test questions: 15 straight capability questions, 10 "do you do X" where the true answer is no, 10 competitor comparisons, 5 traps that invite an overclaim.
- For each, the gold answer from the brief, the source section, and the failure to watch for.
- Write a rubric scoring 0 to 2 on accuracy, honesty about limits, and no invented feature.
- If I pasted answers, grade them and show the score by category.
- If you can run code, output it as a CSV or JSONL that an eval runner can load.

OUTPUT
The eval file, the rubric, and, if graded, the five worst answers with the fix.

GROUNDING
Every gold answer cites the product brief. Where the brief is silent, the gold answer is "not documented", never your guess.
```

### Run a scored objection drill for reps

```
Turn our product FAQ into a scored role-play drill: you play a tough buyer, the rep answers, and you grade every reply. Use Calven MCP for the buyer, their objections and the right answers.

FILL IN
- Persona: [persona]
- Competitor in the deal: [competitor, or write "none"]
- Rep level: [new hire or experienced]

CONTEXT
Reps read the FAQ once and forget it. They remember what they practised. I want a drill a rep can run alone in their AI tool in fifteen minutes before a call.

FROM CALVEN
- The persona's canvas: objections, KPIs and how they talk.
- The product brief's known weaknesses and what we don't do.
- The competitor's battlecard objection handling, if one is named.
- Verbatim buyer questions from calls, tagged Objection.

METHOD
- Play the buyer in the first person. Ask eight questions, starting easy and ending with the two hardest: a known weakness and a competitor comparison.
- Wait for the rep's reply each time. Don't answer for them.
- Score each reply 1 to 5 on truth (matches the brief), honesty about limits, and whether it moves the deal forward.
- After the drill, show the model answer for the two weakest replies, with the source.
- Make the questions harder for an experienced rep.

OUTPUT
The live drill, then a scorecard with the total, the weakest topic, and one thing to rehearse.

GROUNDING
Model answers cite the product brief or the battlecard. The buyer's questions come from the canvas and real call quotes. Don't invent a capability to make an answer sound better.
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
- Which question do buyers ask most that our reps answer differently from the product brief?
- Which known weakness comes up most in lost deals, and what's the honest answer?
- What did [competitor]'s reps tell our prospects about us, according to the quotes?
- Which integration do buyers ask about most that the brief doesn't list?
- Which FAQ answer would a [persona] find least convincing, and why?
