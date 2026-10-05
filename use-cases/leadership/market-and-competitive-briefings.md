# Market and competitive briefings

**Team:** Leadership · also product marketing, sales leadership, product management, finance
**Impact:** High. Executives want to stay current on competitors and the market without reading everything. Calven holds the dated, sourced signals and the synthesized trends, so a weekly or monthly briefing is one question, not an afternoon of reading.
**Prerequisites:** competitors tracked (signals, dossiers), market research run (trends, opportunities, market signals). Better with win/loss surveys (so moves can be tied to deals) and analyst reports uploaded.

## What the team is trying to do

Know what changed among competitors and in the market since the last briefing, what it means for us, and what to decide or ask about. Done means a short briefing in the same shape each time: moves ranked by severity, with dates and sources, the trend changes, the deals affected, and the two questions for the leadership meeting.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Competitor moves | Launches, pricing, messaging, people, funding since last time | Competitive signals by severity, type and date, with the so-what | Competitive signals |
| 2 | Market moves | Trends that strengthened or appeared, new opportunities | Trends and opportunities with status and last-seen; market signals | Trends, market opportunities, market signals |
| 3 | What it touches | Deals and segments exposed | Open deals against the competitor; win rate trend | CRM deals, competitive intelligence dashboard |
| 4 | Analyst view | New analyst findings | Analyst findings by date | Analyst findings |
| 5 | The so-what and the asks | Decisions or questions for the leadership meeting | The signal's so-what, the battlecard's where-we-lose | Competitive signals, battlecard |
| 6 | Deep read on request | One competitor or one trend in full | Dossier; trend record | Competitor deep dive, trends |
| 7 | Distribute | Slack, email, the meeting pre-read | Calven does not send from the AI tool | |

## Recommended prompts

### Step 1 to 5: the briefing

```
Using Calven MCP, write the competitive and market briefing for [window].

CONTEXT
The audience is the leadership team. Same shape every time: what competitors did, what moved in the market, what it touches, and what we should decide.

PULL FROM THE UNIVERSE
- Competitive signals in [window], ranked by severity, with type, date, source and so-what.
- Trends whose status or severity changed, and new opportunities, in [window].
- Analyst findings published in [window].
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

[name the window]
```

### Step 6: deep read on one competitor

```
Using Calven MCP, give me the full read on [competitor] after this week's move.

CONTEXT
[competitor] did [move]. I want the context: who they are, how they position, where we win and lose, our win rate against them, and what the move changes.

PULL FROM THE UNIVERSE
- [competitor]'s dossier: at-a-glance, positioning, strengths, weaknesses, pricing.
- The battlecard: how we win, where we lose.
- Signals from them in the last [window].
- Win rate against them and the top loss reasons, with samples.

BUILD
- Who they are in five lines.
- What the move changes in where we win and lose.
- What the battlecard should say now, as a suggestion for the competitive intelligence agent.

OUTPUT
A one-page read.

GROUNDING
Use only the dossier, battlecard, signals and dashboard, cited. Do not predict their next move.

[name the competitor and the move]
```

### Step 6: deep read on one trend

```
Using Calven MCP, explain [trend] and what it means for us.

CONTEXT
[trend] appeared in the briefing with high severity. I want the evidence behind it and the implication.

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

[name the trend]
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

## Good practice

- Fix the window and the shape. A briefing readers can compare week to week is one they read.
- Rank by severity, not recency. The agent rates severity; use it.
- Ask for deals exposed. A move that touches open pipeline is a decision; one that does not is news.
- Use the deep-read prompts on request; keep the briefing to a page.
- Pass battlecard suggestions to the PMM; the briefing does not edit the battlecard.

## Not covered today

- Browsing competitor sites or news from the AI tool. The agents gather in Calven; MCP reads the record.
- Sending the briefing. Paste it into Slack or the meeting doc.
- Updating dossiers and battlecards.
