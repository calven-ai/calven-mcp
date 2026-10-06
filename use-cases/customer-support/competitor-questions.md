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

## Advanced prompts

### Update the churn odds on a competitor mention

```
Tell me how worried to be when a customer names a competitor in a ticket, as a probability that moves with each piece of evidence. Use Calven MCP for how we fare against that competitor and what they've been doing.

FILL IN
- Ticket: [paste the ticket or thread]
- Competitor: [competitor]
- Account: [account]
- Base churn rate: [your annual churn or non-renewal rate for accounts like this, or write "estimate"]

CONTEXT
Not every "we're looking at X" is a churn signal. Some are leverage, some are curiosity, some are real. I want a consistent way to read it, so CS gets the right ones fast and the rest don't cry wolf.

FROM CALVEN
- Our win rate against the competitor from the competitive intelligence dashboard, with n, and the top reasons we lose to them.
- The competitor's signals from the last 90 days: pricing changes, launches, campaigns.
- The account's tier, any open renewal or expansion deal, and the contacts we know there with their roles.

METHOD
- Start from my base churn rate as the prior.
- Treat each piece of evidence as a likelihood ratio: who wrote the ticket (role), what they mentioned (price, a feature, a migration), whether the competitor just made a move that matches, how close the renewal is, how we fare against this rival.
- Update step by step and show the posterior after each. Say which ratios are your judgement and how sensitive the result is to them.

OUTPUT
The update table, the final probability with a low and high bound, the action it implies (answer and log, flag to CS, flag to CS and the account owner the same day) and the reply to the customer.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a competitor move or a contact role nobody recorded.
```

### War-game their switching offer

```
War-game what happens when a competitor targets our customers with a switching offer, and write support's side of each round. Use Calven MCP for the competitor's battlecard, their recent moves and why customers stay or leave.

FILL IN
- Competitor: [competitor]
- Their offer: [paste what customers are telling us they've been offered, or describe the rumour]
- Segment at risk: [segment]

CONTEXT
Support hears it first: three tickets in a week asking whether we'll match the offer. I want to know how this plays out over the next quarter, and what we say on day one so support isn't improvising.

FROM CALVEN
- The competitor's battlecard: where we win, where we lose, objection handling, landmines.
- Their signals from the last 90 days.
- Deal drivers and quotes from customers who chose us over them, and from deals we lost to them, with n.

WAR-GAME
- Round 1: their offer lands. Play three customer types reacting (happy, neutral, already frustrated) and support's reply to each.
- Round 2: their likely next move if the first works. Base it on their signals and pattern, labelled as your inference. Our counter, within what support can say.
- Round 3: what CS and sales would need to step in with, and the trigger that hands the ticket over.
- After each round, score our position: accounts likely kept, at risk, lost, as rough shares with reasons.

OUTPUT
A three-round table (their move, customer reaction, our response, position), the day-one macro, and the escalation trigger list.

GROUNDING
Their moves come from recorded signals or are labelled as your inference. Responses stay inside the battlecard and the product brief, cited. Don't invent a discount we can offer.
```

### Map the accounts that mention a rival

```
Map every account that mentioned a competitor in a ticket this quarter on a 2x2 of threat against value, so CS works the right ten first. Use Calven MCP for each account's value and tier and how strong each competitor is against us.

FILL IN
- Ticket mentions: [attach a CSV of tickets naming a competitor: account, competitor, date, ticket text]
- Window: [window]

CONTEXT
Support logs competitor mentions; nobody looks at them together. I want one picture CS can act on, not a list of forty accounts in date order.

FROM CALVEN
- For each account: ICP tier, size, and any open renewal or expansion deal with its amount and close date.
- For each competitor named: our win rate against them from the competitive intelligence dashboard, with n, and their signals in the window.
- Customer quotes that name each competitor, to read what draws people to them.

METHOD
- Score threat per account from the competitor's strength against us, how recent and how often the account mentioned them, and what the mention was about (price, feature, migration).
- Score value from tier, contract size and how soon the renewal is.
- Place every account on the 2x2. If you can run code, draw it and output the scored table as a CSV.
- Check the result: does any competitor dominate the high-threat corner, and is that matched by a recent signal?

OUTPUT
The 2x2, the top-right accounts with the reason for each and the owner, and a two-line note on which competitor is the pattern.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Scoring weights are your assumption and stated. Don't invent a renewal date or amount.
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
- Which competitor wins most often against us in [segment], and on what?
- What's the one thing customers who stayed with us say [competitor] couldn't do?
- Which competitor signals in the last 30 days would make a customer ask us about switching?
- Where does the battlecard say we lose to [competitor] that a support agent should admit honestly?
- Which of [competitor]'s claims does the battlecard's bullshit detector call out?
