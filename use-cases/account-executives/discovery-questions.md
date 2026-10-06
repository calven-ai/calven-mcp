# Discovery questions


You want discovery questions that sound like the buyer's world, in an order this persona will tolerate, covering pain, metric, buying group, decision process and competition. You leave with a short question set per persona and stage, plus the two questions that test the risk that decides deals like this one. Calven adds the company's own knowledge, so the buyer doesn't hear the same checklist every vendor asks.

## Prompts

### Write the question set for a first call

```
Using Calven MCP, write my discovery questions for a first call with the persona and account below.

FILL IN
- Persona: [persona]
- Account: [account]
- Segment: [segment]
- Lead source: [how they came in: inbound, referral, outbound]
- Competitor: [competitor that may be in play]

CONTEXT
The account is a company in the segment that came in through the lead source above. The competitor may be in play. I have 30 minutes and want to leave with pain, a metric, the buying group and the decision process.

PULL FROM THE UNIVERSE
- The persona canvas: goals and KPIs, pains, jobs to be done, objections.
- The ICP attributes and buying triggers to confirm for the segment, and the disqualifiers.
- What decided deals in the segment and against the competitor, from win/loss.
- The landmine questions on the competitor's battlecard.

BUILD
- Eight to twelve questions grouped by what they establish: pain, metric, economic buyer, decision criteria, decision process, champion, competition. Phrase each the way this persona talks.
- The two questions that test the risk that decided similar deals, marked "ask early".
- The one landmine question and when to ask it.
- The order for a 30-minute call, and what to hold for the next one.

OUTPUT
The question set with a one-line reason per question and a source.

GROUNDING
Ground every question in the canvas, ICP, win/loss drivers or battlecard and cite it. Do not invent pains or triggers the Universe does not record.
```

### Find the two questions that test the risk

```
Using Calven MCP, which two questions should I ask early in the deal below?

FILL IN
- Deal: [deal]
- Account: [account]
- Segment: [segment]
- Persona: [champion's persona]
- Competitor: [competitor]

CONTEXT
The account is in the segment, the champion is the persona above, and the competitor is in play. I want the questions that test what actually sinks deals like this, not a full discovery script.

PULL FROM THE UNIVERSE
- The deal drivers that decided lost deals in the segment and against the competitor, with the buyers' words.
- The costly objections for this persona.

BUILD
- The two risks most likely to decide this deal, with the evidence.
- One question per risk, phrased for this persona, and who on the buying group to ask.

OUTPUT
Two risks, two questions, sources.

GROUNDING
Rank by how often the driver decided the deal, with n. Do not invent risks the record does not show.
```

### Spot what your discovery notes missed

```
Using Calven MCP, review my discovery notes for the deal below.

FILL IN
- Deal: [deal]
- Persona: [persona]
- Account: [account]
- Segment: [segment]
- Notes: [paste your notes from the first call]

CONTEXT
The notes are from my first call with the persona at the account. Tell me what I still do not know.

PULL FROM THE UNIVERSE
- The qualification elements we track and what decides deals in the segment.
- The persona canvas.

CHECK
- Which of pain, metric, economic buyer, decision criteria, decision process, champion and competition my notes establish, and which they do not.
- Which pain or objection from the canvas never came up, and whether that is a gap or a signal.
- The three questions for the next call.

OUTPUT
A checklist with a verdict per element, then the three questions.

GROUNDING
Judge against the Universe only and cite it. Do not infer answers my notes do not contain.
```

### Check how well we know this persona

```
Using Calven MCP, how well do we understand the persona below in discovery?

FILL IN
- Persona: [persona]

CONTEXT
I keep getting surprised on calls with this persona. I want to know how much evidence we have on them.

PULL FROM THE UNIVERSE
- The persona canvas and when it was last updated.
- Quotes from this persona in the last two quarters, by category.
- Win rate on deals where this persona was the contact role, with n.

CHECK
- Which canvas sections have recent quotes behind them and which do not.
- Pains and objections in the quotes that the canvas does not list.

OUTPUT
A short read on where the canvas is strong, where it is thin, and the quotes that should go into the next update.

GROUNDING
Only the canvas, quotes and dashboard figures, cited. If the persona has no quotes, say so.
```

## Advanced prompts

### Build a switch interview on the four forces

```
Build a discovery guide around the four forces of a switch (push, pull, anxiety, habit) so I learn whether this buyer will actually change. Use Calven MCP for the pains, triggers and fears real buyers of this persona have voiced.

FILL IN
- Persona: [persona]
- Segment: [segment]
- What they use for this: [their current tool or process, or "unknown"]

CONTEXT
Buyers say yes to pain and still don't switch. Most of my stalled deals had plenty of push and nobody asked about the anxiety or the habit. I want a first call that measures all four.

FROM CALVEN
- The persona canvas: pains, jobs to be done, objections.
- Verbatim quotes from this persona and segment tagged Pain, Buying trigger and Objection, and the themes they cluster into.
- Deal drivers on lost deals tagged in-house or no decision, with evidence quotes.

METHOD
- For each force, write two or three open questions that make the buyer describe a real moment, not an opinion. Push: the struggle in the current way. Pull: the picture of the new way. Anxiety: what scares them about switching. Habit: what keeps the current way comfortable.
- Under each question, list the answers that signal a strong or weak force, in buyers' recorded words.
- Add a scoring sheet: rate each force 1 to 5 after the call, and the rule that says when push plus pull outweigh anxiety plus habit enough to forecast it.

OUTPUT
The guide grouped by force, the signal answers, and the scoring sheet as a table I can fill in after the call.

GROUNDING
Signal answers come from recorded quotes, cited. Mark any you wrote yourself as your assumption. Don't invent a fear the canvas or quotes don't show.
```

### Rank questions by what the answer is worth

```
Rank my discovery questions by expected value of information: which answer would change my forecast or my plan the most. Use Calven MCP for what has actually separated won from lost deals in this segment.

FILL IN
- Deal: [deal]
- My question list: [paste the questions you plan to ask]
- Call length: [minutes]

CONTEXT
I have more questions than minutes. I want to spend the call on the questions whose answers would move the deal, not the ones I ask out of habit.

FROM CALVEN
- Deal drivers ranked as deciding on won and lost deals in the deal's segment, grouped by category.
- Win rates by the attributes the ICP dashboard says predict a win, with n.
- Loss reasons for the segment, with counts, from the win/loss dashboard.

MODEL
- For each question, list the plausible answers and how likely each is for a deal like mine.
- For each answer, estimate how much it would shift the win probability or change my next action, using the drivers and rates above.
- Value of the question = how likely the answer surprises me times how much it changes. Rank by value per minute.
- Add the two questions missing from my list that test the biggest deciding driver.

OUTPUT
A ranked table: question, likely answers, shift in odds or plan, value per minute, keep or cut. Then the final list that fits the call length.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a driver; if the segment has too few surveyed deals, say so and use company-wide drivers labelled as such.
```

### Write a rubric to grade your own discovery calls

```
Write a scoring rubric for discovery calls, then grade my last calls against it, so I can see where my discovery is thin. Use Calven MCP for what our best discovery sounds like and what buyers needed to be asked.

FILL IN
- My transcripts: [paste or attach two or three of your own discovery call transcripts or notes]
- Qualification framework: [MEDDICC or the one your team uses]

CONTEXT
I think my discovery is good. My stalled deals say otherwise. I want an objective grader I can run after every call, not another training.

FROM CALVEN
- Our reps' quotes tagged Discovery question from calls on deals that were won.
- The ICP's qualifying attributes and disqualifiers, and the deciding deal drivers for the segment.
- The persona canvases for the buyers I usually sell to: their pains and objections.

BUILD
- A rubric of eight to ten criteria from the framework and the evidence: each with a definition, a 0 to 2 scale, and an example of a 2 taken from a real rep quote.
- Grade each of my transcripts line by line: score, the line that earned or lost it, the question I should have asked.
- Write the rubric so another AI tool can apply it unchanged: a clear instruction block and the scoring format.

OUTPUT
The rubric, a scored table per call, my three weakest criteria across calls, and the instruction block to reuse.

GROUNDING
Examples come from recorded rep quotes, cited. Grades come from my transcripts only. Don't credit me for a question the transcript doesn't show.
```

## Ad hoc questions

- What does a [persona] care about most, and what are they measured on?
- What are the top pains of [persona] in their own words?
- Which ICP attributes should I confirm with a [segment] prospect?
- What disqualifies an account for us?
- What question exposes where [competitor] loses?
- What decided our last ten deals in [segment]?
- How do buyers describe the problem we solve? Give me their phrases.
- What buying triggers show up on accounts we win?
- What does the [persona] object to at the first meeting?
- Which questions did our reps ask on calls that went well?
- What is the economic buyer's persona for a deal like this?
- What does [persona] need to see to become a champion?
- What do buyers who ended in no decision say they never got asked?
- Which pain does [persona] mention most that our messaging matrix doesn't address?
- What question would tell me early that an account is an anti-profile fit?
- Which job to be done on the [persona] canvas has the fewest customer quotes behind it?
- What did buyers who chose to build in-house say about why?
- Which tech stack entries on an account predict a win, according to the ICP dashboard?
