# Where to match rivals, and where not to


A competitor is ahead on something and you have to decide whether to match it, leapfrog it or ignore it. You get a parity map per Tier 1 competitor: where they're ahead, whether buyers care, whether the gap decides deals or just fills a checklist, and what to do. Calven grounds it in the deals you lost to them and the buyers' quotes, so parity work follows the buyer instead of the competitor's launch calendar.

## Prompts

### Build the parity map against one competitor

```
Using Calven MCP, build the parity map against the competitor below for our product.

FILL IN
- Competitor: [competitor]
- Product: [product]

CONTEXT
Sales keeps asking for capabilities the competitor has. I need to know where they are actually ahead, and whether buyers chose them for it.

PULL FROM THE UNIVERSE
- The competitor's dossier: the product and feature comparison sections.
- The deal drivers on deals we lost to the competitor, grouped by capability, with whether each decided the deal.
- The head-to-head survey results against the competitor.

BUILD
- A table: capability, their position (ahead, equal, behind) per the dossier, deals lost where buyers named it, decisive or not, the evidence quote.
- A second list: capabilities they are ahead on that no lost deal mentions.

OUTPUT
The parity map, with the dossier's freshness date and the win/loss sample size.

GROUNDING
Use only the dossier, drivers and surveys in the Universe and cite them. If the feature comparison does not cover a capability, say "not compared" instead of guessing. Do not infer their product from their marketing.
```

### Hear what buyers say about one capability

```
Using Calven MCP, tell me what buyers say about the capability below when comparing us with the competitor.

FILL IN
- Capability: [capability]
- Competitor: [competitor]

CONTEXT
The competitor is ahead on the capability per the dossier. Before I decide to match it I want the buyer's own words, from deals and calls.

PULL FROM THE UNIVERSE
- Customer quotes that mention the competitor and the capability.
- Win/loss verbatims about the capability on deals against the competitor.
- The deal drivers that name it: direction, rank, outcome.

BUILD
- Five verbatim quotes, each with role, outcome and whether it decided the deal.
- A one-line read: does it decide deals, tip them, or appear in checklists.

OUTPUT
The quotes and the read.

GROUNDING
Use only quotes recorded in the Universe. If fewer than five exist, give what exists and say so. Do not paraphrase a quote into a stronger claim.
```

### Test whether matching would erode your wins

```
Using Calven MCP, check whether matching the competitor on the capability below would erode where we win.

FILL IN
- Competitor: [competitor]
- Capability: [capability]

CONTEXT
I am leaning towards building the capability to match the competitor. I want to know whether they are still investing there and whether chasing it moves us off the reasons we win.

PULL FROM THE UNIVERSE
- Recent signals from the competitor about the capability: launches, pricing, messaging, with dates.
- The battlecard: how we win, where we lose, the landmines.
- Our positioning: unique attributes and value themes.

CHECK
- Whether the capability sits on their side of the "where we lose" line or ours.
- Whether a match conflicts with a unique attribute or a value theme.
- Whether recent signals show them moving the capability faster than we could match.

OUTPUT
A recommendation in one paragraph: match, leapfrog, reposition or ignore, with the evidence.

GROUNDING
Use only signals, the battlecard and the positioning in the Universe and cite them. Do not predict their roadmap beyond the recorded signals.
```

### Write the parity decision memo

```
Using Calven MCP, write the parity decision memo for the competitor below.

FILL IN
- Competitor: [competitor]
- Decisions: [paste the decisions]

CONTEXT
The decisions give my call per capability (match, leapfrog, reposition, ignore). The audience is leadership and sales. They want the evidence behind each call.

PULL FROM THE UNIVERSE
- Per capability: the dossier's assessment, lost deals that named it, decisive share, the strongest quote, the competitor's recent signals.
- The battlecard lines that change if we build it.

WRITE
- A paragraph per capability: their position, what buyers said, what we decided and why.
- A closing list of what sales should say in the meantime, taken from the battlecard's objection handling.

OUTPUT
A two-page memo with sources.

GROUNDING
Ground every claim in the Universe and cite it. Do not state what the competitor will do next. Do not promise dates in the sales lines.
```

### Give sales the interim answer

```
Using Calven MCP, give sales the interim answer on the capability below versus the competitor.

FILL IN
- Capability: [capability]
- Competitor: [competitor]

CONTEXT
We are not matching the capability this quarter. Sales needs an honest answer when a prospect raises it.

PULL FROM THE UNIVERSE
- The battlecard objection handling and landmines for the competitor.
- The product brief: what we do in this area, and the known weaknesses section.
- The deals we won against the competitor despite the gap, and what won them.

WRITE
- A three-line answer a rep can say, without claiming the capability.
- The question to ask next, from the landmines.
- One proof point from a won deal.

OUTPUT
The talk track block, ready for the battlecard.

GROUNDING
Use only wording the product brief supports. Do not claim the capability or a date. Cite the won deal.
```

## Advanced prompts

### Run the bake-off the buyer will run

```
Rebuild the weighted evaluation a buyer's team would use to pick between us and the competitor, then find the weight at which the missing capability flips the result. Use Calven MCP for what buyers weigh, how each product scores, and what decided past deals.

FILL IN
- Competitor: [competitor]
- Capability: [capability]
- Segment: [segment]
- Buyer scorecard: [paste a real RFP or evaluation matrix from a deal, or "build one"]

CONTEXT
Buyers rarely pick on one feature. They score a list of criteria, weight them, and add up. I want to know whether the capability we lack is heavy enough in that sum to lose us the deal, or whether it's noise on the scorecard.

FROM CALVEN
- The competitor's dossier feature comparison and the battlecard's strengths and weaknesses, for how each product scores.
- Deal drivers on deals against the competitor in the segment, grouped by category, with whether each decided the deal.
- The canvases of the buyer and technical buyer personas: goals, KPIs, objections, for the criteria they weigh.

METHOD
- Build the criteria list from the drivers and canvases, or adopt my pasted scorecard. Set weights from how often each criterion decided a deal.
- Score both products 1 to 5 per criterion, each score citing the dossier or a buyer quote.
- Compute the weighted totals. Then run a flip-point analysis: how much weight would the capability need to carry for the competitor to win, and does any recorded deal show buyers weighing it that heavily?
- Repeat for a second weighting that reflects the technical buyer instead of the economic buyer.
- If you can run code, output the matrix as a spreadsheet with the weights as editable inputs.

OUTPUT
The scorecard for both weightings, the flip-point weight for the capability, and a one-paragraph verdict: decisive, tie-breaker or noise.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Scores trace to the dossier or a quote; if the dossier doesn't compare a criterion, say "not compared" rather than scoring it.
```

### Map the parity call as a payoff matrix

```
Model the parity decision as a game between us and the competitor, and find our best move whatever they do. Use Calven MCP for the competitor's recorded moves, where we win and lose, and our win rate against them.

FILL IN
- Competitor: [competitor]
- Capability: [capability]
- Our options: [match, leapfrog, reposition, ignore, or your own list]
- Deal economics: [average deal size and deals per quarter where we meet them, or "use Calven"]

CONTEXT
Every parity plan assumes the competitor stands still. They don't. I want to see each of our options against their likely responses before I pick one.

FROM CALVEN
- The competitor's signals from the last twelve months, by type, to see the moves they tend to make.
- The battlecard: how we win and where we lose.
- Our win rate against the competitor, and how often the capability shows up as a driver that hurt us, from the win/loss dashboards, with n.

WAR-GAME
- List their plausible responses to each of our options (double down on the capability, cut price, bundle it, ignore us), grounded in the moves their signals show.
- Fill a payoff matrix: for each pair, the change in our win rate against them and the revenue effect over four quarters. Show the arithmetic.
- Find the dominant strategy if one exists. If not, pick the minimax move: the option whose worst case hurts least.
- Name the one signal from them that would change our best move.

OUTPUT
The payoff matrix, the recommended move with its worst case, and the signal to watch.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Their responses trace to recorded signals or are marked as speculation. Don't predict a launch nobody recorded.
```

### Run a Kano survey on your personas

```
Run a Kano survey on our personas to sort the parity requests into must-haves, performance features, delighters and noise. Use Calven MCP to build the respondents from our approved personas and the buyers' own words.

FILL IN
- Capabilities: [paste the five to ten parity requests from sales]
- Competitor: [competitor]
- Personas: [the buyer and user personas to survey]

CONTEXT
Sales sends me a list of what the competitor has. Some items are must-haves that knock us out of deals, some are nice-to-haves nobody pays for. I want them sorted before roadmap planning.

FROM CALVEN
- The personas' canvases: goals, pains, gains, objections.
- Quotes from those roles that mention each capability or the competitor.
- The competitor's dossier feature comparison, for where they actually lead.

METHOD
- For each persona and capability, ask the two Kano questions: how do you feel if the product has it, and how do you feel if it doesn't. Answer in the persona's voice, from their canvas and quotes.
- Classify each answer pair on the standard Kano table: must-be, performance, attractive, indifferent, reverse or questionable.
- Aggregate across personas. Flag capabilities where buyers and users disagree.
- Cross-check against the dossier: a must-be where they don't actually lead is a perception problem, not a build problem.

OUTPUT
A Kano grid per capability with the category, the quote that drove it, and a call: match, leapfrog, reposition or ignore.

GROUNDING
Every answer traces to a canvas line or a quote, cited, or is marked as your extrapolation. Don't make a persona care about a capability nobody in that role mentioned; mark it indifferent with "no evidence".
```

## Ad hoc questions

- Where is [competitor] ahead of us according to their dossier?
- Which of those capabilities came up in deals we lost to them?
- Did any buyer say they chose [competitor] for [capability]?
- What has [competitor] launched in the last 90 days?
- What is our win rate against [competitor] this year, and the top loss reasons?
- Which capabilities do we lead on that buyers name when we win against [competitor]?
- Are there capabilities two or more competitors have that we do not?
- How does [competitor] price [capability]? Is it in their dossier?
- What do we tell prospects about [capability] today? Is that in the battlecard?
- Which Tier 1 competitor did we lose the most deals to this quarter?
- Which parity requests from sales have no deal evidence at all?
- Which capability gaps against [competitor] show up in enterprise deals but not mid-market?
- What did buyers who chose us over [competitor] say we did better?
- Which of [competitor]'s claims does their dossier's bullshit detector flag?
- Which deals did we lose to [competitor] with loss reason Missing feature in [window]?
- Which competitors have signals about [capability] in the last six months?
- Which capabilities do buyers praise us for that no competitor's dossier lists as a strength?
