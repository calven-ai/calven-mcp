# Market and competitive briefings


You want to know what changed among competitors and in the market since the last briefing, without reading everything. You get a short briefing in the same shape each time: moves ranked by severity with dates and sources, the trend changes, the deals affected, and two questions for the leadership meeting. Calven holds the dated signals and the synthesized trends, so it's one question instead of an afternoon of reading.

## Prompts

### Write the competitive and market briefing

```
Using Calven MCP, write the competitive and market briefing for the window below.

FILL IN
- Window: [time window, e.g. last two weeks]

CONTEXT
The audience is the leadership team. Same shape every time: what competitors did, what moved in the market, what it touches, and what we should decide.

PULL FROM THE UNIVERSE
- Competitive signals in the window, ranked by severity, with type, date, source and so-what.
- Trends whose status or severity changed, and new opportunities, in the window.
- Analyst findings published in the window.
- Open deals against the competitors who moved, and the win-rate trend against them.

BUILD
- Top five competitor moves: what, when, so-what, deals exposed.
- Market: trends that strengthened or appeared, with the so-what.
- Analyst: new findings in one line each.
- Two questions for the leadership meeting.

OUTPUT
A one-page briefing with sources and dates.

GROUNDING
Use only signals, trends, findings and deals in the Universe, cited. Do not infer a move from silence. If nothing of severity moved, say so plainly.
```

### Get the full read on one competitor

```
Using Calven MCP, give me the full read on the competitor below after this week's move.

FILL IN
- Competitor: [competitor]
- Move: [what they did]
- Window: [time window for signals, e.g. last 90 days]

CONTEXT
The competitor made the move above. I want the context: who they are, how they position, where we win and lose, our win rate against them, and what the move changes.

PULL FROM THE UNIVERSE
- The competitor's dossier: at-a-glance, positioning, strengths, weaknesses, pricing.
- The battlecard: how we win, where we lose.
- Signals from them in the window.
- Win rate against them and the top loss reasons, with samples.

BUILD
- Who they are in five lines.
- What the move changes in where we win and lose.
- What the battlecard should say now, as a suggestion for the competitive intelligence agent.

OUTPUT
A one-page read.

GROUNDING
Use only the dossier, battlecard, signals and dashboard, cited. Do not predict their next move.
```

### Explain one trend and what it means

```
Using Calven MCP, explain the trend below and what it means for us.

FILL IN
- Trend: [trend]

CONTEXT
The trend appeared in the briefing with high severity. I want the evidence behind it and the implication.

PULL FROM THE UNIVERSE
- The trend record: description, so-what, category, severity, horizon, first and last seen.
- The market signals cited under it.
- Opportunities linked to it, and the positioning's why-now section.

BUILD
- The trend in three lines, the evidence with sources, the implication for positioning, product and sales.

OUTPUT
A half-page note.

GROUNDING
Use only the record and its cited signals. Do not extend the trend with your own knowledge.
```

## Advanced prompts

### Forecast the competitor's next move

```
Forecast the competitor's next two moves with probabilities, and set the signposts that tell us which one is coming. Use Calven MCP for their recorded moves, their dossier and how they're doing against us.

FILL IN
- Competitor: [competitor]
- Horizon: [next quarter or next two quarters]

CONTEXT
A briefing that only says what they did is history. The executive team needs to know what they'll probably do next, and what to do before they do it.

FROM CALVEN
- Their competitive signals from the last twelve months: type, severity, date.
- Their dossier: positioning, product, pricing, funding.
- Our win rate against them, with n and the trend, and the drivers when we beat them.
- Trends in our market their moves line up with.

METHOD
- Find the base rates: how often they launch, change pricing, shift messaging or hire, from the signal history.
- List five plausible next moves. Give each a probability that starts from the base rate and is adjusted for their situation, and show the adjustment.
- For each move, name a signpost: an early, observable sign that it's coming.
- Estimate each move's impact on our open pipeline against them.

OUTPUT
A table (move, probability, signpost, impact on us, our pre-emptive response), the two moves to prepare for, and a line I can check next quarter to score this forecast.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Probabilities are your judgement, anchored to the base rate shown; never present them as recorded facts.
```

### Build four scenarios for the market

```
Build four scenarios for our market from the two uncertainties that matter most, and tell us what we'd do in each. Use Calven MCP for the trends, opportunities and competitor moves that point each way.

FILL IN
- Horizon: [two or three years]
- Strategy on the table: [paste the current strategy or plan summary]

CONTEXT
A single forecast fails quietly. Scenarios make the leadership team agree on what they'd do if the market goes another way, and on what to watch for.

FROM CALVEN
- Trends with severity, horizon and so-what.
- Market opportunities with sizing.
- Analyst findings on the category.
- High-severity competitor signals from the last year.

METHOD
- From the trends, find the two forces that are both high impact and most uncertain. Show why you picked them over the rest.
- Cross them into four scenarios. Name each, and describe its market in five lines: who buys, what they buy, who wins.
- Test the current strategy in each: strong, weak or broken.
- Find the no-regret moves (good in all four) and the hedge (cheap insurance against the worst one).
- List the indicators that tell us which scenario is unfolding.

OUTPUT
The 2x2 with the four scenarios, a strategy fit table, the no-regret moves, the hedge, and the indicator list for the quarterly briefing.

GROUNDING
Every force traces to a cited trend, finding or signal. The scenarios are your construction; say so. Don't invent a market size Calven doesn't hold.
```

### Build a signal triage scorecard

```
Build a scorecard that ranks every competitor and market signal by what it puts at risk in our pipeline, so the briefing leads with what matters. Use Calven MCP for the signals, the deals against each competitor and our win rates.

FILL IN
- Window: [window]
- Format: [spreadsheet, interactive HTML page or table]

CONTEXT
Thirty signals a month, most of them noise. An executive needs the three that touch revenue and the reason they rank on top.

FROM CALVEN
- Competitive signals and market signals in the window, with severity and so-what.
- Open deals per competitor, with amount and stage.
- Our win rate against each competitor, with n, and their battlecard's where-we-win and where-we-lose.

BUILD
- Score each signal on exposure (open pipeline against that competitor), vulnerability (how hard the move hits a reason we win or lose against them) and confidence (source and recency). Show the formula.
- Rank the signals and cut the list where the score drops off.
- If you can run code, build the scorecard as a working file: one row per signal, the formula in the cells, a filter by competitor.
- Write the top three as briefing items: what happened, which deals it touches, what we do.

OUTPUT
The scorecard file or table, the top three briefing items, and the discarded signals with a one-word reason each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A vulnerability score cites the battlecard or a driver; don't score a move as damaging without one.
```

## Ad hoc questions

- What did competitors do this week?
- Which competitor move had the highest severity this month?
- Has [competitor] changed pricing recently?
- Which trends strengthened this quarter?
- Any new market opportunities recorded?
- Which analyst reports came in this quarter?
- Which open deals are against [competitor]?
- What is the win-rate trend against [competitor]?
- What does the so-what say about [signal]?
- Which competitors are tracked, and which have no battlecard?
- What is the latest on [topic] in the market signals?
- Which trend shows up as a buying trigger in our deals?
- What is the sizing on [opportunity]?
- Which trends went stale or were archived this quarter?
- Which competitor went quiet this quarter after a busy year?
- Which signal this month hits a reason we win against that competitor?
- Which trends do customers raise on calls, and which do they never mention?
- Which competitor's messaging moved toward our category this year?
- Which domains do our market signals cite most this quarter?
- Which competitor are we meeting in more deals this quarter than last?
