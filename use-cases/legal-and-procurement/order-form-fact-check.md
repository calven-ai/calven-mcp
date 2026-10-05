# Order form and proposal fact check

**Team:** Legal and procurement · also sales, revenue operations, finance
**Impact:** Medium. A proposal or order form promises inclusions, limits, integrations and prices in writing. When they diverge from the approved packaging the company is bound to the wrong thing or has to walk it back after signature.
**Prerequisites:** strategy documents approved (product brief with pricing and packaging). Better with CRM connected (deal context) and competitors tracked (when the proposal positions against a rival).

## What the team is trying to do

Confirm that what the document promises is what the company sells: plan names, what each includes, usage limits, integrations, support terms, list prices and the basis for any discount. Done means a redline list with the approved version of each item and a note of what the approver has to decide. Without the Universe counsel compares the order form with a pricing page that may be stale and asks sales what they meant.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the deal context | Who the account is, deal size, stage, competitors in play | CRM deal and account rows | CRM deals, accounts |
| 2 | Check plan and inclusions | Confirm the plan exists and what it includes | Pricing and packaging in the product brief | Product brief |
| 3 | Check limits and add-ons | Seats, usage limits, modules, add-ons | Product brief | Product brief |
| 4 | Check capability promises | Features and integrations named in the proposal | Capabilities and integrations in the brief, recent product changes | Product brief, product changes |
| 5 | Check prices and discounts | List price, discount, term, payment terms | List prices in the brief; the discount itself is a business decision | Product brief |
| 6 | Check competitive statements | Anything said about a rival in the proposal | Battlecard | Competitor bundle |
| 7 | Legal terms | Liability, data, termination, exceptions | Calven does not help here | |
| 8 | Redline and approve | Write the changes and route for approval | The redline list with sources | Product brief |

## Recommended prompts

### Step 2 to 5: the inclusions and pricing check

```
Using Calven MCP, fact-check this proposal against our pricing and packaging.

CONTEXT
Below is a proposal or order form for [account]. Every plan, inclusion, limit, integration and list price in it must match what we sell.

PULL FROM THE UNIVERSE
- The product brief: pricing and packaging, capabilities and features, integrations.
- Product changes in the last [months] months that affect anything the document promises.

CHECK
- Each plan name, inclusion and limit: matches the brief, differs (give the approved version), or not in the brief.
- Each feature and integration promised: in the brief or not.
- Each list price and term: matches or differs. Mark discounts as "business decision" and show the list price they are taken from.

OUTPUT
A redline table: line in the document, verdict, approved version, source.

GROUNDING
Confirm only against the product brief and product changes in the Universe and cite the section. Do not approve or reject a discount; show the list price. This is a fact check, not legal advice.

[paste the proposal and name the account]
```

### Step 1 and 6: deal context and competitive statements

```
Using Calven MCP, give me the deal context behind this proposal and check what it says about [competitor].

CONTEXT
I am reviewing a proposal for [account]. I want to know the deal it belongs to and whether the competitive statements in it hold.

PULL FROM THE UNIVERSE
- The CRM deal for [account]: stage, amount, close date, competitors in play, owner.
- The battlecard for [competitor] if the proposal names or implies them.

BUILD
- The deal in four lines.
- Each statement about [competitor] in the proposal with a verdict and the battlecard source.

OUTPUT
The context, then the competitive statements annotated.

GROUNDING
Use only CRM rows and the battlecard in the Universe and cite them. If the pipeline category is restricted, say so and skip the deal context.

[paste the proposal and name the account and the competitor]
```

### Gap: what the brief does not settle

```
Using Calven MCP, list what in this proposal the product brief cannot confirm.

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

[paste the proposal]
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

## Good practice

- Paste the full document, including the order form schedule. Inclusions and limits usually sit in the exhibit, not the cover.
- Ask for the list price next to every discount. Counsel confirms the basis; finance decides the discount.
- Treat "not in the brief" as the question list for product. Do not let the AI tool guess an inclusion.
- Rerun after a packaging change. The brief is the approved source, so the check is only as current as the brief.

## Not covered today

- Legal terms, liability, data processing and termination positions. The fallback positions live in the contract templates.
- Discount approval and deal desk policy.
- CRM write-back of the redline or the approval.
- The signed document itself.
