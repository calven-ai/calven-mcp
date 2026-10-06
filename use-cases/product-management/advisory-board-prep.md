# Advisory board prep


Your quarterly advisory board is on the calendar: eight to fifteen senior customers giving direction on product priorities, positioning and the market. You come away with the member list, an agenda with two or three decisions to discuss, a pre-read with the evidence, and questions that get strategic answers. Calven supplies the evidence that goes into the pre-read.

## Prompts

### Draft the agenda and pre-read

```
Using Calven MCP, draft the agenda and pre-read for the customer advisory board in the quarter below.

FILL IN
- Quarter: [quarter]
- Set topics: [any topic leadership has already set, or leave blank]

CONTEXT
Eight to fifteen senior customers. I want two or three strategic topics, each with the evidence that made us pick it, and no feature voting. Include any topic leadership has already set.

PULL FROM THE UNIVERSE
- The top customer themes and movers this quarter, with quotes.
- The product gaps ranked by deals at stake.
- Trends and opportunities with the highest severity or impact, with their so-what.
- Recent competitor moves with high severity.

BUILD
- Three candidate topics, each with: why now (the evidence), what we are considering, the question for the board.
- A pre-read of one page per topic.

OUTPUT
The agenda and the pre-reads, sources inline.

GROUNDING
Use only themes, gaps, trends and signals in the Universe, cited with samples and dates. Do not include a topic the evidence does not support.
```

### Propose advisory board members

```
Using Calven MCP, propose members for the advisory board.

FILL IN
- Segments: [segments]

CONTEXT
I want coverage across the segments with senior people who have a stake in where the product goes.

PULL FROM THE UNIVERSE
- Customer accounts by ICP fit tier, industry and size.
- Contacts at those accounts with role exec sponsor, economic buyer or decision maker.
- Which of those accounts raised strategic themes on calls.

BUILD
- A table: account, segment, contact and role, the theme they raised, why they belong.

OUTPUT
A member shortlist of twenty, grouped by segment.

GROUNDING
Use only accounts and contacts in the Universe. If the pipeline category is restricted, say so.
```

### Write the discussion questions

```
Using Calven MCP, write the discussion questions for the topic below.

FILL IN
- Topic: [topic]
- Personas: [personas]

CONTEXT
The board members are the personas above. I want questions that get direction on the topic, not feature requests.

PULL FROM THE UNIVERSE
- The personas' canvases: company objectives, goals and KPIs, jobs to be done.
- The quotes behind the topic.

WRITE
- Six questions that connect the topic to their objectives and KPIs, each with the follow-up.

OUTPUT
The question list.

GROUNDING
Ground the questions in the canvases and quotes, cited.
```

## Advanced prompts

### Run a Delphi round before the board meets

```
Run a two-round Delphi panel on my advisory board's strategic questions, so I know where members will agree and where they'll split before I'm in the room. Use Calven MCP for who the members are and what they've said.

FILL IN
- Questions: [paste the two or three strategic questions on the agenda]
- Members: [paste the member list: account and contact]
- Our view: [paste what we believe the answer is for each question]

CONTEXT
A board session goes well when the minutes go to the real disagreements. I want to find them in advance and build the agenda around them, not around the questions everyone answers the same way.

FROM CALVEN
- For each member's account: segment, ICP fit tier and the contact's role.
- What people at those accounts said on calls, by theme, with dates.
- The persona canvas that matches each member's role: objectives, KPIs, pains.

METHOD
- Build one panelist per member from the evidence above. Where an account has no recorded quotes, say so and lean on the canvas alone.
- Round one: each panelist answers each question independently, with a confidence from 1 to 5 and one line of reasoning in their own words.
- Show the anonymised spread. Round two: each panelist sees it and revises or holds, saying why.
- Mark each question as consensus, split or polarised, and compare the result with our view.

OUTPUT
A table per question: round one spread, round two spread, the strongest argument on each side, and where we differ from the panel. Then a revised agenda that spends the most minutes on the polarised questions.

GROUNDING
Every panelist's view cites a quote, theme or canvas line, or is marked as your inference. Label every confidence score as your judgement. Don't give a member an opinion on a topic their account never raised; mark it "no evidence".
```

### Write down your bets before the board speaks

```
Turn the beliefs my roadmap rests on into explicit odds, then update them with what the board says. Use Calven MCP for the evidence that sets the starting odds.

FILL IN
- Beliefs: [paste three to five beliefs the roadmap rests on, e.g. "mid-market buyers will pay for audit trails"]
- Session notes: [paste the board notes after the session, or write "before the session"]

CONTEXT
Boards are easy to over-read: one loud member and the roadmap shifts. I want to decide before the session how much each kind of answer should move me, then apply it honestly afterwards.

FROM CALVEN
- For each belief: the themes and quotes that support or contradict it, with mention counts and the window.
- Related trends and market opportunities, with severity and so-what.
- Deal drivers that touch the belief, with direction and outcome.

MODEL
- Set a prior for each belief as a probability, from the Calven evidence. Show the reasoning.
- Before the session: list the answers the board could give and a likelihood ratio for each (how much more likely that answer is if the belief is true). Discount for board bias: members are friendly, senior and over-represent large accounts.
- After the session: apply the notes, give the posterior, and say which beliefs crossed a threshold that should change the roadmap.
- If you can run code, show the update as a table and a chart of prior against posterior.

OUTPUT
A one-page bet sheet: belief, prior, evidence, what would move it, posterior, and the decision it triggers.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Priors and likelihood ratios are judgements; show them so I can argue with them. Don't treat one member's view as the board's.
```

## Ad hoc questions

- Which strategic themes grew most this quarter?
- Which trends have the highest severity right now, and what is the so-what?
- Which customer accounts have an exec sponsor contact?
- Which product gaps have the most deals at stake?
- What are [persona]'s company objectives, according to the canvas?
- What did advisory board members say on calls since the last session?
- Which competitor moves this quarter would customers ask us about?
- What changed in the product since [date]?
- Write three discussion questions about [gap].
- Which themes do our largest customers raise that the rest of the base doesn't?
- Which advisory board accounts have an open renewal or expansion deal?
- Which market opportunities have no customer quote behind them?
- What did [account] say about [competitor] on calls in the last year?
- Which high-severity trends do none of our persona canvases mention?
- Which segments have no exec sponsor or decision maker contact we could invite?
