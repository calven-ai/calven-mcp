# New agent training


You've got a new support agent and two weeks to get them answering product, plan and competitor questions correctly and sounding like the company. You come away with a curriculum, modules, practice tickets from real customer language and a certification quiz, so they pass it and get through a week of QA'd tickets. Calven builds it from your own brief and customers, not the onboarding sales uses, which is too sales-shaped and already out of date.

## Prompts

### Plan the two-week onboarding curriculum

```
Using Calven MCP, build a two-week onboarding curriculum for a new support agent.

FILL IN
- Start date: [start date]

CONTEXT
The agent joins on the start date, has support experience but has never seen our product. Days 1 to 5 are learning, 6 to 10 are supervised tickets.

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
```

### Write a training module

```
Using Calven MCP, write the training module below for new support agents.

FILL IN
- Module: [product, customer, competitor or voice]

CONTEXT
Thirty minutes of reading, support-shaped: what a customer will ask, what the right answer is, what to escalate.

PULL FROM THE UNIVERSE
- The documents for the module. Product: the product brief. Customer: the ICP summary, persona canvases and quotes by pain and job. Competitor: the battlecards. Voice: messaging boilerplate, one-liner, objection handling.

WRITE
- The module in plain sections, each ending with "what a customer might ask" and the approved answer.
- Five check questions with cited answers.

OUTPUT
The module and the quiz.

GROUNDING
Cite every fact to its document and section. Do not fill thin sections from general knowledge; write "ask your manager" where the Universe is silent.
```

### Write practice tickets from real language

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

### Build the certification quiz

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
