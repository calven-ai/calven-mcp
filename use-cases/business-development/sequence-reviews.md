# Sequence reviews


Your sequence is about to go live, or replies just dropped, and you want more than one manager's taste on a Friday. You get every touch across email, LinkedIn and phone checked: on the approved story, true to the product, read as the persona's problem, solid against the incumbent, with no repeats. Calven adds the company's knowledge that each touch is checked against.

## Prompts

### Review the whole sequence before launch

```
Using Calven MCP, review this outbound sequence for the persona and segment below before it goes live.

FILL IN
- Persona: [persona]
- Segment: [segment]
- Sequence: [paste the full sequence, touch by touch with channel and day]

CONTEXT
I want it checked for message, facts and how the buyer reads it.

PULL FROM THE UNIVERSE
- Our approved messaging for this persona, and the language we have moved away from.
- The product brief, for every product, pricing and integration claim.
- The persona's canvas, and run the persona review on the whole sequence.

CHECK
- Per touch: off-message lines, wrong or stale claims, the line the persona would delete at.
- Across the sequence: what repeats, where the ask escalates too early, the touch where the persona stops.

OUTPUT
The sequence annotated inline with flags and severity, then the three touches to fix first.

GROUNDING
Judge only against the messaging, product brief and persona in the Universe and cite what each flag conflicts with. If a touch is clean, say so.
```

### Check the sequence against an incumbent

```
Using Calven MCP, check this sequence for accounts where the competitor below is the incumbent.

FILL IN
- Competitor: [competitor]
- Sequence: [paste the sequence]

CONTEXT
Most contacts on this list already use the competitor.

PULL FROM THE UNIVERSE
- The competitor's battlecard: where we win, where we lose, landmines, objection handling.
- The reasons we lost to the competitor, with the buyer's words.

CHECK
- Touches that walk into a known loss reason without handling it.
- The one touch where a landmine question fits without naming the competitor.
- Claims that would not survive the prospect comparing us side by side.

OUTPUT
The flagged touches with the suggested line for each.

GROUNDING
Use only the battlecard and win/loss evidence in the Universe and cite it. Do not invent competitor weaknesses.
```

### Find what the sequence is missing

```
Using Calven MCP, tell me what this sequence is missing for the persona below.

FILL IN
- Persona: [persona]
- Sequence: [paste the sequence]

CONTEXT
The sequence gets opens but few replies.

PULL FROM THE UNIVERSE
- The objections and pains the persona raises most, from the voice-of-customer read.
- The proof points in our positioning and the customer quotes behind them.

CHECK
- Objections the persona has that no touch pre-empts.
- Pains the persona ranks high that no touch names.
- Proof the sequence never offers.

OUTPUT
A gap list, each with the touch it belongs in and a suggested line.

GROUNDING
Use only objections, pains and proof from the Universe and cite them. Do not invent gaps if the sequence covers the persona well.
```

### Rewrite one touch in customers' words

```
Using Calven MCP, rewrite the touch below in our customers' words.

FILL IN
- Touch: [paste the touch]
- Touch number: [n]
- Persona: [persona]
- Flag: [why it was flagged]
- Job: [what the touch has to do]

CONTEXT
The touch was flagged for the reason above. Its job is stated above. Keep the channel and the ask.

PULL FROM THE UNIVERSE
- The persona's canvas messaging hooks and the quotes customers gave on this pain.
- The product brief entry for anything the touch claims.

WRITE
- The rewrite, same length or shorter, leading with the pain in the customer's words.

OUTPUT
The rewrite and one line on what changed.

GROUNDING
Use only hooks, quotes and product facts from the Universe, cited.
```

## Ad hoc questions

- Is this sequence on-message for [persona]? [paste]
- Which claim in this email is not in our product brief? [paste]
- Does our product still do what touch 3 says, after the last release?
- Would [persona] open the fourth email after reading the first three?
- Which objection does this sequence never answer?
- Where in this sequence could I set a landmine for [competitor]?
- What repeats across these five emails?
- Which touch should carry the customer quote?
- Did we drop any of these phrases from our messaging? [paste]
- Give me a different opener for touch 2 using a pain from calls.
- Which loss reason against [competitor] does this sequence ignore?
- Rank the five touches by how likely [persona] is to reply.
