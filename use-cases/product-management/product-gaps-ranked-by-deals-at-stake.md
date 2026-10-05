# Gaps ranked by deals at stake

**Team:** Product management · also sales leadership, product marketing, leadership
**Impact:** High. The roadmap argument that wins is the one with deals attached. A gap list ranked by the pipeline it touched, with the buyer's own words, ends the debate between the loudest rep and the loudest customer.
**Prerequisites:** win/loss surveys running (deal drivers, product survey section, product gaps in the Insights overview). Better with call transcripts ingested (quotes, themes) and CRM connected (deal amounts, loss reasons, product feedback tags).

## What the team is trying to do

Know which missing capabilities are costing deals, how many, how much, against whom, and what buyers said. Done means a ranked list the PM can take into roadmap planning and defend: each gap with deals touched, amount at stake, the competitor who had it, two verbatim quotes and a verdict on whether it decided the deal or was mentioned in passing. Without the company's own evidence the list is assembled from Slack threads and memory, and the gap the last big customer complained about wins.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the gap list | List the capability gaps buyers named in won and lost deals | The product gaps ranking with deals touched and amount at stake, company-wide or per product | Insights overview (product_gaps), win/loss dashboard (surveys: product) |
| 2 | Read the evidence | For each gap, read what buyers actually said and whether it decided the deal | Deal drivers filtered to the gap, with direction, rank, outcome, competitor and the evidence quote | Deal drivers, survey responses |
| 3 | Add the call evidence | Check whether the gap also shows up in sales and customer calls, not only in surveys | Themes and quotes on the same topic, with mentions and sentiment over time | Themes, quotes, voice-of-customer dashboard |
| 4 | Add the CRM view | See the open pipeline that names the same requirement and the lost deals tagged with it | Deals with the product feedback tag or tech-stack requirement, open and lost, by amount and competitor | CRM deals |
| 5 | Check the competitor | Find out whether the competitors who won those deals have the capability, and how they position it | The competitor's dossier (product, feature comparison) and battlecard | Competitor deep dive, battlecard |
| 6 | Rank and decide | Rank by deals and amount, adjust for whether it decided the deal, decide what goes to planning | The ranked table with every number sourced | All of the above |
| 7 | Size and schedule | Estimate effort, place on the roadmap | Calven does not help here | |
| 8 | Close the loop | Tell sales which gaps are being built and which are not, and why | The sales FAQ and the lost accounts to re-engage once it ships (see the win-back use case under RevOps) | Deal drivers, CRM deals |

## Recommended prompts

### Step 1 and 2: the ranked gap list with evidence

```
Using Calven MCP, rank the product gaps that cost us deals in [window], with the buyer's words.

CONTEXT
I am preparing roadmap planning for [product]. I need the gaps buyers named, ranked by the deals they touched, and I need to know for each whether it decided the deal or was a side remark.

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

[name the product if there is more than one, and the window]
```

### Step 3 and 4: call evidence and pipeline exposure

```
Using Calven MCP, check whether [gap] shows up beyond win/loss, in calls and in the open pipeline.

CONTEXT
[gap] ranks [n] on our gap list from win/loss. Before I take it to planning I want to know whether customers raise it on calls too, and how much open pipeline names it.

PULL FROM THE UNIVERSE
- Customer themes and quotes about [gap]: how many mentions, sentiment, and whether mentions are rising.
- Open deals that name [gap] as a product feedback or tech-stack requirement, with amounts and competitors.
- Lost deals tagged with it, with loss reason and who won.

BUILD
- Mentions on calls over the window, with three quotes and who said them.
- Open pipeline exposed, as a table of deals, amounts, stages and competitors.
- Lost deals, the same way.

OUTPUT
A one-page exposure note: calls, open pipeline, lost deals, each with its source.

GROUNDING
Use only quotes and deals in the Universe and cite them. If the pipeline category is restricted for your access, say so rather than estimating. Do not count the same deal twice across surveys and CRM.

[name the gap]
```

### Step 5: what the competitor has

```
Using Calven MCP, tell me whether [competitor] has [gap] and how they sell it.

CONTEXT
We lost [n] deals to [competitor] where buyers named [gap]. I need to know what they actually offer, how they position it, and whether buyers chose them for it or for something else.

PULL FROM THE UNIVERSE
- [competitor]'s dossier: the product and feature comparison sections, and their positioning and messaging.
- The battlecard: where we lose to them and the landmines.
- The deal drivers on deals lost to [competitor] that name [gap], with the evidence quotes.

BUILD
- What they have, in their words and in the dossier's assessment.
- Whether the buyers who named [gap] cited it as the deciding reason or alongside others.
- Where we still win against them, from the battlecard.

OUTPUT
A half-page read: their capability, its weight in the lost deals, our counter.

GROUNDING
Use only the dossier, battlecard and drivers in the Universe and cite them. If the dossier does not cover this capability, say "not in the dossier" instead of guessing from the category.

[name the competitor and the gap]
```

### Step 6: the planning one-pager

```
Using Calven MCP, turn the gap evidence into a one-pager for roadmap planning.

CONTEXT
Below is the shortlist of gaps I intend to argue for and the ones I intend to decline. I want one page that shows the evidence for each decision.

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

[paste the shortlist with your intended decision per gap]
```

### Step 8: tell sales what happens next

```
Using Calven MCP, draft the note to sales on the gap decisions.

CONTEXT
Planning is done. Below are the gaps we are building, with target quarters, and the gaps we are not. Sales needs to know what to say to prospects who ask.

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

[paste the decisions with target quarters]
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

## Good practice

- Read the overview first for the ranking, then drill into the drivers. The ranking gives the order; the drivers tell you whether each gap decided anything.
- Ask for "decided the deal" separately from "mentioned". A gap named in ten deals that decided none ranks below one that decided three.
- Keep amount at stake honest. It covers won and lost deals; ask for lost deals and lost amount as separate columns.
- Ask for the competitor behind each gap. A gap only matters against the rivals you actually meet.
- Ask what the Universe does not cover. A low count can mean few deals surveyed, not a small problem; the program health dashboard tells you coverage.
- Rerun the list each quarter with the same window length so the ranking is comparable.

## Not covered today

- Effort, sizing and scheduling. That is engineering and the roadmap tool.
- Product usage data and support tickets. Calven holds what buyers said in deals and calls, not what users did in the product.
- Writing the decision back to the roadmap tool or notifying accounts. Calven supplies the lists; the PM and sales act on them in their own tools.
