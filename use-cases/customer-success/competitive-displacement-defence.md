# Competitive displacement defence


A customer is comparing you to a rival, and without battlecards you'd guess, over-claim or escalate to the one PMM who knows. You get a written answer you can send, a defence plan if the evaluation is serious, and a record of what the rival promised. Calven answers from the approved material, so the comparison becomes a reason to stay.

## Prompts

### Answer a customer's competitor comparison

```
Using Calven MCP, help me answer a customer comparing us to the competitor below on the topic below.

FILL IN
- Question: [paste the question]
- Contact: [contact]
- Account: [account]
- Competitor: [competitor]
- Topic: [topic]

CONTEXT
The contact at the account asked the question above. I want a written answer I can send today: honest, specific, no over-claim.

PULL FROM THE UNIVERSE
- The product brief on the topic, including known weaknesses, and any product change on it.
- The competitor's dossier: feature comparison, product and pricing sections on the topic, and the bullshit detector.
- The battlecard: objection handling and where we lose on the topic.

BUILD
- A four-sentence answer: what we do, what we do not do, how it compares, what we recommend.
- The one thing not to claim.
- A follow-up question that surfaces why they are asking.

OUTPUT
The answer, the warning, the question.

GROUNDING
Use only the Universe and cite it. Where the brief or dossier is silent on the topic, say "not recorded" and tell me who to ask.
```

### Gauge how serious the evaluation is

```
Using Calven MCP, assess how serious the account's interest in the competitor below is.

FILL IN
- Account: [account]
- Contact: [contact]
- Competitor: [competitor]
- Segment: [segment]

CONTEXT
The contact asked about the competitor. I want to know whether to treat this as a risk.

PULL FROM THE UNIVERSE
- Quotes from the account in the last year, especially negative ones, competitor mentions and product feedback.
- What customers who left us for the competitor said, from deal drivers and loss reasons.
- Our competitive win rate against the competitor in the segment, with n and the window.
- Contacts on the account by role; whether the economic buyer is engaged with us.

BUILD
- The signals for and against a real evaluation, each with evidence.
- Which of the typical loss drivers against the competitor this account has shown.
- A risk call: low, watch, act.

OUTPUT
The assessment in ten lines.

GROUNDING
Use only the Universe and cite it. Do not treat an absence of calls as absence of risk.
```

### Build the defence plan

```
Using Calven MCP, build a defence plan for the account below against the competitor below.

FILL IN
- Account: [account]
- Competitor: [competitor]
- Renewal date: [renewal date]
- Contact: [sponsor contact]

CONTEXT
The account is evaluating the competitor ahead of the renewal date. The sponsor is the contact above.

PULL FROM THE UNIVERSE
- The competitor's battlecard: how we win, landmines, proof points and displacement wins, talk track.
- Why the account chose us originally, from drivers and quotes, and whether the competitor was in that deal.
- Customers who chose us over the competitor with quotes on switching cost, time to value or the outcome.
- The persona canvas for the contact: objections and what they need to believe.

BUILD
- The three reasons to stay, in the customer's own earlier words where possible.
- The landmines to set, phrased as questions for the customer to ask the competitor.
- The proof: two reference candidates and two quotes.
- Where we honestly lose, and how to handle it.
- The stakeholder plan: who else to bring in on their side and ours.

OUTPUT
A one-page plan.

GROUNDING
Use only the Universe and cite it. Do not invent competitor weaknesses or customer outcomes.
```

### Find what the rival changed recently

```
Using Calven MCP, what has the competitor below changed in the window below that my customers might be hearing about?

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last 90 days]

CONTEXT
I want to be ahead of the next "did you see what they launched" question.

PULL FROM THE UNIVERSE
- Competitive signals for the competitor in the window: launches, pricing changes, messaging shifts, with the so-what.
- The battlecard sections that those signals affect.

BUILD
- Each signal in one line, the so-what for a customer, and the answer if a customer raises it.

OUTPUT
A short list.

GROUNDING
Use only the Universe and cite it with dates. Do not add moves that are not recorded.
```

## Ad hoc questions

- How do we compare to [competitor] on [capability]?
- Do we support [capability]? What does the product brief say?
- Where do we lose to [competitor], honestly?
- What did [competitor] change recently?
- What do customers who left for [competitor] say was the reason?
- What is our win rate against [competitor] in [segment]?
- Which customers chose us over [competitor], and what did they say?
- What is the objection handling line for "[competitor] is cheaper"?
- What questions should my customer ask [competitor] about [topic]?
- Did [account] evaluate [competitor] originally?
- Is [competitor]'s claim about [feature] true, according to the dossier?
- Write a reply to [contact] about how we compare on [topic], under 100 words.
