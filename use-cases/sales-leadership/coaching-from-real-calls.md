# Coaching from real calls


You've got one-on-ones this week and ten reps you've each heard on one call. You get a coaching note per rep with their own words, the gap against the story and one thing to practise. Calven pulls how each rep opens, discovers, claims value and handles objections from their calls, next to the approved messaging and what buyers said in surveys.

## Prompts

### Prepare a coaching note for one rep

```
Using Calven MCP, prepare my coaching note for the rep below from their calls in the window.

FILL IN
- Rep: [rep]
- Window: [time window, e.g. last 30 days]
- One-on-one: [day of the one-on-one]

CONTEXT
One-on-one on the day above. I want evidence from their own calls, not my memory.

PULL FROM THE UNIVERSE
- The rep's vendor quotes in the window by category: value claims, differentiation, proof points, discovery questions, objection handling, pricing, caveats.
- Which approved messaging pillars those claims pull through, and which pillars never appear.
- The customer quotes from the same conversations: objections, competitor mentions, pains.
- Our approved objection handling for the objections raised.
- What surveyed buyers said about the sales team on the rep's deals, and the sales-process drivers.

BUILD
- Strengths: two things the rep says that match the approved story or that buyers praised, verbatim.
- Gaps: the pillar they never use, the objection they answered off-script (their words against the approved line), a claim not in the product brief if any.
- The buyer's verdict in one line, if surveyed.
- One thing to practise this week.

OUTPUT
A one-page coaching note with the call and quote behind every point.

GROUNDING
Use only quotes, messaging and survey data in the Universe, verbatim and cited. Do not judge what the transcripts do not show. If the window holds too few calls, say so.
```

### Find the team-wide coaching gaps

```
Using Calven MCP, what are the team-wide coaching gaps this quarter?

PULL FROM THE UNIVERSE
- Pillar pull-through across all reps from the messaging field adoption read.
- Objections raised most on calls, and the vendor quotes answering them, against the approved objection handling.
- Value claims reps make that are not in the messaging or the product brief.

BUILD
- The pillar the team under-uses and who uses it well.
- The objection most often answered off-script, with the approved line.
- The off-brief claims to stop.

OUTPUT
A half page for the team meeting, with figures and quotes.

GROUNDING
Use only the Universe, cited with samples. Name reps only where the quote is theirs.
```

### Role-play the objection a rep fumbles

```
Using Calven MCP, run a role-play for the rep below on an objection, with you as the persona.

FILL IN
- Rep: [rep]
- Objection: [objection]
- Persona: [persona]
- Calls: [number of calls where the rep answered it off-script]

CONTEXT
The rep answered this objection off-script on that number of calls. Play the buyer, raise it the way the canvas says, and after the exchange give the approved line with the evidence behind it.

PULL FROM THE UNIVERSE
- The persona's canvas and the approved objection handling for the objection.
- A won deal where this objection was overcome, with the buyer's words.

OUTPUT
An interactive exchange, then the approved line and the proof.

GROUNDING
Stay true to the persona and the approved handling in the Universe.
```

### Compare a rep's discovery with the battlecard

```
Using Calven MCP, show me the discovery questions the rep below asked in the window and compare them with the battlecard's.

FILL IN
- Rep: [rep]
- Window: [time window, e.g. last 30 days]

PULL FROM THE UNIVERSE
- The rep's vendor quotes of category Discovery question in the window.
- The discovery and qualifying questions in the battlecards for the competitors on their deals.

OUTPUT
Their questions verbatim, the battlecard questions they never asked, and the one to add.

GROUNDING
Verbatim and cited; do not invent questions the transcripts do not hold.
```

## Advanced prompts

### Backtest which call behaviours win deals

```
Find out which things reps say on calls show up more in won deals than lost ones, before I coach the whole team on them. Use Calven MCP for the rep quotes from calls and the outcomes of those deals.

FILL IN
- Window: [window]
- Behaviours to test: [list what you coach: discovery questions, proof points, naming the competitor, next steps]

CONTEXT
Coaching playbooks are built on what top reps believe works. I want to know which behaviours actually travel with wins in our own deals.

FROM CALVEN
- Vendor quotes in the window: category (Value claim, Discovery question, Proof point, Objection handling, Pricing, Caveat, Next step), the rep and the deal.
- The outcome and deal size band of each of those deals from the CRM.
- The overall win rate from the win/loss dashboard, with n, as the baseline.

BACKTEST
- Page through the vendor quotes and tag each closed deal with the behaviours that appeared on its calls.
- For each behaviour, compare the win rate of deals with it against deals without it, and show the counts.
- Control for the obvious: big deals have more calls and more of everything. Compare within deal size bands where n allows.
- Rank behaviours by lift, and flag any with fewer than ten deals on either side.

OUTPUT
A table (behaviour, deals with, win rate with, deals without, win rate without, lift, confidence), the two behaviours worth coaching, the one to stop coaching, and a quote of each done well.

GROUNDING
These win rates are computed by you from the deals you paged; say so and give the counts. This is correlation in our calls, not proof of cause; label it that way.
```

### Write a call rubric anchored on real quotes

```
Write a call-grading rubric whose anchors are real things our reps said, then grade one rep's calls against it. Use Calven MCP for the approved messaging and the rep quotes that become the anchors.

FILL IN
- Rep: [rep]
- Skills to grade: [discovery, pillar pull-through, objection handling, competitor handling, next step]

CONTEXT
A rubric that says "strong discovery" gets graded differently by every manager. Anchors pulled from our own calls make a 2 and a 4 look different to everyone.

FROM CALVEN
- Value pillars, objection handling and the messaging matrix from the messaging.
- Vendor quotes from all reps, by category, to pick anchors from.
- Vendor quotes from the named rep.
- Pillar pull-through from the messaging dashboard, with n.

BUILD
- For each skill, write a 1-to-5 scale. Each level gets a description and an anchor: a real rep quote at that level, cited, with other reps' names removed.
- Test the rubric: grade six anchor quotes blind and check they land on their level. Fix any level that's ambiguous.
- Grade the named rep's quotes against it, skill by skill.

OUTPUT
The rubric as a table (skill, level, description, anchor quote), the rep's scores with two quotes each as evidence, and the one skill to coach this month with the anchor to show them.

GROUNDING
Every anchor is a verbatim, cited quote; don't write one that nobody said. Each grade cites the quote it's based on.
```

### Design a coaching experiment with a holdout

```
Design a 60-day coaching experiment that tells me whether the coaching works, not just whether reps liked it. Use Calven MCP for the baseline behaviours and the call volume per rep.

FILL IN
- Coaching change: [what you'll coach: a pillar, an objection, a discovery framework]
- Team: [paste the reps and their managers]

CONTEXT
We roll coaching out to everyone and then can't tell if anything changed. A holdout, a baseline and a measure decided in advance fix that.

FROM CALVEN
- Pillar pull-through and field adoption from the messaging dashboard, with n.
- Vendor quotes per rep over the last 90 days, to count calls and the baseline rate of the behaviour.
- Objections customers raised in the same window, by category.

METHOD
- Pick the primary measure: how often the behaviour appears in each rep's quotes on calls. Pick a secondary one: how buyers respond, from customer quotes on the same calls.
- Split the team into a coached group and a holdout, matched on baseline and tenure.
- Run a power check: given calls per rep, can 60 days detect a change? If not, extend it or pool the measure.
- Write the readout rule in advance: what result means roll out, rework or stop.

OUTPUT
The design on one page (hypothesis, groups, measure, duration, power check, decision rule), the baseline table per rep, and the readout template.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The power check states its inputs; don't claim the test can detect a change it can't.
```

## Ad hoc questions

- What value claims did [rep] make on calls last month? Quote them.
- Which messaging pillar does the team use least on calls?
- How did [rep] answer "[objection]" and what is the approved line?
- Which reps pull through the [pillar] pillar most?
- What did buyers say about our sales process in the last ten surveys?
- Did [rep] claim anything that is not in the product brief?
- Which discovery questions show up on won calls but not on [rep]'s?
- What objections came up on [rep]'s calls that our messaging does not cover?
- Which caveats do reps give that we should check?
- How often do reps mention [competitor] unprompted?
- Which objection do reps answer with a caveat instead of the approved line?
- Which rep uses proof points most often on calls?
- What do buyers on lost deals say the rep got wrong?
- Which pillar draws the most positive customer quotes on the calls where reps use it?
- Which competitor do reps handle least well on calls, judging by the buyer's reply?
- Which objection showed up on calls for the first time in the last 30 days?
