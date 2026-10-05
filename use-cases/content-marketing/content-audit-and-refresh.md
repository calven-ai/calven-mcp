# Content audit and refresh


You're going through every published piece to decide keep, update, merge or delete, and refreshing the keepers so they tell the current story with current facts. You walk away with no live page contradicting the product brief or the positioning, proof behind every claim, and a refresh batch prioritised by what sales and buyers actually use. Calven takes on the accuracy pass: performance data says what ranks, and Calven shows what's wrong.

## Prompts

### Find pages a product change made stale

```
Using Calven MCP, find every published page that a product change has made stale.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
We are auditing our content. I want the accuracy problems first, ranked by severity.

PULL FROM THE UNIVERSE
- Product changes in the window, with severity and what changed.
- The drift findings: each published document a change left stale, with the classification, the rationale and the evidence.
- The claims register: claims with a concern or no proof.

BUILD
- A table of affected pages: page, the change that affects it, what is now wrong, severity, the suggested correction.
- A second table of claims with no proof or a flagged concern, with where they appear.

OUTPUT
The two tables, sorted by severity, with sources.

GROUNDING
Use only product changes, drift findings and claims recorded in the Universe and cite them. Do not guess which other pages might be affected; list what the findings cover and say what they do not.
```

### Check pages against current messaging

```
Using Calven MCP, check these pages against our current positioning and messaging.

FILL IN
- Pages: [paste the page titles and first paragraphs]

CONTEXT
I want to know which ones tell an old story.

PULL FROM THE UNIVERSE
- Our positioning: positioning statement, category, unique attributes.
- Our messaging: core narrative, value pillars, the words we have standardised on.
- Positioning and messaging drift findings, if any cover these pages.

CHECK
- For each page: on-message, partly off, or off, with the line that conflicts and what it conflicts with.
- Pages that use a category label or claim we have dropped.
- Pages that describe the product in a frame a competitor uses.

OUTPUT
A table: page, verdict, the conflicting line, the on-message rewrite, the source.

GROUNDING
Judge only against the documents in the Universe and cite the section. If a page is on-message, say so.
```

### List comparison pages needing an update

```
Using Calven MCP, list the comparison pages that need an update.

FILL IN
- Pages: [paste the page list with competitors and dates]

CONTEXT
The pages are our comparison and alternatives pages with the competitor each covers and its last update date.

PULL FROM THE UNIVERSE
- Competitive signals for each competitor since its page's date.
- The current battlecard for each.

CHECK
- For each page: the signals since its date, and whether any changes a claim on the page.
- Pages whose competitor the battlecard now treats differently (tier, how we win, where we lose).

OUTPUT
A table: page, competitor, signals since the date, update needed yes or no, what to change.

GROUNDING
Use only signals and battlecards in the Universe and cite them with dates. If a competitor has no new signal, say so.
```

### Prioritise the refresh batch

```
Using Calven MCP, prioritise this refresh list.

FILL IN
- Pages: [paste the flagged pages with problem, traffic and conversions]

CONTEXT
The pages are the ones flagged in the audit with the problem found and the page's traffic and conversions. I want the order to fix them in.

PULL FROM THE UNIVERSE
- The severity of each drift finding or claim concern.
- The messaging matrix: which persona and funnel stage each page serves.
- Which personas and stages have the least content, so a page serving them weighs more.

RANK
- Score each page on severity of the error, the stage it serves, and the traffic I pasted.
- Group into: fix this week, fix this quarter, merge or delete.

OUTPUT
The ranked list with the reason per page.

GROUNDING
Use the severities and the matrix from the Universe and cite them; use the traffic as I gave it. Do not rank on anything else.
```

### Refresh one page

```
Using Calven MCP, refresh this page.

FILL IN
- Page: [paste the page]
- Publish date: [publish date]
- Audit note: [paste the audit note]
- Persona: [persona]
- Stage: [buying stage]

CONTEXT
The page is as published on the publish date; the audit note says what is wrong. Keep the structure and the URL; change only what is stale, off-message or unproven.

PULL FROM THE UNIVERSE
- The product changes and drift findings that cover this page.
- The current product brief sections it touches.
- Our current messaging for the persona at the stage.
- Newer customer quotes on the topic.

REWRITE
- Correct every stale claim with the current fact and its source.
- Replace off-message lines with the current message.
- Add one newer quote where it strengthens the point.
- Keep everything else.

OUTPUT
The refreshed page, then a change log: line, old, new, source.

GROUNDING
Use only facts, messaging and quotes in the Universe and cite them. Do not add claims the brief does not support.
```

## Ad hoc questions

- What changed in our product in the last 90 days?
- Which published documents did the last release leave stale?
- Which claims on our site have no proof behind them?
- Is "[claim]" still true according to the product brief?
- Which pages use the category label we dropped?
- Has [competitor] done anything since [date] that affects our comparison page?
- Which of our pages describe the product in [competitor]'s frame?
- What is the current one-liner and boilerplate, so I can replace the old ones everywhere?
- Which messaging pillar has drift flagged against it?
- What does the drift finding on [page] say exactly?
- Which pricing statements are live on our site, and do they match the product brief?
- Is there a newer customer quote on [topic] than the one on this page?
