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
