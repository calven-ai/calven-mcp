# Onboarding plans


A new AE or SDR starts Monday, and you want them certified and carrying quota with milestones at 30, 60 and 90 days. You get a plan the manager can run and a reading pack on the market, the buyer, the product, the competitors and the pitch, in that order. Calven builds it from the current approved documents, so every new hire learns the same story instead of the oldest deck in the shared drive.

## Prompts

### Build the week-one reading pack

```
Using Calven MCP, build the week-one reading pack for a new rep in the role below.

FILL IN
- Role: [AE / SDR]

CONTEXT
A new rep starts Monday. By Friday they should be able to explain who we sell to, what we sell, how we position it and who we sell against. I need the pack in reading order with a one-page brief per document.

PULL FROM THE UNIVERSE
- Our ICP, positioning, messaging and product brief.
- The list of approved personas and tracked competitors.

BUILD
- The reading order with a sentence on why each document comes where it does.
- A one-page brief per strategy document: the five things a rep must remember, in plain words, with the section each comes from.
- The persona list with role title and buying role, and the competitor list with tier.

OUTPUT
The pack as one document with the briefs, ready to paste into the onboarding plan.

GROUNDING
Write only from the documents in the Universe and cite sections. Do not add context from your own knowledge of the category. Where a document is missing, say so.
```

### Build the persona, competitive and practice modules

```
Using Calven MCP, build the persona, competitive and practice modules for the 30-day plan.

CONTEXT
Days 8 to 30 cover the buyer, the competition and the pitch. Each module needs the teaching content and an exercise.

PULL FROM THE UNIVERSE
- Every approved persona's canvas: KPIs, pains, jobs to be done, objections, messaging hooks.
- The battlecard for each Tier 1 competitor and our win rate against each from the competitive dashboard.
- The ten objections customers raised most on calls in the last two quarters, with the approved answer from the messaging document.

BUILD
- Persona module: one page per persona plus three discovery questions each.
- Competitive module: one page per Tier 1 competitor (how we win, where we lose, two landmines, the talk track) plus the win rate with n.
- Practice module: the ten objections with the approved answers, and a role-play brief for each persona the rep should rehearse as.

OUTPUT
The three modules.

GROUNDING
Cite the canvas, battlecard, dashboard or quote behind every item. Do not invent objections or answers; if the messaging has no answer to an objection, mark it "no approved answer yet".
```

### Write the 30-day certification

```
Using Calven MCP, write the 30-day certification for a new rep.

CONTEXT
Twenty questions, mixed format: ten multiple choice, five short answer, five scenario. Pass mark 80 percent. Every answer must point to the source so a manager can grade it.

PULL FROM THE UNIVERSE
- Our ICP, positioning, messaging, product brief, persona canvases and Tier 1 battlecards.

BUILD
- The questions, spread across ICP (4), personas (4), product (4), positioning and messaging (4), competitors (4).
- The answer key with the document and section per answer.
- For scenarios: the approved line a rep should give.

OUTPUT
The quiz and the key.

GROUNDING
Every question is answerable from the Universe. Do not write questions about things the documents do not state.
```

### Refresh the plan for the next cohort

```
Using Calven MCP, tell me what changed since the last onboarding cohort.

FILL IN
- Date: [the last cohort's start date]
- Plan: [paste the plan]

CONTEXT
The last cohort started on the date and used the plan. I need to know what went stale.

PULL FROM THE UNIVERSE
- Product changes detected since the date and the published documents they left stale.
- Competitive signals since the date with high severity.
- Strategy documents updated since the date (version and date).

CHECK
- Each plan section: still current, update needed (what changed), or remove.

OUTPUT
The plan annotated, then the list of sections to rebuild.

GROUNDING
Use only recorded changes and document versions. Do not assume a section is stale without a recorded change.
```

## Advanced prompts

### Model ramp time with a survival curve

```
Model how long new reps really take to close their first deal, and find what the fast ramps had in common. Use Calven MCP for every rep's deals, segments and outcomes.

FILL IN
- Hires: [attach a CSV: rep name as it appears on deals, start date, still employed yes or no]
- Ramp target: [the time to first deal you promise leadership, e.g. 90 days]

CONTEXT
Leadership asks why ramp takes so long and I answer with an average that hides everything. I want the real curve, the reps who never got there, and what shortens it.

FROM CALVEN
- CRM deals for each rep by owner name: opened date, close date, status, segment, ICP tier, deal type and lead source.
- Win rate and sales cycle by segment from the ICP dashboard, with n.

MODEL
- For each rep, compute days from start to first won deal. Reps who left or haven't closed are censored, not dropped.
- If you can run code, build a Kaplan-Meier curve and report the median time to first deal with a confidence band. Otherwise, a table of the share closed by day 30, 60, 90 and 180.
- Split by what the rep's first deals looked like: Tier 1 or not, inbound or outbound, segment. Compare the curves.
- Check the obvious confounder: a rep handed an inbound Tier 1 deal in week two isn't faster, they're luckier. Say how much of the gap that explains.

OUTPUT
The survival curve or table, median ramp against my target, the two factors that shorten it most, and a recommendation for how the next hire's first territory and first deals should be set up.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. With fewer than ten hires, say the curve is indicative, not proof.
```

### Build a spaced repetition schedule for ramp

```
Build the new hire's 90-day memory plan: what they must recall cold, weighted by how often it comes up in real deals, scheduled on a spacing curve. Use Calven MCP for the content and how often each item matters.

FILL IN
- Start date: [start date]
- Daily time budget: [minutes per day the rep can spend, e.g. 15]

CONTEXT
New reps read everything in week one and remember little by week six. Spaced retrieval beats rereading, and weighting by frequency means they drill what buyers actually say.

FROM CALVEN
- The ICP summary, disqualifiers, value pillars and one-liner.
- Each persona's goals, pains and top objections from their canvas.
- The objections on calls ranked by frequency, and the competitors that appear in the most deals, from the dashboards with n.
- Each Tier 1 competitor's battlecard: how we win, landmines, objection handling.

BUILD
- Turn the content into recall cards: a question on the front, the approved answer with its source on the back. Aim for 80 to 120 cards.
- Weight each card by how often it comes up: frequent objections and common competitors get more reviews.
- Schedule reviews on expanding intervals (day 1, 3, 7, 14, 30, 60) inside the daily time budget. If you can run code, generate the schedule as a CSV and an import file for a flashcard app.
- Add a weekly 10-card mixed quiz that pulls from everything due.

OUTPUT
The card deck as a table (front, back, source, weight), the 90-day schedule, and the weekly quiz for week one.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Every card's answer comes from a cited document; don't write an answer the Universe doesn't contain.
```

### Defend the plan to a sceptical sales leader

```
Stress-test my onboarding plan in front of a sceptical VP Sales who wants reps selling in week two. Use Calven MCP for our real sales cycle, win rates and what loses deals.

FILL IN
- Onboarding plan: [paste the 30-60-90 plan]
- Hiring plan: [number of reps starting and when]

CONTEXT
The VP will ask why reps spend three weeks learning and not selling. I want the hard questions first, with answers that hold up, and a plan I've changed where the VP is right.

FROM CALVEN
- Sales cycle, average deal size and win rate by segment from the ICP dashboard, with n.
- The top loss reasons from the win/loss dashboard, with n.
- The objections and competitors new reps meet most, by frequency on calls.

RED-TEAM
- Play the VP: impatient, numerate, fair. Attack the plan in five rounds: time to first meeting, what each week costs in pipeline, what the plan teaches that doesn't move deals, what it misses that does, and how I'll know it works.
- After each attack, answer as I would with the evidence, then score whether the answer holds.
- Do the maths the VP would: with this sales cycle, a rep who starts selling in week four versus week two closes their first deal how much later? Show it.
- Where the VP wins a round, change the plan.

OUTPUT
The five rounds with scores, the pipeline maths, and the revised plan with every change marked and the reason in one line.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't put a loss reason or a cycle length in the VP's mouth that the dashboards don't show.
```

## Ad hoc questions

- Summarise our ICP in five bullets for a new rep.
- Who are our buyer personas and what is each measured on?
- Which competitors are Tier 1, and what is our win rate against each?
- What are the three things we never claim about our product?
- Give me five discovery questions for [persona].
- What is the one-liner a new rep should be able to say by Friday?
- Which objections should a new rep expect in their first ten calls?
- What did we change in the product in the last quarter that the onboarding deck might not have?
- Explain our positioning against [competitor] in three sentences.
- Which verticals do we prioritise and which do we not sell into?
- What proof points can a new rep use in week one?
- Write a role-play brief where I play [persona] evaluating us against [competitor].
- Which objection do new reps meet in their first month that tenured reps rarely hear?
- Which segment has the shortest sales cycle, so a new rep can close a first deal fastest?
- Which lost deals were Tier 3 in our ICP, and which disqualifier would have caught them?
- Which persona do our won deals involve most often, so a new rep learns that one first?
- Which competitor lines from the battlecard would a new rep be tempted to overclaim?
- What's the one customer quote every new rep should be able to tell from memory?
