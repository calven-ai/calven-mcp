# Partner battlecards


Your internal battlecards carry "where we lose" and pricing notes a partner must not see, so you can't forward them. You get a short, current, partner-safe card per competitor: how you win, the traps to set, the objections with answers, and the proof, findable in a minute. Calven tells you which competitors the partner will meet and flags when a card needs a refresh.

## Prompts

### Find the competitors a partner will meet

```
Using Calven MCP, tell me which competitors the partner below will meet selling into the segment and how we do against each.

FILL IN
- Partner: [partner]
- Segment: [segment]

CONTEXT
I am deciding which partner battlecards to build first.

PULL FROM THE UNIVERSE
- The competitors we track, with tier.
- The competitive performance read: win rate per competitor, fight or avoid, top loss reasons, over the last four quarters.
- Deals in the segment and which competitors appear on them.

BUILD
- A ranked table: competitor, tier, how often they appear in the segment's deals, our win rate against them (with n), the top loss reason, build a card first / later.

OUTPUT
The table with sources and the window.

GROUNDING
Win rates only from the dashboard, with n. If a competitor has too few deals for a rate, say so.
```

### Write a partner-safe battlecard

```
Using Calven MCP, write the partner-safe battlecard for the competitor below.

FILL IN
- Competitor: [competitor]

CONTEXT
For a partner rep who meets the competitor in a deal. One page. Nothing internal: no "where we lose", no pricing floors, no internal notes.

PULL FROM THE UNIVERSE
- The battlecard for the competitor: at-a-glance, how we win, landmines, objection handling, talk track, proof points.
- Deal drivers from deals we won against the competitor, with the buyer's evidence quote.
- The three most recent competitive signals for the competitor.

WRITE
- Who they are in two lines.
- How we win, in three bullets a partner can say.
- Three landmine questions to ask early.
- "They say / you say" for the four most common objections.
- Two proof points with attribution.
- What changed recently.

OUTPUT
The one-page card with sources, and a separate internal note listing what I removed and why.

GROUNDING
Use only the battlecard, deal drivers and signals in the Universe and cite them. Do not invent competitor weaknesses. If the battlecard is unpublished for this competitor, say so.
```

### Pull proof from wins against one competitor

```
Using Calven MCP, what did buyers say when they chose us over the competitor below?

FILL IN
- Competitor: [competitor]

CONTEXT
I want the partner card to carry the buyer's words, not ours.

PULL FROM THE UNIVERSE
- Deal drivers from won deals where the competitor was in play, direction helped, with the evidence quote.
- Survey responses on those deals, for the fuller answer.

BUILD
- The five strongest reasons, each with the quote and how often it recurs.

OUTPUT
The list with sources and n.

GROUNDING
Quote verbatim. Attribute only as workspace settings allow; if names are withheld, use the role.
```

### Check whether a card needs refreshing

```
Using Calven MCP, did anything change for the competitor below since the date below that the partner card should reflect?

FILL IN
- Competitor: [competitor]
- Date: [date the partner card was last updated]

CONTEXT
The partner card was last updated on that date.

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since the date, with severity and so-what.
- The battlecard's version and updated date.

ANSWER
- The changes that matter for a partner conversation, and whether the battlecard itself was updated since.

OUTPUT
A short list with sources, or "no change".

GROUNDING
Report only recorded signals. Do not add moves from general knowledge.
```

## Ad hoc questions

- Which competitors show up most in [segment] deals?
- What is our win rate against [competitor], with the sample?
- Give me the partner-safe "how we win" against [competitor].
- What are the landmines to set against [competitor]?
- What is "they say / you say" for "[competitor] is cheaper"?
- What did [competitor] do in the last 30 days?
- Which proof points can a partner quote against [competitor]?
- What is in the battlecard that a partner must not see?
- Did buyers who chose us over [competitor] mention [capability]?
- Is the [competitor] battlecard current?
- Which Tier 1 competitors have no battlecard yet?
