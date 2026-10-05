# Messaging consistency audit


Your company's description lives in a dozen tools owned by six teams: the website, social profiles, sales and partner decks, email signatures, proposals, job ads, directory listings, the press kit. You come away with every off-message line and its fix, a boilerplate everyone uses, and an audit you repeat after each positioning change. Calven holds the one approved story you check them all against.

## Prompts

### Start the audit with a reference card

```
Using Calven MCP, start a messaging consistency audit.

FILL IN
- Repositioning date: [date]

CONTEXT
We repositioned on the date given. I want the reference story in one place and the drift Calven has already found on our own site.

PULL FROM THE UNIVERSE
- Our positioning: positioning statement, category and frame, unique attributes, value themes.
- Our messaging: core narrative and one-liner, value pillars, boilerplate, the standardised language.
- Positioning and messaging drift findings, and the claims flagged with a concern.

BUILD
- The reference card: one-liner, category, three pillars, boilerplate, the words we use and the words we have dropped. One page.
- The site drift list: page, the line, what it conflicts with, the fix, severity.

OUTPUT
The reference card and the drift table, with sources and document versions.

GROUNDING
Use only the documents and findings in the Universe and cite them. Do not add pages the findings do not cover; say what the monitoring covers.
```

### Check pasted channels against the approved story

```
Using Calven MCP, check these channels against our approved story.

FILL IN
- Texts: [paste the texts, each labelled with its channel and owner, e.g. LinkedIn About, the sales deck's first three slides, the proposal template intro, two job ads, the directory listing]

CONTEXT
Each text is labelled with its channel and owner.

PULL FROM THE UNIVERSE
- Our positioning and messaging, including the boilerplate and standardised language.
- The product brief, for any product claim in the texts.

CHECK
- For each text: the category it claims, the pillars it uses, the one-liner it uses, against the reference.
- Lines that are off-message, use dropped words, adopt a competitor's frame, or make a product claim the brief does not support.
- A consistency score per channel: on, partly off, off.

OUTPUT
A table per channel: line, problem, on-message rewrite, source. Then the owner list.

GROUNDING
Judge only against the Universe and cite the section. If a text is on-message, say so.
```

### See how reps describe the company on calls

```
Using Calven MCP, show me how our reps describe the company on calls.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know whether the field tells the approved story.

PULL FROM THE UNIVERSE
- Vendor quotes tagged Value claim and Differentiation from the window.
- The messaging dashboard's field adoption: pillar pull-through.
- Our messaging pillars and one-liner.

BUILD
- The pillars reps use most and least, with the pull-through numbers and n.
- Value claims reps make that are not in the messaging, with the quote.
- Differentiation lines reps use that the positioning does not support.
- The three lines to give enablement.

OUTPUT
A one-page read with sources.

GROUNDING
Use only vendor quotes and the dashboard in the Universe and cite them with n and the window. Do not infer rep behaviour from anything else.
```

### Compile the fix list by owner

```
Using Calven MCP, compile the audit into a fix list by owner.

FILL IN
- Tables: [paste the three tables]

CONTEXT
The tables are the drift table, the channel table and the field read from the previous steps.

PULL FROM THE UNIVERSE
- The boilerplate, one-liner and pillars, so every rewrite uses the same lines.

BUILD
- One list per owner: channel, line, fix, severity, source.
- The three most repeated problems across channels.
- The boilerplate and one-liner block every owner should paste.

OUTPUT
The fix lists and the block.

GROUNDING
Use only the pasted tables and the messaging in the Universe. Every rewrite uses the approved wording, cited.
```

### Find what the last change left inconsistent

```
Using Calven MCP, tell me what the last change left inconsistent.

FILL IN
- Change: [the messaging update or product change]
- Date: [date of the change]

CONTEXT
The change is a messaging update or a shipped product change, made on the date given. I want the pages and documents it affected.

PULL FROM THE UNIVERSE
- Drift findings created since the date, with the document, the classification and the rationale.
- The messaging and positioning documents' current versions.

CHECK
- Which published documents now conflict, and on which line.
- Which pillar or claim changed, so channel owners know what to search for in their own copy.

OUTPUT
A short list with sources, and the search terms for owners.

GROUNDING
Use only drift findings and documents in the Universe and cite them with dates.
```

## Ad hoc questions

- What is our current one-liner, category and boilerplate, with the document version?
- Which words has our messaging dropped?
- Does this About text match our positioning: [paste]
- Which pages on our site have drift flagged against them?
- Which claims on our site have a concern flagged?
- Which pillar do reps use least on calls?
- Do reps claim anything the messaging does not say? Quote them.
- Is "[line]" in a competitor's frame?
- Which value pillar does this deck slide serve, if any: [paste]
- What changed in the messaging since [date]?
- How many documents did the last product change leave stale?
- What does our positioning say the competitive alternatives are, so listings and decks agree?
