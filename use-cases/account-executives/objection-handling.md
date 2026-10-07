# Objection handling


A buyer just raised an objection, and reassurance won't move them. You get the answer that changed the mind of a buyer who said the same thing and then bought, in their words, plus whether it's a real deal-breaker or a brush-off and a written answer that holds up when forwarded. Calven adds the company's evidence, so the best answer doesn't live only in the head of the rep who left.

## Prompts

### Answer one objection with evidence

```
Using Calven MCP, help me answer an objection in the deal below.

FILL IN
- Deal: [deal]
- Persona: [persona]
- Account: [account]
- Objection: [the objection, as close to verbatim as you have]
- Stage: [deal stage]
- Competitor: [competitor, or leave blank if none]

CONTEXT
The persona at the account raised the objection above. We are at the stage above. The competitor, if named, is in the deal.

PULL FROM THE UNIVERSE
- Our approved objection handling for this objection, from messaging and from the competitor's battlecard.
- Whether this objection decided deals: the drivers that mention it, with direction and rank, and the win rate on deals where it came up.
- Buyers who raised it and then bought, with their words from calls or surveys.
- How our reps answered it on calls that went well.

BUILD
- What the buyer is really asking, in one line.
- The approved answer, then the version in the customer's words.
- The proof: one buyer who raised it and bought, verbatim and attributed.
- The question to ask back.
- Whether this is a brush-off, a real concern or a disqualifier, and the evidence for that call.

OUTPUT
A short card I can read before the next touch, with sources.

GROUNDING
Use only messaging, battlecards, deal drivers and quotes from the Universe, cited. Do not promise capabilities the product brief does not hold. If no buyer in the record has raised this objection, say so.
```

### Draft a written answer they can forward

```
Using Calven MCP, draft the written answer to an objection for the contact below.

FILL IN
- Contact: [contact]
- Account: [account]
- Persona: [persona]
- Objection: [objection]
- Stakeholder: [the other stakeholder it will reach]

CONTEXT
On the call the contact, who is the persona above, raised the objection. I promised a written answer they can forward to the stakeholder. Keep it under 150 words.

PULL FROM THE UNIVERSE
- The approved objection handling for this objection.
- The product brief entry for whatever the answer relies on.
- One customer quote from a buyer who had the same concern.

WRITE
- Acknowledge the concern in their words.
- The answer, with the one fact that settles it.
- The proof, attributed.
- The next step.

OUTPUT
The email body, then a line listing which product-brief and messaging sections it relies on.

GROUNDING
Every product claim must be in the product brief; cite the section. Verbatim quote only. If the brief does not cover the point, write "I will confirm with our product team" rather than a claim.
```

### Find objections the talk track misses

```
Using Calven MCP, find the objections our talk track does not cover.

FILL IN
- Window: [time window, e.g. last quarter]
- Product: [product, or leave blank for all]

CONTEXT
I want to know which objections buyers raise that I have no approved answer for, so enablement can fix the gap.

PULL FROM THE UNIVERSE
- The objections customers raised in the window, from calls and surveys, with how often each appeared.
- The objection handling section of messaging and of each battlecard.
- The objections that decided lost deals.

CHECK
- Which raised objections have an approved answer, which do not.
- Which uncovered objections cost deals, with the count and the quotes.

OUTPUT
A table: objection, how often, decided deals, covered yes or no, the quote behind it. Then the three to fix first.

GROUNDING
Counts from the messaging and win/loss dashboards and the quote library only, with n and window. Do not invent objections to pad the list.
```

### Check your answer before you use it

```
Using Calven MCP, check my answer to an objection.

FILL IN
- Persona: [persona]
- Objection: [objection]
- Answer: [paste your answer]

CONTEXT
The persona raised the objection above. The answer is how I plan to respond. Tell me where it is weak.

PULL FROM THE UNIVERSE
- The approved objection handling for this objection.
- The product brief for any claim I make.
- What buyers who raised this objection said they needed to hear.

CHECK
- Where my answer drifts from the approved handling.
- Any claim the product brief does not support.
- Whether it answers the concern behind the words or only the words.

OUTPUT
My answer annotated, then a tighter version.

GROUNDING
Judge against the Universe only and cite it. If my answer is sound, say so.
```

## Advanced prompts

### Debate two answers and let the buyer judge

```
Stage a structured debate between two ways to answer the same objection, with the buyer persona as the judge, and tell me which one wins and why. Use Calven MCP for the approved answer, what buyers actually said and the persona who judges.

FILL IN
- Objection: [the objection, in the buyer's words]
- Answer A: [paste the approved or usual answer]
- Answer B: [paste the alternative you're considering]
- Persona: [persona]

CONTEXT
I've got two answers to this objection and the team is split. One is the approved line, one is what a top rep does. I want to see them argued properly before I commit.

FROM CALVEN
- The approved objection handling from the messaging document and, if a competitor is behind it, the battlecard's "they say, you say".
- Verbatim buyer quotes raising this objection, and what happened on those deals.
- The persona canvas for the judge, and a persona review of both answers.

METHOD
- Opening: each side argues for its answer in under 100 words, citing evidence.
- Rebuttal: each side attacks the other's weakest point.
- Judgment: the persona, in the first person, says which answer moves them and what still bothers them. Ground it in the canvas and the review.
- Then write answer C, which keeps the winning answer's core and fixes the judge's remaining concern.

OUTPUT
The debate transcript in under 500 words, the verdict with the reason, and answer C in under 60 words.

GROUNDING
Both sides argue only from cited Calven evidence. The judge's reaction traces to the canvas and the review; mark anything beyond that as your extrapolation.
```

### Backtest which answers show up on won deals

```
Backtest the ways our reps answer this objection against deal outcomes, so I use the answer that has actually won. Use Calven MCP for the rep quotes, the deals they came from and how those deals ended.

FILL IN
- Objection: [the objection or its theme, e.g. "too complex to roll out"]
- Window: [window]

CONTEXT
Every rep has a favourite answer to this objection. Nobody has checked which answer comes before a win. I want the evidence, not the folklore.

FROM CALVEN
- Our reps' quotes tagged Objection handling in the window, with account and deal, paged through until done.
- The outcome of each linked deal from the CRM mirror: won, lost, open, and the loss reason.
- Buyer quotes on the same deals tagged Objection, to confirm the objection was raised.

BACKTEST
- Keep only deals where the buyer raised this objection and a rep answered it.
- Cluster the answers into three to five approaches (reframe, proof, concession, defer to SE, and so on).
- For each approach: deals, won, lost, win rate. Compare with the overall win rate for deals that raised this objection.
- Flag where the sample is too small to tell (under eight deals) and what confounds it: deal size, competitor, rep.

OUTPUT
A table of approaches with counts and win rates, the best-performing approach with two real rep quotes, and a one-paragraph caveat on what the data can't prove.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counts you tally from paged rows are your tally, not a dashboard rate. Don't count a deal whose link to the quote is missing.
```

### Build a spaced-repetition drill for objections

```
Build me an interactive objection drill as a single HTML file, with flashcards that come back more often when I get them wrong. Use Calven MCP for the real objections, in buyers' words, and the approved answers.

FILL IN
- Personas I sell to: [persona list]
- Competitors in my deals: [competitor list]

CONTEXT
I know the answers when I read them. On a call, under pressure, I fumble. I want ten minutes a day that builds the reflex.

FROM CALVEN
- The objection handling section of the messaging document.
- The objections on each persona's canvas, with their responses.
- The "they say, you say" from each competitor's battlecard.
- Verbatim buyer quotes tagged Objection, to phrase the card fronts the way buyers talk.

BUILD
- A deck of 20 to 30 cards. Front: the objection as a real buyer said it, with the persona. Back: the approved answer in under 40 words, the proof point, and the question to ask back.
- A simple spaced-repetition schedule (Leitner boxes are fine): I mark each card easy, hard or missed, and the card returns sooner when I miss it. Store progress in the browser.
- A timed mode: 15 seconds to say my answer out loud before the back shows.
- If you can't make files, give me the deck as a table I can import into a flashcard app.

OUTPUT
One self-contained HTML file with the deck embedded, plus the deck as a CSV.

GROUNDING
Every card front is a recorded quote or canvas objection and every back is approved content, cited in a source field. Don't invent objections to fill the deck.
```

## Ad hoc questions

- How do we answer "we already use [competitor]"?
- What is our approved response to "[objection]"?
- Has "[objection]" ever decided a deal? How many, won or lost?
- Show me a buyer who said "[objection]" and then bought. What changed their mind?
- Is "[objection]" usually a brush-off or a real concern in our deals?
- What do buyers at the evaluation stage object to most?
- Which objections for [persona] does our messaging not answer?
- How did our best reps handle the pricing objection on calls?
- Does our product actually do [the thing the buyer doubts]?
- What does the [competitor] battlecard say when they claim [competitor's claim]?
- Which objection cost us the most pipeline this year?
- What did the last buyer who said "no budget" end up doing?
- Which objection do buyers raise most that has no theme behind it in the messaging?
- Which objections show up on won deals as often as on lost ones, so they're mostly noise?
- What does [persona] object to that [other persona] on the same deal doesn't?
- Which objection got more frequent this quarter compared with last?
- Is there a customer quote that answers "[objection]" better than our approved line?
- Which of our approved objection answers makes a claim the claims register marks unproven?
