# Advocate identification

**Team:** Customer marketing · also customer success
**Impact:** Medium. The pool of advocates is the raw material for every other customer marketing program. Finding candidates from what customers actually said, rather than from who the CSM likes, widens the pool and finds the stories.
**Prerequisites:** call transcripts ingested (quotes), CRM connected (accounts, contacts, won deals). Win/loss surveys running adds buyers who already told us why they chose us.

## What the team is trying to do

Keep a current shortlist of customers likely to say yes to a review, a quote, a reference or a talk, with the evidence for why. Done means a list by account and contact with the advocacy ask that fits each (a review for the enthusiastic user, a reference for the senior buyer who beat a competitor). Without the company's own call evidence, the list is whoever responded to the last NPS survey.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Set the criteria | What makes an advocate for each ask | The quote categories and highlights that signal advocacy: quantified outcome, competitive win, ease of use, positive sentiment | Quotes, themes |
| 2 | Scan for signals | Find customers who talk like advocates | Positive quotes by account and speaker, competitive wins, buyers whose survey answers praise the team | Quotes, survey responses, deal drivers |
| 3 | Check the account | In profile, healthy, growing | ICP tier, segment, expansion deals. Health is not in Calven | CRM accounts, CRM deals |
| 4 | Pick the ask | Review, quote, reference, speaker, advisory board | The contact's role and seniority against the ask | CRM contacts, personas |
| 5 | Recruit | Reach out, enrol, recognise | Calven does not help here | |
| 6 | Track | Participation and fatigue | Calven does not help here | |

## Recommended prompts

### Step 2 and 3: scan for advocates

```
Using Calven MCP, find customers who sound like advocates.

CONTEXT
I am recruiting for the advocacy program. I want contacts who have said something positive and specific, at accounts in good shape.

PULL FROM THE UNIVERSE
- Positive customer quotes over [window], especially those tagged quantified outcome, competitive win, time to value or ease of use, with speaker, role, account and date.
- Buyer survey responses and deal drivers that praised the product, the team or the outcome.
- For each account: ICP tier, segment and any open expansion deal.

BUILD
- A table: contact, role, account, segment, the strongest quote, the signal type, how many positive quotes they have.
- Group by the ask that fits: review, quote, reference, speaker, advisory board.

OUTPUT
The table, grouped, with the top ten highlighted.

GROUNDING
Use only quotes, responses and CRM data in the Universe and cite them. Health, NPS and usage are not in Calven; say so.

[name the window and any segment focus]
```

### Step 4: match contacts to the ask

```
Using Calven MCP, tell me which advocacy ask fits each of these contacts.

CONTEXT
Below are candidates from the scan. For each I want the ask that matches their role and what they said.

PULL FROM THE UNIVERSE
- Each contact's title, buying role and persona.
- Their quotes, with category and highlight.

BUILD
- For each: the ask (review, quote, reference, speaker, advisory board, beta), the reason, and the line from their own words to open the request with.

OUTPUT
A table.

GROUNDING
Use only the Universe and cite it. Do not assume seniority from the account.

[paste the candidates]
```

### Gap: where the pool is thin

```
Using Calven MCP, show me where our advocate pool is thin.

CONTEXT
Our current advocates are listed below. I want to know which segments, personas and competitors they do not cover, and where evidence suggests candidates.

PULL FROM THE UNIVERSE
- The ICP segment tiers and priority verticals.
- Won deals by segment and competitor beaten over [window].
- Positive quotes by account in the segments with no advocate.

BUILD
- A coverage table: segment, persona, competitor beaten, advocates we have, candidates with evidence.

OUTPUT
The table and the three gaps to fill first.

GROUNDING
Use only the Universe and cite it. Do not invent candidates.

[paste the current advocate list]
```

## Ad hoc questions

- Which customers said something positive about us in the last 90 days?
- Who has talked about beating [competitor] on a call?
- Which contacts have the most positive quotes?
- Which accounts in Tier 1 have no quotes at all?
- What did [contact] say that we could use in a review request?
- Which buyers praised our sales process in the win/loss survey?
- Which customers mentioned a quantified outcome?
- Who at [account] is the end user versus the decision maker?

## Good practice

- Scan quarterly and keep the list with the advocacy tracker. Calven finds candidates; the tracker holds consent and history.
- Match the ask to the role. End users write reviews; economic buyers take reference calls.
- Open the request with the person's own words. It is the best proof they meant it.
- Cross-check with the CSM before asking. Calven does not see tickets or health.

## Not covered today

- NPS, health scores, product usage and support history are not in Calven.
- Enrolment, incentives, participation tracking and fatigue management live in the advocacy tool or CRM.
