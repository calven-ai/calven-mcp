# Naming conflict scan


Marketing has a shortlist of names and you'd rather not pay for a clearance search on one that fails a five-minute look at the competitor list. You get each candidate marked clear, close to a rival's name or term, or in conflict with our own naming rules, with the source, so marketing ends up with three survivors instead of one favourite. Calven already lists every tracked rival, their products and the terms they use; the legal trademark search follows for the survivors.

## Prompts

### Screen names against competitors and the category

```
Using Calven MCP, screen these candidate names against our competitors and our category.

FILL IN
- Candidate names: [paste the candidate names]
- Intended use: [a product, feature or campaign]

CONTEXT
Marketing proposes the candidate names for the intended use. Before the trademark search I want to know which ones collide with a rival's name, product or term, or with how the market names our category.

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
```

### Check names against our rules and customer language

```
Using Calven MCP, check these candidate names against our naming rules and our customers' language.

FILL IN
- Candidate names: [paste the candidate names]

CONTEXT
The candidates passed the competitor screen. I want to know whether they fit how we name things and whether customers already use the word for something else.

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
```

### Write the clearance record for the chosen name

```
Using Calven MCP, write the record of the internal screen for the chosen name below.

FILL IN
- Name: [the chosen name]
- Intended use: [a product, feature or campaign]

CONTEXT
We picked the name for the intended use and the trademark search is next. I want a dated note of what we checked in the Universe, so the file shows the obvious conflicts were ruled out before the search.

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
