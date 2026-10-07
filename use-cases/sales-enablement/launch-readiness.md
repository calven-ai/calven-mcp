# Launch readiness


A release is about to go live, and the field needs to know what it is, who it's for, how to pitch it, what it isn't, how it compares, what it costs and what to say to the questions that will follow. You walk away with a readiness pack and a pass rate. Calven builds it from the product brief and the approved positioning instead of the product manager's slide and a guess at the pricing.

## Prompts

### Write the field launch brief

```
Using Calven MCP, write the field launch brief for the capability below.

FILL IN
- Capability: [capability / product]

CONTEXT
Reps need one page before the training: what it is, who it is for, why it matters to them, and the one-liner.

PULL FROM THE UNIVERSE
- The product brief entry for the capability: what it does, how it works, integrations, pricing or packaging.
- Our positioning and the messaging variation for this launch, and the value proposition for each persona it serves.
- The persona canvases for those personas: the pains it answers.

WRITE
- What it is, in two sentences a rep can repeat.
- Who it is for and the pain it answers, per persona.
- The one-liner and the three proof points.
- What it is not, from the brief's known weaknesses.

OUTPUT
The brief.

GROUNDING
Use only the brief, positioning and messaging, cited. Do not describe behaviour the brief does not state.
```

### Write the launch FAQ and do-not list

```
Using Calven MCP, write the field FAQ for the capability's launch, including what we do not do.

FILL IN
- Capability: [capability]
- Topic: [the related topic buyers ask about]

CONTEXT
Reps will get questions in week one. I want the twenty most likely, answered from the approved documents, and a clear list of what not to claim.

PULL FROM THE UNIVERSE
- The product brief entry for the capability, including integrations, architecture and pricing.
- Customer questions and objections on calls about the topic in the last two quarters.
- Battlecard Feature Comparison sections where competitors offer something similar.
- Claims in the register related to the capability.

BUILD
- Twenty questions with answers and the source section, ordered by how often the topic came up on calls.
- The "we do not" list: integrations, environments and outcomes the brief does not support.
- Questions the brief cannot answer, for product to fill.

OUTPUT
The FAQ, the do-not list, the open questions.

GROUNDING
Answer only from the Universe and cite it. Where the brief is silent, say "not in the brief" and add it to the open questions.
```

### Write the talk track and competitive angle

```
Using Calven MCP, write the talk track for the capability and how it changes our competitive position.

FILL IN
- Capability: [capability]
- Competitors: [the competitors this release touches]

CONTEXT
Reps need a two-minute pitch, a demo storyline and the competitive angle for each competitor this release touches.

PULL FROM THE UNIVERSE
- The messaging for this launch and the product brief entry.
- For each competitor named: the battlecard's Feature Comparison and Where We Lose.
- Deal drivers with category Capability where buyers named the gap this release closes.

BUILD
- The two-minute pitch, leading with the persona's pain.
- A demo storyline in five beats.
- Per competitor: what the release changes (a gap closed, a parity, still behind), and the line to use.
- The lost deals the gap cost, with the buyer's words, for the re-engagement list.

OUTPUT
The talk track, then the competitive section.

GROUNDING
Cite the brief, messaging, battlecard or driver behind each line. Do not claim parity or advantage the battlecard does not record.
```

### Write the certification and list stale assets

```
Using Calven MCP, write the launch certification and list the assets this release makes stale.

FILL IN
- Capability: [capability]

CONTEXT
Ten questions and three scenarios on the capability. Then the assets reps use that the release invalidates.

PULL FROM THE UNIVERSE
- The product brief entry and the launch messaging.
- Product drift findings for the product change behind this release.
- Claims in the register the release affects.

BUILD
- The quiz with an answer key tied to sections.
- The stale asset list: document, what changed, the finding's confidence.

OUTPUT
The quiz and the list.

GROUNDING
Questions are answerable from the Universe. Stale assets come only from drift findings and the claims register.
```

## Advanced prompts

### Size the pipeline the launch can reopen

```
Size how much lost and stalled pipeline this launch could reopen, so the field goes after it on day one. Use Calven MCP for the deals we lost for lack of the capability and the buyers' own words.

FILL IN
- Capability: [the capability being launched]
- Lookback: [window, e.g. last 18 months]
- Reopen assumptions: [your guess at how many lost buyers would take a call, or write "use ranges"]

CONTEXT
Launches usually get a press release and a training. The fastest revenue is the buyers who already told us this was the reason they said no.

FROM CALVEN
- Lost CRM deals in the lookback with loss reason Missing feature or the related product feedback, with amount, segment, close date and the competitor they went to. Page through all of them.
- Deal drivers and buyer quotes from those deals that name the missing capability.
- The product brief entry for the capability: what it does and what it doesn't.

MODEL
- Screen each deal: did the buyer name this capability, something close, or something it still doesn't cover? Use the brief's limits to cut honestly.
- For the qualifying deals, model three stages: buyer takes a call, re-enters a cycle, wins. Give low, expected and high rates for each, as my assumptions or yours, labelled.
- Discount deals that went to a competitor with a long contract, and deals older than a year.
- If you can run code, run a Monte Carlo over the stage rates and show the distribution of recovered revenue.

OUTPUT
A ranked list of the deals to reopen (account, amount, what they said, owner), the recovered-revenue range, and a 50-word reopen message per persona built from the buyers' own complaint.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't count a deal unless a quote, driver or feedback field ties it to this capability.
```

### Run a failure mode analysis on day one

```
Run a failure mode and effects analysis on the launch from the field's side: every way a rep could get it wrong, scored, and the worst ones fixed before day one. Use Calven MCP for what the capability does and doesn't do, the stale documents and the objections it will draw.

FILL IN
- Capability: [the capability being launched]
- Launch date: [date]
- Field touchpoints: [where reps will talk about it: first calls, demos, renewals, RFPs]

CONTEXT
Most launch problems aren't the product. They're a rep promising what it doesn't do, an old one-pager still in circulation, or an objection nobody prepared for.

FROM CALVEN
- The product brief entry: capabilities, integrations, pricing and packaging, known weaknesses.
- Drift findings: published documents the change left stale.
- Objections and questions buyers raised on calls about this area, verbatim.
- Competitors with something similar, from their dossiers.

METHOD
- For each touchpoint, list the failure modes: over-promise, wrong pricing, stale asset sent, unprepared objection, wrong persona pitched, competitor comparison fumbled.
- Score each 1 to 10 on severity, likelihood and detection (10 means nobody would notice until the customer does). Multiply into a risk priority number.
- For the top five, write the control: an FAQ line, a do-not-say rule, an asset to pull, a certification question.
- Re-score with the control in place.

OUTPUT
The FMEA table sorted by risk, the five controls with before and after scores, and a one-page day-one checklist for managers.

GROUNDING
Scores are your judgement; label them. Every capability limit cites the product brief and every objection cites a quote. Don't invent a limitation the brief doesn't state.
```

### Put reps through a launch gauntlet

```
Build a launch gauntlet: five back-to-back buyer conversations about the new capability, each harder than the last, scored against the product brief. A rep is cleared to pitch when they pass. Use Calven MCP for the buyers, the facts and the competitor angle.

FILL IN
- Capability: [the capability being launched]
- Pass mark: [e.g. 80 percent, no fails on accuracy]

CONTEXT
A launch quiz checks recall. A gauntlet checks whether a rep can explain the capability to an actual buyer, handle the limits honestly and not fold when a competitor comes up.

FROM CALVEN
- The product brief entry for the capability, including what it doesn't do and pricing.
- The positioning and messaging for the launch, if published.
- The personas most likely to care, with their canvases.
- Competitors with a similar offer, from their battlecards.

SIMULATE
- Station 1: a friendly user persona asks what it does. Station 2: a buyer persona asks what it costs and what's included. Station 3: a technical buyer probes integrations and limits. Station 4: a buyer says a competitor already has it. Station 5: an economic buyer asks why it matters to their number.
- Play each persona in character. One question, the rep answers, one follow-up.
- Score each station on accuracy (pass or fail against the brief), clarity, persona fit and honesty about limits.
- Package it as a script a manager or the rep can run alone in an AI tool. If you can build files, make it a reusable prompt plus a scoring sheet.

OUTPUT
The gauntlet script, model answers per station with sources, the scoring sheet, and the pass rule.

GROUNDING
Model answers and every persona question trace to the brief, the canvases or the battlecards, cited. Don't let a station test a fact the brief doesn't contain.
```

## Ad hoc questions

- What does the product brief say [capability] does?
- Who is [capability] for, and what pain does it answer?
- What is the approved one-liner for the [capability] launch?
- What do we not support with [capability]?
- Which competitors already offer something like [capability]?
- How many deals did we lose for lack of [capability]? Quote the buyers.
- Which published documents went stale after the [capability] release?
- What questions did buyers ask about [related topic] on calls last quarter?
- What is the pricing or packaging for [capability]?
- Which persona should reps lead with for [capability]?
- Write five quiz questions on [capability] with answers.
- Which battlecards need updating because of [capability]?
- Which open deals mention [capability] in their product feedback or tech requirements?
- Which competitor launched something like [capability] most recently, and what did they claim?
- Which persona has [capability]'s main pain on their canvas, word for word?
- What did buyers who lost to [competitor] say about [capability] specifically?
- Which claims on our site does the [capability] launch make outdated?
- Which customer quotes could serve as early proof for [capability]?
