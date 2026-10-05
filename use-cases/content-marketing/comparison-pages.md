# Comparison and alternatives pages


You're publishing a vs page, an alternatives page or a category comparison a buyer in evaluation trusts: honest about where the competitor wins, specific about where we win, with proof from customers who chose us. You walk away with a page sales sends to prospects, every claim signed off by legal, and updated when the competitor moves. Calven hands you the battlecard and the win/loss data, the competitive truth a writer usually has none of.

## Prompts

### Decide which comparison pages to build

```
Using Calven MCP, tell me which comparison pages are worth building.

CONTEXT
We can build three to five comparison or alternatives pages this quarter. I want to spend them on the competitors that decide deals.

PULL FROM THE UNIVERSE
- The competitive intelligence read: which competitors appear in the most deals, our win rate against each, and the fight-or-avoid verdict.
- The loss reasons by competitor from win/loss.
- The ICP segments and personas where each competitor shows up.

BUILD
- A ranked list of competitors with: deals involved, our win rate (with n and window), the segment that evaluates us against them, and the top loss and win drivers.
- For each, the page type that fits the buyer's intent: head-to-head, alternatives, or category comparison.
- The three to five pages to build first and why.

OUTPUT
A table plus a five-line recommendation.

GROUNDING
Use only the dashboard numbers and win/loss drivers in the Universe and cite n and the window. Do not infer a competitor's importance from your own knowledge of the market. If win/loss has too few deals against a competitor, say so.
```

### Build the matrix and the honest read

```
Using Calven MCP, build the comparison matrix and the honest read for a page comparing us with the competitor below.

FILL IN
- Competitor: [competitor]
- Persona: [persona]
- Segment: [segment]

CONTEXT
The page is for the persona in the segment at the evaluation stage. It must be credible to a buyer who has demoed both.

PULL FROM THE UNIVERSE
- The competitor's dossier: product, pricing and packaging, feature comparison, strengths, weaknesses.
- The competitor's battlecard: how we win, where we lose, landmines, bullshit detector.
- Our product brief: capabilities, integrations, pricing, differentiators and known weaknesses.
- Win and loss drivers against the competitor, with the buyer's words.

BUILD
- A comparison table on the dimensions this persona decides on, with what each side offers and the source.
- "Where we win": three to five areas, each with the proof.
- "Where they win": the honest areas, in neutral language.
- The two claims the competitor makes that do not hold, and the evidence.

OUTPUT
The matrix and the two lists, with a source per cell.

GROUNDING
Use only the dossier, battlecard, product brief and win/loss evidence in the Universe and cite them. Do not add competitor facts from your own knowledge; the dossier's "Sources & Freshness" section says how current it is. Mark any dimension where the dossier is thin as "unverified".
```

### Collect the switcher proof

```
Using Calven MCP, collect the proof for a page comparing us with the competitor below.

FILL IN
- Competitor: [competitor]

CONTEXT
I need evidence from customers who chose us over the competitor or left them for us.

PULL FROM THE UNIVERSE
- Customer quotes that mention the competitor, with the speaker's role and account.
- Displacement wins and proof points from the battlecard.
- Win drivers against the competitor with the evidence quote behind each.

BUILD
- Five quotes usable on the page, verbatim and attributed as far as the workspace allows.
- The outcomes customers named (time to value, cost, consolidation), each with its quote.
- A note on which quotes need customer approval before publishing.

OUTPUT
A proof section, verbatim quotes only.

GROUNDING
Use only quotes recorded in the Universe and cite each. Do not paraphrase a quote into something stronger. If there are fewer than five, say how many exist.
```

### Write the comparison page

```
Using Calven MCP, write a page comparing us with the competitor below, for the persona in the segment below.

FILL IN
- Competitor: [competitor]
- Persona: [persona]
- Segment: [segment]
- Inputs: [paste the matrix, the honest read and the proof]

CONTEXT
The inputs are the comparison matrix, the honest read and the proof from the previous steps. Structure: the buyer's problem, when to pick us, when to pick them, the comparison table, three non-feature reasons we win, one switcher story, FAQ, CTA. Under 1,200 words. Competitor named in plain text, never linked.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, jobs to be done, objections, how they talk.
- Our positioning: category frame and unique attributes.
- Our messaging objection handling for the objections this competitor's customers raise.

WRITE
- Open on the problem this persona has, in their words.
- Keep the honest trade-offs; a buyer who has seen both knows.
- Lead the "why us" with non-feature reasons where the evidence supports it: fit, time to value, support, implementation.
- Write the FAQ from the objections.

OUTPUT
The full page in markdown with a comparison table, plus a list of every claim and its source for legal review.

GROUNDING
Ground every claim in the Universe and cite it. Do not overstate; do not invent a weakness of the competitor; do not state a price for them that the dossier does not record. Flag any line that needs legal review.
```

### Check every claim on the page

```
Using Calven MCP, check every claim on this comparison page.

FILL IN
- Competitor: [competitor]
- Page: [paste the page]

CONTEXT
Legal will review the page next. I need every claim about us and about the competitor marked.

PULL FROM THE UNIVERSE
- Our product brief and the claims register.
- The competitor's dossier and battlecard, including "Sources & Freshness".
- Recent product changes on our side that may have made a claim stale.

CHECK
- Each claim about us: correct, wrong, stale or not in the brief.
- Each claim about them: supported by the dossier, unsupported, or outdated given the dossier's freshness date.
- Pricing statements on either side: recorded or not.

OUTPUT
The page annotated inline, then two lists: claims to fix and claims legal must review.

GROUNDING
Judge only against the Universe and cite the section. Where the Universe is silent, write "unverified", never "true".
```

### Check the page is still right

```
Using Calven MCP, tell me whether our comparison page for the competitor below is still right.

FILL IN
- Competitor: [competitor]
- Publish date: [publish date]
- Page: [paste the live page]

CONTEXT
I want to know what the competitor has done since the page was published and which lines no longer hold.

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since the publish date: launches, pricing changes, messaging shifts.
- The current battlecard and dossier.
- Our product changes since the publish date.

CHECK
- Each signal: does it change a claim on the page, and which one.
- Lines on the page the current battlecard no longer supports.
- Our own changes the page should now mention.

OUTPUT
A change list: line on the page, what changed, the suggested rewrite, the source.

GROUNDING
Use only signals and documents in the Universe and cite them with dates. If nothing has changed, say so.
```

### Draft a competitor alternatives page

```
Using Calven MCP, draft an alternatives page for the competitor below.

FILL IN
- Competitor: [competitor]
- Persona: [persona]
- Segment: [segment]

CONTEXT
The reader is building a shortlist and has not narrowed to us. The page lists us first, then the other alternatives we track, each judged fairly. For the persona in the segment.

PULL FROM THE UNIVERSE
- The competitors we track and their tier, descriptions and categories.
- The dossier for each: positioning, target buyer, pricing where recorded, strengths.
- Our ICP: who we fit best, and the disqualifiers.
- Our positioning: unique attributes and best-fit customer characteristics.

WRITE
- Why people look for an alternative to the competitor, from the loss reasons and quotes.
- Us: who we fit, where we win, honest limits.
- Each other alternative: who it fits, where it is strong, in neutral language.
- A "how to choose" section built on the ICP attributes.

OUTPUT
The page in markdown, competitors in plain text, with a source list.

GROUNDING
Describe every alternative only from its dossier in the Universe and cite it. Do not describe a competitor we do not track. Do not invent pricing.
```

## Ad hoc questions

- Which competitor shows up in the most deals, and what is our win rate against them?
- Where do we lose to [competitor]? Give me the buyer's words.
- What does the battlecard say about how we win against [competitor]?
- What does [competitor] charge, according to the dossier, and how fresh is that?
- Which claims does [competitor] make that do not hold up?
- Do we have customers who switched from [competitor]? Quote them.
- What has [competitor] changed in the last 90 days?
- On which dimensions is the dossier for [competitor] thin?
- Which of our known weaknesses will a buyer comparing us with [competitor] notice?
- What are the top objections from buyers evaluating us against [competitor]?
- Which segment evaluates us against [competitor] most often?
- Is "[claim about competitor]" supported by anything in the dossier?
- Who should buy [competitor] instead of us, honestly?
- What is [competitor]'s target buyer, according to the dossier?
