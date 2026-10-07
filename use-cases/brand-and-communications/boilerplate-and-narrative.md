# Boilerplate and company narrative


Someone needs the company description again: the one-liner, the 50-word boilerplate, the 150-word about, the one-page narrative, or the version for press, investors, candidates or partners. You get the whole set, each with a version date, all saying the same category and the same three pillars. Calven derives every variant from the positioning, so each audience gets a different emphasis without a different story.

## Prompts

### Write the company description at four lengths

```
Using Calven MCP, write our company description at four lengths.

FILL IN
- Repositioning date: [date]

CONTEXT
We repositioned on the date given. I need the one-liner, a 50-word boilerplate, a 150-word about and a one-page narrative, all from the same story.

PULL FROM THE UNIVERSE
- Our positioning: positioning statement, category and frame of reference, unique attributes, value themes, best-fit customers, "why now".
- Our messaging: core narrative and one-liner, value pillars, the current boilerplate.
- The product brief overview.

WRITE
- The one-liner (under 15 words).
- The boilerplate (50 words): what we are, for whom, what changes, the category.
- The about (150 words): adds the three pillars and the "why now".
- The narrative (one page): the problem, the shift, what we built, who it is for, the proof, where we are going as the positioning states it.

OUTPUT
The four texts with the document versions they derive from.

GROUNDING
Use only the positioning, messaging and brief in the Universe and cite them. Do not add founding dates, customer counts, funding or awards unless they are in the documents.
```

### Write the boilerplate for one audience

```
Using Calven MCP, write the variant of our boilerplate for the audience below.

FILL IN
- Audience: [press / investor / candidate / partner]

CONTEXT
Same story, different emphasis. Press: the category and the proof. Investors: the market shift and the "why now". Candidates: the mission, the pillars and what customers say. Partners: who we fit and how we complement. 80 words each.

PULL FROM THE UNIVERSE
- Our positioning and messaging.
- For investors: the trends and opportunities with their "so what".
- For candidates: two customer quotes approved for marketing use.
- For partners: the ICP summary and the competitive alternatives section.

WRITE
- The variant, keeping the one-liner and category identical to the master.
- A note on what shifted in emphasis and what stayed.

OUTPUT
The variant and the note, with sources.

GROUNDING
Use only the Universe and cite. The category, one-liner and pillars do not change between variants.
```

### Check the set of descriptions

```
Using Calven MCP, check this set of company descriptions.

FILL IN
- Set: [paste the one-liner, boilerplate, about, narrative and the audience variants]

CONTEXT
The set holds the one-liner, boilerplate, about, narrative and the audience variants.

PULL FROM THE UNIVERSE
- Our positioning and messaging.
- The product brief and claims register.

CHECK
- Every text uses the same category, one-liner and pillars.
- Every factual claim: correct, wrong, stale or unverified.
- Any line that drifts from the positioning.

OUTPUT
A table per text with verdicts and fixes, with sources.

GROUNDING
Judge only against the Universe and cite. If a text is clean, say so.
```

## Advanced prompts

### Test which description survives retelling

```
Test which version of our company description survives being retold, the way it gets passed between buyers, journalists and new hires. Use Calven MCP for the personas who retell it and the positioning it must keep.

FILL IN
- Versions: [paste two to four candidate descriptions or boilerplates]

CONTEXT
Nobody repeats a boilerplate word for word. A journalist paraphrases it, a champion explains us to their boss, a new rep pitches it on day three. The version that survives that chain is the one to ship.

FROM CALVEN
- Our positioning: category, frame of reference, unique attributes and value themes.
- Three personas who'd retell it, with their canvases: a buyer, a stakeholder and a user.
- A persona review of each version.

SIMULATE
- For each version, run a three-step chain. The buyer reads it once and explains us to the stakeholder in two sentences from memory. The stakeholder repeats it to the user in one sentence. The user says what we do in five words.
- Write each retelling in the persona's voice, shaped by their canvas: what they care about, what they'd drop.
- Score the last sentence against the positioning: category kept, main difference kept, buyer named, anything wrong added.

OUTPUT
A table per version: the three retellings, the fidelity score and what fell off first. Then the winning version with one edit that protects the part that falls off.

GROUNDING
Retellings are your simulation, shaped by the canvases and the review; cite the canvas field behind each drop. Don't add facts to a retelling that aren't in the version or the positioning.
```

### Stress-test the narrative as an investor

```
Stress-test our company narrative the way a skeptical investor reads it in a data room. Use Calven MCP for the positioning, the market evidence and the customer proof behind each claim.

FILL IN
- Narrative: [paste the about page, investor description or long-form narrative]
- Reader: [investor type, e.g. growth-stage lead, strategic acquirer, board member]

CONTEXT
The long narrative goes to investors, partners and senior hires, and each reads it hunting for the claim that doesn't hold. I'd rather find it first.

FROM CALVEN
- Our positioning: why now, market category, unique attributes and proof points.
- Trends and market opportunities on record, with sizing and horizon.
- Customer quotes tagged Quantified outcome, and ICP share of wins from the ICP dashboard, with n.

RED-TEAM
- Read the narrative as the reader, sentence by sentence, and mark each claim: supported (cite it), plausible but unproven, or contradicted by the Universe.
- Write the ten questions this reader would ask in the meeting, hardest first.
- Answer each from the Universe where you can, and mark the ones only the founder can answer.
- Rewrite the two weakest paragraphs so every claim is supported or honestly framed.

OUTPUT
The narrative annotated, the ten questions with answers or gaps, and the two rewritten paragraphs.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent traction, customer counts or market size the Universe doesn't hold; mark them as founder inputs.
```

## Ad hoc questions

- What is our positioning statement, word for word?
- What category do we claim and what is the frame of reference?
- What are our three value pillars?
- What is the current boilerplate on record and its version?
- What is the "why now" trend our positioning names?
- Which customer quotes are approved for a careers page?
- Who do we fit best, for a partner description?
- Does the product brief state a founding date, customer count or anything else a boilerplate often includes?
- Is this about text on-positioning: [paste]
- Which word in our boilerplate do customers never use on calls?
- Does our boilerplate name the category the way our positioning does?
- Which proof point is strong enough to close the boilerplate?
- How would [persona] describe what we do in one sentence, going by their canvas?
- What changed in the positioning since the boilerplate was last updated?
- Which competitors describe themselves with the same category words we use?
