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

## Advanced prompts

### Turn the packaging into a validator

```
Turn our approved packaging into a rule set that checks any order form line by line, and run it on this one. Use Calven MCP for the plans, inclusions, limits, add-ons and prices.

FILL IN
- Order form: [paste the order form or proposal pricing section]
- Approved exceptions: [paste our standing exceptions, e.g. max discount by term, or write "none"]
- Product: [product, or leave blank if we have only one]

CONTEXT
I check the same things on every order form: is the plan name real, is each inclusion in that plan, are limits stated as approved, is the price list or a recorded exception. Doing it by eye catches most errors. A rule set catches all of them the same way every time, and sales can run it before it reaches me.

FROM CALVEN
- The product brief's pricing and packaging section: plan names, inclusions, limits, add-ons, list prices, billing units.
- The integrations list in the brief.
- Product changes in the last six months that touched pricing or packaging.

BUILD
- Write the packaging as explicit rules: valid plan names, which features belong to which plan, which are add-ons, limit values per plan, list price per unit and period.
- Add the exception rules I gave you.
- Run every line of the order form through the rules. Each line passes, fails (with the rule it breaks and the approved value) or is unknown (the brief doesn't cover it).
- If you can run code, write the validator as a short Python script or a spreadsheet with the rules in one tab and a paste-in tab, so sales can reuse it.

OUTPUT
The rule set, the line-by-line result for this order form, and the reusable validator.

GROUNDING
Every rule cites the brief section or a product change. Don't create a rule the brief doesn't state; list it as a gap for the pricing owner. Unknown is a valid result.
```

### Test the concessions against precedent

```
Tell me whether the concessions in this deal are in line with what we've given before, and whether they buy us anything. Use Calven MCP for comparable deals and what price really did to our win rate.

FILL IN
- Deal: [deal]
- Concessions: [paste the non-standard terms: discount, payment terms, caps, extra inclusions]
- Exceptions log: [attach our past exceptions with deal name, terms and date, or write "none"]

CONTEXT
Sales says the deal needs these terms to close. I approve exceptions one at a time, which is how a one-off becomes the norm. I want to see this ask against the pattern before I sign.

FROM CALVEN
- The deal from the CRM mirror: amount, stage, size band, segment, competitors.
- Closed deals of the same size band and segment, with outcome, loss reason and price feedback.
- The pricing section of the win/loss dashboard: how often price decided deals, with n.

METHOD
- Join my exceptions log to the comparable deals by name. For each concession type, compute how often we gave it and the win rate with and without it.
- Place this deal's concessions on that distribution: typical, high or outlier.
- Ask whether price is a real deciding factor in this segment, from the dashboard, before accepting that the concession is needed.
- If you can run code, show the distributions as charts.

OUTPUT
A table per concession: precedent count, where this one sits, win rate with and without, and a recommendation: approve, approve with a give-get, or push back. Then a three-line note to the deal owner.

GROUNDING
Label every number as Calven (cited, with n), computed from my log and the deals (show the count), or your assumption. Say when comparable deals are too few to read. The price-decided rate comes from the dashboard, not from rows.
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
- Which add-ons does the brief list, and which plans can buy them?
- What do we record as [competitor]'s price for the plan this proposal compares against?
- How often did price decide our lost deals in [segment] last year, with n?
- Which closed deals in the same size band as [deal] were lost on price?
- What price feedback did buyers give on deals like [deal]?
- Does the product brief state a billing unit for [plan], and does this order form use it: [paste]
