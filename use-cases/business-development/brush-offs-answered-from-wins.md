# Brush-offs answered from wins


A prospect just brushed you off on a cold call and you've got seconds to say something true and specific. You get a two-line response per brush-off per persona you can know by heart, plus the evidence behind it for the follow-up email. Calven adds what changed the minds of buyers who said the same thing, so you're not arguing features against an incumbent they're happy with.

## Prompts

### See which brush-offs turned into wins

```
Using Calven MCP, show me the brush-offs the persona below gives us and what changed their minds.

FILL IN
- Persona: [persona]
- Segment: [segment]

CONTEXT
I am building my responses for cold calls to the persona in the segment.

PULL FROM THE UNIVERSE
- The objections this persona raises most, from the voice-of-customer read, with a verbatim quote each.
- For each objection, a won deal where it came up and the driver that outweighed it, with the buyer's words.

BUILD
- A table: brush-off · how often it came up · the won deal where it was overcome · what outweighed it · the quote.

OUTPUT
The table, ranked by how often the brush-off appears.

GROUNDING
Use only objections, drivers and quotes from the Universe and cite them. If no won deal shows an objection being overcome, say so rather than inventing one.
```

### Answer "we already use the competitor"

```
Using Calven MCP, give me my answer to "we already use" the competitor below.

FILL IN
- Competitor: [competitor]
- Persona: [persona]
- Segment: [segment]

CONTEXT
The persona at an account in the segment just told me this on a call. I have fifteen seconds.

PULL FROM THE UNIVERSE
- The competitor's battlecard: objection handling, where we win, the landmines.
- Deals we won against the competitor and the driver that decided them, with the buyer's words.
- Why we lost to the competitor, so I do not walk into it.

BUILD
- Two lines to say, in plain speech, that acknowledge the incumbent and open one question the battlecard says exposes their weakness.
- The proof for the follow-up email: the won deal and the quote.
- The one thing not to claim.

OUTPUT
The two lines, the question, the follow-up proof, the thing not to say.

GROUNDING
Use only the battlecard and win/loss evidence in the Universe and cite it. Do not invent competitor weaknesses or customer outcomes.
```

### Write responses to your common brush-offs

```
Using Calven MCP, write my responses to these brush-offs for the persona below.

FILL IN
- Persona: [persona]
- Brush-offs: [list the brush-offs]

CONTEXT
These are the brush-offs I hear most. For each I want two lines to say and the evidence behind them.

PULL FROM THE UNIVERSE
- Our approved objection handling from the messaging document.
- The customer quotes and won-deal drivers that back each response.

WRITE
- For each brush-off: acknowledge in one line, reframe with a question in one line, and the proof to send after.

OUTPUT
A response card per brush-off, with sources.

GROUNDING
Use only the objection handling, quotes and drivers in the Universe and cite them. Where there is no evidence for a response, say so and give the question to ask instead.
```

### Practise against the persona's brush-offs

```
Using Calven MCP, play the persona below and brush me off.

FILL IN
- Persona: [persona]
- Product: [product]
- Start with: [which brush-off to start with]

CONTEXT
I want to rehearse the three brush-offs I hear most before my call block.

PULL FROM THE UNIVERSE
- The persona's canvas: objections, how they talk, what they find credible.

ROLE-PLAY
- Open as the persona would when a cold call lands. Brush me off the way the canvas says you would. Respond to what I say in character. After three exchanges, drop character and tell me what worked and the line I should drop.

OUTPUT
An interactive exchange, then a two-line debrief.

GROUNDING
Stay true to the persona as defined in the Universe. Do not make the buyer easier than the canvas says.
```

## Ad hoc questions

- How do we answer "we already use [competitor]"?
- What outweighed price in deals we won against [competitor]?
- Which brush-off do [persona]s give most often?
- What did a buyer who first said "not a priority" say after they bought?
- What is the landmine question for [competitor]?
- Why do we lose to [competitor], in one line?
- Give me a quote from a customer who switched from [competitor].
- What does our messaging say to "we built this in-house"?
- Which objection costs us the most deals right now?
- What does [persona] find credible as proof?
- Is there a won deal in [industry] where "no budget" came up?
- What should I never claim when [competitor] is the incumbent?
