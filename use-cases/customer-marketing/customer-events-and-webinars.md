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
