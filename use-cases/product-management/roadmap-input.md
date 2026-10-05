# Roadmap input


You're deciding what to build next quarter, and your framework (RICE, weighted scoring, cost of delay) is only as good as its reach and impact inputs. You get the same evidence card for every candidate: who asked, how often, what it cost in deals, who else has it, which trend it rides and what the buyer said. Calven fills those cards from customers, deals and the market, so the roadmap review argues about trade-offs instead of whose anecdote is true.

## Prompts

### Build the evidence card for one candidate

```
Using Calven MCP, build the evidence card for the roadmap candidate below.

FILL IN
- Candidate: [candidate]
- Product: [product]

CONTEXT
I am scoring the candidate for next quarter's roadmap for the product. I need its demand, deal exposure and competitive pressure in one card, in the same shape I use for every candidate.

PULL FROM THE UNIVERSE
- Customer themes and quotes about the candidate: mentions, sentiment, momentum, three verbatim quotes with roles.
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
```

### Build evidence cards for the whole shortlist

```
Using Calven MCP, build evidence cards for every candidate on this shortlist.

FILL IN
- Quarter: [quarter]
- Shortlist: [paste the shortlist]

CONTEXT
The shortlist is for the quarter above. I want the same card for each so I can compare them.

PULL FROM THE UNIVERSE
- For each candidate: themes and quotes, deal drivers, exposed deals, competitor coverage, related trends.

BUILD
- A comparison table: candidate, mentions, deals touched, lost deals, amount at stake, decisive-driver share, competitors with it, ICP segments it serves.
- Below the table, the two strongest quotes per candidate.

OUTPUT
The comparison table and the quotes, with the window and samples stated once.

GROUNDING
Ground every cell in the Universe. Leave a cell blank with "none recorded" rather than estimating. Do not rank for me; give me the inputs.
```

### Check a candidate's strategic fit

```
Using Calven MCP, check the candidate below against our ICP and positioning.

FILL IN
- Candidate: [candidate]
- Requesters: [account or segment the demand comes from]

CONTEXT
The candidate has strong demand from the requesters above. I want to know whether it serves the customers we are actually targeting or a corner of the market we are not.

PULL FROM THE UNIVERSE
- The ICP: segment tiers, priority verticals, disqualifiers.
- The positioning: value themes and unique attributes.
- Which accounts and deals asked for the candidate, and their ICP fit tier.

CHECK
- Which ICP segments the requesting accounts fall in, and how many are Tier 1.
- Whether the candidate strengthens a value theme or unique attribute, or sits outside the positioning.
- Whether any requester is a disqualified profile.

OUTPUT
A fit verdict in five lines: who asks, whether they are in profile, which theme it serves, and the risk.

GROUNDING
Judge only against the ICP and positioning in the Universe and cite the section. If the requesting accounts have no fit score, say so.
```

### Argue against building it

```
Using Calven MCP, argue against building the candidate below.

FILL IN
- Candidate: [candidate]

CONTEXT
I am about to commit a quarter to the candidate. Before I do, I want the strongest case that we should not, from our own evidence.

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
```

### Write next quarter's roadmap narrative

```
Using Calven MCP, write the narrative for next quarter's roadmap.

FILL IN
- Items: [paste the chosen and declined items]

CONTEXT
The items list what we chose and what we declined. The audience is leadership, sales and customer success. They want to know why, in the customer's words.

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
```

### Run the quarterly roadmap retrospective

```
Using Calven MCP, help me run the roadmap retrospective for the quarter below.

FILL IN
- Quarter: [quarter]
- Planned versus shipped: [paste planned versus shipped]

CONTEXT
I want to know whether the customer evidence moved.

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
