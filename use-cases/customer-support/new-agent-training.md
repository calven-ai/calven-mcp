# New agent training

**Team:** Customer support · also sales enablement, people and talent
**Impact:** Medium. A new agent takes weeks to learn the product, the customers and the competitors from shadowing and old decks. A curriculum built from the approved documents, with a quiz, cuts the ramp and makes the first answers consistent with everyone else's.
**Prerequisites:** strategy documents approved (product brief, ICP, messaging), personas approved, competitors tracked. Better with call transcripts ingested (real customer language and situations for exercises).

## What the team is trying to do

Get a new support agent to the point where they answer product, plan and competitor questions correctly and sound like the company, in their first two weeks. Done means a certification quiz passed and a week of QA'd tickets. The support manager usually assembles this from whatever onboarding sales uses, which is too sales-shaped and already out of date.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Plan the curriculum | What to cover in which order | The outline from the product brief, ICP, personas and competitor list | Product brief, ICP, personas, competitors |
| 2 | Product module | What it does, how it works, plans, limits | The brief as a readable module with a quiz | Product brief |
| 3 | Customer module | Who the customers are, what they are trying to do, how they talk | ICP summary, persona canvases, customer quotes by job and pain | ICP, personas, quotes |
| 4 | Competitor module | Who we compete with and what to say | Battlecards, honest where we lose | Competitor battlecards |
| 5 | Voice module | How the company describes itself | Messaging boilerplate and the one-liner | Messaging |
| 6 | Exercises | Realistic practice tickets | Scenarios built from real quotes and themes | Quotes, themes |
| 7 | Certification | Quiz, graded | A quiz with answers cited to the documents | All of the above |
| 8 | Shadowing and QA | Live tickets with review | Calven does not help here | |

## Recommended prompts

### Step 1: the curriculum

```
Using Calven MCP, build a two-week onboarding curriculum for a new support agent.

CONTEXT
The agent joins [date], has support experience but has never seen our product. Days 1 to 5 are learning, 6 to 10 are supervised tickets.

PULL FROM THE UNIVERSE
- The product brief outline and its sections.
- The ICP summary and the list of personas.
- The competitors we track and which have battlecards.
- The messaging one-liner and boilerplate.

BUILD
- A day-by-day plan: topic, the Calven document to read, the check question for the day.

OUTPUT
The plan as a table, with document references.

GROUNDING
Build only from documents that exist in the Universe. If a document is missing (no battlecard for a competitor, no persona canvas), say so rather than inventing content.

[name the start date]
```

### Step 2 to 5: a module

```
Using Calven MCP, write the [product / customer / competitor / voice] training module for new support agents.

CONTEXT
Thirty minutes of reading, support-shaped: what a customer will ask, what the right answer is, what to escalate.

PULL FROM THE UNIVERSE
- [Product: the product brief. Customer: the ICP summary, persona canvases and quotes by pain and job. Competitor: the battlecards. Voice: messaging boilerplate, one-liner, objection handling.]

WRITE
- The module in plain sections, each ending with "what a customer might ask" and the approved answer.
- Five check questions with cited answers.

OUTPUT
The module and the quiz.

GROUNDING
Cite every fact to its document and section. Do not fill thin sections from general knowledge; write "ask your manager" where the Universe is silent.

[name the module]
```

### Step 6: practice tickets from real customer language

```
Using Calven MCP, write ten practice tickets for a new support agent from real customer language.

CONTEXT
I want scenarios that sound like our customers, each with the model answer.

PULL FROM THE UNIVERSE
- Customer quotes across pains, jobs, objections and competitor mentions.
- The product brief and battlecards for the answers.

BUILD
- Ten tickets: the customer's message in their words (adapted from quotes, anonymised), the model answer, the escalation call, the source.

OUTPUT
The ten tickets with answer keys.

GROUNDING
Base every scenario on a real quote and every answer on the brief or a battlecard. Mark any scenario where the right answer is "not in the brief, escalate".
```

### Step 7: certification quiz

```
Using Calven MCP, build a 25-question certification quiz for support agents.

CONTEXT
Pass mark 80 percent. Covers product, plans, customers, competitors and voice.

PULL FROM THE UNIVERSE
- The product brief, ICP, persona canvases, battlecards and messaging.

BUILD
- 25 questions with the correct answer and the document section that proves it; a mix of factual, scenario and "what would you escalate".

OUTPUT
The quiz and the answer key.

GROUNDING
Every answer must be checkable against the Universe. No trick questions on facts the documents do not state.
```

## Ad hoc questions

- Give me a one-page summary of the product brief for someone new.
- Who are our personas and what does each care about?
- Which competitors do we track, and which have a battlecard?
- What is our one-liner and boilerplate?
- What are the top five pains customers describe, with a quote each?
- What does the ICP say about who we are for and who we are not for?
- Quiz me on the product brief: ten questions.
- What should a support agent never claim about [feature]?
- What are the most common objections and the approved responses?
- Which plan includes what?

## Good practice

- Build the curriculum from the documents, then have the manager add the ticket-system and process parts Calven does not hold.
- Use real customer quotes in exercises. Agents who practice on marketing-speak freeze on the first real ticket.
- Cite the source in every quiz answer so the agent learns where to look, not only what to say.
- Rebuild the quiz after a release. Product changes make last quarter's answers wrong.

## Not covered today

- Ticket-system training, process, tone-of-voice coaching on live tickets, QA scoring.
- Tracking completion or scores.
- Product walkthroughs and screenshots. The brief states what the product does, not every screen.
