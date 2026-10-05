# Deal desk and pricing feedback


A discount request is on your desk, and finance and PMM want the quarterly pricing conversation. You get a deal-desk check that takes a minute and a one-page pricing read with samples and the buyer's words: where buyers place us against competitors, whether price actually decides deals, and what competitors changed. Calven turns both from anecdote into evidence.

## Prompts

### Build the quarterly pricing read

```
Using Calven MCP, build the pricing read for the quarter below for finance and PMM.

FILL IN
- Quarter: [quarter]
- Competitors: [the two competitors to compare]

PULL FROM THE UNIVERSE
- The pricing verdicts from win/loss surveys (cheaper, on par, pricier) and the win rate within each bucket, with samples.
- The commercials drivers on won and lost deals, with the buyer's words.
- Pricing and packaging for the competitors from their dossiers, and any pricing signals this quarter.
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
```

### Decide one discount request

```
Using Calven MCP, should I approve the discount below on the deal below?

FILL IN
- Deal: [deal]
- Discount: [percent]

PULL FROM THE UNIVERSE
- The deal: segment, size band, competitor, price feedback, stage.
- Won and lost deals in the same segment and size band with price feedback "More expensive": how many closed.
- The battlecard for the competitor on the deal: their pricing and the "where we lose" section.

OUTPUT
The pattern in three lines and the question to ask the rep before approving.

GROUNDING
Use only CRM records and the battlecard in the Universe, cited with samples. This is a pattern check, not a margin decision.
```

### See how often price decides deals

```
Using Calven MCP, how often does price actually decide a deal for us?

FILL IN
- Window: [time window, e.g. last two quarters]

PULL FROM THE UNIVERSE
- The deciding forces read (competitive, capability, experience, commercials) for the window.
- Commercials drivers ranked as deciding, won and lost, with quotes.

OUTPUT
The share of deals decided by commercials, the top three commercials drivers each way, and three quotes.

GROUNDING
Dashboard figures only, cited with n; verbatim quotes.
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
