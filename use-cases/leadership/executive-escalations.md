# Executive escalations

**Team:** Leadership · also customer success, sales leadership, support
**Impact:** Medium. An escalated customer reaches the executive with a thread of emails and no context. Calven supplies the account's history: deals, what they said on calls, the competitor they mention, and what the product brief says about the capability at issue.
**Prerequisites:** CRM connected (accounts, contacts, deals), call transcripts ingested (conversations, quotes). Better with competitors tracked (if a rival is named) and strategy documents approved (product brief for the capability).

## What the team is trying to do

Handle an escalation knowing the account's value, history and people, what the customer has said before, whether a competitor is in the picture, and what the company can truthfully say about the issue. Done means a one-page brief before the call and a response that does not overclaim.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | The account | Value, deals, renewal, people | Account, deals (including renewal and expansion), contacts and roles | CRM accounts, CRM deals, CRM contacts |
| 2 | The history | What they said before, and the sentiment | Conversations and quotes from the account, by date and sentiment | Customer conversations, quotes |
| 3 | The issue | What the product brief says; recent product changes | Product brief, product changes | Product brief, product changes |
| 4 | The competitor | If they mention a rival | Battlecard, deal drivers on deals lost to them | Battlecard, deal drivers |
| 5 | The response | What to say and not say | Objection handling; known weaknesses | Messaging, product brief |
| 6 | The call and the follow-through | The conversation, the ticket, the credit | Calven does not help here | |

## Recommended prompts

### Step 1 to 4: the escalation brief

```
Using Calven MCP, brief me on the [account] escalation.

CONTEXT
[contact] at [account] has escalated about [issue]. I am calling them in an hour. I want the account's value and history, what they have said to us before, whether a competitor is in play, and what we can truthfully say about [issue].

PULL FROM THE UNIVERSE
- The account: size, industry, fit tier; open and closed deals including renewals; contacts and their roles.
- Conversations and quotes from the account, with sentiment and date.
- The product brief for [issue] and any recent product changes in that area.
- If a competitor is named: the battlecard and why we lost deals to them.

BUILD
- The account in three lines.
- What they said before, with quotes and dates.
- What the brief says about [issue], and what it does not.
- The competitor risk, if any.
- What to say and what not to say.

OUTPUT
A one-page brief.

GROUNDING
Use only the Universe, cited. Respect withheld fields. Do not promise a capability or a date the brief does not support.

[name the account, the contact and the issue]
```

### Step 5: the written response

```
Using Calven MCP, draft my reply to [contact] about [issue].

CONTEXT
Below is their message. I want a reply that acknowledges the problem in their words, states what the product does and does not do today, and sets a next step. Under 150 words.

PULL FROM THE UNIVERSE
- The product brief for [issue].
- The objection handling in our messaging that applies.
- The customer's own words from prior calls.

WRITE
- The reply.

OUTPUT
The reply, and a note on anything I must confirm with product before sending.

GROUNDING
Use only approved wording, cited. No capability or date promises.

[paste their message]
```

### Step 2: is this one account or a pattern

```
Using Calven MCP, tell me whether the [account] escalation about [issue] is a pattern.

CONTEXT
Before I decide how far to escalate internally, I want to know whether other customers have raised the same thing, whether it has cost us deals, and whether a competitor is winning on it.

PULL FROM THE UNIVERSE
- Themes and quotes about [issue] across all accounts in [window], with sentiment and count.
- Deal drivers that hurt us on [issue], and the deals they touched, with amount where allowed.
- The product gaps in the Insights overview, and whether [issue] is on the list.
- Competitive signals about [issue] from tracked rivals.

BUILD
- One account or a pattern: how many accounts, how many deals, the trend over the window.
- What it has cost, from the drivers and the product gaps, with n.
- Whether a competitor is using it, with the signal.
- The one line I take to the product leader.

OUTPUT
Six lines with sources.

GROUNDING
Counts and amounts as the Universe returns them, with n and window. Do not extrapolate from one account. If nothing beyond this account is recorded, say so.

[name the account, the issue and the window]
```

## Ad hoc questions

- What is [account] worth to us, and when do they renew?
- Who at [account] is the exec sponsor?
- What has [account] said about [issue] on calls?
- Has sentiment from [account] changed over the year?
- What does the product brief say about [capability]?
- Did we change anything in [area] recently?
- Is [competitor] in any open deal with [account]?
- Why have we lost customers to [competitor] before?

## Good practice

- Ask for sentiment over time from the account; escalations rarely start with the escalation.
- Read "what the brief does not say" before promising anything.
- Keep the reply in their words, from their own quotes.
- Log the outcome in the CRM and the support tool; Calven does not.

## Not covered today

- Support tickets, product usage, incident status. Those live in the support and engineering tools.
- Contract terms and credits.
- Writing back to the CRM.
