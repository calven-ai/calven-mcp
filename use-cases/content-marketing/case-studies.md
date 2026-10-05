# Case studies

**Team:** Content marketing · also customer marketing, product marketing, sales
**Impact:** High. A case study is the proof sales sends when a buyer asks "who else like us". One written around the outcome the buyer cares about and the words the customer used closes deals; one written as a feature tour gets skimmed.
**Prerequisites:** strategy documents approved (positioning, messaging, product brief). Better with call transcripts ingested (the customer's own quotes and the pains they named), CRM connected (the deal, the competitors in it, the persona who bought) and win/loss surveys running (why they chose us).
**Related:** [Customer quotes](../customer-marketing/customer-quotes.md) covers sourcing and approving the quotes a case study draws on.

## What the team is trying to do

Turn one customer's result into a story a prospect in the same segment recognises: the problem in the customer's words, what they tried, why they chose us, what changed and the number that proves it. Done means the customer has approved it, sales uses it, and the quote is reused across pages and decks. The hard part is reconstructing the story: the calls that hold the customer's words, the deal that says who else they looked at, and the persona who bought all live in different places.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the customer | Choose an account that matches the segment and persona the team sells to next | ICP fit tier, industry and size of candidate accounts; which won deals had a competitor in play; themes those customers raised | CRM accounts and deals, quotes, ICP |
| 2 | Reconstruct the story | What the customer said before, during and after the sale | Quotes from their calls (pains, buying triggers, competitor mentions, outcomes), the deal context, the win drivers from their survey | Quotes, conversations, deal drivers, surveyed deals |
| 3 | Prepare the interview | Questions for the customer and for the internal team | Questions built from what they already said, so the interview confirms and quantifies instead of starting over | Quotes, persona canvas |
| 4 | Interview | Run the call | Calven does not help here. The recording can be ingested afterwards | |
| 5 | Draft | Challenge, approach, result, quote | Draft in the customer's words, on our positioning, with the capability facts right | Messaging, positioning, product brief, quotes |
| 6 | Fact and claim check | Numbers, capabilities, competitor mentions | Product brief, claims register, battlecard for any competitor named | Product brief, claims, battlecard |
| 7 | Customer approval | Send for sign-off | Calven does not help here | |
| 8 | Publish and reuse | Web page, PDF, slide, quotes for other pages | Which other pages and personas the quotes serve; the quote's category and highlight tags | Quotes, messaging matrix |

## Recommended prompts

### Step 1: choose the customer

```
Using Calven MCP, help me choose the next case study customer.

CONTEXT
We sell to [segment] next quarter and want a story a [persona] there will recognise. Sales has given me a shortlist of willing customers at the bottom.

PULL FROM THE UNIVERSE
- For each account: industry, size, region, ICP fit tier, the deal and whether a competitor was in it.
- The themes and quotes recorded from each account's calls.
- Where available, the win drivers from their win/loss survey.

RANK
- Rank the shortlist by fit with [segment] and [persona], the strength of the recorded outcome, and whether a competitor was displaced.
- For each, the one-line story the evidence already supports.

OUTPUT
A ranked table with the reason and the sources, and the one to approach first.

GROUNDING
Use only account, deal and quote data in the Universe and cite it. Do not invent outcomes. If an account has no recorded quotes, say so.

[paste the shortlist]
```

### Step 2: reconstruct the story

```
Using Calven MCP, reconstruct what [account] told us before, during and after the sale.

CONTEXT
I am preparing a case study with [account]. Before the interview I want everything they already said on record.

PULL FROM THE UNIVERSE
- Every customer quote from [account], with date, speaker role, category and sentiment.
- The deal: stage history, competitors in play, who the champion and decision maker were.
- Their win/loss survey drivers and the deal summary, if a survey went out.
- The persona canvas for the buyer's role.

BUILD
- A timeline: the pain they named, what they had tried, the trigger, the alternatives they weighed, why they chose us, what they said after.
- The quotes worth using, verbatim.
- The gaps: what we do not yet have on record (the number, the before state, the internal champion's view).

OUTPUT
The story so far as a timeline with sources, then the gap list for the interview.

GROUNDING
Use only quotes and records in the Universe and cite each. Do not fill gaps with likely answers; list them.

[name the account]
```

### Step 3: interview guide

```
Using Calven MCP, write the interview guide for the [account] case study.

CONTEXT
Thirty minutes with [contact], [title]. Below is the story so far and the gap list. I want questions that confirm and quantify what they already said, then fill the gaps.

PULL FROM THE UNIVERSE
- The quotes from [account], so questions can quote them back.
- The persona canvas for their role: goals and KPIs, so the result question asks about the metric they are measured on.
- Our positioning proof points, so I know which outcome types we want evidence for.

BUILD
- Twelve questions in order: before, the search, the decision, the change, the number, the advice to a peer.
- For each, the quote or fact it builds on, if any.
- Three questions for our internal account team.

OUTPUT
The guide, ready to use.

GROUNDING
Base questions on recorded quotes and the canvas in the Universe and cite them. Do not put words in the customer's mouth; ask.

[name the account, contact and title, paste the story so far]
```

### Step 5: draft

```
Using Calven MCP, draft the [account] case study.

CONTEXT
Below is the interview transcript or notes and the story so far. Structure: challenge, approach, result, quote. Under 800 words. The reader is [persona] in [segment].

PULL FROM THE UNIVERSE
- Our positioning and the value pillar this story proves.
- The product brief sections for the capabilities the customer used.
- The [persona] canvas, so the result speaks to what the reader is measured on.
- The quotes from [account] on record.

WRITE
- Challenge in the customer's words, two to four sentences.
- Approach: what they did with us and why those choices mattered.
- Result: the number first, then what changed day to day.
- One pull quote, verbatim.
- A headline that states the outcome.

OUTPUT
The draft in markdown, plus a list of every number and capability claim with its source for the customer's approval.

GROUNDING
Use only quotes from the Universe and the pasted interview, and only capabilities in the product brief. Cite each. Do not round a number up or invent a metric the customer did not give.

[paste the interview notes and the story so far; name the persona and segment]
```

### Step 6: fact and claim check

```
Using Calven MCP, check the [account] case study before it goes to the customer.

CONTEXT
Below is the draft. I need every capability, number and competitor mention checked.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- The battlecard for any competitor named.
- The quotes from [account] on record.

CHECK
- Capability claims: in the brief, overstated, or not in the brief.
- Quotes: verbatim against the record, or edited.
- Competitor mentions: supported by the battlecard, or to be removed.
- Numbers: given by the customer, or ours to confirm.

OUTPUT
The draft annotated, then the list for the customer to confirm.

GROUNDING
Judge only against the Universe and the pasted interview, and cite. Mark anything else "to confirm with the customer".

[paste the draft]
```

### Step 8: reuse the evidence

```
Using Calven MCP, tell me where else the [account] case study can work.

CONTEXT
The case study is approved. I want its quotes and outcome placed across our content.

PULL FROM THE UNIVERSE
- The quotes from [account] with their category and highlight tags.
- Our messaging matrix: which persona and stage each pillar serves.
- The competitors in the deal and their battlecards.

BUILD
- For each quote: the pillar it proves, the persona and stage it fits, the page or asset type that needs it.
- The battlecard proof point this story supplies, if a competitor was displaced.
- A two-line version, a slide version and a one-sentence social version of the outcome.

OUTPUT
A placement table and the three short versions.

GROUNDING
Keep every quote verbatim. Map only to pillars and personas in the Universe and cite them.

[name the account]
```

## Ad hoc questions

- Which won accounts in [segment] have quotes on record with a quantified outcome?
- What did [account] say about the problem before they bought?
- Who at [account] was the champion, and who signed?
- Which competitors were in the [account] deal?
- Why did [account] choose us, according to their win/loss survey?
- Give me every quote from [account] tagged Quantified outcome or Time-to-value.
- What is [persona] measured on, so I ask about the right metric?
- Which capability did [account] use, and what does the product brief call it?
- Which of our value pillars has the fewest customer stories behind it?
- Do we have any customer who switched from [competitor]?
- Which quotes on record are approved for marketing use?
- What was the loss reason on deals in [segment] where we lost, so the story pre-empts it?
- Which segments have won deals but no case study candidate with quotes?
- What were the top three drivers in deals we won against [competitor]?
- How would [persona] react to this case study: [paste]

## Good practice

- Reconstruct before you interview. Thirty minutes spent confirming beats thirty minutes starting from zero.
- Ask about the metric the persona is measured on. The canvas names it.
- Keep quotes verbatim through every step and show the customer the exact lines.
- Ask Calven which pillar has the fewest stories. Pick the next customer to fill it.
- Ingest the interview recording into Calven afterwards so the new quotes join the record.
- Put the deal's competitor on the page only when the battlecard and the customer both support it.
- Run the persona review on the draft before it goes to the customer for approval. A story that reads as vendor marketing to the persona the prospect maps to will not be forwarded.

## Not covered today

- Finding willing customers and asking them. That is a sales and customer success conversation.
- The interview itself and the customer's approval.
- Design, layout and publishing.
- Customer reference management and approvals tracking.
- Adding the new quotes to Calven from the AI tool. Ingest the recording in Calven and the voice-of-customer agent extracts them.
