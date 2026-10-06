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

## Advanced prompts

### Rank the week's changes by deals at stake

```
Rank everything that changed this week by the open pipeline it puts at risk, and cut the digest to the three items that matter. Use Calven MCP for the week's changes, the open deals they touch and our win rates.

FILL IN
- Week: [window, e.g. the last 7 days]
- Rep attention budget: [how many items reps will actually read, e.g. 3]

CONTEXT
Every week there are fifteen things I could tell the field and reps read three. I want the three picked by money at risk, not by what's loudest in Slack.

FROM CALVEN
- Competitive signals in the week, with severity and so-what, and product changes in the same window.
- Open CRM deals with each signalling competitor listed, with amount and stage.
- Our win rate against each of those competitors from the competitive intelligence dashboard, with n.

MODEL
- For each change, estimate exposure: open pipeline it touches, times how likely the change comes up in those deals, times how much it could move the win rate. Give a low and high for the last two and say why.
- Rank by expected pipeline at risk. Put product changes on the same scale as upside: deals the change helps.
- Check the ranking's stability: if my two shakiest assumptions double or halve, does the top three change?
- If you can run code, compute the ranking in a small table I can reuse next week with new inputs.

OUTPUT
A ranked table: change, deals touched, pipeline exposed, likelihood range, expected impact, why. Then the three items for the digest, each with the one thing a rep should do differently.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a link between a change and a deal: a deal counts only if the competitor is on it or the change touches its stated requirement.
```

### Update how worried to be about a rival

```
Tell me whether a competitor's recent moves should change how worried we are, using a Bayesian update instead of gut feel. Use Calven MCP for our track record against them and the week's new evidence.

FILL IN
- Competitor: [competitor]
- Window for new evidence: [window, e.g. last 30 days]
- Escalation threshold: [the win rate below which you'd run a field alert, or write "suggest one"]

CONTEXT
A signal lands and someone asks if we should panic. I want a reasoned answer: where we stood, what the new evidence says, and how far it should move us.

FROM CALVEN
- Our win rate against the competitor over the trailing 12 months from the competitive intelligence dashboard, with n.
- Their competitive signals in the window, with severity and confidence.
- Deals lost to them in the window, with the deciding drivers, and buyer quotes that mention them.

METHOD
- Turn the 12-month win rate into a prior distribution sized by its n (a beta distribution if you can run code).
- Treat each piece of new evidence as a likelihood: how much more likely is it if we're losing ground than if we aren't? State each ratio as your assumption and justify it in one line.
- Update step by step and show how far each item moved the estimate.
- Report the posterior range, the chance we're below my threshold, and what evidence next week would settle it.

OUTPUT
A one-page memo: prior, evidence table with likelihood ratios, posterior range, verdict (watch, brief reps, or escalate), and the two signals to watch next.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't treat a signal as evidence of lost deals unless a deal or quote ties to it.
```

### Check if last month's digest changed what reps say

```
Test whether a digest instruction changed behaviour on calls, with a before and after comparison of what reps actually said. Use Calven MCP for rep quotes from calls and the approved line.

FILL IN
- Digest item: [paste the instruction, e.g. "lead with the migration answer when the buyer raises switching cost"]
- Sent on: [date the digest went out]
- Comparison windows: [e.g. 30 days before and 30 days after]

CONTEXT
I send a digest every week and have no idea if it lands. I want one item tested properly, so I know whether the format works or I'm writing into the void.

FROM CALVEN
- Rep quotes from calls in both windows that touch the item's topic, with author and date.
- The approved line for the topic from the messaging document.
- How often buyers raised the topic in both windows, from customer quotes, so a change in rep lines isn't just a change in what buyers asked.

METHOD
- Code every rep quote in both windows: approved line, close paraphrase, old line, or off-message. Show five coded examples so I can check your judgement.
- Compare the share of approved or close lines before and after, per rep where there's enough data.
- Control for exposure: normalise by how many times buyers raised the topic.
- Say whether the difference could be noise. If you can run code, run a two-proportion test and give the p-value and the minimum change this sample could detect.

OUTPUT
A before and after table per rep, the overall change with its uncertainty, a verdict on the item, and one change to how I write digest items.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Quote rep lines verbatim, and don't count a call as on-message without a quote that shows it.
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
- Which competitor had the most signals this week, and did any of them touch an open deal?
- Which objection showed up on calls this week for the first time in 90 days?
- Did any buyer quote this week contradict a claim in our product brief?
- Which product change this month still has an open drift finding against a published document?
- Which open deals have a competitor that changed pricing in the last 30 days?
- What did buyers praise this week that reps aren't mentioning on calls?
