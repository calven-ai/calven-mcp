# Blog posts and guides


You want a piece the target persona reads to the end and remembers who wrote: a point of view that follows from how the company sees the market, examples in the buyer's words, the product only where it belongs. You walk away with a piece that's on-positioning, accurate, worth sharing for the persona, and structured so AI assistants can cite it. Calven covers the hard first hour: the angle, the evidence and the reader's actual questions before you write.

## Prompts

### Find the angle for the piece

```
Using Calven MCP, find the angle for a piece on the topic below for the persona below.

FILL IN
- Topic: [topic]
- Persona: [persona]
- Format: [blog post / guide / point-of-view piece]

CONTEXT
I am writing a piece in the format above on the topic. I want it anchored in a market shift we track and in our positioning, not in opinion alone.

PULL FROM THE UNIVERSE
- The trends and market opportunities relevant to the topic, with their "so what" and horizon.
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
```

### Gather reader questions and evidence

```
Using Calven MCP, gather what the persona below asks and says about the topic below.

FILL IN
- Persona: [persona]
- Topic: [topic]

CONTEXT
I am outlining a piece on the topic. I want the reader's real questions and words before I write a heading.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, jobs to be done, objections, messaging hooks.
- Customer quotes on the topic, grouped by theme, with speaker role and sentiment.
- The themes with the most mentions that touch the topic.

BUILD
- The eight questions this reader asks about the topic, in their words.
- The language bank: phrases for the problem, the outcome and the alternatives.
- Five quotes the piece can use verbatim, attributed.
- The objection the piece must answer before the reader will believe the point of view.

OUTPUT
The questions, the language bank and the quotes, each with its source.

GROUNDING
Use only the canvas and recorded quotes in the Universe and cite them. Do not invent questions the evidence does not support; if the record is thin, say so.
```

### Draft the post or guide

```
Using Calven MCP, draft the piece described below.

FILL IN
- Format: [format]
- Topic: [topic]
- Persona: [persona]
- Author: [author]
- Inputs: [paste the angle, questions, language bank, quotes and SEO inputs]

CONTEXT
The inputs are the angle, the reader's questions, the language bank and the quotes from the previous steps, plus the SEO inputs (keyword, length, internal links). The byline is the author. The product appears once, where the reader would ask about it, and not before.

PULL FROM THE UNIVERSE
- Our positioning and the messaging hook for the persona.
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
```

### Review the draft before publishing

```
Using Calven MCP, review this draft before it is published.

FILL IN
- Topic: [topic]
- Persona: [persona]
- Draft: [paste the draft]

CONTEXT
The draft is a piece on the topic for the persona.

PULL FROM THE UNIVERSE
- Our positioning, to check for drift and for a competitor's frame creeping in.
- The product brief and claims register, for any product claim.
- The persona's canvas, and run the persona review on the draft.

CHECK
- Lines that drift from our positioning or adopt a frame a competitor uses.
- Every product, pricing or market claim: supported, overstated or unverified.
- The persona's reaction: what lands, what reads as vendor marketing, the line they would not believe, whether they would share it.

OUTPUT
The draft annotated inline, then the five edits that matter most.

GROUNDING
Judge only against the Universe and cite what each flag conflicts with. If the draft is clean, say so rather than inventing problems.
```

### Plan the refresh of an old post

```
Using Calven MCP, tell me how to refresh this post.

FILL IN
- Publish date: [publish date]
- Post: [paste the post]

CONTEXT
The post was published on the publish date. It still ranks but the product and the market have moved.

PULL FROM THE UNIVERSE
- Product changes since the publish date and any drift findings on this post.
- Trends that have changed status since the publish date.
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
