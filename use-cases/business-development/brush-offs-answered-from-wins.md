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

## Advanced prompts

### Run a Delphi panel on which brush-offs mean no

```
Run a Delphi panel to decide which brush-offs are a real no and which are a reflex worth one more question. Use Calven MCP for the personas who sit on the panel and the evidence they argue from.

FILL IN
- Brush-offs I hear: [paste the five to eight you hear most]
- Persona: [persona]
- Segment: [segment]

CONTEXT
I treat every brush-off the same: one rebuttal, then move on. Some of them hide a real fit, others mean I'm wasting a call. I want a sorted list, with a rule for each.

FROM CALVEN
- The persona canvas: objections with responses, pains, goals.
- Customer quotes tagged Objection for the persona, and quotes from customers who first said something similar and later bought.
- Deal drivers and loss reasons for the segment, with the win/loss dashboard's top loss reasons and n.

METHOD
- Seat four panellists: the persona, a veteran BDR, a sales manager and a win/loss analyst. Each reads the evidence.
- Round one: each rates every brush-off from 1 (real no) to 5 (reflex) with one line of reasoning, independently.
- Share the anonymous spread. Round two: each revises, and anyone still more than 1 point from the median says why.
- Stop at round three or when the spread is under 1 point.

OUTPUT
A table: brush-off, final median, spread, the evidence that moved the panel, and the rule (one question to ask, or let it go). Then the two brush-offs the panel couldn't agree on.

GROUNDING
Label every rating as the panel's judgement and every fact as Calven (cited, with n). Don't invent a won deal or a quote that turned a brush-off around.
```

### Replay lost incumbent deals with a better answer

```
Replay deals we lost to an incumbent and test, counterfactually, whether a different answer to "we already use them" would have changed the outcome. Use Calven MCP for the lost deals, what those buyers said and what changed minds in deals we won.

FILL IN
- Competitor: [competitor]
- Window: [window]

CONTEXT
"We already use them" ends most of my calls. Before I rewrite my answer, I want to know whether a better answer would have mattered, or whether those deals were never winnable.

FROM CALVEN
- Lost deals against the competitor in the window, with loss reason, deal drivers and survey summaries where they exist.
- Won deals against the same competitor, with the deal drivers that helped and the buyers' evidence quotes.
- The battlecard: where we win, where we lose, landmines, objection handling.

METHOD
- Sort the lost deals into three groups from the evidence: never winnable (fit or a hard requirement), lost on something said or not said, and unclear.
- For the middle group, replay the first conversation: write the answer that the won-deal evidence suggests, then judge whether the buyer's stated reason would plausibly have changed. Rate each as likely, possible or unlikely.
- Count how much pipeline sits in each group.

OUTPUT
A table of lost deals with group, counterfactual answer and verdict, then the pipeline at stake, then the one answer to "we already use them" that the replay supports best.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counterfactuals are your judgement and say so. Don't invent what a buyer said.
```

### Plot brush-offs on frequency and recoverability

```
Plot every brush-off on two axes, how often we hear it and how often we still win after it, and pick the two worth practising. Use Calven MCP for the counts and the outcomes.

FILL IN
- Persona: [persona]
- Window: [window]

CONTEXT
I practise the brush-offs I find hardest, not the ones that cost the most. A 2x2 tells me where an hour of practice pays back.

FROM CALVEN
- Customer quotes tagged Objection for the persona in the window, and the themes they cluster into, with mention counts.
- Costly objections from the voice-of-customer dashboard, with n.
- Deals where each objection came up, with outcome, from quotes linked to deals and deal drivers.

METHOD
- Map each quote theme to a brush-off in plain words.
- Frequency is the mention count. Recoverability is the share of deals with that objection we still won. Show the counts, and mark any point with fewer than 5 deals.
- Draw the 2x2: frequent and recoverable (practise), frequent and unrecoverable (qualify out fast), rare and recoverable (keep a note), rare and unrecoverable (ignore).
- For the practise quadrant, pull the winning answer from what changed buyers' minds.

OUTPUT
The 2x2 as a table or a simple chart, the two brush-offs to practise with a two-line answer each, and the one to qualify out on with the question that confirms it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent an outcome for an objection no deal is linked to; leave it off the chart and list it.
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
- Which brush-off do we hear more this quarter than last?
- Which objection comes up in won deals almost as often as in lost ones?
- What did [persona]s say about [competitor] after they switched to us?
- Which loss reason against [competitor] has a won deal that beat it?
- What does the [competitor] battlecard say their reps tell buyers about us?
- Is "send me an email" more common from buyers or from users, per the quotes?
- Which recent [competitor] signal gives me a new answer to "we already use them"?
