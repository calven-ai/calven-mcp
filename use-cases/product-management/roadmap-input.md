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

## Advanced prompts

### Build a cost-of-delay model for the shortlist

```
Build a cost-of-delay model for my roadmap shortlist and sequence it by CD3. Use Calven MCP for the money each candidate puts at stake every week we wait.

FILL IN
- Shortlist: [paste the candidates]
- Estimates: [paste engineering weeks per candidate]
- Revenue context: [paste expansion or churn figures you hold for each, or write "none"]

CONTEXT
RICE treats a deal closing next month the same as one closing next year. I want to sequence by what waiting costs us, so the order holds up when leadership asks why one item goes first.

FROM CALVEN
- For each candidate, the open deals in the CRM that name it, with amount, stage and close date.
- For each candidate, the lost deals and amount at stake from deal drivers and the product gaps ranking.
- Average sales cycle and win rate from the ICP dashboard, with n.
- Whether a competitor has it, from their dossier, as urgency.

BUILD
- For each candidate, estimate weekly cost of delay: open pipeline at risk spread over its close dates, plus the run rate of losses, plus any revenue I gave you.
- Classify urgency: fixed date (a deal closing soon), rising (a competitor has it), or flat.
- Divide by duration (CD3) and sort.
- Compare with the order RICE would give and explain every swap.
- If you can run code, build it as a spreadsheet with formulas and one tab per candidate.

OUTPUT
The spreadsheet, the CD3 sequence, and a short note on the two candidates whose order surprised you.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a close date or a deal amount; leave a missing one blank and say so.
```

### Hold a judged debate over the last slot

```
Hold a structured debate between two candidates for the last roadmap slot, with a judge who decides. Use Calven MCP for the evidence each side can cite and the strategy the judge rules by.

FILL IN
- Candidate A: [candidate]
- Candidate B: [candidate]
- The judge: [e.g. our CEO, or a board member focused on net retention]

CONTEXT
There's room for one. Both have champions inside the company and the meeting keeps going round in circles. I want the strongest case for each, made fairly, and a ruling I can take into the room.

FROM CALVEN
- Each candidate's evidence: deal drivers, quotes, open and lost deals naming it, and the competitor who has it.
- The ICP segment tiers and disqualifiers, and the positioning's value themes and unique attributes.
- Trends related to each, with severity.

METHOD
- Advocate A opens, then advocate B. Each makes three arguments, each tied to evidence.
- Two rounds of rebuttal. Each side must attack the other's weakest evidence, not just repeat its own.
- The judge rules on stated criteria (strategic fit, revenue at stake, defensibility) and writes the dissent: what the losing side got right.
- Keep each speech under 120 words.

OUTPUT
The debate transcript, the ruling with its criteria, the dissent, and the condition under which the ruling flips.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Advocates can only cite what Calven or I supplied; the judge throws out anything else.
```

### Map the shortlist on a Wardley map

```
Place my roadmap candidates on a Wardley map and tell me where we should build, buy or simply match. Use Calven MCP for what competitors already offer and what buyers value.

FILL IN
- Candidates: [paste the candidates]
- Product: [product]

CONTEXT
Some items on the list are table stakes every rival has. Others could be what makes us different for years. Spending the same effort on both is how roadmaps get spread thin. I want to see which is which.

FROM CALVEN
- The feature comparison from each tracked competitor's dossier.
- The unique attributes and value themes in our positioning.
- Customer themes and buyer pains for the user need each candidate serves, with mentions.
- Trends in the market research with horizon and severity.

METHOD
- Start from the user need at the top and chain the components that serve it down to infrastructure.
- Place each candidate on the evolution axis: genesis, custom, product, commodity. Use how many rivals have it as the main evidence.
- Mark which way each is moving, using the trends.
- Then call it: build to differentiate, match cheaply, or buy or partner.
- If you can run code, draw the map as an SVG.

OUTPUT
The map, a table (candidate, position, movement, evidence, call), and the one candidate we're overinvesting in.

GROUNDING
Label every placement with its evidence: Calven (cited), mine, or your judgement. Don't credit a competitor with a feature their dossier doesn't list.
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
- Which roadmap candidate would most help us against the competitor we lose to most?
- Which themes are customers raising that no candidate on the list addresses?
- Which open deals closing this quarter name a roadmap item as a requirement?
- What did we ship last quarter that a lost buyer had asked for?
- Which candidate do buyers mention in their own words but reps never bring up?
- Which roadmap item would strengthen our weakest value pillar?
