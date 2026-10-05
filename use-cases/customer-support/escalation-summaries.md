# Escalation summaries

**Team:** Customer support · also customer success, engineering, sales
**Impact:** Medium. An escalation with the account's context (what they pay, what is up for renewal, who the champion is, which competitor they evaluated) is prioritised correctly. One without it sits in the queue behind a louder but smaller account.
**Prerequisites:** CRM connected with the pipeline category enabled for MCP. Better with call transcripts ingested (what this account said on calls) and competitors tracked.

## What the team is trying to do

Hand a case to tier 2, engineering or customer success with everything the receiver needs in one read: the problem in the customer's words, what was tried, and who this account is to the company. Done means the escalation is prioritised on business impact, not on who shouted. Support agents rarely have CRM access, so the account context is usually missing.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Document the problem | Reproduction steps, logs, what was tried | Calven does not help here | |
| 2 | Identify the account | Who the customer is, what they bought, their tier | The account record: industry, size, ICP tier, best-fit product | CRM accounts |
| 3 | Add the deal context | Renewal, expansion, amount, owner, stage | Open and closed deals on the account, with owner and close date | CRM deals |
| 4 | Add the people | Who is complaining and what role they hold in the buying group | The contacts at the account and their buying roles | CRM contacts |
| 5 | Add the history | What this account said on calls, what they were promised, which competitor they weighed | Quotes and conversations for the account, competitors on their deals | Quotes, customer conversations, CRM deals |
| 6 | Write the summary | Problem, impact, account context, ask | A draft in a fixed structure | All of the above |
| 7 | Route it | Post to the right queue or channel | Calven does not help here | |

## Recommended prompts

### Step 2 to 6: the escalation summary

```
Using Calven MCP, write the account context block for an escalation on [account].

CONTEXT
I am escalating the issue below to [tier 2 / engineering / the CSM]. I have the technical details. I need the business context so it is prioritised correctly.

PULL FROM THE UNIVERSE
- The [account] record: industry, size, region, ICP tier.
- Deals on the account: open renewals or expansions with amount, close date and owner; the won deal that brought them in.
- Contacts at the account and their buying roles, so I know whether the person complaining is the champion or an end user.
- What this account said on calls, especially about this area or about competitors.

BUILD
- Who they are and what they are worth to us, in two lines.
- What is at risk and when.
- Who the complainant is in the buying group, and who else to involve.
- Any promise or competitor evaluation from their calls that raises the stakes.

OUTPUT
A context block I can paste under the technical summary, with sources.

GROUNDING
Use only CRM and conversation data in the Universe and cite it. If amounts or names are withheld by workspace settings, say so and do not estimate.

[name the account and paste the issue]
```

### Step 5: the account's history on this topic

```
Using Calven MCP, what has [account] said to us about [topic]?

CONTEXT
Before I escalate I want to know whether this problem was raised before, or promised during the sale.

PULL FROM THE UNIVERSE
- Quotes from [account] on [topic], with the conversation and date.
- Vendor quotes from our reps on the same calls, in case something was promised.

ANSWER
- A dated list of what the customer said and what our side said.

OUTPUT
The list with sources, or "nothing recorded".

GROUNDING
Quote verbatim and attribute. Do not infer a promise the rep did not make.

[name the account and the topic]
```

### Step 6: prioritising a queue of escalations

```
Using Calven MCP, rank these escalations by business impact.

CONTEXT
Below is a list of accounts with open escalations. I want to order them by what is at stake.

PULL FROM THE UNIVERSE
- For each account: ICP tier, open deals with amount and close date, deal type (renewal, expansion).

BUILD
- A table: account, tier, open deal value, next close date, recommended order and why.

OUTPUT
The ranked table with sources.

GROUNDING
Rank only on what the CRM data in the Universe shows. If an account has no deal data, place it last and say why.

[paste the list of accounts]
```

## Ad hoc questions

- Who is [account] to us: tier, size, what they bought?
- Does [account] have a renewal in the next 90 days, and who owns it?
- Which contacts do we know at [account] and what roles do they hold?
- Is [contact] the champion or an end user?
- What did [account] say about [topic] on calls?
- Did our rep promise [feature] to [account]?
- Which competitor did [account] evaluate before buying?
- What is the open pipeline on [account]?
- Which of these accounts is Tier 1?
- Has [account] raised this before?

## Good practice

- Add the account block every time, not only for the big ones. The receiver stops reading escalations that arrive without context.
- Name the complainant's buying role. An end user's bug and the economic buyer's bug are different escalations.
- Check the calls for a promise. "The rep said it would" is the escalation that reaches the CEO.
- Respect withheld fields. If amounts are restricted for support, say "renewal in Q2, amount withheld"; the CSM can see it.

## Not covered today

- The technical half: logs, reproduction steps, product usage data.
- Posting to the queue, assigning or updating the ticket.
- The support history itself. Calven holds call and survey evidence, not the ticket log.
- Changing CRM fields. The agent reads the account; the owner updates it.
