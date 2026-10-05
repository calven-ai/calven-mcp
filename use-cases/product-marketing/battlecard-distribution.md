# Battlecard distribution

**Team:** Product marketing · also sales enablement, account executives, customer success
**Impact:** Medium. The battlecard already exists in Calven; the value is getting it into the shape each team reads, a one-pager for reps, a renewal brief for success, a comparison table for a proposal, without a rewrite per format.
**Prerequisites:** competitors tracked (battlecards, deep dives, signals). Better with win/loss (displacement proof) and transcripts (competitor mentions).

## What the team is trying to do

Make sure every team has the current competitive story against each rival in the format they use. Done means a battlecard-derived asset per audience, refreshed when the battlecard changes, with no claim the battlecard does not make. Without a single approved battlecard, each team keeps a copy that drifts.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Check the battlecard is current | Last update, signals since | Battlecard date and signals after it | Battlecard, competitive signals |
| 2 | Pick the audience and format | Reps, SEs, success, partners; one-pager, slide, table, talk track | | |
| 3 | Reformat | The asset from the battlecard | Drafted from the battlecard sections | Battlecard |
| 4 | Add the proof | Displacement wins and quotes | Deal drivers, quotes mentioning the competitor | Deal_drivers, quotes |
| 5 | Write the "what changed" note | For the weekly competitive update | Signals since last update, battlecard changes | Competitive signals |
| 6 | Publish to the team's surface | Enablement platform, wiki, Slack | Calven does not help here from the AI tool | |

## Recommended prompts

### Step 1 and 3: one-pager for reps

```
Using Calven MCP, turn the [competitor] battlecard into a one-page cheat sheet for reps.

CONTEXT
Reps read it before a call. One page, scannable.

PULL FROM THE UNIVERSE
- The battlecard for [competitor], every section.
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

[name the competitor]
```

### Step 4: displacement proof

```
Using Calven MCP, give me the displacement proof against [competitor] for the deck.

PULL FROM THE UNIVERSE
- Won deals against [competitor] and the drivers that decided them, with evidence quotes.
- Customer quotes that mention [competitor].

BUILD
- Three win stories in three lines each, in the buyer's words.
- The two reasons we win most often, with n.

OUTPUT
A slide's worth of text with sources.

GROUNDING
Quotes verbatim and cited. Counts from the dashboard with n. Deal names follow the workspace security settings.

[name the competitor]
```

### Step 5: weekly competitive update

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

### Renewal brief for customer success

```
Using Calven MCP, brief me on [competitor] for a renewal where the customer is evaluating them.

PULL FROM THE UNIVERSE
- The battlecard: where we lose, objection handling, proof points.
- Quotes from customers who considered [competitor] and stayed.

BUILD
- The three things [competitor] will say to this customer and our answer.
- Where we are genuinely weaker and how to frame it.
- Two retention proof points.

OUTPUT
Half a page the CSM reads before the call.

GROUNDING
Only the battlecard and quotes, cited.

[name the competitor and the customer's situation]
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

## Good practice

- Check the battlecard date against the signals before reformatting. A stale card gets refreshed in Calven first.
- One competitor, one audience per prompt.
- Keep "where we lose" in every format. Reps trust a card that admits it.
- Reformat, do not rewrite. New claims belong in the battlecard, through the competitive intelligence agent.

## Not covered today

- Updating the battlecard. That is the competitive intelligence agent and the PMM's approval in Calven.
- Posting to the enablement platform or Slack from the AI tool. Calven's own Slack agent posts the weekly update; from an AI tool the person copies it.
