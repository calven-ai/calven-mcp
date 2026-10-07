# Candidate screening briefs


You're about to screen candidates for an AE, SDR, CSM, SE, PMM or marketer role, and you need to know what good looks like here. You get a two-page brief per role, screening questions with model answers, and a way to tell a generic answer from one that fits this market. Calven brings the segment, the buyers, the competitors, the objections and how deals are won, so the screen tests the candidate instead of you.

## Prompts

### Build the screening brief for a role

```
Using Calven MCP, brief me before I screen candidates for the role below.

FILL IN
- Role: [role]
- Segment: [segment the role will work]
- Candidates: [number of candidates]

CONTEXT
I am screening that many candidates for the role this week. I need to understand our market, buyers and competitors well enough to tell a candidate who gets it from one who recites a generic SaaS answer.

PULL FROM THE UNIVERSE
- Our positioning: category, frame of reference, competitive alternatives, unique attributes.
- The ICP: segment tiers, priority verticals, disqualifiers, with the segment above first.
- The buyer personas this role works with: role title, top pains, top objections, messaging hooks.
- Tier 1 competitors: one line each, where we win, where we lose, our win rate against each with n.
- The top three win drivers with a buyer verbatim each.

BUILD
- A two-page brief in five sections: market, ICP, buyers, competitors, how we win.
- For each section, the one thing a strong candidate would say unprompted and the generic line a weak candidate would say instead.

OUTPUT
The brief with sources, and the "strong versus generic" list.

GROUNDING
Use only the approved documents, records and dashboards in the Universe and cite them. Do not invent competitor facts or buyer behaviour.
```

### Write screening questions with model answers

```
Using Calven MCP, write screening questions for the role below with model answers.

FILL IN
- Role: [role]
- Persona: [persona]
- Competitor: [competitor]

CONTEXT
A 30-minute screen. I want five questions that test whether the candidate understands buyers like ours and selling against competitors like ours, each with a model answer from our Universe and a note on what a generic answer sounds like.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, objections, KPIs.
- The competitor's battlecard: where we win, where we lose, landmines, objection handling.
- The ICP's buying triggers and disqualifiers.

BUILD
- Five questions: one on the persona's pains, one on handling the persona's top objection, one on selling against the competitor, one on qualifying an account against our ICP, one on the category.
- For each: the model answer (what someone who knows this market says), the generic answer, and a 1 to 4 score guide.

OUTPUT
The five questions with answers and the score guide.

GROUNDING
Model answers come only from the Universe, cited. Do not expect the candidate to know our internal data; the test is reasoning about buyers and rivals like ours.
```

### Judge a candidate's answers after the screen

```
Using Calven MCP, help me judge this candidate's answers.

FILL IN
- Notes: [paste your notes from the screen]
- Role: [role]
- Persona: [persona]
- Competitor: [competitor]

CONTEXT
The notes are from the screen for the role. I want each answer compared with what our Universe says about the buyer, the competitor and the ICP.

PULL FROM THE UNIVERSE
- The persona's canvas, the competitor's battlecard, the ICP.

CHECK
- For each answer: does it match how the persona actually behaves and what the battlecard says, or is it generic or wrong for our market.
- One line per answer: strong, acceptable, off.

OUTPUT
A scored table and a recommendation to advance or decline, with the reason.

GROUNDING
Judge only against the Universe and cite it. Do not penalise a candidate for not knowing internal facts; judge the reasoning.
```

## Advanced prompts

### Check whether two screeners agree

```
Check whether our screen is reliable: build a rubric from our market, have two screeners score the same candidates, and measure their agreement. Use Calven MCP for what a good answer has to know.

FILL IN
- Role: [role]
- Screen notes: [attach anonymised notes or transcripts from the same candidates, scored separately by two screeners]
- Our screening questions: [paste them]

CONTEXT
Two people screen for this role and pass different candidates. If they disagree, the screen measures the screener, not the candidate. I want the agreement measured and the weak questions fixed.

FROM CALVEN
- The ICP summary, the personas the hire will sell to, and their top objections.
- Our Tier 1 competitors and where we win and lose against each, from the battlecards.
- What decides our deals, from the win/loss dashboard's deal drivers, with n.

METHOD
- For each question, write what a strong answer must show about our market, from the evidence above, as a 1 to 4 anchored scale.
- Re-score the notes on that scale as each screener did (or use their scores if they gave them), question by question.
- If you can run code, compute Cohen's weighted kappa per question and overall. Otherwise give percent agreement and the pattern of disagreements.
- For questions with low agreement, diagnose why: vague question, no shared idea of good, or a market fact one screener didn't know. Rewrite those questions and their anchors.

OUTPUT
An agreement table per question, the three weakest questions rewritten with anchors, and a one-page rubric both screeners use next time.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Anchors cite the Universe. Don't invent a candidate answer the notes don't contain.
```

### Generate graded answers to train screeners

```
Generate a set of graded candidate answers for each screening question, from weak to excellent, so new screeners learn what good sounds like in our market. Use Calven MCP for the facts a great answer would know.

FILL IN
- Role: [role]
- Screening questions: [paste them]

CONTEXT
Hiring managers ask me to screen for "commercial sense" and "knows the buyer". A new screener can't hear the difference between a polished generic answer and one that fits our market. Behaviourally anchored examples fix that.

FROM CALVEN
- The personas the hire works with: goals, pains, objections.
- Our positioning: category, competitive alternatives, unique attributes.
- The battlecard for our top competitor: where we win, where we lose.
- Customer quotes on the top pain, verbatim.

BUILD
- For each question, write four answers: 1 (wrong or off-market), 2 (polished but generic, the trap), 3 (good, fits our market), 4 (excellent: shows insight a candidate could plausibly reach from public information).
- For each, list the tells a screener should listen for.
- Shuffle them into a calibration quiz: the screener grades twelve answers blind, then sees the key.
- Add a rule for answers between levels.

OUTPUT
The graded answers per question with tells, the twelve-item calibration quiz, and the answer key.

GROUNDING
Every market fact in a level 3 or 4 answer cites the Universe. Don't make a level 4 answer depend on internal facts a candidate couldn't know; mark which facts are public.
```

### Audit the screen for proxies and bias

```
Audit my screening questions and must-haves for proxies: requirements that stand in for the skill and filter out good candidates for the wrong reasons. Use Calven MCP for what the job actually demands in our market.

FILL IN
- Role: [role]
- Must-haves and screening questions: [paste them]
- Pass rates by question: [paste if you track them, or write "none"]

CONTEXT
"Must have sold to Fortune 500" or "must know our category" can be a real requirement or a shortcut that narrows the pool and repeats who we already hired. I want each requirement tested against what deals here actually need.

FROM CALVEN
- The ICP: segments, deal size, buyers, priority verticals.
- The personas the hire will sell to and their seniority.
- What decides our deals, from deal drivers (Experience and Capability categories), and survey answers on our sales team.

RED-TEAM
- For each requirement, ask: what job behaviour is it a proxy for? Is there evidence our deals need that behaviour? Could someone without the credential show it?
- Flag requirements that likely filter by background (school, specific employer, years) rather than skill, and any wording that could put some groups off.
- If I gave pass rates, check which questions drop the most candidates and whether that tracks the evidence.
- Rewrite each flagged requirement as a demonstrable skill, with a screening question that tests it directly.

OUTPUT
A table: requirement, what it stands in for, evidence it's needed, verdict (keep, rewrite, drop), and the rewrite. Then the revised must-have list.

GROUNDING
Label each verdict as backed by the Universe (cited) or your judgement. This is a structured review, not legal advice; say where to check with counsel.
```

## Ad hoc questions

- Brief me on our ICP and competitors before I screen AE candidates.
- Who is the persona an SDR here calls most, and what is their top objection?
- What does a good answer to "how would you sell against [competitor]" sound like for us?
- Where do we lose to [competitor]? I want to hear if the candidate can guess it.
- What are our ICP disqualifiers? I want to test qualification.
- Which three questions do our reps ask in discovery, per the battlecards?
- How do our best reps phrase our value, from the call quotes?
- What is our category, in our words?
- What wins deals here, per win/loss?
- Which buying triggers should a BDR candidate recognise?
- What is the one thing a PMM candidate should notice about our messaging?
- Which persona would a new AE meet in their first ten calls, and what do they care about?
- What do buyers say about our sales team in win/loss surveys?
- Which competitor would a strong candidate have sold for, given our competitive set?
- What deal size and cycle should a candidate's past experience resemble, per the ICP dashboard?
- Which objection would trip up a candidate who has only sold to SMB?
- What does our positioning say we're not, so I can test whether a candidate gets it?
