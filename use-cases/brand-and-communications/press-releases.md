# Press releases


You've got a launch, a customer, a partnership, funding or a hire to announce in under 500 words a journalist can use. You walk away with a release that says what changed for the market and why now, an executive quote with a point of view, a customer quote with a result, and pitch angles the press cares about. Calven gives you the checked facts and the customer evidence to turn the launch deck's feature description into what it changes for whom, so the executive, the customer and legal approve it on the first pass.

## Prompts

### Frame the news and build the fact sheet

```
Using Calven MCP, frame the news for a press release about the announcement below.

FILL IN
- Announcement: [describe the announcement]
- Type: [launch / customer / partnership / funding]
- Date: [date]

CONTEXT
We are announcing it on the date given. Before I draft I want the frame: what changed for the market and why now, and the facts I am allowed to state.

PULL FROM THE UNIVERSE
- Our positioning: category, unique attributes, "why now" trends.
- The trends and market opportunities this announcement serves, with dates.
- The product brief sections for what is being announced, and the product changes recorded for it.

BUILD
- The headline claim: what this changes and for whom, in one line.
- The "why now" in two sentences, tied to a tracked trend.
- The facts: what it does, who it is for, pricing and availability as the brief states them.
- What we may not claim.

OUTPUT
The frame and the fact sheet, with sources.

GROUNDING
Ground every line in the Universe and cite it. Do not add market statistics or capabilities the Universe does not hold. If the brief does not yet cover the announcement, say so.
```

### Draft the executive and customer quotes

```
Using Calven MCP, draft the executive quote and find the customer quote for the release below.

FILL IN
- Announcement: [announcement]
- Executive: [name, title]
- Account: [customer or partner account]
- Contact: [name, title]

CONTEXT
The executive quote states why this exists; the customer quote states a result.

PULL FROM THE UNIVERSE
- Our positioning statement and the problem buyers name most, with a verbatim quote.
- Every quote on record from the account, with category, highlight tags and state.
- The deal context for the account: what they bought, the competitors in play, the champion.

BUILD
- Two executive quote options: problem framing, why now, what changes for the buyer. Under 50 words each.
- The three strongest customer quotes on record, verbatim, with whether each is approved for marketing use.
- A suggested customer quote for the release built only from those lines, marked for the customer's approval.

OUTPUT
The quote options and the customer evidence, with sources.

GROUNDING
Use only positioning and recorded quotes in the Universe and cite them. Do not write a customer quote from nothing; if no quote is on record, say so and list what to ask the customer.
```

### Draft the press release

```
Using Calven MCP, draft the press release for the announcement below.

FILL IN
- Announcement: [announcement]
- Frame: [paste the frame]
- Fact sheet: [paste the fact sheet]
- Quotes: [paste the quotes]

CONTEXT
Under 500 words. Structure: headline, subheadline, dateline, lead (who, what, when, where, why in 50 words), body (the problem, what changes, the facts), executive quote, customer quote, availability and pricing, CTA, boilerplate.

PULL FROM THE UNIVERSE
- Our boilerplate and one-liner from the messaging document.
- The value pillar this announcement proves.

WRITE
- The release in full, in plain language, claims only from the fact sheet.
- Three headline options.

OUTPUT
The release in markdown with the headline options above it and a source list below.

GROUNDING
Use only the frame, fact sheet and quotes, and the boilerplate in the Universe, and cite. Do not add adjectives, superlatives or claims not in the fact sheet.
```

### Check every claim in the release

```
Using Calven MCP, check every claim in this press release.

FILL IN
- Draft: [paste the draft]

CONTEXT
The draft goes to legal and the CEO next.

PULL FROM THE UNIVERSE
- The product brief and product changes.
- The claims register.
- The battlecard for any competitor referenced or implied.
- Recorded quotes for every quoted line.

CHECK
- Each product, pricing and availability claim: correct, wrong, stale or not in the brief.
- Each quote: verbatim against the record or marked "pending approval".
- Any "first", "only", "leading" claim: supported by a proof point, or to remove.
- Any line that states or implies something about a competitor: supported by the battlecard, or to remove.

OUTPUT
The draft annotated inline, then the list for legal with sources.

GROUNDING
Judge only against the Universe and cite. Mark anything unsupported "unverified"; do not supply a fact from your own knowledge.
```

### Write the pitch angles and the FAQ

```
Using Calven MCP, write the pitch angles and the FAQ for the release below.

FILL IN
- Announcement: [announcement]
- Beat: [beat]

CONTEXT
The release is approved. I need three angles for journalists who cover the beat, and an FAQ for sales, support and social who will field questions on launch day.

PULL FROM THE UNIVERSE
- The trends and analyst findings the announcement connects to.
- The objections our personas raise about this product area, and our objection handling.
- The battlecard lines for competitors likely to be mentioned.
- The product brief for the facts.

BUILD
- Three pitch angles, each tied to a trend or finding, with the one-line hook and the data point on record.
- An FAQ of twelve questions a customer, prospect or journalist will ask, each answered from the Universe, with "do not say" notes where the brief is silent.

OUTPUT
The angles and the FAQ, with sources.

GROUNDING
Use only trends, findings, objections, battlecards and the brief in the Universe and cite them. Do not invent questions or answers; if a likely question has no answer on record, list it for the PMM.
```

## Advanced prompts

### Red-team the release as the press would

```
Red-team the release as three hostile readers would: a skeptical reporter, the competitor's comms lead and the customer's legal team. Use Calven MCP for the facts the release stands on and the competitor's likely angle.

FILL IN
- Release: [paste the draft]
- Competitor: [competitor most likely to respond]
- Customer: [account quoted in the release]

CONTEXT
The release goes to the whole market at once. Anything inflated gets quoted back at us, and the customer's approval cycle can kill a sentence a day before launch.

FROM CALVEN
- The product brief, product changes for the feature, and claims with a concern flagged.
- The competitor's dossier (talk track against us, bullshit detector) and their signals from the last quarter.
- The customer's quotes on record and their account details.

RED-TEAM
- The reporter marks every claim they'd ask us to prove, and writes the least flattering honest headline the release supports.
- The competitor's comms lead writes the three-line response they'd post that day, on their recorded positioning.
- The customer's legal reader marks every line about them that goes beyond what they said on record.
- Then fix: rewrite only the lines that drew fire, and say which attacks are left standing and why that's acceptable.

OUTPUT
The release annotated by attacker, the competitor's likely response, and the hardened release.

GROUNDING
Every fix cites a Calven source. The competitor's response is your extrapolation from their dossier; don't invent a capability for them.
```

### Run a headline tournament with readers

```
Run a headline tournament: pit candidate headlines against each other in pairs, judged by the people who'll read them, and rank them. Use Calven MCP for the personas and the buyer language behind each judge.

FILL IN
- Headlines: [paste six to ten headline and subhead pairs]
- Story: [the announcement in two sentences]

CONTEXT
Everyone has a favourite headline and argues from taste. Pairwise judging settles it faster and shows why one wins.

FROM CALVEN
- The buyer and user personas the release targets, with their canvases.
- Customer quotes and themes on the problem the announcement solves.
- A persona review of the full headline set.

METHOD
- Judges: each persona, plus a trade reporter who reads 200 releases a week.
- Every judge sees every pair and picks one, with a one-line reason in their own words. Shuffle the order to avoid position bias.
- Rank the headlines with an Elo or Bradley-Terry score. If you can run code, compute it; otherwise tally wins.
- Show where judges disagree: a headline the reporter loves and buyers ignore is a news hook, not a sales line.

OUTPUT
The ranked list with scores and wins per judge, the top headline with its three best reasons, and a hybrid if two headlines win different judges.

GROUNDING
Persona preferences trace to canvases, quotes or the review, cited. Mark the reporter's picks as your simulation.
```

### Decide whether to announce or wait

```
Decide whether to announce on the planned date or wait for a stronger version, with an expected-value decision tree. Use Calven MCP for what waiting would buy: the customer proof, the market timing and the competitor's pace.

FILL IN
- Announcement: [the news]
- Planned date: [date]
- What waiting gets: [a named customer, a number, a feature or an analyst mention, and how long each takes]
- Value of coverage: [your rough value of strong, average and weak coverage]

CONTEXT
A release with a named customer and a number gets covered; one without often doesn't. But waiting costs something if a competitor gets there first or the trend cools.

FROM CALVEN
- The customer quotes we hold for this announcement, and whether any are tagged Quantified outcome.
- Competitor signals in the same area over the last two quarters, to gauge their pace.
- The trend the announcement rides on, with its horizon and status.

MODEL
- Build a decision tree: announce on the date, or wait for each upgrade. At each chance node, assign probabilities for strong, average and weak coverage, and for a competitor announcing first.
- Compute the expected value of each branch, with the probabilities as ranges.
- Run a sensitivity: how likely must a competitor beat us before announcing on the date wins, and how much the customer number adds.

OUTPUT
The tree (drawn, or as a table), the expected value per branch, the threshold that flips the decision, and the recommendation in three lines.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a competitor's launch date; their pace is a range from recorded signals.
```

## Ad hoc questions

- What is our current boilerplate, word for word?
- What does the product brief say about [feature] and its pricing?
- Which trend does this launch connect to, and what is its "so what"?
- Do we have an approved quote from [account] about [topic]?
- What problem do buyers name most that this announcement addresses? Quote them.
- Is "[claim]" supported by a proof point?
- Which product changes were recorded for [feature]?
- What will [persona] object to when they read this?
- What does the battlecard say we may say about [competitor]?
- Give me our one-liner and the category we claim.
- Which customers in [segment] have quotes tagged Quantified outcome?
- Has anything in the product brief changed since the last release we sent?
- Which competitor announced something similar in the last 90 days, and how did they frame it?
- Which customer quote has a number we could use in the second paragraph?
- Which claims in this release have a concern flagged: [paste]
- What does the messaging matrix say to [persona] at awareness, for the subhead?
- Which analyst finding supports the "why now" in this release?
