# Lead routing rules

**Team:** Revenue operations · also marketing operations, BDR leadership
**Impact:** Medium. Routing and scoring rules encode an ICP. When the ICP is approved in Calven and the win predictors are measured, the rules can be derived from evidence and checked against it, instead of from a scoring sheet nobody has reviewed in a year. The rules themselves live in the CRM or the routing tool.
**Prerequisites:** CRM connected (accounts with fit tier, contacts with role and lifecycle stage), ICP approved. Better with personas approved (persona dashboard) and win/loss surveys running.

## What the team is trying to do

Decide which leads and accounts go to whom, and how fast, based on fit and the likelihood of a win. Done means a scoring and routing spec with each rule traced to an ICP criterion or a measured predictor, plus a check of the current rules against the evidence. Without the company's own knowledge the scoring sheet weights job title and company size by habit.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | List the current rules | Scoring weights, routing paths, SLAs | Calven does not hold the rules; paste them | |
| 2 | Map rules to the ICP | Which criterion each rule encodes | The ICP's attributes, tiers, disqualifiers and scorecard | ICP document |
| 3 | Weight by evidence | Which attributes deserve more points | Win rate by attribute and predictive attributes; win rate by persona and buying role | ICP dashboard, persona dashboard |
| 4 | Define the persona rules | Which titles map to which persona and role | Personas with role title, seniority, department and buying role | Personas |
| 5 | Find rules with no evidence | Weights that do not predict | Attributes with no win-rate lift, or below the floor | ICP dashboard |
| 6 | Write the spec | Rules, weights, routing, with the source | The spec | All of the above |
| 7 | Implement | Build in the CRM or routing tool, test | Calven does not help here | |
| 8 | Audit routed leads | Did the rules route in-profile leads first | Accounts by fit tier against the lifecycle stages and deals that followed | CRM accounts, contacts, deals |

## Recommended prompts

### Step 2 to 5: check the current scoring model against the evidence

```
Using Calven MCP, check our lead scoring model against the ICP and the win predictors.

CONTEXT
Below is the current scoring sheet: attributes, values and points. I want each weight traced to an ICP criterion and to a measured win-rate lift, and the weights that have no evidence.

PULL FROM THE UNIVERSE
- The ICP: attributes, segment tiers, disqualifiers, the fit scorecard.
- The ICP dashboard: win rate by attribute, predictive attributes, tech win signals, with n and the baseline.
- The persona dashboard: win rate by persona and buying role.

CHECK
- Per scoring line: the ICP criterion it encodes (or none), the measured lift (or below floor), and a verdict: keep, raise, lower, drop.
- Attributes with a measured lift that the sheet does not score.
- Disqualifiers the sheet does not apply.

OUTPUT
The annotated sheet, then the additions and the disqualifiers.

GROUNDING
Lifts from the dashboard with n; criteria from the ICP. Do not propose a weight for an attribute below the floor.

[paste the scoring sheet]
```

### Step 4 and 6: the persona and routing spec

```
Using Calven MCP, write the routing spec for inbound leads by persona and fit.

CONTEXT
Routing: Tier 1 accounts to AEs, Tier 2 to BDRs, Tier 3 to nurture, disqualified to a holding queue; within an account, the contact's persona decides the play. I need the spec with the mapping from title to persona.

PULL FROM THE UNIVERSE
- Personas with role title, seniority, department and buying role.
- The ICP's tiers and disqualifiers.
- The persona dashboard: which buying roles convert and which personas are on won deals.

BUILD
- The title-to-persona mapping table with the buying role.
- The routing rules by tier and persona, each with the criterion and the evidence.
- The exceptions: titles that match no persona.

OUTPUT
The spec.

GROUNDING
Use only approved personas and the ICP. Titles that match no persona go to exceptions, not to a guess.
```

### Step 8: audit the routed leads

```
Using Calven MCP, audit last quarter's routed leads against fit.

CONTEXT
I want to know whether strong-fit accounts reached an opportunity faster than weak-fit ones, as a check on the routing.

PULL FROM THE UNIVERSE
- Contacts with lifecycle stage and their account's fit tier.
- Deals opened in [window] by account tier and lead source.
- The ICP dashboard's ICP-fit pipeline share for the window.

BUILD
- Contacts by tier and lifecycle stage.
- Deals opened by tier and lead source.
- Tier 1 accounts with contacts still at Lead or MQL.

OUTPUT
The two tables and the stuck list.

GROUNDING
Use mirrored rows and the dashboard share. Calven has no timestamps for stage changes on contacts; say so and report the current stage.

[name the window]
```

## Ad hoc questions

- Which ICP attributes should carry the most points?
- Which persona converts best, and what titles map to it?
- Which Tier 1 accounts have contacts stuck at MQL?
- Does company size predict a win in our data?
- Which disqualifiers should routing apply?
- What is the win rate when the first contact is a technical buyer?
- Which lead source produces the most in-profile deals?
- What titles do our economic buyer personas hold?
- Which attribute in our scoring sheet has no win-rate evidence?

## Good practice

- Trace every weight to a criterion or a measured lift. Weights with neither are habits.
- Use the persona rows for title mapping. They were approved for exactly this.
- Keep disqualifiers as hard rules, not negative points.
- Audit quarterly with the stuck list. Routing that lets Tier 1 contacts sit at MQL is the expensive kind of broken.
- Rerun after each ICP refresh; the weights follow the criteria.

## Not covered today

- Building, testing and running the rules in the CRM or the routing tool.
- Behavioural scoring (web visits, email engagement). Calven scores fit, not intent.
- Lead response time and SLA measurement. Calven has no timestamps for contact stage changes.
