# Pricing and packaging questions

**Team:** Customer support · also customer success, sales
**Impact:** Medium. Plan and pricing questions are frequent, and an agent who quotes an old price or the wrong plan inclusion creates a billing dispute. The product brief's pricing and packaging section is the one approved answer.
**Prerequisites:** strategy documents approved (product brief with pricing and packaging; messaging with objection handling).

## What the team is trying to do

Tell a customer what their plan includes, what the next plan adds, what a feature costs and how to respond when they say it is too expensive, consistently with what sales and the website say. Done means the answer matches the approved packaging and the agent knows when to hand off to sales. Pricing changes more often than macros do, and the agent is usually the last to hear.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Understand the question | Plan inclusion, upgrade, overage, discount, invoice | Calven does not help here | |
| 2 | Find the approved packaging | What each plan includes and costs | The product brief: pricing and packaging | Product brief |
| 3 | Check it is current | Confirm nothing changed | Product changes touching pricing or plans | Product changes |
| 4 | Handle a price objection | Respond when the customer says it is too expensive | Objection handling in messaging; what customers say about price and value on calls; the pricing verdict from win/loss | Messaging, quotes, win/loss dashboard (pricing) |
| 5 | Write the reply | Clear answer, next step | A draft in the approved words | Product brief, messaging |
| 6 | Hand off | Route a discount or contract question to sales or CS | Who owns the account | CRM deals |
| 7 | Look up the account's own terms | What this customer actually pays | Calven does not help here (billing system) | |

## Recommended prompts

### Step 2 and 3: the approved answer

```
Using Calven MCP, answer a customer's question about our plans and pricing.

CONTEXT
The customer asked the question below. I need the approved packaging answer and to know whether pricing changed recently.

PULL FROM THE UNIVERSE
- The product brief: pricing and packaging, including what each plan includes and any limits.
- Product changes in the last 90 days that touch pricing, plans or limits.

ANSWER
- What the customer asked, answered from the brief.
- Whether a recent change affects it.
- Whether this needs sales or CS (discounts, contracts, custom terms).

OUTPUT
A customer-ready reply, the brief section it relies on, and the hand-off recommendation.

GROUNDING
Quote only the brief. Do not state a price the brief does not list. If the brief is silent, say "not in the brief" and route to sales.

[paste the customer's question]
```

### Step 4: a price objection from an existing customer

```
Using Calven MCP, help me respond to a customer who says we are too expensive.

CONTEXT
The customer's message is below. They are an existing customer deciding whether to renew or upgrade.

PULL FROM THE UNIVERSE
- The objection handling section of our messaging on price and value.
- What customers say about price and value on calls, with quotes, especially from the same segment.
- The pricing verdict in the win/loss read: how buyers rate our price against competitors.

WRITE
- A reply that acknowledges the concern, restates the value in the customer's own words, and offers the right next step.
- A note on whether to involve the account owner.

OUTPUT
The reply, with sources for the value points and quotes.

GROUNDING
Use only approved objection handling and real quotes. Do not offer a discount or a term the brief does not include.

[paste the message]
```

### Step 5: plan comparison for an upgrade question

```
Using Calven MCP, compare [plan A] and [plan B] for a customer deciding whether to upgrade.

CONTEXT
The customer needs [capability or limit]. I want to show what the higher plan adds.

PULL FROM THE UNIVERSE
- The product brief: pricing and packaging, the inclusions of each plan.
- The capability section for what they need.

BUILD
- A short table: what they have, what the upgrade adds, which line answers their need.

OUTPUT
The table and a two-line recommendation, cited to the brief.

GROUNDING
List only inclusions the brief states. Flag anything the brief does not cover as a question for sales.

[name the plans and the customer's need]
```

## Ad hoc questions

- What does [plan] include?
- Which plan includes [feature]?
- What is the list price of [plan] according to the brief?
- Did pricing or packaging change in the last 90 days?
- What is the approved response to "it is too expensive"?
- How do buyers rate our price against [competitor] in win/loss?
- What do customers say about value for money, in their words?
- Is there a limit on [usage dimension] in [plan]?
- Who owns the [account] relationship if they want a discount?
- What does the brief say about annual versus monthly terms?

## Good practice

- Quote the brief section back in the reply thread so a second agent can verify.
- Never improvise a price. If it is not in the brief, route it.
- Use a quote about value when handling an objection. A customer's words carry more than a feature list.
- After a pricing change, rerun the common questions once and refresh the macros.

## Not covered today

- The customer's own invoice, discount or contract. That is in the billing system or CRM, not Calven.
- Applying a discount or changing a plan.
- The pricing page itself. Calven holds the approved packaging; the website is published separately.
