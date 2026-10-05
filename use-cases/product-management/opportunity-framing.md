# Opportunity framing and PRDs

**Team:** Product management · also design, engineering leads
**Impact:** High. The problem statement is the part of a PRD that decides whether the right thing gets built. Calven supplies the customer evidence for it: themes, quotes, deal drivers, persona jobs and the market trend, so the brief opens with what buyers said, not with a solution.
**Prerequisites:** call transcripts ingested (themes, quotes, conversations), personas approved. Better with win/loss surveys (deal drivers), market research run (trends), CRM connected (accounts and deals affected).

## What the team is trying to do

Frame an opportunity well enough that the product trio can test it: who has the problem, how often, what it costs them and us, what they do today, and what the outcome would be. Done means the problem and evidence sections of the opportunity brief or PRD, with verbatim quotes, affected accounts and segments, the related trend and the success metric candidates. Without it, the brief starts from the feature request and the evidence is "several customers asked".

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Name the opportunity | State the customer problem, not the solution | Themes and their quotes; the persona's jobs to be done and pains | Themes, quotes, persona canvas |
| 2 | Size it | How many customers and prospects, which segments, which deals | Mentions and conversations; deal drivers and CRM deals naming it; ICP segments of the accounts | Themes, customer conversations, deal drivers, CRM accounts and deals |
| 3 | Describe today's workaround | What customers do now, with which alternatives | Quotes about the workaround and competitor mentions; positioning's competitive alternatives | Quotes, positioning |
| 4 | Connect to the market | Whether a trend makes this more urgent | Trends and opportunities with their so-what; analyst findings | Trends, market opportunities, analyst findings |
| 5 | Write the problem section | Problem statement, evidence, who, cost, outcome | The assembled evidence | All of the above |
| 6 | Define success | Candidate metrics tied to the outcome | Which win/loss drivers and themes should move if the problem is solved | Deal drivers, themes |
| 7 | Surface assumptions | List what must be true, and what the evidence does not cover | Where the Universe is silent | |
| 8 | Scope and design | Solution options, scope, design | Calven does not help here | |
| 9 | Validate | Interviews and tests with customers | Interview guide and persona prep (see discovery interview prep) | Persona |

## Recommended prompts

### Step 1 and 2: the problem and its size

```
Using Calven MCP, frame the opportunity behind [theme or problem] for [product].

CONTEXT
I am writing an opportunity brief. I want the problem stated in the customer's words, with how often it comes up, who has it and what it has cost us in deals.

PULL FROM THE UNIVERSE
- The theme(s) matching [problem]: mentions, sentiment, momentum, and the quotes under them with roles and accounts.
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

[name the problem or theme and the product]
```

### Step 3: the workaround and the alternatives

```
Using Calven MCP, describe how customers handle [problem] today.

CONTEXT
I want the brief to show what customers do now, with which tools, and where that breaks.

PULL FROM THE UNIVERSE
- Quotes that describe workarounds, manual steps or other tools used for [problem], including competitor mentions.
- The competitive alternatives section of our positioning.
- Competitor dossiers where a rival addresses [problem].

BUILD
- The current workaround in the customers' words, with quotes.
- The alternatives named, and what the dossiers say each one offers.
- Where the workaround fails, with the quote.

OUTPUT
The "today" section of the brief.

GROUNDING
Use only quotes and dossiers in the Universe, cited. If customers have not described a workaround, say so.

[name the problem]
```

### Step 4: the market connection

```
Using Calven MCP, tell me whether a market trend makes [problem] more urgent.

CONTEXT
I want one paragraph in the brief on why now, grounded in tracked trends rather than opinion.

PULL FROM THE UNIVERSE
- Trends and opportunities related to [problem], with their so-what, severity and horizon.
- Analyst findings on the subject.
- The "relevant market trends" section of our positioning.

BUILD
- The one or two trends that apply, what each implies for this problem, and the source.
- A plain statement if none applies.

OUTPUT
A why-now paragraph with sources.

GROUNDING
Use only trends, opportunities and findings in the Universe and cite them with dates. Do not add trends from your own knowledge.

[name the problem]
```

### Step 6 and 7: success metrics and assumptions

```
Using Calven MCP, propose success signals and list the assumptions for [opportunity].

CONTEXT
Below is the problem section of the brief. I need candidate success signals we can observe in our own evidence, and the assumptions the evidence does not cover.

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

[paste the problem section]
```

### Review mode: pressure-test an existing PRD

```
Using Calven MCP, pressure-test the problem section of this PRD.

CONTEXT
Below is a PRD written from a feature request. I want to know whether the problem it states is one customers actually have, in the words they use, and whether the deal evidence supports it.

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

[paste the PRD problem section]
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

## Good practice

- Start with the theme, not the feature. Ask for the problem in the customer's words before anything else.
- Ask for the number of conversations behind a theme, not only mentions. Five mentions from one account is one customer.
- Keep quotes verbatim and attributed. The brief's credibility is the quotes.
- Separate what buyers said in deals (deal drivers) from what customers said on calls (quotes). Both matter; they are different evidence.
- Ask explicitly what the Universe does not cover, and put it in the assumptions.
- Run the pressure test on PRDs you inherit. The rewrite in the customer's words is often the real brief.

## Not covered today

- Product analytics, support tickets, NPS and usage. Calven holds conversations and deals, not product behaviour.
- Solution design, scope and estimates.
- Running interviews or tests. Calven prepares them; the team runs them.
