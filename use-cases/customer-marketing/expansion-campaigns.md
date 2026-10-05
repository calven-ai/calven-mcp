# Expansion campaigns

**Team:** Customer marketing · also customer success, sales, product marketing
**Impact:** High. Expansion is the cheapest revenue a company has, and the campaign only works when the offer fits what the account already owns and what its people have asked for. Calven holds both.
**Prerequisites:** strategy documents approved (product brief with cross-sell paths, messaging, ICP), CRM connected (accounts, contacts, deals by type), call transcripts ingested (quotes by account). Product usage and entitlements stay outside.

## What the team is trying to do

Run cross-sell, upsell and seat-growth campaigns to the installed base that land because they name a need the account has already voiced. Done means a target list with the next product per account and the reason, messaging per persona, and emails and one-pagers that pass the fact-check. Without the company's own evidence, expansion campaigns are a generic feature announcement sent to everyone.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the offer | Which product or tier to expand into, from which base | The product brief's expansion and cross-sell paths, bundling, and each product's ICP | Product brief, ICP (per product) |
| 2 | Build the target list | Which accounts fit the next product | Customer accounts by best-fit product, ICP tier and firmographics; open or past expansion and upsell deals | CRM accounts, CRM deals |
| 3 | Find the voiced need | Which accounts asked for what the offer does | Quotes by account tagged job to be done, gain or product feedback on the capability; themes by product | Quotes, themes |
| 4 | Pick the persona and stakeholder | Who at the account decides and who uses it | Contacts by buying role; the persona canvas for the decision maker and the user | CRM contacts, personas |
| 5 | Write the messaging | The value proposition for the expansion, per persona | Messaging by persona and the vertical or campaign variations; the product brief for what is true | Messaging, product brief |
| 6 | Build the assets | Emails, one-pager, CSM talk track, landing page | Drafts in the customer's words with proof from similar accounts | Quotes, positioning proof points |
| 7 | Fact-check | Pricing, packaging, integrations | Product brief pricing and packaging; product changes since the last campaign | Product brief, product changes |
| 8 | Review as the buyer | How the persona reads the offer | Persona review | review_against_personas |
| 9 | Launch and hand to CS | Send, track, route replies to CSMs | Calven does not help here | |
| 10 | Measure | Opens, meetings, expansion deals created | Expansion and upsell deals opened since the send, by account | CRM deals |

## Recommended prompts

### Step 1 and 2: offer and target list

```
Using Calven MCP, build the target list for an expansion campaign for [product or tier].

CONTEXT
We want to sell [product or tier] to existing customers who own [base product]. I want the accounts most likely to buy and the reason for each.

PULL FROM THE UNIVERSE
- The product brief: what [product] does and the cross-sell paths from [base product].
- The ICP for [product]: the attributes and use cases that define fit.
- Customer accounts (lifecycle stage Customer) with their ICP fit tier, best-fit product, industry, size and triggers.
- Open, won or lost expansion and upsell deals on those accounts.

BUILD
- A ranked table: account, fit for [product], the attribute that drives it, any past expansion deal and its outcome, the contacts by buying role.
- Exclude accounts with an open expansion deal already.

OUTPUT
The table, then the top ten with one line each on the pitch.

GROUNDING
Rank only on ICP attributes and CRM data in the Universe and cite them. Product usage is not in Calven; say so and suggest CS add it.

[name the product or tier and the base product]
```

### Step 3: find the voiced need

```
Using Calven MCP, find which customer accounts have asked for what [product] does.

CONTEXT
Below is my target list. I want to know which of these accounts voiced the need on a call, so the email can open with their own words.

PULL FROM THE UNIVERSE
- Customer quotes from each account tagged job to be done, gain, goal or product feedback that relate to [capability].
- The themes those quotes belong to, with mention counts.

BUILD
- For each account: the quote, who said it, when, and the line of the email it supports.
- A second list of accounts with no voiced need, to get the generic version.

OUTPUT
Two lists.

GROUNDING
Use only quotes in the Universe, verbatim and cited. Do not infer a need from the account's industry.

[paste the account list and name the capability]
```

### Step 5 and 6: messaging and the email

```
Using Calven MCP, write the expansion email for [persona] at accounts that own [base product].

CONTEXT
The offer is [product or tier]. The reader is a [persona] who already uses us. Subject under 50 characters, body under 140 words, one CTA: [CTA].

PULL FROM THE UNIVERSE
- The messaging value proposition for [persona], and the campaign variation for existing customers if there is one.
- The product brief for [product]: what it does, how it fits with [base product], pricing if public.
- Quotes from customers who already use [product], tagged quantified outcome or time to value.

WRITE
- Three subject lines.
- The email: the need in their words, what [product] adds to what they have, one proof quote, the CTA.
- A two-line version for the CSM to paste into a check-in.

OUTPUT
The subject lines, the email, the CSM line, and the pillar it leans on.

GROUNDING
Use only claims in the product brief and messaging, and quotes in the Universe, cited. Do not state a price unless the brief has it.

[name the persona, base product, offer and CTA]
```

### Step 7: fact-check

```
Using Calven MCP, fact-check the expansion campaign assets.

CONTEXT
Below are the email, the one-pager and the landing page copy for the [product] expansion campaign.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging for [product] and [base product].
- Product changes in the last [window] and any document they left stale.

CHECK
- Mark each claim correct, wrong, stale or not in the brief.
- Flag any bundling or pricing statement the brief does not support.

OUTPUT
The assets annotated inline, then the list for a human to confirm.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief".

[paste the assets]
```

### Step 10: measure

```
Using Calven MCP, show me the expansion deals opened since [date] on the campaign accounts.

CONTEXT
The campaign went out on [date] to the accounts below. I want to see what moved in the CRM.

PULL FROM THE UNIVERSE
- Expansion and upsell deals on those accounts opened after [date]: stage, amount band, owner.
- Any quote from those accounts after [date] that mentions [product].

BUILD
- A table of accounts with a deal opened, and a list of accounts with a new mention but no deal.

OUTPUT
The two lists and the count of each.

GROUNDING
Use only CRM deals and quotes in the Universe and cite them. Email engagement is not in Calven; I will add it from the email tool.

[paste the account list and the date]
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

## Good practice

- Start from the product brief's cross-sell paths. If the path is not written down, write it in Calven first; the campaign will be clearer.
- Rank by fit, then look for the voiced need. An account that asked for the capability gets its own email; the rest get the segment version.
- Address the decision maker and the user separately. The contact list and personas tell you who each is.
- Give CSMs the two-line version. Expansion closes in conversations more than in email.
- Rerun the fact-check after each release. Packaging changes break expansion copy first.

## Not covered today

- Product usage, entitlements and seat counts are not in Calven; they come from the product or billing system.
- Sending, tracking and routing replies happen in the marketing automation tool and the CRM.
- Calven does not create the expansion deal; sales or CS does, and Calven reads it on the next sync.
