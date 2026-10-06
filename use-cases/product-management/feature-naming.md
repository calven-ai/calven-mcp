# Feature naming


You're naming a feature, module or plan and want customers to recognise what it does. You get a shortlist with the customer evidence behind each candidate, fitted to the company's naming conventions and checked for collisions with rivals. Calven pulls the candidates from your customers' own words.

## Prompts

### Propose names from customers' words

```
Using Calven MCP, propose names for the feature below from our customers' words.

FILL IN
- Feature: [feature]
- What it does: [what it does]

CONTEXT
I want names customers would understand on first read, consistent with how we name things, and distinct from competitors.

PULL FROM THE UNIVERSE
- Customer quotes and themes about the problem and the job the feature serves: the nouns and verbs they use.
- Our product brief and the naming conventions in our messaging.
- The product and feature names in our tracked competitors' dossiers.

BUILD
- Eight candidates, each with the customer phrase it comes from, the convention it follows, and any collision with a competitor name.
- The three you would shortlist and why.

OUTPUT
The candidate table and the shortlist.

GROUNDING
Use only customer language and competitor names from the Universe, cited. Do not invent customer phrases. Flag collisions you cannot check because the dossier is silent.
```

### Test the shortlist as the persona

```
Using Calven MCP, test these feature names as the persona below.

FILL IN
- Persona: [persona]
- Names: [paste the three names with descriptions]

CONTEXT
The names are three candidates, each with a one-line description as it would appear in the product. I want to know which the persona understands without the description.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the list.

REACT
- For each name: what the persona thinks it does before reading the description, and whether that matches.
- The one they would pick, and the one that sounds like a competitor.

OUTPUT
The verdict per name.

GROUNDING
React only from the canvas. Do not invent preferences the persona profile does not support.
```

### Check whether an existing name works

```
Using Calven MCP, check whether the feature name below works.

FILL IN
- Name: [name of the feature]

CONTEXT
We shipped the feature under this name last quarter. Support says customers do not understand it.

PULL FROM THE UNIVERSE
- Customer quotes that mention the name or describe the capability without using it.
- Competitor names close to it.

CHECK
- How customers refer to the capability in their own words.
- Whether any competitor uses a similar name.

OUTPUT
A short read and two alternatives from the customer's vocabulary.

GROUNDING
Use only quotes and dossiers in the Universe, cited.
```

## Advanced prompts

### Run a naming tournament with your personas

```
Run a pairwise tournament between my candidate names, judged by our personas, and rank them with a proper model. Use Calven MCP for the judges and the words customers use.

FILL IN
- Candidates: [paste five to ten candidate names]
- Feature: [one line on what it does]
- Personas: [buyer and user personas who'll see the name]

CONTEXT
Asking "which name do you like" gets you the clever one. Forced choices between pairs, judged on whether the name says what the feature does, get you the one people understand on first read.

FROM CALVEN
- The personas' canvases: jobs, pains and messaging hooks, for their language.
- Quotes where customers describe this job or capability, for their vocabulary.
- A persona review of the feature description written with each of the top two names.

METHOD
- For every pair of names, have each persona pick the one that better tells them what the feature does without explanation, with a one-line reason in their voice.
- Score with a Bradley-Terry model. If you can run code, fit it and give each name a strength with an interval. Otherwise rank by win share.
- Break near-ties on how close each name sits to words customers use, citing the quotes.
- Run the persona review on the top two and report the findings.

OUTPUT
A ranked table: name, strength, win share by persona, the closest customer phrase, review findings. Then the pick in two lines.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Persona choices trace to the canvas, quotes or review. Don't credit a customer phrase nobody said.
```

### Red-team the name as a rival rep

```
Attack my shortlisted names the way a competitor's sales rep would, and tell me which survive. Use Calven MCP for the competitors' product names, their talk tracks and how buyers already use the words.

FILL IN
- Names: [paste two to four shortlisted names]
- Feature: [one line on what it does]
- Competitors: [the competitors we meet most]

CONTEXT
A name lives in deals, not in the naming doc. If a rival rep can twist it into a weakness in one sentence, or a buyer mixes it up with theirs, it costs us.

FROM CALVEN
- Each competitor's dossier: product, module and feature names, and their positioning.
- Their battlecards: talk track, landmines, objection handling.
- Quotes where customers use each name's words, and in what sense.

RED-TEAM
- For each name, write the competitor rep's best one-liner against it, in the style of their talk track.
- Check collisions: names that match or sound like a competitor's product or feature, and the confusion a buyer would have.
- Check meaning drift: places where customers already use the word for something else.
- Score each name for attack surface and collision risk, 1 to 5 each, with the reason.

OUTPUT
A table per name with the attack, collisions, meaning drift and scores, then the survivor and the one change that would make it stronger.

GROUNDING
Label every score as your judgement and every collision or quote as Calven (cited). Don't invent a competitor feature name; if the dossier doesn't list one, say "not in the dossier".
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
- What words do buyers in lost deals use for [capability] that buyers in won deals don't?
- Which of our feature names never appear in customer quotes?
- What do our reps call [capability] on calls, and does it match the product brief?
- Which feature names in [competitor]'s dossier start with the same verb as "[name]"?
- Does "[name]" already appear in any of our claims or positioning?
- Which customer phrases for [job] show up in more than one segment?
