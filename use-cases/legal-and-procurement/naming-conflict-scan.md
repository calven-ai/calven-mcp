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

## Advanced prompts

### Score each name on confusion factors

```
Score each candidate name on the factors a confusion analysis weighs, so I send only the strongest two to the trademark search. Use Calven MCP for the rivals' names, categories and where they sell.

FILL IN
- Candidates: [paste the candidate names with a line on what each names]
- Our category: [how we describe the product or feature]

CONTEXT
Marketing wants a decision this week and a full clearance search costs money per name. I want a structured first pass that a trademark lawyer would recognise, so the paid search starts with the two names most likely to survive.

FROM CALVEN
- Every tracked competitor with its description, categories and product names from the dossiers.
- Our positioning: market category and frame of reference.
- Which competitors we meet in the same deals, from the competitive intelligence dashboard, with n.

METHOD
- For each candidate against each close rival name, score five factors from 0 to 3: similarity in sight, in sound, in meaning; relatedness of what the names are used for; overlap in buyers and channels (we meet them in deals).
- Weight the factors, state the weights, and compute a total per candidate.
- Show how the ranking changes if sound weighs double, since buyers hear names on calls before they read them.
- If you can run code, build the scoring as a small table with formulas so I can change a weight.

OUTPUT
A ranked table with the nearest rival per candidate and the score breakdown, the two names to search, and one line per eliminated name on why.

GROUNDING
Rival names and categories come from the Universe, cited. Mark any name you know of that isn't tracked as "outside Calven, check in the search". Deal overlap rates carry n. This screens; it isn't a clearance or legal advice.
```

### Measure how close each name sounds

```
Compute how close each candidate name is to every rival and product name we track, by spelling and by sound. Use Calven MCP for the full list of names to compare against and the words customers already use.

FILL IN
- Candidates: [paste the candidate names]
- Threshold: [how close counts as too close, or leave blank for your suggestion]

CONTEXT
Eyeballing a list of 40 competitor names misses the near-misses: a swapped vowel, a homophone, a name that's a rival's product backwards. An edit-distance and phonetic pass catches those in seconds and gives me a number to put in the file.

FROM CALVEN
- Every tracked competitor, plus the product and feature names in their dossiers and battlecards.
- Our own product names and the naming rules in the messaging document.
- Customer quotes that use each candidate's root word, so I know if buyers already mean something else by it.

METHOD
- If you can run code, compute for each candidate and each name: normalised Levenshtein similarity, Jaro-Winkler similarity, and whether the Double Metaphone codes match. Without code, approximate and say so.
- Also test the root word alone and common suffixes (AI, IQ, ly, io) stripped.
- Flag any pair above the threshold on either measure, and any phonetic match.
- Check each candidate against our own naming rules and existing product names.

OUTPUT
A table per candidate: nearest five names with each score, flags, the customer meaning of the root word with a quote, and a pass or hold.

GROUNDING
Names come only from the Universe, cited. Scores are computed, labelled as such. Don't add names from your own knowledge without marking them "not tracked".
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
- What product and feature names do our tracked competitors use, in one list?
- Which competitors renamed or rebranded something in the last two years?
- What words do customers use for the job [name] is meant to describe?
- Does any persona canvas use "[word]" to mean something else?
- Which category terms do competitors use in their positioning that we avoid?
- Is "[name]" already the name of one of our own features or plans?
- Which competitors do we meet most in deals, so their names matter most in a screen?
