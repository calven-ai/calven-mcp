# GTM role scorecards and job descriptions


You're opening an AE, SDR, SE, CSM, PMM or marketer role and the last posting is sitting right there to copy. You get a scorecard the panel scores against and a job description a candidate in our market recognises as specific. Calven fills in the segment and deal size, the personas, the competitors, the sales motion and the category, so you screen for the right market.

## Prompts

### Draft the role scorecard

```
Using Calven MCP, draft the scorecard for the new role below.

FILL IN
- Role: [role]
- Outcomes: [paste the hiring manager's first-year outcomes]

CONTEXT
I want competencies and must-haves grounded in our actual market and in what decides our deals.

PULL FROM THE UNIVERSE
- The ICP: segment tiers, deal size bands if recorded, priority verticals.
- The personas this role works with: role titles and seniority.
- Tier 1 competitors and our win rate against each.
- What kind of force decides our deals, and the top win and loss drivers with a verbatim each.
- The objections in our messaging this role must handle.

BUILD
- Outcomes (from the manager, restated).
- Competencies: five to seven, each with the evidence from our deals for why it matters here and a one-line "what good looks like".
- Must-haves: the segment, buyer and competitive experience that our market requires.
- Nice-to-haves.

OUTPUT
The scorecard as a table with sources per competency.

GROUNDING
Tie each competency to the Universe and cite it. Do not add requirements our market does not support.
```

### Write the job description

```
Using Calven MCP, write the job description for the role below.

FILL IN
- Role: [role]
- Scorecard: [paste the scorecard]

CONTEXT
Candidates in our market should read it and recognise the job: the segment, the buyers, the competitors, the motion. No generic SaaS language. Under 600 words.

PULL FROM THE UNIVERSE
- Our positioning statement and category, and the messaging boilerplate for the "about us".
- The ICP: who we sell to, segment, verticals.
- The personas this role talks to.
- Tier 1 competitors, named or described as the category alternatives.
- The scorecard competencies from the previous step.

WRITE
- About us: three sentences from positioning and boilerplate.
- The role: what you sell or support, to whom, against whom, with what motion.
- Responsibilities: six bullets.
- What we look for: from the scorecard.
- What you get: leave this for the team to paste compensation and benefits.

OUTPUT
The job description, with a note on which lines came from positioning and ICP.

GROUNDING
Use only positioning, messaging, ICP and personas in the Universe and cite them. Do not claim traction, funding or customer names unless the boilerplate carries them.
```

### Check a job description against the approved story

```
Using Calven MCP, check this job description against our approved story.

FILL IN
- Draft: [paste the draft]

CONTEXT
I want anything off-category, off-message or inconsistent with the ICP flagged.

PULL FROM THE UNIVERSE
- Positioning, messaging boilerplate, ICP.

CHECK
- Flag lines that describe a different market, buyer or category from the approved documents.
- Flag claims the Universe does not support.
- Suggest the on-message line.

OUTPUT
The draft annotated, then a clean version.

GROUNDING
Judge only against the Universe and cite each flag. If it is consistent, say so.
```

## Ad hoc questions

- Which segment and deal size will a new AE work, per the ICP?
- Which personas does an SDR here talk to?
- Which competitors will the hire sell against most?
- What decides our deals: product, experience, price or competition?
- What is our one-paragraph "about us" from the boilerplate?
- Which objections must a new CSM be able to handle?
- What category do we claim, so the posting uses the right words?
- What experience would help a PMM here, given our personas and competitors?
- What are our priority verticals, for the requirements section?
