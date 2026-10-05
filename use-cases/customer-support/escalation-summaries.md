# Escalation summaries


You're handing a case to tier 2, engineering or customer success, and without CRM access the account context goes missing. You get a summary the receiver needs to read once: the problem in the customer's words, what was tried, and who this account is to the company. Calven adds the account context, so the escalation gets prioritised on business impact, not on who shouted.

## Prompts

### Write the escalation's account context

```
Using Calven MCP, write the account context block for an escalation on the account below.

FILL IN
- Account: [account]
- Escalating to: [tier 2, engineering or the CSM]
- Issue: [paste the issue]

CONTEXT
I am escalating the issue to the team named above. I have the technical details. I need the business context so it is prioritised correctly.

PULL FROM THE UNIVERSE
- The account record: industry, size, region, ICP tier.
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
```

### Pull an account's history on a topic

```
Using Calven MCP, what has the account below said to us about the topic below?

FILL IN
- Account: [account]
- Topic: [topic]

CONTEXT
Before I escalate I want to know whether this problem was raised before, or promised during the sale.

PULL FROM THE UNIVERSE
- Quotes from the account on the topic, with the conversation and date.
- Vendor quotes from our reps on the same calls, in case something was promised.

ANSWER
- A dated list of what the customer said and what our side said.

OUTPUT
The list with sources, or "nothing recorded".

GROUNDING
Quote verbatim and attribute. Do not infer a promise the rep did not make.
```

### Rank escalations by business impact

```
Using Calven MCP, rank these escalations by business impact.

FILL IN
- Accounts: [paste the list of accounts]

CONTEXT
The list is accounts with open escalations. I want to order them by what is at stake.

PULL FROM THE UNIVERSE
- For each account: ICP tier, open deals with amount and close date, deal type (renewal, expansion).

BUILD
- A table: account, tier, open deal value, next close date, recommended order and why.

OUTPUT
The ranked table with sources.

GROUNDING
Rank only on what the CRM data in the Universe shows. If an account has no deal data, place it last and say why.
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
