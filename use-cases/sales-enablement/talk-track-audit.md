# Talk track audit


The talk track you trained on has drifted since the week after training, and you want to know where. You get a scored audit: each section marked used, unused or contradicted, the objections it doesn't cover, and the retraining list. Calven compares what reps actually say with what buyers actually raise, instead of surveying reps about what they think they say.

## Prompts

### Audit the talk track against real calls

```
Using Calven MCP, audit our talk track against what reps say and what buyers raise.

FILL IN
- Talk track: [paste the talk track]
- Window: [time window, e.g. last quarter]

CONTEXT
The talk track is the one reps are trained on, section by section. I want to know which sections reps actually use, which answer what buyers say now, and which are silent.

PULL FROM THE UNIVERSE
- The messaging document (pillars, value propositions by persona, objection handling) so the talk track is checked against the approved version.
- Pillar pull-through in rep calls for the window from the messaging dashboard, and vendor quotes grouped by category.
- Customer objections and pains raised on calls in the window, with frequency, and the language gaps the messaging dashboard reports.

CHECK
- Per section: used by reps (with examples), unused, or contradicted (reps say something else).
- Per section: whether it answers an objection or pain buyers raise, and how often that comes up.
- Objections and pains with no section at all.

OUTPUT
A table: section · used? · answers what? · evidence · verdict (keep, retrain, rewrite, add).

GROUNDING
Cite every quote and every number with its n and window. Do not infer use from absence; if no vendor quotes exist for a section, say "no evidence recorded".
```

### See which lines show up in wins

```
Using Calven MCP, show me which talk track lines show up in won deals and which in lost ones.

FILL IN
- Talk track: [paste the talk track section headings]
- Window: [time window, e.g. last two quarters]

CONTEXT
I want to know what buyers credit when we win and what they fault when we lose, so the talk track leads with what works.

PULL FROM THE UNIVERSE
- Deal drivers for the window, by direction (helped, hurt), rank and category (Competitive, Capability, Experience, Commercials), with the evidence quote.
- The win/loss dashboard's top win drivers and top loss drivers.

BUILD
- The five drivers that decided wins and the five that decided losses, each with deals (n) and a buyer quote.
- For each, the talk track section that should carry it, and whether it does today.

OUTPUT
Two lists with the mapping to the talk track.

GROUNDING
Use dashboard counts with n and window. Quote buyers verbatim. Do not rank by your own count of rows.
```

### Flag claims that went stale

```
Using Calven MCP, check the talk track for claims that are wrong, stale or unsupported.

FILL IN
- Talk track: [paste the talk track]

CONTEXT
Every product claim, integration, number and comparison in the talk track needs checking.

PULL FROM THE UNIVERSE
- The product brief, including known weaknesses.
- The claims register, with proof status.
- Product changes in the last 90 days and the documents they left stale.

CHECK
- Mark each claim confirmed, wrong, stale, or unsupported, with the source.

OUTPUT
The talk track annotated inline, then the list of lines to stop saying.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief".
```

### Turn the audit into a retraining plan

```
Using Calven MCP, turn this audit into a retraining plan.

FILL IN
- Audit: [paste the scored audit]

CONTEXT
I need the sessions, in priority order, with the evidence from the audit to show reps.

PULL FROM THE UNIVERSE
- The approved line for each section marked retrain or rewrite, from the messaging document.
- The buyer quotes behind each objection marked add.

BUILD
- Up to four sessions, each: topic, why (the evidence), the approved lines to drill, the buyer quotes to play back, the certification question.

OUTPUT
The plan.

GROUNDING
Approved lines come from the messaging document only. Sections marked add go to PMM as gaps, not into a session.
```

## Advanced prompts

### Replay lost deals with the approved track

```
Replay last quarter's lost deals as if the rep had said the approved talk track, and tell me which losses it could have changed. Use Calven MCP for what the rep said, what the buyer decided on and the approved story.

FILL IN
- Window: [window, e.g. last quarter]
- Segment: [segment, or "all"]

CONTEXT
I'm about to retrain the team on the talk track. Before I spend their time, I want to know whether the talk track is the problem, the reps are the problem, or neither.

FROM CALVEN
- Lost deals in the window with a completed win/loss response, and the deal drivers ranked as deciding.
- Rep quotes from calls on those deals, verbatim.
- The approved messaging: value pillars, persona value propositions and objection handling.

METHOD
- For each lost deal, name the deciding driver in the buyer's words.
- Compare what the rep said with what the approved track says at that moment. Classify the gap: rep went off-track, rep was on-track and it didn't work, or the track says nothing about it.
- Run the counterfactual: given the buyer's stated reason, would the approved line plausibly have changed the outcome? Rate it: likely, possible, no (the driver was price, timing or a missing feature no line fixes).
- Total the three buckets with the pipeline in each.

OUTPUT
A table, one row per lost deal: deciding driver, what the rep said, what the track says, gap type, counterfactual rating, amount. Then the verdict in three lines: retrain, rewrite the track, or neither, with the pipeline behind each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counterfactual ratings are your judgement, so mark them that way, and quote the buyer's deciding reason verbatim.
```

### Put a weak pillar on trial

```
Put one value pillar on trial: a prosecutor argues we cut it from the talk track, a defender argues we keep it, and a judge rules on the evidence. Use Calven MCP for the pillar's pull-through on calls, the buyers' language and the deals behind it.

FILL IN
- Pillar: [pillar]
- Window: [window, e.g. last two quarters]

CONTEXT
Reps rarely say this pillar and nobody knows if that's a training failure or the market telling us something. I want both cases made properly before anyone decides.

FROM CALVEN
- The pillar's pull-through on rep calls and its customer-language fit from the messaging dashboard, with n.
- Customer quotes that touch the pillar's theme, positive and negative, and the themes they sit in.
- Deal drivers that mention the pillar's value, helped or hurt.

METHOD
- Prosecution: the strongest case for cutting it. Low pull-through, weak language fit, buyers who don't care. Evidence only.
- Defence: the strongest case for keeping it. Deals it decided, quotes that prove it, why reps might avoid it for reasons a rewrite fixes.
- Each side gets one rebuttal.
- The judge rules: keep as is, keep and rewrite, demote to proof point, or cut. The judge must name the single piece of evidence that decided it and what new evidence would reverse the ruling.

OUTPUT
The two cases (under 200 words each), the rebuttals, the ruling, and if the ruling is rewrite, the new pillar line in the buyer's words.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Neither side may cite a quote or deal that isn't on record.
```

### Map every line on frequency and wins

```
Map every line in the talk track on two axes, how often reps say it and how often it shows up in won deals, and tell me what to push, fix and drop. Use Calven MCP for rep quotes on calls and deal outcomes.

FILL IN
- Talk track: [paste the current talk track, line by line]
- Window: [window, e.g. last 6 months]

CONTEXT
The talk track has grown to forty lines and nobody can say which ones earn their place. I want a map I can put in front of the sales leader.

FROM CALVEN
- Rep quotes on calls in the window, with category and the deal they belong to.
- The status of those deals, won, lost or open, from the CRM.
- The win rate for the period from the win/loss dashboard, with n, as the baseline.

MODEL
- Match each rep quote to the closest talk track line, or to "not in the track". Show the match for a sample of ten so I can check it.
- For each line: share of calls where it was said, and win rate on closed deals where it was said versus the baseline.
- Plot a 2x2. Said often and wins: protect. Said rarely and wins: train. Said often and doesn't win: fix or drop. Said rarely and doesn't win: cut.
- Do the same for the "not in the track" lines reps say that win. Those are candidates to add.
- If you can run code, draw the chart with each line labelled and bubble size for deals touched.

OUTPUT
The 2x2 chart, a table behind it, and three lists: lines to cut, lines to train, lines reps invented that belong in the track.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Flag lines with fewer than ten calls as too thin to place.
```

## Ad hoc questions

- Which pillar do reps say least on calls?
- What do reps say instead of our approved line on "[objection]"?
- Which objections came up on more than five calls this quarter?
- Where does our messaging use words customers do not?
- Which proof points do buyers actually repeat back?
- What decided our losses last quarter, in the buyer's words?
- Is "[claim]" in the product brief, and is it still true after the last release?
- Which competitor comes up most on calls, and does the talk track address them?
- Show me every discovery question reps asked last month.
- What did buyers say about pricing on calls this quarter?
- Which talk track section has no customer evidence behind it?
- Which line do reps say most that isn't in the approved talk track?
- Which competitor's framing shows up in our reps' own words?
- What proof point do reps cite that the product brief doesn't support?
- Which persona's value proposition do reps almost never say on calls?
- Which objection did the talk track answer a year ago that buyers stopped raising?
- What's the gap between our messaging's top pain and the pain buyers name first on calls?
