# Customer feedback synthesis

**Team:** Product management · also customer success, product marketing, leadership
**Impact:** High. Every PM reads calls, surveys and feedback threads and tries to keep a mental tally. Calven keeps the tally: themes with mentions, sentiment, momentum, the quotes under them, and which themes tie to won and lost revenue.
**Prerequisites:** call transcripts ingested (themes, quotes, conversations). Better with win/loss surveys (deal drivers, verbatims) and CRM connected (which accounts, which segments).

## What the team is trying to do

Know what customers are telling the company, by theme, with evidence, and in time for the decisions. Done means a monthly or quarterly synthesis: the themes that grew, the ones that faded, net sentiment, the themes tied to revenue, the quotes behind each, and what changed since last time. Without it, the synthesis is whoever read the most calls that month.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Read the themes | See the top pains, jobs and movers for the period | The voice-of-customer dashboard: themes with mentions, sentiment, momentum | Voice-of-customer dashboard (customer signals) |
| 2 | Tie to revenue | Which themes show up in won deals, which in objections and losses | The tied-to-revenue section: winning themes, objections, buying triggers, costly objections | Voice-of-customer dashboard (tied to revenue), deal drivers |
| 3 | Read the quotes | Hear the theme in the customer's words | Quotes under each theme, with role, account, sentiment, date | Quotes |
| 4 | Segment | Which personas, segments and products raise each theme | Quote roles, account industry and size, product tags | Quotes, CRM accounts |
| 5 | Compare with last period | What moved | KPIs with their change against the prior period | Voice-of-customer dashboard with compare |
| 6 | Write the synthesis | One page for product, CS and leadership | The assembled read | All of the above |
| 7 | Route | Send themes to the roadmap, to CS, to messaging | Calven does not route; the synthesis names the owner | |
| 8 | Deep dive | On one theme, read the conversations | Conversations and quotes for the theme | Customer conversations, quotes |

## Recommended prompts

### Step 1 to 3: the periodic synthesis

```
Using Calven MCP, write the customer feedback synthesis for [window] for [product].

CONTEXT
The audience is product, customer success and leadership. They want the themes that matter this period, with evidence and what changed.

PULL FROM THE UNIVERSE
- The voice-of-customer read for [window]: top pains, jobs to be done, movers, net sentiment, with the change against the prior period.
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

[name the product and the window]
```

### Step 4: segment one theme

```
Using Calven MCP, break [theme] down by who raises it.

CONTEXT
[theme] is a top theme this period. Before I act on it I want to know which personas, segments and accounts raise it, and whether it is concentrated in a few accounts.

PULL FROM THE UNIVERSE
- Every quote under [theme] with role, account, sentiment and date.
- The accounts' industry, size, region and ICP fit tier.

BUILD
- A table by persona or role: mentions, sentiment, example quote.
- A table by segment (industry, size, fit tier): mentions.
- The number of distinct accounts and conversations behind the theme.

OUTPUT
The two tables and a one-line read on concentration.

GROUNDING
Use only quotes and account fields in the Universe. If the pipeline category is restricted, segment by role only and say so.

[name the theme]
```

### Step 5: what changed since last period

```
Using Calven MCP, tell me what changed in customer feedback since [prior window].

CONTEXT
I want the movers only: themes that rose, fell, appeared or disappeared, and whether sentiment shifted.

PULL FROM THE UNIVERSE
- The voice-of-customer read for [window] compared with the prior period: movers, net sentiment change, customer-voice signal counts.

BUILD
- Risers and fallers with the change in mentions.
- New themes and themes that dropped below two mentions.
- Sentiment shift and the quotes that explain it.

OUTPUT
A movers note, half a page.

GROUNDING
Report only comparisons the dashboard computes, with both samples. Where a KPI cannot be compared, say why.

[name the window]
```

### Step 8: deep dive on one theme

```
Using Calven MCP, give me the full picture on [theme].

CONTEXT
I am deciding whether [theme] becomes a roadmap item. I want everything the Universe holds on it.

PULL FROM THE UNIVERSE
- Every quote under [theme], and the conversations they came from, with situation and deal context.
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

[name the theme]
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

## Good practice

- Run the synthesis on a fixed cadence and window, so changes are comparable.
- Report the total theme count beside the top lists. The dashboard's lists cap at ten.
- Ask for distinct accounts and conversations, not only mentions, before calling a theme widespread.
- Keep quotes verbatim with role and account. Paraphrases lose the evidence.
- Name an owner per observation. A synthesis without owners is a newsletter.
- Use the deep dive before committing to a roadmap item; the quotes and conversations are the discovery material.

## Not covered today

- Support tickets, NPS, in-app feedback and usage. Only conversations and surveys ingested into Calven count.
- Routing or filing. The synthesis names owners; the team acts in its own tools.
- Re-clustering themes. The voice-of-customer agent maintains themes in Calven.
