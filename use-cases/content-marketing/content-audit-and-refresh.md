# Content audit and refresh

**Team:** Content marketing · also product marketing, web team, SEO
**Impact:** High. Every release and every messaging change leaves pages that say the wrong thing. A quarterly audit against the product brief, the positioning and the drift findings catches them; without it, buyers and AI assistants read last year's story.
**Prerequisites:** strategy documents approved (positioning, messaging, product brief). Better with own website and docs monitored (product changes, drift findings, claims) and competitors tracked (for comparison pages). Traffic and ranking data stay in the analytics and SEO tools.

## What the team is trying to do

Inventory every published piece, decide keep, update, merge or delete, and refresh the ones worth keeping so they tell the current story with current facts. Done means no live page contradicts the product brief or the positioning, every claim has proof, and the refresh batch is prioritised by what sales and buyers actually use. The hard part is the accuracy pass: performance data says what ranks, nothing says what is wrong.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Inventory | Export every URL, type, date, owner | Calven does not help here. The CMS and crawler own it | |
| 2 | Performance pass | Traffic, rankings, conversions per page | Calven does not help here | |
| 3 | Accuracy pass | Which pages say something wrong or stale | Product changes and the drift findings per published document; the claims register with unproven claims | Product changes, drift findings, claims |
| 4 | Messaging pass | Which pages are off-message | Positioning and messaging drift; language the messaging has moved away from | Positioning, messaging, messaging dashboard (quality and consistency) |
| 5 | Competitive pass | Comparison pages against moved competitors | Signals per competitor since the page date | Competitive signals, battlecards |
| 6 | Gap pass | Topics, personas and stages with no content | See [editorial planning](editorial-planning.md) | |
| 7 | Score and prioritise | Keep, update, merge, delete | A refresh priority from severity of the stale claim and the persona and stage the page serves | Drift findings, messaging matrix |
| 8 | Refresh | Rewrite the pages | Corrections with the source, new quotes, the current message | Product brief, quotes, messaging |
| 9 | Governance | Repeat after each release | Which published documents a release touched | Product changes, drift findings |

## Recommended prompts

### Step 3: accuracy pass

```
Using Calven MCP, find every published page that a product change has made stale.

CONTEXT
We are auditing our content. I want the accuracy problems first, ranked by severity.

PULL FROM THE UNIVERSE
- Product changes in the last [window], with severity and what changed.
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

### Step 4: messaging pass on a batch of pages

```
Using Calven MCP, check these pages against our current positioning and messaging.

CONTEXT
Below are the titles and first paragraphs of [number] pages. I want to know which ones tell an old story.

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

[paste the page titles and first paragraphs]
```

### Step 5: competitive pass

```
Using Calven MCP, list the comparison pages that need an update.

CONTEXT
Below are our comparison and alternatives pages with the competitor each covers and its last update date.

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

[paste the page list with competitors and dates]
```

### Step 7: prioritise the refresh batch

```
Using Calven MCP, prioritise this refresh list.

CONTEXT
Below is the list of pages flagged in the audit with the problem found and the page's traffic and conversions. I want the order to fix them in.

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

[paste the flagged pages with problem, traffic and conversions]
```

### Step 8: refresh one page

```
Using Calven MCP, refresh this page.

CONTEXT
Below is the page as published on [date] and the audit note on what is wrong. Keep the structure and the URL; change only what is stale, off-message or unproven.

PULL FROM THE UNIVERSE
- The product changes and drift findings that cover this page.
- The current product brief sections it touches.
- Our current messaging for [persona] at the [stage] stage.
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

[paste the page, the date and the audit note]
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

## Good practice

- Run the accuracy pass after every release, not once a quarter. Drift findings are per change, so the batch is small each time.
- Paste first paragraphs for the messaging pass, not whole pages. The old story shows in the opening.
- Ask for the source on every correction and keep the change log with the page. The next audit starts from it.
- Fix claims with no proof before fixing style. Buyers and legal notice the claim.
- Keep traffic and rankings in the SEO tool and paste them in for prioritisation. Calven ranks the error, not the page.
- When the audit exposes a stale product brief, fix the brief in Calven first. Every page refresh then pulls the right fact.

## Not covered today

- The inventory, crawl, traffic, rankings and conversion data.
- Redirects, merges, republishing and the CMS.
- Drift findings exist only for documents Calven monitors. Pages outside the monitored site are checked by pasting them in.
- Fixing the product brief or messaging. That happens in Calven with the product intelligence and messaging agents.
