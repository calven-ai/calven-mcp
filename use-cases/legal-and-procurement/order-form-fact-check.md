# Order form and proposal fact check


A proposal or order form is on your desk, and what it promises in writing has to match what we sell. You get a redline list with the approved version of each plan name, inclusion, limit, integration, support term and price, plus a note of what the approver still has to decide. Calven checks it against the approved packaging, so you're not comparing it with a pricing page that may be stale and asking sales what they meant.

## Prompts

### Fact-check the proposal against pricing and packaging

```
Using Calven MCP, fact-check this proposal against our pricing and packaging.

FILL IN
- Account: [account]
- Proposal: [paste the proposal or order form]
- Months: [how many months of product changes to check, e.g. 6]

CONTEXT
The proposal is for the account above. Every plan, inclusion, limit, integration and list price in it must match what we sell.

PULL FROM THE UNIVERSE
- The product brief: pricing and packaging, capabilities and features, integrations.
- Product changes in the last number of months above that affect anything the document promises.

CHECK
- Each plan name, inclusion and limit: matches the brief, differs (give the approved version), or not in the brief.
- Each feature and integration promised: in the brief or not.
- Each list price and term: matches or differs. Mark discounts as "business decision" and show the list price they are taken from.

OUTPUT
A redline table: line in the document, verdict, approved version, source.

GROUNDING
Confirm only against the product brief and product changes in the Universe and cite the section. Do not approve or reject a discount; show the list price. This is a fact check, not legal advice.
```

### Get the deal context and check competitor claims

```
Using Calven MCP, give me the deal context behind this proposal and check what it says about the competitor.

FILL IN
- Account: [account]
- Competitor: [competitor]
- Proposal: [paste the proposal]

CONTEXT
I am reviewing the proposal for the account above. I want to know the deal it belongs to and whether the competitive statements in it hold.

PULL FROM THE UNIVERSE
- The CRM deal for the account: stage, amount, close date, competitors in play, owner.
- The competitor's battlecard if the proposal names or implies them.

BUILD
- The deal in four lines.
- Each statement about the competitor in the proposal with a verdict and the battlecard source.

OUTPUT
The context, then the competitive statements annotated.

GROUNDING
Use only CRM rows and the battlecard in the Universe and cite them. If the pipeline category is restricted, say so and skip the deal context.
```

### List what the brief can't confirm

```
Using Calven MCP, list what in this proposal the product brief cannot confirm.

FILL IN
- Proposal: [paste the proposal]

CONTEXT
Before I send the redline I want the questions I have to ask product or finance, separated from what the brief already settles.

PULL FROM THE UNIVERSE
- The product brief: pricing and packaging, capabilities, integrations, technical architecture.

BUILD
- Every promise in the document the brief does not cover, grouped: capability, integration, limit, price, support.
- For each, the question to ask and who is likely to own it.

OUTPUT
A short list of open questions.

GROUNDING
Do not answer an open question from general knowledge. "Not in the brief" is the finding.
```

## Ad hoc questions

- What does the [plan] plan include?
- What are the limits on [plan]?
- What is the list price of [plan] per [unit] per [period]?
- Does the brief list [integration]?
- Is [feature] included in [plan] or an add-on?
- What support terms does the brief describe?
- What stage is the [account] deal in, and who is the owner?
- Which competitors are in the [account] deal?
- Did anything in pricing or packaging change in the last six months?
- Does this proposal promise anything the brief does not cover: [paste]
