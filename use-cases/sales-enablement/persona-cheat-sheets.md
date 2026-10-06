# Persona cheat sheets


A rep has five minutes before a first call and needs to know who they're talking to. You get one page per approved persona with KPIs, pains, objections, hooks, discovery questions and the proof that works, refreshed when the canvas changes. Calven builds it from the approved canvas, so it's more than a job title and three adjectives.

## Prompts

### Write the rep cheat sheet for a persona

```
Using Calven MCP, write the rep cheat sheet for the persona below.

FILL IN
- Persona: [persona]

CONTEXT
One page a rep reads before a call. Sections: what they are measured on, the three pains, the three objections with our answer, three hooks, five discovery questions, the proof that works, where they learn.

PULL FROM THE UNIVERSE
- The persona's canvas: KPIs, pains, gains, jobs to be done, objections, messaging hooks, watering holes.
- Customer quotes from this persona's role on calls in the last two quarters, by category.
- The persona dashboard's win rate when this persona is engaged, with n.
- Deal drivers with direction helped on deals where this persona was the primary contact.

WRITE
The sheet in the sections above, with a verbatim quote under pains and under proof, and the source per section.

OUTPUT
The sheet.

GROUNDING
Write only from the canvas, quotes and dashboard, cited. Do not add traits the canvas does not state. If the canvas is not published, say so and use the row attributes only.
```

### Check a sheet against the canvas

```
Using Calven MCP, check this persona sheet against the approved canvas.

FILL IN
- Persona: [persona]
- Sheet: [paste the sheet]

CONTEXT
The sheet is a cheat sheet in use. I want every statement checked against the current canvas and the quotes.

PULL FROM THE UNIVERSE
- The persona's canvas and the recent quotes from this persona.

CHECK
- Each statement: supported (cite), contradicted (give the canvas line), or not in the canvas.
- Objections on recent calls the sheet does not cover.

OUTPUT
The annotated sheet, then the lines to change.

GROUNDING
Judge only against the Universe. Do not pass a statement because it sounds plausible.
```

### Find which personas need a sheet most

```
Using Calven MCP, tell me which personas need a sheet most.

FILL IN
- Covered: [paste the list of personas with sheets]

CONTEXT
The covered list is the personas we have sheets for. I want the gaps ranked by how often the persona appears in deals.

PULL FROM THE UNIVERSE
- Approved personas by buying role.
- The persona dashboard: buying group presence, win rate by persona, contact coverage.

BUILD
- Personas with no sheet, ranked by deal presence and win-rate impact, with n.

OUTPUT
The ranked gap list.

GROUNDING
Rank by dashboard numbers with n and window. Personas with too few deals are listed with "below floor", not skipped.
```

## Advanced prompts

### Measure each persona's real pull on deals

```
Measure how much each persona actually moves a deal when they're involved, and reorder the cheat sheets around the people who matter. Use Calven MCP for win rates by persona, contact roles and deal outcomes.

FILL IN
- Window: [window, e.g. last 12 months]
- Segment: [segment, or "all"]

CONTEXT
We have a cheat sheet for every persona and reps treat them as equal. Some personas decide deals, some slow them down, some barely show up. Reps should know which is which before the first call.

FROM CALVEN
- Win rate by persona, multi-threading win rate and contact coverage from the persona dashboard, with n.
- CRM contacts on closed deals, with role (champion, economic buyer, technical buyer, blocker and so on) and the deal's status, amount and cycle length.
- Each persona's canvas, for the buying role it claims.

METHOD
- For each persona: win rate when they're on the deal versus when they're not, lift over baseline, effect on deal size and cycle length.
- Check stated role against observed role: is the persona the canvas calls an economic buyer actually listed as one on won deals?
- Find the combinations that matter: which pairs of personas on a deal go with the biggest lift?
- If you can run code, show the lift with confidence intervals and draw a simple chart.
- Rank personas into three tiers for reps: must reach, worth reaching, inform only.

OUTPUT
A table per persona: deals, win rate with and without, lift, deal size and cycle effect, observed role, tier. Then the cheat-sheet order and a one-line threading rule for reps.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Presence goes with outcomes; it doesn't prove cause. Say so wherever a tier rests on fewer than 15 deals.
```

### Walk through a day in the persona's life

```
Simulate one working week as the persona, hour by hour, to find when the problem we solve actually bites and when they'd take a rep's call. Use Calven MCP for what the persona is measured on, what hurts and where they spend time.

FILL IN
- Persona: [persona]
- Segment: [segment]

CONTEXT
Cheat sheets list pains. Reps still call at the wrong moment with the wrong opener. I want the sheet to say when the pain shows up in the week and what the buyer is doing when it does.

FROM CALVEN
- The persona canvas: objectives, goals and KPIs, pains with impact, jobs to be done, watering holes.
- Customer quotes from this persona tagged Pain, Job to be done and Buying trigger, with their situation.
- The ICP's buying triggers for the segment.

SIMULATE
- Write the persona's week: the recurring meetings their KPIs imply, the reports they owe, who they answer to. Mark each block as grounded in the canvas or quotes, or as your inference.
- Place the pains: the exact moment in the week each one costs them time, money or face, quoted where possible.
- Place the triggers: what event in the quarter turns a chronic pain into a project.
- Find the two windows when they'd take a call, and the opener that matches what's on their mind in that window.

OUTPUT
The week as a timeline table, the pain moments with quotes, the two call windows, and a cheat-sheet box: "When to reach them and what to open with."

GROUNDING
Every pain and trigger traces to the canvas, a quote or the ICP, cited. The calendar is your inference; label it, and don't invent a KPI or meeting the canvas doesn't imply.
```

## Ad hoc questions

- What is [persona] measured on?
- What are [persona]'s top three pains, with a quote?
- What objections does [persona] raise and how do we answer?
- Give me five discovery questions for [persona].
- Where does [persona] learn: events, communities, publications?
- What is our win rate when [persona] is on the deal?
- Which hook lands with [persona]?
- Which personas are buyers versus stakeholders versus users?
- What does [persona] say about [competitor]?
- Which persona is listed as a blocker most often on our lost deals?
- What does [persona] say about vendors in general, before we even pitch?
- Which persona's objections changed most between last year and this year?
- What's the gap between what [persona] is measured on and the value proposition we give them?
- Which personas show up on won deals but have no messaging hook on their canvas?
- What buying trigger makes [persona] take a first meeting, in their own words?
