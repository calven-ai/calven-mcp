# Event follow-ups


The event's over and you've got two days to follow up with every attendee, registrant and booth visitor. You get three variants (attended the session, visited the booth, registered but didn't come), each tied to the persona and the event's theme, with a fit check on the account. Calven adds the company's knowledge, so nobody gets the same thank-you email.

## Prompts

### Write three event follow-up variants

```
Using Calven MCP, write my follow-ups for the event below.

FILL IN
- Event: [event]
- Theme: [theme]
- What we showed: [what our session or booth covered]
- Persona: [persona]

CONTEXT
I need three variants for the persona: attended our session, visited the booth, registered but did not come. Each under 90 words, sent within 48 hours.

PULL FROM THE UNIVERSE
- The messaging pillar closest to the theme and the customer phrases behind it.
- The persona's canvas: the pain the theme touches, messaging hooks.
- One customer quote or won deal that proves the point we made at the event.

WRITE
- Three variants, each: one line on what they saw or missed, the pain in the customer's words, the proof, one next step.

OUTPUT
The three messages with sources.

GROUNDING
Use only messaging, quotes and deals in the Universe. Do not invent what the attendee said or did at the booth; leave a marked gap for the BDR's own note.
```

### Rank the event leads to call first

```
Using Calven MCP, rank these event leads.

FILL IN
- Attendees: [paste the attendee list: name, title, company]

CONTEXT
I want to know who to call first.

PULL FROM THE UNIVERSE
- ICP fit for each company we hold in the CRM; the ICP attributes to judge the rest.
- The persona for each title.
- Any open or past deal with the company.

OUTPUT
A ranked table: company · fit · persona · past deal · call or email.

GROUNDING
Use only CRM and ICP content in the Universe. Mark companies not in the CRM as "judge on ICP" rather than guessing a tier.
```

### Find customer language for the theme

```
Using Calven MCP, give me the customer language for the theme below.

FILL IN
- Theme: [theme]

PULL FROM THE UNIVERSE
- Quotes and themes where customers talk about the theme, with sentiment.

OUTPUT
Five phrases, each with its quote and source.

GROUNDING
Verbatim only, from the Universe.
```

## Advanced prompts

### Calibrate a lead score on the last event

```
Calibrate a lead score on last event's results and use it to rank this event's list. Use Calven MCP to enrich both lists with fit, persona and deal history.

FILL IN
- Last event's leads with outcomes: [attach CSV: name, title, company, touch type (session, booth, no-show), meeting booked, opportunity]
- This event's leads: [attach CSV]
- Event theme: [theme]

CONTEXT
After every event we call the list top to bottom. Some rows matter far more than others, and last time's results can tell us which. I want a score fitted on real outcomes, not my gut.

FROM CALVEN
- ICP fit tier and score for each company found in the CRM, and whether it has an open or closed deal.
- Personas with role titles, so each attendee maps to a buyer, user or stakeholder persona.
- Win rate by persona from the persona dashboard, with n, as a prior.

MODEL
- Enrich last event's leads and build features: fit tier, persona type, touch type, existing deal, seniority.
- If you can run code, fit a logistic regression on meeting booked, check calibration with a reliability table, and keep it simple: five features at most. With few positives, use a points-based score instead and say why.
- Apply the score to this event's leads and rank them.
- Show the expected meetings from the top 20, top 50 and the whole list, so I know where to stop.

OUTPUT
The scoring rule in plain words, its calibration, the ranked list with score and the reason for each top-20 lead, and the stop line.

GROUNDING
Label every number as Calven (cited, with n), mine (from the CSV), or your assumption. Don't invent an outcome or a fit tier for a company not in the CRM; mark it unmatched.
```

### Find which follow-up offer attendees value

```
Find which parts of the follow-up attendees value most with a conjoint-style trade-off exercise, played by our personas. Use Calven MCP for the personas, the proof we can offer and the language they use.

FILL IN
- Event theme: [theme]
- Offers I could make: [list them: recording, benchmark report, workshop, demo, a call with a customer]
- Personas at the event: [personas]

CONTEXT
I write one follow-up and pick the offer by habit. Attendees trade things off: a short ask with weak proof versus a bigger ask with a strong customer story. I want to know which mix each persona picks.

FROM CALVEN
- The persona canvases: goals, pains, objections, gains.
- Proof points and customer quotes related to the event theme, and their highlight tags.
- Quotes on the event theme in the customers' own words.

SIMULATE
- Define three attributes with two or three levels each: offer, proof (none, a number, a named customer quote), ask (reply, 15-minute call, demo).
- Build 8 to 12 profiles from a fractional design. Have each persona pick the better of pairs in sets of choice tasks, with a one-line reason grounded in their canvas.
- Estimate part-worths per persona from the choices. If you can run code, fit a simple conditional logit; otherwise count wins per level and say it's a rough read.

OUTPUT
A part-worth table per persona, the winning mix for each, and the follow-up email written for the persona with the most attendees.

GROUNDING
The choices are simulated from the canvases, and the output says so. Every proof line is cited. Don't invent a quote or a result we can't show.
```

## Ad hoc questions

- Which of these attendees are at Tier 1 accounts? [paste]
- What pain does [persona] have that [event theme] touches?
- Give me a no-show follow-up for [persona], under 60 words.
- Which pillar does our session on [topic] belong to?
- What proof do we have for the claim we made in the talk?
- Has anyone from [company] been in our pipeline before?
- What is the next step for a [persona] who saw a demo at the booth?
- Which phrases did customers use about [theme]?
- Which attendees' titles map to a buyer persona and which to a user?
- What should I not claim about [capability] we demoed?
- Which persona converts to a deal most often after a first meeting, per the persona dashboard?
- Which of these companies were lost deals, and to whom? [paste]
- What's the strongest quote we have on [event theme], and who said it?
- Which competitor was likely at the same event, given their recent signals?
- Which buying trigger fits an attendee who asked about [topic]?
