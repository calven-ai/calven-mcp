# Board and investor narrative


The board pack is due and the GTM half (why we win, who we lose to, whether pipeline is in profile) is the half the board probes hardest. You get the competitive and pipeline slides with a source and sample size on every claim, a story that matches what sales and product marketing say, and an answer to the question an investor asked last time. Calven keeps you from rewriting last quarter's competitor slide from memory and quoting a win rate nobody can reproduce.

## Prompts

### Build the GTM and competitive board section

```
Using Calven MCP, build the GTM and competitive section of our board pack for the window below.

FILL IN
- Window: [time window, e.g. last quarter]
- Product: [product, or leave blank for all]

CONTEXT
The audience is our board. They saw last quarter's numbers and will ask what changed and why. Financials are covered elsewhere; this section is the sales engine and the competition.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for the window with the change against the prior period: competitive win rate, pipeline won and lost, deals with completed win/loss.
- The ICP read: share of wins in profile, share of pipeline in profile, average deal size and sales cycle, win rate by segment.
- Competitive performance: win rate per competitor, the top loss reasons, and the competitor moves recorded this period.
- The top win and loss drivers with one buyer verbatim each.

BUILD
- One slide: the engine in four numbers, each with its change and sample size.
- One slide: competitors we met, win rate against each, what each did this period.
- One slide: why we won and why we lost, with the verbatim behind each top driver.
- A watch list of three things to track next quarter.

OUTPUT
Slide-by-slide text with speaker notes. Cite the dashboard, window and n beside every number.

GROUNDING
Use only numbers from the Insights dashboards and cite n and the window. Never add rows up yourself. Where a dashboard reports a floor instead of a number, say the sample is too small. Do not invent competitor moves.
```

### Write the investor update's market and customer paragraphs

```
Using Calven MCP, write the market and customer paragraph for our investor update.

FILL IN
- Window: [time window, e.g. last month]

CONTEXT
This is the monthly update to existing investors. One paragraph on the market and one on what customers are telling us. Tone is plain and factual.

PULL FROM THE UNIVERSE
- Our positioning statement and the market category we claim.
- The high-impact trends and opportunities from market research, with the "so what" for each.
- The top customer themes by mentions in the window, net sentiment, and two marketing-ready quotes.

WRITE
- The market paragraph: the two shifts that matter for us and what we are doing about them.
- The customer paragraph: the top theme, what it tells us, one verbatim quote with attribution.

OUTPUT
Two paragraphs under 120 words each, with the sources listed below them.

GROUNDING
Use only trends, themes and quotes recorded in the Universe and cite each. Do not present a stale trend as current; check last_seen. Do not polish a customer quote.
```

### Answer a board question with evidence

```
Using Calven MCP, answer the board question below with evidence.

FILL IN
- Question: [paste the question]

CONTEXT
A board member asked this at the last meeting. I need a one-paragraph answer with the data behind it, not a narrative.

PULL FROM THE UNIVERSE
- The dashboard section that holds the number the question is about.
- The drill-down behind it: the deals, the responses or the verbatims.

ANSWER
- The number, its window and sample size.
- The two or three facts behind it.
- What we do not know, if the sample is thin.

OUTPUT
One paragraph plus a short table of the rows behind the number.

GROUNDING
Use only Insights numbers and the rows the drill-down returns. If the Universe cannot answer the question, say so and name the data we would need.
```

### Check the section against positioning and battlecards

```
Using Calven MCP, check this board section against our approved positioning and battlecards.

FILL IN
- Draft: [paste the draft section]

CONTEXT
The draft is the competitive and GTM section. I want to catch anything that contradicts what sales and product marketing tell the market.

PULL FROM THE UNIVERSE
- Our positioning: category, alternatives, unique attributes, proof points.
- The battlecards for every competitor named in the draft: where we win, where we lose.
- The competitive intelligence dashboard for the window the draft covers.

CHECK
- Flag each line that overstates a win, hides a loss, or claims a differentiator the positioning does not.
- Flag each number that does not match the dashboard or has no sample size.
- Suggest the corrected line.

OUTPUT
The draft annotated inline, then a clean version.

GROUNDING
Judge only against the documents and dashboards in the Universe and cite the conflict. If the draft is consistent, say so.
```

## Advanced prompts

### Rehearse the board Q&A with three directors

```
Run a mock board meeting on the GTM section with three directors who each probe it differently, and score my answers. Use Calven MCP for the win/loss, competitive and pipeline evidence I'll be answering with.

FILL IN
- Board section: [paste the GTM and competitive slides or text]
- Directors: [describe each, e.g. lead investor from the last round, independent with a sales background, new board observer]

CONTEXT
The board section takes twenty minutes and the questions decide whether the board trusts the plan. I want to have heard the hard ones before the meeting, with my evidence checked.

FROM CALVEN
- Competitive win rate, pipeline won and lost and top loss drivers for the quarter and the prior one, with n.
- Win rate against each Tier 1 competitor and their signals from the last 90 days.
- The ICP share of wins and in-profile pipeline, with n.

SIMULATE
- Play each director in turn: the investor asks about growth efficiency and the competitive threat, the independent about pipeline quality and sales execution, the observer the naive question that exposes a gap.
- Each asks three questions grounded in what the slides say and don't say. I answer in the chat. After each answer, the director follows up once.
- After the session, score each answer 1 to 5 on directness, evidence and consistency with the slides, and show the evidence I should have used.

OUTPUT
The transcript, a scorecard per answer, the three questions I handled worst with a model answer for each, and any slide claim the evidence doesn't support.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Directors only ask about things in the slides or the evidence; model answers cite Calven or say the data isn't held.
```

### Map every board claim to its evidence

```
Turn the board narrative into an argument map: each claim with its evidence, the warrant that connects them and the strongest rebuttal. Use Calven MCP for the evidence behind each claim and the counter-evidence a director could find.

FILL IN
- Narrative: [paste the board narrative or investor update draft]

CONTEXT
A board narrative is a chain of claims. One weak link (a win rate on six deals, a trend nobody checked since spring) and the whole section loses credibility. I want to see the chain laid out and the weak links fixed.

FROM CALVEN
- For each quantitative claim, the dashboard figure with n and window.
- The positioning document's Relevant Market Trends and Proof Points, with when each trend was last seen.
- Battlecard Where We Lose sections and competitor signals that cut against any competitive claim.
- Customer quotes tagged Quantified outcome for any outcome claim.

METHOD
- Break the narrative into claims. For each, apply a Toulmin structure: claim, data, warrant, qualifier, rebuttal.
- Rate each link: strong (dashboard figure with n of 30 or more, or two independent sources), moderate, or weak (small n, stale, single quote, or none).
- For weak links, propose the honest qualifier or a replacement claim the evidence supports.

OUTPUT
An argument map as a table, the weak links in order of how much they'd hurt if challenged, and the narrative rewritten with the qualifiers in place.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A rebuttal must come from recorded evidence; if none exists, say the claim stands unchallenged.
```

### Plan two scenarios the board should watch

```
Build a two-by-two scenario plan for the next two quarters from the two market uncertainties that matter most to our plan, with signposts the board can track. Use Calven MCP for the trends, competitor moves and win/loss shifts that define the uncertainties.

FILL IN
- Plan: [paste the plan's key GTM assumptions: growth, segments, pricing]
- Horizon: [e.g. the next two quarters]

CONTEXT
Boards like a single plan and then get surprised. Scenario planning names the two forces that could break it, sketches four futures, and gives each a signpost so we see which one we're in early.

FROM CALVEN
- High-severity trends and market opportunities, with horizon and last-seen date.
- Competitor signals from the last two quarters, by competitor and type.
- Movers on the win/loss and competitive dashboards versus the prior period, with n.

METHOD
- Pick the two uncertainties with the highest impact on the plan and the least predictability. Explain the choice.
- Draw the two-by-two. Name each quadrant and write a 100-word story of how the next two quarters unfold in it.
- For each scenario: the effect on pipeline and win rate (a labelled range), the decision we'd take, and the signpost (a metric or signal Calven tracks) that would tell us we're heading there.

OUTPUT
The two-by-two, the four stories, a signpost table the board can review each quarter, and the one decision that holds in all four.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Scenarios are judgement; the uncertainties and signposts must trace to recorded trends, signals or dashboard movers.
```

## Ad hoc questions

- What is our competitive win rate for last quarter, and how does it compare with the quarter before?
- Which competitor did we lose to most this year, and for what reasons?
- What share of our open pipeline is in ICP profile?
- What did [competitor] do this quarter that the board should know about?
- Give me the top three loss drivers with a buyer quote for each.
- Which segment has the highest win rate, and on how many deals?
- What is our positioning statement, in one sentence I can put on a slide?
- Which market trends does our positioning rely on, and are they still current?
- Give me two customer quotes about outcomes I can use in the investor update.
- How many deals did we survey this quarter, and what was the completion rate?
- Is the "we win on time to value" line on this slide backed by win/loss evidence?
- What are buyers saying about our pricing compared with [competitor]?
- Which dashboards have no data yet, so I do not promise the board a number we cannot show?
- Which competitor's win rate against us improved most since the last board meeting?
- Which positioning proof point has the weakest evidence behind it?
- What share of lost pipeline went to no decision this quarter?
- Which customer quote this quarter best shows a quantified outcome?
- Which board-level claim about time to value can I back with a buyer quote?
- Which trend in our positioning hasn't been seen in the last six months?
