# Talk track audit


The talk track you trained on has drifted since the week after training, and you want to know where. You get a scored audit: each section marked used, unused or contradicted, the objections it doesn't cover, and the retraining list. Calven compares what reps actually say with what buyers actually raise, instead of surveying reps about what they think they say.

## Prompts

### Audit the talk track against real calls

```
Using Calven MCP, audit our talk track against what reps say and what buyers raise.

FILL IN
- Talk track: [paste the talk track]
- Window: [time window, e.g. last quarter]

CONTEXT
The talk track is the one reps are trained on, section by section. I want to know which sections reps actually use, which answer what buyers say now, and which are silent.

PULL FROM THE UNIVERSE
- The messaging document (pillars, value propositions by persona, objection handling) so the talk track is checked against the approved version.
- Pillar pull-through in rep calls for the window from the messaging dashboard, and vendor quotes grouped by category.
- Customer objections and pains raised on calls in the window, with frequency, and the language gaps the messaging dashboard reports.

CHECK
- Per section: used by reps (with examples), unused, or contradicted (reps say something else).
- Per section: whether it answers an objection or pain buyers raise, and how often that comes up.
- Objections and pains with no section at all.

OUTPUT
A table: section · used? · answers what? · evidence · verdict (keep, retrain, rewrite, add).

GROUNDING
Cite every quote and every number with its n and window. Do not infer use from absence; if no vendor quotes exist for a section, say "no evidence recorded".
```

### See which lines show up in wins

```
Using Calven MCP, show me which talk track lines show up in won deals and which in lost ones.

FILL IN
- Talk track: [paste the talk track section headings]
- Window: [time window, e.g. last two quarters]

CONTEXT
I want to know what buyers credit when we win and what they fault when we lose, so the talk track leads with what works.

PULL FROM THE UNIVERSE
- Deal drivers for the window, by direction (helped, hurt), rank and category (Competitive, Capability, Experience, Commercials), with the evidence quote.
- The win/loss dashboard's top win drivers and top loss drivers.

BUILD
- The five drivers that decided wins and the five that decided losses, each with deals (n) and a buyer quote.
- For each, the talk track section that should carry it, and whether it does today.

OUTPUT
Two lists with the mapping to the talk track.

GROUNDING
Use dashboard counts with n and window. Quote buyers verbatim. Do not rank by your own count of rows.
```

### Flag claims that went stale

```
Using Calven MCP, check the talk track for claims that are wrong, stale or unsupported.

FILL IN
- Talk track: [paste the talk track]

CONTEXT
Every product claim, integration, number and comparison in the talk track needs checking.

PULL FROM THE UNIVERSE
- The product brief, including known weaknesses.
- The claims register, with proof status.
- Product changes in the last 90 days and the documents they left stale.

CHECK
- Mark each claim confirmed, wrong, stale, or unsupported, with the source.

OUTPUT
The talk track annotated inline, then the list of lines to stop saying.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief".
```

### Turn the audit into a retraining plan

```
Using Calven MCP, turn this audit into a retraining plan.

FILL IN
- Audit: [paste the scored audit]

CONTEXT
I need the sessions, in priority order, with the evidence from the audit to show reps.

PULL FROM THE UNIVERSE
- The approved line for each section marked retrain or rewrite, from the messaging document.
- The buyer quotes behind each objection marked add.

BUILD
- Up to four sessions, each: topic, why (the evidence), the approved lines to drill, the buyer quotes to play back, the certification question.

OUTPUT
The plan.

GROUNDING
Approved lines come from the messaging document only. Sections marked add go to PMM as gaps, not into a session.
```

## Ad hoc questions

- Which pillar do reps say least on calls?
- What do reps say instead of our approved line on "[objection]"?
- Which objections came up on more than five calls this quarter?
- Where does our messaging use words customers do not?
- Which proof points do buyers actually repeat back?
- What decided our losses last quarter, in the buyer's words?
- Is "[claim]" in the product brief, and is it still true after the last release?
- Which competitor comes up most on calls, and does the talk track address them?
- Show me every discovery question reps asked last month.
- What did buyers say about pricing on calls this quarter?
- Which talk track section has no customer evidence behind it?
