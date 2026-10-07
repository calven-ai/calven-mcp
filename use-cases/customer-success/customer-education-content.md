# Customer education content


Each customer role needs a short, accurate guide to getting value, and without the brief and personas education turns into the feature tour. You get a training outline per persona, an adoption guide per use case, and an FAQ built on questions customers really asked. Calven writes it in the words of the person doing the job and flags what needs updating after a release.

## Prompts

### Write an adoption guide for one role

```
Using Calven MCP, write an adoption guide for the user persona below on the use case below.

FILL IN
- Persona: [user persona]
- Use case: [use case]

CONTEXT
New users in the persona's role need to get value from the use case in their first two weeks. 600 words, steps with a why for each.

PULL FROM THE UNIVERSE
- The product brief: the use case's section and the capabilities it uses, integrations involved.
- The persona's canvas: jobs to be done, pains, goals and KPIs.
- Quotes from customers tagged ease of use, time to value or job to be done on this use case.

WRITE
- What this is for, in the persona's words. Five steps, each with the why and what good looks like. One customer line as proof. Where to go next.

OUTPUT
The guide.

GROUNDING
Use only the Universe and cite it. Do not describe a capability beyond the brief. Do not invent screens or steps the brief does not support; mark them for me to add.
```

### Build an FAQ from real questions

```
Using Calven MCP, build a customer FAQ for the use case below from what customers actually asked.

FILL IN
- Use case: [use case]

CONTEXT
I want ten questions users ask, answered from the brief.

PULL FROM THE UNIVERSE
- Customer quotes tagged job to be done, product feedback or objection on the use case, with the question or confusion they express.
- The product brief answers on each.

BUILD
- Ten questions in the customer's words, each with a three-sentence answer and the brief section. Mark questions the brief does not answer.

OUTPUT
The FAQ and the unanswered list for product marketing.

GROUNDING
Use only the Universe and cite it.
```

### Find guides that need updating

```
Using Calven MCP, tell me what in our customer education needs updating after this month's releases.

FILL IN
- Guides: [paste the guide list, by use case]

CONTEXT
The guide list names our guides by use case.

PULL FROM THE UNIVERSE
- Product changes this month, by severity.
- Drift findings linking changes to published documents.

BUILD
- For each change: which guide it touches and what to update.

OUTPUT
The list.

GROUNDING
Use only the Universe and cite it. Guides not published in Calven are matched by use case name only; say so.
```

## Advanced prompts

### Pilot the training on synthetic learners

```
Pilot my training course on synthetic learners before real users take it, and fix where they get lost. Use Calven MCP for the user personas, their jobs and what users said was hard.

FILL IN
- Course: [paste the outline or the lesson text]
- Learners: [user personas the course is for]

CONTEXT
I can write a course in a day. I find out it doesn't work three months later, when adoption stalls. I want the failure points before launch.

FROM CALVEN
- The user persona canvases: jobs to be done, pains, objections.
- Customer quotes tagged Usability / UX and Onboarding / implementation.
- The product brief's capabilities for the use cases the course covers.

SIMULATE
- Create three learners per persona: a keen one, a busy one, and a skeptic attached to the old way of working. Ground each in the canvas.
- Have each learner take the course lesson by lesson, in their own voice: what they understood, what confused them, where they'd stop.
- Write a five-question check per lesson and have each learner answer it. Score the answers.
- Run item analysis: questions everyone gets right teach nothing, questions the keen learner fails are badly written.

OUTPUT
A lesson-by-lesson table (drop-off points, confusion, quiz results by learner), the fixed lesson text for the two worst lessons, and the revised quiz.

GROUNDING
Learner reactions are simulated from canvases and quotes, and labelled so. Don't invent a product step the brief doesn't describe.
```

### Design an A/B test for the adoption guide

```
Design an A/B test that tells me whether the new adoption guide actually lifts activation. Use Calven MCP for the users' jobs, the message angles and what users said blocked them.

FILL IN
- Guides: [paste the current guide and the new one, or the two angles]
- Baseline: [current activation rate and weekly new users]
- Smallest lift worth having: [for example 5 points]

CONTEXT
We rewrite onboarding content every quarter and never know if it worked. I'd rather run one clean test than three more rewrites.

FROM CALVEN
- The user persona canvases: jobs to be done and pains.
- Quotes tagged Onboarding / implementation and Usability / UX.
- A persona review of both guides.

METHOD
- State the hypothesis and the one primary metric. Add a guardrail metric that mustn't drop.
- Run a power calculation: sample size per arm at 80 percent power and 5 percent significance for the smallest lift, then the run time at my weekly volume. If you can run code, show the calculation.
- If the run time is too long, show the options: a bigger minimum lift, a higher-traffic segment, or a sequential test.
- Predict the result from the persona review and quotes, so we know what we expect before we look.

OUTPUT
A one-page test plan: hypothesis, metric, guardrail, sample size, run time, the decision rule, and the prediction.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The prediction is labelled as a prediction. Don't invent a baseline I didn't give.
```

## Ad hoc questions

- What are the jobs to be done for [user persona]?
- Which capabilities does the [use case] need, per the brief?
- What do customers say about ease of use for [feature]?
- What questions do users ask about [use case]?
- What changed in [area] this month that affects training?
- Write a five-step quick start for [user persona] on [use case].
- Which integrations are involved in [use case]?
- Which published guides did the last product change leave stale, according to the drift findings?
- What do customers say onboarding was like, with quotes tagged onboarding or implementation?
- Which job to be done for [user persona] has no guide covering it?
- What do users say they wish someone had told them in week one?
- Which capability do customers misunderstand most, judging by their questions?
- Which persona has the most onboarding complaints in quotes?
- What vocabulary do customers use for [feature] that our docs don't?
- Which product change made our onboarding steps wrong?
