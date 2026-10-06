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

## Advanced prompts

### Map the forces behind the switch

```
Map the jobs-to-be-done forces on the problem I'm framing: what pushes customers away from today's way, what pulls them to a new one, and what keeps them stuck. Use Calven MCP for customers' own words and the persona's jobs.

FILL IN
- Problem: [problem]
- Persona: [persona]
- Proposed solution: [paste a short description, or write "none"]

CONTEXT
Most PRDs assume that if the problem is real, people will switch. They often don't, because the habit and the anxiety are stronger than the pain. I want all four forces in the brief before the trio starts designing.

FROM CALVEN
- The persona's canvas: jobs to be done (functional, social, emotional), pains and objections.
- Quotes on the problem, tagged Pain, Buying trigger and Objection, with role and account.
- Deal drivers where buyers chose to stay with what they had (no decision, in-house, incumbent).

METHOD
- Sort the evidence into push (pain of the current way), pull (appeal of something new), anxiety (fear of the new) and habit (comfort of the old).
- Score each force from 1 to 5 on how often and how strongly it shows up, with the quotes behind it.
- Check the balance: do push and pull outweigh anxiety and habit? If not, say what the solution must do to reduce anxiety or break the habit.
- Write the switching moment: the trigger that tips a customer, in their words.

OUTPUT
A four-forces diagram as a table with scores and quotes, the switching moment, and three design requirements that follow from the anxiety and habit.

GROUNDING
Label every score as Calven-based (cited, with n) or your judgement. Quotes verbatim. Don't invent a force the evidence doesn't show; leave a thin quadrant thin and say so.
```

### Size the opportunity as a range

```
Size this opportunity bottom-up as a range, not a single number, and show what drives it. Use Calven MCP for the accounts that fit, how often the problem comes up, and our real deal economics.

FILL IN
- Problem: [problem]
- Segment: [segment]
- Pricing assumption: [what we'd charge for solving it, or the add-on price]
- Adoption data: [paste usage or attach-rate data for a similar feature, or write "none"]

CONTEXT
Leadership will ask how big this is. A top-down TAM slide won't survive the question. I want a number built from accounts we can name, with honest uncertainty.

FROM CALVEN
- The count of ICP-fit accounts in the segment in the CRM, by tier, and how many are customers.
- How often the problem appears: theme mentions against conversations analyzed in the window, from the voice-of-customer dashboard, with n.
- Win rate, average deal size and sales cycle for the segment from the ICP dashboard, with n.

SIMULATE
- Chain: accounts in segment × share with the problem × share who'd pay × price, for customers and for new business separately.
- Give each uncertain input a low, likely and high value with a reason.
- If you can run code, run a Monte Carlo with 10,000 draws and show the P10, P50 and P90.
- Run a tornado chart of which input moves the result most.

OUTPUT
The three-year range, the tornado chart, and the single input I should research first to narrow it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Mentions in calls are not the share of customers with the problem; say how you converted one to the other.
```

### Rank the PRD's assumptions by risk

```
Pull every assumption out of my PRD, plot them on an importance and evidence 2x2, and write the cheapest test for the riskiest ones. Use Calven MCP for the evidence each assumption has or lacks.

FILL IN
- PRD: [paste the PRD or opportunity brief]
- Persona: [persona]

CONTEXT
Every PRD rests on a handful of beliefs about the customer, the market and the business. The trio should test the ones that would sink us and have the least evidence, before anyone writes code.

FROM CALVEN
- The persona's canvas: goals, pains, jobs and objections.
- Quotes and themes related to the problem, with mentions and sentiment.
- Deal drivers and competitor dossiers that bear on any market or competitive assumption.

METHOD
- List every assumption, stated or implied. Tag each: desirability, viability, feasibility or usability.
- Score importance (does the plan fail if it's wrong) and evidence (what Calven holds for or against it), 1 to 5 each.
- Place them on the 2x2. The top-left quadrant (important, little evidence) is the test list.
- For each of those, write a test: what to do, with whom, what result kills the assumption, and how long it takes.

OUTPUT
The assumption table, the 2x2 (an SVG if you can run code), and a test plan for the top three.

GROUNDING
Evidence scores cite Calven (with n) or are labelled your judgement. Don't count a quote as support for an assumption it doesn't speak to.
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
- Which accounts raise [problem] and also have an open deal?
- Is [problem] a pain on more than one persona's canvas, and do they describe it the same way?
- What does [problem] cost customers, in any quote that puts a number on it?
- Which quotes about [problem] are tagged as a buying trigger rather than a pain?
- Did any buyer stay with what they had despite [problem]? Why?
