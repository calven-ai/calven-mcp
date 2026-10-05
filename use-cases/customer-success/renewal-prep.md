# Renewal prep

**Team:** Customer success · also account management, sales leadership, RevOps, account executives
**Impact:** High. The renewal is decided by whether the customer still believes the reason they bought. Preparing it from the original deal, the year's conversations and the competitor they might be hearing from turns a form-filling exercise into a defended renewal and, often, an expansion.
**Prerequisites:** CRM connected (the original deal, the renewal deal, contacts), win/loss surveys running (why they bought), call transcripts ingested (the year's conversations), competitors tracked (battlecards). Product changes add what improved since they signed.

## What the team is trying to do

Walk into the renewal conversation 90 to 180 days out with the case in the customer's words, the risks named, the competitor handled, and the expansion framed. Done means a renewal brief, a risk list with mitigations, talking points for the sponsor, and a plan for the stakeholders. Without the company's own record, the renewal is a price conversation.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Find the renewals | Which contracts renew in the window | Renewal deals by close date, with amount band, owner and stage | CRM deals (type Renewal) |
| 2 | Recall why they bought | The original drivers and the sponsor's goals | Deal drivers and survey answers from the original deal; the quotes from the sales calls | Deal drivers, survey responses, quotes |
| 3 | Review the year | What they said, asked, complained about | Quotes from the account over the contract year by sentiment and category; competitor mentions | Quotes, conversations |
| 4 | Assess the risk | Stakeholder change, unmet asks, competitor interest, price pushback | Contacts still on the account by role; negative quotes; competitor mentions; price feedback on the deal | CRM contacts, quotes, CRM deals |
| 5 | Prepare the competitor angle | If a rival is in play | The battlecard: where we win, where we lose, objection handling; win/loss evidence against them in this segment | Competitor battlecard, deal drivers, competitive dashboard |
| 6 | Show what improved | Product changes since signature that serve their use cases | Product changes mapped to the account's use cases | Product changes, product brief |
| 7 | Frame the expansion | What to add at renewal | Cross-sell paths and the asks from this account's quotes | Product brief, quotes |
| 8 | Write the brief and talking points | For the CSM and the sponsor conversation | The renewal brief | All above |
| 9 | Negotiate and close | Pricing, terms, paperwork | Calven does not help here beyond pricing and packaging facts in the brief | Product brief |
| 10 | Learn | If lost or downgraded, why | A renewal that is surveyed becomes a surveyed deal with drivers | Surveyed deals, deal drivers |

## Recommended prompts

### Step 1: the renewal window

```
Using Calven MCP, list the renewals closing in the next [days] days.

CONTEXT
I run the weekly renewal review. I want every renewal deal in the window with what I should know first.

PULL FROM THE UNIVERSE
- Renewal deals with a close date in the next [days] days: account, amount band, stage, owner, competitors on the deal, price feedback.
- For each account: the contacts by buying role, and whether a champion is still listed.
- Negative quotes or competitor mentions from each account in the last six months.

BUILD
- A table ranked by close date: account, amount band, stage, champion present, risk signals from the quotes, competitor in play.
- The three renewals to work first and why.

OUTPUT
The table and the three.

GROUNDING
Use only CRM deals, contacts and quotes in the Universe, cited. Health scores and usage are not in Calven; say so.

[name the number of days]
```

### Step 2 to 8: the renewal brief

```
Using Calven MCP, prepare the renewal for [account].

CONTEXT
[account] renews on [date], [amount band]. The sponsor is [contact], [title]. I want the case in their words, the risks, and what to propose.

PULL FROM THE UNIVERSE
- The original deal: drivers that decided it, the buyer's survey answers, quotes from the sales calls on goals and gains.
- Quotes from [account] over the contract year, by sentiment and category, with speaker and date; competitor mentions.
- Contacts on the account today by buying role, versus who was in the original deal.
- Product changes since [signature date] mapped to the use cases they bought.
- The product brief: packaging, pricing, cross-sell paths.
- If a competitor is mentioned: their battlecard and our win/loss record against them in [segment].

BUILD
- The case: why they bought, in their words, and what we delivered against each driver (I will add the numbers).
- The risks: stakeholder change, unmet asks, competitor interest, price pushback, each with evidence and a mitigation.
- What improved: product changes that serve them, in plain words.
- The proposal: the renewal plus the expansion that fits the asks in their quotes.
- Talking points for the sponsor: five lines, each tied to their persona's KPIs.

OUTPUT
A one-page renewal brief with sources.

GROUNDING
Use only the Universe and cite it. Do not invent delivered value; mark where I must add numbers. Do not quote a price unless the brief holds it.

[name the account, dates, amount band and sponsor; paste outcome numbers if you have them]
```

### Step 4: risk read across the book

```
Using Calven MCP, find renewal risk signals across my accounts.

CONTEXT
My accounts are listed below. I want the ones whose own words suggest risk before the renewal conversation.

PULL FROM THE UNIVERSE
- Negative quotes from each account in the last [window], by category, with speaker.
- Competitor mentions from each account.
- Contacts by buying role; accounts where the champion or economic buyer is missing.
- Loss reasons from deals we lost in the same segment, to know what usually goes wrong.

BUILD
- A table: account, renewal date, risk signals (quotes, competitor, stakeholder gap), the matching loss pattern from the segment.
- The accounts with no signals and no calls, which is its own risk.

OUTPUT
The table ranked by renewal date.

GROUNDING
Use only the Universe and cite it. Say which accounts have no ingested conversations rather than reporting them as healthy.

[paste the account list and name the window]
```

### Step 5: the competitor in the renewal

```
Using Calven MCP, prepare me for [account]'s renewal where [competitor] is in play.

CONTEXT
[contact] told us they are being pitched by [competitor]. The renewal is in [weeks] weeks.

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: how we win, where we lose, landmines, objection handling, proof points.
- Our win/loss record against [competitor] in [segment], with the drivers that decided those deals.
- [account]'s original reasons for choosing us, and whether [competitor] was in that deal.
- Quotes from customers who chose us over [competitor] on switching cost or time to value.

BUILD
- The three reasons they chose us that still hold, with quotes.
- What [competitor] will say, and the answer for each.
- The questions to ask [contact] to surface what [competitor] promised.
- Where we genuinely lose to them, so I do not get surprised.

OUTPUT
A one-page competitive renewal plan.

GROUNDING
Use only the Universe and cite it. Do not invent competitor claims or weaknesses.

[name the account, contact, competitor, segment and weeks]
```

### Step 10: learn from a lost renewal

```
Using Calven MCP, tell me why we lost the [account] renewal.

CONTEXT
[account] did not renew. I want the record, not the story.

PULL FROM THE UNIVERSE
- The renewal deal: loss reason, lost to, price and product feedback.
- The surveyed deal and its drivers, if the renewal was surveyed.
- Quotes from [account] in the last year that pointed at it.
- Loss reasons across renewals this year, for the pattern.

BUILD
- The reasons in order, each with evidence.
- Which signals were visible in the quotes before the decision.
- Whether this matches the segment's loss pattern.

OUTPUT
A short post-mortem.

GROUNDING
Use only the Universe and cite it. If the renewal was not surveyed, say so and recommend enrolling the next ones.

[name the account]
```

## Ad hoc questions

- Which renewals close in the next 90 days?
- Why did [account] buy from us originally? Quote them.
- What has [account] complained about this year?
- Has anyone at [account] mentioned [competitor]?
- Is the champion from the [account] deal still a contact?
- What changed in the product since [account] signed that serves their use case?
- What is our win rate against [competitor] in [segment]?
- What did [account] say about price during the original deal?
- Which renewals this year were lost, and why?
- What should I propose as an expansion to [account], based on their asks?
- What is [sponsor persona] measured on?
- Draft five talking points for the [account] renewal in the sponsor's language.
- What nearly stopped the original deal at [account]?

## Good practice

- Start 180 days out with the renewal window prompt. Risk signals in quotes show up months before the conversation.
- Lead with their original reasons, verbatim. A renewal that restates the customer's own goal is hard to argue with.
- Paste delivered value numbers into the brief prompt. Calven holds what they wanted; the product tells you what they got.
- Treat "no calls ingested" as a risk, not a green light.
- Enrol renewals in the win/loss program. A lost renewal with a survey teaches more than ten with a CRM loss reason.

## Not covered today

- Contract terms, pricing approvals, quotes and paperwork live in the CRM and the billing system.
- Usage, adoption, support history and health scores are not in Calven.
- Calven does not update the renewal deal; sales or CS does.
