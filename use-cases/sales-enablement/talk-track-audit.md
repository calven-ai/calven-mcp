# Talk track audit

**Team:** Sales enablement · also product marketing
**Impact:** High. A talk track drifts from the approved story the week after training. Comparing what reps actually say with what customers actually object to shows where the talk track no longer holds and what to retrain.
**Prerequisites:** call transcripts ingested (vendor quotes, customer quotes), messaging approved. Better with win/loss surveys running (deal drivers) and competitors tracked.

## What the team is trying to do

Find out whether the talk track reps use is the one we agreed, whether it still works against what buyers say now, and where it is silent. Done means a scored audit: each section of the talk track marked used, unused or contradicted, the objections it does not cover, and the retraining list. Without the company's own knowledge the audit is a survey of reps about what they think they say.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Assemble the current talk track | Pull the sections: opener, pillars, proof, objections, competitive, close | The approved messaging and positioning the talk track should express | Messaging, positioning |
| 2 | Measure use | Find out which parts reps actually say | Pillar pull-through in rep calls; vendor quotes by category and frequency | Messaging dashboard (field adoption), vendor quotes |
| 3 | Measure fit with the buyer | Find out whether the track answers what buyers raise now | Objections and pains raised on calls in the window; language gaps between the messaging and customer words | Quotes, themes, messaging dashboard (objections, customer language) |
| 4 | Measure effect on deals | Find out which lines show up in won versus lost deals | Deal drivers by direction and category; proof points buyers cited | Deal drivers, win/loss dashboard |
| 5 | Check claims | Find lines that over-claim or went stale | Product brief, claims register, product changes | Product brief, claims, product changes |
| 6 | Score and decide | Mark each section keep, retrain, rewrite, add | A scored audit with the evidence per section | All of the above |
| 7 | Retrain | Build the session from the audit | See Training sessions | |

## Recommended prompts

### Step 1 to 3: the audit

```
Using Calven MCP, audit our talk track against what reps say and what buyers raise.

CONTEXT
Below is the talk track reps are trained on, section by section. I want to know which sections reps actually use, which answer what buyers say now, and which are silent.

PULL FROM THE UNIVERSE
- The messaging document (pillars, value propositions by persona, objection handling) so the talk track is checked against the approved version.
- Pillar pull-through in rep calls for [window] from the messaging dashboard, and vendor quotes grouped by category.
- Customer objections and pains raised on calls in [window], with frequency, and the language gaps the messaging dashboard reports.

CHECK
- Per section: used by reps (with examples), unused, or contradicted (reps say something else).
- Per section: whether it answers an objection or pain buyers raise, and how often that comes up.
- Objections and pains with no section at all.

OUTPUT
A table: section · used? · answers what? · evidence · verdict (keep, retrain, rewrite, add).

GROUNDING
Cite every quote and every number with its n and window. Do not infer use from absence; if no vendor quotes exist for a section, say "no evidence recorded".

[paste the talk track]
```

### Step 4: which lines win

```
Using Calven MCP, show me which talk track lines show up in won deals and which in lost ones.

CONTEXT
I want to know what buyers credit when we win and what they fault when we lose, so the talk track leads with what works.

PULL FROM THE UNIVERSE
- Deal drivers for [window], by direction (helped, hurt), rank and category (Competitive, Capability, Experience, Commercials), with the evidence quote.
- The win/loss dashboard's top win drivers and top loss drivers.

BUILD
- The five drivers that decided wins and the five that decided losses, each with deals (n) and a buyer quote.
- For each, the talk track section that should carry it, and whether it does today.

OUTPUT
Two lists with the mapping to the talk track.

GROUNDING
Use dashboard counts with n and window. Quote buyers verbatim. Do not rank by your own count of rows.

[paste the talk track section headings]
```

### Step 5: claims that went stale

```
Using Calven MCP, check the talk track for claims that are wrong, stale or unsupported.

CONTEXT
Below is the talk track. Every product claim, integration, number and comparison needs checking.

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

[paste the talk track]
```

### Step 6: the retraining list

```
Using Calven MCP, turn this audit into a retraining plan.

CONTEXT
Below is the scored audit. I need the sessions, in priority order, with the evidence to show reps.

PULL FROM THE UNIVERSE
- The approved line for each section marked retrain or rewrite, from the messaging document.
- The buyer quotes behind each objection marked add.

BUILD
- Up to four sessions, each: topic, why (the evidence), the approved lines to drill, the buyer quotes to play back, the certification question.

OUTPUT
The plan.

GROUNDING
Approved lines come from the messaging document only. Sections marked add go to PMM as gaps, not into a session.

[paste the scored audit]
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

## Good practice

- Paste the talk track as sections with headings. The audit is per section; a wall of text gets one verdict.
- Fix the window. "This quarter" and "last 90 days" give different pull-through numbers.
- Treat unused as a finding, not a failure. A section nobody says may be wrong for the calls we have, or may never have been trained.
- Separate the three verdicts. Retrain is enablement's job; rewrite and add are PMM's, done in Calven.
- Keep rep and buyer quotes verbatim in the audit. The retraining session plays them back.
- Repeat quarterly and after any launch or competitor move that changes the story.

## Not covered today

- Recording and transcribing calls. Calven reads ingested transcripts.
- Rewriting the talk track document itself. The audit's rewrite and add items go to the messaging agent and the PMM in Calven.
- Per-rep activity metrics. Pull-through is measured across calls, not as a rep scorecard.
