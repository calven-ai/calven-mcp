# GTM tool procurement


You're evaluating a sales or marketing tool vendor and want the company's own read before paying for a demo cycle and a security review. You get a short brief per shortlisted vendor: how we already see them, what they charge and bundle as recorded, what moved recently, and what the market and analysts say about the category. Calven often already tracks the vendor as a competitor or in market signals, so you're not starting from their website and a comparison site.

## Prompts

### Brief me on a vendor from our records

```
Using Calven MCP, brief me on the vendor below from what the company already holds.

FILL IN
- Vendor: [vendor]
- Need: [what we need the tool for]
- Months: [how many months of signals to include, e.g. 12]

CONTEXT
We are evaluating the vendor for the need above. If we track them as a competitor or they appear in our research, I want that read before the first call.

PULL FROM THE UNIVERSE
- The competitor row, dossier and battlecard for the vendor if tracked: positioning, product, pricing and packaging, strengths, weaknesses, analyst standing.
- Competitive signals about them in the last number of months above.
- Market signals and analyst findings that name them.

BUILD
- One page: who they are as we see them, what they charge and bundle as recorded (with the date), their recorded strengths and weaknesses, and what moved recently.
- A plain statement if the Universe holds nothing on them.

OUTPUT
A vendor brief with sources and dates.

GROUNDING
Use only the Universe and cite each point with its date. Do not fill gaps from the AI tool's own knowledge of the vendor. Recorded pricing is a reference, not a quote.
```

### Get the market read on a tool category

```
Using Calven MCP, give me the market read on the tools category below.

FILL IN
- Category: [category]

CONTEXT
We are buying a tool in the category. I want to know where the category is heading and which vendors analysts and our research name, before we shortlist.

PULL FROM THE UNIVERSE
- Trends and opportunities tagged to or describing the category.
- Analyst findings that cover the category, with the report, publisher and date.
- Market signals naming vendors in the category.

BUILD
- The category in one paragraph: the shifts recorded and what they mean for a buyer.
- The vendors named, with where each appears.
- Risks a buyer should weigh, from the trends.

OUTPUT
A short briefing with sources.

GROUNDING
Use only trends, opportunities, analyst findings and signals in the Universe and cite them with dates. Do not present a stale trend as current; give its last-seen date.
```

### Check our existing relationship with a vendor

```
Using Calven MCP, tell me whether the vendor below is also a customer, a prospect or a competitor we lose to.

FILL IN
- Vendor: [vendor]

CONTEXT
Before we buy from the vendor I want to know the commercial relationship we already have with them.

PULL FROM THE UNIVERSE
- CRM accounts and deals where the vendor is the account.
- Deals where the vendor is listed as a competitor or as lost_to, and the deal drivers behind those losses.

BUILD
- The relationship in a few lines: customer, prospect, competitor, none, with the evidence.

OUTPUT
A short note with sources.

GROUNDING
Use only CRM rows and deal drivers in the Universe and cite them. If the pipeline category is restricted, say so.
```

## Advanced prompts

### Find which weight decides the vendor

```
Score the shortlisted vendors in a weighted decision matrix, then find the one weight that flips the winner. Use Calven MCP for our recorded read on each vendor and what the market and analysts say about the category.

FILL IN
- Vendors: [vendor shortlist]
- Category: [the tool category]
- Criteria and weights: [paste our criteria with weights, or write "suggest them"]
- Demo notes and quotes: [paste notes, prices quoted, contract terms offered]

CONTEXT
The stakeholders each have a favourite and a matrix that happens to agree with them. I want one matrix everyone accepts, and I want to know how fragile its answer is before we sign a three-year term.

FROM CALVEN
- For each vendor we track: the battlecard or dossier, especially pricing and packaging, strengths and weaknesses, with dates.
- Their competitive signals in the last 12 months: pricing changes, launches, funding, hires.
- Trends and analyst findings for the category.

MODEL
- Score each vendor 1 to 5 per criterion, citing the evidence for each score.
- Compute weighted totals and the ranking.
- Run a sensitivity pass: for each criterion, how far its weight must move to change the winner. Mark any criterion where a small move flips the result.
- If you can run code, build the matrix as a spreadsheet with the weights as inputs and a tornado chart of the sensitivity.

OUTPUT
The matrix, the winner, the fragile weights, and three questions to ask the vendors that would settle the closest call.

GROUNDING
Label every score input as Calven (cited, with date), from my notes, or your assumption. A vendor we don't track gets "not in Calven", not a guess. Don't fill a vendor's pricing from your own knowledge.
```

### Simulate three years of cost

```
Simulate the three-year cost of each vendor as a range, including the price rises and seat creep nobody puts in the quote. Use Calven MCP for each vendor's recorded pricing history and where the category is heading.

FILL IN
- Vendors and quotes: [paste each vendor's quote: price, unit, term, uplift cap, add-ons]
- Our usage: [seats or volume today and expected growth]
- Switching cost: [one-off cost to implement or leave, your estimate]

CONTEXT
Quotes compare year one. We pay for years two and three, after the discount ends, the add-on becomes required and the plan we bought is retired. I want total cost of ownership as a distribution, not a number.

FROM CALVEN
- Each tracked vendor's pricing and packaging section, with its date.
- Their pricing-change and packaging signals over the last two years, with dates and what changed.
- Category trends and analyst findings on pricing models, such as a shift to usage-based pricing.

SIMULATE
- For each vendor, model yearly cost from the quote, then add uncertain drivers: renewal uplift, seat or volume growth, the chance an add-on becomes required, the chance of a repackage forcing an upgrade.
- Set each driver's range from the vendor's own signal history where we have it, and my assumption where we don't.
- If you can run code, run 5,000 draws and report the 10th, 50th and 90th percentile three-year cost per vendor. Without code, give low, expected and high scenarios.
- Show which driver moves each vendor's cost most.

OUTPUT
A table per vendor: year-one quote, three-year P10, P50, P90, the top driver, and the contract term that would cap it (uplift cap, price lock, plan grandfathering).

GROUNDING
Label every range as Calven (cited signal, with date), from the quote, or your assumption. Don't invent a price change a vendor never made. Say when a vendor has no pricing history in the Universe.
```

## Ad hoc questions

- Do we track [vendor] as a competitor?
- What pricing and packaging do we record for [vendor], and from when?
- What did [vendor] change or launch in the last six months?
- Which analyst findings mention [vendor] or [category]?
- Which vendors appear in our market signals for [category]?
- What trends do we track that affect [category] tools?
- Is [vendor] an account in our CRM?
- Have we lost deals to [vendor]?
- What does the battlecard list as [vendor]'s weaknesses?
- Which competitors sit in the "[category]" category?
- When did [vendor] last change its pricing or packaging, and what changed?
- Which vendors in [category] raised funding or were acquired in the last year?
- Does our battlecard on [vendor] record any weakness in security, support or onboarding?
- Which analyst reports in the Universe cover [category], and from which quarter?
- Have any of our customers mentioned [vendor] on calls, and what did they say?
- Which trends do we track that could make a three-year contract in [category] risky?
