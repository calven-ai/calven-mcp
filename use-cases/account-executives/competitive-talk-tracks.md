# Competitive talk tracks

**Team:** Account executives · also solutions engineering, sales enablement, BDRs and SDRs
**Impact:** High. Most lost deals name a competitor, and the rep who knows where that competitor loses closes a different conversation from the rep who guesses.
**Prerequisites:** competitors tracked (battlecards published), win/loss surveys running. Better with call transcripts ingested (competitor mentions in quotes) and CRM connected (competitor win rates).

## What the team is trying to do

Position against the rival in the deal without naming them more than needed: know where we win, where we lose, what trap to set early, and what to say when the buyer repeats the competitor's pitch. Done means the rep walks into the call with three lines, one trap and one proof, all grounded in deals we actually won against this competitor. Without the company's own evidence the talk track is the deck's comparison slide, which the competitor has already answered.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Confirm who is in the deal | Which competitor, and how far along the buyer is with them | The deal's competitors field; competitors buyers named on calls for this account | CRM deals, quotes (competitor mention) |
| 2 | Read the battlecard | Where we win, where we lose, landmines, objection handling, talk track | The battlecard and the deep dive sections on pricing, product and positioning | Competitor bundle, deep dive |
| 3 | Check what changed | The competitor's recent moves that change the pitch | Competitive signals: launches, pricing changes, messaging shifts, with dates | Competitive signals |
| 4 | Read the record | How we actually fared against them, and why | Win rate against this competitor by segment; deal drivers that decided those deals; buyers' words | Competitive intelligence dashboard, deal drivers, survey responses |
| 5 | Build the talk track | The three lines, the trap, the proof, the "they say, you say" | A deal-specific talk track from the battlecard, tuned to this persona and segment | Battlecard, persona canvas, quotes |
| 6 | Set the trap | A discovery question that exposes the competitor's weakness before they are chosen | Landmines from the battlecard matched to the persona's jobs to be done | Battlecard landmines, persona canvas |
| 7 | Stay honest | Where the competitor is genuinely better, and how to handle it | "Where we lose" and the strengths section of the battlecard | Battlecard |
| 8 | Rehearse | Practise the exchange | A role-play as the persona who prefers the competitor | Persona canvas, battlecard |
| 9 | Report back | A competitor claim or move not on the battlecard | Calven does not help here beyond confirming it is missing; the CI agent records it in the app | |

## Recommended prompts

### Step 2 to 5: the deal-specific talk track

```
Using Calven MCP, build my talk track against [competitor] for [deal].

CONTEXT
[Account] is a [segment] company. The champion is a [persona]. They have seen a [competitor] demo and said "[what they said about it]". I want three lines, one trap and one proof.

PULL FROM THE UNIVERSE
- The [competitor] battlecard: how we win, where we lose, landmines, objection handling, talk track.
- [Competitor]'s moves in the last 90 days.
- Win rate against [competitor] in [segment] with n, and the drivers that decided those deals, with the buyers' words.
- One displacement win or customer quote from a similar account.

BUILD
- Three lines that position us for this persona without naming the competitor.
- The trap: one discovery question that exposes where [competitor] loses, and when to ask it.
- The "they say, you say" for what this buyer has already repeated from [competitor].
- Where [competitor] is genuinely stronger and the honest handling.
- The proof, verbatim and attributed.

OUTPUT
A one-page talk track with sources.

GROUNDING
Use only the battlecard, signals, win/loss evidence and quotes in the Universe, cited with n. Do not invent competitor weaknesses, pricing or features. If the battlecard is unpublished or thin, say so.

[name the deal, segment, persona, competitor and what the buyer said]
```

### Step 3: what changed

```
Using Calven MCP, tell me what [competitor] has done recently that changes how I sell against them.

CONTEXT
I last pitched against [competitor] in [month]. I want to know what moved since.

PULL FROM THE UNIVERSE
- Competitive signals for [competitor] since [date], with dates and sources.
- The battlecard sections those signals touch.

BUILD
- Each move in one line with its date and what it means for the pitch.
- Which lines of my old talk track no longer hold.

OUTPUT
A dated list, then the lines to retire.

GROUNDING
Only recorded signals, cited with date and source. If nothing is recorded since [date], say so.

[name the competitor and the date]
```

### Step 8: rehearse

```
Using Calven MCP, role-play a [persona] who prefers [competitor].

CONTEXT
I want to rehearse the competitive conversation before [deal]. Play the buyer. They have seen [competitor]'s demo and liked [what they liked].

PULL FROM THE UNIVERSE
- The [persona] canvas: priorities, pains, objections, how they talk.
- The [competitor] battlecard, so the buyer's pushback is what [competitor] actually claims.
- The reasons buyers chose [competitor] over us.

ROLE-PLAY
- Open as the buyer. Push back with [competitor]'s real strengths and the objections this persona raises.
- Stay in character until I say "debrief".
- Then drop character: where I was strong, where I lost you, the two lines to fix.

OUTPUT
An interactive exchange, then a short debrief.

GROUNDING
Stay true to the persona and the battlecard. Do not make the buyer easier than the record says they are.

[name the persona, the competitor, and what the buyer liked]
```

### Gap mode: is the battlecard still right

```
Using Calven MCP, check the [competitor] battlecard against what buyers said this quarter.

CONTEXT
I keep hearing things on calls that the battlecard does not cover. I want the list for the CI agent's next update.

PULL FROM THE UNIVERSE
- The [competitor] battlecard.
- Quotes mentioning [competitor] from the last quarter.
- Deal drivers on deals against [competitor] in the same window.

CHECK
- Claims buyers repeat from [competitor] that the "they say, you say" section does not answer.
- Loss drivers that the "where we lose" section does not name.
- Wins the proof points section does not use.

OUTPUT
Three lists with the quotes behind them.

GROUNDING
Only quotes and drivers from the Universe, cited. Do not propose battlecard content from your own knowledge of [competitor].

[name the competitor and the window]
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

## Good practice

- Name the competitor as Calven tracks it. Product names and parent companies can differ.
- Ask for the date on every signal and the n on every win rate.
- Ask where we lose before you ask where we win. The honest version of the talk track survives a buyer who has seen both demos.
- Tune the track to the persona. The trap for a technical buyer is not the trap for a CFO.
- When a buyer repeats a competitor claim the battlecard does not cover, run the gap check and send the result to whoever owns the CI agent.

## Not covered today

- Live competitor research. The CI agent monitors competitor sites and docs in the app; MCP reads what it recorded. A press release from this morning is not in the Universe yet.
- Updating the battlecard. Gaps go to the CI agent and product marketing in Calven.
- Competitor pricing beyond what the dossier states. If the dossier says pricing is not disclosed, the AI tool says the same.
