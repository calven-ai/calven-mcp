# Sales and CS ramp curricula


You've got a new AE, SDR, SE or CSM starting, and you want them working on their own in 90 days instead of learning the pitch by eavesdropping. You get a curriculum the manager can run across four pillars (product, buyers and market, sales or success process, competition), study materials, quizzes with answer keys, role plays and certification at 30, 60 and 90 days. Calven builds it from the approved story, personas, battlecards and real call evidence.

## Prompts

### Build the 30-60-90 ramp curriculum

```
Using Calven MCP, build the 30-60-90 ramp curriculum for the new hire's role below.

FILL IN
- Role: [role]
- Motion: [sales / success]
- Product: [product, or leave blank for all]

CONTEXT
Four pillars: product, buyers and market, the motion's process, competition. Days 1 to 30 are learning and shadowing, 31 to 60 practice and supervised work, 61 to 90 independent work with coaching. Each module needs study material from our approved sources and a check. If a product is given, scope the curriculum to it.

PULL FROM THE UNIVERSE
- Product brief: overview, capabilities, use cases, integrations, pricing, known weaknesses.
- ICP: summary, segment tiers, fit scorecard, disqualifiers, buying triggers.
- Each buyer, stakeholder and user persona: canvas sections.
- Messaging: core narrative, pillars, value props per persona, objection handling.
- Each Tier 1 battlecard: how we win, where we lose, landmines, objection handling, discovery questions, proof points.
- Top win and loss drivers with verbatims, and our win rate per competitor.

BUILD
- A module list per week for 12 weeks: pillar, topic, the Universe sections to study, the practice activity, the check question.
- The week-four, week-eight and week-twelve certification: ten questions each with answer key.

OUTPUT
The curriculum as a table by week, then the three certifications.

GROUNDING
Use only the approved documents, battlecards and dashboards in the Universe and cite each module's sources. Do not invent process steps the messaging and battlecards do not support.
```

### Write this week's role play

```
Using Calven MCP, write this week's role play for the ramping hire in the role below.

FILL IN
- Role: [role]
- Week: [week of ramp]
- Focus: [discovery / objection handling / competitive / renewal]
- Persona: [persona]
- Competitor: [competitor]

CONTEXT
The week and focus are given above. Twenty minutes, the manager plays the buyer.

PULL FROM THE UNIVERSE
- The persona's canvas and three verbatim quotes of how they describe the problem.
- The competitor's battlecard: objections buyers raise when they are in play, landmines.
- The messaging objection handling for the objections in scope.

BUILD
- The scenario, the buyer's lines verbatim, the three objections, the one trap, and the debrief checklist.

OUTPUT
A two-page role play kit with sources.

GROUNDING
Use only the Universe for the persona's lines and the competitor's position, cited. Use a profile, not a real account.
```

### Write the day 30, 60 or 90 certification

```
Using Calven MCP, write the certification below for the role below.

FILL IN
- Day: [30 / 60 / 90]
- Role: [role]

CONTEXT
Ten to fifteen questions the manager grades. Day 30 tests the story, ICP and personas. Day 60 adds objections, competitors and process. Day 90 adds a written deal plan or account plan.

PULL FROM THE UNIVERSE
- The relevant documents, personas, battlecards and messaging for that stage.

BUILD
- The questions, the model answers with sources, the pass mark.
- For day 90: a deal or account scenario from an ICP profile and a competitor, with the model plan.

OUTPUT
The certification and the answer key.

GROUNDING
Every answer is a direct reading of the Universe, cited.
```

### Brief the new hire on inherited accounts

```
Using Calven MCP, prepare the ramping hire in the role below for the accounts they inherit.

FILL IN
- Role: [role]
- Accounts: [paste the account list]

CONTEXT
The accounts or deals are the ones handed to the new hire. I want a one-page brief per account the manager can coach from.

PULL FROM THE UNIVERSE
- Each account: ICP fit tier, industry, size, triggers; contacts and their roles; open deals, stage, competitors, loss reasons on past deals.
- The battlecard for any competitor in those deals; the persona for each contact role.
- Quotes from any conversations with that account.

BUILD
- Per account: where it stands, who is in it, what the persona cares about, which competitor to prepare for, what we said last time.

OUTPUT
One brief per account with sources.

GROUNDING
Use only CRM rows, battlecards, personas and quotes in the Universe and cite them. Say where names or amounts are withheld.
```

## Advanced prompts

### Put a price on each week of ramp

```
Put a price on ramp time: model what each week a new rep isn't productive costs in pipeline, and where curriculum investment breaks even. Use Calven MCP for deal size, win rate and cycle.

FILL IN
- Role: [AE, SDR, SE or CSM]
- Current ramp: [weeks to first deal or full quota, from your records]
- Quota at full productivity: [quota]
- Hires planned this year: [number]
- Cost of the curriculum change: [hours of manager time or budget]

CONTEXT
Ramp is the most expensive line in a sales plan and the least measured. Before I ask for time to build a better curriculum, I want to know what two weeks of faster ramp is worth.

FROM CALVEN
- Win rate, average deal size and sales cycle by segment from the ICP dashboard, with n.
- The segment the new rep will work, from the ICP.

MODEL
- Build a productivity curve from start to full quota (linear or S-shaped, stated). Compute the pipeline and revenue gap against a fully ramped rep.
- Account for the sales cycle: pipeline built in week 6 closes months later, so show both pipeline and revenue timing.
- Compute the value of cutting ramp by one, two and four weeks, for one hire and for the year's hires.
- Break-even: how many weeks the curriculum change must save to pay for itself. Run a sensitivity check on win rate and deal size.

OUTPUT
The ramp curve, the cost of ramp per hire, the value table per week saved, the break-even, and a two-line case for the investment.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a ramp time or quota; use mine.
```

### Find which ramp habits predict first deals

```
Run a cohort analysis on past hires to find which ramp activities predict an early first deal, then rebuild the curriculum around them. Use Calven MCP to tag each hire's activity against the approved story and to read their first deals.

FILL IN
- Hire data: [attach CSV: hire, start date, role, activities completed with dates (shadowing, certifications, role plays), first meeting date, first deal date]
- Owner names: [the names the hires appear as on deals]

CONTEXT
We think shadowing and certification speed up ramp. We've never checked. With even a dozen past hires, the pattern can be visible, and if it isn't, that's worth knowing too.

FROM CALVEN
- Deals owned by each hire, from CRM deals by owner name: opened, closed, outcome, segment.
- Vendor quotes from each hire's calls: how often they use the value pillars and handle objections per the approved responses, where calls were ingested.

METHOD
- Build cohorts by start quarter and by activity (completed certification by day 30 or not, shadowed five or more calls or not).
- If you can run code, compute time to first won deal as a Kaplan-Meier curve per group, with hires with no closed deal censored. Otherwise compare medians and say how small the groups are.
- Check pillar use on early calls against time to first deal.
- Say plainly what the sample can't support, and what to track from the next hire on so the analysis gets better.

OUTPUT
The curves or a median table by activity, the activities that line up with a faster first deal, the curriculum changes, and a tracking sheet for future hires.

GROUNDING
Label every number as Calven (cited, with n), mine (from the CSV), or your assumption. With small groups, say so; don't claim causation.
```

### Run a multi-week deal simulator

```
Build a turn-based deal simulator a new rep plays over six simulated weeks, with real personas, a real competitor and events drawn from our deal history. Use Calven MCP for the cast, the competitor and what happens in deals like this.

FILL IN
- Role: [role]
- Segment: [segment]
- Competitor: [competitor]

CONTEXT
Role plays test one call. Deals are lost across weeks: a champion goes quiet, a new stakeholder arrives, the competitor discounts. I want the new rep to make those calls in a simulation before they make them on a real deal.

FROM CALVEN
- The persona canvases for the buying committee in the segment: champion, economic buyer, technical buyer.
- The competitor's battlecard and recorded signals.
- Deal drivers and loss reasons from deals in the segment, to draw realistic events from.
- The messaging matrix by stage and objection handling.

BUILD
- Six turns, one per week. Each turn: what happened (an event drawn from real deal drivers), what each stakeholder wants, and three or four choices for the rep, or a free-text move.
- The AI tool plays the stakeholders and the competitor, and updates a hidden deal health score after each move, with the reason.
- At the end: outcome (won, lost, no decision), a debrief per turn comparing the rep's move with what the evidence says works, and a score.
- If you can run code, write it as a single HTML file the rep plays alone; otherwise run it here, one turn at a time.

OUTPUT
The simulator (file or turn-by-turn script), the scoring rules, and an example debrief.

GROUNDING
Every event and reaction draws on the Universe, cited in the debrief. Don't invent a competitor move or a buyer reason nobody recorded.
```

## Ad hoc questions

- What should a new AE know about [persona] by day 30?
- What are the five objections a new SDR will hear first, and the approved answers?
- Give me a quiz on our Tier 1 competitors with answers.
- How do our top reps describe the value, from the call quotes?
- Which discovery questions does the [competitor] battlecard recommend?
- What is our ICP fit scorecard? I want the new rep to qualify with it.
- What do customers say about onboarding, for the new CSM?
- Which product gaps do buyers name most, so the new rep does not get surprised?
- What changed in the product in the last quarter that the training deck gets wrong?
- Which accounts in the new rep's book are Tier 1 fit?
- What proof points can the new rep use against [competitor]?
- Which objection costs us the most pipeline, so new reps practise it first?
- What did buyers say about our reps on deals we lost, so new hires avoid it?
- Which value pillar do our top reps use most on won calls?
- What's the first thing a new CSM will hear customers complain about?
- Which competitor will a new AE in [segment] meet first?
- What does the product brief list as known weaknesses a new rep must be ready for?
