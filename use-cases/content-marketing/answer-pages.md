# Answer pages


You're building short pages that each answer one buyer question, structured so a person and an AI assistant get the answer in the first paragraph. You walk away with pages that answer questions buyers actually ask, on-positioning, factually right and carrying the proof. Calven helps with the hard part: picking the questions buyers ask rather than the ones the team wishes they asked.

## Prompts

### List the questions buyers ask

```
Using Calven MCP, list the questions the persona below asks before buying.

FILL IN
- Persona: [persona]

CONTEXT
I am building answer pages. I want the questions buyers actually asked, not the ones we assume.

PULL FROM THE UNIVERSE
- Customer quotes tagged as objections, jobs to be done and buying triggers for the persona.
- The persona's canvas: jobs to be done and objections.
- The objection handling section of our messaging.
- The questions that appear in win/loss responses, if any.

BUILD
- The questions in the buyer's wording, grouped by stage (what is this, how do I choose, what does it cost, how does it compare, will it work for us).
- For each: how often it appears, and the quote behind it.

OUTPUT
A table of questions with frequency and source.

GROUNDING
Use only recorded quotes, canvases and messaging in the Universe and cite them. Do not add questions from your own knowledge of the category.
```

### See how AI assistants answer about us

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

### Write an answer page

```
Using Calven MCP, write an answer page for the question below.

FILL IN
- Question: [question]
- Persona: [persona]
- Stage: [buying stage]
- Competitor: [competitor, or leave blank if the question does not compare]

CONTEXT
The reader is the persona. The page answers in the first two sentences, then explains, then shows proof, then a short FAQ. Under 600 words. Title is the question.

PULL FROM THE UNIVERSE
- Our positioning and the message for the persona at the stage.
- The product brief sections the answer touches.
- Customer quotes on the topic, and the competitor's battlecard if the question compares.

WRITE
- The direct answer, two sentences, no preamble.
- The explanation in the buyer's words with one verbatim quote.
- The proof: a proof point or an outcome with its source.
- Three related questions with one-line answers.

OUTPUT
The page in markdown with a source list.

GROUNDING
Ground every claim in the Universe and cite it. Mention only capabilities in the product brief. For comparison questions use only the battlecard and say where the competitor is stronger.
```

### Check a batch of answers

```
Using Calven MCP, check these answers before they go live.

FILL IN
- Persona: [persona]
- Answers: [paste the question-and-answer pairs]

CONTEXT
I want every question-and-answer pair checked for accuracy and positioning, and read as the persona.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- Our positioning.
- The persona's canvas, and run the persona review on the set.

CHECK
- Each answer: claims correct, wrong, stale or unverified; on-positioning or drifting.
- The persona's reaction: which answers read as a sales pitch, which the persona would trust.

OUTPUT
A table per answer with verdicts and the fix, then the persona findings.

GROUNDING
Judge only against the Universe and cite. If an answer is clean, say so.
```

## Advanced prompts

### Simulate an AI assistant choosing a source

```
Simulate an AI assistant answering a buyer's question and choosing which source to cite: our page, a competitor's, or a generic one. Then rewrite ours until it wins. Use Calven MCP for what assistants already say about us and the evidence our answer can stand on.

FILL IN
- Question: [the buyer question]
- Our page: [paste our answer page]
- Competing sources: [paste one or two competing pages answering the same question]

CONTEXT
Buyers ask the assistant, not the search box. The assistant reads a handful of sources and cites the one that answers most directly with the most credible evidence. I want to know whether that's us.

FROM CALVEN
- What AI assistants currently answer about us, from the positioning dashboard, and the answer to this question if it's recorded.
- Our positioning and the product brief on the topic.
- Customer quotes and a proof point that answer the question in the buyer's words.

SIMULATE
- Act as an answer engine: read all the sources and write the answer you'd give a buyer, citing the sources you used and why.
- Score each source on: answers in the first two sentences, specific facts, evidence a buyer can check, freshness, and neutrality of tone.
- Explain why the losing sources lost, passage by passage.
- Rewrite our page's opening and the passages that lost, using only Universe evidence. Rerun the simulation and show whether we win.

OUTPUT
The simulated answer with citations, the source scorecard, the rewritten page with changes marked, and the rerun result.

GROUNDING
Our rewritten page uses only what the Universe holds, cited. The simulation shows how an assistant may reason; label it, and don't claim it predicts any specific assistant's behaviour.
```

### Write the eval set for answers about us

```
Write an eval set for answers about us: the questions buyers ask AI assistants, a gold answer for each from our approved story, and a rubric to grade what any assistant says. Use Calven MCP for the questions, the gold answers and the assistant answers Calven has on record.

FILL IN
- Assistants to test: [e.g. ChatGPT, Claude, Gemini, Perplexity]
- Size: [how many questions, e.g. 30]

CONTEXT
I can't fix what AI assistants say about us if I can't measure it. A fixed eval set run monthly tells me which answers are wrong, whether my answer pages are working, and where to write next.

FROM CALVEN
- Questions buyers asked on calls, from customer quotes, across personas and stages.
- Our positioning, messaging and product brief, for the gold answers.
- The competitor battlecards, for comparison questions.
- What AI assistants currently answer about us, from the positioning dashboard.

BUILD
- Pick questions across five types: what is it, who is it for, how does it compare, what does it cost, what doesn't it do. Weight by how often buyers ask.
- For each: the question as a buyer types it, the gold answer in two to four sentences with sources, the must-include facts, and the must-not-say errors (a competitor's framing, a capability we don't have, an outdated price).
- Write the rubric: 0 to 3 per question on accuracy, completeness and framing, with examples of each score.
- Grade the recorded assistant answers against the set as a baseline.
- If you can build files, deliver the set as a CSV and the grading as a reusable prompt.

OUTPUT
The eval set table, the rubric, the baseline scores and the five worst answers with the page that would fix each.

GROUNDING
Gold answers cite the Universe only. Don't write a must-include fact the documents don't contain, and label the baseline as the recorded answers, not a fresh test.
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
- Which buyer question gets the most wrong answer from AI assistants, according to the positioning dashboard?
- What's the question [persona] asks that our competitors' messaging answers better than ours?
- Which of our approved claims is short and factual enough for an assistant to quote verbatim?
- What do buyers call our category, in their own words, versus what our positioning calls it?
- Which question about pricing do buyers ask most, and what does the product brief let us say?
- Which competitor do AI assistants mention when answering questions about us?
