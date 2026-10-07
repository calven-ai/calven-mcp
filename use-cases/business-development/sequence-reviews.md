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

## Advanced prompts

### Model where the sequence leaks, touch by touch

```
Model my sequence as a chain of states and find the touch where we lose the most prospects, then size what fixing it is worth. Use Calven MCP for the review of each touch and what a meeting is worth.

FILL IN
- Sequence: [paste every touch with its channel and day]
- Step stats: [attach sequencer export: sends, opens, replies, meetings per step]
- Persona: [persona]
- Segment: [segment]

CONTEXT
The sequence reply rate is low and everyone wants to rewrite the first email. The leak might be somewhere else. I want the data to say which touch to fix first.

FROM CALVEN
- A persona review of each touch.
- Win rate and average deal size for the segment from the ICP dashboard, with n.
- The objections the persona raises, from the canvas and quotes, to check which touch fails to address them.

MODEL
- Treat each step as a state with transition probabilities to reply, meeting, unsubscribe or next step, from my stats.
- If you can run code, build it as an absorbing Markov chain and compute the probability that a prospect who starts the sequence ends in a meeting, and the expected meetings per 100 starts.
- For each touch, raise its reply rate by a realistic step (state it) and recompute. The touch with the biggest gain is the one to fix.
- Read that touch with the persona review and say why it leaks.

OUTPUT
The chain as a table, meetings per 100 starts, the gain from fixing each touch in meetings and pipeline, and the rewrite of the leakiest touch.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent step stats; if a step has no data, say so and leave it out.
```

### Red-team the sequence as the rival's SDR lead

```
Red-team my sequence from the other side: hand it to the competitor's SDR lead and have them plan how to beat it. Use Calven MCP for what the competitor says, where they win and what buyers say about them.

FILL IN
- Sequence: [paste every touch]
- Competitor: [competitor]
- Persona: [persona]

CONTEXT
We review sequences against our own messaging. The buyer reads them next to the competitor's. I want the person whose job is to beat us to read it first.

FROM CALVEN
- The competitor's battlecard: positioning, strengths, where they win, their talk track, landmines they'd see coming.
- Their competitive signals from the last 90 days.
- Loss reasons and deal drivers on deals we lost to them, with buyer quotes.
- Our win rate against them from the competitive dashboard, with n.

RED-TEAM
- Play their SDR lead reading our six touches. Mark every claim they can undercut, every promise they also make, and every gap where their story is stronger.
- Write their counter-sequence: three touches aimed at the same persona, landing the same week.
- Then switch back: for each weak point found, propose the change to our touch that removes it.

OUTPUT
The red-team notes touch by touch, their counter-sequence, and a table of our fixes ranked by how much ground they win back.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Their counter-sequence is simulated from the battlecard and says so. Don't invent a claim or a move the competitor hasn't made.
```

### Build a reusable grading rubric for sequences

```
Build a grading rubric and an eval set for sequences, so every future sequence is scored the same way before it launches. Use Calven MCP for the standards the rubric checks against.

FILL IN
- Sequences to calibrate on: [paste two or three: one that worked, one that flopped, one new]
- Persona: [persona]

CONTEXT
Every manager reviews sequences by taste, and the feedback changes with the reviewer. I want a rubric anyone (or any AI tool) can score with, and examples that show what a 2 and a 5 look like.

FROM CALVEN
- The messaging matrix for the persona and the objection handling.
- The product brief's capabilities, and claims marked unsupported or concerning.
- The persona canvas: pains, objections, what they find credible.
- Customer quotes on the persona's top pains.

BUILD
- Six criteria (for instance: buyer's problem first, claim accuracy, proof strength, objection coverage, variety across touches, ask size). For each, a 1 to 5 scale with an anchored description of a 1, 3 and 5.
- Score my calibration sequences against it, with evidence for each score. Adjust anchors where the scores feel wrong.
- Write ten short graded examples (single touches) covering the scale, as an eval set to check any reviewer, human or AI, against.

OUTPUT
The rubric as a table, the scored calibration sequences, and the ten-item eval set with answer key.

GROUNDING
Every anchor and score cites the messaging, brief, canvas or quotes. Don't invent a standard the Universe doesn't set; mark house-style criteria as mine.
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
- Which touch in a typical sequence should answer the objection [persona] raises first?
- Which claim in our messaging was flagged as unsupported or concerning?
- What has [competitor] changed in their messaging in the last 90 days?
- Which persona replies least in [segment], per the persona dashboard?
- Which product change in the last quarter makes an older sequence wrong?
- Which customer quote works as a proof line in a sequence for [persona]?
