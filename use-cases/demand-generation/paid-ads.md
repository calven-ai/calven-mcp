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

## Advanced prompts

### Find what drives the click with a conjoint test

```
Find which parts of an ad actually drive the click, with a conjoint-style test played by our personas. Use Calven MCP for the personas and the customer language that becomes each option.

FILL IN
- Personas: [two personas the ads target]
- Offer: [the offer: demo, trial, guide, webinar]
- Channel: [channel, e.g. LinkedIn or paid search]

CONTEXT
A/B testing whole ads tells me which ad won, not why. Before I brief the next round, I want to know whether the pain, the proof or the CTA carries the weight.

FROM CALVEN
- The persona canvases: pains, gains, objections, how they talk.
- Call quotes for each persona tagged Pain or Gain, and quotes with a Quantified outcome highlight.
- Approved claims from the product brief, so every option is one we can run.

METHOD
- Define four attributes with three levels each: the pain named (three pains from the quotes), the proof (a number, a customer, a peer quote), the tone (plain, provocative, peer to peer), the CTA.
- Generate 12 to 16 choice sets of three ad combinations. For each persona, pick one per set in character, with one line of reasoning grounded in the canvas.
- Estimate a part-worth for every level from the choices. If you can run code, fit a multinomial logit and show the utilities.
- Name the winning combination per persona and the attribute that matters most.

OUTPUT
A part-worth table per persona, the winning ad for each written out within the channel's character limits, and the real A/B test that would confirm the top finding.

GROUNDING
The choices are simulated: say so, and label the utilities as your model, not market data. Every level comes from a quote or the product brief, cited.
```

### Find the break-even cost per click by segment

```
Work out the most I can pay per click in each segment and still pay back. Use Calven MCP for what a won deal in each segment is worth and how long it takes to close.

FILL IN
- Segments: [the segments the ads target]
- Funnel rates: [paste click to lead and lead to opportunity, by segment if you have them]
- Current costs: [paste CPC by segment and campaign]
- Payback rule: [e.g. 12 months on gross margin, and the margin]

CONTEXT
The ad platform tells me cost per lead. It doesn't tell me that one segment's leads are worth five times another's, so budget drifts toward cheap clicks.

FROM CALVEN
- Win rate, average deal size and sales cycle per segment from the ICP dashboard, with n.
- Lead source, amount and outcome on closed deals in each segment, paged from the CRM, to check whether paid-sourced deals close smaller.

MODEL
- For each segment, value per click = click to lead × lead to opportunity × win rate × deal size × margin, discounted for the sales cycle.
- Break-even CPC is the value per click under my payback rule. Compare it to what I pay.
- Run sensitivity on each funnel rate and show the break-even as a range, not a point.
- Build it as a spreadsheet with formulas, one row per segment.

OUTPUT
The spreadsheet, segments ranked by headroom (break-even CPC minus actual CPC), and the budget move it implies.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. If a segment has too few closed deals, use the company rate and flag it. Don't infer a lead source where the CRM leaves it blank.
```

### Call the ad test early with a Bayesian read

```
Tell me whether I can call my ad test early, with a Bayesian read instead of waiting for significance. Use Calven MCP for a light prior from the persona review and the reason the losing ad loses.

FILL IN
- Variants: [paste each ad's copy]
- Results so far: [paste impressions, clicks and conversions per variant]
- Daily budget: [spend per day]
- Persona: [persona]

CONTEXT
The test has run ten days. Waiting for significance means another month of budget split between a winner and a loser. I want the probability each ad is best and the cost of being wrong.

FROM CALVEN
- A persona review of each variant.
- The persona's pains and objections from the canvas and call quotes.

METHOD
- Model each variant's click and conversion rates as beta-binomial. Run it once with a flat prior and once with a weak prior nudged by the persona review, and show both.
- Report the probability each variant is best and the expected loss of picking it: how much conversion I give up if I'm wrong.
- Recommend one call: stop and pick, keep running, or cut the weakest arm, against an expected-loss threshold I can see.
- Explain the loser in the persona's terms: the pain it missed or the objection it raised.
- If you can run code, simulate the posteriors and plot them.

OUTPUT
A probability-best table, the expected loss per choice, the call, and one line on why the loser lost.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The persona review only nudges the prior; never let it override the data.
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
- Which pain has the most mentions this quarter but no messaging pillar behind it?
- Which quote with a Competitive win highlight is short enough for an ad?
- Which segment has the largest average deal size and the shortest cycle, with n?
- What triggers make [persona] start looking for a tool, in their words?
- What does [competitor] claim in their messaging that our product brief can't back us on?
