# What changed this week


It's Monday and the field needs to know what moved: a competitor's price cut or new feature, an objection showing up on calls, an updated asset, a product release and what it changes in the pitch. You get a short post reps act on, with the updated battlecard or talk track behind each item. Calven pulls from recorded competitor moves, new objections and product changes, so the digest doesn't skip the week nobody told you anything.

## Prompts

### Collect the week's changes for the field

```
Using Calven MCP, collect everything that changed for the field in the last 7 days.

CONTEXT
I write the Monday enablement digest. I need what moved last week, in order of what changes the pitch most.

PULL FROM THE UNIVERSE
- Competitive signals recorded in the last 7 days, with severity and the so-what.
- Objections customers raised on calls in the last 7 days, how many calls each appeared in, and whether our messaging has an answer.
- Changes to our own product detected in the last 7 days and any published document they left stale.
- Deal drivers and loss reasons from deals decided last week.

BUILD
- One list, ordered by impact on the pitch. Each item: what happened, the source and date, and what a rep should do differently.
- Mark items that need a human decision (a battlecard that needs updating, a claim to retire).

OUTPUT
The list, then a one-line summary of the week.

GROUNDING
Use only signals, quotes, changes and drivers recorded in the Universe and cite each. If nothing changed in a category, say "no change recorded" rather than filling it.
```

### Turn the changes into field instructions

```
Using Calven MCP, turn last week's changes into field instructions.

FILL IN
- Changes: [paste the list of changes]

CONTEXT
The changes are the ones I am including this week. For each one I need the instruction for reps and the asset that backs it.

PULL FROM THE UNIVERSE
- The battlecard for each competitor named, in particular How We Win, Where We Lose and Objection Handling.
- The messaging document's objection handling section.
- The product brief for any capability the changes touch.

BUILD
- For each change: the one-line instruction ("stop claiming X", "lead with Y against <competitor>", "answer Z this way"), the asset it points to, and whether the asset already reflects the change.
- A list of assets that do not yet reflect a change, for the owner to update in Calven.

OUTPUT
The instructions in the order of the list, then the asset gap list.

GROUNDING
Base every instruction on the battlecard, messaging or brief in the Universe and cite the section. Do not invent an answer to an objection the documents do not cover; flag it instead.
```

### Write the weekly enablement digest

```
Using Calven MCP, write this week's enablement digest.

FILL IN
- Items: [paste the checked items]

CONTEXT
Audience: every AE and SDR. Format: a Slack post under 200 words, headline first, one line per item, the source in parentheses, and an <asset> placeholder where the asset link goes. Tone: plain, no hype.

PULL FROM THE UNIVERSE
- The items, each already checked against the battlecard, messaging and product brief.

WRITE
- A headline with the number of changes.
- One line per item: what changed, what to do, <asset>.
- A closing line naming the one thing to practise this week.

OUTPUT
The post, ready to paste.

GROUNDING
Do not add items beyond the list. Keep every fact as recorded in the Universe.
```

### Check a drafted digest before it goes out

```
Using Calven MCP, check this enablement digest before it goes out.

FILL IN
- Draft: [paste the draft digest]

CONTEXT
I need every item in the draft verified against what Calven recorded and anything missing added.

PULL FROM THE UNIVERSE
- Competitive signals, customer objections, product changes and deal drivers from the last 7 days.

CHECK
- Mark each item confirmed, wrong or not recorded, with the source.
- List recorded changes the draft leaves out.

OUTPUT
The annotated draft, then the omissions.

GROUNDING
Judge only against the Universe and cite it. Do not add items you cannot source.
```

## Ad hoc questions

- What did [competitor] do in the last 7 days?
- Any new objections on calls this week? How many calls each?
- Which objection from this week does our messaging not cover?
- What did we release in the last 30 days that reps might not know about?
- Which published documents went stale after the last product change?
- Why did we lose the deals that closed last week?
- Which battlecard was updated most recently, and what changed?
- Did any competitor change pricing this quarter?
- Which competitor signals this month are high severity?
- What is the one-line answer to "[objection]" according to our messaging?
- Which claims on our site are flagged as unsupported right now?
- Give me the three things a rep should do differently this week, with sources.
