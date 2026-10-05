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
