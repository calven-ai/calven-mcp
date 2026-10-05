# Blog posts and guides

**Team:** Content marketing · also product marketing, brand and communications, founders who write
**Impact:** High. Long-form is most of the content budget. A post with a real point of view, grounded in a tracked market shift and the buyer's own words, earns links, citations and replies; one written from the category's common knowledge earns nothing.
**Prerequisites:** strategy documents approved (positioning, messaging), personas approved. Better with market research run (trends, opportunities, analyst findings) and call transcripts ingested (quotes, themes).

## What the team is trying to do

Publish pieces a buyer in the target persona reads to the end and remembers who wrote it: a point of view that follows from how the company sees the market, examples in the buyer's words, product mentioned only where it belongs. Done means the piece is on-positioning, the claims are right, the persona would share it, and it is structured so AI assistants can cite it. The hard part is the first hour: finding the angle, the evidence and the reader's actual questions before writing.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Topic and keyword | Research demand, intent, ranking pages | Calven does not help here. The SEO tool owns it | |
| 2 | Find the angle | The point of view and why now | Trends, opportunities and analyst findings behind the topic; our positioning's category frame and "why now" | Trends, market opportunities, analyst findings, positioning |
| 3 | Know the reader | What they ask, fear and distrust | The persona canvas, their objections, the questions buyers asked on calls | Persona, quotes, themes |
| 4 | Gather evidence | Quotes, examples, numbers | Verbatim quotes and themes, proof points, dashboard numbers the company can publish | Quotes, themes, positioning, Insights |
| 5 | Outline | Headings as the reader's questions, the answer first | Outline from the reader's questions and the messaging hook | Persona canvas, messaging |
| 6 | Draft | Write it | Draft on-positioning in the reader's words, product only where the brief allows | Positioning, messaging, product brief, quotes |
| 7 | Review | Positioning drift, claims, persona reaction | Drift check against positioning, claim check against the product brief, persona review | Positioning, product brief, `review_against_personas` |
| 8 | Structure for citation | Direct answers under question headings, a summary, FAQ | Calven does not help with search structure; it supplies the questions and the one-line answers | Persona canvas, messaging |
| 9 | Publish and distribute | CMS, social, newsletter | Calven does not help here | |

## Recommended prompts

### Step 2: the angle

```
Using Calven MCP, find the angle for a piece on [topic] for [persona].

CONTEXT
I am writing a [blog post / guide / point-of-view piece] on [topic]. I want it anchored in a market shift we track and in our positioning, not in opinion alone.

PULL FROM THE UNIVERSE
- The trends and market opportunities relevant to [topic], with their "so what" and horizon.
- Analyst findings on the subject, if any.
- Our positioning: category frame, unique attributes, "why now" trends.

BUILD
- Three candidate points of view, each tied to a tracked trend and to our positioning.
- For the strongest: the tension it creates for the reader, our take, the so-what.
- The narrative arc in five beats.

OUTPUT
The three candidates in a table, then the arc for the one you recommend.

GROUNDING
Ground every point of view in trends and positioning in the Universe and cite them with dates. Do not present a trend we do not track as fact. Flag speculation as speculation.

[name the topic, the persona and the format]
```

### Step 3 and 4: reader questions and evidence

```
Using Calven MCP, gather what [persona] asks and says about [topic].

CONTEXT
I am outlining a piece on [topic]. I want the reader's real questions and words before I write a heading.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains, jobs to be done, objections, messaging hooks.
- Customer quotes on [topic], grouped by theme, with speaker role and sentiment.
- The themes with the most mentions that touch [topic].

BUILD
- The eight questions this reader asks about [topic], in their words.
- The language bank: phrases for the problem, the outcome and the alternatives.
- Five quotes the piece can use verbatim, attributed.
- The objection the piece must answer before the reader will believe the point of view.

OUTPUT
The questions, the language bank and the quotes, each with its source.

GROUNDING
Use only the canvas and recorded quotes in the Universe and cite them. Do not invent questions the evidence does not support; if the record is thin, say so.

[name the persona and the topic]
```

### Step 5 and 6: outline and draft

```
Using Calven MCP, draft a [format] on [topic] for [persona].

CONTEXT
Below are the angle, the reader's questions, the language bank and the quotes from the previous steps, plus the SEO inputs (keyword, length, internal links). Byline: [author]. The product appears once, where the reader would ask about it, and not before.

PULL FROM THE UNIVERSE
- Our positioning and the messaging hook for [persona].
- The product brief section for the one capability the piece may mention.

WRITE
- Headings as the reader's questions, the direct answer in the first two sentences under each.
- Examples and quotes verbatim, attributed.
- One section that states our point of view plainly.
- A closing that tells the reader what to do next.

OUTPUT
The draft in markdown with a one-paragraph summary at the top and a short FAQ at the end, plus a source list.

GROUNDING
Ground every claim in the Universe and the pasted inputs and cite it. Mention only capabilities in the product brief. Do not invent statistics; where the piece needs a number we do not have, leave a marked placeholder.

[paste the angle, questions, language bank, quotes and SEO inputs]
```

### Step 7: review

```
Using Calven MCP, review this draft before it is published.

CONTEXT
Below is the draft of a piece on [topic] for [persona].

PULL FROM THE UNIVERSE
- Our positioning, to check for drift and for a competitor's frame creeping in.
- The product brief and claims register, for any product claim.
- The [persona] canvas, and run the persona review on the draft.

CHECK
- Lines that drift from our positioning or adopt a frame a competitor uses.
- Every product, pricing or market claim: supported, overstated or unverified.
- The persona's reaction: what lands, what reads as vendor marketing, the line they would not believe, whether they would share it.

OUTPUT
The draft annotated inline, then the five edits that matter most.

GROUNDING
Judge only against the Universe and cite what each flag conflicts with. If the draft is clean, say so rather than inventing problems.

[paste the draft]
```

### Refresh an existing post

```
Using Calven MCP, tell me how to refresh this post.

CONTEXT
Below is a post published on [date]. It still ranks but the product and the market have moved.

PULL FROM THE UNIVERSE
- Product changes since [date] and any drift findings on this post.
- Trends that have changed status since [date].
- Our current positioning and messaging.
- Newer customer quotes on the topic.

CHECK
- Claims that are now wrong or stale, with the correction.
- Sections where the point of view no longer matches our positioning.
- Quotes and examples to add.

OUTPUT
A refresh list: section, what changed, the rewrite, the source.

GROUNDING
Use only changes, trends and quotes recorded in the Universe and cite them with dates. If nothing has changed, say so.

[paste the post and its publish date]
```

## Ad hoc questions

- Which trends do we track that relate to [topic], and what is the "so what" for each?
- What is our stated point of view on [category question]?
- What questions did [persona] ask about [topic] on calls?
- Give me three verbatim quotes about [pain] from [persona].
- Which theme from customer calls is rising fastest this quarter?
- What does our positioning say is the alternative buyers compare us with?
- Is there an analyst finding on [subject]?
- Does this line adopt a competitor's framing: "[line]"?
- What does the product brief say about [capability], in one sentence I can quote?
- Which messaging pillar has the weakest customer-language fit? I want to write toward it.
- Would [persona] share a piece arguing [point of view]?
- What is our one-liner and boilerplate for the author bio?

## Good practice

- Get the angle from a tracked trend, not from the keyword. The keyword tells you demand; the trend tells you what to say.
- Write headings as the reader's questions and put the answer first. The persona canvas and the call quotes give you the questions.
- Use quotes verbatim and attributed. A paraphrased customer stops being evidence.
- Mention the product once, where the reader would ask. The product brief tells you what you may say.
- Run the review prompt before every publish and the refresh prompt on every post older than a year.
- Keep competitor mentions in plain text and inside the battlecard.

## Not covered today

- Keyword research, search intent, SERP analysis and the content's performance.
- Web research for third-party statistics. The AI tool may search the web if it has that tool; Calven does not.
- Publishing, distribution and promotion.
- Adding a new trend or quote to Calven from the AI tool. The market research and voice-of-customer agents do that in the app.
