# What changed this week

**Team:** Sales enablement · also product marketing, sales leadership
**Impact:** High. The weekly digest is the one enablement asset every rep reads. Built from recorded competitor moves, new objections and product changes, it stops reps pitching last month's story.
**Prerequisites:** competitors tracked (signals, battlecards). Better with call transcripts ingested (new objections, themes), own website monitored (product changes, drift) and win/loss surveys running (fresh deal drivers).

## What the team is trying to do

Tell the field, every Monday, what moved: which competitor cut a price or shipped a feature, which objection started showing up on calls, which asset was updated, what the product released and what that changes in the pitch. Done means a short post reps act on, with a link to the updated battlecard or talk track behind each item. Without the company's own knowledge the digest is whatever the enablement manager happened to hear, so it skips the week nobody told them anything.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect competitor moves | Scan news, pricing pages, release notes, rep chatter for the week | Every competitive signal recorded in the window, with severity, source and the so-what | Competitive signals, competitor rows |
| 2 | Collect new objections | Ask managers, skim call recordings | Objections customers raised on calls in the window, how often, and whether the messaging covers them | Quotes (category Objection), themes, messaging dashboard (objections) |
| 3 | Collect product changes | Read release notes, ask product | Changes to our own product detected in the window, and which published documents they left stale | Product changes, drift findings |
| 4 | Check what the losses say | Read the week's closed-lost reasons | Deal drivers extracted this window, and the loss reasons on deals closed this week | Deal drivers, CRM deals, win/loss dashboard |
| 5 | Decide what reps must do differently | Judge which items change the pitch | Which battlecard sections changed, which objection has no talk track line, which claim is now stale | Battlecards, messaging (objection handling), claims |
| 6 | Write the digest | Draft the post, link the assets | A draft in the digest format with one line per item and the source | All of the above |
| 7 | Post and track | Publish in Slack or the enablement platform, watch who read it | Calven does not help here. The Calven agent can post its own weekly digest in Slack; this page is the version the person asks for in their AI tool | |

## Recommended prompts

### Step 1 to 4: the weekly collection

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

### Step 5: what reps must do differently

```
Using Calven MCP, turn last week's changes into field instructions.

CONTEXT
Below is the list of changes I am including this week. For each one I need the instruction for reps and the asset that backs it.

PULL FROM THE UNIVERSE
- The battlecard for each competitor named, in particular How We Win, Where We Lose and Objection Handling.
- The messaging document's objection handling section.
- The product brief for any capability the changes touch.

BUILD
- For each change: the one-line instruction ("stop claiming X", "lead with Y against [competitor]", "answer Z this way"), the asset it points to, and whether the asset already reflects the change.
- A list of assets that do not yet reflect a change, for the owner to update in Calven.

OUTPUT
The instructions in the order of the list, then the asset gap list.

GROUNDING
Base every instruction on the battlecard, messaging or brief in the Universe and cite the section. Do not invent an answer to an objection the documents do not cover; flag it instead.

[paste the list of changes]
```

### Step 6: write the digest

```
Using Calven MCP, write this week's enablement digest.

CONTEXT
Audience: every AE and SDR. Format: a Slack post under 200 words, headline first, one line per item, the source in brackets, the asset link placeholder in square brackets. Tone: plain, no hype.

PULL FROM THE UNIVERSE
- The items below, each already checked against the battlecard, messaging and product brief.

WRITE
- A headline with the number of changes.
- One line per item: what changed, what to do, [asset].
- A closing line naming the one thing to practise this week.

OUTPUT
The post, ready to paste.

GROUNDING
Do not add items beyond the list. Keep every fact as recorded in the Universe.

[paste the checked items]
```

### Review mode: check a digest someone else drafted

```
Using Calven MCP, check this enablement digest before it goes out.

CONTEXT
Below is a draft digest. I need every item verified against what Calven recorded and anything missing added.

PULL FROM THE UNIVERSE
- Competitive signals, customer objections, product changes and deal drivers from the last 7 days.

CHECK
- Mark each item confirmed, wrong or not recorded, with the source.
- List recorded changes the draft leaves out.

OUTPUT
The annotated draft, then the omissions.

GROUNDING
Judge only against the Universe and cite it. Do not add items you cannot source.

[paste the draft digest]
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

## Good practice

- Ask for the window explicitly ("last 7 days"). Signals and quotes carry dates; the AI tool filters by them.
- Ask for the so-what with every signal. A price cut without the instruction is news, not enablement.
- Keep the digest to what changes the pitch. Ask the AI tool to order by impact, then cut the bottom half.
- Separate "recorded" from "decided". The digest reports a competitor move; whether the battlecard changes is the PMM's call, made in Calven.
- Run the review prompt on the final draft even when you wrote it. It catches the item you heard in a hallway and never verified.
- Save the collection prompt as a snippet and run it every Monday before the post.

## Not covered today

- Posting the digest and tracking who read it. That happens in Slack or the enablement platform. The Calven agent can post its own weekly digest to a channel; the prompts here are for the person writing their own.
- Updating a battlecard or the messaging. The gap goes to the PMM, who approves the change in Calven.
- Competitor news from the open web in real time. Calven's competitive intelligence agent records signals on its own schedule; the AI tool reads what has been recorded.
