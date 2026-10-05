# Paid ads

**Team:** Demand generation · also product marketing, agencies
**Impact:** High. Ad copy is tested with budget; copy written in the customer's words and tested on the persona before spend cuts the cost of learning what lands.
**Prerequisites:** personas approved, messaging approved, product brief approved. Better with transcripts ingested (customer language, pains), win/loss (what decides deals in the segment).

## What the team is trying to do

Write headlines, body copy and CTAs for search, social and display that stop the right buyer, say what they already think, and promise only what the product does. Done means a set of variants per persona and angle, ranked by the persona's reaction, fact-checked, ready to load. Without the Universe the variants are the writer's guesses, tested with money.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the audience and angle | Persona, segment, the pain or trigger | Top pains and triggers by persona, with quotes | Themes, quotes, voice-of-customer dashboard |
| 2 | Set the message and offer | Pillar, value prop, CTA | Messaging matrix | Messaging |
| 3 | Write variants | Headlines, body, CTA per channel | In the customer's words | Quotes, persona messaging hooks |
| 4 | Test on the persona | Which variant they would click | Persona review | `review_against_personas` |
| 5 | Fact-check | Claims in 30 characters still have to be true | Product brief, claims | Product brief, claims |
| 6 | Competitive and brand terms | Ads on rival terms | Battlecard landmines, safe claims | Battlecards, deep dive |
| 7 | Load and run | Ad platform, audiences, budget | Calven does not help here | |
| 8 | Read results and iterate | Winners, losers, why | Persona and language read on losers | Quotes, persona canvas |

## Recommended prompts

### Step 1 to 4: variants, tested

```
Using Calven MCP, write ad variants for [persona] in [segment] and tell me which they would pick.

CONTEXT
Channel: [search / LinkedIn / display]. Offer: [the CTA]. Limits: headline [n] characters, body [n] characters.

PULL FROM THE UNIVERSE
- The pain [persona] names most, with the verbatim quotes.
- Our value proposition and pillar for [persona] at the [stage] stage.
- The product brief entry for what the ad promises.
- Then run the persona review on the variants.

WRITE
- Five headlines in the customer's words, each opening on a different quote.
- Body copy for the top three, one proof each.
- The persona's verdict per variant: click, scroll past, or distrust, and why.

OUTPUT
The variants ranked by verdict, with the quote each one came from.

GROUNDING
Use only pains and phrases grounded in quotes and claims in the product brief, cited. Do not promise outcomes the brief does not support.

[name the persona, segment, channel, offer and limits]
```

### Step 6: competitor-term ads

```
Using Calven MCP, write ads for buyers searching for [competitor].

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: where we win, landmines, where we lose.
- Why buyers switched from them, with quotes.
- The claims register, for comparative claims already flagged.

WRITE
- Four headlines that set a landmine without naming the rival.
- The one claim per headline, with its evidence.
- What not to write.

OUTPUT
The headlines with sources and the "do not claim" list.

GROUNDING
Only the battlecard, deals and quotes, cited. No claim about [competitor] the dossier does not hold.

[name the competitor]
```

### Step 8: why a variant lost

```
Using Calven MCP, tell me why this ad underperformed for [persona].

CONTEXT
Variant: "[headline / body]". Click rate [rate] vs the winner's [rate]. The winner: "[text]".

PULL FROM THE UNIVERSE
- The [persona] canvas and the pains they name most.
- Customer language on the topic, and the language gaps in our messaging.

DIAGNOSE
Why the loser missed, in three lines, grounded in the persona and quotes. Then two new variants that fix it.

GROUNDING
If the Universe does not explain the difference, say so and suggest what to test.

[paste both variants and the numbers]
```

## Ad hoc questions

- What pain would make [persona] click, in their words?
- Give me five headline phrases customers used about [topic].
- Which claim can an ad make about [capability]?
- Would [persona] trust "[headline]"?
- What is our approved CTA language for [offer]?
- What do customers call [category]?
- Which landmine can I set against [competitor] in a headline?
- Which words in our messaging do customers never use?
- What proof fits a 90-character body line about [outcome]?
- Which persona responds to [trigger] most?

## Good practice

- One persona per set. A headline for two personas lands with neither.
- Open every headline on a quote. The reviewer then has a source for the choice.
- Run the persona review before the budget, not after the first week.
- Keep a "do not claim" list per campaign from the fact-check.
- Feed losers back with their numbers; the diagnosis improves the next set.

## Not covered today

- Audiences, bidding, budgets and the ad platforms.
- Creative and video.
- Performance numbers, which the person pastes in.
