# Answer pages

**Team:** Content marketing · also SEO, product marketing
**Impact:** Medium. Buyers increasingly ask an AI assistant instead of searching. A page that answers one buyer question directly, in the buyer's words, with the company's own evidence, is what those assistants cite. The questions come from calls; the search volume comes from the SEO tool.
**Prerequisites:** strategy documents approved (positioning, messaging, product brief), personas approved. Better with call transcripts ingested (the questions buyers actually ask) and competitors tracked (for "X vs Y" questions). AI visibility data and keyword demand stay outside Calven.

## What the team is trying to do

Build a set of short pages, each answering one question a buyer asks ("how do I evaluate…", "what does … cost", "is X better than Y for…"), structured so a person and an AI assistant get the answer in the first paragraph. Done means the question is one buyers ask, the answer is on-positioning and factually right, and the page carries the proof. The hard part is picking the questions buyers ask rather than the ones the team wishes they asked.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the questions | What buyers ask at each stage | Questions and objections from calls, the persona's jobs to be done, the FAQ-style objections in messaging | Quotes, themes, persona canvases, messaging (objection handling) |
| 2 | Check demand | Search volume and what AI assistants currently answer | Calven does not help with volume. The positioning dashboard's "how AI sees you" shows what assistants say about us today | Positioning dashboard (AI perception) |
| 3 | Write the direct answer | The answer in two sentences, then the detail | On-positioning answer with the product facts and the proof | Positioning, messaging, product brief |
| 4 | Add evidence | Quotes, numbers, comparisons | Verbatim quotes, proof points, battlecard facts for comparison questions | Quotes, positioning, battlecards |
| 5 | Review | Claims, drift, persona reaction | Claim check and persona review | Product brief, `review_against_personas` |
| 6 | Publish and structure | Schema, FAQ markup, internal links | Calven does not help here | |

## Recommended prompts

### Step 1: the questions buyers ask

```
Using Calven MCP, list the questions [persona] asks before buying.

CONTEXT
I am building answer pages. I want the questions buyers actually asked, not the ones we assume.

PULL FROM THE UNIVERSE
- Customer quotes tagged as objections, jobs to be done and buying triggers for [persona].
- The [persona] canvas: jobs to be done and objections.
- The objection handling section of our messaging.
- The questions that appear in win/loss responses, if any.

BUILD
- The questions in the buyer's wording, grouped by stage (what is this, how do I choose, what does it cost, how does it compare, will it work for us).
- For each: how often it appears, and the quote behind it.

OUTPUT
A table of questions with frequency and source.

GROUNDING
Use only recorded quotes, canvases and messaging in the Universe and cite them. Do not add questions from your own knowledge of the category.

[name the persona]
```

### Step 2: what AI assistants say about us today

```
Using Calven MCP, show me how AI assistants currently answer questions about us.

CONTEXT
Before writing answer pages I want to know where assistants get us wrong.

PULL FROM THE UNIVERSE
- The positioning dashboard's "how AI sees you" section and the individual AI answers behind it.
- Our positioning statement and category.

CHECK
- For each recorded answer: what it says about us, what is wrong or missing against our positioning, which competitor it names instead.

OUTPUT
A table: question, what the assistant said, the gap, the page that would fix it.

GROUNDING
Use only the AI answers recorded in the Universe and cite them with dates. Do not run new queries; say which questions have no recorded answer.
```

### Step 3 and 4: write an answer page

```
Using Calven MCP, write an answer page for the question "[question]".

CONTEXT
The reader is [persona]. The page answers in the first two sentences, then explains, then shows proof, then a short FAQ. Under 600 words. Title is the question.

PULL FROM THE UNIVERSE
- Our positioning and the message for [persona] at the [stage] stage.
- The product brief sections the answer touches.
- Customer quotes on the topic, and the battlecard for [competitor] if the question compares.

WRITE
- The direct answer, two sentences, no preamble.
- The explanation in the buyer's words with one verbatim quote.
- The proof: a proof point or an outcome with its source.
- Three related questions with one-line answers.

OUTPUT
The page in markdown with a source list.

GROUNDING
Ground every claim in the Universe and cite it. Mention only capabilities in the product brief. For comparison questions use only the battlecard and say where the competitor is stronger.

[name the question, persona, stage and competitor if any]
```

### Step 5: review a batch of answers

```
Using Calven MCP, check these answers before they go live.

CONTEXT
Below are [number] question-and-answer pairs. I want every one checked for accuracy and positioning, and read as the persona.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- Our positioning.
- The [persona] canvas, and run the persona review on the set.

CHECK
- Each answer: claims correct, wrong, stale or unverified; on-positioning or drifting.
- The persona's reaction: which answers read as a sales pitch, which the persona would trust.

OUTPUT
A table per answer with verdicts and the fix, then the persona findings.

GROUNDING
Judge only against the Universe and cite. If an answer is clean, say so.

[paste the question-and-answer pairs]
```

## Ad hoc questions

- What questions did [persona] ask about [topic] on calls?
- What do AI assistants currently say when asked about us?
- What is the two-sentence answer to "[question]" according to our positioning?
- Does the product brief answer "[question]"?
- Which objections in our messaging have a ready answer I can turn into a page?
- What does [persona] want to know before a demo?
- How do we compare with [competitor] on [dimension], according to the battlecard?
- Which buyer questions have no answer anywhere in our messaging?
- Give me a customer quote that answers "[question]".
- What does our positioning say the category is, in one sentence?

## Good practice

- Take questions from calls first, then check volume. A question ten buyers asked is worth a page even at low volume.
- Answer in the first two sentences. The persona review will tell you if the opening reads as a pitch.
- One question per page. Related questions go in the FAQ.
- Keep comparison answers inside the battlecard and name where the competitor is stronger.
- Rerun the "how AI sees you" prompt each quarter and write toward the gaps.

## Not covered today

- Search volume, AI visibility tracking and running new assistant queries. Calven records what its own monitoring found; it does not query assistants from the AI tool.
- Schema markup, FAQ markup, internal links and publishing.
- Third-party statistics.
