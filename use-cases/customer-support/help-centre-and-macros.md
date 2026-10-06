# Help-centre articles and macros


Your help articles and macros get written from the last ticket and a screenshot, which is why they contradict the website. You get articles that answer the question customers actually ask, in the approved words and the customer's vocabulary, with every claim checked and a refresh when the product changes. Calven supplies the brief, the customer phrasing and the product changes.

## Prompts

### Find the articles customers need most

```
Using Calven MCP, tell me which help articles customers would use most and how they phrase the question.

CONTEXT
I am planning next month's help-centre work. I have ticket volume by category; I want the call-side view and the customer vocabulary.

PULL FROM THE UNIVERSE
- Customer-voice themes in the jobs and pains categories, with mentions.
- The quotes under the top five, for the words customers use.

BUILD
- A table: theme, mentions, the question customers are really asking in their words, a suggested article title.

OUTPUT
The table with sources.

GROUNDING
Use only themes and quotes in the Universe. Do not invent questions; if a theme has no quotes, say so.
```

### Draft a help-centre article

```
Using Calven MCP, draft a help-centre article on the capability below.

FILL IN
- Capability: [capability]
- Question: [the question customers ask]
- Readers: [admins, end users or engineers]

CONTEXT
The article answers the question. Under 400 words, task-oriented, written for the readers.

PULL FROM THE UNIVERSE
- The product brief: the capability, how it works, limits, related integrations.
- The customer phrases for this job, from calls.
- Our boilerplate for how we describe the product.

WRITE
- A title in the customer's words.
- What it does, how to use it, limits, related capabilities.

OUTPUT
The article, with the brief section behind each factual paragraph.

GROUNDING
Use only the product brief for facts. Do not describe steps or screens the brief does not state; mark them "confirm in product" for me to fill.
```

### Check every claim before publishing

```
Using Calven MCP, check every claim in this article or macro before I publish.

FILL IN
- Draft: [paste the draft]

CONTEXT
I need each product claim in the draft confirmed.

PULL FROM THE UNIVERSE
- The product brief.
- The claims register: assertions our published content already makes and their status.

CHECK
- Mark each claim correct, overstated, stale or not in the brief.
- Flag any claim that already exists in the register with a concern.

OUTPUT
The draft annotated inline, then the corrected version.

GROUNDING
Confirm only against the brief and the claims in the Universe. "Not in the brief" is an answer.
```

### Find articles stale after a release

```
Using Calven MCP, which help articles and macros need updating after recent product changes?

FILL IN
- Titles: [paste the list of article and macro titles]

CONTEXT
We released this month. The titles are our articles and macros.

PULL FROM THE UNIVERSE
- Product changes in the last 30 days with their summaries.
- Drift findings: published documents the changes left stale.

BUILD
- A table: product change, the articles or macros on my list it probably affects, what to change.

OUTPUT
The table with sources.

GROUNDING
Match on what the change record says. Where you cannot tell from the title whether an article is affected, say "check".
```

## Advanced prompts

### Walk the article as three first-time readers

```
Run a cognitive walkthrough of a help article: three different readers follow it step by step, and you log every point where they'd get stuck or open a ticket. Use Calven MCP for who the readers are and how they describe the problem.

FILL IN
- Article: [paste the article]
- Task: [what the reader is trying to get done]

CONTEXT
An article can be accurate and still fail. If the reader is an admin setting it up, an end user who just wants the result, or an engineer wiring an integration, they read the same page differently. I want to know where each one drops off.

FROM CALVEN
- The user and buyer personas with their canvases: goals, jobs, pains, the words they use.
- Customer quotes about the task, tagged Usability or Onboarding.
- The product brief section the article describes.
- A persona review of the article.

METHOD
- Pick the three personas who'd most likely land on this article. For each, walk the steps in order and answer four questions per step: do they know what to do, can they find it, do they understand the result, do they know they're done?
- Log every failure with the step, the persona, the reason and the ticket it would create.
- Check each step's facts against the brief.

OUTPUT
A step by persona grid of passes and failures, the top five fixes in order of tickets avoided, and the revised article.

GROUNDING
Persona reactions come from the canvases, quotes and review, cited; mark anything else as your extrapolation. Facts in the revision stay inside the brief. Don't invent a UI step the article doesn't describe.
```

### Rank the articles to write by deflection

```
Model which help articles are worth writing next by the tickets they'd deflect, and find the break-even for each. Use Calven MCP for how often each topic comes up on calls and which topics a product change just made urgent.

FILL IN
- Ticket counts: [attach ticket volume by topic or tag for the last quarter]
- Handle time: [average handle time per ticket, by topic if you have it]
- Candidate articles: [paste the list of articles you're considering, or write "suggest"]

CONTEXT
The backlog has thirty article ideas and capacity for six this month. Volume alone favours the obvious ones. I want the six that save the most time, including the ones calls say are coming.

FROM CALVEN
- Customer themes with mentions and momentum, to see what's rising before it shows in tickets.
- Product changes in the last 60 days and the help articles they left stale.
- The product brief sections each candidate would draw on, to check it can be written from approved facts.

MODEL
- For each candidate: monthly tickets on the topic, a deflection rate range (state it), handle time saved, writing and upkeep cost, and a momentum boost if the theme is rising on calls.
- Compute hours saved per month and the months to break even. If you can run code, build it as a spreadsheet and run a sensitivity on deflection rate.
- Flag any candidate the brief can't support.

OUTPUT
A ranked table (article, tickets, deflection range, hours saved, break-even, momentum, brief coverage), the top six, and the assumption that most changes the ranking.

GROUNDING
Label every number as Calven (cited, with n), mine (tickets, handle time), or your assumption (deflection rate). Don't invent a ticket count.
```

## Ad hoc questions

- What are the top five questions customers ask about [feature], in their words?
- Draft a two-line macro answering "[question]" from the product brief.
- Is "[sentence from a macro]" still true?
- Which of our published claims have a concern flagged?
- What changed in the product this month that an article might get wrong?
- What is the approved boilerplate for the product?
- How do customers describe [pain] on calls?
- Which capability has the most customer confusion themes?
- Rewrite this macro in plain language, keeping only claims the brief supports: [paste]
- What limits does the brief state for [feature]?
- Which customer themes have no help article that covers them?
- What word do customers use for [feature] that our articles never use?
- Which known weaknesses in the brief should an article state upfront?
- Which product changes this quarter have drift findings still open?
- What does the brief say about [integration] setup that a macro might get wrong?
- Which onboarding pains come up most on calls with new customers?
