# Gaps ranked by deals at stake


You're heading into roadmap planning and need to know which missing capabilities are costing deals: how many, how much, against whom, and what buyers said. You get a ranked list you can defend, each gap with deals touched, amount at stake, the competitor who had it, two verbatim quotes and whether it decided the deal or got a passing mention. Calven builds it from the company's own evidence, so it isn't Slack threads and memory, and the gap the last big customer complained about doesn't win by default.

## Prompts

### Rank the gaps that cost you deals

```
Using Calven MCP, rank the product gaps that cost us deals in the window below, with the buyer's words.

FILL IN
- Window: [time window, e.g. last two quarters]
- Product: [product, or leave blank if we have only one]

CONTEXT
I am preparing roadmap planning for the product. I need the gaps buyers named, ranked by the deals they touched, and I need to know for each whether it decided the deal or was a side remark.

PULL FROM THE UNIVERSE
- The product gaps ranking: each gap, the deals it touched, the amount at stake, and how many were lost.
- The deal drivers behind each gap: direction, whether it decided the deal, the outcome, the competitor, and the evidence quote.
- The product section of the win/loss surveys for the same window.

BUILD
- A table: gap, deals touched (won and lost), lost deals, amount at stake, competitors who won, share of drivers that decided the deal.
- Under each gap, the two strongest verbatim quotes with the respondent's title and the deal outcome.
- A one-line verdict per gap: decides deals, hurts at the margin, or mentioned without consequence.

OUTPUT
The ranked table and the evidence per gap, with the sample size and window stated once at the top.

GROUNDING
Use only the gaps, drivers and quotes in the Universe and cite each. Amount at stake covers won and lost deals, so say so; do not present it as lost revenue. Do not add gaps from your own knowledge of the category.
```

### Check a gap's reach in calls and pipeline

```
Using Calven MCP, check whether the gap below shows up beyond win/loss, in calls and in the open pipeline.

FILL IN
- Gap: [gap]
- Rank: [its rank on our win/loss gap list]

CONTEXT
The gap holds the rank above on our gap list from win/loss. Before I take it to planning I want to know whether customers raise it on calls too, and how much open pipeline names it.

PULL FROM THE UNIVERSE
- Customer themes and quotes about the gap: how many mentions, sentiment, and whether mentions are rising.
- Open deals that name the gap as a product feedback or tech-stack requirement, with amounts and competitors.
- Lost deals tagged with it, with loss reason and who won.

BUILD
- Mentions on calls over the window, with three quotes and who said them.
- Open pipeline exposed, as a table of deals, amounts, stages and competitors.
- Lost deals, the same way.

OUTPUT
A one-page exposure note: calls, open pipeline, lost deals, each with its source.

GROUNDING
Use only quotes and deals in the Universe and cite them. If the pipeline category is restricted for your access, say so rather than estimating. Do not count the same deal twice across surveys and CRM.
```

### See whether the competitor has the gap

```
Using Calven MCP, tell me whether the competitor below has the gap capability and how they sell it.

FILL IN
- Competitor: [competitor]
- Gap: [gap]
- Lost deals: [number of deals lost to the competitor where buyers named the gap]

CONTEXT
We lost the number of deals above to the competitor where buyers named the gap. I need to know what they actually offer, how they position it, and whether buyers chose them for it or for something else.

PULL FROM THE UNIVERSE
- The competitor's dossier: the product and feature comparison sections, and their positioning and messaging.
- The battlecard: where we lose to them and the landmines.
- The deal drivers on deals lost to the competitor that name the gap, with the evidence quotes.

BUILD
- What they have, in their words and in the dossier's assessment.
- Whether the buyers who named the gap cited it as the deciding reason or alongside others.
- Where we still win against them, from the battlecard.

OUTPUT
A half-page read: their capability, its weight in the lost deals, our counter.

GROUNDING
Use only the dossier, battlecard and drivers in the Universe and cite them. If the dossier does not cover this capability, say "not in the dossier" instead of guessing from the category.
```

### Turn gap evidence into a planning one-pager

```
Using Calven MCP, turn the gap evidence into a one-pager for roadmap planning.

FILL IN
- Shortlist: [paste the shortlist with your intended decision per gap]

CONTEXT
The shortlist holds the gaps I intend to argue for and the ones I intend to decline. I want one page that shows the evidence for each decision.

PULL FROM THE UNIVERSE
- For each gap: deals touched, amount at stake, lost deals, competitors, the decisive-driver share, and two quotes.
- The customer themes that correspond to each gap, with momentum.

BUILD
- For each gap I am arguing for: the evidence in four lines and the risk of not building it.
- For each gap I am declining: the evidence that it does not decide deals, in two lines.
- The open questions where the Universe is silent.

OUTPUT
A one-page planning note, sources inline.

GROUNDING
Ground every number in the Universe with its sample size and window. Do not argue from your own view of the category. Mark anything the Universe does not support as an open question.
```

### Tell sales what happens with each gap

```
Using Calven MCP, draft the note to sales on the gap decisions.

FILL IN
- Decisions: [paste the decisions with target quarters]

CONTEXT
Planning is done. The decisions list the gaps we are building, with target quarters, and the gaps we are not. Sales needs to know what to say to prospects who ask.

PULL FROM THE UNIVERSE
- The objection handling in our messaging for each gap, if any exists.
- The product brief wording for what we do today in each area.
- The lost deals that named each gap we are building, so sales can plan a win-back.

WRITE
- For each gap being built: what to say now, without a date, and what not to promise.
- For each gap not being built: the honest answer and the alternative, from the product brief.
- The list of lost accounts to revisit once each gap ships.

OUTPUT
A short internal note and the win-back list as a table.

GROUNDING
Use only wording the product brief and messaging support. Do not promise capabilities or dates in prospect-facing lines. Cite the deals in the win-back list.
```

## Ad hoc questions

- Which product gaps cost us deals this year? Rank by deals touched and quote the buyers.
- How many lost deals named [gap], and how much was at stake?
- Did [gap] decide those deals or come up in passing?
- Who did we lose to when buyers named [gap]?
- Is [gap] rising or falling as a theme on customer calls?
- Which open deals name [gap] as a requirement, and at what stage are they?
- Does [competitor] have [gap] according to their dossier?
- What do buyers say about [gap] in their own words? Three quotes.
- Which gaps show up in win/loss but never on calls, and the reverse?
- What is the amount at stake behind the top three gaps for [product]?
- Which gaps are named only by enterprise accounts?
- What did we win despite lacking [gap], and why?
