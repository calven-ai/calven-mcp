# Feature naming

**Team:** Product management · also product marketing, design
**Impact:** Medium. A name that uses the customer's words gets understood on the first read; a name that collides with a competitor's confuses the buyer and the search results. Calven holds both the customer's vocabulary and the competitors' product names.
**Prerequisites:** call transcripts ingested (quotes, themes), competitors tracked (dossiers with product and feature names). Strategy documents approved for the naming conventions (portfolio messaging: naming and nomenclature).

## What the team is trying to do

Name a feature, module or plan so that customers recognise what it does, it fits the company's naming conventions, and it does not echo a rival. Done means a shortlist with the customer evidence behind each candidate and the competitor collisions checked.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the customer's words | How customers describe the problem and the thing | Quotes and themes on the topic; persona jobs to be done | Quotes, themes, persona canvas |
| 2 | Check conventions | Fit with existing product and feature names | The product brief and the portfolio messaging's naming and nomenclature | Product brief, messaging |
| 3 | Check collisions | Names competitors already use | Competitor dossiers: product, feature comparison, positioning and messaging | Competitor deep dive |
| 4 | Shortlist and test | Candidate names with rationale; test with personas | Persona review on the candidate list in context | `review_against_personas` |
| 5 | Trademark and domain checks | Legal clearance | Calven does not help here | |

## Recommended prompts

### Step 1 to 3: the naming shortlist

```
Using Calven MCP, propose names for [feature] from our customers' words.

CONTEXT
[feature] does [what it does]. I want names customers would understand on first read, consistent with how we name things, and distinct from competitors.

PULL FROM THE UNIVERSE
- Customer quotes and themes about the problem and the job [feature] serves: the nouns and verbs they use.
- Our product brief and the naming conventions in our messaging.
- The product and feature names in our tracked competitors' dossiers.

BUILD
- Eight candidates, each with the customer phrase it comes from, the convention it follows, and any collision with a competitor name.
- The three you would shortlist and why.

OUTPUT
The candidate table and the shortlist.

GROUNDING
Use only customer language and competitor names from the Universe, cited. Do not invent customer phrases. Flag collisions you cannot check because the dossier is silent.

[name the feature and what it does]
```

### Step 4: test the shortlist with the persona

```
Using Calven MCP, test these feature names as [persona].

CONTEXT
Below are three candidate names, each with a one-line description as it would appear in the product. I want to know which the persona understands without the description.

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review on the list.

REACT
- For each name: what the persona thinks it does before reading the description, and whether that matches.
- The one they would pick, and the one that sounds like a competitor.

OUTPUT
The verdict per name.

GROUNDING
React only from the canvas. Do not invent preferences the persona profile does not support.

[paste the three names with descriptions]
```

### Review mode: check an existing name

```
Using Calven MCP, check whether the name "[name]" works.

CONTEXT
We shipped [name] last quarter. Support says customers do not understand it.

PULL FROM THE UNIVERSE
- Customer quotes that mention [name] or describe the capability without using it.
- Competitor names close to it.

CHECK
- How customers refer to the capability in their own words.
- Whether any competitor uses a similar name.

OUTPUT
A short read and two alternatives from the customer's vocabulary.

GROUNDING
Use only quotes and dossiers in the Universe, cited.

[name the feature]
```

## Ad hoc questions

- What do customers call [capability] on calls?
- Which verbs do customers use for [job to be done]?
- Does any competitor have a feature called [name]?
- What are our naming conventions, according to the messaging document?
- What are the product and module names in [competitor]'s dossier?
- How would [persona] read the name "[name]"?
- Which existing feature names in the product brief would [name] sit next to?
- Does any theme or quote already use "[name]" to mean something else?
- Run the persona review on this feature description with the name "[name]": [paste]

## Good practice

- Start from quotes, not from a brainstorm. The customer's noun is usually the name.
- Check every candidate against the dossiers of all Tier 1 competitors, not one.
- Test names without their descriptions. If the persona needs the description, the name fails.
- Keep the shortlist to three before legal review.

## Not covered today

- Trademark, domain and app store checks.
- Search volume for the name. The SEO tooling owns that.
