# Technical objections

**Team:** Solutions engineering · also account executives, customer success
**Impact:** High. "It will not scale", "it will not integrate", "security will not sign off" end evaluations, and the answer that worked in the last deal lives with the SE who gave it.
**Prerequisites:** product brief approved, win/loss surveys running, call transcripts ingested. Better with competitors tracked, own site and docs monitored.

## What the team is trying to do

Answer the technical objection with the approved product truth and with evidence from buyers who raised the same concern and bought, and say plainly when the objection is correct. Done means a response the SE can send in writing that a technical buyer forwards to their architect without it coming back. Without the company's own record, every SE answers differently and the honest no arrives too late.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Name the concern | What is really being asked: capability, integration, scale, security, migration | The persona's objections and jobs to be done; how buyers phrased it on calls | Persona canvas, quotes (Objection) |
| 2 | Find the truth | What the product does, how, and what it does not | Product brief: capabilities, integrations, technical architecture, known weaknesses; recent changes | Product brief, product changes |
| 3 | Judge the weight | Did this objection decide deals | Deal drivers mentioning it, with rank; product feedback on lost deals | Deal drivers, CRM deals |
| 4 | Find the proof | A buyer who raised it and bought; how the winning SE answered | Quotes from those deals; vendor quotes tagged objection handling or caveat | Quotes, vendor quotes |
| 5 | Handle the competitive version | "[Competitor] does this natively" | Feature comparison, bullshit detector, "they say, you say" | Deep dive, battlecard |
| 6 | Answer | Live or in writing | A drafted response with the brief sections cited | Product brief |
| 7 | Report the gap | An objection the brief cannot answer | Calven does not help here beyond confirming the brief is silent; the gap goes to product | |

## Recommended prompts

### Step 1 to 6: answer one technical objection

```
Using Calven MCP, help me answer a technical objection in [deal].

CONTEXT
[Contact], a [persona] at [account], said: "[the objection]". [Competitor] claims to handle it, if relevant. I want the honest answer, in writing, for their architect.

PULL FROM THE UNIVERSE
- The product brief sections on this topic: capabilities, integrations, technical architecture, known weaknesses, and recent product changes.
- Whether this objection decided deals: drivers mentioning it with rank, product feedback on lost deals.
- Buyers who raised it and bought, with their words, and how our own reps or SEs answered it on calls that went well.
- The [competitor] feature comparison and the "they say, you say" for this claim.

BUILD
- What they are really asking.
- The answer from the brief, in plain words, including the honest limit if there is one.
- The workaround or the alternative, only if the brief supports it.
- The proof: one buyer who had the concern and bought, verbatim.
- The competitive line, if [competitor] is named.
- Whether this is a question for engineering.

OUTPUT
The written response, then a line citing the brief sections and the deals behind it.

GROUNDING
Every technical claim from the brief, cited. Where the brief is silent, write "I will confirm with engineering". Quotes verbatim. No competitor claim beyond the dossier.

[paste the objection; name the deal, contact, persona, account and competitor]
```

### Step 3: how much does this objection matter

```
Using Calven MCP, has "[objection]" decided deals?

CONTEXT
I want to know whether to fight it or scope around it.

PULL FROM THE UNIVERSE
- Deal drivers mentioning [topic], with direction, rank and outcome, in [window].
- Lost deals with product feedback tagged [tag], with amounts if the workspace shows them.
- The verbatims.

BUILD
- How often it was raised, how often it decided the outcome, which way.
- What buyers who still bought said settled it.

OUTPUT
The counts with n, then the quotes.

GROUNDING
Record data only, cited. No inference beyond the sample.

[name the objection, topic, tag and window]
```

### Gap mode: technical objections the brief cannot answer

```
Using Calven MCP, which technical objections can our product brief not answer?

CONTEXT
For the monthly product feedback roundup.

PULL FROM THE UNIVERSE
- Technical objections from calls and surveys in [window], by frequency.
- The product brief.
- Lost deals where each objection was a driver.

CHECK
- Covered by the brief, partially covered, not covered.
- For the uncovered: deals lost, with count.

OUTPUT
A table, then the five to raise with product.

GROUNDING
Counts from the Universe only, cited with window.

[name the window]
```

### Review mode: check my technical answer

```
Using Calven MCP, check my written answer to a technical objection.

CONTEXT
Below is my answer to "[objection]" for a [persona].

PULL FROM THE UNIVERSE
- The product brief, product changes and the claims register.

CHECK
- Any claim not in the brief or contradicted by a change.
- Any place I hedge where the brief gives a clear answer, or claim where it gives none.

OUTPUT
My answer annotated, then the clean version.

GROUNDING
Against the Universe only. Say so if it is sound.

[paste your answer]
```

## Ad hoc questions

- Does the product do [capability], per the brief?
- What does the brief say about scale, limits and architecture?
- Do we integrate with [system]? What is the honest answer?
- Has "[objection]" ever decided a deal?
- How did we answer "[objection]" on calls we won?
- What does [competitor] claim about [capability], and what does our dossier say?
- What changed in the product around [area] recently?
- What is our known weakness on [topic]?
- Which buyer raised [concern] and bought anyway? What did they say?
- Is "[claim on our docs]" a supported claim?

## Good practice

- Paste the objection verbatim. "Scale" returns the architecture section; "we have 2TB a day" returns the right evidence.
- Ask for the honest limit. A technical buyer trusts the SE who says no once.
- Keep the proof verbatim and attributed; the architect will check.
- Report uncovered objections monthly. The brief and the product get better.

## Not covered today

- Engineering-level answers: configuration, performance under a specific load, future plans. Route to engineering.
- Live documentation. Calven tracks changes to docs; the docs themselves are read separately.
- Anything about availability or timing of capabilities not in the brief.
