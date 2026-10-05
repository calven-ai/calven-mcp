# Comparison and alternatives pages

**Team:** Content marketing · also product marketing, competitive intelligence, legal
**Impact:** High. Comparison pages meet buyers at the decision and convert at a multiple of a blog post. One built from the battlecard and real loss reasons holds up with buyers, sales and legal; one built from a feature checklist gets rewritten after the first complaint.
**Prerequisites:** competitors tracked (battlecards, deep dives, signals), strategy documents approved (positioning, product brief). Better with win/loss surveys running (deal drivers, competitor win rates) and call transcripts ingested (competitor mentions, quotes from switchers).

## What the team is trying to do

Publish a "[us] vs [competitor]" page, a "[competitor] alternatives" page, or a category comparison that a buyer in evaluation trusts: honest about where the competitor wins, specific about where we win, with proof from customers who chose us. Done means sales sends the page to prospects, legal has signed off on every claim, and the page is updated when the competitor moves. The hard part is that the competitive truth lives in the battlecard, the win/loss data and the heads of the sellers, and the writer has none of it.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Choose the competitors | Pick the three to five rivals worth a page | Which competitors appear most in deals, our win rate against each, fight or avoid | Competitive intelligence dashboard, competitors |
| 2 | Pick the page type and intent | "X vs Y", "Y alternatives", category comparison | The ICP segment and persona that evaluates us against this rival | ICP, personas, deal drivers by competitor |
| 3 | Build the comparison matrix | Features, pricing, integrations, support, fit | The feature comparison and pricing sections of the dossier, our product brief | Competitor deep dive, product brief |
| 4 | Find where we win and lose | The honest read | "How we win", "where we lose", landmines, bullshit detector from the battlecard; loss and win drivers against this competitor | Battlecard, deal drivers, win/loss head-to-head |
| 5 | Collect switcher proof | Customers who chose us over the rival | Quotes with a competitor mention, displacement wins, proof points | Quotes (Competitor mention), battlecard proof points |
| 6 | Write the page | Headline, the buyer's problem, the comparison, the honest trade-offs, proof, CTA | Draft from steps 3 to 5 in the buyer's words | All of the above |
| 7 | Fact and claims check | Every claim about us and about them | Product brief for us, dossier for them, the claims register | Product brief, deep dive, claims |
| 8 | Legal review | Comparative advertising rules, trademark use | Calven does not help here. The page carries the sources legal needs | |
| 9 | Publish and distribute | CMS, sales enablement, paid | Calven does not help here | |
| 10 | Keep it current | Update on competitor moves | Recent signals for this competitor; which claims on the page a signal invalidates | Competitive signals, claims |

## Recommended prompts

### Step 1 and 2: which pages to build

```
Using Calven MCP, tell me which comparison pages are worth building.

CONTEXT
We can build three to five comparison or alternatives pages this quarter. I want to spend them on the competitors that decide deals.

PULL FROM THE UNIVERSE
- The competitive intelligence read: which competitors appear in the most deals, our win rate against each, and the fight-or-avoid verdict.
- The loss reasons by competitor from win/loss.
- The ICP segments and personas where each competitor shows up.

BUILD
- A ranked list of competitors with: deals involved, our win rate (with n and window), the segment that evaluates us against them, and the top loss and win drivers.
- For each, the page type that fits the buyer's intent: head-to-head, alternatives, or category comparison.
- The three to five pages to build first and why.

OUTPUT
A table plus a five-line recommendation.

GROUNDING
Use only the dashboard numbers and win/loss drivers in the Universe and cite n and the window. Do not infer a competitor's importance from your own knowledge of the market. If win/loss has too few deals against a competitor, say so.
```

### Step 3 and 4: the comparison and the honest read

```
Using Calven MCP, build the comparison matrix and the honest read for a [us] vs [competitor] page.

CONTEXT
The page is for [persona] in [segment] at the evaluation stage. It must be credible to a buyer who has demoed both.

PULL FROM THE UNIVERSE
- The dossier for [competitor]: product, pricing and packaging, feature comparison, strengths, weaknesses.
- The battlecard for [competitor]: how we win, where we lose, landmines, bullshit detector.
- Our product brief: capabilities, integrations, pricing, differentiators and known weaknesses.
- Win and loss drivers against [competitor], with the buyer's words.

BUILD
- A comparison table on the dimensions this persona decides on, with what each side offers and the source.
- "Where we win": three to five areas, each with the proof.
- "Where they win": the honest areas, in neutral language.
- The two claims the competitor makes that do not hold, and the evidence.

OUTPUT
The matrix and the two lists, with a source per cell.

GROUNDING
Use only the dossier, battlecard, product brief and win/loss evidence in the Universe and cite them. Do not add competitor facts from your own knowledge; the dossier's "Sources & Freshness" section says how current it is. Mark any dimension where the dossier is thin as "unverified".

[name the competitor, persona and segment]
```

### Step 5: switcher proof

```
Using Calven MCP, collect the proof for a page comparing us with [competitor].

CONTEXT
I need evidence from customers who chose us over [competitor] or left them for us.

PULL FROM THE UNIVERSE
- Customer quotes that mention [competitor], with the speaker's role and account.
- Displacement wins and proof points from the battlecard.
- Win drivers against [competitor] with the evidence quote behind each.

BUILD
- Five quotes usable on the page, verbatim and attributed as far as the workspace allows.
- The outcomes customers named (time to value, cost, consolidation), each with its quote.
- A note on which quotes need customer approval before publishing.

OUTPUT
A proof section, verbatim quotes only.

GROUNDING
Use only quotes recorded in the Universe and cite each. Do not paraphrase a quote into something stronger. If there are fewer than five, say how many exist.

[name the competitor]
```

### Step 6: write the page

```
Using Calven MCP, write a [us] vs [competitor] page for [persona] in [segment].

CONTEXT
Below are the comparison matrix, the honest read and the proof from the previous steps. Structure: the buyer's problem, when to pick us, when to pick them, the comparison table, three non-feature reasons we win, one switcher story, FAQ, CTA. Under 1,200 words. Competitor named in plain text, never linked.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains, jobs to be done, objections, how they talk.
- Our positioning: category frame and unique attributes.
- Our messaging objection handling for the objections this competitor's customers raise.

WRITE
- Open on the problem this persona has, in their words.
- Keep the honest trade-offs; a buyer who has seen both knows.
- Lead the "why us" with non-feature reasons where the evidence supports it: fit, time to value, support, implementation.
- Write the FAQ from the objections.

OUTPUT
The full page in markdown with a comparison table, plus a list of every claim and its source for legal review.

GROUNDING
Ground every claim in the Universe and cite it. Do not overstate; do not invent a weakness of the competitor; do not state a price for them that the dossier does not record. Flag any line that needs legal review.

[paste the matrix, the honest read and the proof]
```

### Step 7: claims check

```
Using Calven MCP, check every claim on this comparison page.

CONTEXT
Below is the page. Legal will review it next. I need every claim about us and about [competitor] marked.

PULL FROM THE UNIVERSE
- Our product brief and the claims register.
- The dossier and battlecard for [competitor], including "Sources & Freshness".
- Recent product changes on our side that may have made a claim stale.

CHECK
- Each claim about us: correct, wrong, stale or not in the brief.
- Each claim about them: supported by the dossier, unsupported, or outdated given the dossier's freshness date.
- Pricing statements on either side: recorded or not.

OUTPUT
The page annotated inline, then two lists: claims to fix and claims legal must review.

GROUNDING
Judge only against the Universe and cite the section. Where the Universe is silent, write "unverified", never "true".

[paste the page and name the competitor]
```

### Step 10: keep it current

```
Using Calven MCP, tell me whether our [competitor] comparison page is still right.

CONTEXT
Below is the live page. I want to know what [competitor] has done since it was published and which lines no longer hold.

PULL FROM THE UNIVERSE
- Competitive signals for [competitor] since [date]: launches, pricing changes, messaging shifts.
- The current battlecard and dossier.
- Our product changes since [date].

CHECK
- Each signal: does it change a claim on the page, and which one.
- Lines on the page the current battlecard no longer supports.
- Our own changes the page should now mention.

OUTPUT
A change list: line on the page, what changed, the suggested rewrite, the source.

GROUNDING
Use only signals and documents in the Universe and cite them with dates. If nothing has changed, say so.

[paste the page and the publish date, name the competitor]
```

### Alternatives page

```
Using Calven MCP, draft a "[competitor] alternatives" page.

CONTEXT
The reader is building a shortlist and has not narrowed to us. The page lists us first, then the other alternatives we track, each judged fairly. For [persona] in [segment].

PULL FROM THE UNIVERSE
- The competitors we track and their tier, descriptions and categories.
- The dossier for each: positioning, target buyer, pricing where recorded, strengths.
- Our ICP: who we fit best, and the disqualifiers.
- Our positioning: unique attributes and best-fit customer characteristics.

WRITE
- Why people look for an alternative to [competitor], from the loss reasons and quotes.
- Us: who we fit, where we win, honest limits.
- Each other alternative: who it fits, where it is strong, in neutral language.
- A "how to choose" section built on the ICP attributes.

OUTPUT
The page in markdown, competitors in plain text, with a source list.

GROUNDING
Describe every alternative only from its dossier in the Universe and cite it. Do not describe a competitor we do not track. Do not invent pricing.

[name the competitor, persona and segment]
```

## Ad hoc questions

- Which competitor shows up in the most deals, and what is our win rate against them?
- Where do we lose to [competitor]? Give me the buyer's words.
- What does the battlecard say about how we win against [competitor]?
- What does [competitor] charge, according to the dossier, and how fresh is that?
- Which claims does [competitor] make that do not hold up?
- Do we have customers who switched from [competitor]? Quote them.
- What has [competitor] changed in the last 90 days?
- On which dimensions is the dossier for [competitor] thin?
- Which of our known weaknesses will a buyer comparing us with [competitor] notice?
- What are the top objections from buyers evaluating us against [competitor]?
- Which segment evaluates us against [competitor] most often?
- Is "[claim about competitor]" supported by anything in the dossier?
- Who should buy [competitor] instead of us, honestly?
- What is [competitor]'s target buyer, according to the dossier?

## Good practice

- Build the honest read before writing. A page that admits where the competitor wins is the one buyers and legal accept.
- Ask for n and the window on every win rate and keep them off the public page unless the company publishes numbers.
- Keep competitor names in plain text and never link to their site.
- Ask for the dossier's freshness date and put the page on the review list when a new signal lands.
- Keep every quote verbatim and get customer approval before a name goes on the page.
- Run the claims check before legal, with the source list attached. Legal reviews faster when every line has a citation.
- Rerun the "keep it current" prompt quarterly and after any competitor launch.

## Not covered today

- Keyword research, the ranking pages and the page's performance.
- Live competitor facts. The dossier is as current as the competitive intelligence agent's last run; MCP does not browse the competitor's site.
- Legal sign-off on comparative claims and trademark use.
- Publishing, redirects, paid promotion and sales distribution.
- Updating the battlecard when a page exposes a gap. That happens in Calven with the competitive intelligence agent.
