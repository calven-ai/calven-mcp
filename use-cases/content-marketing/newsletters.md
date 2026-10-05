# Newsletters

**Team:** Content marketing · also demand generation, brand and communications
**Impact:** Medium. A newsletter is the one email the database gets every month. An issue with a point of view on a tracked trend, one customer line and the current product story earns opens next month; a round-up of links does not.
**Prerequisites:** strategy documents approved (positioning, messaging, product brief), personas approved. Better with market research run (trends), call transcripts ingested (quotes) and own website monitored (product changes for the "what's new" section).

## What the team is trying to do

Ship a monthly or biweekly issue the target persona reads: one idea on something moving in the market, one piece of customer evidence, what changed in the product, what to read next. Done means on-message, factually current, in the persona's words, sent on time. The hard part is the first section: a point of view, not a summary.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the lead idea | One thing worth saying this issue | Trends and opportunities with a recent change, themes that moved, our positioning's take | Trends, market opportunities, themes, positioning |
| 2 | Gather the sections | Customer line, product news, reading list | A verbatim quote on the lead theme; product changes this month in buyer terms; which published pieces fit the persona | Quotes, product changes, product brief |
| 3 | Write | Subject, lead, sections, CTA | Draft on-message in the persona's words | Messaging, persona canvas |
| 4 | Check | Claims, drift, persona reaction | Claim check and persona review | Product brief, `review_against_personas` |
| 5 | Build and send | Email tool | Calven does not help here | |
| 6 | Read the results | Opens, clicks, replies | Calven does not help here | |

## Recommended prompts

### Step 1 and 2: the issue plan

```
Using Calven MCP, plan this month's newsletter for [persona].

CONTEXT
Sections: one lead idea, one customer line, what's new in the product, three things to read. Under 400 words. Reader: [persona].

PULL FROM THE UNIVERSE
- Trends and opportunities that changed status or severity in the last [window], with their "so what".
- Themes that moved most in customer calls, with a verbatim quote.
- Product changes this month, with what each means for the buyer.
- Our positioning, for the take on the lead idea.

BUILD
- Three candidate lead ideas with the evidence behind each; recommend one.
- The customer line: one quote, attributed as the workspace allows.
- The product news in two sentences each, in buyer terms, no feature names the brief does not use.

OUTPUT
The issue plan with sources.

GROUNDING
Use only trends, quotes, product changes and positioning in the Universe and cite them with dates. Do not invent a product change or a trend.

[name the persona and the window]
```

### Step 3: write the issue

```
Using Calven MCP, write the newsletter issue from this plan.

CONTEXT
Below is the issue plan. Voice: a peer writing to [persona], plain, no hype. Subject line under 50 characters.

PULL FROM THE UNIVERSE
- The [persona] canvas: messaging hooks and how they talk.
- Our messaging for the one product mention.

WRITE
- Subject line and preview text.
- The lead: our take on the idea in 120 words, in the persona's words.
- The customer line, verbatim.
- What's new, two sentences per change.
- Three things to read with one line each (from the list I paste).
- One CTA.

OUTPUT
The issue in plain text, with sources.

GROUNDING
Use only the plan, the canvas and the messaging in the Universe and cite them. Do not add claims the product brief does not support.

[paste the plan and the reading list]
```

### Step 4: check the issue

```
Using Calven MCP, check this newsletter before it goes out.

CONTEXT
Below is the issue. It goes to [number] contacts tomorrow.

PULL FROM THE UNIVERSE
- The product brief and product changes, for the what's new section.
- Our positioning, for the lead.
- The [persona] canvas, and run the persona review.

CHECK
- Every product claim: correct, wrong or stale.
- The lead: on-positioning or drifting.
- The persona's reaction: would they read past the first line, and which line would they forward.

OUTPUT
The issue annotated, then the three changes to make.

GROUNDING
Judge only against the Universe and cite. If it is clean, say so.

[paste the issue]
```

## Ad hoc questions

- Which trend changed most in the last month, and what is our take?
- What did we change in the product this month, in buyer terms?
- Give me one customer quote on [theme] from the last 60 days.
- What is our positioning's view on [topic], in two sentences?
- Which theme from calls moved most this month?
- Is this subject line something [persona] would open: "[subject]"?
- Which published pieces fit [persona] at the awareness stage?
- Rewrite this lead in the persona's words: [paste]

## Good practice

- Lead with a take, not a summary. The positioning gives you the take; the trend gives you the timing.
- One quote per issue, verbatim.
- Write the product news from product changes, not from the release notes. Product changes say what the buyer sees.
- Run the check prompt every issue; stale pricing in a newsletter reaches everyone at once.

## Not covered today

- The email tool, the list, the send and the results.
- Web links to third-party reading. Paste the list in.
- Adding a trend or quote to Calven from the AI tool.
