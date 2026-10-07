# Customer evidence packs

**Related:** [Customer quotes](../customer-marketing/customer-quotes.md) is where quotes are sourced and approved for marketing use.

You need proof in the customer's own words for a theme, a persona, a competitor, a feature or a campaign. You walk away with a pack of verbatim, attributed quotes grouped by theme, strongest first, with how often each theme comes up and the context each quote came from. Calven's quote base means the proof goes past the same two logos and a sentence the writer made up.

## Prompts

### Assemble an evidence pack on a theme

```
Using Calven MCP, assemble a customer-evidence pack on the topic below.

FILL IN
- Topic: [theme or topic]
- Persona: [persona]
- Asset: [the asset it is for: a campaign, a slide, an objection-handling doc]

CONTEXT
I need real customer proof for the asset. The audience is the persona.

PULL FROM THE UNIVERSE
- Themes about the topic, with how many mentions and the sentiment.
- Verbatim customer quotes under those themes, with the speaker's role, account, date and the conversation they came from.
- Quotes tagged quantified outcome, time to value or competitive win on this topic.

ASSEMBLE
- Group quotes by theme. Under each, the single strongest quote first, then supporting ones.
- Mark each quote with role, account and date.
- Note how often each theme appears, so common reads as common and rare as rare.

OUTPUT
The pack in the format I name, every quote verbatim and attributed.

GROUNDING
Use only quotes in the Universe. Never paraphrase a quote into something stronger. If a theme has no quotes, say so.
```

### Pull the proof from won deals

```
Using Calven MCP, give me the proof from deals we won against the competitor or in the segment below.

FILL IN
- Competitor: [competitor, or leave blank and name a segment]
- Segment: [segment, or leave blank and name a competitor]

CONTEXT
Sales wants displacement proof for the battlecard and the deck.

PULL FROM THE UNIVERSE
- Deal drivers that helped us in won deals against the competitor (or in the segment), with the evidence quote and the deal.
- The surveyed-deal summaries for the three largest of those wins.

BUILD
- The reasons we won, ranked by how many deals they decided, each with the buyer's quote.
- Three win stories in four lines each: situation, alternative, why us, outcome in their words.

OUTPUT
A proof sheet, every quote cited to its deal and respondent.

GROUNDING
Quotes verbatim from responses and drivers. Deal names and amounts follow the workspace security settings; if withheld, say so. Do not invent outcomes.
```

### Build a customer language bank

```
Using Calven MCP, build a customer language bank for the topic below.

FILL IN
- Topic: [problem, outcome or category]

CONTEXT
Writers across marketing and sales will pull from this instead of inventing phrases.

PULL FROM THE UNIVERSE
- Quotes about the topic by category: pain, gain, job to be done, goal, objection, buying trigger.
- The themes those quotes cluster into and their counts.

ORGANIZE
- For each theme: the recurring words and phrases, how often each appears, and one quote that uses it.
- The terms customers use for our product, the alternatives and the category.
- The words we use that customers never do.

OUTPUT
A language bank by theme, verbatim, with sources.

GROUNDING
Only language grounded in quotes. Do not polish customer wording into marketing wording.
```

### Build objection handling from customer quotes

```
Using Calven MCP, build an objection-handling doc for the persona below from what customers actually said.

FILL IN
- Persona: [persona]

CONTEXT
Reps want the objections in the buyer's words and the response in a won customer's words.

PULL FROM THE UNIVERSE
- Quotes categorised as objection for the persona, ranked by theme frequency.
- Quotes from customers who had the same objection and bought anyway, and the deal drivers that answered it.
- Our messaging objection handling section.

BUILD
- For each objection: the buyer's phrasing, how often it appears, the approved response, and the customer quote that proves it.

OUTPUT
A table reps can read on a call.

GROUNDING
Objections and proof verbatim and cited. If an objection has no proof quote, say so and leave the slot empty.
```

## Advanced prompts

### Map proof coverage against what costs deals

```
Map our proof against the objections that cost us deals, weighted by revenue, to find where we argue without evidence. Use Calven MCP for the objections, the deals they hurt and the quotes we hold.

FILL IN
- Window: [time window, e.g. last four quarters]
- Personas: [personas]

CONTEXT
We have plenty of quotes, mostly about ease of use. Deals are lost on other things. I want the next round of evidence work pointed at the gap that costs most.

FROM CALVEN
- Loss drivers and costly objections from the win/loss and voice-of-customer dashboards, with n and the amount at stake.
- Quotes tagged by category, highlight and theme, with account and role.
- The objection handling section of the messaging, and the proof points in the positioning.

METHOD
- Build a grid: rows are the objections and loss drivers, columns are the personas.
- In each cell, count the usable proof (positive quotes, quantified outcomes, displacement wins) that answers that objection for that persona.
- Weight each row by the revenue at stake behind it. Coverage = proof count capped at three, divided by three.
- Gap score = revenue at stake times (1 minus coverage). Rank the cells by gap score.
- For the top five gaps, name the accounts most likely to hold the missing proof: customers whose quotes touch the topic positively.

OUTPUT
The heatmap as a table, the ranked gap list, and for each top gap the accounts to interview and the question to ask them.

GROUNDING
Label every number as Calven (cited, with n) or your calculation. Count only quotes that genuinely answer the objection. Don't invent proof to fill a gap.
```

### Rank quotes in a credibility tournament

```
Run a credibility tournament: put our candidate quotes head to head in front of skeptical buyers and rank them with Elo scores. Use Calven MCP for the quotes and to build the judges from our personas.

FILL IN
- Theme: [theme or claim the quotes must support]
- Judge personas: [personas]

CONTEXT
We pick the quotes we like. Buyers believe different ones: specific, a bit rough, from someone like them. I want the quote that persuades a skeptic, not the one that flatters us.

FROM CALVEN
- Every quote on the theme, with author role, account, segment, sentiment and highlight.
- The judge personas' canvases: objections, what they're measured on, how they talk.

METHOD
- Shortlist up to sixteen quotes on the theme.
- Play each judge persona. Run pairwise rounds: two quotes, the judge picks the more believable and persuasive one, with a one-line reason.
- Score with Elo, every quote starting at 1,000. Run enough rounds that each quote meets at least five others per judge.
- Compare rankings across judges: which quote wins everywhere, which wins with one persona only.
- Pull out what the winners share (specificity, numbers, role match, an admitted downside) as a checklist for picking quotes.

OUTPUT
A leaderboard per judge and overall, the top three quotes with the judges' reasons, and the checklist.

GROUNDING
Quote verbatim and cite each. Label the scores as simulated from persona canvases. Don't edit a quote to help it win.
```

### Audit the pack for selection bias

```
Audit our evidence pack for selection bias: does it represent what customers say, or only the happiest ones? Use Calven MCP for the full population of quotes and the accounts behind them.

FILL IN
- Evidence pack: [paste the quotes in the current pack]

CONTEXT
A pack built from favourites drifts toward one segment, one account and one kind of praise. Buyers and analysts notice. I want to know how skewed ours is and what a fair sample looks like.

FROM CALVEN
- The full set of quotes on the same themes, with account, segment, role, sentiment and date.
- Themes with mentions and sentiment, for the true distribution.
- Accounts behind won deals in the same period, from the CRM mirror.

METHOD
- Profile the pack: share by account, segment, role, sentiment, recency and highlight.
- Profile the population the same way.
- Compare the two. Flag any dimension the pack over-represents by more than double, and any single account supplying more than a quarter of the pack.
- List the themes customers raise often that the pack never touches.
- Propose a rebalanced pack of the same size, drawn from the population, that keeps the strongest proof and matches the real mix.

OUTPUT
A side-by-side table of pack versus population, the three biggest skews, and the rebalanced pack with citations.

GROUNDING
Label every share as Calven (cited, with n) or your calculation. Quote verbatim. Don't drop a negative theme from the population to make the pack look fair.
```

## Ad hoc questions

- What are the top three pains customers named this quarter, with quotes?
- Give me a quantified-outcome quote about [topic].
- What did [account] say about [feature]?
- Which customers mentioned [competitor], and what did they say?
- Show me positive quotes from [persona role] about onboarding.
- What is the most-mentioned theme in the last 90 days?
- Which buying triggers do customers name most?
- What do customers call [our category]?
- Which themes have negative sentiment and are growing?
- Give me three customer phrases for "[our marketing phrase]".
- Which quotes are marked as suggested marketing-ready?
- What did the buyer at [deal] say about why they chose us?
- Which account supplies most of our quotes, and is it in our ICP?
- Which objection has the fewest customer quotes answering it?
- Which persona role do we have no positive quotes from?
- Which won deals have a deal driver with an evidence quote we've never used?
- Which theme swung from positive to negative sentiment this quarter?
- Do we have a quote with a number in it from a customer who switched from [competitor]?
