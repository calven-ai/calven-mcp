# Competitor questions from customers


A customer asks how you compare to a named competitor on one specific point, and without the battlecard you either dodge or improvise. You get a reply that's accurate, confident and honest about trade-offs, using the approved competitive position and citing something real, plus a risk flag so the account owner knows within the hour. Calven supplies the position and the evidence behind it.

## Prompts

### Answer a competitor comparison

```
Using Calven MCP, help me answer a customer who asked how we compare to a competitor on one capability.

FILL IN
- Competitor: [competitor]
- Capability: [capability]
- Message: [paste the customer's message]

CONTEXT
The customer is an existing customer, not a prospect. I need an honest, confident reply to the message in our approved competitive position.

PULL FROM THE UNIVERSE
- The competitor's battlecard: how we win, where we lose, the objection handling for this point, the proof points.
- The feature comparison in the competitor's deep dive and our own product brief, for what each side does on the capability.
- One win against the competitor where the buyer named this point, in the buyer's words.

WRITE
- The reply: answer the specific point first, acknowledge any real trade-off, give the proof, offer a call with their account manager.
- A note to me on where we genuinely lose to them on this point, so I do not overstate.

OUTPUT
The customer-ready reply, then the internal note with sources.

GROUNDING
Use only the battlecard, the deep dive, the product brief and win/loss evidence in the Universe, and cite each. Do not invent competitor weaknesses or our own capabilities. If the Universe has nothing on this point, say so.
```

### Compare on one capability only

```
Using Calven MCP, compare us to the competitor below on one capability only.

FILL IN
- Competitor: [competitor]
- Capability: [capability]

CONTEXT
A customer wants a straight answer on one thing. I do not need the whole battlecard.

PULL FROM THE UNIVERSE
- Our product brief on the capability.
- The competitor's deep dive: product and feature comparison sections, and any recent signal about this capability.

COMPARE
- What we do, what they do, where the difference is, as of the freshest source date.

OUTPUT
A four-line comparison with the source and date of each claim.

GROUNDING
Cite the section and the date. Say "unknown" where the dossier does not cover it. Never fill a gap with general knowledge about the competitor.
```

### Flag the account to customer success

```
Using Calven MCP, draft the risk flag for the account below after a customer named a competitor in a ticket.

FILL IN
- Account: [account]
- Competitor: [competitor]
- Message: [paste the customer's message]

CONTEXT
I am posting to the customer success channel. The CSM needs the context in one read.

PULL FROM THE UNIVERSE
- The account record: industry, size, ICP tier.
- Open and recent deals on the account: renewal date, amount, stage, owner.
- The contacts we know there and their buying roles.
- Our win rate against the competitor and the top reasons we lose to them.

BUILD
- Who the customer is and what is at stake (renewal, expansion).
- What they asked, verbatim from the message.
- Why this matters: how the competitor usually wins against us.
- Who should follow up and what to ask.

OUTPUT
A five-line flag I can post, with sources.

GROUNDING
Use only CRM and win/loss data in the Universe and cite it. If deal amounts are withheld, say so rather than estimating.
```

### Summarise this month's competitor mentions

```
Using Calven MCP, summarise how often customers mentioned competitors this month and what they said.

CONTEXT
I write the weekly feedback report for product and CS. I want the competitor mentions from customer calls alongside what I saw in tickets.

PULL FROM THE UNIVERSE
- Customer quotes categorised as competitor mentions in the last 30 days, grouped by competitor.
- Recent competitive signals for the competitors named most.

BUILD
- A table: competitor, mentions, the point customers compare on, the strongest quote.
- Any competitor move in the same window that explains a spike.

OUTPUT
The table plus a three-line read, with sources.

GROUNDING
Count only quotes in the Universe; my ticket mentions are not in Calven, I will add them. Cite every quote and signal.
```

## Ad hoc questions

- How do we compare to [competitor] on [capability]?
- What is the approved answer when a customer says [competitor] is cheaper?
- Where do we genuinely lose to [competitor]?
- Give me one customer who chose us over [competitor] and why, in their words.
- What did [competitor] change recently that a customer might have read about?
- Which competitors come up most in customer calls this quarter?
- What are the landmines to set when [competitor] is in play?
- Is [competitor] a Tier 1 or Tier 2 competitor for us?
- What is the "they say, you say" for "[competitor] has [feature] and you do not"?
- Does the [account] have a renewal coming up, and who owns it?
- Which deals did we lose to [competitor] on [loss reason]?
- What does the competitor's dossier say about their pricing?
