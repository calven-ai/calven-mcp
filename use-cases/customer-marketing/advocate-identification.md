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

## Advanced prompts

### Build an advocate score and test it

```
Build a scoring model that predicts who will say yes to an advocacy ask, and test it against the people who already did. Use Calven MCP for the evidence on every customer contact.

FILL IN
- Past advocates: [attach a CSV: contact, account, what they agreed to, plus the people who declined]
- Asks you run: [quote, review, reference, case study, speaker]

CONTEXT
We ask whoever the CSM suggests. I want a score that ranks every customer contact by how likely they are to say yes and how valuable their story is, built from what they said rather than who we know.

FROM CALVEN
- Every customer contact: role, account, ICP tier and industry.
- Their quotes: count, sentiment, highlight (quantified outcome, competitive win, time to value) and latest date.
- Win/loss survey responses and deal drivers from their deals, especially positive drivers about us.

BUILD
- Propose five to eight features from the Calven evidence: positive quote count, recency, a quantified outcome, a competitor they beat, champion or exec sponsor role, a completed win/loss survey.
- Fit weights on my past advocates versus decliners. If you can run code, fit a logistic regression and report how well it separates the two (AUC with an interval); if not, set weights by hand and show the confusion table.
- Score every customer contact, split into likelihood and story value.
- Build it as a spreadsheet with the weights in visible cells and live formulas, so I can change a weight and watch the ranking move.

OUTPUT
The spreadsheet, the backtest result in three lines, and the top 20 contacts with their best quote and the ask that fits.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. With fewer than 20 past advocates, call the weights a starting guess. Don't score anyone on data Calven doesn't hold, like NPS or usage.
```

### Plot the pool on story and relevance

```
Plot our advocate candidates on a two-by-two of story strength and buyer relevance, and tell me where the pool is lopsided. Use Calven MCP for what each candidate said and which live deals their story would help.

FILL IN
- Segment focus: [segment]
- Competitor focus: [competitor]

CONTEXT
We have plenty of happy customers and too few stories that help a live deal. A glowing quote from a segment we don't sell into is worth less than a modest one from an account that looks like this quarter's pipeline.

FROM CALVEN
- Customer contacts with positive quotes: role, account, segment, industry, highlight, and any competitor they mentioned.
- Open deals by segment, industry and competitor, as the demand side.
- Our ICP tiers and priority verticals.

METHOD
- Score story strength 1 to 5 from the evidence: a quantified outcome, a competitive win, a named before and after, recency.
- Score buyer relevance 1 to 5: how many open deals share the candidate's segment, industry, competitor and role, and whether the industry is a priority vertical.
- Plot every candidate and name the quadrants: ask first, coach the story, keep warm, low priority.
- Check the balance: which segments and competitors in the open pipeline have nobody in the ask-first box.
- If you can run code, draw the chart with every dot labelled.

OUTPUT
The chart, a table of the ask-first candidates with their best quote and the deals they'd help, and the three gaps with the kind of customer to go and find.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Scores are your judgement on cited evidence, so show the evidence. Don't assume a contact is willing.
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
- Which contacts mentioned a quantified outcome and a competitor in the same conversation?
- Which champions on won deals have no quote in the last six months?
- Which of our priority verticals have no customer with a positive quote?
- Where is an end user more enthusiastic on calls than their own exec sponsor?
- Who said something critical a year ago and something positive since?
- Which win/loss respondents praised us but never appear on a recorded call?
- Which positive quotes come from accounts with an open expansion deal?
