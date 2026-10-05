# Battlecard distribution


Every team needs the current story against each rival in the format they actually use, and without one approved battlecard each team's copy drifts. You walk away with an asset per audience, cut from the battlecard and refreshed when it changes, making no claim the battlecard doesn't make. Calven keeps the battlecard and the signals since its last update in one place, so every version starts from the same source.

## Prompts

### Turn the battlecard into a rep cheat sheet

```
Using Calven MCP, turn the competitor's battlecard into a one-page cheat sheet for reps.

FILL IN
- Competitor: [competitor]

CONTEXT
Reps read it before a call. One page, scannable.

PULL FROM THE UNIVERSE
- The competitor's battlecard, every section.
- Signals since the battlecard was last updated.

BUILD
- Five lines: who they are and how they pitch.
- We win when / we lose when, three each.
- Three landmines, three "they say, you say" pairs.
- Two proof points.
- A "new since last update" line if any signal is newer than the battlecard.

OUTPUT
The one-pager text.

GROUNDING
Nothing beyond the battlecard and the signals, cited. Do not add claims.
```

### Pull the displacement proof for the deck

```
Using Calven MCP, give me the displacement proof against the competitor below for the deck.

FILL IN
- Competitor: [competitor]

PULL FROM THE UNIVERSE
- Won deals against the competitor and the drivers that decided them, with evidence quotes.
- Customer quotes that mention the competitor.

BUILD
- Three win stories in three lines each, in the buyer's words.
- The two reasons we win most often, with n.

OUTPUT
A slide's worth of text with sources.

GROUNDING
Quotes verbatim and cited. Counts from the dashboard with n. Deal names follow the workspace security settings.
```

### Write this week's competitive update

```
Using Calven MCP, write this week's competitive update for the sales channel.

PULL FROM THE UNIVERSE
- Competitive signals from the last 7 days, by competitor, with severity and so-what.
- Battlecards updated in the last 7 days.

BUILD
- One line per signal that matters: what happened, what it means, what to say.
- Which battlecards changed and what changed.

OUTPUT
A post under 150 words.

GROUNDING
Only signals and documents in the Universe, with dates. If nothing changed, say so.
```

### Brief a CSM on a competitive renewal

```
Using Calven MCP, brief me on the competitor below for a renewal where the customer is evaluating them.

FILL IN
- Competitor: [competitor]
- Situation: [the customer's situation]

PULL FROM THE UNIVERSE
- The battlecard: where we lose, objection handling, proof points.
- Quotes from customers who considered the competitor and stayed.

BUILD
- The three things the competitor will say to this customer, given the situation, and our answer.
- Where we are genuinely weaker and how to frame it.
- Two retention proof points.

OUTPUT
Half a page the CSM reads before the call.

GROUNDING
Only the battlecard and quotes, cited.
```

## Ad hoc questions

- What is the elevator pitch against [competitor]?
- What landmines do we set against [competitor]?
- When was the [competitor] battlecard last updated?
- What did [competitor] change since the battlecard was updated?
- How do we answer "we already use [competitor]"?
- Which competitors have no battlecard?
- Give me the "we lose when" list for [competitor].
- Which competitor had the most signals this month?
- What proof do we have against [competitor]?
- Summarise the [competitor] battlecard in five lines.
