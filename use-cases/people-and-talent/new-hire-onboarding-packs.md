# New-hire onboarding packs


Your new hire should be able to read their week-one brief in an hour and tell the story in their own words by Friday: what we do and for whom, the category we claim, the buyers and what they care about, the competitors and how we differ, how we win, and how customers describe us. You get a role-specific pack with sources and a short knowledge check, and the hiring manager doesn't write a word of it. The alternative is learning the story from the oldest slide deck and three colleagues' versions of it.

## Prompts

### Build the week-one pack

```
Using Calven MCP, build a week-one onboarding pack for the new hire's role below.

FILL IN
- Role: [role]
- Product: [product, or leave blank for all]

CONTEXT
A new hire in the role starts on Monday. They need to understand what we do, for whom, against whom, and how we win, well enough to explain it to a customer by Friday. Reading time under one hour. If a product is given, scope the pack to it.

PULL FROM THE UNIVERSE
- Our positioning statement, market category, core narrative and one-liner, boilerplate.
- The product brief: overview, capabilities, use cases, integrations, pricing at a summary level.
- The ICP summary, segment tiers and priority verticals.
- Each buyer persona: who they are, their top pains, their top objections, how they talk.
- Every Tier 1 competitor: one line on who they are, where we win, where we lose, our win rate against them.
- The top three win drivers with a buyer verbatim each, and three customer quotes about outcomes.

BUILD
1. The story in one page: what we do, for whom, why now, in the words of our positioning.
2. The product in one page at the depth the role needs.
3. The buyers: one half-page per persona, pains and objections in their words.
4. The competition: a table, then one paragraph per Tier 1 rival.
5. How we win: the drivers and the quotes.
6. Ten words and phrases we use and five we never use, from messaging.

OUTPUT
A document in those six sections with the source beside every claim, then a ten-question knowledge check with answers.

GROUNDING
Use only the approved documents, records and dashboards in the Universe and cite them. Do not invent customers, numbers or competitor facts. If a section has no approved content, say "not yet published" rather than filling it.
```

### Add the overlay for one role

```
Using Calven MCP, add the role-specific section to the onboarding pack for the new hire's role below.

FILL IN
- Role: [role]

CONTEXT
The general pack exists. This section covers what the role touches every day: the people they talk to, the questions they get, the claims they must get right.

PULL FROM THE UNIVERSE
- For an SDR or AE: the personas they prospect, with messaging hooks and objections; the discovery questions from each Tier 1 battlecard.
- For a CSM or support agent: the user and stakeholder personas, their jobs to be done and pains; the product gaps buyers name; the objection handling for renewals.
- For a marketer or writer: the messaging pillars, the customer language bank by theme, the claims register with proof status.
- For a product role: the product gaps ranked by deals, the top customer themes by sentiment.

BUILD
- The three personas or themes this role meets most, with what to say and what not to claim.
- The five questions this role will be asked in month one, each answered from the Universe.
- The three claims this role must never make, from the product brief's known weaknesses and the claims register.

OUTPUT
A two-page role section with sources.

GROUNDING
Use only the Universe and cite each item. Where the Universe has nothing for this role, say so.
```

### Write the knowledge check

```
Using Calven MCP, write a week-one knowledge check for the new hire's role below.

FILL IN
- Role: [role]

CONTEXT
Ten questions a new hire answers on Friday to show they can tell the company story. Answers must come from the approved documents so a manager can grade them.

PULL FROM THE UNIVERSE
- Positioning, messaging, ICP, product brief, personas, Tier 1 battlecards.

BUILD
- Ten questions: three on the story and category, two on the ICP, two on personas, two on competitors, one on a claim we do not make.
- The model answer and the source for each.

OUTPUT
The quiz, then the answer key.

GROUNDING
Every answer is a direct reading of the Universe, cited. No trick questions on facts the Universe does not hold.
```

### Check the pack is still current

```
Using Calven MCP, tell me what changed in our story since the pack was built so I can refresh the onboarding pack.

FILL IN
- Date: [date the pack was built]

CONTEXT
Before the next cohort I want to know what is stale.

PULL FROM THE UNIVERSE
- Strategy documents with a version or update after the date.
- Product changes since the date and the drift findings on published documents.
- Competitive signals of High severity since the date.
- New or changed personas and competitors.

BUILD
- A list of what changed, where it lands in the pack, and the corrected text.

OUTPUT
The change list with sources.

GROUNDING
Use only recorded versions, changes, signals and findings in the Universe and cite them.
```

## Advanced prompts

### Turn the pack into a spaced-repetition deck

```
Turn the company story into a spaced-repetition deck a new hire studies ten minutes a day for their first month. Use Calven MCP for the facts on every card.

FILL IN
- Role: [role]
- Format: [Anki CSV, a spreadsheet, or a printable list]

CONTEXT
A week-one pack is read once and forgotten by week three. Spaced repetition is how people actually retain facts. I want the forty or so facts a new hire must know cold, as cards, on a schedule.

FROM CALVEN
- Positioning: one-liner, category, unique attributes, competitive alternatives.
- The ICP summary and disqualifiers.
- The personas with their top pain and top objection.
- The battlecards for Tier 1 competitors: how we win, where we lose, one landmine each.
- Three customer quotes worth repeating.

BUILD
- Write 40 to 60 cards. One fact per card. Questions that force recall, not recognition ("What does a Head of Data lose sleep over?" not "Is data quality a pain?").
- Mix card types: fact, "in your own words", "they say, you say" for objections, and "which competitor said this?".
- Tag each card by topic and difficulty, with the source.
- Write a schedule: new cards per day, review intervals (1, 3, 7, 14, 30 days), and the day-30 check.
- If you can run code, produce the CSV with front, back, tags and source columns.

OUTPUT
The deck file (or table), the schedule, and a ten-card day-one starter set.

GROUNDING
Every card's answer cites the Universe. Don't invent a fact, a quote or a competitor line to fill the deck.
```

### Rank the facts by how often they decide deals

```
Run a Pareto analysis on what a new hire could learn: rank each fact by how often it shows up in the moments that decide our deals, and build week one from the top of the list. Use Calven MCP for the evidence.

FILL IN
- Role: [role]
- The current pack: [paste the table of contents or the pack]

CONTEXT
Onboarding packs list everything with equal weight. A new hire has a week. I want the few facts that come up in most deals at the top, and the ones that rarely matter pushed to month two.

FROM CALVEN
- Deal drivers, helped and hurt, by category, with the win/loss dashboard's breakdown and n.
- Objections from customer quotes, grouped into themes, with mention counts.
- Competitors by how often they appear in deals and our win rate against each, from the competitive dashboard.
- Which pillars reps use on calls, from field adoption on the messaging dashboard.

METHOD
- List candidate facts from the pack and the Universe: each competitor, persona, objection, pillar, proof point.
- Count how often each appears in deal drivers, objections and competitive deals. Normalise and combine into one frequency score; say how you weighted the sources.
- Sort and draw the cumulative curve. Find the cut where the top facts cover 80 percent of occurrences.
- Compare with the pack: what it teaches on day one that's below the cut, and what's above the cut that it skips.

OUTPUT
The ranked list with counts, the cumulative curve as a table or chart, and a re-ordered week-one plan.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't count a fact the records don't mention.
```

### Grade a teach-back to a sceptical buyer

```
Run a teach-back test: the new hire explains the company story to a sceptical buyer, and the AI tool grades what they got wrong, left out or made up. Use Calven MCP for the buyer and the approved story.

FILL IN
- New hire's explanation: [paste a written or transcribed five-minute explanation of what we do, for whom and why us]
- Persona to play the buyer: [persona]
- Day of onboarding: [day]

CONTEXT
A new hire who can recite the pack can't always explain it. Teaching it back to a sceptic exposes the gaps, the made-up claims and the competitor they can't distinguish us from. Better found in week one than on a customer call.

FROM CALVEN
- Positioning, messaging (one-liner, pillars) and the product brief.
- The persona canvas: pains, objections.
- The battlecard for the competitor the persona most likely uses.
- Claims we must not make.

METHOD
- Play the persona reacting to the explanation in the first person: two follow-up questions, one objection, one "how is that different from what we have?".
- Grade the explanation on five criteria: accuracy against the brief, the buyer's problem first, differentiation from the competitor, proof used, claims within bounds. Score 1 to 5 with evidence.
- List every inaccurate or unapproved claim with the correct version and source.
- Name the two things to study before the next teach-back, mapped to the pack sections.

OUTPUT
The buyer's reaction, the scorecard, the correction list, and the study plan for the next attempt.

GROUNDING
Grade only against the Universe, cited. Mark any judgement about delivery as yours. Don't add facts the new hire should have said that the Universe doesn't contain.
```

## Ad hoc questions

- What do we do, in one sentence from our positioning?
- Who do we sell to? Give me the ICP summary.
- Who are the buyer personas, and what does each care about most?
- Who are our Tier 1 competitors, and how do we differ from each in one line?
- Where do we lose to [competitor]?
- Why do customers choose us? Give me the top three win drivers with a quote each.
- What words do we use for our category, and what do we avoid?
- Give me three customer quotes a new hire can repeat.
- What is our pricing, at the level a new CSM needs?
- What claims must a new hire never make about the product?
- Which persona does an SDR call first, and what is their top objection?
- What changed in the product in the last 60 days?
- Which market trends does our story rely on?
- Which three facts would a new hire most likely get wrong about our product, per the claims?
- Which competitor do new hires confuse us with most, given our positioning?
- What do customers say in their first month with us? Quote two.
- Which persona does the company story speak to least?
- Which objection comes up in almost every deal, per the voice-of-customer read?
- What's the one number a new hire should know about how we win?
