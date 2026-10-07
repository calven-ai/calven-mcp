# QBR and EBR prep


You've got a QBR with the day-to-day owner or an EBR with the sponsor, and a deck of usage charts and a roadmap is how the sponsor stops coming. You get an outline that recaps the goals, shows the value, names the risks and agrees the next quarter, with evidence per slide, speaker notes and the questions to ask. Calven brings what the customer said this quarter, in their words.

## Prompts

### Outline the QBR deck

```
Using Calven MCP, build the QBR outline for the account below for the quarter below.

FILL IN
- Account: [account]
- Quarter: [quarter]
- Attendee: [contact, title]
- Numbers: [paste usage and outcome numbers]

CONTEXT
The audience is the attendee, the day-to-day owner. 30 minutes, 10 slides. Usage and outcome numbers are the ones given above; everything else should come from the Universe.

PULL FROM THE UNIVERSE
- The outcomes the account said they wanted, from the sales calls and survey, verbatim.
- Positive and negative quotes from the account this quarter, by category.
- Product changes this quarter, mapped to the use cases the account bought.
- Product brief use cases and cross-sell paths they are not using yet.
- The contacts on the account and the personas missing.

BUILD
- Slide by slide: goals recap (their words), what we delivered (my numbers plus their quotes), what changed in the product (for them), what you told us this quarter (feedback and asks), risks and how we address them, next quarter plan, stakeholders to involve, actions and owners.
- Speaker notes per slide with the source.
- Three questions to ask them.

OUTPUT
The outline with notes.

GROUNDING
Use only the Universe for everything except the numbers I gave, and cite it. Do not claim outcomes the customer did not state.
```

### Prepare the EBR for the sponsor

```
Using Calven MCP, prepare the executive business review for the account below.

FILL IN
- Account: [account]
- Sponsor: [sponsor, title]
- Persona: [sponsor's persona]
- Segment: [segment]
- Numbers: [paste the numbers]

CONTEXT
The audience is the sponsor, the executive sponsor. 45 minutes, twice a year. They want business impact and direction, not features.

PULL FROM THE UNIVERSE
- The persona's canvas for the sponsor: company objectives, KPIs, pains.
- The outcomes the account bought for and what their team said this year, verbatim.
- Approved market trends and opportunities with a so-what for the segment.
- Our positioning and the proof points, for the direction slide.
- The expansion paths in the product brief.

BUILD
- Five sections: where you started (their words), what changed for your business (my numbers plus their quotes), what is moving in your market (trends), where we are going (positioning and relevant changes), what we propose next (expansion, stakeholders, a joint goal).
- The sponsor's likely objection to each proposal, from the canvas, and the answer.

OUTPUT
The outline with notes and the three decisions to ask for.

GROUNDING
Use only the Universe and the numbers I gave, cited. Do not present a trend as current if its last-seen date is old.
```

### Summarise what they said this quarter

```
Using Calven MCP, summarise what the account below said this quarter.

FILL IN
- Account: [account]
- Date: [start date, e.g. the first day of the quarter]

CONTEXT
I want the feedback, asks and comparisons from every call with the account since the date, for the QBR.

PULL FROM THE UNIVERSE
- Customer quotes from the account since the date, by category and sentiment, with speaker and date.
- Competitor mentions from those calls.
- Conversations with the account since the date.

BUILD
- Positive, negative, asks, competitor mentions. Each with the quote and who said it.
- The one thing to address before the QBR.

OUTPUT
A short summary.

GROUNDING
Use only quotes and conversations in the Universe, verbatim and cited. If no calls were ingested, say so.
```

### Review your QBR deck

```
Using Calven MCP, review my QBR deck for the account below.

FILL IN
- Deck: [paste the deck text]
- Account: [account]
- Persona: [attendee's persona]

CONTEXT
I want to know whether the deck reflects what the customer said, whether product claims are right, and what the sponsor persona would push on.

PULL FROM THE UNIVERSE
- Quotes and survey answers from the account.
- The product brief and product changes.
- The persona canvas for the attendee.

CHECK
- Each goal and value statement: supported by what they said?
- Each product claim: in the brief?
- Each slide: what the persona would ask, and whether the deck answers it.

OUTPUT
The deck annotated, then the three edits.

GROUNDING
Use only the Universe and cite it.
```

## Advanced prompts

### Estimate their year without us

```
Estimate what this customer's year would have looked like without our product, so the value slide survives a skeptical sponsor. Use Calven MCP for the baseline they described when they bought and what similar customers said changed.

FILL IN
- Account: [account]
- Their numbers: [paste before and after metrics you have: volumes, hours, cycle times, error rates, with dates]
- Other changes this year: [anything else that moved: headcount, a reorg, a new tool]

CONTEXT
"Since you started with us, X went up 30%" convinces nobody who knows they also hired five people. I want a counterfactual estimate with an honest range.

FROM CALVEN
- The pains and baseline the buyers described during the sale, quoted with dates.
- Quotes from customers in their segment tagged Quantified outcome or Time-to-value.
- The product brief's use cases that map to their outcome.

MODEL
- Build the counterfactual from their pre-purchase trend: what the metric would have done on its own.
- Strip out the other changes I listed with a stated assumption for each. If you can run code, fit the pre-period trend and show the gap with a confidence band.
- Give a low, central and high value estimate, and say which assumption drives the range.
- Cross-check against what peers said they achieved. If ours is far above peers, say so.

OUTPUT
One value slide: the counterfactual chart described in words, the central estimate with range, the three assumptions in plain language, and a footnote the sponsor's finance partner would accept.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Peer outcomes are quotes, not benchmarks; don't present them as averages. Don't invent a baseline the buyer never stated.
```

### Rank the QBR asks by expected value

```
Decide which asks to make at the business review, and in which order, by expected value. Use Calven MCP for what the account has asked for, who's in the room and how buyers like them respond.

FILL IN
- Account: [account]
- Candidate asks: [paste the asks: expansion, a reference, a case study, an exec intro, a renewal term change]
- Values: [your rough value for each, in ARR or your own points]

CONTEXT
I get one QBR a quarter and maybe two asks before the sponsor's patience runs out. Asking for the wrong thing first spends goodwill I need for renewal.

FROM CALVEN
- The account's quotes over the year by sentiment and category, and any asks for capabilities.
- The contacts by buying role, and the sponsor persona's goals and objections.
- Win rate and size for expansion deals in their segment from the win/loss and ICP dashboards, with n.

MODEL
- Build a decision tree per ask: probability of yes, value if yes, cost to goodwill if no.
- Estimate each probability from the evidence: positive quotes, the sponsor's stated goals, the base rate. Show the reasoning, not just the number.
- Model order effects: a yes on a small ask (a reference) can raise or lower the odds of a big one (an expansion). Say which way and why.
- Run a sensitivity table on the two least certain probabilities.

OUTPUT
The ranked asks with expected value, the recommended order for the meeting, and the opening line for the first ask in the sponsor's language.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Probabilities are your estimates and must say what evidence moved them. Don't invent an ask the account never made.
```

### Stress-test the EBR as their CFO

```
Stress-test my executive business review as the customer's CFO, who's looking for a vendor to cut. Use Calven MCP for what the sponsor said they bought us for and what the market around them is doing.

FILL IN
- Account: [account]
- EBR deck: [paste the slide text or outline]
- Our cost to them: [annual contract value]

CONTEXT
The sponsor likes us. The CFO doesn't know us. In a budget review, the CFO reads the EBR as evidence for or against the line item.

FROM CALVEN
- Why the account bought: deal drivers, survey answers and buyer quotes tagged Goal and Pain.
- The economic buyer persona's KPIs and objections.
- Market trends and the competitor alternatives in positioning, as the CFO might hear about them.

RED-TEAM
- Play the CFO reading each slide. For every claim, ask: how was this measured, compared with what, and what would it cost to replace?
- Mark each slide survives, wounded or dead. Quote the CFO's question that wounds it.
- Name the cheaper alternative the CFO would float and how the deck answers it, or doesn't.
- Rewrite the two weakest slides so they answer the CFO first and the sponsor second.

OUTPUT
A slide-by-slide verdict table, the CFO's three hardest questions with the answer from the record, and the two rewritten slides.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent value the customer never stated, and don't invent a competitor price the dossier doesn't hold.
```

## Ad hoc questions

- What did [account] say they wanted from us when they bought?
- What has [account] said on calls this quarter?
- What product changes this quarter affect [account]'s use cases?
- Which product use cases is [account] not using that fit their outcomes?
- Has anyone at [account] mentioned a competitor this year?
- What is [sponsor persona] measured on?
- Which personas are missing from the [account] contact list?
- What market trend should I show [account] in [segment]?
- What objection would [persona] raise to an expansion proposal?
- Write the goals-recap slide for [account] in their own words.
- What did [account] say this year that I could quote back on the value slide?
- Which of [account]'s stated goals from the sale has nobody mentioned since?
- What do economic buyers in [segment] say when they cut a vendor?
- Which product changes this quarter would [persona] care about, and which are noise to them?
- What's the most positive thing anyone at [account] said, and who said it?
