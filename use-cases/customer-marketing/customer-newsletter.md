# Customer newsletter


The monthly newsletter is due, and you want one customers open because it tells them something useful about the product, their peers and their market. You come away with an outline and a fact-checked draft in the approved voice, built on real changes, real quotes and a trend, in under an hour. Calven holds that record, so the issue is more than a list of feature names and a stock photo.

## Prompts

### Outline this month's issue

```
Using Calven MCP, outline this month's customer newsletter.

FILL IN
- Send date: [send date]
- Last issue: [last issue date]

CONTEXT
The issue goes to all customer contacts on the send date. Sections: what changed, a customer story, a tip, what we are reading. 400 words total.

PULL FROM THE UNIVERSE
- Product changes detected since the last issue date, by severity.
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
```

### Write the issue from the outline

```
Using Calven MCP, write the customer newsletter from this outline.

FILL IN
- Outline: [paste the outline]
- Persona: [persona]

CONTEXT
Readers are mostly the persona. Keep the approved voice: short sentences, no hype.

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
```

### Fact-check the newsletter draft

```
Using Calven MCP, fact-check this newsletter draft.

FILL IN
- Draft: [paste the draft]

CONTEXT
Every product statement and quote in the draft must be right.

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
