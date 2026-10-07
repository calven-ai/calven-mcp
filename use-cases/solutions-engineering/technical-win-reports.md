# Technical win reports and product feedback


An evaluation just closed, and you heard every technical gap first. You get a one-page closeout per deal (what you proved, what you couldn't, what the buyer said) and a quarterly gap list ranked by the deals and dollars behind each, in the buyer's words, that product can act on. Calven turns feedback to product from anecdote versus anecdote into a record.

## Prompts

### Write the technical closeout for a deal

```
Using Calven MCP, write the technical closeout for the deal and account below.

FILL IN
- Deal: [deal]
- Account: [account]
- Outcome: [won, lost, no decision]
- Results: [paste the criteria, results and notes]

CONTEXT
The evaluation ended with the outcome given. The results hold the POC criteria and results and my notes on what the evaluators said.

PULL FROM THE UNIVERSE
- The deal record: outcome, competitor, loss reason, product feedback tags.
- The win/loss survey summary and drivers for the deal, if one ran.
- Quotes from the deal's calls, especially objections and product feedback.
- Caveats our own team made on those calls.

BUILD
- What we proved, with the criterion and the evidence.
- What we could not, and the buyer's words on it.
- The gap tags for product, each with the quote.
- The one lesson for the next evaluation like this.

OUTPUT
A one-page closeout with sources.

GROUNDING
Quotes verbatim. Outcome and drivers from the record. Do not infer reasons the buyer did not state.
```

### Build the quarterly product gap list

```
Using Calven MCP, build the product gap list for the quarter from technical evaluations.

FILL IN
- Quarter: [quarter]
- Competitor: [competitor]
- Product: [product, or leave blank if you have only one]

CONTEXT
For product management. They want gaps ranked by deals touched and amount at stake, each with the buyer's words, and whether the competitor already fills it. If a product is given, limit the list to it.

PULL FROM THE UNIVERSE
- The product gaps from the insights overview for the quarter, with deals and amount at risk and the note on what the amount covers.
- The product feedback distribution on lost deals and the capability drivers that hurt, with n.
- The verbatims behind the top gaps.
- The competitor's feature comparison for each gap.

BUILD
- A ranked table: gap, deals touched, amount at stake, won versus lost, competitor fills it yes or no, the strongest verbatim.
- The two gaps that also appear on won deals as caveats, since they are churn risks.
- The three to raise first and why.

OUTPUT
The table and a half-page note, with sources.

GROUNDING
Numbers from the dashboards only, with n and window; state that amount at risk covers won and lost deals. Quotes verbatim. Competitor coverage only from the dossier.
```

### Check which gaps have closed

```
Using Calven MCP, which gaps from the list below have closed?

FILL IN
- Quarter: [quarter the list covers]
- List: [paste the list]
- Date: [date of the list]

CONTEXT
The list is the gap list for the quarter.

PULL FROM THE UNIVERSE
- Product changes since the date that touch each gap.
- Drift findings on battlecards, the brief and other sales documents from those changes.

CHECK
- Each gap: shipped, partial, open, per the recorded changes.
- Which sales documents still describe the old state.

OUTPUT
The list annotated, then the documents to update.

GROUNDING
Only recorded changes and findings, cited. No availability claims beyond the record.
```

### Check your feedback note before sending

```
Using Calven MCP, check my product feedback note before I send it.

FILL IN
- Note: [paste the note]

CONTEXT
The note is my roundup for product. Make sure every claim has a deal and a quote behind it.

PULL FROM THE UNIVERSE
- The deal records, drivers and quotes for the deals I name.

CHECK
- Claims with no deal or quote on record.
- Counts that do not match the dashboards.

OUTPUT
The note annotated, then the clean version.

GROUNDING
Only the Universe, cited.
```

## Advanced prompts

### Rank the gaps by cost of delay

```
Rank the product gaps for product management by cost of delay divided by duration, so the fix order follows the money. Use Calven MCP for the deals each gap touched and what buyers said about it.

FILL IN
- Gaps: [paste the gaps you want ranked]
- Build estimates: [engineering's rough duration for each, or "use an assumption"]
- Window: [window]

CONTEXT
Our gap list is ranked by who complained last. Product asks "how much is it worth" and I answer with anecdotes.

FROM CALVEN
- The product gaps section of the win/loss dashboard and the deals behind each gap, with amounts.
- Deal drivers in the Capability category tied to each gap, with outcome and whether they decided the deal.
- Buyer quotes on each gap, and open deals where the same product feedback tag appears.

MODEL
- For each gap, estimate cost of delay per month: lost pipeline from closed deals spread over the window, plus open pipeline at risk weighted by a stated probability.
- Divide by build duration (CD3). Rank.
- Show the ranking's sensitivity: which gaps swap places if the at-risk probability halves or doubles.
- Flag gaps where the money comes from one big deal, so product sees the concentration.

OUTPUT
The ranked table (gap, deals, n, cost of delay, duration, CD3, concentration), the top three in two lines each with a buyer quote, and the sensitivity note.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Amounts come from deal rows; say which were withheld. Don't invent a deal or a buyer quote.
```

### Test whether the gap really loses deals

```
Test whether a product gap really lowers our win rate or just shows up in deals we'd lose anyway. Use Calven MCP for the closed deals and the drivers that mention the gap.

FILL IN
- Gap: [the gap]
- Product feedback tag: [the closest tag]
- Window: [window]

CONTEXT
Product will fund one gap this quarter. I'm about to argue for this one. If the losses would have happened without it, I lose credibility for the next one.

FROM CALVEN
- Closed deals in the window, paged, with product feedback, competitors, account size, industry, ICP fit tier, loss reason and amount.
- Deal drivers that mention the gap: direction, whether they decided the deal, evidence quote.
- The overall win rate from the win/loss dashboard, with n.

METHOD
- Compare win rates for deals with and without the gap tag. If you can run code, use Fisher's exact test and report the p-value.
- Check confounders: is the gap concentrated in a low-fit tier, one competitor or one segment? Compare within each.
- Read the drivers: in how many lost deals did the gap decide the outcome, versus appear alongside a bigger reason?
- Give a verdict: causal enough to fund, plausible but unproven, or a symptom of targeting.

OUTPUT
A half-page verdict with the raw and adjusted gaps, n per cell, the decided-the-deal count, and the sentence I say to product.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Say plainly when a cell has fewer than ten deals. Don't present correlation as cause.
```

## Ad hoc questions

- Which product gaps cost us deals this quarter, and how many?
- What is the amount at stake behind [gap], and does it include won deals?
- What did buyers say about [gap]? Quote them.
- Does [competitor] already offer [capability], per the dossier?
- Which product feedback tag appears most on lost deals in [segment]?
- Did anything ship that closes [gap]?
- Which battlecards went stale after the last release?
- What caveats did our SEs make on won deals this quarter?
- What did the win/loss survey say about product on [deal]?
- Which gap shows up on both won and lost deals, so it's annoying but not deciding?
- Which gap appears most on deals that are still open?
- Did any gap we reported last quarter stop appearing after a release?
- Which competitor wins most often on deals with the [tag] product feedback tag?
- What's the single most expensive lost deal where a capability gap decided it?
- Which gap do our reps caveat on calls before the buyer raises it?
