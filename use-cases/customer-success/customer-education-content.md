# Customer education content

**Team:** Customer success · also customer marketing, product marketing, enablement
**Impact:** Medium. Training outlines, adoption guides and role-based onboarding for the customer's users are written again for every account. Drafting them from the product brief and the persona's jobs to be done makes them accurate and reusable.
**Prerequisites:** product brief approved (use cases, capabilities, integrations), personas approved (user personas with jobs to be done), own website and docs monitored (product changes). Call transcripts ingested adds the questions customers actually ask.

## What the team is trying to do

Give each customer role a short, accurate guide to getting value from the product: what to do first, why, and what good looks like, in the words of the person doing the job. Done means a training outline per persona, an adoption guide per use case, and a FAQ built on real questions. Without the company's own brief and personas, education is the feature tour.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the audience | Which user persona and use case | User personas with jobs to be done; the product use cases | Personas (users), product brief |
| 2 | Outline the training | What to learn, in what order | The use case's capabilities from the brief, ordered by the persona's jobs | Product brief, persona canvas |
| 3 | Write the guide | Steps, why, what good looks like | Drafts with the persona's language and the outcome from customer quotes | Product brief, quotes (time to value, ease of use) |
| 4 | Build the FAQ | The questions users ask | Questions from ingested calls and support notes; the brief's answers | Quotes, product brief |
| 5 | Keep it current | After each release | Product changes and drift findings that touch the guide | Product changes, product drift findings |
| 6 | Deliver | LMS, docs, sessions | Calven does not help here | |

## Recommended prompts

### Step 1 to 3: training outline and guide

```
Using Calven MCP, write an adoption guide for [user persona] on [use case].

CONTEXT
New users in the [user persona] role need to get value from [use case] in their first two weeks. 600 words, steps with a why for each.

PULL FROM THE UNIVERSE
- The product brief: the [use case] section and the capabilities it uses, integrations involved.
- The [user persona] canvas: jobs to be done, pains, goals and KPIs.
- Quotes from customers tagged ease of use, time to value or job to be done on this use case.

WRITE
- What this is for, in the persona's words. Five steps, each with the why and what good looks like. One customer line as proof. Where to go next.

OUTPUT
The guide.

GROUNDING
Use only the Universe and cite it. Do not describe a capability beyond the brief. Do not invent screens or steps the brief does not support; mark them for me to add.

[name the user persona and use case]
```

### Step 4: the FAQ from real questions

```
Using Calven MCP, build a customer FAQ for [use case] from what customers actually asked.

CONTEXT
I want ten questions users ask, answered from the brief.

PULL FROM THE UNIVERSE
- Customer quotes tagged job to be done, product feedback or objection on [use case], with the question or confusion they express.
- The product brief answers on each.

BUILD
- Ten questions in the customer's words, each with a three-sentence answer and the brief section. Mark questions the brief does not answer.

OUTPUT
The FAQ and the unanswered list for product marketing.

GROUNDING
Use only the Universe and cite it.

[name the use case]
```

### Step 5: keep it current

```
Using Calven MCP, tell me what in our customer education needs updating after this month's releases.

CONTEXT
Our guides are listed below by use case.

PULL FROM THE UNIVERSE
- Product changes this month, by severity.
- Drift findings linking changes to published documents.

BUILD
- For each change: which guide it touches and what to update.

OUTPUT
The list.

GROUNDING
Use only the Universe and cite it. Guides not published in Calven are matched by use case name only; say so.

[paste the guide list]
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

## Good practice

- Write for the user persona, not the buyer. The canvases are separate; use the right one.
- Order steps by the persona's jobs to be done, not by the menu.
- Use one customer quote as proof per guide. It tells the user the outcome is real.
- Rerun the currency prompt monthly. Education goes stale faster than marketing.

## Not covered today

- Screenshots, in-product tours, the LMS and session delivery are outside Calven.
- Product documentation is in the record only if the docs site is monitored or ingested.
