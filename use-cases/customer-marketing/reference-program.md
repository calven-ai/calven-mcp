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

## Advanced prompts

### Model reference demand before the pool burns out

```
Build a capacity model of our reference program so I know which references will burn out next quarter and how many to recruit. Use Calven MCP for the open pipeline that will ask for references and the candidates who could take the load.

FILL IN
- Reference log: [attach a CSV: reference account, contact, dates of calls taken]
- Fatigue rule: [max calls per reference per quarter, e.g. 2]
- Stage where reps ask: [stage]

CONTEXT
Our best references take most of the calls, and when one goes quiet a deal waits. I want to see the queue coming, by segment and competitor, before it piles up.

FROM CALVEN
- Open deals in the CRM with stage, segment, industry, competitor and close date.
- Sales cycle and win rate by segment from the ICP dashboard, with n.
- Won customer accounts with positive quotes or a completed win/loss survey, by segment and competitor beaten, as the candidate pool.

MODEL
- Estimate reference requests per month: open deals that will reach the ask stage in the next 90 days, using close dates and cycle length, by segment and competitor.
- Match demand to supply: my logged references plus candidates, under the fatigue rule. Treat each segment and competitor pair as its own queue.
- If you can run code, simulate 90 days as a queue (arrivals from the pipeline, service by available references) 1,000 times and report the expected wait and the chance a deal waits more than a week.
- Find the pairs where demand beats supply, and the candidates who close each gap.

OUTPUT
A capacity table by segment and competitor: expected requests, available references, utilisation, wait risk. Then the burnout list and the recruit list with the quote that qualifies each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The call log and fatigue rule are mine. Don't assume a candidate has agreed to be a reference; Calven doesn't hold consent.
```

### Backtest whether references win deals

```
Backtest whether reference calls actually lift our win rate, and where. Use Calven MCP for the closed deals and the reasons buyers gave.

FILL IN
- Referenced deals: [attach a CSV: deal name, reference account, date of the reference call]
- Window: [window]

CONTEXT
Sales asks for references on every late deal and the program gets credit for every win. I want to know whether referenced deals win more than comparable ones, and in which segments a reference is worth the customer's time.

FROM CALVEN
- Closed deals in the window from the CRM, won and lost: furthest stage, segment, industry, size, competitor, amount, loss reason.
- Deal drivers on those deals from win/loss responses, especially anything about proof, trust or peers.
- The win rate for the window from the win/loss dashboard, with n, as the sanity check.

BACKTEST
- Join my CSV to the closed deals. Compare only deals that reached the stage where references happen, so early losses don't flatter the result.
- Match each referenced deal to unreferenced deals on segment, size and competitor. Report the win rate difference with a confidence interval.
- Break it down by segment and competitor. Flag any cell with fewer than 10 deals as too thin.
- Read the drivers on referenced wins: did buyers mention the reference or peer proof at all?
- If you can run code, fit a logistic regression with the reference as one input next to segment, size and competitor.

OUTPUT
A one-page readout: the lift with its interval, where references help and where they don't, the buyer evidence, and a rule for when reps should ask.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A win rate computed from deal rows says so. Don't claim causation: reps ask for references on deals they already expect to win, so name that bias.
```

### Rehearse the reference call as the skeptic

```
Rehearse the reference call with the prospect's toughest stakeholder grilling our reference, and show me where the story breaks. Use Calven MCP for what the reference customer said on record and what the prospect's persona worries about.

FILL IN
- Deal: [deal]
- Reference account: [account]
- Skeptic on the prospect side: [persona]

CONTEXT
A reference call that goes off-script costs more than no call. Before I put a customer on the phone, I want to know which questions they can answer from experience and which ones leave them guessing.

FROM CALVEN
- The deal: segment, stage, competitor, product feedback, and the contacts with their roles.
- The reference account's quotes, conversations and win/loss answers: outcomes, the competitor they chose us over, what was hard.
- The skeptic persona's canvas: objections, KPIs, and what they'd be blamed for.

SIMULATE
- Write the ten questions the skeptic asks, sharpest first, built from the canvas and the deal's competitor and feedback.
- Answer each as the reference, using only what they said on record. Where the record is empty, the reference says "I don't know" rather than inventing.
- Score each answer: strong (the record backs it), thin (partly), gap (nothing). Then give the skeptic's verdict after the call.
- For every gap, write the line the rep should brief, or say that this reference is the wrong match for that question.

OUTPUT
The question and answer transcript with scores, the skeptic's verdict in three lines, and a one-page brief for the reference and the rep.

GROUNDING
The reference's answers trace to cited quotes and survey answers; mark anything else as your extrapolation. Don't write a line for a real customer that the brief would then hand them to repeat.
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
- Which won deals had a [persona] who said they almost chose [competitor]?
- Which reference candidates have no quote from the last 12 months?
- Which open deals in [segment] face a competitor no customer account has beaten?
- What did buyers on lost deals say about proof or customer evidence?
- Which industries have open pipeline but only one possible reference account?
- Which customer account has a tech stack closest to the prospect on [deal]?
