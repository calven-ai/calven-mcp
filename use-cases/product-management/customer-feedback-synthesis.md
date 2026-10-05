# Customer feedback synthesis


The monthly or quarterly synthesis is due, and the decisions it feeds won't wait. You walk away with the themes that grew and faded, net sentiment, the themes tied to revenue, the quotes behind each, and what changed since last time. Calven gives you the whole evidence base, so the synthesis isn't just whoever read the most calls that month.

## Prompts

### Write the periodic feedback synthesis

```
Using Calven MCP, write the customer feedback synthesis for the window and product below.

FILL IN
- Window: [time window, e.g. last quarter]
- Product: [product]

CONTEXT
The audience is product, customer success and leadership. They want the themes that matter this period, with evidence and what changed.

PULL FROM THE UNIVERSE
- The voice-of-customer read for the window: top pains, jobs to be done, movers, net sentiment, with the change against the prior period.
- The themes tied to revenue: winning themes, objections, buying triggers, costly objections.
- The three strongest quotes under each top theme, with role and account.

BUILD
- Themes that grew and themes that faded, with mentions and the change.
- The themes tied to revenue, with the deals or objections behind them.
- The quotes per theme.
- Three observations and the owner for each.

OUTPUT
A one-page synthesis with the number of conversations analysed and the window stated at the top.

GROUNDING
Use only themes, quotes and dashboard figures from the Universe, cited with samples. Theme lists show themes with at least two mentions; report the total theme count too. Do not interpret a KPI that cannot be compared as no change.
```

### Break one theme down by who raises it

```
Using Calven MCP, break the theme below down by who raises it.

FILL IN
- Theme: [theme]

CONTEXT
The theme is a top theme this period. Before I act on it I want to know which personas, segments and accounts raise it, and whether it is concentrated in a few accounts.

PULL FROM THE UNIVERSE
- Every quote under the theme with role, account, sentiment and date.
- The accounts' industry, size, region and ICP fit tier.

BUILD
- A table by persona or role: mentions, sentiment, example quote.
- A table by segment (industry, size, fit tier): mentions.
- The number of distinct accounts and conversations behind the theme.

OUTPUT
The two tables and a one-line read on concentration.

GROUNDING
Use only quotes and account fields in the Universe. If the pipeline category is restricted, segment by role only and say so.
```

### Find what changed since last period

```
Using Calven MCP, tell me what changed in customer feedback since the prior window.

FILL IN
- Window: [current time window, e.g. this quarter]
- Prior window: [prior window, e.g. last quarter]

CONTEXT
I want the movers only: themes that rose, fell, appeared or disappeared, and whether sentiment shifted.

PULL FROM THE UNIVERSE
- The voice-of-customer read for the window compared with the prior window: movers, net sentiment change, customer-voice signal counts.

BUILD
- Risers and fallers with the change in mentions.
- New themes and themes that dropped below two mentions.
- Sentiment shift and the quotes that explain it.

OUTPUT
A movers note, half a page.

GROUNDING
Report only comparisons the dashboard computes, with both samples. Where a KPI cannot be compared, say why.
```

### Get the full picture on one theme

```
Using Calven MCP, give me the full picture on the theme below.

FILL IN
- Theme: [theme]

CONTEXT
I am deciding whether the theme becomes a roadmap item. I want everything the Universe holds on it.

PULL FROM THE UNIVERSE
- Every quote under the theme, and the conversations they came from, with situation and deal context.
- Deal drivers that match it, with outcome and competitor.
- Related competitor mentions and any trend.

BUILD
- The theme in the customers' words: the five best quotes.
- The deals it touched and their outcome.
- The conversations to read in full, ranked by relevance.

OUTPUT
A theme dossier.

GROUNDING
Use only the Universe and cite every quote and deal. Do not merge adjacent themes into this one.
```

## Ad hoc questions

- What are the top five customer pains this quarter for [product]?
- Which themes grew most since last quarter?
- What is net sentiment this period, and how did it change?
- Which themes show up in deals we won?
- Which objections cost us the most?
- Give me three quotes under [theme] with who said them.
- How many conversations were analysed in [window]?
- Which accounts raise [theme] most?
- Is [theme] raised by buyers, users or both?
- Which buying triggers appear most this period?
- Which themes do enterprise accounts raise that mid-market does not?
- What did customers say about [feature] after it shipped?
