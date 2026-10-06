# Competitive response statements


A competitor just moved and you've got about a day to take a stance (or decide not to), give sales and customer success talking points, answer press and brief leadership. You walk away with one consistent line across every channel. Calven checks each claim against the product brief and each mention of the competitor against the battlecard, so speed doesn't cost you accuracy.

## Prompts

### Brief yourself on the move and your exposure

```
Using Calven MCP, brief me on the competitor's move below and what it touches.

FILL IN
- Competitor: [competitor]
- Move: [paste what they announced]
- Window: [time window for earlier signals, e.g. last 90 days]

CONTEXT
The competitor announced the move today. I need to know what it means for us before the 2pm leadership call.

PULL FROM THE UNIVERSE
- The competitive signal for this move, if recorded, and the other signals for the competitor in the window.
- The competitor's dossier and battlecard: positioning, pricing, strengths, weaknesses, where we win and lose.
- Open deals with the competitor in play, with stage and amount where the workspace shows them.
- Loss drivers against the competitor on the capability or price point in question, with the buyer's words.
- Customer quotes mentioning the competitor.

BUILD
- The move in three lines and its "so what".
- Exposure: open pipeline against them, the deals at the stage most at risk, customers who have raised this.
- Where we still win on this point and where we now lose, from the battlecard and the drivers.

OUTPUT
A one-page brief with sources, numbers with n.

GROUNDING
Use only signals, documents and deal data in the Universe and cite them. If the move is not yet recorded as a signal, say so and work from the move as pasted. Do not add facts about the competitor from your own knowledge.
```

### Write your response lines

```
Using Calven MCP, write our response lines to the competitor's move.

FILL IN
- Competitor: [competitor]
- Exposure brief: [paste the exposure brief]
- Stance: [respond publicly / acknowledge only if asked / stay silent externally]

CONTEXT
We will take the stance given and arm sales and customer success either way.

PULL FROM THE UNIVERSE
- Our positioning: category frame, unique attributes.
- The competitor's battlecard: how we win, landmines, objection handling, bullshit detector.
- The product brief: the capability in question and our known weaknesses.

WRITE
- The external line (two sentences, no competitor name) if we respond.
- The press holding statement (three sentences) if asked.
- Internal talking points for sales: the five lines, the two things not to say, the discovery question that reframes the conversation.
- A customer success email to customers who raised it, under 120 words.

OUTPUT
The four texts with sources, and the claims legal should see.

GROUNDING
Use only the battlecard, positioning and brief in the Universe and cite them. Do not claim a capability we do not have or a weakness of theirs the battlecard does not state. If we lose on this point, the lines say what we do instead.
```

### Check what the competitor has done since

```
Using Calven MCP, check whether the competitor below has done anything since we responded.

FILL IN
- Competitor: [competitor]
- Move: [the move we responded to]
- Date: [date we responded]

CONTEXT
We responded to their move on the date given. I want to know what came next.

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since the date.
- Any change in their battlecard since then.

CHECK
- New signals and whether any changes our lines.

OUTPUT
A short list with dates and sources, or "nothing recorded".

GROUNDING
Use only recorded signals and cite them.
```

## Advanced prompts

### War-game their next three moves

```
War-game the competitor's move over three rounds of move and counter-move before we commit to a response. Use Calven MCP for their recent signals, their battlecard and what decides our deals against them.

FILL IN
- Competitor: [competitor]
- Their move: [paste the announcement or describe the move]
- Our draft response: [paste it, or write "none"]

CONTEXT
A response is a move in a game, not a statement. I want to see what they do after we answer, and what we do after that, before the first line goes out.

FROM CALVEN
- The competitor's signals from the last two quarters and their battlecard: where we win, where we lose, landmines.
- Deal drivers from won and lost deals against them, with the evidence quotes.
- Our win rate against them from the competitive dashboard, with n.

WAR-GAME
- Play two teams: their leadership (goals inferred from their signals and positioning) and ours.
- Round one: our response (the draft, or the best one the evidence supports), then their counter. Round two: our answer, their answer. Round three: where it settles.
- After each round, judge who gained with the buyer, citing the deal drivers that make buyers care.
- Branch once: replay from round one with the opposite stance (loud if we were quiet, quiet if we were loud).

OUTPUT
The two game lines side by side in under 600 words, a scoreboard by round, and the response to send with the one line we must not say.

GROUNDING
Their moves are your extrapolation from recorded signals; cite the signal each rests on. Don't invent a capability or price they haven't announced.
```

### Size the pipeline at risk

```
Size how much of our open pipeline the competitor's move puts at risk, as a range, so the response matches the stakes. Use Calven MCP for the open deals they're in and how deals against them have gone before.

FILL IN
- Competitor: [competitor]
- Their move: [describe the move]
- Your read on the shift: [how much you think the move changes a deal, or write "estimate it"]

CONTEXT
The CEO will ask "how bad is this" within the hour. A number with a range beats a feeling, and it decides whether this is a public statement, a note to sales or nothing.

FROM CALVEN
- Open deals with this competitor listed, with amount, stage and segment, paged from the CRM.
- Our win rate against them and the loss reasons, from the competitive dashboard, with n.
- Deal drivers from deals lost to them that touch the area the move changes.

MODEL
- Group the open deals by stage and segment and apply the historical win rate against this competitor as the baseline.
- Build three scenarios for the move's effect on that win rate (small, medium, large), grounded in how often the area it touches decided past losses.
- Compute expected pipeline lost in each scenario, and the threshold: how big the shift must be before it justifies a public response rather than a note to sales.
- List the ten deals with the most exposure and their stage. If you can run code, do the paging and sums in code.

OUTPUT
A one-page exposure memo: baseline, three scenarios, the threshold, the deals to call this week and the response level it justifies.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent deal amounts, or a win rate for a segment with too few deals; report the floor.
```

### Decide whether to respond at all

```
Decide whether to respond publicly, privately or not at all, using a payoff matrix against the competitor's likely next move. Use Calven MCP for what our buyers weigh and the competitor's track record.

FILL IN
- Competitor: [competitor]
- Their move: [describe the move]

CONTEXT
Silence can look like weakness; a loud reply can give their news a second day. The right answer depends on what they do next, which I don't control.

FROM CALVEN
- The competitor's signals over the last year: how they followed up past launches and price moves.
- Where we win and lose against them, from the battlecard and from deal drivers ranked as deciding.
- What customers have said about them on calls, from quotes that mention them.

MODEL
- Our options: a public statement, a sales and customer note only, or no response. Their likely next moves: escalate, go quiet, or follow with a second move.
- Fill a payoff matrix: for each pair, score the effect on buyer perception, our pipeline against them and press attention, with a one-line reason.
- Weight their moves by probability from their track record. Find our option with the best expected payoff and the one with the least regret if we guess wrong.
- Name the signal in the next two weeks that would make us switch options.

OUTPUT
The three by three matrix, the recommendation and the switch trigger, on one page.

GROUNDING
Probabilities and payoffs are your assumptions, labelled and tied to recorded signals and drivers. Don't invent a pattern in their history the signals don't show.
```

## Ad hoc questions

- What has [competitor] done in the last 30 days?
- Where do we lose to [competitor], in the buyer's words?
- How much open pipeline has [competitor] in play?
- What does the battlecard say to say when a prospect raises [competitor]'s new feature?
- Do we have [capability]? What exactly does the brief say?
- Which customers have mentioned [competitor] on calls?
- What is our win rate against [competitor] this year, with n?
- Which landmine in the battlecard applies to this move?
- What is our known weakness on [the point], so the statement does not deny it?
- Which objection handling line covers "[competitor] is cheaper now"?
- Which deal drivers against [competitor] does their move touch?
- Has [competitor] made a move like this before, and what followed?
- Which accounts that mentioned [competitor] on calls have a renewal or expansion deal open?
- Which claim in their announcement does the dossier's bullshit detector already cover?
- What do we lose to [competitor] on that their move doesn't change?
