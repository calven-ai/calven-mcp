# Sales FAQs

**Team:** Product management · also sales enablement, product marketing, solutions engineering, customer support
**Impact:** Medium. The same twenty questions reach the PM every week. An FAQ answered from the product brief, with what we do not do, stops the interruptions and the overclaims.
**Prerequisites:** strategy documents approved (product brief, messaging objection handling). Better with vendor quotes and deal drivers (the questions reps actually get) and competitors tracked (battlecard objections).

## What the team is trying to do

Give sales one place with true answers to the questions prospects ask about the product: what it does, what it does not, integrations, security, packaging, how it compares. Done means an FAQ that reps and the AI tool can answer from, refreshed when the product changes. The product brief is the source; the FAQ is its question-shaped view.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the questions | What reps ask, what prospects ask | Rep discovery and caveat quotes, deal drivers in the Capability category, objections in messaging | Vendor quotes, deal drivers, messaging |
| 2 | Answer from the brief | True answers, including what we do not do | The product brief: capabilities, integrations, architecture, pricing and packaging, known weaknesses | Product brief |
| 3 | Add the competitive answers | "How do you compare with X" | Battlecard objection handling and talk track | Battlecard |
| 4 | Fact-check an existing FAQ | Find stale answers | Product changes and drift findings; claims register | Product changes, product drift findings, claims |
| 5 | Publish and maintain | In the enablement tool; refresh per release | Calven does not publish; the fact-check prompt is the refresh | |

## Recommended prompts

### Step 1 and 2: build the FAQ

```
Using Calven MCP, build the sales FAQ for [product].

CONTEXT
Reps ask the same questions every week. I want an FAQ answered from the product brief, honest about what we do not do.

PULL FROM THE UNIVERSE
- The questions reps ask and the caveats they give on calls, from rep quotes.
- Capability objections from deal drivers and the objection handling in our messaging.
- The product brief: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses.

BUILD
- Twenty questions grouped by topic (capabilities, integrations, security and architecture, packaging, comparisons, implementation), each with a three-line answer and the brief section it comes from.
- A "we do not do this" list from the known weaknesses, with the honest answer for each.

OUTPUT
The FAQ.

GROUNDING
Answer only from the product brief and messaging in the Universe and cite the section. Where the brief is silent, write "not in the brief; ask product" instead of answering.

[name the product]
```

### Step 3: the comparison answers

```
Using Calven MCP, add the competitive questions to the sales FAQ.

CONTEXT
Prospects ask how we compare with [competitor]. I want FAQ answers that match the battlecard.

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: objection handling, how we win, where we lose, talk track.
- The product brief's known weaknesses.

WRITE
- Five questions prospects ask about [competitor], each with the battlecard answer and the honest caveat where we lose.

OUTPUT
The five FAQ entries.

GROUNDING
Use only the battlecard and brief, cited. Do not claim capabilities the brief does not list.

[name the competitor]
```

### Step 4: refresh an existing FAQ

```
Using Calven MCP, fact-check this sales FAQ.

CONTEXT
Below is the FAQ as published. Our product changed since. I need every stale or wrong answer found.

PULL FROM THE UNIVERSE
- The product brief as published.
- Product changes in the last [window] and the drift findings on published documents.
- The claims register for the claims the FAQ makes.

CHECK
- Mark each answer correct, stale, overstated or not in the brief, with the fix.

OUTPUT
The FAQ annotated, then the list of answers to rewrite.

GROUNDING
Confirm only against the brief, changes and claims in the Universe, cited.

[paste the FAQ]
```

## Ad hoc questions

- Does our product do [capability]? What does the brief say?
- Which integrations does the product brief list?
- What does the brief say we do not do?
- What do reps say on calls when asked about [topic]?
- How should a rep answer "how do you compare with [competitor]"?
- Which questions came up as capability objections in lost deals this quarter?
- Is [claim] in the product brief?
- What changed in the product in the last 60 days?
- Which answers in our FAQ reference a document flagged as stale?
- What is in the [tier] plan?
- What is our honest answer on [known weakness]?
- What do we say when a buyer asks about [security topic]?
- Which questions came up on calls this month that we have no answer for?

## Good practice

- Start from the questions reps actually ask. Rep quotes and deal drivers hold them.
- Keep "not in the brief" answers. They tell the PM what the brief is missing.
- Refresh with the fact-check prompt after each release.
- Put the known weaknesses in the FAQ. Reps who know what we do not do stop losing deals on overclaims.

## Not covered today

- Publishing to the enablement tool or the wiki.
- Updating the product brief. The product intelligence agent and PMM do that in Calven.
