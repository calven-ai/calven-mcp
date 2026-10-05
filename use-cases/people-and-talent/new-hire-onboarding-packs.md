# New-hire onboarding packs

**Team:** People and talent · also sales enablement, hiring managers in every team
**Impact:** High. Every hire in every role needs the company story, the market, the buyers and the competition in week one. Today it is a deck from the last fundraise and whoever has time to explain it. With Calven the pack is current the day the person starts, and the same for everyone.
**Prerequisites:** strategy documents approved (positioning, messaging, product brief, ICP), personas approved, competitors tracked. Better with call transcripts ingested (customer voice) and win/loss surveys running (why we win).

## What the team is trying to do

Give a new hire, in any role, a week-one brief they can read in an hour and repeat in their own words by Friday: what we do and for whom, the category we claim, the buyers and what they care about, the competitors and how we differ, how we win deals, and how customers describe us. Done means a role-specific pack with sources, a short knowledge check, and a manager who does not have to write any of it. Without the company's own knowledge the new hire learns the story from the oldest slide deck and three different colleagues' versions of it.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Role intake | Agree what this role must know by day 5, day 30, day 90 | Calven does not help here | |
| 2 | Company story | What we do, for whom, why it matters | Positioning statement, category, core narrative and one-liner, boilerplate | Positioning, messaging |
| 3 | Product | What it does, integrations, pricing at the level the role needs | Product brief sections, scoped to the role's depth | Product brief |
| 4 | Market and buyers | The ICP, the personas, the pains in their words | ICP summary and segments; persona canvases; top customer themes and quotes | ICP, personas, themes, quotes |
| 5 | Competition | Who we meet, how we differ, where we lose | Competitor rows by tier; battlecard how-we-win and where-we-lose; win rate per competitor | Competitors, battlecards, competitive intelligence dashboard |
| 6 | How we win | The drivers behind won deals, in buyer words | Top win drivers with verbatims; marketing-ready quotes | Win/loss dashboard, deal drivers, quotes |
| 7 | Role overlay | What this role touches: the persona an SDR calls, the objections a CSM hears, the claims a writer must get right | The persona, objection handling, claims register relevant to the role | Personas, messaging (objection handling), claims |
| 8 | Knowledge check | Ten questions with answers from the pack | A quiz generated from the pack with sources | All of the above |
| 9 | Logistics, tools, policies | Accounts, HRIS, benefits, compliance | Calven does not help here | |
| 10 | Review and refresh | Manager signs off; pack is regenerated per cohort | The same prompt rerun pulls the current approved versions | All of the above |

## Recommended prompts

### Steps 2 to 6: the week-one pack

```
Using Calven MCP, build a week-one onboarding pack for a new [role].

CONTEXT
A new [role] starts on Monday. They need to understand what we do, for whom, against whom, and how we win, well enough to explain it to a customer by Friday. Reading time under one hour.

PULL FROM THE UNIVERSE
- Our positioning statement, market category, core narrative and one-liner, boilerplate.
- The product brief: overview, capabilities, use cases, integrations, pricing at a summary level.
- The ICP summary, segment tiers and priority verticals.
- Each buyer persona: who they are, their top pains, their top objections, how they talk.
- Every Tier 1 competitor: one line on who they are, where we win, where we lose, our win rate against them.
- The top three win drivers with a buyer verbatim each, and three customer quotes about outcomes.

BUILD
1. The story in one page: what we do, for whom, why now, in the words of our positioning.
2. The product in one page at [role]'s depth.
3. The buyers: one half-page per persona, pains and objections in their words.
4. The competition: a table, then one paragraph per Tier 1 rival.
5. How we win: the drivers and the quotes.
6. Ten words and phrases we use and five we never use, from messaging.

OUTPUT
A document in those six sections with the source beside every claim, then a ten-question knowledge check with answers.

GROUNDING
Use only the approved documents, records and dashboards in the Universe and cite them. Do not invent customers, numbers or competitor facts. If a section has no approved content, say "not yet published" rather than filling it.

[name the role and the product if we scope by product]
```

### Step 7: the role overlay

```
Using Calven MCP, add the role-specific section to the onboarding pack for a new [role].

CONTEXT
The general pack exists. This section covers what [role] touches every day: the people they talk to, the questions they get, the claims they must get right.

PULL FROM THE UNIVERSE
- For an SDR or AE: the personas they prospect, with messaging hooks and objections; the discovery questions from each Tier 1 battlecard.
- For a CSM or support agent: the user and stakeholder personas, their jobs to be done and pains; the product gaps buyers name; the objection handling for renewals.
- For a marketer or writer: the messaging pillars, the customer language bank by theme, the claims register with proof status.
- For a product role: the product gaps ranked by deals, the top customer themes by sentiment.

BUILD
- The three personas or themes this role meets most, with what to say and what not to claim.
- The five questions this role will be asked in month one, each answered from the Universe.
- The three claims this role must never make, from the product brief's known weaknesses and the claims register.

OUTPUT
A two-page role section with sources.

GROUNDING
Use only the Universe and cite each item. Where the Universe has nothing for this role, say so.

[name the role]
```

### Step 8: the knowledge check

```
Using Calven MCP, write a week-one knowledge check for a new [role].

CONTEXT
Ten questions a new hire answers on Friday to show they can tell the company story. Answers must come from the approved documents so a manager can grade them.

PULL FROM THE UNIVERSE
- Positioning, messaging, ICP, product brief, personas, Tier 1 battlecards.

BUILD
- Ten questions: three on the story and category, two on the ICP, two on personas, two on competitors, one on a claim we do not make.
- The model answer and the source for each.

OUTPUT
The quiz, then the answer key.

GROUNDING
Every answer is a direct reading of the Universe, cited. No trick questions on facts the Universe does not hold.

[name the role]
```

### Step 10: refresh check

```
Using Calven MCP, tell me what changed in our story since [date] so I can refresh the onboarding pack.

CONTEXT
The pack was built on [date]. Before the next cohort I want to know what is stale.

PULL FROM THE UNIVERSE
- Strategy documents with a version or update after [date].
- Product changes since [date] and the drift findings on published documents.
- Competitive signals of High severity since [date].
- New or changed personas and competitors.

BUILD
- A list of what changed, where it lands in the pack, and the corrected text.

OUTPUT
The change list with sources.

GROUNDING
Use only recorded versions, changes, signals and findings in the Universe and cite them.

[name the date]
```

## Ad hoc questions

- What do we do, in one sentence from our positioning?
- Who do we sell to? Give me the ICP summary.
- Who are the buyer personas, and what does each care about most?
- Who are our Tier 1 competitors, and how do we differ from each in one line?
- Where do we lose to [competitor]?
- Why do customers choose us? Give me the top three win drivers with a quote each.
- What words do we use for our category, and what do we avoid?
- Give me three customer quotes a new hire can repeat.
- What is our pricing, at the level a new CSM needs?
- What claims must a new hire never make about the product?
- Which persona does an SDR call first, and what is their top objection?
- What changed in the product in the last 60 days?
- Which market trends does our story rely on?

## Good practice

- Build one general pack and one overlay per role. The story is shared; what the role touches is not.
- Set the reading time in the prompt. Without it the AI tool pastes the whole product brief.
- Keep sources beside every claim so the manager can send the new hire to the original.
- Regenerate per cohort instead of editing the old pack. The prompt pulls the current approved versions.
- Add the knowledge check. A pack nobody is tested on is a pack nobody reads.
- Keep logistics, benefits and policies in the HRIS and the handbook.

## Not covered today

- Accounts, tools, benefits, policies and compliance training.
- Org charts, team introductions and the buddy system.
- Learning management systems; the pack is a document the team hosts where it likes.
- Anything about the company that is not in the Universe: history, culture, values, unless the messaging boilerplate carries it.
