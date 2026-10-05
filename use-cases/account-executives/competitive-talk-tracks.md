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
