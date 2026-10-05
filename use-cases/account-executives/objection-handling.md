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
