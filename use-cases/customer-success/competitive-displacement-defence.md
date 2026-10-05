# Competitive displacement defence

**Team:** Customer success · also sales, solutions engineering, product marketing
**Impact:** High. "A customer asked how we compare to [competitor] on SSO. What do we say?" is the question CSMs most often cannot answer on the spot. The approved battlecard, the product brief and the win/loss record give a straight, defensible answer in one question.
**Prerequisites:** competitors tracked (battlecards, dossiers, signals), product brief approved, win/loss surveys running (evidence against the rival). Call transcripts ingested adds what this account and others said.

## What the team is trying to do

Answer a customer who is comparing us to a rival, honestly and from the approved material, and turn the comparison into a reason to stay. Done means a written answer the CSM can send, a conversation plan if the evaluation is serious, and a record of what the rival promised. Without the company's own battlecards, CSMs guess, over-claim, or escalate to the one PMM who knows.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Understand the question | What exactly the customer is comparing | The feature comparison and the dossier sections for the rival on that topic | Competitor deep dive (feature comparison, product, pricing) |
| 2 | Get our side right | What we do, and do not do, on that topic | The product brief, including known weaknesses; product changes on the topic | Product brief, product changes |
| 3 | Get their side right | What the rival does, claims and recently changed | The dossier and the rival's recent signals; the bullshit detector section | Competitor deep dive, competitive signals |
| 4 | Answer | A straight written answer | The battlecard's objection handling and talk track; the honest "where we lose" | Competitor battlecard |
| 5 | Read the risk | Is this curiosity or an evaluation | What this account said; what customers who left for this rival said; our record against them | Quotes, deal drivers, competitive dashboard |
| 6 | Plan the defence | Stakeholders, proof, the next conversation | Landmines and proof points; displacement wins; references who chose us over them | Battlecard, quotes (competitive win), CRM deals |
| 7 | Escalate | Bring in product, sales or leadership | Calven does not help here beyond the brief | |
| 8 | Record what the rival promised | Feed the CI agent | Calven does not help here from the AI tool (add it in the app or a call note that gets ingested) | |

## Recommended prompts

### Step 1 to 4: the straight answer

```
Using Calven MCP, help me answer a customer comparing us to [competitor] on [topic].

CONTEXT
[contact] at [account] asked: "[the question]". I want a written answer I can send today: honest, specific, no over-claim.

PULL FROM THE UNIVERSE
- The product brief on [topic], including known weaknesses, and any product change on it.
- The [competitor] dossier: feature comparison, product and pricing sections on [topic], and the bullshit detector.
- The battlecard: objection handling and where we lose on [topic].

BUILD
- A four-sentence answer: what we do, what we do not do, how it compares, what we recommend.
- The one thing not to claim.
- A follow-up question that surfaces why they are asking.

OUTPUT
The answer, the warning, the question.

GROUNDING
Use only the Universe and cite it. Where the brief or dossier is silent on [topic], say "not recorded" and tell me who to ask.

[paste the question; name the account, contact, competitor and topic]
```

### Step 5: is this an evaluation

```
Using Calven MCP, assess how serious [account]'s interest in [competitor] is.

CONTEXT
[contact] asked about [competitor]. I want to know whether to treat this as a risk.

PULL FROM THE UNIVERSE
- Quotes from [account] in the last year, especially negative ones, competitor mentions and product feedback.
- What customers who left us for [competitor] said, from deal drivers and loss reasons.
- Our competitive win rate against [competitor] in [segment], with n and the window.
- Contacts on the account by role; whether the economic buyer is engaged with us.

BUILD
- The signals for and against a real evaluation, each with evidence.
- Which of the typical loss drivers against [competitor] this account has shown.
- A risk call: low, watch, act.

OUTPUT
The assessment in ten lines.

GROUNDING
Use only the Universe and cite it. Do not treat an absence of calls as absence of risk.

[name the account, contact, competitor and segment]
```

### Step 6: the defence plan

```
Using Calven MCP, build a defence plan for [account] against [competitor].

CONTEXT
[account] is evaluating [competitor] ahead of the renewal on [date]. The sponsor is [contact].

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: how we win, landmines, proof points and displacement wins, talk track.
- Why [account] chose us originally, from drivers and quotes, and whether [competitor] was in that deal.
- Customers who chose us over [competitor] with quotes on switching cost, time to value or the outcome.
- The persona canvas for [contact]: objections and what they need to believe.

BUILD
- The three reasons to stay, in the customer's own earlier words where possible.
- The landmines to set, phrased as questions for the customer to ask [competitor].
- The proof: two reference candidates and two quotes.
- Where we honestly lose, and how to handle it.
- The stakeholder plan: who else to bring in on their side and ours.

OUTPUT
A one-page plan.

GROUNDING
Use only the Universe and cite it. Do not invent competitor weaknesses or customer outcomes.

[name the account, competitor, date and contact]
```

### Step 3: what the rival changed recently

```
Using Calven MCP, what has [competitor] changed in the last [window] that my customers might be hearing about?

CONTEXT
I want to be ahead of the next "did you see that [competitor] launched…" question.

PULL FROM THE UNIVERSE
- Competitive signals for [competitor] in the last [window]: launches, pricing changes, messaging shifts, with the so-what.
- The battlecard sections that those signals affect.

BUILD
- Each signal in one line, the so-what for a customer, and the answer if a customer raises it.

OUTPUT
A short list.

GROUNDING
Use only the Universe and cite it with dates. Do not add moves that are not recorded.

[name the competitor and the window]
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

## Good practice

- Answer from the brief and the dossier, never from memory. An over-claim to a customer is worse than a gap.
- Say where we lose. Customers checking a rival already know; honesty is what keeps them.
- Ask the follow-up question. "Why are you asking" tells you whether this is a renewal risk.
- Phrase landmines as questions for the customer to ask the rival. It keeps you out of the mud.
- Record what the rival promised in a call note that gets ingested, so the CI agent and the next CSM see it.

## Not covered today

- Calven does not search the rival's site live from the AI tool; the CI agent does that in the app and the dossier holds the result.
- Pricing concessions, contract changes and escalations are decided outside.
- Logging the competitive threat on the CRM deal is done in the CRM.
