# LinkedIn messages

**Team:** Business development · also account executives, demand generation
**Impact:** Medium. LinkedIn carries the warmth in a multi-channel sequence; a connection note and a follow-up that read as the persona's problem get accepted and answered, the pitch gets ignored.
**Prerequisites:** personas approved, messaging approved. Better with call transcripts ingested (customer language).

## What the team is trying to do

Write a connection request, a first message and a follow-up that fit a 300-character limit and still say something specific to the persona. Done means messages that reference a real pain in the buyer's words and ask for nothing on the first touch. Without the company's knowledge the BDR sends the email, shortened.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the hook | One pain or trigger per message | The persona's messaging hooks and top pains, in customer language | Persona canvas, quotes |
| 2 | Write the connection note | Under 300 characters, no ask | A note built on the hook | Persona canvas |
| 3 | Write the first message | After acceptance, one idea | The pain, one proof, one question | Quotes, deal drivers |
| 4 | Write the follow-up | Day 5 to 7, new angle | A second pain or a customer story | Themes, surveyed deals |
| 5 | Test on the buyer | Would they accept and reply? | Persona review | `review_against_personas` |
| 6 | Check the profile and posts | Personalise from what they wrote | Calven does not help here | |
| 7 | Send and track | Acceptance, replies | Calven does not help here | |

## Recommended prompts

### Steps 1 to 4: the three messages

```
Using Calven MCP, write my LinkedIn connection note, first message and follow-up for [persona] at [account].

CONTEXT
Outbound, part of a sequence that also has email and calls. The connection note has no ask. The first message carries one idea. The follow-up changes the angle.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains by impact, messaging hooks, watering holes.
- The phrases customers use for the top pain, with one quote.
- One won deal in a similar segment and what decided it.

WRITE
- Connection note under 300 characters, on the pain, no ask.
- First message under 80 words: the pain, one proof, one question.
- Follow-up under 60 words: a second pain or the customer story, one question.

OUTPUT
The three messages with the source for each hook.

GROUNDING
Use only canvas content, quotes and deals in the Universe and cite them. Do not invent a shared connection or a customer name.

[name the persona and the account]
```

### Step 5: test

```
Using Calven MCP, read these LinkedIn messages as [persona].

CONTEXT
The three messages are at the bottom. Would they accept, would they reply, and where does it read as a pitch?

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review.

OUTPUT
A verdict per message and the one line to change.

GROUNDING
React only from what the Universe says about this persona.

[paste the messages]
```

### Step 4: a new angle for the follow-up

```
Using Calven MCP, give me a different angle for my LinkedIn follow-up to [persona].

CONTEXT
The first message was about [pain] and got no reply.

PULL FROM THE UNIVERSE
- The persona's other high-impact pains and jobs to be done.
- The themes customers in this persona raise most this quarter.

OUTPUT
Two alternative angles with a quote each, and a 60-word follow-up on the stronger one.

GROUNDING
Use only canvas and quote content in the Universe.

[name the persona and the pain you already used]
```

## Ad hoc questions

- What is the one pain to lead with for [persona] on LinkedIn?
- Give me a 300-character connection note for a [persona], no ask.
- Where does [persona] spend time online, according to the canvas?
- Which phrase do customers use for [pain]?
- Is this message a pitch or a problem? [paste]
- Which customer story would a [persona] in [industry] recognise?
- What would [persona] reply to after reading this? [paste]
- Give me a follow-up angle that is not [pain].
- What does [persona] care about that our emails never mention?
- Which proof point fits in one sentence for [persona]?

## Good practice

- Give the character limits. The AI tool writes long unless told.
- No ask in the connection note. Ask for it explicitly.
- One idea per message. Two pains in 80 words reads as a pitch.
- Personalise from the profile yourself. Calven supplies the pain and proof; the person's own post is yours to add.
- Test before sending the first batch, then reuse.

## Not covered today

- Reading the prospect's profile, posts or activity.
- Sending, connection tracking, reply tracking.
- Social selling tools and their data.
