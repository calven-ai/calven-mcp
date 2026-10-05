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
