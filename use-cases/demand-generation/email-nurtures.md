# Email nurtures


You're building a sequence that moves a contact from first touch to a sales conversation, or from trial to purchase, with each email answering the buyer's question at that stage. You walk away with a sequence per persona and stage you can defend line by line: this pain is real, this proof is approved, this is what we actually sell. Calven replaces the last deck and a two-year-old persona slide, so the emails stop reading like every other vendor's.

## Prompts

### Map the buyer journey for the nurture

```
Using Calven MCP, build the journey map for an email nurture aimed at the persona in the segment below.

FILL IN
- Persona: [persona]
- Segment: [segment]
- Entry: [how contacts entered the list: downloaded a guide, attended a webinar, started a trial]

CONTEXT
I am designing a nurture for contacts who entered the list as described above. I need to know what this buyer needs to hear at each stage before I design the emails.

PULL FROM THE UNIVERSE
- The persona's canvas: goals and KPIs, pains, jobs to be done, objections, messaging hooks.
- Our messaging matrix for this persona by funnel stage.
- What customers in this persona said on calls about the problem, the alternatives and the decision, with verbatim quotes.

BUILD
- One row per stage (awareness, consideration, evaluation, decision): the question the buyer is asking, the pain that is live, the objection most likely, what they need to believe to move on, and the proof that moves them.
- Under each row, the two or three customer phrases to reuse.

OUTPUT
A journey table I can design the sequence from, with sources per cell.

GROUNDING
Ground every pain, objection and quote in the Universe and cite it. Do not invent stage behaviour the canvas or the calls do not support. If a stage has no evidence, say so.
```

### Design the nurture sequence

```
Using Calven MCP, design the email nurture described below.

FILL IN
- Emails: [number of emails]
- Persona: [persona]
- Segment: [segment]
- Conversion event: [conversion event the nurture ends in]
- Entry: [how contacts entered the list]
- Weeks: [number of weeks the sequence runs]
- Exit rule: [when sales takes over]

CONTEXT
The nurture has the number of emails above, for the persona in the segment, and ends in the conversion event. Contacts entered the list as described above. The sequence runs over the weeks above. Sales takes over at the exit rule.

PULL FROM THE UNIVERSE
- The messaging matrix for this persona by stage, and the objection handling section.
- The buying triggers and objections customers raise most, from the voice-of-customer read.
- The proof points in our positioning and the customer quotes behind them.

BUILD
For each email: its single job, the stage it serves, the pain or trigger it opens on, the message it carries, the proof it uses, the CTA, and the objection it pre-empts. Then the cadence and the branching rule (clicked, did not open, replied).

OUTPUT
A sequence plan as a table, one row per email, with the source for the message and the proof.

GROUNDING
Use only messaging, proof and quotes from the Universe and cite them. Do not promise capabilities that are not in the product brief. Flag any email where the Universe gives you nothing to say.
```

### Audit existing content for gaps

```
Using Calven MCP, audit our existing content against the nurture plan and find the gaps.

FILL IN
- Persona: [persona]
- Assets: [paste the asset list: title, format, one-line summary, stage we think it serves]

CONTEXT
The assets are the ones we already have. I want to know which ones fit the sequence, which need rework, and what is missing.

PULL FROM THE UNIVERSE
- The messaging matrix for the persona by stage.
- The objections customers raise most for this persona, and which ones our messaging covers.
- The claims our published content makes and their proof status.

CHECK
- Map each asset to the stage and message it serves, and say whether it is on-message.
- Flag assets that make a claim without proof or that use language we have moved away from.
- List the stages, objections and pains in the plan with no asset behind them.

OUTPUT
Two tables: the mapped assets with a verdict (use, rework, drop), and the gaps with a suggested asset for each.

GROUNDING
Judge only against the messaging and claims in the Universe and cite what each flag conflicts with. Do not invent assets we have. If a gap cannot be judged from the Universe, say so.
```

### Write one nurture email

```
Using Calven MCP, write one email of the nurture described below.

FILL IN
- Email: [email number in the sequence]
- Persona: [persona]
- Segment: [segment]
- Job: [the email's single job]
- Stage: [buying stage]
- Objection: [objection to pre-empt]
- CTA: [CTA]

CONTEXT
The nurture is for the persona in the segment. This email does the job above, serves the stage and must pre-empt the objection. It ends on the CTA. Subject line under 50 characters, body under 150 words, one link.

PULL FROM THE UNIVERSE
- The value proposition for this persona and stage from the messaging matrix.
- The words customers use for this pain, with one verbatim quote I can cite.
- The product brief entry for what the email mentions, so nothing is overstated.

WRITE
- Three subject lines.
- The body in the customer's words, leading with the pain, one proof point, one CTA.
- The one line that would make this persona stop reading, if any, and the fix.

OUTPUT
The three subject lines, the email, and a note on which pillar and proof it leans on.

GROUNDING
Use only claims in the product brief and messaging, and quotes from the Universe, each cited. Do not invent outcomes, numbers or customer names.
```

### Fact-check the nurture

```
Using Calven MCP, fact-check this nurture before it ships.

FILL IN
- Sequence: [paste the full sequence]

CONTEXT
I need every product, pricing and integration claim confirmed.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Recent changes to our product and any published document they left stale.

CHECK
- Mark each claim correct, wrong, stale or not in the brief.
- Give the accurate wording for each wrong or stale claim.

OUTPUT
The sequence annotated inline, then a short list of claims a human must still verify.

GROUNDING
Confirm only against the product brief and product changes in the Universe and cite the section. Where the brief is silent, say "not in the brief" rather than guessing.
```

### Review the nurture as the buyer

```
Using Calven MCP, review this nurture as the persona below.

FILL IN
- Persona: [persona]
- Sequence: [paste the full sequence in order]

CONTEXT
I want the buyer's honest reaction to each email and to the sequence as a whole.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.

REACT
- For each email: what lands, what reads as vendor marketing, the line they would not believe, and whether they would open the next one.
- For the sequence: where it loses them, where it repeats itself, and which email they would forward to a colleague.

OUTPUT
The findings per email with severity, then the three edits that matter most.

GROUNDING
React only from what the Universe says about this persona. Do not invent reactions the canvas does not support.
```

### Check the nurture against a competitor

```
Using Calven MCP, check this nurture against the competitor below.

FILL IN
- Competitor: [competitor]
- Sequence: [paste the sequence]

CONTEXT
Many contacts on this list are evaluating the competitor.

PULL FROM THE UNIVERSE
- The competitor's battlecard: where we win, where we lose, landmines, objection handling.
- Why we lost deals to them, from win/loss, with the buyer's words.

CHECK
- Where the sequence walks into a known loss reason without addressing it.
- Where a landmine could be set in one line without naming the competitor.
- Where a claim would not survive a side-by-side.

OUTPUT
The sequence annotated, then the two emails to change and the suggested lines.

GROUNDING
Use only the battlecard and win/loss evidence in the Universe and cite it. Do not invent competitor weaknesses.
```

### Rewrite an underperforming email

```
Using Calven MCP, tell me why the email below underperforms and rewrite it.

FILL IN
- Email number: [email number in the sequence]
- Metric: [open rate / click rate / reply rate]
- Sequence average: [sequence average for that metric]
- Job: [the email's job]
- Persona: [persona]
- Stage: [buying stage]
- Email: [paste the email and its numbers]

CONTEXT
The email's metric is below the sequence average. Its job is the one above, for the persona at the stage.

PULL FROM THE UNIVERSE
- The objections and pains for this persona at this stage.
- The language customers use for this topic, and where our messaging has a language gap.

DIAGNOSE AND REWRITE
- The most likely reason it fails, grounded in the persona and the calls.
- The rewrite, in the customer's words, same job and CTA.

OUTPUT
The diagnosis in three lines, then the rewrite.

GROUNDING
Ground the diagnosis in the Universe and cite it. If the Universe does not explain the drop, say so and suggest what to test instead.
```

## Advanced prompts

### Design an A/B test the list can power

```
Design an A/B test for my nurture that my list can actually power, and pick the variants worth testing. Use Calven MCP for the persona's reaction to each variant and the customer language behind it.

FILL IN
- Nurture: [paste the sequence or the email to test]
- Persona: [persona]
- List size: [contacts entering the nurture per month]
- Baseline: [paste current open, click and reply or meeting rates, per email]

CONTEXT
Most nurture tests end in "no significant difference" because the list was too small or the variants were too alike. I want a test that can return an answer, on a difference that matters.

FROM CALVEN
- The persona's top pains and objections from the canvas and from call quotes.
- A persona review of the candidate variants you write.

METHOD
- Write four variants that each differ on one real idea (the pain, the proof, the ask), not on word swaps. Run them past the persona review and keep the two it separates most clearly.
- Pick the primary metric. Replies or meetings beat opens if the volume allows.
- Run a power calculation: the minimum detectable effect at 80% power and 5% significance for each candidate metric, given my list size and baseline. Show how many weeks each needs.
- If you can run code, show the calculation and a chart of weeks to result against effect size.

OUTPUT
A test plan: hypothesis, the two variants, metric, sample per arm, duration, stop rule, and what I change in the nurture for each outcome.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The persona review picks the variants; it doesn't predict the lift, so don't present it as one.
```

### Find where the nurture loses people

```
Find the email where my nurture starts losing people, with a survival analysis on my own data. Use Calven MCP to explain why that email loses them.

FILL IN
- Engagement export: [attach a CSV: contact, entry date, email step, opened, clicked, unsubscribed, became opportunity]
- Nurture: [paste the emails in order]
- Persona: [persona]

CONTEXT
The email platform shows an average open rate per email. It hides when people actually stop paying attention, and whether the ones who stay are the ones who buy.

FROM CALVEN
- The messaging matrix for the persona by stage, to place each email on the journey.
- The persona's pains and objections from the canvas, and objection quotes from calls.
- Which contacts in the export are CRM contacts on won deals.

METHOD
- Treat the last engaged step as survival time and unsubscribe or silence as the event. Plot a Kaplan-Meier curve of engagement by step, split by segment or source if the export allows.
- Find the step where the hazard jumps. Check whether contacts who reached opportunity follow a different curve.
- Read the email at that step against its matrix stage and the persona's objections: wrong stage, an objection left open, an ask that comes too early.
- If you can run code, use the lifelines library and plot the curves.

OUTPUT
The survival chart, the drop-off step with the evidence for why, and a rewrite brief for that email.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The curve comes only from my export; the diagnosis cites the canvas, the matrix or quotes. Don't link a contact to a deal the CRM doesn't link.
```

### Score the sequence on the forces of switching

```
Score my nurture on the four forces that decide whether a buyer switches: push, pull, anxiety and habit. Use Calven MCP for what really pushes, pulls and worries our buyers.

FILL IN
- Nurture: [paste the sequence]
- Persona: [persona]
- Alternative: [competitor, or the status quo, e.g. "spreadsheets and the current process"]

CONTEXT
Most nurtures pile on pull (features, benefits) and say nothing about the anxiety of switching or the comfort of the status quo. That's usually why a sequence gets opens and no meetings.

FROM CALVEN
- Call quotes for the persona tagged Pain and Buying trigger (push) and Gain (pull).
- Quotes tagged Objection and the deal drivers that hurt us (anxiety), with n.
- The alternative's battlecard, or the competitive alternatives in our positioning (habit).

METHOD
- Build the forces diagram for this persona from the evidence: three to five items per force, each with its quote or source.
- Score each email on which force it moves, how hard, and whether it moves the wrong one (an email that adds anxiety).
- Find the force the sequence never touches and where in the sequence it should land.
- Write the missing email in the buyer's words.

OUTPUT
The forces diagram, a scored table of email by force, the gap, and the new email ready to drop in.

GROUNDING
Every force item cites a quote, a deal driver or the battlecard. Mark your reading of an email as your judgement, and don't invent a quote to fill a force.
```

## Ad hoc questions

- What does [persona] care about at the evaluation stage, and what do they object to?
- Which pains did [persona] name most on calls this quarter? Give me the quotes.
- What is our approved value proposition for [persona] at the awareness stage?
- Give me five subject lines for [persona] in their own words, about [pain].
- Is "[claim]" in our product brief?
- Which of our messaging pillars has the weakest customer-language fit?
- Which objections for [persona] does our messaging not cover?
- What buying triggers show up most for [segment] accounts?
- Does [persona] read [a publication or community]? Where do they learn?
- Which proof point should I use for [pillar] with [persona]?
- Rewrite this email in the words our customers use: [paste]
- Would [persona] open an email with this subject line: "[subject]"?
- What did we change in the product in the last 90 days that a nurture might still get wrong?
- Which stage of the funnel has the least customer evidence behind it for [persona]?
- Which objection do won deals get past that lost deals never do?
- What does [persona] say right before they buy, from quotes tagged Buying trigger?
- Which quotes with a Time-to-value highlight could carry a mid-nurture email?
- Which stage of [persona]'s messaging matrix row is empty or thinnest?
- What's the most common loss reason on deals from [lead source], with n?
