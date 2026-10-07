# Interview questions and case exercises


You're running a competency interview and a practical exercise (a mock discovery call, a pitch, an objection round, a pipeline case, a messaging critique) and you don't want to invent a prospect on the spot. You get an interview kit per role: competency questions mapped to the scorecard, a candidate brief shared 24 hours ahead, an interviewer guide to play the buyer, and a shared rubric. Calven builds it on a real persona and a real competitor, so you're testing the job the hire will actually do.

## Prompts

### Write competency questions set in our market

```
Using Calven MCP, write competency interview questions for the role below anchored in our market.

FILL IN
- Role: [role]
- Competencies: [paste the scorecard competencies]
- Persona: [persona]

CONTEXT
I want two behavioural questions per competency that use our real buyers, competitors and ICP as the setting, plus what a strong answer contains.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, objections, KPIs.
- The Tier 1 battlecards: landmines, where we lose, objection handling.
- The ICP: buying triggers, disqualifiers.
- The top loss drivers with a buyer verbatim.

BUILD
- Per competency: two questions, the elements of a strong answer, the red flags.

OUTPUT
The question bank grouped by competency, with sources for the context used.

GROUNDING
Use only personas, battlecards, ICP and win/loss evidence in the Universe and cite them. Do not expect the candidate to know internal facts.
```

### Build a mock discovery call exercise

```
Using Calven MCP, build a mock discovery call exercise for candidates for the role below.

FILL IN
- Role: [role]
- Persona: [persona]
- Competitor: [competitor]

CONTEXT
The candidate gets a brief 24 hours ahead and runs a 20-minute discovery call with an interviewer playing the buyer. I need the candidate brief, the interviewer guide and the scenario.

PULL FROM THE UNIVERSE
- The persona's canvas: company objectives, KPIs, pains, objections, how they talk.
- An ICP-fit account profile: segment, size, vertical, a plausible buying trigger from the ICP.
- The product brief at summary level and the category from positioning.
- The competitor's battlecard: their positioning, the objections buyers raise when they are in the deal.
- Three verbatim customer quotes that show how this persona describes the problem.

BUILD
1. Candidate brief (one page): the buyer's role and company, the situation and trigger, what they already use, our product in three sentences, the category.
2. Interviewer guide (two pages): how to open, the pains to reveal only when asked well, the three objections to raise and when, the competitor mention to drop, the lines to say verbatim from the quotes, what to withhold if the candidate does not ask.
3. The one trap: a question the candidate should ask that exposes the competitor's weakness, from the battlecard's discovery questions.

OUTPUT
The three parts, with sources for the persona, quotes and battlecard content.

GROUNDING
Use only the Universe for the persona's behaviour, the quotes and the competitor's position, cited. The account is a profile, not a real customer; do not use a real account name.
```

### Write the exercise scoring rubric

```
Using Calven MCP, write the scoring rubric for the exercise below.

FILL IN
- Exercise: [exercise]
- Role: [role]
- Persona: [persona]
- Competitor: [competitor]

CONTEXT
The rubric is for the exercise as run for the role. Four dimensions: discovery quality, persona understanding, competitive handling, accuracy of claims. Scores 1 to 4 with a description per level.

PULL FROM THE UNIVERSE
- The discovery questions in the competitor's battlecard.
- The persona's canvas: pains and objections a strong candidate would uncover.
- The messaging objection handling for the objections in the exercise.
- The product brief's known weaknesses and the claims we do not make.

BUILD
- Per dimension: what a 1, 2, 3 and 4 looks like, with the specific pains, questions, objections and claims from the Universe that mark the levels.

OUTPUT
The rubric as a table.

GROUNDING
Anchor every level in the Universe and cite it. Do not add criteria the Universe cannot support.
```

### Build a pipeline, messaging or objection exercise

```
Using Calven MCP, build the exercise below for the role below.

FILL IN
- Format: [pipeline prioritisation / messaging critique / objection round]
- Role: [role]
- Persona: [persona]
- Competitor: [competitor]

CONTEXT
Pick the format given. Pipeline prioritisation: the candidate gets eight deal summaries at different stages, with ICP fit, competitor and contact coverage, and plans their week. Messaging critique: a PMM candidate reviews a page of our copy against the persona and positioning. Objection round: an SDR candidate answers five brush-offs from the persona.

PULL FROM THE UNIVERSE
- The ICP fit scorecard and disqualifiers; the persona's objections; the competitor's battlecard, where we lose; the messaging pillars and objection handling; the product brief.

BUILD
- The exercise materials with profiles, not real accounts.
- The model answer and the rubric.

OUTPUT
Materials, model answer, rubric, with sources.

GROUNDING
Use only the Universe for personas, objections, ICP rules and messaging, cited. Use profiles, never real account or contact names.
```

## Advanced prompts

### Hide the facts the candidate must uncover

```
Build a mock discovery call as a hidden-information game: the buyer holds five facts the candidate has to uncover, and the score is how many they find. Use Calven MCP for a real persona, real pains and a real competitor.

FILL IN
- Role: [role]
- Persona to play: [persona]
- Competitor in the deal: [competitor]

CONTEXT
Most mock calls reward a confident pitch. Discovery is the skill, and it's measurable: did the candidate find what the buyer didn't volunteer? I want the interviewer to hold secrets and release them only to good questions.

FROM CALVEN
- The persona canvas: goals, pains with impact, objections, jobs to be done.
- A buying trigger from the ICP that fits the persona.
- The competitor's battlecard: their pitch and the discovery questions our battlecard recommends.
- Two or three verbatim customer quotes the interviewer can say in character.

BUILD
- A one-page candidate brief (the account, the meeting's purpose) shared 24 hours ahead. No secrets in it.
- The interviewer's sheet: five hidden facts (the real pain, its cost, the trigger, the competitor already in, the person who signs). For each, the kind of question that unlocks it, a partial answer for a near miss, and a deflection for anything else.
- Scoring: 2 points per fact fully found, 1 per partial, plus points for confirming next steps. A short list of behaviours that lose points (pitching before the pain, leading questions).
- A calibration note: what a typical, good and excellent score looks like.

OUTPUT
The candidate brief, the interviewer sheet, and the score sheet.

GROUNDING
Every hidden fact comes from the canvas, ICP, battlecard or quotes, cited. Don't invent a pain or an objection the persona doesn't have.
```

### Pilot the exercise on synthetic candidates

```
Pilot my case exercise on three synthetic candidates before any real candidate sees it, and check the rubric tells them apart. Use Calven MCP for the market facts that separate a strong answer from a polished wrong one.

FILL IN
- Role: [role]
- The exercise and rubric: [paste them]

CONTEXT
We find out an exercise is broken after three candidates: everyone scores 4 out of 5, or the brief has a hole. A pilot run with known-quality answers catches that in an hour.

FROM CALVEN
- The persona, competitor and product facts the exercise relies on: canvas, battlecard, product brief.
- Our objection handling and messaging matrix, for what a right answer says.
- Claims we must not make, from the product brief and claims marked unsupported.

SIMULATE
- Build three candidates: strong (knows the method, reasons from the brief), average (sound method, generic content), and polished but wrong (fluent, confident, makes a claim the product doesn't support and misses the persona's real objection).
- Have each work the exercise in full, in character, under the time limit.
- Score each with the rubric, criterion by criterion, as two independent interviewers would.
- Analyse the rubric: does each criterion separate strong from polished-but-wrong? Which criteria give everyone the same score? Where would two interviewers disagree?

OUTPUT
The three answers, the score table, a discrimination check per criterion, and the fixes to the brief and rubric.

GROUNDING
The candidates are simulated and labelled as such. Every right answer cites the Universe. Don't invent a product fact to make the exercise work.
```

### Build a pipeline case with a provable answer

```
Build a pipeline review case from anonymised real deals, with traps planted in it, so the case has a right answer I can grade against. Use Calven MCP for real deal shapes, loss patterns and our ICP.

FILL IN
- Role: [role, e.g. AE, sales manager, RevOps]
- Number of deals in the case: [8 to 15]
- Time allowed: [minutes]

CONTEXT
Pipeline cases are usually made up, so the "right" answer is the interviewer's opinion. If the case is built from our real deal patterns with known outcomes, the candidate's calls can be checked against what actually happened.

FROM CALVEN
- Closed deals from the last year with stage history, amount, ICP fit tier, competitors, contact role, loss reason and outcome. Anonymise names and accounts.
- The ICP disqualifiers.
- Win rate and sales cycle by segment from the ICP dashboard, with n.

BUILD
- Pick deals so the set has a known mix: some won, some lost to a competitor, one stalled with no decision, one out of profile, one single-threaded at a late stage.
- Plant three traps: a big deal that fails a disqualifier, a deal with a late-stage competitor nobody flagged, a small deal that's a clear win.
- Present them as a pipeline review as of a date before they closed. Hide the outcomes.
- The task: forecast each (commit, best case, omit), name the risk, and pick the two deals to spend the week on.
- If you can run code, write the case as a CSV and the answer key as a separate file.

OUTPUT
The case file, the candidate instructions, and the answer key with the real outcome and the reasoning that spots each trap.

GROUNDING
Every deal pattern comes from real records, anonymised. Don't invent an outcome; the key shows what happened.
```

## Ad hoc questions

- What objections does [persona] raise most, so I can use them in the role play?
- Give me three verbatim quotes of how [persona] describes the problem, to say in character.
- What discovery questions does our [competitor] battlecard recommend?
- What should a candidate never claim about our product?
- Which buying trigger makes an account realistic for a mock call?
- What is [competitor]'s pitch, so I can play a buyer who has heard it?
- What does a strong answer to "[objection]" sound like per our messaging?
- Which ICP disqualifiers should a candidate catch in a pipeline case?
- How do our top reps open a discovery call, per the vendor quotes?
- What do buyers say decided deals against [competitor]?
- Which persona would give a candidate the hardest discovery call, per the canvases?
- What does [competitor] say about us, so I can play a buyer who believes it?
- Which loss reason would a strong candidate spot in a pipeline review?
- Which buying committee role do candidates usually forget, per our won deals?
- What does a [persona] say when a seller pitches too early? Quote one.
- Which claim in our messaging would a sharp candidate challenge in a messaging critique?
