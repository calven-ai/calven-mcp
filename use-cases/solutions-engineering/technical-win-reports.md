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
