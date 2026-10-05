# Expansion plays


Without the record, expansion is a seat-count conversation at renewal. You get a quarterly list of accounts ready to buy more with the reason per account, a one-page case per opportunity in the customer's words and the sponsor's KPIs, and a talk track for the check-in. Calven finds the fit and the needs customers voiced, then frames the case you hand to sales.

## Prompts

### Find expansion opportunities in your book

```
Using Calven MCP, find expansion opportunities in my book of accounts.

FILL IN
- Accounts: [paste the account list]

CONTEXT
I want the accounts that fit a product or tier they do not have, with the evidence.

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
```

### Write the expansion case for one account

```
Using Calven MCP, write the expansion case for the account below on the product or tier below.

FILL IN
- Account: [account]
- Product: [product or tier]
- Base product: [base product]
- Reason: [why you think the product fits]
- Sponsor: [contact, title]

CONTEXT
The account owns the base product. I think the product fits for the reason above. I want a one-page case for the sponsor and a hand-off note for sales.

PULL FROM THE UNIVERSE
- The product brief for the product: what it does, how it fits with the base product, packaging.
- Quotes from the account that point at the need, with speaker and date.
- The persona canvas for the sponsor: KPIs, pains, objections.
- The messaging value proposition for that persona, and proof quotes from customers using the product.

BUILD
- The need in their words. What the product does about it. The outcome tied to the sponsor's KPI. Proof from a peer. The likely objection and the answer. The ask.
- A five-line hand-off note for sales: account, product, why now, who, what was said.

OUTPUT
The case and the note.

GROUNDING
Use only the Universe and cite it. Do not promise outcomes the brief and the proof quotes do not support. Do not state a price unless the brief holds it.
```

### Get a talk track for the check-in

```
Using Calven MCP, give me a two-minute talk track to raise the product below with the contact below.

FILL IN
- Product: [product]
- Contact: [contact]
- Account: [account]
- Date: [check-in date]

CONTEXT
I have a check-in with the contact at the account on the date above. I want to open the topic without pitching.

PULL FROM THE UNIVERSE
- The quote from the account that points at the need.
- The persona's jobs to be done and messaging hooks.
- Objection handling for the two most likely pushbacks.

WRITE
- The opener that quotes their own words back, two questions, the bridge to the product, the answers to the two pushbacks, the next step to propose.

OUTPUT
The talk track.

GROUNDING
Use only the Universe and cite it.
```

### Review how past expansions went

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
