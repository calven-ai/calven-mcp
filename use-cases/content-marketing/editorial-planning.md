# Content gap analysis and editorial planning


It's time to decide what to write next quarter and why. You walk away with a calendar where every piece names its persona, stage, message and evidence, and the team can defend each slot. Calven does the gap analysis your content inventory can't: the under-served personas and stages, the objections and pains no asset answers, the trends that deserve a point of view and the competitors that need a page.

## Prompts

### Find the buyer gaps in your content

```
Using Calven MCP, find the questions, pains and objections our content should answer.

FILL IN
- Window: [time window, e.g. quarter]
- Inventory: [paste the inventory]

CONTEXT
The inventory is our content mapped to persona and stage (title, persona, stage, topic). I want the buyer-side gaps.

PULL FROM THE UNIVERSE
- The voice-of-customer themes with the most mentions in the window: pains, jobs, movers.
- Each persona's objections from its canvas, and which objections our messaging covers.
- The language gaps between how customers talk and how our messaging talks.

BUILD
- Themes and objections with no asset in the inventory, ranked by mentions.
- For each gap: the persona and stage it belongs to, the asset type that would answer it, and two quotes to build it on.
- The objections our messaging does not cover, as a separate list for the PMM.

OUTPUT
A gap table and the messaging list, with sources.

GROUNDING
Use only themes, canvases and messaging in the Universe and cite them with mention counts. Do not add topics from your own knowledge of the category.
```

### Find losses content could pre-empt

```
Using Calven MCP, find what costs us deals that content could pre-empt.

FILL IN
- Window: [time window, e.g. last two quarters]

CONTEXT
I am planning next quarter's content. I want the pieces that address why we lose.

PULL FROM THE UNIVERSE
- The top loss drivers and costly objections from win/loss in the window, with n.
- The product gaps buyers name most, with the deals they touched.
- Loss reasons by segment and by competitor.

BUILD
- For each loss driver content can address (trust, proof, comparison, clarity on a capability): the asset that would pre-empt it, the stage it belongs at, and the evidence quote to lead with.
- The drivers content cannot address, named separately.

OUTPUT
A table of content ideas tied to a loss driver and its deal count, with sources.

GROUNDING
Use only win/loss and voice-of-customer data in the Universe and cite n and the window. Do not claim content will fix a product gap; mark those for product.
```

### Find trends and competitors with no content

```
Using Calven MCP, find the trends and competitors we have no content for.

FILL IN
- Existing content: [paste the list of existing pieces and pages]

CONTEXT
The existing content is our published point-of-view pieces and comparison pages. I want the ones missing.

PULL FROM THE UNIVERSE
- Trends by severity and horizon, and opportunities by impact, with their "so what".
- Our positioning's "why now" trends.
- Competitors by deals involved and our win rate against each.

BUILD
- Trends with no piece from us, ranked by severity, each with the point of view our positioning implies.
- Competitors with no comparison page, ranked by deal frequency, with the page type that fits.

OUTPUT
Two ranked lists with sources.

GROUNDING
Use only trends, positioning and competitive data in the Universe and cite them. Do not add trends or competitors from your own knowledge.
```

### Build next quarter's editorial calendar

```
Using Calven MCP, build next quarter's editorial calendar.

FILL IN
- Gap lists: [paste the gap lists]
- Keywords: [paste the keyword opportunities]
- Capacity: [number] pieces per month
- Format mix: [the team's format mix]

CONTEXT
The gap lists come from the buyer, revenue, market and competitive passes; the keyword opportunities come from the SEO tool.

PULL FROM THE UNIVERSE
- The messaging matrix, so every slot has a persona, stage and message.
- The persona canvases, for the hook and the watering holes that decide distribution.

BUILD
- A ranked backlog scoring each candidate on evidence volume, stage served, revenue at stake and demand (as I pasted it).
- The calendar: for each slot, the working title, persona, stage, message, format, the evidence it will carry, the distribution channel from the persona's watering holes.
- The pieces that did not make the cut and why.

OUTPUT
The calendar as a table and the backlog beneath it, with sources.

GROUNDING
Use only the matrix, canvases and the pasted gap lists, and cite them. Keep the keyword data as I gave it. Do not invent personas or stages the matrix does not have.
```

### Check what changed mid-quarter

```
Using Calven MCP, tell me what has changed since we set the calendar.

FILL IN
- Date set: [date the calendar was set]
- Open slots: [paste the open slots]

CONTEXT
The open slots are the ones still unfilled. I want to know whether to swap any.

PULL FROM THE UNIVERSE
- Themes that moved most since the calendar was set, and new objections on calls.
- New or escalated trends and competitor signals.
- New loss drivers.

CHECK
- Open slots that a newer, bigger gap should replace.
- New gaps with more evidence than any open slot.

OUTPUT
A swap list with the reason and the source, or "no change".

GROUNDING
Use only changes recorded in the Universe since the calendar was set and cite them.
```

## Advanced prompts

### Allocate the quarter like a portfolio

```
Allocate next quarter's writing capacity like a portfolio: every candidate piece has a value and a cost, and the plan is the mix that gets the most out of the hours. Use Calven MCP for how much each piece's topic matters to buyers and deals.

FILL IN
- Candidates: [paste the candidate pieces with format and estimated writer days]
- Capacity: [writer days available this quarter]
- Constraints: [e.g. at least two comparison pages, one piece per persona, launch content in month two]

CONTEXT
The backlog has forty ideas and capacity for twelve. Picking by enthusiasm leaves the funnel's biggest leaks unwritten.

FROM CALVEN
- Costly objections and top pains from the voice-of-customer dashboard, with n.
- Loss reasons and deciding drivers from the win/loss dashboard, with n.
- Trends with severity and horizon, and market opportunities with impact.
- Competitors by deals they appear in, from the competitive intelligence dashboard, with n.

MODEL
- Score each candidate's value: buyer demand (pains and themes it answers), revenue link (objections and losses it pre-empts), timeliness (trend horizon) and competitive need. Combine into one value score with stated weights.
- Divide by cost to get value per writer day.
- Solve the allocation under capacity and constraints. If you can run code, solve it as a knapsack or a small linear program; otherwise pick greedily by value per day and check the constraints.
- Show what the plan leaves out and the value of one extra writer week.

OUTPUT
The chosen plan with value, cost and the evidence behind each pick, the shortlist that didn't make it, and the value of more capacity in one line.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Value scores are a model; state the weights and don't present them as forecast traffic.
```

### Plan the quarter for four futures

```
Build next quarter's editorial plan with scenario planning: four plausible futures from the two biggest uncertainties, and a plan that holds up in all of them. Use Calven MCP for the trends, competitor moves and product changes that drive the uncertainty.

FILL IN
- Draft plan: [paste the draft editorial plan]
- Known events: [launches, events or campaigns already scheduled]

CONTEXT
Plans assume the quarter goes as expected. Then a competitor launches, a release slips or a trend breaks, and half the calendar is wrong. I want a plan that bends instead of breaking.

FROM CALVEN
- Trends with severity, horizon and status.
- Competitive signals from the last 90 days, and the competitors in the most deals.
- Product changes from the last 90 days.
- Market opportunities with impact and timeline.

METHOD
- List the uncertainties the evidence points to. Pick the two that matter most and are least predictable, and say why.
- Cross them into four scenarios. Name each and describe it in three lines, with the signals that would tell us we're in it.
- For each scenario, list the pieces the plan would need and the pieces that become useless.
- Sort the draft plan: robust (useful in all four), contingent (useful in some), fragile (useful in one).
- Rebuild the plan: commit the robust pieces, keep capacity in reserve for contingent ones, and name the trigger signal that releases each.

OUTPUT
The four scenarios with their signals, the draft plan sorted by robustness, and the revised plan with reserved capacity and triggers.

GROUNDING
Scenarios are your construction; label them. Every uncertainty and trigger signal cites a trend, signal or change on record. Don't invent a competitor plan nobody recorded.
```

### Backtest last quarter's plan against the losses

```
Backtest last quarter's editorial plan: did what we published cover the objections and losses that actually showed up in deals? Use Calven MCP for what buyers raised and why deals were lost in that quarter.

FILL IN
- Published: [paste last quarter's published pieces with title, topic, persona and stage]
- Quarter: [quarter]

CONTEXT
We plan every quarter and never check whether the plan was right. If we published about the wrong things, the next plan will make the same mistake.

FROM CALVEN
- Customer quotes tagged Objection and Pain in the quarter, grouped into themes with counts.
- Loss reasons and deciding drivers for deals closed in the quarter, from the win/loss dashboard, with n.
- Themes that moved most from the voice-of-customer dashboard, with n.

BACKTEST
- List the quarter's demand: each objection, pain and loss driver, weighted by how often it appeared or how many deals it decided.
- Map each published piece to the demand items it addresses. A piece that maps to nothing is noted.
- Score the plan: share of weighted demand covered, coverage of the top ten items, and the share of capacity spent on pieces that map to nothing.
- Rebuild what the ideal plan would have been with the same number of pieces, and score it the same way.
- Find the planning habit behind the gap: keyword-led topics, pet themes, launch content crowding out the rest.

OUTPUT
A scorecard: demand covered, top-ten coverage, wasted capacity, versus the ideal plan. Then the top five uncovered items and one rule for next quarter's planning.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A piece covers a demand item only if it answers it directly; say how you judged that.
```

## Ad hoc questions

- Which themes from customer calls grew most this quarter?
- Which objections for [persona] does our messaging not cover?
- What are the top five loss drivers, and which could content address?
- Which product gaps do buyers name most, with how many deals each touched?
- Which trends in our research are high severity and near term?
- Which competitor shows up in the most deals without a comparison page from us?
- Which persona has the least customer evidence on record?
- What are the language gaps between customers and our messaging?
- Which funnel stage has the fewest messages in the matrix for [persona]?
- Where does [persona] read and gather, so I know where to distribute?
- What were the costliest objections last quarter?
- Which opportunity has the highest impact rating and no content?
- Which objection grew fastest last quarter and has no content answering it?
- Which persona do we publish for most, and which one decides the most deals?
- Which trend has a near-term horizon and a severity rating high enough to justify a piece this month?
- What's the one loss reason content can't fix, so we stop planning for it?
- Which competitor's signals suggest a comparison page update before they launch?
- Which stage of the funnel do lost deals stall at most, and what content serves it?
