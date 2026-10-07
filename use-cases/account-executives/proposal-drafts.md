# Proposal drafts


You need a proposal narrative that's more than last quarter's template with the logo swapped. You get a draft the SE and your manager edit rather than rewrite: the buyer's problem as they stated it, our approach, why us over the alternatives they're weighing, the proof, the packaging and the plan. Calven adds the company's approved story, with every product and pricing statement traceable to the brief.

## Prompts

### Draft the proposal narrative

```
Using Calven MCP, draft the proposal narrative for the deal below.

FILL IN
- Deal: [deal]
- Account: [account]
- Segment: [segment]
- Competitor: [competitor]
- Champion persona: [champion's persona]
- Economic buyer persona: [economic buyer's persona]
- Problem: [the problem they stated]
- Metric: [the metric they gave]
- Shown: [what we showed]

CONTEXT
The account, a company in the segment, is choosing between us and the competitor. The champion and economic buyer personas, the problem, the metric and what we showed are above.

PULL FROM THE UNIVERSE
- The champion persona's pains and the words customers use for them.
- The product brief: overview, the capabilities and integrations relevant to what we showed, pricing and packaging.
- Our positioning: unique attributes, value themes, competitive alternatives, proof points.
- The competitor's battlecard: where we win, honestly where we lose.
- Two proof quotes from similar accounts, verbatim.

WRITE
- The problem, in their words, with their metric.
- Our approach, in plain terms.
- Why us against the competitor, with the trade-off stated.
- The proof.
- The packaging we propose and what it includes.

OUTPUT
The narrative sections, ready for the SE to add the implementation plan, with a source line per section.

GROUNDING
Every product and pricing statement from the brief, cited. Positioning claims from the positioning document. Quotes verbatim. Do not invent timelines, outcomes or features.
```

### Fact-check every claim in the proposal

```
Using Calven MCP, fact-check this proposal.

FILL IN
- Proposal: [paste the full proposal]

CONTEXT
I need every product, integration, pricing and proof claim in the proposal checked.

PULL FROM THE UNIVERSE
- The product brief, recent product changes and drift findings, and the claims register.
- The positioning proof points and the quotes.

CHECK
- Mark each claim correct, stale, wrong, or not in the brief.
- Mark each proof as verbatim and attributed, or not.

OUTPUT
The proposal annotated, then the list a human must still confirm.

GROUNDING
Against the Universe only, cited. Silence in the brief is "not in the brief", never a pass.
```

### Read the proposal as the economic buyer

```
Using Calven MCP, read this proposal as the economic buyer persona below.

FILL IN
- Persona: [economic buyer persona]
- Proposal: [paste the proposal]

CONTEXT
The person who signs is the persona above and was not on the calls.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.

REACT
- What they would skip, what they would doubt, what they would need to see.
- The question they would ask the champion.

OUTPUT
Findings with severity, then the three edits.

GROUNDING
React only from the canvas. Do not invent reactions it does not support.
```

## Advanced prompts

### Red-team the proposal as their procurement lead

```
Red-team my proposal as the buyer's procurement lead: find every line they'll strike, question or use as leverage. Use Calven MCP for what we can actually back and how procurement thinks.

FILL IN
- Proposal: [paste the proposal]
- Competitor: [the competitor they're also evaluating]
- Segment: [segment]

CONTEXT
The champion will love this proposal. Procurement will read it next, and they're paid to find the soft spots. I want them found by me first.

FROM CALVEN
- The procurement or finance persona canvas: KPIs, objections, what counts as proof.
- The product brief: capabilities, integrations, pricing and packaging, known weaknesses.
- Claims rows for anything the proposal asserts, with proof status.
- The competitor's battlecard: their talk track against us and their pricing frame.

RED-TEAM
- Read as procurement. Mark every claim with no proof, every promise not in the brief, every vague deliverable and every number with no source.
- Find three lines they'll use to justify a discount or a competing bid.
- Write the five questions they'll send back, in their tone.
- Score the proposal's exposure: high, medium, low per section.

OUTPUT
The proposal annotated with the red-team marks, the five questions, an exposure score per section, and a hardened version with each fix marked.

GROUNDING
Label every flag as from the Universe (cited) or your judgement as procurement. Don't flag a claim the brief supports, and don't add a capability it doesn't list.
```

### Build the value model behind the proposal

```
Build a value model the champion can put in front of finance: a live spreadsheet with ranges, not a single heroic number. Use Calven MCP for the outcomes real customers reported and our pricing.

FILL IN
- Their inputs: [paste team size, hours on the work, current tools and spend, the metric they care about]
- Our price: [annual price in the proposal]
- Segment: [segment]

CONTEXT
The proposal says we save time and win more. Finance wants a number they can change. A model they can edit beats a claim they have to trust.

FROM CALVEN
- Customer quotes tagged Quantified outcome or Time-to-value from the segment, verbatim, with the account.
- Pricing and packaging from the product brief.
- The value themes and proof points from positioning.
- Win rate and average deal size for the segment, with n, if the value case includes revenue.

BUILD
- Three to five value drivers, each with a formula. Each input has low, expected and high values and a source column: theirs, Calven or assumption.
- Costs: price, implementation time and the team's hours to adopt.
- Outputs: annual value, net value, payback months, at each scenario.
- A sensitivity tab showing which input moves payback most.
- If you can run code, produce the file with live formulas. Otherwise give a table I can paste.

OUTPUT
The spreadsheet (or its table), a one-paragraph summary for the proposal citing the conservative scenario, and the inputs the champion must confirm.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't turn one customer's outcome into a typical result; show it as a range point.
```

### Test good-better-best options on the personas

```
Frame my proposal as three options and test which one the buying group picks, and whether a decoy moves them up. Use Calven MCP for the packaging, the personas and how buyers reacted to price before.

FILL IN
- Deal: [deal]
- Current offer: [the plan and price you'd propose today]
- Budget signal: [what the champion said about budget]

CONTEXT
A single price invites a yes or no. Three options invite a which. I want options built from our real packaging and tested on the people who'll choose.

FROM CALVEN
- Pricing and packaging from the product brief: plans, limits, add-ons.
- The persona canvases for the champion, economic buyer and finance roles.
- Pricing quotes and price feedback from deals in the segment, with n.
- A persona review of the three options as written.

METHOD
- Design good, better and best from the brief's real plans. Make "better" the target.
- Add a decoy: a fourth option close to "best" but clearly worse value. Run the test with and without it.
- Have each persona pick an option and explain why, in their voice, informed by the review.
- Compare choice share with and without the decoy. Note anchoring and compromise effects.

OUTPUT
The option table, choice share per persona with and without the decoy, the recommended framing for the proposal, and the paragraph that presents it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Only use plans and limits the product brief lists; persona picks are simulation, say so.
```

## Ad hoc questions

- What are our unique attributes against [competitor]?
- Which proof points does positioning approve for [value theme]?
- What is in the [plan] package?
- How do customers describe [pain]? Give me phrases.
- Which quote shows a measurable outcome for [segment]?
- Where do we honestly lose to [competitor]?
- Does the brief say we integrate with [system]?
- What is the approved boilerplate?
- Which proof point do won deals against [competitor] cite most?
- Which claims in our approved boilerplate have no proof on file?
- What did buyers in [segment] say the proposal stage felt like in win/loss?
- Which known weakness in the product brief should the proposal address head-on?
- What did the last three won deals in [segment] buy, plan and size?
- Which [persona] objection should the proposal pre-empt?
- Has anything in the product changed since the boilerplate was last updated?
