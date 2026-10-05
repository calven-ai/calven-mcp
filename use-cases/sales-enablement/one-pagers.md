# One-pagers

**Team:** Sales enablement · also product marketing, solutions engineering
**Impact:** Medium. The one-pager is the asset reps forward. One built from the approved story for a persona, a segment, a competitor or a release is on-message by construction and fact-checked before it leaves.
**Prerequisites:** strategy documents approved. Better with personas approved, competitors tracked and call transcripts ingested (customer quotes as proof).

## What the team is trying to do

Produce a one-page rep-facing or buyer-facing asset fast: the problem, what we do, proof, what to say next. Done means a draft in the format, every claim sourced, reviewed as the buyer. Without the company's own knowledge the one-pager is the last one with the name changed.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the audience and the job | Persona, segment, competitor or release; rep-facing or buyer-facing | The persona canvas or segment definition; the messaging variation | Persona, ICP, messaging |
| 2 | Draft | Problem, what we do, proof, next step | A draft from positioning, messaging and the product brief, with a verbatim quote as proof | Positioning, messaging, product brief, quotes |
| 3 | Fact-check | Confirm every claim | Product brief, claims register | Product brief, claims |
| 4 | Review as the buyer | Hear how the persona reads it | Persona review | `review_against_personas` |
| 5 | Design and publish | Lay out, store, distribute | Calven does not help here | |
| 6 | Refresh | Update when the story moves | Drift findings name the one-pagers a product change made stale, if they are published documents; otherwise rerun the fact-check | Drift findings, product changes |

## Recommended prompts

### Step 1 and 2: draft

```
Using Calven MCP, draft a one-pager for [persona / segment / competitor / release], [rep-facing or buyer-facing].

CONTEXT
Format: headline, the problem in the buyer's words, what we do (three points), proof (one quote, one number if we have one), the next step. Under 300 words.

PULL FROM THE UNIVERSE
- The persona canvas or ICP segment for the audience: pains and KPIs.
- Our positioning and the messaging variation for this audience.
- The product brief for the capabilities named.
- One customer quote with a highlight (quantified outcome, time to value or competitive win) relevant to the audience.
- For a competitor one-pager: the battlecard's How We Win and Proof Points.

WRITE
The one-pager in the format, with the source after each section.

OUTPUT
The draft, ready for design.

GROUNDING
Every claim and quote comes from the Universe, cited. Do not invent numbers; if there is no quantified outcome recorded, use the quote alone.

[name the audience and whether it is rep- or buyer-facing]
```

### Step 3 and 4: check and review

```
Using Calven MCP, fact-check this one-pager and review it as [persona].

CONTEXT
Below is the draft. Confirm every claim, then run the persona review.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- The persona review for the text.

CHECK
- Each claim: confirmed, wrong, or not in the brief.
- The persona's findings with severity, and the one line they would not believe.

OUTPUT
The annotated draft, then the clean version.

GROUNDING
Judge only against the Universe. Say "not in the brief" rather than passing an unverified claim.

[paste the draft and name the persona]
```

### Gap mode: which one-pagers are missing

```
Using Calven MCP, tell me which one-pagers we should have and do not.

CONTEXT
Below is the list of one-pagers we have (title, audience, date). I want the gaps by persona, Tier 1 competitor and priority vertical.

PULL FROM THE UNIVERSE
- Approved personas, Tier 1 competitors and the ICP's priority verticals.
- Win rate per competitor and deals per segment from the dashboards, so the gaps are ranked by stakes.

BUILD
- The matrix of audience versus asset, with gaps marked and ranked.

OUTPUT
The gap list in priority order.

GROUNDING
Rank by dashboard numbers with n and window. Do not invent personas or verticals the documents do not list.

[paste the current list]
```

## Ad hoc questions

- Draft a one-pager for [persona] on [capability].
- What proof point should a [segment] one-pager lead with?
- Give me a customer quote with a quantified outcome for [topic].
- Is "[claim]" in the product brief?
- Rewrite this one-pager's problem statement in [persona]'s words: [paste].
- Which Tier 1 competitor has no one-pager?
- What is our boilerplate paragraph?
- How does [persona] describe the problem we solve?
- Which one-pagers did the last release make stale?

## Good practice

- One audience per page. A one-pager for "IT and finance" lands with neither.
- Lead with the problem in the buyer's words from a real quote, not with the product.
- Fact-check before design, not after. Design changes are what stop a correction from shipping.
- Keep the source list in the working draft even if it is cut from the final. The next refresh starts there.
- Use the gap matrix once a quarter so the set covers every persona and Tier 1 competitor.

## Not covered today

- Layout, brand templates, the content library and distribution.
- Numbers Calven does not hold (ROI claims, benchmarks). Use recorded customer quotes or leave the number out.
