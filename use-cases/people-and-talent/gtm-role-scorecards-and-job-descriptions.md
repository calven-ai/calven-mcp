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

## Advanced prompts

### Derive the competencies from how deals are decided

```
Derive the role's competencies with the critical incident technique, using real moments that decided our deals. Use Calven MCP for the deals, what buyers said about our team and how our reps showed up on calls.

FILL IN
- Role: [role]
- Current scorecard or JD: [paste it, or write "none"]

CONTEXT
Our scorecards are copied from the last company someone worked at. The right competencies come from the moments where someone in this role won or lost a deal for us. I want the list built from evidence, then compared with what we screen for.

FROM CALVEN
- Deal drivers in the Experience and Commercials categories, helped and hurt, with evidence quotes.
- Win/loss survey answers on our sales team.
- Vendor quotes from our reps on won and lost deals: discovery questions, objection handling, value claims.
- The personas the role works with and their objections.

METHOD
- Pull 20 to 30 critical incidents: a moment where something this role did, or failed to do, moved a deal. Quote each.
- Code each incident into a behaviour (for instance: found the economic buyer early, handled a pricing objection with proof). Group behaviours into five to seven competencies.
- Rank competencies by how often they decided a deal and in which direction.
- Compare with the current scorecard: what's missing, what's there without evidence.

OUTPUT
The incident table, the competency list with evidence counts, and a revised scorecard with behavioural indicators for each competency.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Every incident cites its source. Don't invent an incident or a rep behaviour.
```

### Weight the scorecard with pairwise comparisons

```
Weight the scorecard's criteria with pairwise comparisons (the analytic hierarchy process), check each manager's consistency, and settle disagreements with deal evidence. Use Calven MCP for the evidence.

FILL IN
- Role: [role]
- Criteria: [paste the five to seven scorecard criteria]
- Hiring managers' comparisons: [paste each manager's pairwise judgements, or write "ask me" to have them filled in step by step]

CONTEXT
Every panel member weighs the criteria differently in their head, so debriefs turn into arguments about what matters. Explicit weights end that, but only if they're consistent and grounded.

FROM CALVEN
- Deal drivers by category (Competitive, Capability, Experience, Commercials), with the win/loss dashboard's breakdown of what force decides deals, and n.
- The ICP: deal size, segment and buying committee size.
- The objections the role's personas raise.

METHOD
- For each manager, build the pairwise matrix on a 1 to 9 scale and derive weights. If you can run code, use the principal eigenvector and compute the consistency ratio. Flag any ratio over 0.1 and show which judgements cause it.
- Compare managers' weights side by side.
- Where they disagree most, bring in the evidence: which criterion maps to what actually decides our deals? Propose a reconciled weight with the reason.

OUTPUT
Each manager's weights and consistency, the disagreement table, the reconciled weights, and the final scorecard with weights and a scoring sheet.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a manager's judgement; ask for any that are missing.
```

### Settle the must-haves with a judged debate

```
Settle a contested must-have with a structured debate between two hiring managers' positions, judged on our own deal evidence. Use Calven MCP for the evidence both sides can use.

FILL IN
- Role: [role]
- Position A: [e.g. "must have sold in our category"]
- Position B: [e.g. "hire for discovery skill, teach the category"]
- Ramp time we can afford: [weeks]

CONTEXT
The panel keeps arguing the same must-have and the job sits open. I want both sides argued at full strength, then judged by what our deals say, not by who's more senior.

FROM CALVEN
- Our positioning: category and competitive alternatives, to see how much category knowledge the job needs.
- Deal drivers and survey answers on our sales team, with the win/loss dashboard's breakdown and n.
- The persona canvases for the role's buyers: what they expect from a seller.
- The battlecards: how technical the competitive conversation gets.

METHOD
- Opening statements: each side argues its case in under 200 words, citing the evidence.
- Rebuttals: each side attacks the other's weakest claim.
- Cross-examination: each side asks the other two questions and answers them.
- The judge (a neutral VP of Sales) scores each side on evidence, relevance to our deals and cost of being wrong given the ramp time, then rules.

OUTPUT
The debate transcript in under 900 words, the judge's scorecard and ruling, and the must-have rewritten to match the ruling.

GROUNDING
Every claim in the debate cites the Universe or is labelled as opinion. The judge rules only on cited evidence. Don't invent a hire, a ramp time or a deal.
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
- Which competencies do buyers praise in our reps in win/loss surveys?
- What did buyers say our team did badly on deals we lost?
- How many people sit on a typical buying committee in our won deals?
- Which competitor's former reps would know our buyers best?
- How technical is a typical deal, given the integrations and requirements buyers ask about?
- What's the average sales cycle a new AE will run, and on what n?
