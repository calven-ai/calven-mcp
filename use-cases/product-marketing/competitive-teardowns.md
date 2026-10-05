# Competitive teardowns


You want to understand one competitor completely: what they sell and charge, how they position, what moved recently, and where each side wins. You walk away with a teardown document, an updated competitive position for the board, and a list of battlecard and roadmap changes. Calven brings the current dossier and the deal record, so the teardown is more than a tour of the rival's website.

## Prompts

### Pick the competitor for the next teardown

```
Using Calven MCP, tell me which competitor deserves the next teardown.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I can do one deep teardown this quarter. I want the rival that is costing us most or moving fastest.

PULL FROM THE UNIVERSE
- Competitive performance: deals, win rate and change per competitor for the window.
- Competitive signals in the window, by competitor, with severity.
- Which competitors have a battlecard and a deep dive, and how fresh each is.

BUILD
A table: competitor, tier, deals, win rate and change, loss reason we hit most, signals this period, freshness of our documents. Then your pick and why.

OUTPUT
The table and a three-line recommendation.

GROUNDING
Rates from the dashboard with n. Mark competitors below the floor. Freshness from the document dates.
```

### Build the full teardown

```
Using Calven MCP, build a teardown of the competitor below.

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last quarter]

CONTEXT
The audience is the PMM, product and sales leadership. The output feeds the battlecard, the roadmap conversation and the board's competitive slide.

PULL FROM THE UNIVERSE
- The competitor's deep dive: company, product, pricing, positioning, strengths, weaknesses, feature comparison.
- Their signals in the window, newest first.
- Our win rate against them, the loss reasons, and the deals we lost and won against them with the buyer's reason.
- Customer quotes that mention them.

BUILD
- Who they are and what they sell, in one paragraph.
- What moved in the window and what it means for us.
- Where they beat us: the evidence from deals and quotes.
- Where we beat them: the evidence from deals and quotes.
- The three implications: for the story, for the product, for the field.

OUTPUT
A teardown document with sources per section; slides if I say deck.

GROUNDING
Ground every point in the Universe and cite the source and date. Do not invent moves, features or prices. Where the dossier is thin, say so.
```

### Compare product and pricing side by side

```
Using Calven MCP, compare us to the competitor below on product and pricing.

FILL IN
- Competitor: [competitor]

CONTEXT
Product and finance want an honest side by side.

PULL FROM THE UNIVERSE
- The feature comparison and the product section of the competitor's deep dive.
- Our product brief: capabilities, integrations, pricing and packaging.
- Their pricing and packaging section, and the deals where buyers compared price, with the verdict.

COMPARE
- A capability table: ours, theirs, who is ahead, whether buyers care (from deal drivers and quotes).
- A packaging table: tiers, what is included, list price where known.
- Where buyers found us pricier, on par or cheaper, with n.

OUTPUT
Two tables and five lines on what matters.

GROUNDING
Mark a cell "Unknown" when the dossier does not say. Price verdicts from the dashboard only, with n.
```

### Check the battlecard against the teardown

```
Using Calven MCP, check the competitor's battlecard against the teardown.

FILL IN
- Competitor: [competitor]
- Teardown: [paste the teardown]

CONTEXT
I want to know what in the battlecard is now wrong, missing or stale.

PULL FROM THE UNIVERSE
- The competitor's battlecard.

CHECK
- Each "how we win", "where we lose", landmine and objection entry: still true, now wrong, or missing evidence.
- Loss reasons from the teardown the battlecard does not address.
- Signals the battlecard predates.

OUTPUT
A change list for the battlecard: keep, change (with the new wording), add, remove.

GROUNDING
Judge only against the teardown and the Universe. Cite the evidence for each change.
```

### Draft the board's competitive slide

```
Using Calven MCP, write the board's competitive slide on the competitor below.

FILL IN
- Competitor: [competitor]
- Teardown: [paste the teardown]

CONTEXT
One slide, read in 90 seconds, built from the teardown.

BUILD
- Where we stand: win rate against them and change, with n.
- What they did this quarter, two lines.
- Where we win and where we lose, two lines each.
- What we are doing about it, three lines.

OUTPUT
The slide text and a speaker note.

GROUNDING
Numbers from the dashboard only. Nothing that is not in the teardown.
```

## Ad hoc questions

- What did [competitor] do in the last 90 days?
- What is our win rate against [competitor], and how did it move?
- Why do we lose to [competitor]? Quote the buyers.
- Why do we win against [competitor]?
- What does [competitor] charge, and how do buyers compare it to ours?
- Which of our customers mentioned [competitor] on calls, and what did they say?
- Where is [competitor] ahead of us on features, and do buyers care?
- Which deals are we fighting [competitor] in right now?
- Which competitor has the most signals this quarter?
- Is the [competitor] battlecard current? When was it updated?
- What traps does the dossier suggest for [competitor]?
- Which competitors have no battlecard yet?
- Which of their claims does the dossier flag as unsupported?
- Which analyst reports mention [competitor]?
