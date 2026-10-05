# Roadmap input

**Team:** Product management · also leadership, product marketing, sales leadership
**Impact:** High. Every roadmap candidate gets argued for with evidence or with volume. Calven gives each candidate its customer evidence, deal exposure and competitive pressure in the same shape, so the prioritisation framework scores real inputs.
**Prerequisites:** call transcripts ingested (themes, quotes), win/loss surveys running (deal drivers, product gaps), competitors tracked (signals, dossiers). CRM connected adds pipeline exposure. Market research run adds trends.

## What the team is trying to do

Decide what to build next quarter and defend it. The framework (RICE, weighted scoring, cost of delay) is only as good as its reach and impact inputs, and those come from customers, deals and the market. Done means every candidate carries the same evidence card: who asked, how often, what it cost in deals, who else has it, which trend it rides, and what the buyer said. The roadmap review then argues about trade-offs, not about whose anecdote is true.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect candidates | Gather requests from sales, CS, support, strategy and discovery | The gaps buyers named in deals and the themes customers raise on calls, as a starting list | Insights overview (product gaps), themes |
| 2 | Build the evidence card | For each candidate, document demand, revenue exposure and competitive pressure | Deal drivers, quotes, open and lost deals naming it, competitor coverage, related trends | Deal drivers, quotes, CRM deals, competitor dossiers, trends |
| 3 | Check strategic fit | Confirm the candidate serves the ICP and the positioning, not a one-off account | ICP segments and disqualifiers; the value themes and unique attributes in positioning | ICP document, positioning |
| 4 | Score | Apply the framework | Calven supplies reach and impact evidence; effort and confidence are the team's | |
| 5 | Pressure-test | Argue the other side: what if we do not build it | Win rate and loss reasons on the deals that named it; whether the competitor who has it wins on it | Competitive intelligence dashboard, deal drivers |
| 6 | Write the roadmap narrative | Explain the quarter's choices to leadership, sales and CS | The customer's words and the deal evidence per item | Quotes, deal drivers |
| 7 | Retrospective | Each quarter, compare what was planned with what was shipped and what changed | Which gaps and themes moved after shipping; product changes recorded | Themes over time, product changes, Insights with the prior period |

## Recommended prompts

### Step 2: the evidence card per candidate

```
Using Calven MCP, build the evidence card for a roadmap candidate: [candidate].

CONTEXT
I am scoring [candidate] for next quarter's roadmap for [product]. I need its demand, deal exposure and competitive pressure in one card, in the same shape I use for every candidate.

PULL FROM THE UNIVERSE
- Customer themes and quotes about [candidate]: mentions, sentiment, momentum, three verbatim quotes with roles.
- Deal drivers that name it: how many deals, won or lost, whether it decided the deal, the competitors involved.
- Open and lost deals that list it as a requirement, with amounts.
- Whether tracked competitors have it, from their dossiers and recent signals.
- Any market trend it relates to.

BUILD
The card: demand (mentions, who asks, trend), revenue exposure (deals, amount at stake, lost deals), competitive pressure (who has it, who wins on it), strategic fit (which ICP segments and value themes it serves), the buyer's words.

OUTPUT
One evidence card, half a page, each number with its source, sample and window.

GROUNDING
Use only the Universe and cite every figure and quote. Where there is no evidence for a field, write "no evidence recorded"; do not fill it from your knowledge of the category.

[name the candidate and the product]
```

### Step 2 at scale: cards for the whole shortlist

```
Using Calven MCP, build evidence cards for every candidate on this shortlist.

CONTEXT
Below is my shortlist for [quarter]. I want the same card for each so I can compare them.

PULL FROM THE UNIVERSE
- For each candidate: themes and quotes, deal drivers, exposed deals, competitor coverage, related trends.

BUILD
- A comparison table: candidate, mentions, deals touched, lost deals, amount at stake, decisive-driver share, competitors with it, ICP segments it serves.
- Below the table, the two strongest quotes per candidate.

OUTPUT
The comparison table and the quotes, with the window and samples stated once.

GROUNDING
Ground every cell in the Universe. Leave a cell blank with "none recorded" rather than estimating. Do not rank for me; give me the inputs.

[paste the shortlist]
```

### Step 3: strategic fit

```
Using Calven MCP, check [candidate] against our ICP and positioning.

CONTEXT
[candidate] has strong demand from [account or segment]. I want to know whether it serves the customers we are actually targeting or a corner of the market we are not.

PULL FROM THE UNIVERSE
- The ICP: segment tiers, priority verticals, disqualifiers.
- The positioning: value themes and unique attributes.
- Which accounts and deals asked for [candidate], and their ICP fit tier.

CHECK
- Which ICP segments the requesting accounts fall in, and how many are Tier 1.
- Whether the candidate strengthens a value theme or unique attribute, or sits outside the positioning.
- Whether any requester is a disqualified profile.

OUTPUT
A fit verdict in five lines: who asks, whether they are in profile, which theme it serves, and the risk.

GROUNDING
Judge only against the ICP and positioning in the Universe and cite the section. If the requesting accounts have no fit score, say so.

[name the candidate]
```

### Step 5: the case against

```
Using Calven MCP, argue against building [candidate].

CONTEXT
I am about to commit a quarter to [candidate]. Before I do, I want the strongest case that we should not, from our own evidence.

PULL FROM THE UNIVERSE
- Deals we won without it, and what won them.
- The competitors who have it and our win rate against them, with the loss reasons.
- Whether the theme is rising or fading on calls.

BUILD
- Three reasons not to build it, each with evidence.
- What would have to be true for the case against to win.

OUTPUT
A short counter-brief.

GROUNDING
Use only evidence in the Universe and cite it. If the evidence does not support a case against, say so plainly.

[name the candidate]
```

### Step 6: the roadmap narrative

```
Using Calven MCP, write the narrative for next quarter's roadmap.

CONTEXT
Below are the items we chose and the ones we declined. The audience is leadership, sales and customer success. They want to know why, in the customer's words.

PULL FROM THE UNIVERSE
- For each chosen item: the themes, deal drivers and quotes that justify it.
- For each declined item: the evidence that it does not move deals or sits outside the ICP.

WRITE
- One paragraph per chosen item: the problem in a customer's words, the deals it touches, what ships.
- One line per declined item: why not, with the evidence.
- A closing paragraph on what we are watching.

OUTPUT
A one-page roadmap narrative with sources.

GROUNDING
Use only quotes and figures from the Universe, cited. Do not promise dates in any customer-facing wording.

[paste the chosen and declined items]
```

### Step 7: the quarterly retrospective

```
Using Calven MCP, help me run the roadmap retrospective for [quarter].

CONTEXT
Below is what we planned and what we shipped. I want to know whether the customer evidence moved.

PULL FROM THE UNIVERSE
- Product changes recorded in the quarter.
- The themes and gaps the shipped items were meant to address, now versus the prior period.
- Deal drivers in the quarter that still name those gaps.

BUILD
- For each shipped item: whether mentions of the problem fell, and whether it still appears as a loss driver.
- The gaps that gained ground while we built something else.

OUTPUT
A retrospective table and three observations.

GROUNDING
Compare only numbers from the Universe with their samples and windows; a KPI that cannot be compared is not "no change". Do not attribute changes to our shipping without saying the sample is small.

[paste planned versus shipped]
```

## Ad hoc questions

- Which customer themes grew most this quarter?
- How many deals named [candidate], and how many were lost?
- Does [competitor] have [candidate]? What does their dossier say?
- Which Tier 1 accounts asked for [candidate]?
- What is our win rate in deals where [candidate] came up?
- Which value theme in our positioning does [candidate] serve?
- Is there a market trend behind [candidate]?
- What did we ship last quarter, according to our own product changes?
- Which gaps from last quarter's list are still loss drivers?
- Give me three quotes that explain why customers want [candidate].
- Which candidates serve segments outside our ICP?
- What are the top loss reasons this year, and which roadmap items address them?

## Good practice

- Ask for the same card for every candidate. Comparable inputs beat eloquent ones.
- Separate "mentioned on calls" from "named in a deal driver". The first is interest; the second cost or won money.
- Always ask for the sample. Ten mentions out of forty calls and ten out of four hundred are different facts.
- Ask for the case against. The Universe holds the deals you won without the feature too.
- Keep effort and confidence out of the prompt. Calven does not know your codebase; it knows your market.
- Save the card prompt with your product filled in and run it as requests arrive, not the week before planning.

## Not covered today

- Effort, dependencies, capacity and sequencing. The roadmap tool and engineering own those.
- Product analytics and support volumes. Calven knows what buyers said, not what users did.
- Writing the roadmap or scoring it in your tool. Calven supplies the inputs.
