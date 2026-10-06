# Webinars

**Related:** [Customer events and webinars](../customer-marketing/customer-events-and-webinars.md) covers sessions for existing customers.

You need a topic the target persona wants to spend an hour on, an abstract they'd register for, the promotion, and a follow-up that moves attendees toward a conversation. You walk away with the topic and its evidence, the title and abstract, promotion emails and posts, the moderator's questions and the follow-up sequence. Calven grounds the topic in buyer evidence, so it isn't the product roadmap in disguise.

## Prompts

### Pick a webinar topic and write the abstract

```
Using Calven MCP, pick a webinar topic for the persona below and write the abstract.

FILL IN
- Persona: [persona]
- Goal: [registrations from Tier 1 accounts / pipeline from attendees]
- Window: [time window, e.g. last quarter]

CONTEXT
The session serves the goal above and is 45 minutes.

PULL FROM THE UNIVERSE
- Themes and quotes from the persona in the window: the pains and jobs with the most mentions.
- Trends with high severity relevant to this persona.
- The persona's canvas: messaging hooks and watering holes.

BUILD
- Three topic candidates, each with the theme count, the quote that proves demand, and the trend that makes it timely. Recommend one.
- For the recommended topic: three title options in the persona's words, a 100-word abstract, and three takeaways.

OUTPUT
The candidates, the recommendation, the abstract.

GROUNDING
Only pains and language grounded in quotes and trends, cited. No product pitch in the abstract.
```

### Outline the session

```
Using Calven MCP, outline the webinar below for the persona below.

FILL IN
- Title: [webinar title]
- Persona: [persona]

PULL FROM THE UNIVERSE
- The persona's canvas: jobs to be done and objections on this topic.
- Customer quotes on the topic, by pain and gain.
- Proof points and quotes we can show.

BUILD
- Five segments, each: the question it answers, the point, the quote or proof, the slide it needs.
- Six moderator questions from the objections.
- The one product moment and where it sits.

OUTPUT
The outline.

GROUNDING
Quotes verbatim and cited. Product claims from the brief only.
```

### Write the promotion and follow-up emails

```
Using Calven MCP, write the promotion and follow-up emails for the webinar below.

FILL IN
- Title: [webinar title]
- Persona: [persona]
- Abstract: [paste the abstract]

PULL FROM THE UNIVERSE
- The abstract, the persona's canvas, and our messaging for the awareness and consideration stages.
- Customer quotes on the topic.

WRITE
- Three promotion emails (invite, reminder, last call), each opening on a different pain quote.
- Two posts for the persona's watering holes.
- Three follow-ups: attended, registered but missed, engaged in Q&A, each with the next-step offer.

OUTPUT
The emails and posts, under 120 words each, with sources.

GROUNDING
Language from quotes, claims from the brief, cited.
```

## Advanced prompts

### Pick the topic with a Delphi panel

```
Pick the webinar topic with a Delphi panel of our personas: independent ratings, shared feedback, a second round, convergence. Use Calven MCP for the panelists and the evidence they argue from.

FILL IN
- Candidate topics: [paste four to six topics]
- Personas: [three or four personas the webinar targets]
- Segment: [segment]

CONTEXT
The topic usually comes from whoever spoke loudest in the planning call. A Delphi round takes the loudest voice out and shows where the audience genuinely agrees.

FROM CALVEN
- Each persona's canvas: goals, pains, jobs to be done, watering holes.
- The themes with the most mentions for each persona last quarter, with counts.
- High-severity trends for the segment.

METHOD
- Round 1: each persona rates every topic 1 to 10 on "I'd give up an hour for this", alone, with a one-line reason grounded in their canvas or themes.
- Share the anonymised median and range. Round 2: each persona revises or defends their score.
- Stop when the spread on the top topic narrows, or after round 3. Report where the panel converged, and where one persona stayed an outlier and why.
- For the winner, write the title and a three-line abstract in the persona's words.

OUTPUT
A table of scores by round, the winning topic with its title and abstract, and the outlier view worth keeping for the Q&A.

GROUNDING
Every rating reason cites the canvas, a theme or a trend; mark extrapolation as yours. Don't invent theme counts.
```

### Find which webinars actually made pipeline

```
Find which past webinars actually made pipeline, with a cohort analysis of the attendees. Use Calven MCP to see which attendees' accounts went on to open deals.

FILL IN
- Attendee export: [attach a CSV: webinar, date, attendee, company, title, registered or attended]
- Window: [window]

CONTEXT
We judge webinars on registrations. Before I plan next quarter's calendar, I want to know which topics brought in the accounts that later bought, and how long it took.

FROM CALVEN
- For each company: ICP tier and any deal opened after the webinar date, with stage, outcome and amount, from the CRM.
- The CRM contacts at those accounts, with role.

METHOD
- Treat each webinar as a cohort. Match attendees to accounts and report the match rate.
- For each cohort: share of Tier 1 and Tier 2 attendees, share whose account opened a deal within 30, 90 and 180 days, and the pipeline and won revenue that followed.
- Compare attended against registered-only as a rough control.
- Plot time to first deal by cohort; if you can run code, as a survival curve.
- Group the webinars by topic and format, and say which pattern made pipeline.

OUTPUT
A cohort table, the chart, the two topics to repeat and the one to drop.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Pipeline after a webinar is influenced, not caused; say so. Don't count an account the match can't confirm.
```

## Ad hoc questions

- What topic does [persona] ask about most on calls this quarter?
- Which trend would make a timely webinar for [segment]?
- Give me three webinar titles in [persona]'s words about [pain].
- Which questions would [persona] ask the speaker?
- Which Tier 1 accounts have a [persona] contact to invite?
- Where does [persona] look for events and communities?
- What proof can we show on [topic]?
- Which objections should the Q&A prep cover?
- Which customers have quotes on [topic] we could ask to speak?
- Rewrite this abstract in the buyer's words: [paste]
- What may the speakers claim about [capability]?
- Which high-severity trends for [segment] are still marked new, not acted on?
- What question do buyers ask on calls that our messaging never answers?
- Which customers have Quantified outcome quotes about [topic]?
- Which [persona] contacts sit on open deals a webinar invite could move forward?
- Which analyst findings back a webinar on [topic]?
