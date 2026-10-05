# Battle card updates


A battlecard just changed and half your reps are still pitching the old one. You want a change brief reps actually read, a check that the card matches what buyers said in recent deals against that competitor, and a list of sections for the PMM. The card itself is written and approved in Calven; here you read it, check it and get it into reps' hands.

## Prompts

### Brief reps on what changed in a card

```
Using Calven MCP, brief the reps on what changed in the competitor's battlecard.

FILL IN
- Competitor: [competitor]

CONTEXT
The card was updated. Reps need to know what changed and what to do differently, in under 150 words.

PULL FROM THE UNIVERSE
- The competitor's battlecard: How We Win, Where We Lose, Landmines, Objection Handling, Talk Track, Proof Points.
- Competitive signals for the competitor in the last 30 days, with severity and the so-what.

WRITE
- What changed and why (the signal behind it).
- What reps should say or stop saying, with the card section.
- The one landmine to set this week.

OUTPUT
The brief, ready to post.

GROUNDING
Use only the card and the signals, cited. Do not add competitor claims that are not in the Universe.
```

### Check a card against recent deals

```
Using Calven MCP, check the competitor's battlecard against what happened in recent deals.

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know whether the card's How We Win, Where We Lose and Objection Handling sections match what buyers said in deals against the competitor in the window.

PULL FROM THE UNIVERSE
- The competitor's battlecard.
- Deal drivers on deals where the competitor was in play in the window, with direction, rank, category and evidence quote.
- Customer quotes mentioning the competitor in the window.
- Our win rate against the competitor and the loss reasons from the competitive dashboard.

CHECK
- Each "we win when" and "we lose when" line: supported by a deal driver, contradicted, or no evidence.
- Objections buyers raised about us versus the competitor that the card does not answer.
- Loss reasons in the dashboard the card does not address.

OUTPUT
The card annotated, then the three findings to send to PMM.

GROUNDING
Cite the deal driver or quote behind every verdict and the dashboard number with n and window. Do not treat absence of evidence as contradiction.
```

### Find thin sections and stale claims

```
Using Calven MCP, find where the competitor's battlecard is thin and where our side is stale.

FILL IN
- Competitor: [competitor]

CONTEXT
Before I push the card to reps I want to know which sections have no evidence and which of our claims may have changed.

PULL FROM THE UNIVERSE
- The competitor's battlecard and the outline of its deep dive.
- Proof points and displacement wins: customer quotes with highlight Competitive win mentioning the competitor.
- Our product brief's differentiators and known weaknesses, product changes in the last 90 days, and claims flagged in the register.

CHECK
- Sections with no proof, no quote or marked unknown.
- Our differentiators in the card that a product change or a flagged claim puts in doubt.

OUTPUT
Two lists: thin sections, and our claims to recheck.

GROUNDING
Cite the source for every item. Do not fill a thin section from your own knowledge of the competitor.
```

### Rank which cards need an update first

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
