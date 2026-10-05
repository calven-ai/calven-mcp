# Reference program


Sales wants a reference and you need the right customer: same persona, same segment, ideally the same competitor beaten, with a story the prospect will recognise. You come away with a match, a brief on what the reference will say, and a reference who's asked no more than agreed. Calven matches from the company's own deal and call evidence, so you're not working from memory and burning out the same three customers.

## Prompts

### Build and profile the reference pool

```
Using Calven MCP, build a reference candidate list.

FILL IN
- Window: [time window, e.g. last two years]
- Segment: [segment to focus on, or leave blank for all]

CONTEXT
I am setting up the reference program. I want every customer account with evidence of a strong story, profiled so I can match them to deals later. If a segment is given, focus there.

PULL FROM THE UNIVERSE
- Won deals over the window with the account's industry, size, region, the competitors in play and who we beat.
- The deal drivers that decided each, and the buyer survey summary where one exists.
- Positive customer quotes from each account, especially competitive wins and quantified outcomes, with speaker and role.
- The contacts on each account with their buying role.

BUILD
- One row per account: segment, products, competitor beaten, the story in one line, the best quote, the likely reference contact and their role, evidence strength (survey, calls, both).
- Group by segment and by competitor beaten.

OUTPUT
The profiled list as a table I can load into our reference tracker.

GROUNDING
Use only deals, drivers, quotes and contacts in the Universe and cite them. Willingness to be a reference is not in Calven; leave that column empty.
```

### Match a reference to a live deal

```
Using Calven MCP, find the best reference for the deal below.

FILL IN
- Deal: [deal]
- Account: [account]
- Persona: [persona]
- Competitor: [competitor]
- Concern: [concern]
- Pool: [paste the reference pool as account names]

CONTEXT
Sales needs a reference call for the deal at the account. The prospect's contact is the persona, they are weighing the competitor, and their main concern is the concern above. Our reference pool is the list above.

PULL FROM THE UNIVERSE
- The deal record: segment, size, stage, competitors, contact roles.
- For each account in my pool: its segment, the competitor it chose us over, its deal drivers, and its quotes on the concern.
- The persona's canvas: what this persona asks a peer.

MATCH
- Rank the pool by match on segment, persona of the reference contact, competitor beaten and whether they spoke to the concern.
- For the top three: why they match, the quote that shows it, and the risk (different size, different product, old deal).

OUTPUT
The ranked top three with reasons, then your recommendation.

GROUNDING
Match only on evidence in the Universe and cite it. Do not claim a reference said something about the concern unless a quote shows it.
```

### Brief the reference and the rep

```
Using Calven MCP, write the two briefs for the reference call between the reference account and the prospect account below.

FILL IN
- Reference account: [reference account]
- Reference contact: [reference contact]
- Prospect account: [prospect account]
- Prospect contact: [prospect contact]
- Persona: [prospect contact's persona]
- Competitor: [competitor]

CONTEXT
The reference contact will speak to the prospect contact, who is the persona above and is weighing the competitor.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, objections and what they need to believe.
- The reference account's quotes and deal drivers on those topics.
- The competitor's battlecard: the landmines and where we win, so the rep knows what a peer can say that we cannot.

WRITE
- For the reference: three things the prospect will probably ask, and a reminder of what they told us at the time (verbatim).
- For the rep: what the reference is likely to say, the one topic not to push, and the two questions to suggest the prospect asks.

OUTPUT
Two short briefs, five lines each.

GROUNDING
Use only the Universe and cite it. Do not script the reference; remind them of their own words.
```

### Find new reference candidates

```
Using Calven MCP, find new reference candidates since the date below.

FILL IN
- Date: [date of the last refresh]

CONTEXT
I refresh the reference pool quarterly. Show me won accounts since the date that look like strong references.

PULL FROM THE UNIVERSE
- Won deals closed after the date, with segment and competitor beaten.
- Positive quotes from those accounts, especially competitive wins and quantified outcomes.
- The champion or decision maker contact on each.

BUILD
- A table of candidates with the story in one line, the best quote and the contact.
- Which segments or competitors in the current pool they would strengthen.

OUTPUT
The table and a note on gaps the new candidates do not fill.

GROUNDING
Use only the Universe and cite it. Do not include accounts with no quotes or drivers.
```

## Ad hoc questions

- Which customers in [segment] chose us over [competitor]?
- Who at [account] was the champion, and what did they say about why they bought?
- Do we have a customer in [industry] who talked about [concern] positively?
- Which reference candidates have a quantified outcome in their quotes?
- What does the prospect on [deal] care about, based on their persona?
- Which accounts won in the last six months have a [persona] as a contact?
- What did [reference account] say about implementation time?
- Which of our pool accounts beat the same competitor the [deal] prospect is weighing?
- Which segments have no reference candidate with quotes?
- Give me the three best quotes from [reference account] for a prospect worried about [concern].
