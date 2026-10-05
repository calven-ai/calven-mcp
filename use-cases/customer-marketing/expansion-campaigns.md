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

## Ad hoc questions

- Which customers own [base product] but not [product]?
- What are the cross-sell paths in our product brief?
- Which customer accounts are Tier 1 fit for [product]?
- Has anyone at [account] asked about [capability] on a call?
- What is the value proposition for [persona] on [product]?
- Which customers have an open upsell deal right now?
- Which accounts lost an expansion deal last year, and why?
- What do customers who use [product] say about the outcome?
- Who is the economic buyer at [account]?
- Is [product] priced per seat or per workspace in the brief?
- Which theme among existing customers has grown most this quarter?
- Which customer accounts have an exec hire or funding trigger recorded?
