# Email nurtures

**Team:** Demand generation · also product marketing, marketing operations, content marketing
**Impact:** High. A nurture runs for months to thousands of contacts; one sequence written in the buyer's words and on the approved story compounds every week it runs.
**Prerequisites:** strategy documents approved (messaging with its persona × stage matrix, ICP, product brief), personas approved. Better with call transcripts ingested (quotes, themes) and win/loss surveys running (deal drivers). CRM connected adds the stage and persona data behind the sequence design.

## What the team is trying to do

Move a contact from a first touch to a sales conversation, or from a trial to a purchase, with a sequence of emails that each answer the question the buyer has at that stage. Done means a sequence per persona and stage that the team can defend line by line: this pain is real, this proof is approved, this is what we actually sell. Without the company's own knowledge the writer works from the last deck and a persona slide from two years ago, so the emails read like every other vendor's.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the audience | Pick the persona and segment the nurture is for, confirm they are in profile | The approved ICP and the persona canvas: who they are, what they are measured on, where they learn | ICP document, persona |
| 2 | Map the journey | Lay out the stages (awareness, consideration, evaluation, decision, onboarding) and what the buyer needs at each | The messaging matrix (persona × funnel stage), the persona's jobs to be done, pains and objections, what buyers said at each stage on calls | Messaging document, persona canvas, quotes, themes |
| 3 | Set the goal and exit rules | Decide the conversion event, the exit criteria, the hand-off to sales | Which contact roles and stages convert, which personas sit on won deals | Persona dashboard, CRM deals and contacts |
| 4 | Design the sequence | Number of emails, cadence, the single job of each email, the CTA ladder | Objections by stage to pre-empt, buying triggers to lead with, proof points to place | Messaging (objection handling), voice-of-customer dashboard (buying triggers, objections), positioning (proof points) |
| 5 | Audit existing content | List the assets the team already has and map them to stages | Calven does not hold the content library. It supplies the claims and proof each asset must carry, so the audit can check each asset against the approved story | Claims, product brief, positioning |
| 6 | Content gap analysis | Find stages or objections with no asset, decide what to build | Objections and pains with no coverage in messaging; themes customers raise that no pillar answers | Messaging dashboard (objections, language gaps), voice-of-customer themes |
| 7 | Write the emails | Draft subject lines, body, CTA per email | Drafts from the approved messaging in the customer's words; verbatim quotes as proof; the persona's messaging hooks | Messaging, quotes, persona canvas, product brief |
| 8 | Fact-check | Confirm every product claim, price and integration | Each claim checked against the product brief and the claims register | Product brief, claims, product changes |
| 9 | Review as the buyer | Read the sequence as the persona would | Persona review with severity-rated findings per email | `review_against_personas`, persona canvas |
| 10 | Competitive check | Make sure the sequence holds up for contacts evaluating a rival | Battlecard landmines and "where we lose" for the competitors in that segment | Competitor battlecard, deal drivers |
| 11 | Build and launch | Load into the marketing automation tool, set triggers, QA | Calven does not help here | |
| 12 | Measure and iterate | Read open, click, reply and conversion rates, rewrite the weak emails | Why the weak email is weak: the objection it triggers, the language gap, what buyers at that stage actually say | Quotes, themes, messaging dashboard |

## Recommended prompts

### Step 1 and 2: audience and journey map

```
Using Calven MCP, build the journey map for an email nurture aimed at [persona] in [segment].

CONTEXT
I am designing a nurture for contacts who [entered the list how: downloaded a guide, attended a webinar, started a trial]. I need to know what this buyer needs to hear at each stage before I design the emails.

PULL FROM THE UNIVERSE
- The [persona] canvas: goals and KPIs, pains, jobs to be done, objections, messaging hooks.
- Our messaging matrix for this persona by funnel stage.
- What customers in this persona said on calls about the problem, the alternatives and the decision, with verbatim quotes.

BUILD
- One row per stage (awareness, consideration, evaluation, decision): the question the buyer is asking, the pain that is live, the objection most likely, what they need to believe to move on, and the proof that moves them.
- Under each row, the two or three customer phrases to reuse.

OUTPUT
A journey table I can design the sequence from, with sources per cell.

GROUNDING
Ground every pain, objection and quote in the Universe and cite it. Do not invent stage behaviour the canvas or the calls do not support. If a stage has no evidence, say so.

[name the persona and segment, and how contacts enter the nurture]
```

### Step 4: sequence design

```
Using Calven MCP, design a [number]-email nurture for [persona] in [segment] that ends in [conversion event].

CONTEXT
The contacts [entered how]. The sequence runs over [weeks]. Sales takes over when [exit rule].

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

[name the persona, segment, entry point, conversion event, number of emails and weeks]
```

### Step 5 and 6: content audit and gap analysis

```
Using Calven MCP, audit our existing content against the nurture plan and find the gaps.

CONTEXT
Below is the list of assets we already have (title, format, one-line summary, stage we think it serves). I want to know which ones fit the sequence, which need rework, and what is missing.

PULL FROM THE UNIVERSE
- The messaging matrix for [persona] by stage.
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

[paste the asset list]
```

### Step 7: write the emails

```
Using Calven MCP, write email [n] of the nurture for [persona] in [segment].

CONTEXT
This email's job is [the single job]. It serves the [stage] stage and must pre-empt [objection]. The CTA is [CTA]. Subject line under 50 characters, body under 150 words, one link.

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

[name the email's job, stage, objection and CTA]
```

### Step 8: fact-check

```
Using Calven MCP, fact-check this nurture before it ships.

CONTEXT
Below is the full sequence. I need every product, pricing and integration claim confirmed.

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

[paste the sequence]
```

### Step 9: review as the buyer

```
Using Calven MCP, review this nurture as [persona].

CONTEXT
Below is the full sequence in order. I want the buyer's honest reaction to each email and to the sequence as a whole.

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review on the text.

REACT
- For each email: what lands, what reads as vendor marketing, the line they would not believe, and whether they would open the next one.
- For the sequence: where it loses them, where it repeats itself, and which email they would forward to a colleague.

OUTPUT
The findings per email with severity, then the three edits that matter most.

GROUNDING
React only from what the Universe says about this persona. Do not invent reactions the canvas does not support.

[paste the sequence]
```

### Step 10: competitive check

```
Using Calven MCP, check this nurture against [competitor].

CONTEXT
Many contacts on this list are evaluating [competitor]. Below is the sequence.

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: where we win, where we lose, landmines, objection handling.
- Why we lost deals to them, from win/loss, with the buyer's words.

CHECK
- Where the sequence walks into a known loss reason without addressing it.
- Where a landmine could be set in one line without naming the competitor.
- Where a claim would not survive a side-by-side.

OUTPUT
The sequence annotated, then the two emails to change and the suggested lines.

GROUNDING
Use only the battlecard and win/loss evidence in the Universe and cite it. Do not invent competitor weaknesses.

[paste the sequence and name the competitor]
```

### Step 12: iterate on a weak email

```
Using Calven MCP, tell me why email [n] underperforms and rewrite it.

CONTEXT
Email [n] has [open rate / click rate / reply rate] against a sequence average of [average]. It is below. Its job is [job], for [persona] at the [stage] stage. The email is at the bottom.

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

[paste the email and its numbers]
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

## Good practice

- Name the persona as Calven names it. "Marketing leaders" returns nothing; "VP of Marketing" returns the canvas.
- Design the sequence before writing an email. Ask for the journey table first, then one email at a time with its single job.
- Paste the whole sequence for review and fact-check, not one email. Repetition and claim drift show up across emails.
- Ask for the quote behind every proof point and keep it verbatim. Polished quotes stop being evidence.
- Keep the AI tool's own knowledge out of the proof. If the Universe has no quote on a topic, the email leads with the pain, not an invented stat.
- Rerun the fact-check after any product release. Product changes and drift findings tell you what went stale.
- Save the workflow prompts as snippets with your persona and segment filled in. The sequence for the next segment starts from the same recipe.

## Not covered today

- Building, scheduling and sending the emails. That stays in the marketing automation tool.
- Performance numbers. Opens, clicks and replies come from the email tool; paste them into the iterate prompt.
- The content library itself. Calven holds the claims and proof an asset must carry, not the assets.
- Editing the messaging document from the AI tool. A gap the nurture exposes is fixed in Calven by the messaging agent and the PMM who approves it.
