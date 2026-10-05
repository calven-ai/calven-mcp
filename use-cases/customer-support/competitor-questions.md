# Competitor questions from customers

**Team:** Customer support · also customer success, account management
**Impact:** High. A competitor named in a ticket is a renewal at risk. The agent who answers "how do you compare to X" in the approved words, honestly, keeps the account; the one who guesses or deflects sends the customer to the competitor's website.
**Prerequisites:** competitors tracked (battlecards). Better with win/loss surveys running (why customers chose us over them, in their words) and CRM connected (the account's renewal and deal context).

## What the team is trying to do

Answer a customer who asks how the product compares to a named competitor on a specific point, in a way that is accurate, confident and honest about trade-offs, and flag the account to customer success as a risk signal. Done means the reply uses the approved competitive position, cites something real, and the account owner knows within the hour. Without the battlecard, agents either avoid the question or improvise, and both read as weakness.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Recognise the signal | Notice the competitor name and the specific comparison point | Which competitors we track and at what tier | Competitors |
| 2 | Get the approved position | Find how we win, where we lose and the objection handling for that competitor | The battlecard: how we win, where we lose, objection handling, landmines, proof points | Competitor battlecard |
| 3 | Check the specific point | Confirm what each side actually does on the capability named | The feature comparison and the product sections of the competitor deep dive, plus our product brief | Competitor deep dive, product brief |
| 4 | Find proof | A customer who chose us over them, in their words | Deal drivers and quotes where this competitor was in play and we won | Deal drivers, quotes, win/loss dashboard |
| 5 | Write the reply | Answer the point, acknowledge the trade-off, offer a next step | A draft in the approved talk track, honest about where we lose | Competitor battlecard, messaging (objection handling) |
| 6 | Flag the account | Tell customer success and the account owner | The account's deals, renewal date, buying group and ICP tier, so the flag carries context | CRM accounts, contacts, deals |
| 7 | Log the mention | Record the competitor mention for the weekly report | Calven does not help here (ticketing). How often this competitor comes up in customer calls is readable for the report | Quotes (competitor mention), competitive signals |

## Recommended prompts

### Step 2 to 5: answer the comparison

```
Using Calven MCP, help me answer a customer who asked how we compare to [competitor] on [capability].

CONTEXT
The customer's message is below. They are an existing customer, not a prospect. I need an honest, confident reply in our approved competitive position.

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: how we win, where we lose, the objection handling for this point, the proof points.
- The feature comparison in the [competitor] deep dive and our own product brief, for what each side does on [capability].
- One win against [competitor] where the buyer named this point, in the buyer's words.

WRITE
- The reply: answer the specific point first, acknowledge any real trade-off, give the proof, offer a call with their account manager.
- A note to me on where we genuinely lose to them on this point, so I do not overstate.

OUTPUT
The customer-ready reply, then the internal note with sources.

GROUNDING
Use only the battlecard, the deep dive, the product brief and win/loss evidence in the Universe, and cite each. Do not invent competitor weaknesses or our own capabilities. If the Universe has nothing on this point, say so.

[paste the customer's message and name the competitor]
```

### Step 3: check the specific point only

```
Using Calven MCP, compare us to [competitor] on [capability] only.

CONTEXT
A customer wants a straight answer on one thing. I do not need the whole battlecard.

PULL FROM THE UNIVERSE
- Our product brief on [capability].
- The [competitor] deep dive: product and feature comparison sections, and any recent signal about this capability.

COMPARE
- What we do, what they do, where the difference is, as of the freshest source date.

OUTPUT
A four-line comparison with the source and date of each claim.

GROUNDING
Cite the section and the date. Say "unknown" where the dossier does not cover it. Never fill a gap with general knowledge about the competitor.

[name the competitor and the capability]
```

### Step 6: flag the account with context

```
Using Calven MCP, draft the risk flag for [account] after a customer named [competitor] in a ticket.

CONTEXT
I am posting to the customer success channel. The CSM needs the context in one read.

PULL FROM THE UNIVERSE
- The [account] record: industry, size, ICP tier.
- Open and recent deals on the account: renewal date, amount, stage, owner.
- The contacts we know there and their buying roles.
- Our win rate against [competitor] and the top reasons we lose to them.

BUILD
- Who the customer is and what is at stake (renewal, expansion).
- What they asked, verbatim.
- Why this matters: how [competitor] usually wins against us.
- Who should follow up and what to ask.

OUTPUT
A five-line flag I can post, with sources.

GROUNDING
Use only CRM and win/loss data in the Universe and cite it. If deal amounts are withheld, say so rather than estimating.

[paste the customer's message and name the account and competitor]
```

### Step 7: the weekly competitor-mention read

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

## Good practice

- Answer the point the customer raised, not the whole competitive story. The second prompt exists for that.
- Ask where we lose before you reply. A customer who already evaluated the competitor knows, and an answer that admits it is believed.
- Use a customer quote as proof, verbatim and attributed. "Customers tell us" without a name is marketing.
- Flag the account the same day with the CRM context. The CSM should not have to look it up.
- Check the freshness date on competitor claims. A battlecard section with an old source needs the PMM, not a guess.
- Never paste the battlecard to the customer. It is internal; the reply is written from it.

## Not covered today

- The competitor's website or pricing page right now. The competitive intelligence agent records moves in Calven; the AI tool reads what is recorded.
- Posting the flag or updating the account. The draft is pasted into Slack or the CRM by the agent.
- Ticket-level competitor mention counts. Those live in the ticketing system; Calven supplies the call-side counts.
- Updating the battlecard. A missing point goes to the PMM, who approves the change.
