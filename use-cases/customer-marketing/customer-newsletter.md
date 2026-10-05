# Customer newsletter

**Team:** Customer marketing · also product marketing, content marketing
**Impact:** Medium. A monthly issue is a recurring deadline with the same questions every time: what changed, what customers are saying, what to show. Calven answers the first two from the record.
**Prerequisites:** own website and docs monitored (product changes), call transcripts ingested (themes, quotes), strategy documents approved (messaging). Market research run adds a trend section.

## What the team is trying to do

Send a monthly issue that customers open because it tells them something useful about the product, their peers and their market, in the approved voice. Done means an outline and a draft built on real changes, real quotes and a trend, fact-checked, in under an hour. Without the company's own record, the newsletter becomes a list of feature names and a stock photo.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the month | Product changes, customer stories, events, content | Product changes since the last issue; new positive quotes; new case study candidates | Product changes, quotes |
| 2 | Pick the theme | One idea the issue hangs on | The theme customers raised most this month; a market trend with a so-what | Themes, voice-of-customer dashboard, trends |
| 3 | Outline | Sections and order | An outline on the messaging pillars | Messaging |
| 4 | Write | Copy per section | Drafts in the persona's words with verbatim quotes | Quotes, persona canvas, product brief |
| 5 | Fact-check | Claims and product details | Product brief, claims | Product brief, claims |
| 6 | Build and send | Template, links, send | Calven does not help here | |

## Recommended prompts

### Step 1 to 3: collect and outline

```
Using Calven MCP, outline this month's customer newsletter.

CONTEXT
The issue goes to all customer contacts on [date]. Sections: what changed, a customer story, a tip, what we are reading. 400 words total.

PULL FROM THE UNIVERSE
- Product changes detected since [last issue date], by severity.
- The customer themes with the most mentions this month, with a representative quote.
- One approved market trend with its so-what for our buyers.
- Positive customer quotes from the month tagged quantified outcome or ease of use.

BUILD
- The outline with one line per section: the item, why it is in, the source.
- Two candidate subject lines built on the lead item.

OUTPUT
The outline and subject lines.

GROUNDING
Use only the Universe and cite each item. Do not invent a change or a trend. If a section has nothing this month, say so.

[name the last issue date and the send date]
```

### Step 4: write the issue

```
Using Calven MCP, write the customer newsletter from this outline.

CONTEXT
The outline is below. Readers are mostly [persona]. Keep the approved voice: short sentences, no hype.

PULL FROM THE UNIVERSE
- The product change records and the product brief for each change.
- The quotes named in the outline, verbatim, with speaker and account.
- The messaging boilerplate and the persona's messaging hooks.

WRITE
- Each section in 60 to 100 words. One link per section. Quotes verbatim and attributed.

OUTPUT
The issue as plain text with section headings.

GROUNDING
Use only the Universe and cite it. Do not describe a feature beyond its change record or the brief.

[paste the outline and name the persona]
```

### Step 5: fact-check

```
Using Calven MCP, fact-check this newsletter draft.

CONTEXT
Below is the draft. Every product statement and quote must be right.

PULL FROM THE UNIVERSE
- The product brief and product changes.
- The original quotes.

CHECK
- Mark each product statement correct, overstated or not in the brief.
- Confirm each quote is verbatim and attributed.

OUTPUT
The draft annotated inline.

GROUNDING
Confirm only against the Universe and cite the source.

[paste the draft]
```

## Ad hoc questions

- What changed in the product since [date]?
- Which customer theme grew most this month?
- Give me one positive customer quote from this month with attribution.
- What is one market trend our customers should know about, and why?
- What is our boilerplate?
- Which [persona] messaging hook fits a note about [feature]?
- Is [feature] described in the product brief?
- Which product changes this month did drift findings flag as contradicting a published document?
- Rewrite this section in the words customers use for [pain]: [paste]

## Good practice

- Run the outline prompt on the same day each month. The sources are dated, so the issue stays current.
- Lead with the customer theme, not the feature. Readers open for themselves.
- Keep quotes verbatim and attributed, and get approval before the send if the quote is new.
- Keep the trend section to one trend with a so-what. The market research record has more; the reader does not want it.

## Not covered today

- Template, list management, sending and open rates live in the email tool.
- Events, webinars and content links come from the marketing calendar, not Calven.
