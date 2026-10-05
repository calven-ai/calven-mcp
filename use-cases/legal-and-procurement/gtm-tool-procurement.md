# GTM tool procurement

**Team:** Legal and procurement · also revenue operations, marketing operations, finance
**Impact:** Medium. When the company buys a sales or marketing tool, the vendor is often a company it already tracks as a competitor or has seen in market signals and analyst findings. The Universe gives procurement the company's own read on the vendor's pricing, packaging, positioning and recent moves before the first demo.
**Prerequisites:** competitors tracked (when the vendor is a tracked rival or adjacent vendor), market research run (trends, opportunities, market signals), analyst reports uploaded. Better with CRM connected (whether the vendor is also an account or a lost-to competitor).

## What the team is trying to do

Evaluate a vendor with what the company already knows, before paying for a demo cycle and a security review. Done means a short brief per shortlisted vendor: how the company already sees them, what they charge and bundle as recorded, what moved recently, and what the market and analysts say about the category. Without the Universe procurement starts from the vendor's website and a comparison site.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the need | Requirements from the team that will use the tool | Calven does not help here | |
| 2 | Build the shortlist | Candidate vendors | Tracked competitors and adjacent vendors in the same category; vendors named in signals and analyst findings | Competitors, market signals, analyst findings |
| 3 | Read what we already know | Each vendor's positioning, product, pricing, strengths and weaknesses as recorded | Dossiers and battlecards for tracked vendors; signals for the rest | Competitor bundle, deep dive, competitive signals |
| 4 | Read the category | Where the category is going, who analysts rate | Trends, opportunities, analyst findings | Trends, market opportunities, analyst findings |
| 5 | Check the relationship | Whether the vendor is also a customer, a prospect or a competitor we lose to | CRM accounts and deals, win/loss drivers | CRM accounts, deals, deal drivers |
| 6 | Run demos and security review | Evaluate, questionnaire, references | Calven does not help here | |
| 7 | Negotiate and contract | Terms, price, renewal | Recorded pricing and packaging as a reference point, not a quote | Deep dive (pricing and packaging) |
| 8 | Record the vendor | Vendor register, owner, review date | Calven does not help here | |

## Recommended prompts

### Step 3: what we already know about a vendor

```
Using Calven MCP, brief me on [vendor] from what the company already holds.

CONTEXT
We are evaluating [vendor] for [need]. If we track them as a competitor or they appear in our research, I want that read before the first call.

PULL FROM THE UNIVERSE
- The competitor row, dossier and battlecard for [vendor] if tracked: positioning, product, pricing and packaging, strengths, weaknesses, analyst standing.
- Competitive signals about them in the last [months] months.
- Market signals and analyst findings that name them.

BUILD
- One page: who they are as we see them, what they charge and bundle as recorded (with the date), their recorded strengths and weaknesses, and what moved recently.
- A plain statement if the Universe holds nothing on them.

OUTPUT
A vendor brief with sources and dates.

GROUNDING
Use only the Universe and cite each point with its date. Do not fill gaps from the AI tool's own knowledge of [vendor]. Recorded pricing is a reference, not a quote.

[name the vendor and the need]
```

### Step 4: the category read

```
Using Calven MCP, give me the market read on the [category] tools category.

CONTEXT
We are buying a tool in [category]. I want to know where the category is heading and which vendors analysts and our research name, before we shortlist.

PULL FROM THE UNIVERSE
- Trends and opportunities tagged to or describing [category].
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

[name the category]
```

### Step 5: the relationship check

```
Using Calven MCP, tell me whether [vendor] is also a customer, a prospect or a competitor we lose to.

CONTEXT
Before we buy from [vendor] I want to know the commercial relationship we already have with them.

PULL FROM THE UNIVERSE
- CRM accounts and deals where [vendor] is the account.
- Deals where [vendor] is listed as a competitor or as lost_to, and the deal drivers behind those losses.

BUILD
- The relationship in a few lines: customer, prospect, competitor, none, with the evidence.

OUTPUT
A short note with sources.

GROUNDING
Use only CRM rows and deal drivers in the Universe and cite them. If the pipeline category is restricted, say so.

[name the vendor]
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

## Good practice

- Ask whether the vendor is tracked before asking for a brief. An untracked vendor returns nothing, and that is the answer.
- Read recorded pricing with its date. Vendors change packaging often; the date tells you how much to trust it.
- Use the category read to build the shortlist, and the vendor brief to prepare the demo questions.
- Keep the vendor brief in the procurement file. It records what the company knew at decision time.

## Not covered today

- Vendors Calven does not track or that never appear in signals or analyst findings.
- Live vendor websites, review sites and pricing pages. The competitive intelligence agent monitors tracked vendors in the app.
- Security review, references, contract negotiation and the vendor register.
- Starting tracking of a new vendor. That is done in Calven.
