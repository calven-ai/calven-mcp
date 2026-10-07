# Customer events and webinars

**Related:** [Webinars](../demand-generation/webinars.md) covers prospect-facing sessions.

You're planning a customer session and want one people attend and talk about: a topic they care about, a peer on stage, an abstract in their words. You walk away with a topic shortlist with evidence, a speaker shortlist with the story each would tell, and an abstract and invitation that pass the persona check. Calven brings the company's own evidence, so the topic isn't whatever product wants to demo.

## Prompts

### Shortlist topics for the next webinar

```
Using Calven MCP, propose topics for our next customer webinar.

FILL IN
- Persona: [persona]

CONTEXT
The audience is existing customers, mostly the persona. I want topics they are already asking about.

PULL FROM THE UNIVERSE
- The customer themes with the most mentions this quarter (pains, jobs to be done), each with a representative quote.
- The persona's canvas: jobs to be done and where they learn.
- Approved market trends with a so-what for this persona.

BUILD
- Five topics, each with the theme behind it, the mention count, the quote, and the format that fits (customer talk, workshop, product session).

OUTPUT
The five topics ranked.

GROUNDING
Use only the Universe and cite it. Do not propose a topic with no evidence.
```

### Find customer speakers for a session

```
Using Calven MCP, find customer speakers for a session on the topic below.

FILL IN
- Topic: [topic]
- Persona: [persona]

CONTEXT
I want a customer who has lived the topic and talked about the outcome.

PULL FROM THE UNIVERSE
- Customer quotes on the topic tagged quantified outcome, time to value or competitive win, with speaker, role and account.
- The contact's title and buying role from the CRM.

BUILD
- A table: contact, account, the story in one line, the quote, why they would be credible to the persona.

OUTPUT
The table with your top three.

GROUNDING
Use only quotes and CRM data in the Universe, cited. Willingness to speak is not in Calven.
```

### Write the abstract and invitation

```
Using Calven MCP, write the abstract and invitation for the session below.

FILL IN
- Session: [session title]
- Format: [format]
- Topic: [topic]
- Persona: [persona]
- Speaker: [speaker]
- Account: [speaker's account]

CONTEXT
The session is in the format above, on the topic, for the persona, with the speaker from their account. Abstract 80 words, invitation email 120 words.

PULL FROM THE UNIVERSE
- The pain in the persona's words, with a quote.
- The messaging pillar the session supports.
- The speaker's own quotes on the topic.

WRITE
- A title, the abstract, three takeaways, the invitation.

OUTPUT
The four pieces.

GROUNDING
Use only the Universe and cite it. Do not promise content the speaker has not agreed to.
```

## Advanced prompts

### Test session titles on a synthetic audience

```
Run a MaxDiff test of my candidate session titles on a synthetic audience built from our personas, and pick the one that fills the room. Use Calven MCP for the personas, the pains customers keep raising and a review of the finalists.

FILL IN
- Candidate titles: [paste six to ten titles with a one-line abstract each]
- Audience personas: [personas]

CONTEXT
Turnout lives or dies on the title, and we pick it in a meeting. I want the forced-choice test a research team would run, before the invitation goes out.

FROM CALVEN
- The persona canvases: goals, pains, jobs to be done, watering holes.
- The themes customers raised most in the last 90 days, by persona, with mention counts.
- A persona review of the top three titles with their abstracts.

SIMULATE
- Build 30 synthetic respondents split across the personas, each with a role, a current priority and a pain drawn from the canvas and the themes.
- Show each respondent ten sets of four titles. In each set, the respondent picks the one they'd register for and the one they'd skip, with a reason in their words.
- Compute best-minus-worst scores per title, overall and by persona. If you can run code, fit the scores properly and show the spread across respondents.
- Run the top three through the persona review and let it flag jargon or shaky claims.

OUTPUT
A ranked table of titles with scores overall and by persona, the reasons that came up most, the winner rewritten with the review's fixes, and a runner-up for the follow-up session.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The respondents are synthetic, built from cited canvases and themes; say so wherever a score appears. Don't present the scores as a forecast of real registrations.
```

### Find the break-even on the event

```
Model whether our customer event pays back, with a break-even and a sensitivity on the numbers that matter. Use Calven MCP for the invitable audience, our expansion deal history and what customers want to hear.

FILL IN
- Event plan: [format, date, venue or platform, total cost]
- Past events: [paste registrations, attendance and any pipeline from the last three events, or write "none"]
- Goal: [expansion pipeline, renewals protected, advocates recruited]

CONTEXT
Leadership will ask what the event returns. I want an honest model that shows the break-even, not a slide that assumes everyone shows up.

FROM CALVEN
- Customer contacts in the CRM by role and ICP tier, as the invitable audience.
- Expansion and upsell deals won in the last 12 months: count and average amount.
- The top themes for the target personas, with mention counts, to judge pull.

MODEL
- Build the funnel: invited, registered, attended, engaged (a meeting or follow-up), opportunity, won. Use my past events where I gave them and ranged assumptions where I didn't.
- Compute the break-even: how many won expansions at the Calven average amount cover the cost.
- Run a sensitivity: move each funnel rate and the average amount up and down 30% and show which one moves payback most. If you can run code, draw it as a tornado chart and build the model as a spreadsheet with live formulas.
- Say what the event has to achieve that a webinar wouldn't, and whether that's worth the difference in cost.

OUTPUT
A one-page model: the funnel at low, expected and high, the break-even, the tornado chart, and a go, shrink or skip call.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counts and averages computed from deal rows say so. Don't count renewals protected as revenue unless I gave you a number.
```

## Ad hoc questions

- What pains did [persona] name most this quarter?
- Where does [persona] go to learn, according to the canvas?
- Which customers have talked about [topic] with a good outcome?
- Write a webinar title in [persona]'s words about [pain].
- What objections should we prepare for in a session on [topic]?
- Which trend would a [persona] want a session on?
- Draft the follow-up email for attendees of [session].
- Which claims in this run of show are not in the product brief: [paste]?
- Which [persona] contacts at Tier 1 customer accounts should get the invite first?
- Which pain do customers raise most that none of these past session titles covered: [paste titles]?
- Which customers beat [competitor] and told the story in a way that would work on stage?
- Which high-severity trend has no customer quote about it?
- Which [persona] objections would come up in a live Q&A on [topic]?
- What's the one phrase customers use for [pain] that belongs in the title?
- Which watering holes do [persona] and [persona] share, for a joint promotion?
