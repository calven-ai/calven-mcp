# Advocate identification


You need customers who'll say yes to a review, a quote, a reference or a talk. You come away with a shortlist by account and contact, the evidence for each, and the ask that fits: a review for the enthusiastic user, a reference for the senior buyer who beat a competitor. Calven reads the company's own call evidence, so the list is more than whoever answered the last NPS survey.

## Prompts

### Find customers who sound like advocates

```
Using Calven MCP, find customers who sound like advocates.

FILL IN
- Window: [time window, e.g. last two quarters]
- Segment: [segment focus, or leave blank for all]

CONTEXT
I am recruiting for the advocacy program. I want contacts who have said something positive and specific, at accounts in good shape. If a segment focus is given, start there.

PULL FROM THE UNIVERSE
- Positive customer quotes over the window, especially those tagged quantified outcome, competitive win, time to value or ease of use, with speaker, role, account and date.
- Buyer survey responses and deal drivers that praised the product, the team or the outcome.
- For each account: ICP tier, segment and any open expansion deal.

BUILD
- A table: contact, role, account, segment, the strongest quote, the signal type, how many positive quotes they have.
- Group by the ask that fits: review, quote, reference, speaker, advisory board.

OUTPUT
The table, grouped, with the top ten highlighted.

GROUNDING
Use only quotes, responses and CRM data in the Universe and cite them. Health, NPS and usage are not in Calven; say so.
```

### Match each contact to the right ask

```
Using Calven MCP, tell me which advocacy ask fits each of these contacts.

FILL IN
- Candidates: [paste the candidates]

CONTEXT
The candidates are from the scan. For each I want the ask that matches their role and what they said.

PULL FROM THE UNIVERSE
- Each contact's title, buying role and persona.
- Their quotes, with category and highlight.

BUILD
- For each: the ask (review, quote, reference, speaker, advisory board, beta), the reason, and the line from their own words to open the request with.

OUTPUT
A table.

GROUNDING
Use only the Universe and cite it. Do not assume seniority from the account.
```

### Find where your advocate pool is thin

```
Using Calven MCP, show me where our advocate pool is thin.

FILL IN
- Advocates: [paste the current advocate list]
- Window: [time window, e.g. last year]

CONTEXT
I want to know which segments, personas and competitors our current advocates do not cover, and where evidence suggests candidates.

PULL FROM THE UNIVERSE
- The ICP segment tiers and priority verticals.
- Won deals by segment and competitor beaten over the window.
- Positive quotes by account in the segments with no advocate.

BUILD
- A coverage table: segment, persona, competitor beaten, advocates we have, candidates with evidence.

OUTPUT
The table and the three gaps to fill first.

GROUNDING
Use only the Universe and cite it. Do not invent candidates.
```

## Ad hoc questions

- Which customers said something positive about us in the last 90 days?
- Who has talked about beating [competitor] on a call?
- Which contacts have the most positive quotes?
- Which accounts in Tier 1 have no quotes at all?
- What did [contact] say that we could use in a review request?
- Which buyers praised our sales process in the win/loss survey?
- Which customers mentioned a quantified outcome?
- Who at [account] is the end user versus the decision maker?
