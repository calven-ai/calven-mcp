# LinkedIn messages


You've got 300 characters on LinkedIn and still want to say something specific to the persona. You get a connection request, a first message and a follow-up that reference a real pain in the buyer's words and ask for nothing on the first touch. Calven adds the company's knowledge, so you're not sending the email, shortened.

## Prompts

### Write the connection note and two messages

```
Using Calven MCP, write my LinkedIn connection note, first message and follow-up for the persona below at this account.

FILL IN
- Persona: [persona]
- Account: [account]

CONTEXT
Outbound, part of a sequence that also has email and calls. The connection note has no ask. The first message carries one idea. The follow-up changes the angle.

PULL FROM THE UNIVERSE
- The persona's canvas: pains by impact, messaging hooks, watering holes.
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
```

### Test the messages as the persona

```
Using Calven MCP, read these LinkedIn messages as the persona below.

FILL IN
- Persona: [persona]
- Messages: [paste the three messages]

CONTEXT
Would they accept, would they reply, and where does it read as a pitch?

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review.

OUTPUT
A verdict per message and the one line to change.

GROUNDING
React only from what the Universe says about this persona.
```

### Find a new angle for the follow-up

```
Using Calven MCP, give me a different angle for my LinkedIn follow-up to the persona below.

FILL IN
- Persona: [persona]
- Pain used: [the pain the first message was about]

CONTEXT
The first message was about the pain above and got no reply.

PULL FROM THE UNIVERSE
- The persona's other high-impact pains and jobs to be done.
- The themes customers in this persona raise most this quarter.

OUTPUT
Two alternative angles with a quote each, and a 60-word follow-up on the stronger one.

GROUNDING
Use only canvas and quote content in the Universe.
```

## Advanced prompts

### Run your angles as a bandit

```
Run my LinkedIn angles as a multi-armed bandit: start with several evidence-backed angles, update after every batch of replies and shift sends toward the winner. Use Calven MCP for the angles worth testing.

FILL IN
- Persona: [persona]
- Results so far: [paste a table of angle, messages sent, replies, or write "none yet"]
- Messages per week: [number]

CONTEXT
I pick an angle, send fifty messages, decide by feel and switch. A bandit learns while it sends, wasting fewer messages on losers than a fixed A/B test. I want the method and the next week's split.

FROM CALVEN
- The persona canvas: pains, gains, messaging hooks.
- The top themes for the persona from customer quotes, with mention counts and one verbatim line each.
- Recent trends with high severity that touch the persona's world.

METHOD
- Draft four angles, each from a different source (a pain, a gain, a trend, a customer quote), each a 300-character message with no ask.
- Use Thompson sampling: a Beta(1,1) prior per angle, updated with replies and non-replies. If I have results, update with them; if not, split evenly for the first week.
- Give next week's split as a count of messages per angle.
- Add a retirement rule (when an angle's chance of being best drops under 5 percent) and a rule for adding a new challenger.
- If you can run code, write a small script I can rerun each week with my new counts.

OUTPUT
The four messages with their source, the posterior per angle, next week's split, and the script or the update steps.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Quotes verbatim. Don't invent reply rates I didn't give you.
```

### Find warm paths through won customers

```
Find warm paths into my target accounts by crossing my LinkedIn network with people on deals we've won. Use Calven MCP for the target accounts, the contacts on won deals and the roles that matter.

FILL IN
- My connections: [attach the LinkedIn connections export: name, company, title]
- Segment: [segment]
- Target accounts: [paste them, or write "Tier 1 accounts in the segment with no open deal"]

CONTEXT
A cold message to a VP gets ignored. The same message after a customer says "worth talking to them" gets read. I want the shortest credible path into each target, not a list of everyone I know.

FROM CALVEN
- The target accounts with fit tier, triggers and contacts on record.
- Contacts on won deals, with role (champion, economic buyer) and account.
- Personas, so titles map to buyer, user or stakeholder.

METHOD
- Build a small graph: me, my connections, won-deal contacts, target accounts and their contacts. Match by company and name.
- Score each path: is the bridge a champion on a won deal (strong), a contact at a customer (medium), or just a connection (weak)? Does the target contact match a buyer persona?
- For each target account, keep the best path and one backup.
- If you can run code, do the matching in a script with fuzzy name and company matching, and list the matches it wasn't sure of.

OUTPUT
A table per target account: best path, path strength, the person to ask, and a two-line intro request written for the bridge to forward.

GROUNDING
Label every match as exact, fuzzy or none. Don't invent a relationship, a role or a contact the data doesn't show.
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
- Which watering holes on [persona]'s canvas are LinkedIn groups or creators?
- Which customer quote on [pain] fits in 300 characters?
- Which trend could I comment on to start a conversation with a [persona]?
- Which of our won-deal champions are in [industry]?
- What does [persona] post or care about professionally, per the canvas goals?
