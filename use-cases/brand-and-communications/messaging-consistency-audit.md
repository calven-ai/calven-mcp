# Messaging consistency audit


Your company's description lives in a dozen tools owned by six teams: the website, social profiles, sales and partner decks, email signatures, proposals, job ads, directory listings, the press kit. You come away with every off-message line and its fix, a boilerplate everyone uses, and an audit you repeat after each positioning change. Calven holds the one approved story you check them all against.

## Prompts

### Start the audit with a reference card

```
Using Calven MCP, start a messaging consistency audit.

FILL IN
- Repositioning date: [date]

CONTEXT
We repositioned on the date given. I want the reference story in one place and the drift Calven has already found on our own site.

PULL FROM THE UNIVERSE
- Our positioning: positioning statement, category and frame, unique attributes, value themes.
- Our messaging: core narrative and one-liner, value pillars, boilerplate, the standardised language.
- Positioning and messaging drift findings, and the claims flagged with a concern.

BUILD
- The reference card: one-liner, category, three pillars, boilerplate, the words we use and the words we have dropped. One page.
- The site drift list: page, the line, what it conflicts with, the fix, severity.

OUTPUT
The reference card and the drift table, with sources and document versions.

GROUNDING
Use only the documents and findings in the Universe and cite them. Do not add pages the findings do not cover; say what the monitoring covers.
```

### Check pasted channels against the approved story

```
Using Calven MCP, check these channels against our approved story.

FILL IN
- Texts: [paste the texts, each labelled with its channel and owner, e.g. LinkedIn About, the sales deck's first three slides, the proposal template intro, two job ads, the directory listing]

CONTEXT
Each text is labelled with its channel and owner.

PULL FROM THE UNIVERSE
- Our positioning and messaging, including the boilerplate and standardised language.
- The product brief, for any product claim in the texts.

CHECK
- For each text: the category it claims, the pillars it uses, the one-liner it uses, against the reference.
- Lines that are off-message, use dropped words, adopt a competitor's frame, or make a product claim the brief does not support.
- A consistency score per channel: on, partly off, off.

OUTPUT
A table per channel: line, problem, on-message rewrite, source. Then the owner list.

GROUNDING
Judge only against the Universe and cite the section. If a text is on-message, say so.
```

### See how reps describe the company on calls

```
Using Calven MCP, show me how our reps describe the company on calls.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know whether the field tells the approved story.

PULL FROM THE UNIVERSE
- Vendor quotes tagged Value claim and Differentiation from the window.
- The messaging dashboard's field adoption: pillar pull-through.
- Our messaging pillars and one-liner.

BUILD
- The pillars reps use most and least, with the pull-through numbers and n.
- Value claims reps make that are not in the messaging, with the quote.
- Differentiation lines reps use that the positioning does not support.
- The three lines to give enablement.

OUTPUT
A one-page read with sources.

GROUNDING
Use only vendor quotes and the dashboard in the Universe and cite them with n and the window. Do not infer rep behaviour from anything else.
```

### Compile the fix list by owner

```
Using Calven MCP, compile the audit into a fix list by owner.

FILL IN
- Tables: [paste the three tables]

CONTEXT
The tables are the drift table, the channel table and the field read from the previous steps.

PULL FROM THE UNIVERSE
- The boilerplate, one-liner and pillars, so every rewrite uses the same lines.

BUILD
- One list per owner: channel, line, fix, severity, source.
- The three most repeated problems across channels.
- The boilerplate and one-liner block every owner should paste.

OUTPUT
The fix lists and the block.

GROUNDING
Use only the pasted tables and the messaging in the Universe. Every rewrite uses the approved wording, cited.
```

### Find what the last change left inconsistent

```
Using Calven MCP, tell me what the last change left inconsistent.

FILL IN
- Change: [the messaging update or product change]
- Date: [date of the change]

CONTEXT
The change is a messaging update or a shipped product change, made on the date given. I want the pages and documents it affected.

PULL FROM THE UNIVERSE
- Drift findings created since the date, with the document, the classification and the rationale.
- The messaging and positioning documents' current versions.

CHECK
- Which published documents now conflict, and on which line.
- Which pillar or claim changed, so channel owners know what to search for in their own copy.

OUTPUT
A short list with sources, and the search terms for owners.

GROUNDING
Use only drift findings and documents in the Universe and cite them with dates.
```

## Advanced prompts

### Run a blind recall test across channels

```
Run a blind test: strip our name off every channel's description of us and see whether buyers think it's one company or several. Use Calven MCP for the personas who read them and the positioning they should all match.

FILL IN
- Channel copy: [paste the description from each channel: homepage hero, LinkedIn about, deck intro, proposal template, job ad, listing]

CONTEXT
Each owner thinks their channel is on-message. The buyer meets four of them in a week. The real test is whether the buyer comes away with one idea of what we do.

FROM CALVEN
- Our positioning: category, frame of reference, unique attributes and value themes.
- The buyer and stakeholder personas, with canvases.
- A persona review of each channel's copy.

SIMULATE
- Shuffle the descriptions and remove the company name and channel labels.
- Each persona reads them in random order, as they'd meet them in a buying week, and answers: how many companies is this, what does each do, and which would you take a meeting with?
- Score each pair of descriptions on whether the persona believed they were the same company.
- Then compare every description with the positioning: category, main difference, buyer named.

OUTPUT
A matrix of which channels read as the same company, each persona's one-sentence summary per channel, and the channels to fix first with the line to change.

GROUNDING
Persona answers are your simulation, shaped by the canvases and the review; cite them. Judge drift only against the approved positioning, cited by section.
```

### Test whether on-message calls win more

```
Test whether deals where our reps pitched on-message win more than deals where they didn't. Use Calven MCP for the reps' own words on calls and how those deals closed.

FILL IN
- Window: [window]
- Segment: [segment, or write "all"]

CONTEXT
Leadership asks why a consistency audit matters. If on-message pitching tracks with wins, the audit has a revenue case. If it doesn't, we have a different problem.

FROM CALVEN
- Vendor quotes from our reps in the window, with the deal each came from.
- The value pillars and the messaging matrix.
- Those deals' status, furthest stage, segment and amount, paged from the CRM.
- Field adoption (pillar pull-through) from the messaging dashboard, with n.

BACKTEST
- Classify each vendor quote as on-pillar, off-pillar or contradicting the messaging, with the pillar named.
- Give each closed deal a consistency score: the share of its rep quotes that are on-pillar.
- Compare win rates for the top, middle and bottom thirds of consistency. If you can run code, run a logistic regression with segment and deal size as controls and report the effect with a confidence interval.
- List the off-pillar lines that show up most in lost deals.

OUTPUT
A one-page memo: win rate by consistency band with n, the effect size and how sure it is, and the five off-pillar lines to retire.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Correlation isn't cause; say what else could explain the gap. Don't report a band with too few deals; give the floor.
```

### Build a drift scorecard you can rerun

```
Build a reusable drift scorecard as a spreadsheet, so every channel gets scored the same way every quarter. Use Calven MCP for the approved story, flagged claims and the drift findings that set the baseline.

FILL IN
- Channels and owners: [paste the list of channels with owners]
- Current copy: [paste the copy per channel, or the parts to score first]

CONTEXT
Audits fade because each one is a one-off judgement. A scorecard with fixed criteria and weights shows the trend and gives each owner a number to move.

FROM CALVEN
- Positioning and messaging: one-liner, category, pillars, boilerplate, words dropped.
- Claims with status and concern, and open drift findings against our pages.
- The messaging dashboard's message sharpness and messaging alignment KPIs, with n.

BUILD
- Eight weighted criteria: category named right, one-liner match, pillar coverage, dropped words absent, claims approved, proof present, buyer language used, no competitor frame.
- A scoring guide for each, 0 to 3, with an example of each score.
- Score every pasted channel and compute the weighted total.
- If you can run code, produce the spreadsheet with formulas: one tab for criteria and weights, one for scores by channel and quarter, one with a trend chart.

OUTPUT
The scorecard file (or the tables, if you can't run code), this quarter's scores by channel and owner, and the three lowest items to fix.

GROUNDING
Every deduction cites the positioning, messaging or claims record it breaks. Don't score buyer language without a quote to compare against.
```

## Ad hoc questions

- What is our current one-liner, category and boilerplate, with the document version?
- Which words has our messaging dropped?
- Does this About text match our positioning: [paste]
- Which pages on our site have drift flagged against them?
- Which claims on our site have a concern flagged?
- Which pillar do reps use least on calls?
- Do reps claim anything the messaging does not say? Quote them.
- Is "[line]" in a competitor's frame?
- Which value pillar does this deck slide serve, if any: [paste]
- What changed in the messaging since [date]?
- How many documents did the last product change leave stale?
- What does our positioning say the competitive alternatives are, so listings and decks agree?
- Which value pillar has the fewest proof points behind it?
- Which words do customers use for our category that none of our documents use?
- Which open drift finding has been open longest?
- Which claim with a concern flagged appears in the most places?
- Do reps describe our category the way the positioning does? Quote three.
