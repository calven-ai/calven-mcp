# Persona coverage

**Team:** Revenue operations · also sales leadership, BDR leadership, product marketing
**Impact:** Medium. Multi-threading is the deal habit with the clearest win-rate payoff, and it is invisible in a stage report. Calven shows which personas are on each deal, how win rate changes with threading, and where coverage is thin.
**Prerequisites:** CRM connected (deals, contacts with role), personas approved. Better with win/loss surveys running.

## What the team is trying to do

Measure and improve buying-group coverage: which roles are on won deals, which deals lack them, what the multi-threading payoff is. Done means a coverage read for the review and the list of deals to multi-thread, with the persona to add. Without the company's own knowledge coverage is a count of contacts per deal.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Measure the payoff | Does threading move win rate | Multi-threading win rate, single- versus multi-threaded pipe, contact coverage | Persona dashboard (KPIs) |
| 2 | See the buying group | Which roles are on won versus lost deals | Buying-group dynamics, win rate by persona, engagement velocity | Persona dashboard (buying group) |
| 3 | Find the thin deals | Open deals missing key roles | Pipeline gap and open deals with missing personas | Persona dashboard (persona intelligence), CRM deals, contacts |
| 4 | Name who to add | The persona and the title | Persona rows: role title, seniority, department, buying role | Personas |
| 5 | Brief the rep | Why and how to reach them | The persona canvas: KPIs, pains, hooks | Persona canvas |
| 6 | Track | Add contacts, re-measure | Calven does not help here; the contact is added in the CRM | |

## Recommended prompts

### Step 1 to 3: the coverage read

```
Using Calven MCP, give me the persona coverage read for [window].

CONTEXT
For the pipeline review: the multi-threading payoff, which roles are on our wins, and the open deals that lack them.

PULL FROM THE UNIVERSE
- The persona dashboard for [window]: multi-threading win rate, single- versus multi-threaded pipe, contact coverage, buying-group presence on won and lost deals, win rate by persona, the pipeline gap with the open deals behind it. Every rate with n.

BUILD
- The payoff in two lines, with n.
- The roles that appear on wins and are absent from losses.
- Open deals above [amount] missing those roles, with the persona to add.

OUTPUT
The read and the deal list.

GROUNDING
Rates from the dashboard with n and window; deals from the pipeline gap drill-down. Do not count contacts yourself.

[name the window and the amount floor]
```

### Step 4 and 5: the rep brief for one deal

```
Using Calven MCP, tell me who to add to [deal] and how to approach them.

CONTEXT
[Deal] has [the contacts on it]. I want the missing persona, the title to look for, and the opening.

PULL FROM THE UNIVERSE
- The deal's contacts and roles.
- Personas with buying role, role title, seniority and department.
- The persona dashboard: which roles are on won deals in this segment.
- The canvas for the missing persona: KPIs, pains, messaging hooks.

BUILD
- The role to add and why (win-rate evidence with n).
- The titles that map to it.
- The two-line opening in the persona's terms.

OUTPUT
A short brief for the rep.

GROUNDING
Use only approved personas and the dashboard. Do not invent a named contact; the rep finds the person.

[name the deal]
```

### Gap mode: personas with no contacts anywhere in the pipeline

```
Using Calven MCP, find the approved personas our pipeline never reaches.

CONTEXT
We approved personas we believe sit on the buying group. I want to know which of them appear on deals at all, which never do, and whether the ones we miss matter to the win rate.

PULL FROM THE UNIVERSE
- Every approved persona with its buying role, role title and department.
- The persona dashboard: buying-group presence on won and lost deals, win rate by persona with n, contact coverage.
- Contacts on open deals by role.

BUILD
- A table: persona, present on won deals (share), present on lost deals (share), present on open deals (count), win-rate effect with n or "below the floor".
- The personas with no presence anywhere, and whether the ICP document or the canvas says they gate the purchase.
- The one persona to start threading first, and why.

OUTPUT
The table and the recommendation, with sources.

GROUNDING
Shares and rates from the persona dashboard with n and window. A persona absent from the data is "not recorded on any deal", never "does not matter". Do not count contacts yourself.

[name the window]
```

## Ad hoc questions

- What is the win rate for multi-threaded versus single-threaded deals?
- Which persona is on our wins most often?
- Which open deals over [amount] have no economic buyer?
- Which buying role is missing most from lost deals?
- What titles map to our technical buyer persona?
- How many contacts does a won deal have on average, in bands?
- Which deals have a blocker and no champion?
- What does [persona] care about, for a first email?

## Good practice

- Lead with the payoff number. Reps multi-thread when they see the win rate, not when told to.
- Name the persona to add, not "more contacts".
- Give the rep the canvas hooks with the brief; finding the person is the easy half.
- Re-measure monthly; coverage is a habit, and it slips.

## Not covered today

- Finding and adding the contact. That is prospecting tools and the CRM.
- Engagement data (who opened, who met). Coverage is measured by contacts on the deal.
