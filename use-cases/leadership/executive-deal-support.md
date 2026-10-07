# Executive deal support


You're joining a prospect or customer meeting as the executive the deal needs, and you'd rather not be briefed in the car. You get a one-page brief an hour before: where the deal stands, who's in the room and what they care about, which competitor is in play and how we beat them, and the one thing to ask. Calven adds what the account already told us and what sank similar deals.

## Prompts

### Build the executive meeting brief

```
Using Calven MCP, brief me for the account meeting below.

FILL IN
- Account: [account]
- Deal: [deal]
- Meeting time: [time]
- Attendees: [attendees]
- Competitor: [competitor]

CONTEXT
I am joining as the executive. The competitor is in the deal. I want where we stand, who is in the room, what the account has told us, how we beat the competitor, and what sinks deals like this one.

PULL FROM THE UNIVERSE
- The deal record: stage, amount, close date, owner, competitors, stage history.
- The account: industry, size, fit tier, triggers, other deals.
- The contacts attending and their roles; the persona canvas for each.
- Conversations and quotes from this account.
- The battlecard for the competitor: how we win, where we lose, landmines, proof points.
- Lost deals in the same industry or size band and their loss reasons, and drivers on deals lost to the competitor.

BUILD
- The deal in three lines.
- The people: role, what their persona cares about, what they said.
- Biggest risk, from similar lost deals and the competitor's strengths.
- Our three proof points, with the won deal or quote behind each.
- The one question to ask first.

OUTPUT
A one-page brief.

GROUNDING
Use only the Universe, cited. If deal names or amounts are withheld, work with what is shown and say so. Do not invent facts about the account from your own knowledge.
```

### Write your opening talking points

```
Using Calven MCP, write my talking points for the account below.

FILL IN
- Account: [account]
- Personas: [personas in the room]
- Competitor: [competitor]

CONTEXT
I have ten minutes at the top of the meeting. The audience is the personas. I want to tell our story in their terms and set two landmines for the competitor without naming them.

PULL FROM THE UNIVERSE
- Our positioning narrative and proof points.
- The personas' goals and pains.
- The landmines and discovery questions for the competitor.

WRITE
- Five talking points, each tied to a persona pain.
- Two questions that set landmines.
- One proof story in three lines.

OUTPUT
The talking points.

GROUNDING
Use only the positioning, canvases and battlecard, cited. No capability claims outside the product brief.
```

### Draft the post-meeting recap

```
Using Calven MCP, draft the follow-up note after the meeting with the account below.

FILL IN
- Account: [account]
- Competitor: [competitor]
- Notes: [paste your notes]

CONTEXT
The notes are from the meeting. I want a recap that confirms what they said, answers the open question with the approved wording, and proposes the next step.

PULL FROM THE UNIVERSE
- The product brief for any capability question raised.
- The battlecard objection handling for anything about the competitor.
- The proof point for the outcome they care about.

WRITE
- A recap under 150 words, in their words, with one proof point and a next step.

OUTPUT
The note.

GROUNDING
Use only approved wording from the brief and battlecard. Do not promise a capability or a date.
```

### Get the ten-line version

```
Using Calven MCP, in ten lines: where do we stand with the account, who is the contact, and what could sink us against the competitor?

FILL IN
- Account: [account]
- Contact: [contact]
- Competitor: [competitor]
```

## Advanced prompts

### War-game the deal against the competitor

```
War-game the deal in three rounds of our move, the competitor's counter-move and the buyer's reaction, before I walk into the room. Use Calven MCP for the account, the buying group and the competitor's playbook.

FILL IN
- Deal: [deal]
- Competitor: [competitor]
- Our planned moves: [paste what we intend to do: the meeting, the offer, the reference]

CONTEXT
I'm joining this deal because it matters. The competitor has a playbook too, and their rep has probably already brought in their own executive.

FROM CALVEN
- The deal and account: stage, amount, contacts with their roles, product and price feedback.
- The competitor's battlecard and dossier (how they sell, where they win, landmines, pricing) and their signals from the last 90 days.
- Deal drivers from past deals against them: what decided it, both ways.

WAR-GAME
- Round 1: our first move, the competitor's best counter drawn from their battlecard, and the buying group's reaction by role.
- Rounds 2 and 3: the same, each move answering the last.
- After each round, say where the deal stands: who leans which way and why.
- Then replay it once with the move I didn't plan that does best across the rounds.

OUTPUT
A three-round table (our move, their counter, buyer reaction by role, state of the deal), the move to add, the move to drop, and the one sentence I need ready for their strongest counter.

GROUNDING
The competitor's moves come from their battlecard, dossier or signals, cited. Buyer reactions trace to contact roles and persona canvases. Mark anything else as your judgement.
```

### Rehearse the meeting with the economic buyer

```
Rehearse the executive meeting with you playing the economic buyer, and score me after each answer. Use Calven MCP to build the buyer from the account, their persona and what they've said.

FILL IN
- Deal: [deal]
- Buyer: [contact]
- My goal for the meeting: [the commitment I want to leave with]

CONTEXT
I get one meeting with this person. I'd rather fumble the hard question here than there.

FROM CALVEN
- The contact's role and title, the deal's stage and amount, and anything they said on calls, as quotes.
- The canvas for their persona: goals, KPIs, pains, objections.
- The objection handling in our messaging, and the competitor's talk track if a competitor is on the deal.

SIMULATE
- Play the buyer in the first person: busy, skeptical, focused on their KPIs. Open with the question they're most likely to ask, then follow up on whatever I answer weakly.
- Ask at most eight questions. Include one on price, one on risk, and one the canvas says they care about that I won't expect.
- After each of my answers, score it 1 to 5 on relevance to their goals, proof and brevity, in one line, then carry on in character.
- Stop when I've earned the commitment or lost the meeting, and say which.

OUTPUT
The transcript with scores, my three weakest answers rewritten, and the proof point I should have used and didn't.

GROUNDING
Stay inside what the canvas, the quotes and the deal record support. Where the buyer's view on something isn't on record, say "not on record" in the debrief instead of inventing a stance.
```

### Design three offers of equal value

```
Design three offers of equal value to us for the final negotiation, so the buyer chooses between our options instead of countering our price. Use Calven MCP for what this buyer values, how price played in similar deals and our packaging.

FILL IN
- Deal: [deal]
- Our floor: [walk-away price and terms]
- Levers I can move: [term length, payment terms, scope, services, pilot, price]

CONTEXT
Multiple equivalent simultaneous offers show what the buyer cares about and anchor the conversation on our structure. It only works if each option trades on something they value.

FROM CALVEN
- The deal's price feedback, product feedback and contacts by role.
- Pricing and packaging from the product brief.
- How buyers rated our price and the win rate by price verdict from the win/loss dashboard, with n.
- Deal drivers in the Commercials category from deals in the same segment.

METHOD
- Rank the levers by how much the buyer values them (from feedback and drivers) against what they cost us (from my floor).
- Build three packages of equal value to us, each leaning on a different lever the buyer cares about.
- Predict which package each role in the buying group prefers, and their likely counter.
- Check every package against the floor.

OUTPUT
The three offers side by side (price, term, scope, what we give, what we get), the predicted pick by role, the counter to expect and our answer, and a paragraph on how I present the three.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Buyer preferences trace to feedback or drivers; don't assume a lever matters to them without evidence.
```

## Ad hoc questions

- Where does the [account] deal stand, and who owns it?
- Who is [contact], and what is their role in the buying group?
- What has [account] told us on calls? Quotes.
- Why do we lose to [competitor], and why do we win?
- What are the landmines for [competitor]?
- Which deals in [industry] did we lose this year, and why?
- What proof do we have for [outcome]? A won deal or a quote.
- Is anyone in the buying group a blocker?
- What does [persona] care about, according to the canvas?
- What does the product brief say about [capability] they asked for?
- Which of our customers in [industry] can we reference?
- Which contacts at [account] have never appeared on a call with us?
- Which won deal looks most like [deal] on size, industry and competitor?
- What did buyers in [industry] say about our implementation in surveys?
- How does the win rate on deals with an exec sponsor compare, according to the persona dashboard?
- What has [competitor] changed in the last 90 days that their rep will bring up?
- Which of [persona]'s objections does our messaging answer least convincingly?
