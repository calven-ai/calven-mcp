# Naming conflict scan

**Team:** Legal and procurement · also product marketing, brand and communications, product management
**Impact:** Medium. A product, feature or campaign name that echoes a competitor's product or a category term they own is the kind of conflict a trademark search finds late and marketing finds painful. The Universe already lists every tracked rival, their products, their categories and the terms they use, so the first screen takes minutes.
**Prerequisites:** competitors tracked (rows, dossiers, signals). Better with strategy documents approved (positioning for the category frame, messaging for naming and nomenclature).

## What the team is trying to do

Screen candidate names against what the company already knows about its market before spending on a clearance search, and give marketing three names that survive instead of one it is attached to. Done means each candidate marked clear, close to a rival's name or term, or in conflict with the company's own naming rules, with the source. The legal trademark search follows for the survivors. Without the Universe counsel searches registries for names that would have failed a five-minute look at the competitor list.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect candidates | Get at least three names from marketing with the intended use | Calven does not help here | |
| 2 | Screen against rivals | Compare each name with tracked competitors, their products, features and the terms they market | Competitor rows and descriptions, dossiers (positioning, product), signals mentioning product launches and names | Competitors, deep dive, competitive signals |
| 3 | Screen against the category | Check whether the name collides with the category frame or a term the market already uses for something else | Positioning (market category, frame of reference, alternatives), trends | Positioning, trends |
| 4 | Screen against our own rules | Check the name fits the company's naming and nomenclature | Messaging (naming and nomenclature, boilerplate) | Messaging |
| 5 | Screen against customer language | See whether customers already use the word for something else | Quotes and themes | Quotes, themes |
| 6 | Trademark search | Registries, common law, domains, social handles | Calven does not help here | |
| 7 | Decide and record | Pick, record the clearance, brief marketing | Calven does not help here | |

## Recommended prompts

### Step 2 and 3: the competitor and category screen

```
Using Calven MCP, screen these candidate names against our competitors and our category.

CONTEXT
Marketing proposes the names below for [a product, feature or campaign]. Before the trademark search I want to know which ones collide with a rival's name, product or term, or with how the market names our category.

PULL FROM THE UNIVERSE
- Every tracked competitor: name, description, categories, and the product and positioning sections of their dossiers.
- Competitive signals about product launches or renamed products.
- Our positioning: market category, frame of reference and competitive alternatives.

CHECK
- For each candidate: identical or close to a competitor's company, product or feature name (cite it); uses a term a rival markets as their own; collides with the category name or a frame we do not want.
- Verdict per candidate: clear in the Universe, close, or conflict.

OUTPUT
A table: candidate, verdict, what it collides with, source.

GROUNDING
Use only competitors, signals and positioning in the Universe and cite them. "Clear in the Universe" means no tracked conflict, not a cleared trademark; say so. Do not search the web.

[paste the candidate names and the intended use]
```

### Step 4 and 5: our own rules and customer language

```
Using Calven MCP, check these candidate names against our naming rules and our customers' language.

CONTEXT
The candidates below passed the competitor screen. I want to know whether they fit how we name things and whether customers already use the word for something else.

PULL FROM THE UNIVERSE
- Our messaging: naming and nomenclature, boilerplate, core one-liner.
- Customer quotes and themes that use any of the candidate words.

CHECK
- Fit with our naming rules: yes, no, with the rule it breaks.
- Customer usage: how customers use the word today, with a quote, and whether that meaning helps or confuses.

OUTPUT
The candidates ranked, with the reason and sources.

GROUNDING
Use only messaging and quotes in the Universe and cite them. Do not invent customer usage.

[paste the candidate names]
```

### Step 7: the clearance record for the name we picked

```
Using Calven MCP, write the record of the internal screen for the name "[name]".

CONTEXT
We picked "[name]" for [a product, feature or campaign] and the trademark search is next. I want a dated note of what we checked in the Universe, so the file shows the obvious conflicts were ruled out before the search.

PULL FROM THE UNIVERSE
- Every tracked competitor's name, description and categories.
- Competitive signals in the last twelve months about launches or renamed products.
- Our positioning: market category and frame of reference.
- Our messaging: naming and nomenclature.

BUILD
- What was screened: the competitor count, the signal window, the documents read, each with its version or date.
- The nearest matches found and why each was judged not a conflict.
- The naming rule the name satisfies.
- What this record does not cover: registries, common law, domains, handles.

OUTPUT
A half-page record for the clearance file.

GROUNDING
List only what the Universe returned, with dates and versions. "No tracked conflict" is the only verdict this record can give; say so in those words.

[name the chosen name and its use]
```

## Ad hoc questions

- Which tracked competitors have a product or feature called something like "[name]"?
- Does any competitor use "[term]" in their positioning?
- What category name and frame of reference does our positioning use?
- What are our naming rules in the messaging document?
- Do customers use the word "[word]" on calls, and for what?
- Has any competitor launched or renamed a product in the last six months?
- Which competitors are in the "[category]" category?
- Is "[name]" close to any competitor name in the Universe?

## Good practice

- Screen three or more names at once. The point is to send survivors to the trademark search, not to defend one.
- Say what the name is for. A feature name and a campaign name collide with different things.
- Read "clear in the Universe" as a first screen only. The registry search still runs.
- Keep the table. It documents that the obvious conflicts were checked before the search.

## Not covered today

- Trademark registries, common-law search, domain and social handle availability, foreign marks. That is the clearance search, done by counsel or outside firm.
- Competitors not tracked in Calven and companies outside the category.
- Registering or recording the mark.
