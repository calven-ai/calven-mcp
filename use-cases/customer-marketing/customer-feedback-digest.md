# Customer feedback digest


The monthly digest to marketing, CS and product is due. You get one page with sources: the themes that grew and faded, the costly objections, the quotes worth reusing, cut by segment where the numbers allow. Calven reads from the company's themed record, so it's more than anecdotes from whoever spoke last in the meeting.

## Prompts

### Build this month's feedback digest

```
Using Calven MCP, build the customer feedback digest for the month below.

FILL IN
- Month: [month]

CONTEXT
Readers are marketing, CS and product leads. One page. They want what changed, with the quotes.

PULL FROM THE UNIVERSE
- The voice-of-customer dashboard for the month compared with the month before: themes by mentions and sentiment, movers, costly objections, buying triggers, net sentiment, conversations analyzed.
- For the top five themes: three representative quotes each with speaker, role and account.
- Marketing-ready quotes suggested this month.

BUILD
- Headline numbers with n and the comparison.
- Themes that grew and faded, each with a quote.
- The costly objections and which messaging section covers them.
- Three quotes marketing should use, three signals CS should act on, three gaps product should see.

OUTPUT
The digest.

GROUNDING
Use only the Universe and cite it. Take every number from the dashboard, never by counting rows. Cite n with every rate. If a list is below the floor, say so.
```

### Compare feedback across segments

```
Using Calven MCP, tell me how customer feedback differs by the segment attribute below this quarter.

FILL IN
- Attribute: [segment attribute, e.g. size, industry or region]

CONTEXT
I want to know whether customers in different segments, for example enterprise and mid-market, raise different themes.

PULL FROM THE UNIVERSE
- Customer quotes this quarter with their account's value for the attribute from the CRM.
- The themes those quotes belong to.

BUILD
- A table: theme, mentions per segment, sentiment per segment, one quote per cell where it exists.
- The themes that appear in one segment only.

OUTPUT
The table and the three differences that matter.

GROUNDING
Use only the Universe and cite it. Do not compute rates on small samples; show counts and say when a cell has fewer than five quotes.
```

### Find the pillars customers never mention

```
Using Calven MCP, show me which of our messaging pillars customers never mention.

CONTEXT
I want to know whether our story matches what customers say.

PULL FROM THE UNIVERSE
- The messaging value pillars.
- The messaging dashboard: customer-language fit, language gaps, evidence-backed pillars.
- Themes and quotes that map to each pillar.

BUILD
- Per pillar: quote count, the closest theme, the language gap if any.

OUTPUT
The table and the pillar with the weakest evidence.

GROUNDING
Use only the Universe and cite it.
```

## Ad hoc questions

- Which themes grew most this month?
- What is the net sentiment this month versus last?
- Which objections cost us the most this quarter?
- Give me three quotes on [theme] from the last 30 days.
- How many conversations were analyzed this month?
- Which buying triggers came up most?
- Which pillar has the least customer language behind it?
- What did customers in [segment] complain about most?
