# Executive deal support

**Team:** Leadership · also account executives, sales leadership, solutions engineering
**Impact:** High. When the CEO joins a deal, the rep briefs them in the car. Calven briefs them in one question: the account, the deal, the people, the competitor, what sank similar deals and the proof to bring.
**Prerequisites:** CRM connected (accounts, contacts, deals), competitors tracked (battlecards), personas approved. Better with win/loss surveys (drivers against the competitor) and call transcripts (what the account said).

## What the team is trying to do

Walk into a prospect or customer meeting as the executive the deal needs: knowing where it stands, who is in the room and what they care about, which competitor is in play and how we beat them, what the account already told us, and the one thing to ask. Done means a one-page brief and a line of questions, ready an hour before.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | The deal | Stage, amount, close date, owner, competitors, history | The CRM deal and its account | CRM deals, CRM accounts |
| 2 | The people | Who attends, their role in the buying group, their persona | Contacts with roles; the persona canvas for each | CRM contacts, persona |
| 3 | What they said | Prior calls with the account | Conversations and quotes from the account | Customer conversations, quotes |
| 4 | The competitor | How to win against them | Battlecard: how we win, landmines, objection handling, proof; drivers on deals against them | Battlecard, deal drivers |
| 5 | What sinks similar deals | Loss reasons in this segment and against this competitor | Deals lost in the same industry or size, with loss reasons | CRM deals, win/loss dashboard |
| 6 | The exec line | What the executive should say and ask | Positioning narrative, proof points, discovery questions from the dossier | Positioning, competitor deep dive |
| 7 | The meeting | Run it | Calven does not help here | |
| 8 | Follow up | The recap and next step | Draft from the brief; the rep logs it in the CRM | |

## Recommended prompts

### Step 1 to 5: the executive brief

```
Using Calven MCP, brief me for the [account] meeting at [time].

CONTEXT
I am joining as the executive. [competitor] is in the deal. I want where we stand, who is in the room, what the account has told us, how we beat [competitor], and what sinks deals like this one.

PULL FROM THE UNIVERSE
- The [deal] record: stage, amount, close date, owner, competitors, stage history.
- The [account]: industry, size, fit tier, triggers, other deals.
- The contacts attending and their roles; the persona canvas for each.
- Conversations and quotes from this account.
- The battlecard for [competitor]: how we win, where we lose, landmines, proof points.
- Lost deals in the same industry or size band and their loss reasons, and drivers on deals lost to [competitor].

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

[name the account, the deal, the attendees and the competitor]
```

### Step 6: the executive talk track

```
Using Calven MCP, write my talking points for [account].

CONTEXT
I have ten minutes at the top of the meeting. The audience is [personas]. I want to tell our story in their terms and set two landmines for [competitor] without naming them.

PULL FROM THE UNIVERSE
- Our positioning narrative and proof points.
- The personas' goals and pains.
- The landmines and discovery questions for [competitor].

WRITE
- Five talking points, each tied to a persona pain.
- Two questions that set landmines.
- One proof story in three lines.

OUTPUT
The talking points.

GROUNDING
Use only the positioning, canvases and battlecard, cited. No capability claims outside the product brief.

[name the account, the personas and the competitor]
```

### Step 8: the recap

```
Using Calven MCP, draft the follow-up note after the [account] meeting.

CONTEXT
Below are my notes from the meeting. I want a recap that confirms what they said, answers the open question with the approved wording, and proposes the next step.

PULL FROM THE UNIVERSE
- The product brief for any capability question raised.
- The battlecard objection handling for anything about [competitor].
- The proof point for the outcome they care about.

WRITE
- A recap under 150 words, in their words, with one proof point and a next step.

OUTPUT
The note.

GROUNDING
Use only approved wording from the brief and battlecard. Do not promise a capability or a date.

[paste your notes]
```

### Ad hoc mode: the ten-minute version

```
Using Calven MCP, in ten lines: where do we stand with [account], who is [contact], and what could sink us against [competitor]?
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

## Good practice

- Name the deal and the competitor in the first prompt. The brief is only as sharp as the question.
- Ask for the one question to ask first. The best briefs end with it.
- Read the lost-similar-deals line twice. That is where executive meetings go wrong.
- Keep proof points to ones with a source. The executive is the person who must not overclaim.
- Ask the rep to log the recap in the CRM; Calven does not write back.

## Not covered today

- Live news about the account or the contact. Calven holds what the CRM and the calls recorded.
- Updating the CRM after the meeting.
- Anything about accounts not in the CRM mirror or restricted by workspace settings.
