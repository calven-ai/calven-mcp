# Partner battlecards


Your internal battlecards carry "where we lose" and pricing notes a partner must not see, so you can't forward them. You get a short, current, partner-safe card per competitor: how you win, the traps to set, the objections with answers, and the proof, findable in a minute. Calven tells you which competitors the partner will meet and flags when a card needs a refresh.

## Prompts

### Find the competitors a partner will meet

```
Using Calven MCP, tell me which competitors the partner below will meet selling into the segment and how we do against each.

FILL IN
- Partner: [partner]
- Segment: [segment]

CONTEXT
I am deciding which partner battlecards to build first.

PULL FROM THE UNIVERSE
- The competitors we track, with tier.
- The competitive performance read: win rate per competitor, fight or avoid, top loss reasons, over the last four quarters.
- Deals in the segment and which competitors appear on them.

BUILD
- A ranked table: competitor, tier, how often they appear in the segment's deals, our win rate against them (with n), the top loss reason, build a card first / later.

OUTPUT
The table with sources and the window.

GROUNDING
Win rates only from the dashboard, with n. If a competitor has too few deals for a rate, say so.
```

### Write a partner-safe battlecard

```
Using Calven MCP, write the partner-safe battlecard for the competitor below.

FILL IN
- Competitor: [competitor]

CONTEXT
For a partner rep who meets the competitor in a deal. One page. Nothing internal: no "where we lose", no pricing floors, no internal notes.

PULL FROM THE UNIVERSE
- The battlecard for the competitor: at-a-glance, how we win, landmines, objection handling, talk track, proof points.
- Deal drivers from deals we won against the competitor, with the buyer's evidence quote.
- The three most recent competitive signals for the competitor.

WRITE
- Who they are in two lines.
- How we win, in three bullets a partner can say.
- Three landmine questions to ask early.
- "They say / you say" for the four most common objections.
- Two proof points with attribution.
- What changed recently.

OUTPUT
The one-page card with sources, and a separate internal note listing what I removed and why.

GROUNDING
Use only the battlecard, deal drivers and signals in the Universe and cite them. Do not invent competitor weaknesses. If the battlecard is unpublished for this competitor, say so.
```

### Pull proof from wins against one competitor

```
Using Calven MCP, what did buyers say when they chose us over the competitor below?

FILL IN
- Competitor: [competitor]

CONTEXT
I want the partner card to carry the buyer's words, not ours.

PULL FROM THE UNIVERSE
- Deal drivers from won deals where the competitor was in play, direction helped, with the evidence quote.
- Survey responses on those deals, for the fuller answer.

BUILD
- The five strongest reasons, each with the quote and how often it recurs.

OUTPUT
The list with sources and n.

GROUNDING
Quote verbatim. Attribute only as workspace settings allow; if names are withheld, use the role.
```

### Check whether a card needs refreshing

```
Using Calven MCP, did anything change for the competitor below since the date below that the partner card should reflect?

FILL IN
- Competitor: [competitor]
- Date: [date the partner card was last updated]

CONTEXT
The partner card was last updated on that date.

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since the date, with severity and so-what.
- The battlecard's version and updated date.

ANSWER
- The changes that matter for a partner conversation, and whether the battlecard itself was updated since.

OUTPUT
A short list with sources, or "no change".

GROUNDING
Report only recorded signals. Do not add moves from general knowledge.
```

## Advanced prompts

### War-game a deal against their reseller

```
War-game a live deal where our partner faces the competitor's partner, move by move. Use Calven MCP for the competitor's playbook, their recent moves and why we lose to them.

FILL IN
- Our partner: [partner]
- Competitor: [competitor]
- Deal: [paste the situation: account, buyer roles, stage, what's been said so far]

CONTEXT
The partner's rep won't have me in the room when the competitor's reseller undercuts them. I want to rehearse the next four moves on both sides before they happen.

FROM CALVEN
- The competitor's battlecard: strengths, weaknesses, landmines, they-say-you-say.
- Their competitive signals from the last 90 days.
- Deal drivers from deals lost to them, with how often each decided the deal.

WAR-GAME
- Play four rounds. In each, the competitor's side makes its most likely move (a discount, a feature claim, an executive call, a doubt planted about us), grounded in the battlecard, the signals or the loss drivers.
- Our partner answers with the strongest partner-safe counter. The buyer reacts, and you score who gained ground.
- After round four, replay the game with the competitor opening with its best move, and check whether our plan still holds.
- Name the one move on our side that changes the outcome most.

OUTPUT
A round-by-round table (their move, our counter, buyer reaction, who's ahead), the critical move, and a one-page cheat sheet the partner rep can take into the next meeting.

GROUNDING
Every competitor move cites the battlecard, a signal or a loss driver, or is labelled as your extrapolation. Keep internal battlecard content out of the cheat sheet.
```

### Backtest the card's win rules on closed deals

```
Backtest the battlecard's "we win when" and "we lose when" rules against our closed deals, and tell me which ones are real. Use Calven MCP for the rules and the deals.

FILL IN
- Competitor: [competitor]
- Window: [window]

CONTEXT
Partner reps treat the battlecard as truth. If a "we win when" line is folklore, a partner walks into a losing deal believing it. Before I hand the card over, I want each rule checked against what happened.

FROM CALVEN
- The How We Win and Where We Lose sections of the battlecard.
- Closed won and lost CRM deals with the competitor in the window, paged through in full: size, industry, ICP tier, contact roles, lost-to, loss reason, product feedback.
- Deal drivers for those deals, where they were surveyed.

BACKTEST
- Turn each rule into a test on a deal's fields or drivers. List the rules the data can't test, and why.
- For each testable rule, count the deals where the condition held and the share we won, against the deals where it didn't. Report the lift and the n.
- Flag any rule with fewer than ten deals behind it as unproven.
- If you can run code, build the table in Python with a confidence interval on each win share.

OUTPUT
One row per rule: condition, deals where true, win share when true and when false, lift, verdict (holds, weak, contradicted, untestable). Then the lines to keep, soften or cut before partners see the card.

GROUNDING
These are counts from rows you paged through, so label them as row counts, not dashboard rates, and cite the dashboard's head-to-head win rate (with n) next to them. Don't stretch a rule to fit a deal the fields don't describe.
```

### Build a live deal-odds calculator

```
Build a small calculator a partner rep can use to update the odds of beating a competitor as the deal unfolds. Use Calven MCP for the starting odds and the signals that move them.

FILL IN
- Competitor: [competitor]
- Segment: [segment]
- Format: [HTML page, spreadsheet, or both]

CONTEXT
Partner reps over-invest in deals they're losing and under-invest in ones they could win. A simple Bayesian update gives them a number that moves with the evidence and tells them when to pull us in.

FROM CALVEN
- Our win rate against the competitor in the segment from the competitive intelligence dashboard, with n, as the prior.
- Deal drivers in deals against them: which helped, which hurt, how often, and which decided the deal.
- Win rate by persona engaged and the multi-threading win rate from the persona dashboard, with n.

BUILD
- Pick six to eight signals a partner rep can actually observe: the economic buyer is engaged, the competitor is the incumbent, the buyer asked about a capability the drivers name, and so on.
- For each, estimate a likelihood ratio from the drivers and the dashboards. Where the data is thin, use a conservative ratio close to one and label it.
- Build the calculator: start at the prior, tick the signals, see the updated probability and a recommended action for each band (push, pull us in, qualify out).
- If you can run code, ship it as one HTML file with no dependencies, or a spreadsheet with the formulas visible.

OUTPUT
The working calculator, a table of signals with their ratios and sources, and three worked examples.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't present an assumed likelihood ratio as measured. Show assumed ratios differently in the tool.
```

## Ad hoc questions

- Which competitors show up most in [segment] deals?
- What is our win rate against [competitor], with the sample?
- Give me the partner-safe "how we win" against [competitor].
- What are the landmines to set against [competitor]?
- What is "they say / you say" for "[competitor] is cheaper"?
- What did [competitor] do in the last 30 days?
- Which proof points can a partner quote against [competitor]?
- What is in the battlecard that a partner must not see?
- Did buyers who chose us over [competitor] mention [capability]?
- Is the [competitor] battlecard current?
- Which Tier 1 competitors have no battlecard yet?
- Which deal driver shows up most in losses to [competitor], and how often did it decide the deal?
- Do we win more against [competitor] when the economic buyer is engaged?
- Which [competitor] landmine has a buyer quote showing it worked?
- Which competitors should partners fight and which should they avoid, per the competitive dashboard?
- What do buyers who chose [competitor] say we got wrong?
- Has [competitor] changed pricing or packaging in the last 90 days?
