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

## Advanced prompts

### War-game the rival's next three moves

```
War-game a competitor over the next two quarters: their move, our counter, their reply, three rounds. Use Calven MCP for their recent moves, their battlecard and where we win and lose against them.

FILL IN
- Competitor: [competitor]
- Horizon: [e.g. next two quarters]

CONTEXT
The battlecard tells reps how to handle the competitor as they were last month. I want the card ready for what they do next, before the field asks.

FROM CALVEN
- The competitor's signals over the last 6 months: launches, pricing, messaging shifts, hires, funding.
- Their battlecard and deep dive: strengths, weaknesses, positioning, pricing.
- Our win rate against them from the competitive intelligence dashboard, with n, and the deciding drivers in deals against them.

WAR-GAME
- From their signals, infer what they're optimising for and list their three most plausible next moves, each with the signal that points to it.
- Round 1: they make the most likely move. Play their strategist. Then play ours: our best counter, using only what the product brief says we do.
- Rounds 2 and 3: they respond to our counter; we respond again.
- After each round, estimate the effect on our win rate against them as a range, and say what in the evidence drives it.
- Repeat briefly for their second most likely opening move.

OUTPUT
The war-game log, a table of their likely moves with probability, early warning signal and our counter, and the battlecard sections pre-written for the top move, ready to swap in when the signal appears.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Predicted moves are your inference and must say so; never present a predicted move as a recorded signal.
```

### Backtest the card's win and loss claims

```
Backtest every "we win when" and "we lose when" line on a battlecard against the deals we actually closed against that competitor. Use Calven MCP for the card and every closed deal against them.

FILL IN
- Competitor: [competitor]
- Window: [window, e.g. last 12 months]

CONTEXT
The card's win and loss conditions were written from interviews and instinct. If a "we win when" line doesn't predict wins, reps are steering deals by a broken compass.

FROM CALVEN
- The battlecard's How We Win and Where We Lose sections.
- Closed CRM deals with the competitor listed in the window: status, segment, size, ICP tier, loss reason, product feedback. Page through all of them.
- Deal drivers and surveyed-deal summaries for those deals.
- Our win rate against them from the competitive intelligence dashboard, with n, as the baseline.

BACKTEST
- Turn each line into a condition a deal either meets or doesn't, using the deal fields and drivers. Show how you coded each line.
- For each line, build a 2x2: condition met or not, won or lost. Report the win rate when met versus the baseline, and how many deals it covers.
- Grade each line: predictive, weak, backwards (the condition goes with the opposite outcome), or untestable with our data.
- Look for the condition the card misses: any deal attribute that splits wins and losses better than the card's lines.

OUTPUT
A table per line: condition, deals met, win rate when met, lift over baseline, grade. Then the lines to keep, rewrite or cut, and the missing line written in card style.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Flag any line tested on fewer than eight deals as unproven, not wrong.
```

### Red-team the card as their best rep

```
Hand our battlecard to the competitor's best account executive and have them take it apart, line by line, the way they would in a live deal. Use Calven MCP for our card, their dossier and our product's known weaknesses.

FILL IN
- Competitor: [competitor]
- Persona: [the buyer both reps are selling to]

CONTEXT
Our card is written by us, for us. A good rival rep has heard every line on it before and has a reply ready. I want those replies before my reps hear them in a deal.

FROM CALVEN
- Our battlecard for the competitor: landmines, objection handling, talk track, proof points.
- Their deep dive: their positioning, strengths, talk track and pricing.
- Our product brief's known weaknesses and integrations.
- The persona canvas for the buyer.

RED-TEAM
- Play the competitor's top rep. For each landmine, objection response and proof point on our card, write how they defuse it in front of the buyer, in their voice, using their real strengths and our real weaknesses.
- Rate each counter: our line survives, wobbles, or breaks.
- For each line that breaks, write our rep's best comeback, then the competitor's reply to that. Stop after one exchange.
- Find the landmine they'd set for us that the card doesn't prepare reps for.

OUTPUT
A table: our line, their counter, rating, our comeback. Then the three card changes that matter most, and the landmine we're not ready for with a prepared answer.

GROUNDING
Their counters use only strengths and claims on record in their dossier, cited; mark anything else as your extrapolation. Our comebacks use only what the product brief says we do.
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
- Which landmine on the [competitor] card has never shown up in a deal driver?
- Which competitor's battlecard is oldest relative to their latest signal?
- What do buyers who chose [competitor] say about us that the card doesn't address?
- Which proof point on the [competitor] card comes from a customer in the same segment as my open deal?
- Where does the [competitor] dossier's bullshit detector disagree with what buyers said on calls?
- Which competitor are we losing to more often this half than last, according to the dashboard?
