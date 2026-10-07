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

## Advanced prompts

### Score refresh priority with a decay model

```
Rank the library for refresh by traffic at risk: how fast each page is decaying, times how wrong it has become. Use Calven MCP for what changed in the product and the market and which pages it left stale.

FILL IN
- Traffic: [attach a CSV: URL, month, sessions, conversions for the last 12 to 18 months]
- Page list: [attach or paste URLs with title and topic, if not in the traffic file]

CONTEXT
I can refresh ten pages a month and I have three hundred. Refreshing by age or by gut picks the wrong ten.

FROM CALVEN
- Product changes in the period, with severity and date.
- Drift findings: published documents each change left stale, with classification and confidence.
- Claims records with concerns or unsupported status, and where each appears.
- Competitive signals for competitors our comparison pages cover.

MODEL
- If you can run code, fit a decay curve per page (exponential or linear on log sessions) and estimate traffic over the next six months if nothing changes.
- Score staleness per page: drift findings against it, unsupported claims on it, product changes in its topic, competitor signals since its last update. Weight by severity.
- Priority = projected traffic × conversion rate × staleness. Show the top 30.
- Separate the two failure types: pages decaying because they're stale (refresh) and pages decaying because the topic died (merge or retire).

OUTPUT
The ranked list with traffic trend, staleness reasons and priority, next month's ten pages with the fix each needs, and the merge or retire list.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A page counts as stale only with a drift finding, claim or dated change behind it; don't guess staleness from age.
```

### Prove refreshes pay off with a control group

```
Find out whether our refreshes actually work, with a difference-in-differences test: refreshed pages against similar pages we left alone. Use Calven MCP for which pages had drift and claims problems, so the comparison is fair.

FILL IN
- Traffic: [attach a CSV: URL, month, sessions, conversions]
- Refresh log: [attach or paste URL and refresh date for every page refreshed in the last year]

CONTEXT
Leadership asks whether the refresh program is worth a writer's time. I can show refreshed pages went up, but so did the whole site. I need a real comparison.

FROM CALVEN
- Drift findings and their dates, by published document.
- Claims flagged with concerns, by where they appear.
- Product changes with dates, to mark when each page went stale.

METHOD
- Build a control group: pages not refreshed that had a similar staleness signal and traffic level before the refresh date. Show how you matched them.
- If you can run code, compute the difference in differences: change in sessions and conversions for refreshed pages minus change for controls, three and six months after.
- Split by refresh type if the log says so (facts updated, rewritten, merged).
- Report the effect with a confidence interval and the number of pages behind it. Name the threats: seasonality, pages picked because they were already recovering.
- Translate into the business case: sessions and conversions gained per refresh.

OUTPUT
A one-page memo: method in three lines, effect with uncertainty, effect by refresh type, the business case, and whether to scale, change or stop the program.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Traffic numbers are mine from the file; Calven only marks staleness. Don't claim a cause the design can't support.
```

### Build a keep, merge or kill decision tree

```
Build a decision tree every page in the library runs through: keep, refresh, merge, redirect or kill. Then run the library through it. Use Calven MCP for the staleness, claim and messaging evidence each branch tests.

FILL IN
- Library: [attach a CSV: URL, title, topic, persona, stage, sessions last 6 months, backlinks]
- Thresholds: [traffic and backlink levels you consider meaningful, or write "suggest them"]

CONTEXT
Audits stall because every page is a judgement call and every call is a debate. A tree makes the calls consistent and lets a junior writer run the audit.

FROM CALVEN
- Drift findings by published document and claims flagged with concerns.
- The current messaging: pillars, persona value propositions, the matrix by stage.
- The positioning's category frame, to catch pages using a dropped frame.
- Themes from customer calls with mention counts, to test whether a topic still matters to buyers.

BUILD
- Draw the tree: does the page carry wrong facts, does buyers' interest in its topic persist, does it serve a persona and stage the matrix covers, does another page cover the same intent, does it carry traffic or links. Each branch ends in a decision.
- Write each test so it can be answered from the evidence or the CSV, with the Calven input named.
- Run every page through it and record the path.
- Flag pages where the tree's answer would surprise you, and explain why the tree is right or which threshold should change.
- If you can run code, output the tree as a reusable script plus the results CSV.

OUTPUT
The tree as a diagram or nested list, the results table per page with its path, counts per outcome, and the edge cases.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Every "wrong facts" verdict cites a drift finding or claim; don't route a page to kill on a hunch.
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
- Which product change caused the most drift findings across our published documents?
- Which page makes a claim that a newer customer quote contradicts?
- Which competitor named on our pages has changed their positioning since we last mentioned them?
- Which messaging pillar has no published page behind it at all?
- What's the oldest proof point still in use that has a fresher replacement on record?
- Which drift findings have been open longest, and on which documents?
