# Persona coverage


A count of contacts per deal says nothing about whether the right people are in the room. You get a coverage read for the review: which roles show up on won deals, which open deals lack them, what multi-threading pays, and the deals to multi-thread with the persona to add. Calven ties each deal to the approved personas, so the gaps have names.

## Prompts

### Build the persona coverage read

```
Using Calven MCP, give me the persona coverage read for the window below.

FILL IN
- Window: [time window, e.g. last quarter]
- Amount floor: [amount]

CONTEXT
For the pipeline review: the multi-threading payoff, which roles are on our wins, and the open deals that lack them.

PULL FROM THE UNIVERSE
- The persona dashboard for the window: multi-threading win rate, single- versus multi-threaded pipe, contact coverage, buying-group presence on won and lost deals, win rate by persona, the pipeline gap with the open deals behind it. Every rate with n.

BUILD
- The payoff in two lines, with n.
- The roles that appear on wins and are absent from losses.
- Open deals above the amount floor missing those roles, with the persona to add.

OUTPUT
The read and the deal list.

GROUNDING
Rates from the dashboard with n and window; deals from the pipeline gap drill-down. Do not count contacts yourself.
```

### Brief a rep on who to add

```
Using Calven MCP, tell me who to add to the deal below and how to approach them.

FILL IN
- Deal: [deal]
- Contacts: [the contacts on the deal]

CONTEXT
The deal has the contacts above. I want the missing persona, the title to look for, and the opening.

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
```

### Find personas the pipeline never reaches

```
Using Calven MCP, find the approved personas our pipeline never reaches.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
We approved personas we believe sit on the buying group. I want to know which of them appear on deals at all, which never do, and whether the ones we miss matter to the win rate.

PULL FROM THE UNIVERSE
- Every approved persona with its buying role, role title and department.
- The persona dashboard for the window: buying-group presence on won and lost deals, win rate by persona with n, contact coverage.
- Contacts on open deals by role.

BUILD
- A table: persona, present on won deals (share), present on lost deals (share), present on open deals (count), win-rate effect with n or "below the floor".
- The personas with no presence anywhere, and whether the ICP document or the canvas says they gate the purchase.
- The one persona to start threading first, and why.

OUTPUT
The table and the recommendation, with sources.

GROUNDING
Shares and rates from the persona dashboard with n and window. A persona absent from the data is "not recorded on any deal", never "does not matter". Do not count contacts yourself.
```

## Advanced prompts

### Price each missing persona in pipeline

```
Estimate what adding each missing persona is worth on our open deals, controlling for deal size so bigger deals don't fake the effect. Use Calven MCP for the roles on each deal and the win rates by persona and threading.

FILL IN
- Open deals: [segment or quarter to cover, or write "all open deals"]
- Cost of a touch: [rough rep or exec hours to bring in one new stakeholder]

CONTEXT
Everyone agrees multi-threading helps. Nobody knows which persona is worth an exec's afternoon on which deal. I want a ranked list of "add this person to this deal" with the expected pipeline it buys.

FROM CALVEN
- Closed deals, paged through, with contact roles, size band, fit tier and status.
- Win rate by persona present and multi-threaded versus single-threaded, from the persona dashboard, with n.
- Open deals with amount, stage and the roles already on each.

METHOD
- Estimate the uplift of each role (economic buyer, technical buyer, champion, exec sponsor) by comparing win rates with and without it, within the same size band and tier. That stratification is the point; report the raw and stratified uplift side by side.
- For each open deal and each missing role: expected gain = amount × stratified uplift.
- If you can run code, rank the pairs and cut at the hours available.

OUTPUT
A ranked table: deal, missing role, uplift used, expected pipeline gained, effort. Then the top ten actions with the persona canvas hook a rep uses to open the conversation.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Uplift from strata under 10 deals is not used; say which ones were dropped.
```

### Rehearse the missing stakeholder before the rep meets them

```
Build a role-play where the rep meets the stakeholder missing from their deal, played by the AI tool from our persona canvas, with a scorecard at the end. Use Calven MCP for the persona, the deal and what that role has said on past calls.

FILL IN
- Deal: [deal]
- Missing persona: [persona]
- Rep: [rep]

CONTEXT
Reps avoid the economic buyer or the security lead because they don't know what that person will ask. Ten minutes of practice against a realistic version of them changes that, and RevOps can run it for any deal flagged as thin.

FROM CALVEN
- The persona canvas: goals and KPIs, pains, objections with responses, messaging hooks.
- The deal: stage, competitors, contacts and roles, account fit.
- Quotes from people in that role on past calls, tagged Objection or Pain.

SIMULATE
- Play the persona in the first person, with the canvas's priorities and objections, at this account's stage and against this competitor.
- Open cold. Let the rep pitch, then push back three times with the strongest objections. Stay in character.
- After the rep types "end", score the conversation 1 to 5 on: discovery questions asked, link to the persona's KPI, handling of each objection, a clear next step.

OUTPUT
The role-play, then the scorecard with one line of coaching per criterion and the approved objection response the rep should have used.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Objections and priorities come from the canvas and quotes, cited in the scorecard. Anything else the persona says is labelled improvisation.
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
- Which persona appears on won deals but almost never on lost ones?
- Which open deals have an end user but no buyer persona?
- How many won deals had an exec sponsor, and how does their deal size compare?
- Which segment has the lowest multi-threading rate?
- What objections does the economic buyer persona raise most on calls?
- Which reps' open deals are most often single-threaded?
- Which personas have no contact anywhere in the CRM?
