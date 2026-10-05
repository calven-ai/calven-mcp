# Opportunity framing and PRDs


You're framing an opportunity well enough for the product trio to test: who has the problem, how often, what it costs them and you, how they handle it now, and what the outcome would be. You come away with the problem and evidence sections of the brief or PRD, with verbatim quotes, affected accounts and segments, the related trend and candidate success metrics. Calven gives you that evidence, so the brief doesn't start from the feature request and "several customers asked".

## Prompts

### Frame the problem and its size

```
Using Calven MCP, frame the opportunity behind the problem below.

FILL IN
- Problem: [theme or problem]
- Product: [product]

CONTEXT
I am writing an opportunity brief. I want the problem stated in the customer's words, with how often it comes up, who has it and what it has cost us in deals.

PULL FROM THE UNIVERSE
- The theme(s) matching the problem: mentions, sentiment, momentum, and the quotes under them with roles and accounts.
- The persona canvases for the roles who raise it: the job to be done and the pain.
- Deal drivers and deals that named it, with outcome and amount.
- The ICP segments and fit tiers of the accounts that raised it.

BUILD
- The problem statement in three sentences, using the customer's words.
- Who has it: personas, segments, number of accounts and conversations.
- What it costs them, from the quotes; what it cost us, from the deals.
- The five quotes that best show it.

OUTPUT
The problem and evidence sections of the brief, sources inline.

GROUNDING
Use only themes, quotes, canvases and deals in the Universe and cite them. State the number of conversations behind the theme. Do not describe the problem from your own knowledge of the category.
```

### Describe how customers handle the problem now

```
Using Calven MCP, describe how customers handle the problem below today.

FILL IN
- Problem: [problem]

CONTEXT
I want the brief to show what customers do now, with which tools, and where that breaks.

PULL FROM THE UNIVERSE
- Quotes that describe workarounds, manual steps or other tools used for the problem, including competitor mentions.
- The competitive alternatives section of our positioning.
- Competitor dossiers where a rival addresses the problem.

BUILD
- The current workaround in the customers' words, with quotes.
- The alternatives named, and what the dossiers say each one offers.
- Where the workaround fails, with the quote.

OUTPUT
The "today" section of the brief.

GROUNDING
Use only quotes and dossiers in the Universe, cited. If customers have not described a workaround, say so.
```

### Test whether a trend makes it urgent

```
Using Calven MCP, tell me whether a market trend makes the problem below more urgent.

FILL IN
- Problem: [problem]

CONTEXT
I want one paragraph in the brief on why now, grounded in tracked trends rather than opinion.

PULL FROM THE UNIVERSE
- Trends and opportunities related to the problem, with their so-what, severity and horizon.
- Analyst findings on the subject.
- The "relevant market trends" section of our positioning.

BUILD
- The one or two trends that apply, what each implies for this problem, and the source.
- A plain statement if none applies.

OUTPUT
A why-now paragraph with sources.

GROUNDING
Use only trends, opportunities and findings in the Universe and cite them with dates. Do not add trends from your own knowledge.
```

### Propose success signals and assumptions

```
Using Calven MCP, propose success signals and list the assumptions for the opportunity below.

FILL IN
- Opportunity: [opportunity]
- Problem section: [paste the problem section]

CONTEXT
The problem section comes from the brief. I need candidate success signals we can observe in our own evidence, and the assumptions the evidence does not cover.

PULL FROM THE UNIVERSE
- The themes and deal drivers tied to the problem, as the baseline.
- The personas' goals and KPIs from their canvases.

BUILD
- Three candidate success signals: the theme or driver that should fall, the persona KPI it maps to, the current baseline with sample.
- The assumptions: what must be true about the customer, the market and the buyer that the evidence does not yet show.

OUTPUT
A success and assumptions section.

GROUNDING
Use only baselines from the Universe with their samples and windows. Mark every assumption as unverified.
```

### Pressure-test an existing PRD

```
Using Calven MCP, pressure-test the problem section of this PRD.

FILL IN
- Problem section: [paste the PRD problem section]

CONTEXT
The PRD was written from a feature request. I want to know whether the problem it states is one customers actually have, in the words they use, and whether the deal evidence supports it.

PULL FROM THE UNIVERSE
- Themes and quotes matching the stated problem.
- Deal drivers that name it.
- The persona canvases it claims to serve.

CHECK
- Each claim in the problem section: supported by evidence, contradicted, or unsupported.
- The personas it names: do their canvases list this pain?
- What the evidence says the problem actually is, if different.

OUTPUT
The problem section annotated, then a rewritten version in the customer's words.

GROUNDING
Judge only against the Universe and cite it. If there is no evidence either way, say "no evidence recorded"; do not fill the gap.
```

## Ad hoc questions

- Which customer themes have the most mentions this quarter for [product]?
- Give me five quotes about [problem], with who said them.
- Which personas raise [problem]? Is it on their canvas as a pain?
- How many conversations mention [problem], and from which accounts?
- Did [problem] decide any deals? Won or lost?
- What do customers do today instead? Any workaround quotes?
- Is there a trend behind [problem]?
- Which ICP segment raises [problem] most?
- What KPI does [persona] care about that [problem] affects?
- Which competitor addresses [problem] according to their dossier?
- Has [problem] grown or shrunk as a theme compared with the prior period?
