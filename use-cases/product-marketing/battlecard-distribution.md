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

## Advanced prompts

### Turn the battlecard into spaced-repetition flashcards

```
Turn the battlecard into a spaced-repetition flashcard deck reps drill in five minutes a day. Use Calven MCP for the battlecard, the objections buyers raise and the proof we hold.

FILL IN
- Competitor: [competitor]
- Format: [Anki CSV, Quizlet, or plain table]

CONTEXT
Reps read the battlecard once at enablement and forget it by the first deal. Recall practice beats rereading. I want cards that drill the moments that decide deals, not trivia about the competitor.

FROM CALVEN
- The competitor's battlecard: objection handling, landmines, how we win, where we lose, proof points.
- Quotes from buyers mentioning the competitor, especially objections.
- Loss drivers against them, ranked by how often they decided the deal.

BUILD
- Forty cards, weighted toward what decides deals: more cards for the top loss drivers, few for company trivia.
- Three card types. "They say, you say": front is a buyer's objection (verbatim where a quote exists), back is our response and one proof point. "Set the landmine": front is a discovery moment, back is the question to ask. "Spot the bluff": front is their claim, back is what's true.
- Tag each card by difficulty and by the deal stage it comes up in.
- Write it as a file in the chosen format with front, back and tags, ready to import. If you can't write files, give me a table.
- Add a ten-card weekly quiz with a scoring key for the manager.

OUTPUT
The deck file (or table), the weekly quiz and its key.

GROUNDING
Every card back cites the battlecard section or quote it comes from. Card fronts are verbatim where a quote exists, otherwise labelled paraphrase. Don't invent a response the battlecard doesn't give.
```

### Backtest the battlecard against real deals

```
Backtest the battlecard: check its "we win when" and "we lose when" lines against every closed deal with this competitor. Use Calven MCP to page through those deals and their drivers.

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last four quarters]

CONTEXT
A battlecard is a set of predictions. If "we win when the buyer needs deep integrations" is true, deals where buyers needed integrations should win more often. Before we hand out another copy, I want to know which lines the deal record backs.

FROM CALVEN
- The battlecard: each "we win when" and "we lose when" condition.
- Closed deals with this competitor in the window, paged from the CRM mirror, with segment, size, product feedback, loss reason, tech stack requirements and outcome.
- Deal drivers and survey answers on those deals.

BACKTEST
- Turn each condition into a rule you can apply to a deal record, and show the rule.
- For each, split the deals into condition present and absent, and compare win rates with n.
- Give each line a verdict: backed, weak, contradicted, or untestable.
- Look for patterns in the deals that the battlecard doesn't mention, where win rates differ sharply.
- If you can run code, do it in Python and show the table.

OUTPUT
A table: battlecard line, the rule you used, win rate present versus absent with n, verdict. Then the suggested edits for whoever owns the battlecard in Calven.

GROUNDING
Label every number as Calven (cited, with n) or your count from paged rows. Mark any split under five deals as too thin. Don't stretch a condition to fit a deal.
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
- Which [competitor] objection do buyers raise that the battlecard doesn't answer?
- Which landmine against [competitor] shows up in won-deal drivers?
- Which proof point against [competitor] is more than a year old?
- Which rep call quotes contradict the [competitor] talk track?
- Which competitor do we meet in the most deals relative to how thin its battlecard is?
- What's the one discovery question that exposes [competitor]'s weakness in [segment]?
