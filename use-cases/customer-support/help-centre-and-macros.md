# Help-centre articles and macros

**Team:** Customer support · also product marketing, technical writing
**Impact:** Medium. Every article and macro restates product facts. Written from the approved brief and checked against the claims register, they stay consistent with the website and with sales; written from memory, they drift within a quarter.
**Prerequisites:** strategy documents approved (product brief, messaging boilerplate). Better with own website and docs monitored (claims, product changes, drift findings) and call transcripts ingested (the words customers use for the problem).

## What the team is trying to do

Write and maintain the help-centre articles, FAQs and reply macros agents use dozens of times a day, in the company's approved words and the customer's vocabulary. Done means an article answers the question customers actually ask, every claim in it is true, and it is refreshed when the product changes. Support usually writes these from the last ticket and a screenshot, which is why they contradict the website.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick what to write | From ticket volume and gaps in the help centre | Which jobs and pains customers raise most, so the article matches real questions | Themes, quotes |
| 2 | Gather the facts | What the product does, how it works, limits | The product brief sections for the capability | Product brief |
| 3 | Use the customer's words | Title and intro in the vocabulary customers use | The phrases customers use for the problem, from calls | Quotes, messaging (customer language) |
| 4 | Draft | Article or macro | A draft from the brief, in the approved voice | Product brief, messaging (boilerplate) |
| 5 | Claim check | Make sure nothing is overstated | Each claim checked against the brief and the claims register | Product brief, claims |
| 6 | Publish | Load into the help centre | Calven does not help here | |
| 7 | Keep current | Refresh when the product changes | Product changes and the published documents they left stale | Product changes, drift findings |

## Recommended prompts

### Step 1 and 3: what to write and in whose words

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

### Step 2 and 4: draft an article

```
Using Calven MCP, draft a help-centre article on [capability].

CONTEXT
The article answers "[the question customers ask]". Readers are [admins / end users / engineers]. Under 400 words, task-oriented.

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
Use only the product brief for facts. Do not describe steps or screens the brief does not state; mark them "[confirm in product]" for me to fill.

[name the capability and the question]
```

### Step 5: claim check before publishing

```
Using Calven MCP, check every claim in this article or macro before I publish.

CONTEXT
Below is the draft. I need each product claim confirmed.

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

[paste the draft]
```

### Step 7: refresh after a release

```
Using Calven MCP, which help articles and macros need updating after recent product changes?

CONTEXT
We released this month. Below is the list of our article and macro titles.

PULL FROM THE UNIVERSE
- Product changes in the last 30 days with their summaries.
- Drift findings: published documents the changes left stale.

BUILD
- A table: product change, the articles or macros on my list it probably affects, what to change.

OUTPUT
The table with sources.

GROUNDING
Match on what the change record says. Where you cannot tell from the title whether an article is affected, say "check".

[paste the list of titles]
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

## Good practice

- Title articles in the customer's words, not the feature name. Search in the help centre works on what customers type.
- Mark anything the brief does not state as "[confirm in product]" rather than letting the AI tool fill it.
- Run the claim check on macros, not only articles. Macros are sent more often than articles are read.
- Refresh monthly against product changes. Drift findings tell you what went stale.
- Keep the AI tool's general product knowledge out. Articles that describe how "tools like ours" usually work are the ones that get screenshots in angry tickets.

## Not covered today

- Screenshots, step-by-step UI instructions and the help-centre platform. The brief states what the product does, not every screen.
- Publishing, versioning and article analytics.
- Ticket deflection numbers.
- Changing the brief. A wrong fact in the brief goes to the PMM.
