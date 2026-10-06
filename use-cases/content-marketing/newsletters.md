# Newsletters


An issue is due and the target persona needs a reason to read it: one idea on something moving in the market, one piece of customer evidence, what changed in the product and what to read next. You walk away with an issue that's on-message, current, in the persona's words and sent on time. Calven helps most with the first section: a point of view instead of a summary.

## Prompts

### Plan the issue

```
Using Calven MCP, plan this month's newsletter for the persona below.

FILL IN
- Persona: [persona]
- Window: [time window, e.g. last month]

CONTEXT
Sections: one lead idea, one customer line, what's new in the product, three things to read. Under 400 words. Reader: the persona.

PULL FROM THE UNIVERSE
- Trends and opportunities that changed status or severity in the window, with their "so what".
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
```

### Write the issue from the plan

```
Using Calven MCP, write the newsletter issue from this plan.

FILL IN
- Persona: [persona]
- Plan: [paste the issue plan]
- Reading list: [paste the reading list]

CONTEXT
Voice: a peer writing to the persona, plain, no hype. Subject line under 50 characters.

PULL FROM THE UNIVERSE
- The persona's canvas: messaging hooks and how they talk.
- Our messaging for the one product mention.

WRITE
- Subject line and preview text.
- The lead: our take on the idea in 120 words, in the persona's words.
- The customer line, verbatim.
- What's new, two sentences per change.
- Three things to read with one line each (from the reading list).
- One CTA.

OUTPUT
The issue in plain text, with sources.

GROUNDING
Use only the plan, the canvas and the messaging in the Universe and cite them. Do not add claims the product brief does not support.
```

### Check the issue before it goes out

```
Using Calven MCP, check this newsletter before it goes out.

FILL IN
- Persona: [persona]
- Contacts: [number of contacts it goes to]
- Issue: [paste the issue]

CONTEXT
The issue goes to the contacts above tomorrow.

PULL FROM THE UNIVERSE
- The product brief and product changes, for the what's new section.
- Our positioning, for the lead.
- The persona's canvas, and run the persona review.

CHECK
- Every product claim: correct, wrong or stale.
- The lead: on-positioning or drifting.
- The persona's reaction: would they read past the first line, and which line would they forward.

OUTPUT
The issue annotated, then the three changes to make.

GROUNDING
Judge only against the Universe and cite. If it is clean, say so.
```

## Advanced prompts

### Design a subject line test with real power

```
Design a subject line test that can actually detect a winner: shortlist the candidates with our personas first, then size the test properly. Use Calven MCP for the personas, their words and a persona review of the candidates.

FILL IN
- Issue: [paste the issue's lead or plan]
- Candidates: [paste five to eight subject lines, or write "draft them"]
- List size: [subscribers per send]
- Baseline: [your usual open or click rate]

CONTEXT
We A/B test every issue and the winner changes every time, which means we're mostly measuring noise. I want fewer, better tests.

FROM CALVEN
- The personas on the list, with their canvases: goals, pains, hooks.
- How those personas phrase the issue's topic, from customer quotes.
- A persona review of each candidate subject line.

METHOD
- If I asked you to draft, write eight candidates across distinct strategies: the buyer's own phrase, a number, a question, a contrarian claim.
- Use the persona review to cut to the two most different strong candidates. Explain why.
- Run a power calculation: for my list size and baseline, what's the smallest lift a 50/50 test can detect at 80 percent power and 5 percent significance? If you can run code, show the calculation.
- If the detectable lift is bigger than any lift we'd realistically see, say so and propose the alternative: test on clicks, pool the same test across three issues, or stop testing subject lines.
- Write the test plan: metric, split, duration, the decision rule, and what we learn whichever wins.

OUTPUT
The two finalists with the review findings, the power calculation, the test plan, and a one-line verdict on whether this test is worth running.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Persona preferences come from the review and canvases, cited; they shortlist, the test decides.
```

### Trace issues to pipeline with a lag model

```
Find out which newsletter issues and topics moved pipeline, by lining up each send against the opportunities that opened in the weeks after. Use Calven MCP for the deals that opened, their source and the accounts behind them.

FILL IN
- Issue data: [attach a CSV: issue date, topic, sends, opens, clicks, and clicking contacts' company domains if you have them]
- Window: [window, e.g. last 12 issues]
- Lag: [how long after a send you'd credit an opportunity, e.g. 30 days, or write "test 14, 30 and 60"]

CONTEXT
The newsletter is judged on opens because nobody can connect it to revenue. I want a defensible read on which issues mattered, even if it's directional.

FROM CALVEN
- CRM deals opened in the window with lead source, opened date, account, segment and amount.
- CRM accounts for the clicking domains, with ICP tier, if I gave domains.
- Themes from customer calls for each issue's topic, to see if the topic was live with buyers at the time.

MODEL
- For each issue, count opportunities opened within the lag window, overall and from accounts that clicked, with pipeline amount.
- Compare against the baseline rate of new opportunities in weeks with no send.
- If you can run code, fit a simple distributed lag regression of weekly new opportunities on clicks, and test the three lags to see which fits best.
- Group by topic: which topics go with more pipeline per send? Check whether those topics were also rising themes on calls.
- Name the limits: other campaigns in the same weeks, small numbers, clicks that aren't buyers.

OUTPUT
A table per issue (clicks, opportunities in window, pipeline, lift over baseline), the topic ranking, the best-fitting lag, and three topics for next quarter's issues.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Call it attribution evidence, not proof, and never count a deal unless its dates fall inside the window.
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
- Which customer quote from this month would make a reader stop scrolling?
- What changed in the market this month that our positioning has a view on?
- Which persona on our list has the least content written for their stage?
- What's a counter-intuitive finding from our win/loss data I could lead an issue with?
- Which competitor move this month is worth a paragraph, and what's our take?
- Which theme from calls has risen for three months straight?
- What does [persona] say they read every week, from their canvas?
