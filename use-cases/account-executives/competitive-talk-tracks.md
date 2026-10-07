# Competitive talk tracks


The buyer just repeated the competitor's pitch back to you, and the deck's comparison slide won't help, since the competitor has already answered it. You walk in with three lines, one trap and one proof, all grounded in deals we actually won against this rival. Calven adds where we win, where we lose and what to say, from the battlecard and the buyers who chose us.

## Prompts

### Build a talk track for this deal

```
Using Calven MCP, build my talk track against the competitor for the deal below.

FILL IN
- Competitor: [competitor]
- Deal: [deal]
- Account: [account]
- Segment: [segment]
- Persona: [champion's persona]
- Buyer said: [what they said about the competitor's demo]

CONTEXT
The account is a company in the segment. The champion is the persona above. They have seen the competitor's demo and said what is quoted above. I want three lines, one trap and one proof.

PULL FROM THE UNIVERSE
- The competitor's battlecard: how we win, where we lose, landmines, objection handling, talk track.
- The competitor's moves in the last 90 days.
- Win rate against the competitor in the segment with n, and the drivers that decided those deals, with the buyers' words.
- One displacement win or customer quote from a similar account.

BUILD
- Three lines that position us for this persona without naming the competitor.
- The trap: one discovery question that exposes where the competitor loses, and when to ask it.
- The "they say, you say" for what this buyer has already repeated from the competitor.
- Where the competitor is genuinely stronger and the honest handling.
- The proof, verbatim and attributed.

OUTPUT
A one-page talk track with sources.

GROUNDING
Use only the battlecard, signals, win/loss evidence and quotes in the Universe, cited with n. Do not invent competitor weaknesses, pricing or features. If the battlecard is unpublished or thin, say so.
```

### See what the competitor changed recently

```
Using Calven MCP, tell me what the competitor below has done recently that changes how I sell against them.

FILL IN
- Competitor: [competitor]
- Since: [date I last pitched against them]

CONTEXT
I last pitched against the competitor on the date above. I want to know what moved since.

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since that date, with dates and sources.
- The battlecard sections those signals touch.

BUILD
- Each move in one line with its date and what it means for the pitch.
- Which lines of my old talk track no longer hold.

OUTPUT
A dated list, then the lines to retire.

GROUNDING
Only recorded signals, cited with date and source. If nothing is recorded since that date, say so.
```

### Rehearse against a buyer who prefers them

```
Using Calven MCP, role-play a buyer of the persona below who prefers the competitor.

FILL IN
- Persona: [persona]
- Competitor: [competitor]
- Deal: [deal]
- Liked: [what they liked in the competitor's demo]

CONTEXT
I want to rehearse the competitive conversation before the deal. Play the buyer. They have seen the competitor's demo and liked what is noted above.

PULL FROM THE UNIVERSE
- The persona canvas: priorities, pains, objections, how they talk.
- The competitor's battlecard, so the buyer's pushback is what the competitor actually claims.
- The reasons buyers chose the competitor over us.

ROLE-PLAY
- Open as the buyer. Push back with the competitor's real strengths and the objections this persona raises.
- Stay in character until I say "debrief".
- Then drop character: where I was strong, where I lost you, the two lines to fix.

OUTPUT
An interactive exchange, then a short debrief.

GROUNDING
Stay true to the persona and the battlecard. Do not make the buyer easier than the record says they are.
```

### Check the battlecard against recent calls

```
Using Calven MCP, check the competitor's battlecard against what buyers said this quarter.

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last quarter]

CONTEXT
I keep hearing things on calls that the battlecard does not cover. I want the list for the CI agent's next update.

PULL FROM THE UNIVERSE
- The competitor's battlecard.
- Quotes mentioning the competitor from the window.
- Deal drivers on deals against the competitor in the same window.

CHECK
- Claims buyers repeat from the competitor that the "they say, you say" section does not answer.
- Loss drivers that the "where we lose" section does not name.
- Wins the proof points section does not use.

OUTPUT
Three lists with the quotes behind them.

GROUNDING
Only quotes and drivers from the Universe, cited. Do not propose battlecard content from your own knowledge of the competitor.
```

## Advanced prompts

### War-game the deal against them

```
War-game my deal against the competitor in move and counter-move rounds, and tell me which move of mine they can't answer. Use Calven MCP for their battlecard, their recent moves and what has decided our deals against them.

FILL IN
- Deal: [deal]
- Competitor: [competitor]
- Where it stands: [paste the stage, the buying group, what the buyer said last, the next meeting]

CONTEXT
The competitor's rep is planning their next move in this deal too. I want to see it before they make it, and pick my sequence so I'm the one setting the terms of the evaluation.

FROM CALVEN
- The competitor's battlecard: how we win, where we lose, landmines, objection handling.
- Their competitive signals from the last 90 days: launches, pricing, messaging.
- Our win rate against them in this segment from the competitive dashboard, with n, and the top deal drivers on those deals, won and lost.

WAR-GAME
- Play four rounds. In each, I make one move (a landmine question, a proof point, a stakeholder, a pilot offer), the competitor's rep answers with the move their pattern suggests, and the buyer's state shifts.
- Play the competitor as a sharp rep who has read our battlecard too. Their moves must trace to their recorded strengths and signals.
- After round four, score the buyer's lean and the evaluation criteria each side has planted.
- Replay it once with a different opening move and compare.

OUTPUT
The two four-round transcripts in a table, the buyer's lean after each, the move they couldn't answer, and my next three moves in order.

GROUNDING
Every competitor move cites a battlecard section, a signal or a deal driver, or is marked as your extrapolation. Don't invent a feature, price or customer for them.
```

### Decide whether to fight, reframe or walk

```
Build a payoff matrix for this deal and decide whether to fight the competitor head on, reframe the evaluation, or walk away. Use Calven MCP for our real win rates against them and why those deals went the way they did.

FILL IN
- Deal: [deal]
- Competitor: [competitor]
- My cost to keep going: [hours, SE time, discount I'd need]
- Deal facts: [paste stage, amount, the evaluation criteria as I understand them]

CONTEXT
Not every competitive deal is worth winning at any price. I want to know where my time pays off before I put another month and the SE into this one.

FROM CALVEN
- Win rate against this competitor overall and in this deal's segment and size band, from the competitive dashboard, with n, plus the fight or avoid read.
- Deal drivers on won and lost deals against them, grouped by category (Competitive, Capability, Experience, Commercials).
- Loss reasons and price feedback on deals lost to them, paged from the CRM mirror.

MODEL
- Three strategies for me, three for them (match on price, push their strength, go over my head to the exec). Fill each cell with my win probability and the net deal value after my cost.
- Set the probabilities from the base rate, then shift them by the drivers that match this deal. State each shift.
- Find my best response to each of their moves, and whether any strategy of mine wins against all three.
- If you can run code, build the matrix as a small spreadsheet with the probabilities as inputs I can change.

OUTPUT
The 3x3 matrix, the recommended strategy with its expected value, the walk-away condition in one line, and what I'd say to the buyer under that strategy.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. If the segment has too few deals for a rate, use the overall rate and say so.
```

### Run a scored role-play against their best rep

```
Run a scored role-play where you play a buyer who's leaning to the competitor, and grade how I handle it, three rounds, harder each time. Use Calven MCP for the buyer's persona, the competitor's pitch and the answers that won our deals.

FILL IN
- Competitor: [competitor]
- Persona: [persona]
- My weak spot: [the moment I usually lose ground, e.g. their integration story]

CONTEXT
I know the battlecard. I don't know whether I can use it live when the buyer pushes. I want practice that feels like the real call and a score I can improve.

FROM CALVEN
- The persona canvas: goals, pains, objections in their words.
- The competitor's battlecard: their talk track, quotes, and our "they say, you say".
- Verbatim buyer quotes that mention this competitor, and our reps' quotes tagged Objection handling or Differentiation from won deals.

SIMULATE
- Play the buyer in the first person. Round one is a friendly comparison, round two quotes the competitor's pitch back at me, round three is the buyer saying they're about to sign with them.
- Stop after each of my answers. Score it 1 to 5 on four criteria: did I ask before I answered, did I use proof, did I set a landmine, did I avoid trashing them. Quote the line that cost points.
- Show what a winning rep actually said in a similar spot, from the quotes.
- Raise the difficulty only when I score 3 or more.

OUTPUT
The transcript with scores, my total per round, the best line from our reps for each moment I missed, and one drill for next time.

GROUNDING
The buyer speaks only from the canvas and real quotes. Mark any line you made up for realism as invented. Don't invent rep quotes.
```

## Ad hoc questions

- How do we win against [competitor]?
- Where do we lose to [competitor], honestly?
- What is our win rate against [competitor] in [segment], over how many deals?
- What did [competitor] launch or change this quarter?
- What trap should I set against [competitor] on a first call with a [persona]?
- A buyer says [competitor] has [feature] and we do not. What do we say?
- Which customers switched from [competitor] to us, and what did they say?
- What does [competitor] charge, as far as the dossier knows?
- Which buyer persona tends to prefer [competitor], and why?
- What are the top three reasons we lost to [competitor] this year?
- Give me the elevator pitch against [competitor] in two sentences.
- What are [competitor]'s real strengths?
- Which of our pillars do reps actually say on calls where [competitor] comes up?
- In deals we beat [competitor], which persona was the champion?
- What does the [competitor] dossier's bullshit detector flag in their latest messaging?
- At which deal stage do we usually lose to [competitor]?
- Is our win rate against [competitor] better or worse than last period, and over how many deals?
- Which of [competitor]'s claims do buyers repeat back to us in their own words?
- Which competitor do we never lose to, and why?
