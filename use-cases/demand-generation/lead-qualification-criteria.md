# Lead qualification criteria

**Team:** Demand generation · also revenue operations, business development, sales leadership
**Impact:** Medium. The MQL definition decides what sales works and what marketing is measured on; criteria built from the ICP and from what actually predicts a win end the quarterly argument.
**Prerequisites:** ICP approved, CRM connected (accounts with fit, deals with outcomes). Better with persona dashboard data (which roles convert).

## What the team is trying to do

Define which leads marketing passes to sales and in what order: the firmographic and persona criteria, the triggers that raise priority, the disqualifiers, and the scoring inputs. Done means a qualification definition both teams sign, with the evidence behind each criterion, and routing rules that follow it. Without the Universe the definition is last year's and nobody remembers why.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Read the ICP | Attributes, tiers, disqualifiers, scorecard | The ICP document | ICP |
| 2 | Read what predicts a win | Which attributes and tech signals correlate with wins | ICP dashboard: win predictors, win rate by attribute, segments | ICP dashboard |
| 3 | Read which roles convert | Personas on won deals, contact roles by lifecycle | Persona dashboard, contacts | Persona dashboard, crm_contacts |
| 4 | Read the triggers | Which triggers accounts had when they bought | Account triggers on won deals | Crm_accounts, crm_deals |
| 5 | Draft the criteria | Fit, role, trigger, disqualifiers, score weights | Drafted from the above | |
| 6 | Check current leads against it | What share of recent leads qualify | Fit tier distribution | ICP dashboard (reality check), crm_accounts |
| 7 | Agree with sales and configure | Scoring and routing in the automation tool | Calven does not help here | |

## Recommended prompts

### Step 1 to 5: the definition

```
Using Calven MCP, draft our lead qualification criteria from the ICP and what wins.

CONTEXT
Marketing and sales will sign this. Each criterion needs the evidence behind it.

PULL FROM THE UNIVERSE
- The ICP: firmographic, technographic and behavioural attributes, segment tiers, buying triggers, disqualifiers, the fit scorecard.
- The ICP dashboard: win rate by attribute, predictive attributes, tech signals, segment win rates, with n.
- The persona dashboard: win rate by persona in the buying group and contact coverage.
- Triggers present on accounts of won deals.

BUILD
- Fit criteria with the win rate behind each, with n.
- Role criteria: which personas qualify a lead and which only add to it.
- Trigger criteria that raise priority, with the evidence.
- Disqualifiers.
- A suggested weighting and the three criteria that matter most.

OUTPUT
A qualification definition with sources, and a one-page version for sales.

GROUNDING
Numbers from the dashboards with n and window. Criteria only from the ICP and dashboards; mark any criterion below the floor as unproven.

[name the product if scoped]
```

### Step 6: reality check

```
Using Calven MCP, show me how recent leads measure against the criteria.

PULL FROM THE UNIVERSE
- The ICP dashboard reality check: fit score distribution and pipeline gap.
- CRM accounts created in [window] by fit tier.

BUILD
The share of recent accounts in each fit tier, how much open pipeline is in profile, and where leads fall outside.

OUTPUT
Five lines with the numbers.

GROUNDING
Numbers from the dashboards with n and window.

[name the window]
```

### Step 5: review the definition we already use

```
Using Calven MCP, review our current lead qualification criteria against the ICP and what actually wins.

CONTEXT
Below is the definition marketing and sales signed last year: the fit rules, the role rules, the triggers and the disqualifiers.

PULL FROM THE UNIVERSE
- The ICP: attributes, segment tiers, buying triggers, disqualifiers, the fit scorecard.
- The ICP dashboard: win rate by attribute, predictive attributes and segment win rates, with n.
- The persona dashboard: win rate by persona in the buying group.

CHECK
- Each criterion: supported by the ICP and the dashboards, contradicted, or unproven below the floor.
- Attributes and personas the dashboards show predict a win that the definition ignores.
- Disqualifiers in the ICP the definition does not apply.

OUTPUT
The definition annotated with a verdict per criterion, then the changes to propose at the next review.

GROUNDING
Judge only against the ICP and dashboard numbers, with n and window. Do not add a criterion the Universe does not support.

[paste the current definition]
```

## Ad hoc questions

- Which attributes predict a win for us, with n?
- What is the win rate for Tier 1 vs Tier 3 accounts?
- Which personas on a deal raise the win rate?
- What are our ICP disqualifiers?
- What share of open pipeline is in profile?
- Which triggers were present on accounts we won?
- Do accounts with [technology] in the stack win more?
- Which segment should we expand the ICP into, per the dashboard?

## Good practice

- Start from the dashboard's predictors, then confirm with the ICP document. Where they disagree, the ICP needs a refresh in Calven.
- Keep criteria that are unproven marked as such; sales will ask.
- Rerun the reality check quarterly before the routing review.

## Not covered today

- Scoring configuration, routing rules and lead data in the automation tool and CRM.
- Behavioural signals (web visits, content downloads) not in the CRM mirror.
