# Expansion plays

**Team:** Customer success · also account management, sales, customer marketing
**Impact:** High. CSMs source most expansion, and they do it best when they can name the product that fits what the account already asked for, frame it for the economic buyer, and hand sales a case rather than a hunch.
**Prerequisites:** CRM connected (accounts, contacts, deals by type), product brief approved (cross-sell paths, packaging), call transcripts ingested (asks and jobs to be done by account). ICP per product adds fit. Usage and entitlements come from outside.

## What the team is trying to do

Spot the accounts ready to buy more, name the right product or tier, frame the case in the customer's words and the sponsor's KPIs, and open the deal with sales. Done means a quarterly expansion list with the reason per account, a one-page case per opportunity, and a talk track for the check-in. Without the company's own record, expansion is a seat-count conversation at renewal.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Know the paths | What can be sold to whom | The product brief's expansion and cross-sell paths, bundling and packaging | Product brief |
| 2 | Scan the book | Which accounts fit the next product | Customer accounts with ICP fit per product, best-fit product, size and triggers; existing expansion deals | CRM accounts, CRM deals |
| 3 | Find the ask | Which accounts voiced the need | Quotes by account tagged job to be done, gain, goal or product feedback on the capability | Quotes |
| 4 | Frame the case | Value for the sponsor | The persona's KPIs and pains; the value proposition for that persona; proof from customers already using the product | Persona canvas, messaging, quotes |
| 5 | Prepare the conversation | Talk track and objections | Messaging objection handling; pricing and packaging from the brief | Messaging, product brief |
| 6 | Open the deal | Hand to sales or create it | Calven does not help here | |
| 7 | Track | Stage and outcome | Expansion deals by stage and outcome, loss reasons on lost expansions | CRM deals |

## Recommended prompts

### Step 2 and 3: the quarterly expansion list

```
Using Calven MCP, find expansion opportunities in my book of accounts.

CONTEXT
My accounts are listed below. I want the ones that fit a product or tier they do not have, with the evidence.

PULL FROM THE UNIVERSE
- The product brief: expansion and cross-sell paths, and each product's ICP summary.
- For each account: ICP fit per product, best-fit product, size, triggers, and any expansion or upsell deal (open, won or lost, with loss reason).
- Quotes from each account tagged job to be done, gain, goal or product feedback, with the capability they point at.

BUILD
- A table: account, the product or tier that fits, fit reason, the voiced need (quote and speaker) if any, past expansion history, suggested timing.
- Rank by evidence strength: voiced need plus fit first.

OUTPUT
The table and the five to work this quarter.

GROUNDING
Use only the Universe and cite it. Usage and entitlements are not in Calven; say so and leave those columns for me.

[paste the account list]
```

### Step 4: the expansion case

```
Using Calven MCP, write the expansion case for [account] on [product or tier].

CONTEXT
[account] owns [base product]. I think [product] fits because [reason]. The sponsor is [contact], [title]. I want a one-page case for them and a hand-off note for sales.

PULL FROM THE UNIVERSE
- The product brief for [product]: what it does, how it fits with [base product], packaging.
- Quotes from [account] that point at the need, with speaker and date.
- The persona canvas for [contact]: KPIs, pains, objections.
- The messaging value proposition for that persona, and proof quotes from customers using [product].

BUILD
- The need in their words. What [product] does about it. The outcome tied to the sponsor's KPI. Proof from a peer. The likely objection and the answer. The ask.
- A five-line hand-off note for sales: account, product, why now, who, what was said.

OUTPUT
The case and the note.

GROUNDING
Use only the Universe and cite it. Do not promise outcomes the brief and the proof quotes do not support. Do not state a price unless the brief holds it.

[name the account, products, sponsor and reason]
```

### Step 5: the check-in talk track

```
Using Calven MCP, give me a two-minute talk track to raise [product] with [contact] at [account].

CONTEXT
I have a check-in on [date]. I want to open the topic without pitching.

PULL FROM THE UNIVERSE
- The quote from [account] that points at the need.
- The persona's jobs to be done and messaging hooks.
- Objection handling for the two most likely pushbacks.

WRITE
- The opener that quotes their own words back, two questions, the bridge to [product], the answers to the two pushbacks, the next step to propose.

OUTPUT
The talk track.

GROUNDING
Use only the Universe and cite it.

[name the account, contact, product and date]
```

### Step 7: what happened to past expansions

```
Using Calven MCP, show me how expansion deals went this year and why.

CONTEXT
I want to know what works and what does not before I plan next quarter's plays.

PULL FROM THE UNIVERSE
- Expansion and upsell deals this year: status, stage, amount band, loss reason, price feedback, product feedback.
- Deal drivers on any surveyed expansion deals.

BUILD
- Won versus lost by product, with the loss reasons.
- The drivers behind the wins, with quotes where they exist.
- The pattern to repeat and the one to avoid.

OUTPUT
A short read.

GROUNDING
Use only the Universe and cite it. Counts, not rates, unless the dashboard provides the rate with n.
```

## Ad hoc questions

- What are the cross-sell paths from [base product]?
- Which of my accounts are Tier 1 fit for [product]?
- Has [account] asked for anything [product] does?
- What is the value proposition for [persona] on [product]?
- What do customers who use [product] say about the outcome?
- Which expansion deals did we lose this year and why?
- Who is the economic buyer at [account]?
- What does [persona] object to when offered more?
- Is [product] sold per seat, per workspace or as a tier?
- Which of my accounts have a funding or expansion trigger recorded?
- Write a two-line note to sales about an expansion at [account].

## Good practice

- Scan the book quarterly with the list prompt and keep the result next to usage data. Fit plus voiced need plus usage is the signal.
- Open with the customer's own ask. An expansion that answers a quote from their own team is not a pitch.
- Write the case for the economic buyer's KPIs, not the user's convenience. The persona canvas tells you which.
- Hand sales a five-line note with the quote. Reps act on evidence they can repeat.
- Check lost expansions before planning. The loss reasons show the objection to prepare for.

## Not covered today

- Usage, entitlements, seat counts and billing come from the product and billing systems.
- Creating or updating the expansion deal happens in the CRM.
- Pricing exceptions and quotes are handled by sales and finance.
