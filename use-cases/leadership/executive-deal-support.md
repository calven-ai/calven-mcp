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
