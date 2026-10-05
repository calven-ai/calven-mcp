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
