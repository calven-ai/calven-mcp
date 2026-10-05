# Lead routing rules


Your scoring sheet weights job title and company size by habit, and you need to decide who gets which leads and how fast. You get a scoring and routing spec with every rule traced to an ICP criterion or a measured win predictor, plus a check of the current rules against that evidence. Calven supplies the ICP and the predictors, so each rule has a reason.

## Prompts

### Check lead scoring against the win predictors

```
Using Calven MCP, check our lead scoring model against the ICP and the win predictors.

FILL IN
- Scoring sheet: [paste the scoring sheet: attributes, values and points]

CONTEXT
I want each weight in the scoring sheet traced to an ICP criterion and to a measured win-rate lift, and the weights that have no evidence.

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
```

### Write the inbound routing spec by persona

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

### Audit last quarter's routed leads

```
Using Calven MCP, audit last quarter's routed leads against fit.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know whether strong-fit accounts reached an opportunity faster than weak-fit ones, as a check on the routing.

PULL FROM THE UNIVERSE
- Contacts with lifecycle stage and their account's fit tier.
- Deals opened in the window by account tier and lead source.
- The ICP dashboard's ICP-fit pipeline share for the window.

BUILD
- Contacts by tier and lifecycle stage.
- Deals opened by tier and lead source.
- Tier 1 accounts with contacts still at Lead or MQL.

OUTPUT
The two tables and the stuck list.

GROUNDING
Use mirrored rows and the dashboard share. Calven has no timestamps for stage changes on contacts; say so and report the current stage.
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
