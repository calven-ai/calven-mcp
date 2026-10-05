# Paid ads


You need headlines, body copy and CTAs for search, social and display that stop the right buyer, say what they already think and promise only what the product does. You walk away with variants per persona and angle, ranked by the persona's reaction, fact-checked and ready to load. With Calven you're not testing the writer's guesses with money.

## Prompts

### Write ad variants and rank them

```
Using Calven MCP, write ad variants for the persona in the segment below and tell me which they would pick.

FILL IN
- Persona: [persona]
- Segment: [segment]
- Stage: [buying stage]
- Channel: [search / LinkedIn / display]
- Offer: [the CTA]
- Headline limit: [n] characters
- Body limit: [n] characters

CONTEXT
Write for the channel and the offer above, within the headline and body limits.

PULL FROM THE UNIVERSE
- The pain the persona names most, with the verbatim quotes.
- Our value proposition and pillar for the persona at the stage.
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
```

### Write ads for competitor searches

```
Using Calven MCP, write ads for buyers searching for the competitor below.

FILL IN
- Competitor: [competitor]

PULL FROM THE UNIVERSE
- The competitor's battlecard: where we win, landmines, where we lose.
- Why buyers switched from them, with quotes.
- The claims register, for comparative claims already flagged.

WRITE
- Four headlines that set a landmine without naming the rival.
- The one claim per headline, with its evidence.
- What not to write.

OUTPUT
The headlines with sources and the "do not claim" list.

GROUNDING
Only the battlecard, deals and quotes, cited. No claim about the competitor the dossier does not hold.
```

### Diagnose why an ad lost

```
Using Calven MCP, tell me why this ad underperformed for the persona below.

FILL IN
- Persona: [persona]
- Variant: [the losing variant's headline / body]
- Variant click rate: [rate]
- Winner: [the winning variant's text]
- Winner click rate: [rate]

CONTEXT
The variant's click rate is below the winner's.

PULL FROM THE UNIVERSE
- The persona's canvas and the pains they name most.
- Customer language on the topic, and the language gaps in our messaging.

DIAGNOSE
Why the loser missed, in three lines, grounded in the persona and quotes. Then two new variants that fix it.

GROUNDING
If the Universe does not explain the difference, say so and suggest what to test.
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
