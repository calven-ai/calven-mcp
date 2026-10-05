# Technical win reports and product feedback

**Team:** Solutions engineering · also product management, product marketing, sales leadership
**Impact:** Medium. The SE hears every technical gap first and reports it last, in a monthly roundup written from memory.
**Prerequisites:** win/loss surveys running, CRM connected (pipeline category on for MCP), call transcripts ingested. Better with product brief approved, competitors tracked.

## What the team is trying to do

Close each technical evaluation with a short report (what we proved, what we could not, what the buyer said) and turn the quarter's evaluations into a ranked list of product gaps with the deals and dollars behind each, in the buyer's words, for product management. Done means a one-page closeout per deal and a quarterly gap list product can act on. Without the company's own record, feedback to product is anecdote versus anecdote.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Close out the deal | What was proved, what was not, the buyer's verdict | The deal record and its survey summary and drivers; quotes from the evaluation calls; vendor quotes with caveats made | CRM deals, surveyed deals, deal drivers, quotes, vendor quotes |
| 2 | Tag the gaps | Which requirement failed and why | Product feedback tags on the deal; capability drivers that hurt | CRM deals, deal drivers |
| 3 | Aggregate the quarter | Gaps ranked by deals touched and amount at risk | Product gaps on the insights overview; product feedback distribution on lost deals; drivers grouped by capability | Insights overview (product gaps), win/loss surveys (product), deal drivers |
| 4 | Compare with the competitor | Which gaps the rival already fills | Feature comparison and signals | Deep dive, competitive signals |
| 5 | Quote the buyers | The verbatim behind each gap | Quotes and survey verbatims | Quotes, win/loss verbatims |
| 6 | Write for product | The roundup | A drafted gap list with evidence per row | All |
| 7 | Track what shipped | Whether a gap closed | Product changes since the gap was raised; drift findings on sales documents | Product changes, product drift findings |

## Recommended prompts

### Step 1 and 2: the closeout per deal

```
Using Calven MCP, write the technical closeout for [deal] at [account].

CONTEXT
The evaluation ended [won, lost, no decision]. Below are the POC criteria and results and my notes on what the evaluators said.

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

[paste the criteria, results and notes; name the deal and account]
```

### Step 3 to 6: the quarterly gap list for product

```
Using Calven MCP, build the product gap list for [quarter] from technical evaluations.

CONTEXT
For product management. They want gaps ranked by deals touched and amount at stake, each with the buyer's words, and whether [competitor] already fills it.

PULL FROM THE UNIVERSE
- The product gaps from the insights overview for [quarter], with deals and amount at risk and the note on what the amount covers.
- The product feedback distribution on lost deals and the capability drivers that hurt, with n.
- The verbatims behind the top gaps.
- The [competitor] feature comparison for each gap.

BUILD
- A ranked table: gap, deals touched, amount at stake, won versus lost, competitor fills it yes or no, the strongest verbatim.
- The two gaps that also appear on won deals as caveats, since they are churn risks.
- The three to raise first and why.

OUTPUT
The table and a half-page note, with sources.

GROUNDING
Numbers from the dashboards only, with n and window; state that amount at risk covers won and lost deals. Quotes verbatim. Competitor coverage only from the dossier.

[name the quarter, the competitor and the product if you have several]
```

### Step 7: did it ship, and did sales notice

```
Using Calven MCP, which gaps from [quarter]'s list have closed?

CONTEXT
Below is last quarter's gap list.

PULL FROM THE UNIVERSE
- Product changes since [date] that touch each gap.
- Drift findings on battlecards, the brief and other sales documents from those changes.

CHECK
- Each gap: shipped, partial, open, per the recorded changes.
- Which sales documents still describe the old state.

OUTPUT
The list annotated, then the documents to update.

GROUNDING
Only recorded changes and findings, cited. No availability claims beyond the record.

[paste the list and name the date]
```

### Review mode: check my feedback note

```
Using Calven MCP, check my product feedback note before I send it.

CONTEXT
Below is my roundup for product. Make sure every claim has a deal and a quote behind it.

PULL FROM THE UNIVERSE
- The deal records, drivers and quotes for the deals I name.

CHECK
- Claims with no deal or quote on record.
- Counts that do not match the dashboards.

OUTPUT
The note annotated, then the clean version.

GROUNDING
Only the Universe, cited.

[paste the note]
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

## Good practice

- Close out every evaluation, including wins. The caveats on won deals are next year's churn.
- Rank by deals and amount, then quote the buyer. Product acts on evidence, not volume of complaint.
- Say what the amount covers. The dashboard's amount at risk includes won deals.
- Rerun the "did it ship" check before each roundup. Half the list may be closed.

## Not covered today

- Filing feedback into the product tool. Calven reads the record; the SE posts the note.
- Usage data, support tickets and feature requests from existing customers. Those are product's own sources; the win/loss and call evidence is the SE's contribution.
- Future plans and timing. The AI tool reports recorded changes and nothing about what is coming.
