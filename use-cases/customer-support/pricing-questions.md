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

## Advanced prompts

### Build a plan-fit calculator from the brief

```
Build a plan-fit calculator support can use live on a ticket: the customer's usage in, the right plan and the reason out. Use Calven MCP for the approved plans, limits and pricing.

FILL IN
- Usage dimensions: [the inputs that decide the plan, e.g. seats, volume, integrations, or write "from the brief"]
- Format: [HTML page, spreadsheet with formulas, or both]

CONTEXT
"Which plan do I need" tickets get a different answer from every agent, and a wrong one becomes a billing dispute. A calculator built from the approved packaging gives the same answer every time and shows its working.

FROM CALVEN
- The product brief's pricing and packaging section: plans, prices, limits, what each includes, terms.
- Product changes in the last 90 days that touched pricing or packaging.
- Customer quotes tagged Pricing or cost, to find the inputs customers get confused about.

BUILD
- List every input that changes the recommendation, with the limit per plan and its source line.
- Write the decision logic: smallest plan that covers every input, and the next limit the customer would hit.
- Build it as a single HTML file with inputs, a result, and a "why" panel quoting the brief, or as a spreadsheet with formulas and a sources tab. If you can run code, test it with ten example customers including edge cases on each limit.
- Add a warning wherever the brief is silent, so the agent escalates instead of guessing.

OUTPUT
The calculator file, the ten test cases with expected results, and a short list of packaging questions the brief doesn't answer.

GROUNDING
Every price and limit cites the brief or a product change. Don't invent a limit, discount or plan the brief doesn't state; mark the gap instead.
```

### Find the force behind too expensive

```
Break "too expensive" tickets into the four forces behind them (push, pull, anxiety, habit) and tell me which ones support can actually move. Use Calven MCP for how buyers and customers talk about price and value.

FILL IN
- Price tickets: [attach or paste a sample of tickets that complain about price or ask for a discount]
- Window: [window]

CONTEXT
"Too expensive" is rarely about the number. Sometimes the customer isn't getting the value, sometimes a rival offered a deal, sometimes they don't know what they're paying for. Each needs a different answer, and only some need a discount.

FROM CALVEN
- Customer quotes tagged Pricing or cost, and the value-for-money theme with its sentiment.
- The win/loss dashboard's pricing section and deal drivers in the Commercials category, with n.
- The approved objection handling for price from the messaging document.

METHOD
- Classify each ticket by its dominant force: push (the value isn't landing), pull (a cheaper rival or in-house option), anxiety (fear of a bill, unclear terms), habit (they never used what they pay for).
- Check each force's share against the call and win/loss evidence. Say where tickets and calls disagree.
- For each force, write the support answer: the value proof, the honest comparison, the plain-terms explanation, the adoption nudge. Mark which ones genuinely need a commercial conversation.

OUTPUT
A table of the four forces with ticket share, matching Calven evidence, the response and who owns it, then four macros.

GROUNDING
Label every number as Calven (cited, with n), mine (from the tickets), or your assumption. Responses stay inside the approved objection handling and the brief. Don't offer a discount the brief doesn't allow.
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
- Which competitor do buyers say is cheaper, and did we still win against them?
- What's the most common pricing confusion customers raise on calls?
- Which plan limit do customers hit first, according to their quotes?
- Do lost deals with loss reason Price cluster in one segment?
- What's the approved value proof to pair with the price of [plan]?
- Which pricing claims on our site have a concern flagged?
