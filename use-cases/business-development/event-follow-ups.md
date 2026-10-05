# Event follow-ups

**Team:** Business development · also demand generation, account executives
**Impact:** Medium. The 48 hours after an event decide whether a badge scan becomes a meeting; a follow-up that picks up the session's theme in the persona's words beats "great to meet you at the booth".
**Prerequisites:** personas approved, messaging approved. Better with call transcripts ingested (customer language) and CRM connected (is the attendee's account known).

## What the team is trying to do

Follow up with every attendee, registrant or booth visitor inside two days with a message that connects what they saw to a problem they have. Done means three variants (attended the session, visited the booth, registered but did not come), each tied to the persona and the event's theme, with a fit check on the account. Without the company's knowledge every attendee gets the same thank-you email.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Segment the list | Attended, visited, no-show; persona; fit | Fit tier for known accounts; the persona for each title | CRM accounts, persona canvas |
| 2 | Pick the theme | What the session or booth was about | The messaging pillar and customer language for that theme | Messaging, quotes, themes |
| 3 | Write the variants | Three messages | Messages in the persona's words with one proof | Persona canvas, quotes |
| 4 | Add the next step | Demo, call, content | The step for this persona and stage | Messaging matrix |
| 5 | Prioritise | Who to call, who to email | In-profile accounts first; past deal history | CRM accounts, CRM deals |
| 6 | Send and log | Sequence, CRM | Calven does not help here | |

## Recommended prompts

### Steps 2 to 4: the three variants

```
Using Calven MCP, write my follow-ups for [event].

CONTEXT
The event's theme was [theme]. Our session or booth covered [what we showed]. I need three variants for [persona]: attended our session, visited the booth, registered but did not come. Each under 90 words, sent within 48 hours.

PULL FROM THE UNIVERSE
- The messaging pillar closest to [theme] and the customer phrases behind it.
- The [persona] canvas: the pain the theme touches, messaging hooks.
- One customer quote or won deal that proves the point we made at the event.

WRITE
- Three variants, each: one line on what they saw or missed, the pain in the customer's words, the proof, one next step.

OUTPUT
The three messages with sources.

GROUNDING
Use only messaging, quotes and deals in the Universe. Do not invent what the attendee said or did at the booth; leave a bracket for the BDR's own note.

[name the event, the theme, the persona and what we showed]
```

### Steps 1 and 5: prioritise the list

```
Using Calven MCP, rank these event leads.

CONTEXT
The attendee list is at the bottom (name, title, company). I want to know who to call first.

PULL FROM THE UNIVERSE
- ICP fit for each company we hold in the CRM; the ICP attributes to judge the rest.
- The persona for each title.
- Any open or past deal with the company.

OUTPUT
A ranked table: company · fit · persona · past deal · call or email.

GROUNDING
Use only CRM and ICP content in the Universe. Mark companies not in the CRM as "judge on ICP" rather than guessing a tier.

[paste the attendee list]
```

### Step 2: the theme in customer words

```
Using Calven MCP, give me the customer language for [theme].

PULL FROM THE UNIVERSE
- Quotes and themes where customers talk about [theme], with sentiment.

OUTPUT
Five phrases, each with its quote and source.

GROUNDING
Verbatim only, from the Universe.

[name the theme]
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

## Good practice

- Write the variants before the event and fill the bracket after. The 48-hour window is short.
- Rank the list before sending. Calls go to in-profile accounts; email goes to the rest.
- Keep your own note about the conversation separate; Calven adds the pain and proof, you add what they said.
- One next step per variant.
- Reuse the variants for the next event with the theme swapped.

## Not covered today

- Badge scan and registration data. Paste the list.
- Sending and CRM campaign attribution.
- The attendee's company news.
