# Co-marketing briefs


You're planning a joint piece with a partner and they moved first, so the brief is already in their words. You write your half: the audience, the joint message, your messages, the proof, the asset and the calendar, clear enough that their marketer can write theirs without a call. Calven keeps your half on your own story.

## Prompts

### Write your half of the co-marketing brief

```
Using Calven MCP, write our half of the co-marketing brief described below.

FILL IN
- Partner: [partner]
- Asset: [webinar, guide or case study]
- Persona: [persona]
- Segment: [segment]
- Goal: [leads, awareness or pipeline in a segment]

CONTEXT
The partner's marketer will add their half. I want ours on-message and in the buyer's words.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, jobs, watering holes.
- The ICP read on the segment.
- Our messaging: the pillars and value proposition for the persona; our positioning value themes.
- Trends or opportunities relevant to the theme.
- Customer quotes on the theme, approved for marketing.

BUILD
- Audience: who, what they are trying to do, where they learn.
- The theme and why now, grounded in a trend.
- Our three messages and the proof behind each.
- A draft abstract or outline in the persona's words.
- The CTA.
- What we need from the partner.

OUTPUT
The brief in that order with sources.

GROUNDING
Use only the Universe for our side. Do not write the partner's messages. Keep quotes verbatim and attributed as approved.
```

### Draft a joint webinar abstract

```
Using Calven MCP, write a webinar abstract for a joint session with the partner below on the theme, for the persona.

FILL IN
- Partner: [partner]
- Theme: [theme]
- Persona: [persona]

CONTEXT
120 words, a title, three takeaways. Must read as a problem the persona has, not two vendors talking.

PULL FROM THE UNIVERSE
- The persona's canvas pains and jobs on this theme.
- The words customers use for it, from calls.
- The trend behind it, if tracked.

WRITE
- Title, abstract, three takeaways.

OUTPUT
The abstract with sources.

GROUNDING
Use only canvas, quotes and trends in the Universe. Do not promise outcomes the product brief does not support.
```

### Check the joint draft against your messaging

```
Using Calven MCP, check this joint piece against our messaging and product facts.

FILL IN
- Draft: [paste the draft]

CONTEXT
The draft is the version after the partner's edits.

PULL FROM THE UNIVERSE
- Our messaging and positioning.
- The product brief and the claims register.

CHECK
- Lines about us that are off-message or overstated.
- Product claims not in the brief.
- A category frame we do not use.

OUTPUT
The draft annotated, then the clean version of our lines only.

GROUNDING
Judge only our lines against the Universe. Leave the partner's lines alone.
```

## Advanced prompts

### Match their list against your ICP

```
Match the partner's customer or prospect list against our ICP and CRM, and size what a joint campaign can realistically produce. Use Calven MCP for the ICP tiers, the CRM accounts and how the segment converts.

FILL IN
- Partner: [partner]
- Their list: [attach a CSV with company name and domain, plus industry and size if they have them]
- Campaign type: [webinar, guide, case study, event]

CONTEXT
Partners pitch joint campaigns on the size of their list. The number that matters is how many of those companies are in our ICP, aren't already in a deal, and could plausibly convert. That decides whether this campaign is worth a quarter of my time.

FROM CALVEN
- The ICP: firmographic attributes, segment tiers and disqualifiers.
- CRM accounts with ICP tier and open deals, paged through and matched to the list by domain or name.
- Win rate, average deal size and sales cycle by segment from the ICP dashboard, with n.

MODEL
- Match the list to CRM accounts by domain first, then by normalised name. If you can run code, do the match in Python and report the match rate.
- Put every company in a bucket: customer, open deal, known non-customer by tier, unknown but scored against the ICP from the list's fields, disqualified.
- Build a funnel for the reachable buckets with low, expected and high assumptions for attendance, follow-up meetings and opportunities, then apply the segment win rate.

OUTPUT
The overlap table by bucket, the funnel in three scenarios, the pipeline range, and a go or no-go with the segment the campaign should aim at.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't guess a tier for an unmatched company without the fields to score it. Put it in unknown.
```

### Run a conjoint test on the webinar concept

```
Run a conjoint-style test on the joint webinar: let our personas trade off topic, format, speaker and offer, and tell me which combination they'd actually show up for. Use Calven MCP for the personas and what they care about.

FILL IN
- Partner: [partner]
- Options per attribute: [paste two or three options each for topic, format, speaker and offer]
- Personas: [persona, persona]

CONTEXT
We have one webinar slot together. The partner wants their roadmap on stage. I think the buyer wants a practitioner. Instead of arguing, I want to see the trade-offs the buyer would make.

FROM CALVEN
- The persona canvases: goals, pains, gains and watering holes.
- Quotes from the target personas tagged Pain or Job to be done.
- The market trends relevant to those personas.

METHOD
- Build twelve choice sets, each showing two webinar concepts made from the attribute options.
- For each persona, pick one concept per set in the first person, with a one-line reason from the canvas or the quotes. Run every persona three times at different company sizes.
- Estimate the part-worth of each attribute level from the choices. If you can run code, fit a simple logit model and show the part-worths.
- Report the winning combination, the attribute that matters most, and where the personas disagree.

OUTPUT
The choice sets, the part-worth table, the best concept per persona and overall, and a webinar title and abstract built on it.

GROUNDING
This is a synthetic panel, so say so. Every choice reason cites a canvas line, a quote or a trend. Don't present the part-worths as survey data.
```

## Ad hoc questions

- What does [persona] care about that both we and [partner] solve?
- Where does [persona] learn, according to the canvas?
- Which trend should a joint webinar with [partner] be built on?
- Give me three customer quotes on [theme] approved for marketing.
- What is our value proposition for [persona] at the awareness stage?
- Which pillar fits a joint case study with [partner]?
- Is "[claim in the partner's draft]" something our brief supports?
- What is our approved boilerplate for a co-branded piece?
- Which segment should a joint campaign target first, from the ICP tiers?
- How do customers describe [theme] in their own words?
- Which customer-voice theme gained the most mentions this quarter that a joint webinar could own?
- Which marketing-ready quotes mention integrations or [partner's product]?
- Which events and communities on the [persona] canvas could I pitch to [partner] as joint venues?
- Which value pillar has the thinnest proof, so a joint case study could fill it?
- What objection should a joint guide for [persona] answer head-on?
- Which high-severity trend fits a co-branded piece with [partner]?
