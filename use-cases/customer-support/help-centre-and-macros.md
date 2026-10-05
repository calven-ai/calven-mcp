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
