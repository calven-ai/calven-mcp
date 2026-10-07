# Expansion campaigns


You're running a cross-sell, upsell or seat-growth campaign to the installed base and want it to land. You walk away with a target list with the next product and the reason per account, messaging per persona, and emails and one-pagers that pass the fact-check. Calven finds the need each account has already voiced, so it isn't a generic feature announcement sent to everyone.

## Prompts

### Build the expansion target list

```
Using Calven MCP, build the target list for an expansion campaign for the product or tier below.

FILL IN
- Product: [product or tier]
- Base product: [base product]

CONTEXT
We want to sell the product to existing customers who own the base product. I want the accounts most likely to buy and the reason for each.

PULL FROM THE UNIVERSE
- The product brief: what the product does and the cross-sell paths from the base product.
- The ICP for the product: the attributes and use cases that define fit.
- Customer accounts (lifecycle stage Customer) with their ICP fit tier, best-fit product, industry, size and triggers.
- Open, won or lost expansion and upsell deals on those accounts.

BUILD
- A ranked table: account, fit for the product, the attribute that drives it, any past expansion deal and its outcome, the contacts by buying role.
- Exclude accounts with an open expansion deal already.

OUTPUT
The table, then the top ten with one line each on the pitch.

GROUNDING
Rank only on ICP attributes and CRM data in the Universe and cite them. Product usage is not in Calven; say so and suggest CS add it.
```

### Find accounts that asked for the product

```
Using Calven MCP, find which customer accounts have asked for what the product below does.

FILL IN
- Accounts: [paste the account list]
- Product: [product]
- Capability: [capability]

CONTEXT
The accounts are my target list. I want to know which of them voiced the need on a call, so the email can open with their own words.

PULL FROM THE UNIVERSE
- Customer quotes from each account tagged job to be done, gain, goal or product feedback that relate to the capability.
- The themes those quotes belong to, with mention counts.

BUILD
- For each account: the quote, who said it, when, and the line of the email it supports.
- A second list of accounts with no voiced need, to get the generic version.

OUTPUT
Two lists.

GROUNDING
Use only quotes in the Universe, verbatim and cited. Do not infer a need from the account's industry.
```

### Write the expansion email

```
Using Calven MCP, write the expansion email for the persona below at accounts that own the base product.

FILL IN
- Persona: [persona]
- Base product: [base product]
- Offer: [product or tier]
- CTA: [CTA]

CONTEXT
The reader is the persona and already uses us. Subject under 50 characters, body under 140 words, one CTA: the one above.

PULL FROM THE UNIVERSE
- The messaging value proposition for the persona, and the campaign variation for existing customers if there is one.
- The product brief for the offer: what it does, how it fits with the base product, pricing if public.
- Quotes from customers who already use the offer, tagged quantified outcome or time to value.

WRITE
- Three subject lines.
- The email: the need in their words, what the offer adds to what they have, one proof quote, the CTA.
- A two-line version for the CSM to paste into a check-in.

OUTPUT
The subject lines, the email, the CSM line, and the pillar it leans on.

GROUNDING
Use only claims in the product brief and messaging, and quotes in the Universe, cited. Do not state a price unless the brief has it.
```

### Fact-check the campaign assets

```
Using Calven MCP, fact-check the expansion campaign assets.

FILL IN
- Assets: [paste the email, the one-pager and the landing page copy]
- Product: [product]
- Base product: [base product]
- Window: [time window, e.g. last 90 days]

CONTEXT
The assets are for the product's expansion campaign.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging for the product and the base product.
- Product changes in the window and any document they left stale.

CHECK
- Mark each claim correct, wrong, stale or not in the brief.
- Flag any bundling or pricing statement the brief does not support.

OUTPUT
The assets annotated inline, then the list for a human to confirm.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief".
```

### Track expansion deals on campaign accounts

```
Using Calven MCP, show me the expansion deals opened since the campaign went out on the campaign accounts.

FILL IN
- Accounts: [paste the account list]
- Date: [date the campaign went out]
- Product: [product]

CONTEXT
The campaign went out on the date above to the accounts. I want to see what moved in the CRM.

PULL FROM THE UNIVERSE
- Expansion and upsell deals on those accounts opened after the date: stage, amount band, owner.
- Any quote from those accounts after the date that mentions the product.

BUILD
- A table of accounts with a deal opened, and a list of accounts with a new mention but no deal.

OUTPUT
The two lists and the count of each.

GROUNDING
Use only CRM deals and quotes in the Universe and cite them. Email engagement is not in Calven; I will add it from the email tool.
```

## Advanced prompts

### Pick the offer with a decision tree

```
Build an expected-value decision tree for the expansion offers I'm weighing and tell me which one to run. Use Calven MCP for the eligible accounts, our expansion deal history and what customers have asked for.

FILL IN
- Offers: [paste two or three offers: product, discount or trial, target accounts]
- Campaign cost: [budget and team time]
- Gross margin on expansion revenue: [percentage, or write "use 80%"]

CONTEXT
I can run one expansion play this quarter. Each offer has a different reach, a different chance of turning into a deal, and a different risk of irritating accounts close to renewal. I want the money math, not the loudest opinion.

FROM CALVEN
- The cross-sell paths and pricing in the product brief for each offer's product.
- The customer accounts that fit each offer, and how many already have an open expansion or upsell deal.
- Won and lost expansion and upsell deals from the CRM over the last 12 months: counts, amounts and loss reasons.
- Quotes from customer accounts asking for the capability each offer sells.

MODEL
- For each offer, draw the tree: account engages or not, opportunity opens or not, won or lost, with a renewal-risk branch where the offer touches price.
- Set each probability from the Calven deal history where it exists and a stated assumption where it doesn't. Raise the open rate for accounts that asked on a call, and say by how much.
- Compute expected value per offer, net of cost. If you can run code, run a Monte Carlo over the uncertain branches and show the range.
- Find the break-even: the win rate at which each offer pays back.

OUTPUT
The tree for each offer, a table of expected value, range and break-even win rate, and a three-line recommendation.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A win rate you compute from deal rows says so. Don't infer usage or entitlements; Calven doesn't hold them.
```

### Find when accounts are ready to expand

```
Run a survival analysis on when our customers expand, so the campaign lands when accounts are ready instead of when the calendar says. Use Calven MCP for the expansion deals and the signals that came before them.

FILL IN
- Customer list: [attach a CSV: account name, contract start date, current ARR, renewal date]
- Product to expand into: [product]

CONTEXT
We send expansion offers on a schedule. I suspect most accounts expand in a window after they go live, and some triggers pull it earlier. I want the timing curve.

FROM CALVEN
- Every expansion and upsell deal in the CRM, won or lost, with account, opened date, close date, amount and status.
- The triggers recorded on each customer account (funding, exec hire, expansion, M&A) and its ICP tier.
- Dated quotes from customer accounts asking for more seats, more teams or the product.

METHOD
- Join the deals to my CSV by account name. Event: first expansion deal opened. Time: months since contract start. Accounts with no expansion deal are censored at the export date.
- Fit a Kaplan-Meier curve and report the median time to first expansion and the months where the hazard peaks.
- Split the curve by ICP tier, by whether a trigger is recorded, and by whether the account asked on a call. If you can run code, fit a Cox model on those three and show the hazard ratios with intervals.
- Name the accounts sitting in the peak window that have no expansion deal open.

OUTPUT
The survival curves as charts, a table of hazard ratios, the send-timing rule in one sentence, and the list of accounts to contact first.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Contract dates and ARR are mine. With fewer than 30 expansion events, call the curve directional. Don't treat an unmatched account name as "never expanded"; list the unmatched ones.
```

### Map the forces holding expansion back

```
Map the four forces on an expansion decision (push, pull, anxiety, habit) for one product, then rewrite the campaign to work on the force that's actually stuck. Use Calven MCP for what customers have said, in their words.

FILL IN
- Product to expand into: [product]
- Campaign draft: [paste the email or landing page]
- Segment: [segment]

CONTEXT
Expansion campaigns pile on pull: more features, more value. Accounts that already own us mostly stall on anxiety and habit: another rollout, another budget line, the workaround that's good enough. I want to see which force is stuck before I write another benefit.

FROM CALVEN
- Quotes from customer accounts in the segment about the product or its capabilities, by category (Pain, Objection, Job to be done, Buying trigger) and sentiment.
- Deal drivers and loss reasons on lost expansion and upsell deals.
- The value proposition and objection handling for the product from the messaging document.

METHOD
- Sort every quote and driver into push (pain with what they have), pull (the draw of the product), anxiety (fear of adding or switching) and habit (the workaround). Keep the verbatim.
- Score each force by how much evidence it carries and how strong the language is, and name the bottleneck.
- Read my draft and mark which force each sentence works on.
- Rewrite the draft so at least half of it lowers anxiety or breaks habit, using the customers' words and the approved objection handling.

OUTPUT
The forces as a four-box table with the top three quotes per box, the bottleneck in one line, my draft annotated, then the rewrite.

GROUNDING
Label every count as Calven (cited, with n) or your judgement. Quotes stay verbatim. Which box a quote goes in is your call, so label it. Don't invent an objection no customer raised.
```

## Ad hoc questions

- Which customers own [base product] but not [product]?
- What are the cross-sell paths in our product brief?
- Which customer accounts are Tier 1 fit for [product]?
- Has anyone at [account] asked about [capability] on a call?
- What is the value proposition for [persona] on [product]?
- Which customers have an open upsell deal?
- Which accounts lost an expansion deal last year, and why?
- What do customers who use [product] say about the outcome?
- Who is the economic buyer at [account]?
- Is [product] priced per seat or per workspace in the brief?
- Which theme among existing customers has grown most this quarter?
- Which customer accounts have an exec hire or funding trigger recorded?
- Which customer accounts raised a pain that [product] solves but have no expansion deal open?
- Which lost expansion deals cited price, and what did the buyer say?
- Which buying roles at our customer accounts have no contact at all?
- Which triggers were recorded on accounts before their won upsell deals?
- Which objection do existing customers raise about [product] that new buyers don't?
- Which competitor shows up most on the expansion deals we lost?
