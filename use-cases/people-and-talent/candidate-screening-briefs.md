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
