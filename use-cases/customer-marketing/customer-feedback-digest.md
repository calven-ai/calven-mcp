# Customer feedback digest

**Team:** Customer marketing · also customer success, product marketing, product management
**Impact:** Medium. A monthly read of what customers said, by theme and sentiment, is the shared starting point for campaigns, CS plays and product input. Calven computes it; the AI tool writes it for the audience.
**Prerequisites:** call transcripts ingested (quotes, themes, conversations). CRM connected adds the account and deal context. Win/loss surveys running adds buyer answers.

## What the team is trying to do

Publish a short monthly digest to marketing, CS and product: the themes that grew, the ones that faded, the costly objections, the quotes worth reusing, by segment where the numbers allow. Done means a one-page digest with sources that each team can act on. Without the company's own themed record, feedback is anecdotes from whoever spoke last in the meeting.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the month | Themes, sentiment, movers | The voice-of-customer dashboard: themes by mentions and sentiment, movers, costly objections, buying triggers, net sentiment | Voice-of-customer dashboard |
| 2 | Read the evidence | The quotes behind the top themes | Quotes per theme with speaker, account and sentiment | Quotes, themes |
| 3 | Cut by segment | Where the numbers allow | Quotes and conversations by account segment via the CRM | Quotes, CRM accounts |
| 4 | Write the digest | For each audience | A one-page digest with a section per team | All above |
| 5 | Route the actions | Who does what | Calven does not help here | |

## Recommended prompts

### Step 1 and 2: the monthly read

```
Using Calven MCP, build the customer feedback digest for [month].

CONTEXT
Readers are marketing, CS and product leads. One page. They want what changed, with the quotes.

PULL FROM THE UNIVERSE
- The voice-of-customer dashboard for [month] compared with the month before: themes by mentions and sentiment, movers, costly objections, buying triggers, net sentiment, conversations analyzed.
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

[name the month]
```

### Step 3: cut by segment

```
Using Calven MCP, tell me how customer feedback differs by [segment attribute] this quarter.

CONTEXT
I want to know whether enterprise and mid-market customers raise different themes.

PULL FROM THE UNIVERSE
- Customer quotes this quarter with their account's size, industry or region from the CRM.
- The themes those quotes belong to.

BUILD
- A table: theme, mentions per segment, sentiment per segment, one quote per cell where it exists.
- The themes that appear in one segment only.

OUTPUT
The table and the three differences that matter.

GROUNDING
Use only the Universe and cite it. Do not compute rates on small samples; show counts and say when a cell has fewer than five quotes.

[name the attribute]
```

### Gap: what nobody is talking about

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

## Good practice

- Take numbers from the dashboard, never by counting quotes. The AI tool must cite n and the window.
- Lead with movers. Totals change slowly; the digest is about what changed.
- One section per audience, three items each. Longer digests get skimmed.
- Keep the quotes verbatim. The digest is where marketing finds its next proof line.

## Not covered today

- NPS, CSAT, support tickets and usage are not in Calven; add them from their tools if the digest needs them.
- Routing actions to owners happens in the backlog or CRM.
