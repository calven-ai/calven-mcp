# Deal desk and pricing feedback

**Team:** Sales leadership · also finance and investor relations, product marketing, revenue operations
**Impact:** Medium. Discount approvals and the quarterly pricing conversation with finance both run on anecdote; what buyers said about price in surveys, how often "pricier" deals still close, and where competitors moved their pricing turn it into evidence.
**Prerequisites:** win/loss surveys running (pricing verdicts, drivers), CRM connected (deals with price feedback), competitors tracked (pricing in dossiers, pricing signals). Product brief approved for our own packaging.

## What the team is trying to do

Decide a discount request with the pattern behind it, and give finance and PMM a quarterly read on price: where buyers place us against competitors, whether price actually decides deals, and what competitors changed. Done means a one-page pricing read with samples and the buyer's words, and a deal-desk check that takes a minute.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | The pricing picture | Where buyers place us | Pricing verdicts (cheaper, on par, pricier) and the deals behind each | Win/loss dashboard (surveys: pricing and legal), pricing deals drill-down |
| 2 | Does price decide | Price as a deciding driver | Commercials drivers on won and lost deals, with quotes | Deal drivers, win/loss (deciding forces) |
| 3 | Competitor pricing | What they charge and changed | Pricing and packaging in dossiers; pricing signals | Competitor deep dive, competitive signals, competitive intelligence (market movement) |
| 4 | Deal-desk check | Should this discount be approved | Similar deals' price feedback and outcome; what the battlecard says about the competitor's pricing | CRM deals, competitor battlecard |
| 5 | Our packaging | What the plan includes | Pricing and packaging in the product brief | Product brief |
| 6 | Decide and record | Approve, counter, decline | Calven does not help here | |

## Recommended prompts

### Steps 1 to 3: the quarterly pricing read

```
Using Calven MCP, build the pricing read for [quarter] for finance and PMM.

PULL FROM THE UNIVERSE
- The pricing verdicts from win/loss surveys (cheaper, on par, pricier) and the win rate within each bucket, with samples.
- The commercials drivers on won and lost deals, with the buyer's words.
- Pricing and packaging for [competitor] and [competitor] from their dossiers, and any pricing signals this quarter.
- Our pricing and packaging from the product brief.

BUILD
- Where buyers place us and how often "pricier" deals still close.
- Whether price decided deals this quarter or was named but outweighed, with quotes.
- Competitor pricing moves and what they mean for our tiers.
- Two recommendations with the evidence.

OUTPUT
A one-page read with samples and sources.

GROUNDING
Use only the Universe, cited with n. Verbatim quotes. Do not estimate competitor pricing the dossier does not state; say "not disclosed".

[name the quarter and the competitors]
```

### Step 4: a discount request

```
Using Calven MCP, should I approve a [percent] discount on [deal]?

PULL FROM THE UNIVERSE
- The deal: segment, size band, competitor, price feedback, stage.
- Won and lost deals in the same segment and size band with price feedback "More expensive": how many closed.
- The battlecard for the competitor on the deal: their pricing and the "where we lose" section.

OUTPUT
The pattern in three lines and the question to ask the rep before approving.

GROUNDING
Use only CRM records and the battlecard in the Universe, cited with samples. This is a pattern check, not a margin decision.

[name the deal and the discount]
```

### Step 2: does price decide

```
Using Calven MCP, how often does price actually decide a deal for us?

PULL FROM THE UNIVERSE
- The deciding forces read (competitive, capability, experience, commercials) for [window].
- Commercials drivers ranked as deciding, won and lost, with quotes.

OUTPUT
The share of deals decided by commercials, the top three commercials drivers each way, and three quotes.

GROUNDING
Dashboard figures only, cited with n; verbatim quotes.

[name the window]
```

## Ad hoc questions

- How do buyers rate our price against [competitor]?
- How many "pricier" deals did we still win this year?
- What did buyers say about our pricing in lost deals? Quote them.
- Did [competitor] change pricing this quarter?
- What does [competitor] charge, according to the dossier?
- Which plan includes [feature]?
- What is the win rate for deals with "More expensive" price feedback?
- Which segment names price as the loss reason most?
- What commercial terms came up as drivers besides price?
- What does the battlecard say about [competitor]'s cost traps?

## Good practice

- Ask for the bucket win rates first. "Pricier and still won" is the figure that changes discount policy.
- Keep margin, floors and approval limits in the deal desk tool; Calven gives the pattern.
- Quote buyers verbatim to finance. "Too expensive" and "expensive but worth it" are different decisions.
- Treat competitor pricing from dossiers as dated; ask for the signal date.
- Send the quarterly read to PMM as well; packaging changes start there.

## Not covered today

- Margins, discount floors, approval workflow and the quote itself.
- Competitor list prices beyond what the dossier recorded.
- Changing our pricing or packaging; the product brief is edited in Calven.
