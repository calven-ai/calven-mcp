# Renewal prep


The renewal is 90 to 180 days out. You want to walk in with the case in the customer's own words, the risks named, an answer ready for the competitor, and the expansion framed. You come away with a renewal brief, a risk list with mitigations, talking points for the sponsor and a plan for every stakeholder, all built from why they bought and what they've said since. Skip that record and the renewal turns into a price conversation.

## Prompts

### List the renewals coming up and their risk signals

```
Using Calven MCP, list the renewals closing in the window below.

FILL IN
- Days: [number of days ahead, e.g. 90]

CONTEXT
I run the weekly renewal review. I want every renewal deal closing within that many days, with what I should know first.

PULL FROM THE UNIVERSE
- Renewal deals with a close date within the days given: account, amount band, stage, owner, competitors on the deal, price feedback.
- For each account: the contacts by buying role, and whether a champion is still listed.
- Negative quotes or competitor mentions from each account in the last six months.

BUILD
- A table ranked by close date: account, amount band, stage, champion present, risk signals from the quotes, competitor in play.
- The three renewals to work first and why.

OUTPUT
The table and the three.

GROUNDING
Use only CRM deals, contacts and quotes in the Universe, cited. Health scores and usage are not in Calven; say so.
```

### Build the renewal brief for one account

```
Using Calven MCP, prepare the renewal for the account below.

FILL IN
- Account: [account]
- Renewal date: [renewal date]
- Signed: [signature date]
- Amount: [amount band]
- Sponsor: [contact, title]
- Segment: [segment]
- Numbers: [paste outcome numbers, or leave blank]

CONTEXT
The account renews on the renewal date at the amount band. The sponsor is the contact above. I want the case in their words, the risks, and what to propose.

PULL FROM THE UNIVERSE
- The original deal: drivers that decided it, the buyer's survey answers, quotes from the sales calls on goals and gains.
- Quotes from the account over the contract year, by sentiment and category, with speaker and date; competitor mentions.
- Contacts on the account today by buying role, versus who was in the original deal.
- Product changes since the signature date mapped to the use cases they bought.
- The product brief: packaging, pricing, cross-sell paths.
- If a competitor is mentioned: their battlecard and our win/loss record against them in the segment.

BUILD
- The case: why they bought, in their words, and what we delivered against each driver (I will add the numbers if they are not given).
- The risks: stakeholder change, unmet asks, competitor interest, price pushback, each with evidence and a mitigation.
- What improved: product changes that serve them, in plain words.
- The proposal: the renewal plus the expansion that fits the asks in their quotes.
- Talking points for the sponsor: five lines, each tied to their persona's KPIs.

OUTPUT
A one-page renewal brief with sources.

GROUNDING
Use only the Universe and cite it. Do not invent delivered value; mark where I must add numbers. Do not quote a price unless the brief holds it.
```

### Read renewal risk across your book

```
Using Calven MCP, find renewal risk signals across my accounts.

FILL IN
- Accounts: [paste the account list]
- Window: [time window, e.g. last six months]

CONTEXT
I want the accounts whose own words suggest risk before the renewal conversation.

PULL FROM THE UNIVERSE
- Negative quotes from each account in the window, by category, with speaker.
- Competitor mentions from each account.
- Contacts by buying role; accounts where the champion or economic buyer is missing.
- Loss reasons from deals we lost in the same segment, to know what usually goes wrong.

BUILD
- A table: account, renewal date, risk signals (quotes, competitor, stakeholder gap), the matching loss pattern from the segment.
- The accounts with no signals and no calls, which is its own risk.

OUTPUT
The table ranked by renewal date.

GROUNDING
Use only the Universe and cite it. Say which accounts have no ingested conversations rather than reporting them as healthy.
```

### Prepare for the competitor in the renewal

```
Using Calven MCP, prepare me for the account's renewal where the competitor below is in play.

FILL IN
- Account: [account]
- Contact: [contact]
- Competitor: [competitor]
- Segment: [segment]
- Weeks: [weeks until renewal]

CONTEXT
The contact told us they are being pitched by the competitor. The renewal is that many weeks away.

PULL FROM THE UNIVERSE
- The competitor's battlecard: how we win, where we lose, landmines, objection handling, proof points.
- Our win/loss record against the competitor in the segment, with the drivers that decided those deals.
- The account's original reasons for choosing us, and whether the competitor was in that deal.
- Quotes from customers who chose us over the competitor on switching cost or time to value.

BUILD
- The three reasons they chose us that still hold, with quotes.
- What the competitor will say, and the answer for each.
- The questions to ask the contact to surface what the competitor promised.
- Where we genuinely lose to them, so I do not get surprised.

OUTPUT
A one-page competitive renewal plan.

GROUNDING
Use only the Universe and cite it. Do not invent competitor claims or weaknesses.
```

### Learn from a lost renewal

```
Using Calven MCP, tell me why we lost the renewal for the account below.

FILL IN
- Account: [account]

CONTEXT
The account did not renew. I want the record, not the story.

PULL FROM THE UNIVERSE
- The renewal deal: loss reason, lost to, price and product feedback.
- The surveyed deal and its drivers, if the renewal was surveyed.
- Quotes from the account in the last year that pointed at it.
- Loss reasons across renewals this year, for the pattern.

BUILD
- The reasons in order, each with evidence.
- Which signals were visible in the quotes before the decision.
- Whether this matches the segment's loss pattern.

OUTPUT
A short post-mortem.

GROUNDING
Use only the Universe and cite it. If the renewal was not surveyed, say so and recommend enrolling the next ones.
```

## Advanced prompts

### Update the renewal odds evidence by evidence

```
Give me a renewal probability for this account that I can defend in the forecast call, built as a Bayesian update. Use Calven MCP for the base rate and the account's evidence.

FILL IN
- Account: [account]
- My evidence: [paste usage trend, tickets, NPS, anything outside Calven]
- Renewal date: [renewal date]

CONTEXT
The forecast says "commit" because the CSM feels good. I want a number that starts from how often accounts like this renew and moves only as far as the evidence justifies.

FROM CALVEN
- Renewal deals in the CRM mirror for the account's segment and size, won and lost, paged and counted, with loss reasons.
- The account's quotes over the year by sentiment and category, competitor mentions, and contacts by buying role.
- Deal drivers from lost renewals, so we know which signals preceded a loss.

MODEL
- Set the prior from the segment's renewal outcomes. Say how many rows it rests on.
- Take each piece of evidence in turn (mine and Calven's). Give its likelihood ratio: how much more often it shows up before a loss than before a renewal, from the lost-renewal drivers where possible, from a stated assumption otherwise.
- Update step by step and show the running probability.
- Run the update again with each likelihood ratio halved and doubled to show how fragile the answer is.

OUTPUT
The update table (evidence, likelihood ratio, source, running probability), the final probability with its range, and the one piece of evidence that would move it most if I went and got it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The prior is a count of rows, not a dashboard rate; say so. Don't invent a likelihood ratio and present it as data.
```

### Map the renewal negotiation as a game

```
Model my renewal negotiation as a game, with both sides' walk-away points and the moves that change them. Use Calven MCP for the competitor's pricing, what the account said about price and how price has decided deals.

FILL IN
- Account: [account]
- Current terms: [ACV, term, discount]
- Our target: [uplift or term you want]
- Competitor: [competitor]

CONTEXT
Procurement will open with a cut. I want to know where their real walk-away is, where ours is, and which moves change the payoff before I'm on the call.

FROM CALVEN
- The competitor's pricing and packaging from the dossier, and any pricing signals in the last six months.
- The account's price feedback and quotes tagged Pricing / cost, from the original deal and this year.
- Deals lost with loss reason Price in the segment, and the pricing section of the win/loss dashboard, with n.

MODEL
- Estimate the customer's BATNA: switch to the competitor, go in-house, or do nothing. Cost each with switching effort as a stated assumption.
- Set out our BATNA and the zone of possible agreement.
- Build a payoff matrix for three of their moves (demand a cut, threaten to switch, ask for a longer term) against three of ours (hold, trade price for term, add scope).
- Find the stable outcome and the concession that costs us least and is worth most to them.

OUTPUT
The ZOPA in one line, the payoff matrix, our opening position, the walk-away, and the three concessions in the order to give them.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Competitor prices come only from the dossier; if it doesn't record one, say so. Don't invent a quote about price.
```

### Test the price uplift on a persona ladder

```
Find the renewal uplift this account will accept by running a Gabor-Granger price ladder played by its buying group. Use Calven MCP for the personas and what buyers in the segment said about price.

FILL IN
- Account: [account]
- Current price: [annual price]
- Uplift steps: [the steps to test, for example 0, 5, 10, 15, 20 percent]
- Value delivered: [paste the value you can show this year]

CONTEXT
Finance wants an uplift. I don't want to find the breaking point by breaking the renewal.

FROM CALVEN
- The economic buyer, champion and procurement personas with their canvases, especially objections on price.
- Quotes tagged Pricing / cost from the account and from customers in the same segment.
- The account's original price feedback and the pricing section of the win/loss dashboard, with n.

SIMULATE
- For each persona, walk the ladder from the lowest step up. At each step, the persona says renew, renegotiate or evaluate alternatives, with a reason in their own voice.
- Repeat three times per persona with the value delivered framed differently (cost saved, risk avoided, time saved). Note which framing moves the threshold.
- Combine into a demand curve: the share of the committee still at renew per step. If you can run code, chart it.
- Name the step where the economic buyer flips and the framing that pushes it highest.

OUTPUT
The ladder table per persona, the demand curve, the recommended uplift and the framing to use, and the step to avoid.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Persona thresholds are simulated; say so and tie each to a canvas line or quote. Don't present the curve as measured willingness to pay.
```

## Ad hoc questions

- Which renewals close in the next 90 days?
- Why did [account] buy from us originally? Quote them.
- What has [account] complained about this year?
- Has anyone at [account] mentioned [competitor]?
- Is the champion from the [account] deal still a contact?
- What changed in the product since [account] signed that serves their use case?
- What is our win rate against [competitor] in [segment]?
- What did [account] say about price during the original deal?
- Which renewals this year were lost, and why?
- What should I propose as an expansion to [account], based on their asks?
- What is [sponsor persona] measured on?
- Draft five talking points for the [account] renewal in the sponsor's language.
- What nearly stopped the original deal at [account]?
- Which accounts renewing this quarter were single-threaded when they signed?
- Did any lost renewal mention [competitor] in the six months before it closed?
- What did customers who renewed at a higher price say made it worth it?
- Which renewals in [segment] slipped past their close date, and what did the accounts say in the meantime?
- What did [account]'s economic buyer object to in the original deal, and is it still true?
