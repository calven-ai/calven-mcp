# Pricing and packaging questions


A customer wants to know what their plan includes, what the next one adds, or why it costs so much, and pricing changes more often than your macros do. You get an answer that matches the approved packaging and what sales and the website say, plus a clear call on when to hand off to sales. Calven answers from the approved brief, so you're not the last to hear about a change.

## Prompts

### Answer a plans and pricing question

```
Using Calven MCP, answer a customer's question about our plans and pricing.

FILL IN
- Question: [paste the customer's question]

CONTEXT
I need the approved packaging answer to the question and to know whether pricing changed recently.

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
```

### Respond to a too-expensive objection

```
Using Calven MCP, help me respond to a customer who says we are too expensive.

FILL IN
- Message: [paste the message]

CONTEXT
The customer who sent the message is an existing customer deciding whether to renew or upgrade.

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
```

### Compare two plans for an upgrade

```
Using Calven MCP, compare two plans for a customer deciding whether to upgrade.

FILL IN
- Current plan: [plan A]
- Upgrade plan: [plan B]
- Need: [the capability or limit the customer needs]

CONTEXT
The customer has the current plan and needs the capability or limit above. I want to show what the upgrade plan adds.

PULL FROM THE UNIVERSE
- The product brief: pricing and packaging, the inclusions of each plan.
- The capability section for what they need.

BUILD
- A short table: what they have, what the upgrade adds, which line answers their need.

OUTPUT
The table and a two-line recommendation, cited to the brief.

GROUNDING
List only inclusions the brief states. Flag anything the brief does not cover as a question for sales.
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
