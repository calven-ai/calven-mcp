# Battle card updates

**Team:** Sales enablement · also product marketing, sales
**Impact:** High. Reps trust a battlecard that reflects last week's loss, not last year's analysis. Calven keeps the battlecard current in the app; from the AI tool, enablement checks it against recent deals, briefs reps on what changed and finds the thin sections.
**Prerequisites:** competitors tracked (battlecards, signals, deep dives). Better with win/loss surveys running (deal drivers against the competitor) and call transcripts ingested (competitor mentions).

## What the team is trying to do

Make sure every rep facing a competitor uses the current card and knows what changed in it. Done means a change brief per updated card, a check that the card matches what buyers said in recent deals against that competitor, and a list of sections that need the PMM's attention. The card itself is written and approved in Calven; this page is about reading it, checking it and distributing it.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Know what changed | Find which cards were updated and why | Battlecard version and update date; competitive signals that prompted the change | List documents, competitive signals, competitor bundle |
| 2 | Brief the reps | Explain the change in rep terms | A change brief from the updated sections: new landmine, changed pricing, new objection line | Battlecard sections |
| 3 | Check against reality | Confirm the card matches recent deals | Deal drivers and loss reasons on deals against the competitor in the window; buyer quotes mentioning the competitor | Deal drivers, CRM deals, quotes (Competitor mention), competitive dashboard |
| 4 | Find the thin sections | Spot where the card has no evidence | Sections with no proof point, no displacement win, no recorded quote | Battlecard, deep dive outline, quotes |
| 5 | Check our side of the claims | Make sure our differentiators are still true | Product brief, product changes, claims | Product brief, product changes, claims |
| 6 | Request the update | Send the PMM what to change | A gap list with the evidence | All of the above |
| 7 | Distribute | Post the brief, link the card, retrain if needed | Calven does not help here | |

## Recommended prompts

### Step 1 and 2: the change brief

```
Using Calven MCP, brief the reps on what changed in the [competitor] battlecard.

CONTEXT
The card was updated. Reps need to know what changed and what to do differently, in under 150 words.

PULL FROM THE UNIVERSE
- The [competitor] battlecard: How We Win, Where We Lose, Landmines, Objection Handling, Talk Track, Proof Points.
- Competitive signals for [competitor] in the last 30 days, with severity and the so-what.

WRITE
- What changed and why (the signal behind it).
- What reps should say or stop saying, with the card section.
- The one landmine to set this week.

OUTPUT
The brief, ready to post.

GROUNDING
Use only the card and the signals, cited. Do not add competitor claims that are not in the Universe.

[name the competitor]
```

### Step 3: the reality check

```
Using Calven MCP, check the [competitor] battlecard against what happened in recent deals.

CONTEXT
I want to know whether the card's How We Win, Where We Lose and Objection Handling sections match what buyers said in deals against [competitor] in [window].

PULL FROM THE UNIVERSE
- The [competitor] battlecard.
- Deal drivers on deals where [competitor] was in play in [window], with direction, rank, category and evidence quote.
- Customer quotes mentioning [competitor] in [window].
- Our win rate against [competitor] and the loss reasons from the competitive dashboard.

CHECK
- Each "we win when" and "we lose when" line: supported by a deal driver, contradicted, or no evidence.
- Objections buyers raised about us versus [competitor] that the card does not answer.
- Loss reasons in the dashboard the card does not address.

OUTPUT
The card annotated, then the three findings to send to PMM.

GROUNDING
Cite the deal driver or quote behind every verdict and the dashboard number with n and window. Do not treat absence of evidence as contradiction.

[name the competitor and the window]
```

### Step 4 and 5: thin sections and our own claims

```
Using Calven MCP, find where the [competitor] battlecard is thin and where our side is stale.

CONTEXT
Before I push the card to reps I want to know which sections have no evidence and which of our claims may have changed.

PULL FROM THE UNIVERSE
- The [competitor] battlecard and the outline of its deep dive.
- Proof points and displacement wins: customer quotes with highlight Competitive win mentioning [competitor].
- Our product brief's differentiators and known weaknesses, product changes in the last 90 days, and claims flagged in the register.

CHECK
- Sections with no proof, no quote or marked unknown.
- Our differentiators in the card that a product change or a flagged claim puts in doubt.

OUTPUT
Two lists: thin sections, and our claims to recheck.

GROUNDING
Cite the source for every item. Do not fill a thin section from your own knowledge of [competitor].

[name the competitor]
```

### Gap mode: which cards need attention first

```
Using Calven MCP, rank our battlecards by how much they need an update.

CONTEXT
I own distribution for all cards. I want the ones to push to PMM first.

PULL FROM THE UNIVERSE
- Every published battlecard with its version and update date.
- Competitive signals per competitor in the last quarter, by severity.
- Win rate and deals per competitor from the competitive dashboard, and battlecard coverage.

BUILD
- One row per competitor: card date, signals since the card date, deals in the quarter, win rate (n), verdict (current, review, urgent).

OUTPUT
The ranked table.

GROUNDING
Dashboard numbers with n and window. A competitor with no card is listed as "no card", never skipped.
```

## Ad hoc questions

- Which battlecards were updated in the last 30 days?
- What changed in the [competitor] card?
- What is our win rate against [competitor] this year, and the top loss reason?
- Which landmine should reps set against [competitor]?
- What do we say when a buyer says "[competitor] has [feature]"?
- Did [competitor] change pricing recently?
- Which competitor has no battlecard yet?
- Show me buyer quotes about [competitor] from the last quarter.
- Which "we win when" line has no deal behind it?
- Is our differentiator "[differentiator]" still true after the last release?
- Which competitor appears in the most open deals right now?
- Give me the three discovery questions from the [competitor] dossier.

## Good practice

- Read the card from Calven, not from the copy in the shared drive. The copy is the one that is stale.
- Brief changes in rep terms: what to say, what to stop saying, where to set the trap. Reps do not read diffs.
- Run the reality check after every quarter's win/loss results. Cards drift from deals faster than from competitor news.
- Separate the competitor's side from ours. A stale differentiator on our side is a product change, not a competitor move.
- Send PMM evidence, not opinions: the deal driver, the quote, the dashboard number.
- Rank cards before the quarter's refresh. Ten cards cannot all be first.

## Not covered today

- Writing or editing the battlecard. The competitive intelligence agent drafts it and the PMM approves it in Calven.
- Fresh competitor research from the web. The agent records signals on its schedule; the AI tool reads them.
- Pushing the card into the CRM or the enablement platform, and tracking card views.
