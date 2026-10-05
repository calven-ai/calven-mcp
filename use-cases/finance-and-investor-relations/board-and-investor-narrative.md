# Board and investor narrative

**Team:** Finance and investor relations · also leadership, product marketing
**Impact:** High. The board pack and the investor update go out every month or quarter, and the GTM half (why we win, who we lose to, whether pipeline is in profile) is the half the board probes hardest.
**Prerequisites:** strategy documents approved, competitors tracked. Better with win/loss surveys running (win rates by competitor, loss reasons with the buyer's words) and CRM connected (ICP fit share of pipeline, segment win rates). Financials come from the finance stack, not Calven.

## What the team is trying to do

Give the board and investors a current, honest read on the market, the competition and the GTM engine, next to the financials. Done means every claim on the competitive and pipeline slides has a source and a sample size, the story matches what sales and product marketing actually say, and the update answers the question an investor asked last time. Without the company's own knowledge the finance lead rewrites last quarter's competitor slide from memory and quotes a win rate nobody can reproduce.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Set the agenda | Agree the sections with the CEO: financials, metrics, GTM, product, people, asks | Calven does not help here | |
| 2 | Financials and SaaS metrics | ARR, growth, NRR, margin, CAC payback, cash | Calven does not help here | |
| 3 | GTM engine read | Pipeline coverage, win rates, deal size, cycle, by segment | ICP share of wins and pipeline, win rates by segment and attribute, average deal size and sales cycle, with n and the prior period | ICP dashboard, win/loss dashboard, CRM deals |
| 4 | Competitive position | Who we meet, who we beat, who beats us, what changed | Win rate per competitor, fight or avoid, loss reasons, this quarter's competitor moves with dates and sources | Competitive intelligence dashboard, competitive signals, battlecards |
| 5 | Why we win and lose | The drivers behind the numbers | Top win and loss drivers, the kind of force that decides deals, verbatims from buyers | Win/loss dashboard (why won/lost, deciding forces), deal drivers, survey responses |
| 6 | Market and positioning | Trends, the category we claim, where we sit | Positioning statement and category frame, the trends behind "why now", high-impact trends and opportunities | Positioning document, market research dashboard, trends |
| 7 | Customer voice | What customers say, in their words | Top themes by mentions and sentiment, marketing-ready quotes tied to revenue | Voice-of-customer dashboard, themes, quotes |
| 8 | Answer last meeting's questions | Follow up on what the board asked | The specific drill-down: deals against one competitor, deals lost on price, responses to one survey question | `get_insight_detail`, CRM deals |
| 9 | Write the narrative | Turn the numbers into three to five slides and a paragraph for the update | Drafts grounded in the dashboards, with the source and window per claim | All of the above |
| 10 | Review | CEO and sales leadership check the story | Consistency check: does the slide say what the approved positioning and battlecards say | Positioning, messaging, battlecards |
| 11 | Publish and present | Build the deck, send the update | Calven does not help here | |

## Recommended prompts

### Steps 3 to 5: the GTM and competitive read

```
Using Calven MCP, build the GTM and competitive section of our board pack for [window].

CONTEXT
The audience is our board. They saw last quarter's numbers and will ask what changed and why. Financials are covered elsewhere; this section is the sales engine and the competition.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for [window] with the change against the prior period: competitive win rate, pipeline won and lost, deals with completed win/loss.
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

[name the window and the product if we scope by product]
```

### Step 6 and 7: market, positioning and customer voice

```
Using Calven MCP, write the market and customer paragraph for our investor update.

CONTEXT
This is the monthly update to existing investors. One paragraph on the market and one on what customers are telling us. Tone is plain and factual.

PULL FROM THE UNIVERSE
- Our positioning statement and the market category we claim.
- The high-impact trends and opportunities from market research, with the "so what" for each.
- The top customer themes by mentions this [window], net sentiment, and two marketing-ready quotes.

WRITE
- The market paragraph: the two shifts that matter for us and what we are doing about them.
- The customer paragraph: the top theme, what it tells us, one verbatim quote with attribution.

OUTPUT
Two paragraphs under 120 words each, with the sources listed below them.

GROUNDING
Use only trends, themes and quotes recorded in the Universe and cite each. Do not present a stale trend as current; check last_seen. Do not polish a customer quote.

[name the window]
```

### Step 8: answer a board question

```
Using Calven MCP, answer this board question with evidence: "[the question]".

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

[paste the question]
```

### Step 10: consistency review

```
Using Calven MCP, check this board section against our approved positioning and battlecards.

CONTEXT
Below is the draft competitive and GTM section. I want to catch anything that contradicts what sales and product marketing tell the market.

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

[paste the draft section]
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

## Good practice

- Ask for the number with its window and n every time. A win rate without a sample size does not survive a board question.
- Scope by product in a multi-product workspace, or the board sees a blended number that matches nobody's plan.
- Use the "what changed" framing: the dashboards carry the prior period, so ask for the delta, not just the level.
- Keep financials out of the prompt. Calven holds no ARR or cash; mixing them in invites the AI tool to guess.
- Check availability first. Ask which dashboards are empty before promising the board a slide.
- Keep last meeting's questions in the prompt. The drill-down tools answer the specific question better than the overview.
- Have sales leadership read the competitive slide before it goes out. Consistency with the battlecards is the test.

## Not covered today

- Financials, SaaS metrics and cash. They come from the finance stack and the billing system.
- Building the deck and sending the update.
- Current news on a competitor. Calven's competitive intelligence agent records moves in the app; MCP reads what it stored.
- Forecast models. Calven supplies the win rates and the in-profile share; the model lives in the planning tool.
