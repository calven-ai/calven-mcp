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
