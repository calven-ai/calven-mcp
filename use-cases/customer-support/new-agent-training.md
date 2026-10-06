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

## Advanced prompts

### Run a scored ticket simulator for new agents

```
Run a ticket simulator: you play customers, the new agent answers, and you score every reply against our approved facts. Use Calven MCP for the customers' real language, the product facts and the competitor answers.

FILL IN
- Agent's level: [first week, second week, or ready to certify]
- Focus: [product, pricing, competitors, or a mix]
- Rounds: [number of tickets, e.g. ten]

CONTEXT
Reading the brief doesn't teach anyone to answer a frustrated customer. New agents need reps against realistic tickets with feedback on each one, before they touch a real queue.

FROM CALVEN
- The product brief: capabilities, limits, pricing and packaging, known weaknesses.
- Customer quotes tagged Product feedback, Usability or Pricing, to write tickets in real customer language.
- The battlecards' objection handling for the competitors customers mention most.

SIMULATE
- Play one customer at a time, in their words, with a believable account situation. Mix easy questions, near-miss traps where a careless yes is wrong, a competitor mention and one angry customer.
- Wait for the agent's reply. Score it on accuracy against the brief, honesty about limits, tone, and whether it should have escalated, one to five each, with the line that cost the point and the approved answer.
- Raise the difficulty after two strong answers in a row; drop it after two weak ones.
- After the last round, give a summary: strengths, the two gaps to study, and the brief sections to read.

OUTPUT
One ticket at a time, then the score and feedback after each reply, then the final scorecard.

GROUNDING
Ticket wording comes from real quotes; scoring cites the brief or battlecard. Don't invent a product fact to make a scenario harder.
```

### Build a spaced-repetition deck for the ramp

```
Build a spaced-repetition flashcard deck that gets a new agent fluent in the product, the customers and the competitors in two weeks. Use Calven MCP for the facts the cards test.

FILL IN
- Card count: [how many cards, e.g. 150]
- Format: [CSV for Anki or another flashcard app, or a printable sheet]
- Weak spots: [paste common mistakes new agents make, or write "none"]

CONTEXT
New agents forget most of what they read in week one. Cards they review on a schedule stick. The hard part is writing good cards from the right facts, which is what I want done.

FROM CALVEN
- The product brief: capabilities, integrations, limits, pricing and packaging, known weaknesses.
- The ICP summary and disqualifiers, and the persona roster with what each cares about.
- Each tracked competitor's battlecard: where we win, where we lose, objection handling.

BUILD
- Write cards in three types: fact (what does plan Y include), judgement (a customer asks X, what do you say, and when do you escalate), and recognition (a quote, which persona or competitor is this about).
- Tag each card by topic and difficulty. Weight cards toward known weaknesses, recent product changes and my weak spots.
- Write a 14-day schedule: new cards per day, review intervals, and a day 7 and day 14 self-test.
- If you can run code, output the deck as a CSV with front, back, source and tags, ready to import.

OUTPUT
The deck file, the 14-day schedule, and a ten-card sample shown inline.

GROUNDING
Every card's answer cites the brief, ICP, persona canvas or battlecard. Don't write a card whose answer isn't in Calven; list those topics as gaps instead.
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
- What are the three things a new agent most often gets wrong, judging by the brief's known weaknesses?
- Which persona files the most support-type feedback on calls?
- Give me five real customer quotes a new agent should be able to answer.
- What does each tracked competitor claim that a new agent should know is false?
- Which features changed in the last 90 days, so training doesn't teach the old way?
- Which customer themes should every new agent recognise by name?
