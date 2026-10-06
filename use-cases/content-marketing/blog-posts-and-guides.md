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

## Advanced prompts

### Find the contrarian take your evidence supports

```
Find a point of view worth publishing: list what the category believes about the topic, test each belief against our own buyer evidence, and build the post on the one the evidence breaks. Use Calven MCP for what buyers actually said and decided.

FILL IN
- Topic: [topic]
- Persona: [persona]
- What ranks: [paste the headings or summaries of the top pieces on the topic, or write "use your knowledge"]

CONTEXT
Most posts on this topic repeat each other. The only piece worth writing says something the others can't, and the only safe way to say it is with evidence nobody else has.

FROM CALVEN
- Customer quotes from the persona on the topic, with category and sentiment.
- Deal drivers that touch the topic, helped and hurt, with how often each decided a deal.
- Trends and analyst findings on the topic, and what our positioning says we believe.

METHOD
- From what ranks (or your knowledge, labelled), list the eight beliefs the category treats as settled.
- Test each belief against our evidence: supported, mixed, or contradicted. Quote the evidence either way.
- For each contradicted or mixed belief, write the contrarian claim in one sentence and rate it on strength of evidence, surprise to the reader and fit with our positioning.
- Steelman the consensus for the top candidate: the best argument that we're wrong. If it's strong, say so and drop to the next.
- Outline the post for the winner: the claim, the consensus, the evidence, the steelman, what the reader should do differently.

OUTPUT
The belief table with verdicts and evidence, the ranked contrarian claims, and the outline with quotes placed.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The consensus beliefs are your summary; label them. Don't claim our evidence contradicts something unless a quote or driver does.
```

### Publish an original stat from your own data

```
Build one original statistic from our own evidence that's worth a headline, with the methodology box that makes it citable. Use Calven MCP for the dashboard figures and the buyer quotes behind them.

FILL IN
- Topic: [topic]
- Persona: [persona the stat should matter to]
- Disclosure rules: [what we may publish: anonymised aggregates only, no deal values, and so on]

CONTEXT
Original data is what other writers and AI assistants cite. We sit on hundreds of buyer conversations and win/loss interviews. A single defensible number from them is worth more than ten opinion posts.

FROM CALVEN
- The voice-of-customer dashboard on the topic: top pains, themes, movers, with n and window.
- The win/loss dashboard: top loss reasons, deciding drivers and the share of deals each decided, with n.
- Customer quotes that illustrate the top finding, for colour.

METHOD
- List five candidate statistics the dashboards support, like "x of y buyers who chose a competitor named z as the deciding reason".
- Score each on newsworthiness to the persona, sample size, whether it can be published within the disclosure rules, and whether it supports our point of view.
- For the winner, write the methodology box: source, sample, window, how the figure was computed by Calven's dashboard, and the limits.
- Run a robustness check: does the finding hold in the prior period? If the dashboard shows the change, report it; if the sample is under 30, say the stat is too thin to publish.
- Draft the headline, the 50-word summary an AI assistant could lift, and three pull quotes.

OUTPUT
The candidate table, the chosen stat with methodology box, the headline and summary, and the pull quotes.

GROUNDING
Every figure comes from a dashboard, cited with n and window, never added up from rows. Quotes are verbatim and anonymised to the disclosure rules.
```

### Map the draft against every buyer question

```
Check whether the draft answers the questions real buyers ask, with a coverage matrix: questions down the side, sections across the top. Use Calven MCP for the buyers' questions in their own words.

FILL IN
- Draft: [paste the draft]
- Topic: [topic]
- Persona: [persona]

CONTEXT
A guide ranks and gets cited when it answers the questions people actually ask, early and directly. Writers answer the questions they find interesting.

FROM CALVEN
- Questions, objections and pains the persona raised on the topic, verbatim, from customer quotes, with how often each theme appears (n).
- The persona canvas: jobs to be done and goals.
- The messaging matrix entry for the persona at the piece's stage.

METHOD
- Turn the quotes into a deduplicated list of buyer questions, each with its frequency and one verbatim example.
- Build the matrix: for each question and each section, mark answered directly, touched, or missing.
- Weight by frequency and find the coverage score: share of buyer demand the draft answers directly.
- Find the most-asked questions that are missing or buried below the third section.
- For each, write the direct answer block (two to three sentences, quotable) and say where it goes.

OUTPUT
The coverage matrix, the score before and after, and the answer blocks placed in the draft with the changes marked.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Questions come from quotes, cited; don't add questions buyers didn't ask, and answers use only the Universe.
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
- What's a belief common in our category that our win/loss data contradicts?
- Which buyer quote on [topic] would make a good headline on its own?
- Which trend do we track that no competitor's messaging addresses, according to their dossiers?
- What did buyers say was the hardest part of [job to be done], in their words?
- Which theme do buyers raise that our blog has never covered?
- Which analyst finding disagrees with our positioning, and how should a post handle it?
