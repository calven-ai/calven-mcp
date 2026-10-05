# Launches positioned from day one


The feature is done, and now it has to land with the buyer and stay consistent with the company story. You walk away with its value statement under the right pillar, the persona and the pain it removes in their words, the proof, claims checked against the product brief, a sales FAQ and a list of documents the launch leaves stale. Without a PMM this is your job; with one, Calven means you both start from the same evidence.

## Prompts

### Frame the launch on one page

```
Using Calven MCP, frame the launch of the feature below.

FILL IN
- Feature: [feature]
- Product: [product]
- Timeframe: [when it ships, e.g. next month]

CONTEXT
The feature ships in the timeframe above. Before writing anything I want to know who it is for, which pain it removes in the buyer's words, and who asked for it.

PULL FROM THE UNIVERSE
- The personas whose pains and jobs this feature addresses, from their canvases.
- Customer themes and quotes about the problem it solves.
- Deal drivers and lost deals that named this capability.

BUILD
- The primary persona and one secondary, with the pain and the job to be done in their words.
- The three strongest quotes about the problem.
- The deals that asked for it: how many, outcome, amount at stake.

OUTPUT
A launch frame on one page: persona, pain, evidence, deals.

GROUNDING
Use only canvases, quotes and drivers in the Universe and cite them. If no deal named this capability, say so.
```

### Write the launch messaging

```
Using Calven MCP, write the launch messaging for the feature below.

FILL IN
- Feature: [feature]
- Persona: [persona]
- Launch frame: [paste the launch frame]

CONTEXT
I need messaging that fits our positioning and sounds like our customers.

PULL FROM THE UNIVERSE
- Our positioning: value themes and unique attributes, so the feature lands under the right one.
- The messaging: the pillar it belongs to and the value proposition for the persona.
- The product brief entry for what the feature does.
- Customer quotes on the problem, for proof and language.

WRITE
- The pillar it supports and why.
- A headline, a one-liner, three benefits each tied to a pain, and one proof point with its quote.
- A short "what it is not" line from the product brief, so sales does not overclaim.

OUTPUT
The messaging block, with the pillar and sources noted.

GROUNDING
Use only claims the product brief supports and quotes from the Universe. Do not invent outcomes or numbers. Do not introduce a value theme the positioning does not have.
```

### Fact-check the launch copy

```
Using Calven MCP, fact-check the launch copy for the feature below.

FILL IN
- Feature: [feature]
- Launch copy: [paste the launch copy]

CONTEXT
The launch copy covers blog, email and in-app text. Every product, pricing and integration claim must be right.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Recent product changes and the claims register.

CHECK
- Mark each claim correct, overstated, stale or not in the brief.
- For each flagged claim, give the accurate wording.
- Note any claim that duplicates one already on our site with a different number.

OUTPUT
The copy annotated inline, then a list of claims a human must confirm with engineering.

GROUNDING
Confirm only against the product brief and claims in the Universe and cite the section. Where the brief is silent, write "not in the brief".
```

### Review the announcement as the persona

```
Using Calven MCP, review the launch announcement as the persona below.

FILL IN
- Persona: [persona]
- Announcement: [paste the announcement]

CONTEXT
I want the persona's honest reaction to the announcement before it goes out.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.

REACT
- What lands, what reads as vendor marketing, the line they would not believe, the question they still have.
- Whether the headline names a problem they recognise.

OUTPUT
The findings with severity, then the three edits.

GROUNDING
React only from what the Universe says about this persona.
```

### List what the launch makes stale

```
Using Calven MCP, list what the feature launch below makes stale.

FILL IN
- Feature: [feature]
- Area: [the product area it changes]

CONTEXT
The feature changes what the product does in the area above. I need every published document and claim that now tells an old story.

PULL FROM THE UNIVERSE
- Product changes recorded for the area and the drift findings tied to them, with the document each one affects and the verdict.
- Claims about the area on our site and in our documents.
- Battlecards and the product brief sections that mention the area.

BUILD
- A table: document or claim, what it says now, what changed, the suggested fix, owner.

OUTPUT
The readiness table.

GROUNDING
Use only drift findings, claims and documents in the Universe and cite them. If the product change has not been recorded yet, say so, and list the documents that mention the area as candidates instead.
```

### Write the sales FAQ for the launch

```
Using Calven MCP, write the sales FAQ for the feature launch below.

FILL IN
- Feature: [feature]

CONTEXT
Sales will get questions from prospects and customers on day one. I need the ten most likely questions with answers that are true.

PULL FROM THE UNIVERSE
- The product brief: what the feature does, integrations, packaging, known weaknesses.
- Objection handling in our messaging and in the battlecards where competitors have a similar capability.
- Customer quotes that show how buyers describe the problem.

WRITE
- Ten questions and answers: what it does, who it is for, what it does not do, how it compares, packaging, migration, security, timing (no dates), proof.
- A "do not say" list of claims the brief does not support.

OUTPUT
The FAQ and the do-not-say list.

GROUNDING
Use only claims in the product brief and messaging, cited. Do not invent pricing, dates or integrations.
```

## Ad hoc questions

- Which pillar does [feature] belong under in our messaging?
- Which persona has the pain [feature] removes? Quote their canvas.
- Did any lost deal name [feature]? How many, and against whom?
- What do customers call the problem [feature] solves?
- Is "[claim]" supported by the product brief?
- Which published documents mention [area] and might be stale after the launch?
- What is our value proposition for [persona] at the awareness stage?
- Does [competitor] have something like [feature]? What does the battlecard say?
- Give me three customer quotes as proof for [feature]'s benefit.
- What does the product brief say we do not do in [area]?
- Which claims on our site about [area] have no proof point?
- How would [persona] react to this headline: "[headline]"?
