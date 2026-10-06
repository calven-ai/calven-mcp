# Case studies

**Related:** [Customer quotes](../customer-marketing/customer-quotes.md) covers sourcing and approving the quotes a case study draws on.

You're turning one customer's result into a story a prospect in the same segment recognises: the problem in their words, what they tried, why they chose us, what changed and the number that proves it. You walk away with a case study the customer approves, sales uses, and whose quote gets reused across pages and decks. Calven pulls the story back together from the calls, the deal that shows who else they looked at, and the persona who bought, which otherwise live in different places.

## Prompts

### Choose the next case study customer

```
Using Calven MCP, help me choose the next case study customer.

FILL IN
- Segment: [segment]
- Persona: [persona]
- Shortlist: [paste the shortlist]

CONTEXT
We sell to the segment next quarter and want a story the persona there will recognise. Sales has given me the shortlist of willing customers.

PULL FROM THE UNIVERSE
- For each account: industry, size, region, ICP fit tier, the deal and whether a competitor was in it.
- The themes and quotes recorded from each account's calls.
- Where available, the win drivers from their win/loss survey.

RANK
- Rank the shortlist by fit with the segment and the persona, the strength of the recorded outcome, and whether a competitor was displaced.
- For each, the one-line story the evidence already supports.

OUTPUT
A ranked table with the reason and the sources, and the one to approach first.

GROUNDING
Use only account, deal and quote data in the Universe and cite it. Do not invent outcomes. If an account has no recorded quotes, say so.
```

### Reconstruct the customer's story

```
Using Calven MCP, reconstruct what the account below told us before, during and after the sale.

FILL IN
- Account: [account]

CONTEXT
I am preparing a case study with the account. Before the interview I want everything they already said on record.

PULL FROM THE UNIVERSE
- Every customer quote from the account, with date, speaker role, category and sentiment.
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
```

### Write the interview guide

```
Using Calven MCP, write the interview guide for the case study with the account below.

FILL IN
- Account: [account]
- Contact: [contact]
- Title: [contact's title]
- Story so far: [paste the story so far and the gap list]

CONTEXT
Thirty minutes with the contact. I want questions that confirm and quantify what they already said, then fill the gaps.

PULL FROM THE UNIVERSE
- The quotes from the account, so questions can quote them back.
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
```

### Draft the case study

```
Using Calven MCP, draft the case study for the account below.

FILL IN
- Account: [account]
- Persona: [persona]
- Segment: [segment]
- Interview: [paste the interview transcript or notes and the story so far]

CONTEXT
Structure: challenge, approach, result, quote. Under 800 words. The reader is the persona in the segment.

PULL FROM THE UNIVERSE
- Our positioning and the value pillar this story proves.
- The product brief sections for the capabilities the customer used.
- The persona's canvas, so the result speaks to what the reader is measured on.
- The quotes from the account on record.

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
```

### Check the claims before customer review

```
Using Calven MCP, check the case study for the account below before it goes to the customer.

FILL IN
- Account: [account]
- Draft: [paste the draft]

CONTEXT
I need every capability, number and competitor mention checked.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- The battlecard for any competitor named.
- The quotes from the account on record.

CHECK
- Capability claims: in the brief, overstated, or not in the brief.
- Quotes: verbatim against the record, or edited.
- Competitor mentions: supported by the battlecard, or to be removed.
- Numbers: given by the customer, or ours to confirm.

OUTPUT
The draft annotated, then the list for the customer to confirm.

GROUNDING
Judge only against the Universe and the pasted interview, and cite. Mark anything else "to confirm with the customer".
```

### Find more places to reuse it

```
Using Calven MCP, tell me where else the case study for the account below can work.

FILL IN
- Account: [account]

CONTEXT
The case study is approved. I want its quotes and outcome placed across our content.

PULL FROM THE UNIVERSE
- The quotes from the account with their category and highlight tags.
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
```

## Advanced prompts

### Pick the stories that cover the pipeline

```
Choose the next three case studies as a portfolio that covers the most open pipeline, not as three favourite customers. Use Calven MCP for the open deals, the won accounts with usable quotes and who they competed against.

FILL IN
- Candidates: [paste the customers who might agree, or write "find them"]
- Existing case studies: [list what we already have, with segment and competitor]

CONTEXT
Sales asks for "a customer like us" in every late-stage deal. Three good stories can cover most of the pipeline if they're picked to fit it, or almost none of it if they all look alike.

FROM CALVEN
- Open CRM deals with segment, industry, size, competitors and amount.
- Won accounts with quotes on record tagged Quantified outcome, Time-to-value or Competitive win, with the persona and competitor on each deal.
- Deal drivers from those wins.

MODEL
- Describe each open deal by segment, size, industry, main competitor and lead persona.
- Describe each candidate the same way, plus the strength of its proof (quantified quote, competitor displaced, named persona).
- A story "covers" a deal when it matches on at least three of the five attributes. Say if you'd weight them differently.
- Solve the coverage problem: pick the three candidates that together cover the most open pipeline, counting existing case studies as already covering their deals. If you can run code, solve it exactly; otherwise use a greedy pick and show each step.
- Compare with the obvious choice (the three biggest logos) and show the difference in pipeline covered.

OUTPUT
The recommended three with pipeline covered, the deals each one serves, what proof each brings, and the pipeline still uncovered with the profile of the customer that would cover it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Only count proof that's on record; a candidate with no quotes gets marked "needs interview".
```

### Rehearse the interview with the customer

```
Rehearse the case study interview before it happens: the AI plays the customer, I ask, and it coaches me on the follow-ups that turn vague praise into a number. Use Calven MCP for what this customer already said and what their role is measured on.

FILL IN
- Account: [account]
- Interviewee role: [persona or title]
- Interview guide: [paste the questions, or write "draft them"]

CONTEXT
Customers say "it saves us time" and the interview ends without a number. I get one shot with them, so I want to practise getting from the feeling to the figure.

FROM CALVEN
- Quotes on record from the account, with category, highlight and date.
- The deal: competitors, deal drivers, survey responses and summary.
- The persona canvas for the interviewee's role: goals and KPIs.

SIMULATE
- Play the interviewee realistically: friendly, busy, speaks in generalities first, knows the numbers only roughly, cautious about anything their legal team would mind.
- I ask from the guide. After each answer, step out and coach in one line: the laddering follow-up that gets to the metric (what did that let you do, how did you measure it, compared with what, over what period).
- Ground the character in what they've said on record and the KPIs their role cares about. Don't give me numbers they haven't said; make me earn the specifics a real interview would.
- After 12 exchanges, score the session: specifics gained, quotes usable, missed openings.

OUTPUT
The transcript with coaching notes, the score, the five follow-up questions that worked best, and the guide revised with them.

GROUNDING
The character draws only on the account's quotes, deal record and persona canvas, cited. Any number in the rehearsal is a placeholder for practice, labelled, never to be used in the case study.
```

### Sanity-check every number before it ships

```
Sanity-check every number in the case study the way a sceptical analyst would: trace it, estimate it independently and flag the ones that don't add up. Use Calven MCP for the customer's own words, their account details and what the product does.

FILL IN
- Draft: [paste the case study draft]
- Account: [account]

CONTEXT
One implausible number makes the whole case study look invented. Buyers do the maths in their head, and so does the customer's finance team when they approve it.

FROM CALVEN
- Every quote on record from the account, especially tagged Quantified outcome or Time-to-value.
- The account from the CRM: employee band, revenue band, industry, size, and the deal's amount and dates.
- The product brief entries for the capabilities the draft credits.

METHOD
- List every number and every comparative claim in the draft ("3x faster", "saved 20 hours a week", "in two weeks").
- Trace each to a quote. Mark: verbatim, rounded, derived, or untraced.
- Fermi-check each against the account: does 20 hours a week fit a team of their size? Does the time-to-value fit the deal dates? Show your rough estimate and its range.
- Check each capability credit against the product brief.
- Rate each number: solid, needs the customer to confirm, or remove.

OUTPUT
A table: number, source, Fermi range, rating, fix. Then the draft with changes marked and a short list of questions for the customer's approval call.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Never strengthen a number; when the quote and the draft disagree, the quote wins.
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
- Which won deal had the shortest time from first call to close, and is there a quote about why?
- Which customer quote on record contradicts a claim we make in an existing case study?
- What did [account] worry about before buying that the case study should admit?
- Which persona appears in our won deals but in none of our case studies?
- Which won accounts displaced [competitor] and have a survey response explaining why?
