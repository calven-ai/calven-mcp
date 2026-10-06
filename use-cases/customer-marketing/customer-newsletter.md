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

## Advanced prompts

### Red-team the issue as an unhappy customer

```
Red-team this month's issue as the customers most likely to be annoyed by it, and fix what they'd catch. Use Calven MCP for the complaints customers have raised and the persona who reads it.

FILL IN
- Draft issue: [paste the draft]
- Reader persona: [persona]

CONTEXT
The newsletter goes to every customer, including the unhappy ones. A cheerful feature story lands badly with someone who's been asking for a fix for six months. I want the hostile read before it goes out.

FROM CALVEN
- Negative quotes and the themes with negative sentiment from the last 90 days, with the accounts that raised them.
- Product changes in the same window, and any drift findings saying a published document is out of date.
- The persona canvas: pains and objections.

RED-TEAM
- Build three hostile readers from the evidence: one whose top complaint the issue ignores, one whose problem a feature story claims to solve but only partly does, one who reads the whole thing as a sales pitch.
- Have each read the draft line by line and mark what makes them roll their eyes, feel unheard or doubt a claim. Quote the complaint behind each reaction.
- Check every product claim in the draft against the product changes and the product brief.
- For each hit, write the smallest fix: acknowledge the known issue, soften the claim, or point to a recorded change only where one exists.

OUTPUT
The draft annotated with each reader's hits, the fixes ranked by how many accounts the complaint touches, then the clean draft.

GROUNDING
Label every count as Calven (cited, with n) or your judgement. Every hostile reaction traces to a cited quote or theme; mark anything else as your extrapolation. Don't promise a fix or a date that isn't in the product changes.
```

### Pick the lead story with a Delphi panel

```
Run a three-round Delphi panel to pick this month's lead story, with panellists built from our reader personas. Use Calven MCP for the evidence behind each candidate story and the personas who read the newsletter.

FILL IN
- Candidate stories: [paste four to six candidate lead stories, one line each]
- Reader personas: [personas]
- Newsletter goal this quarter: [adoption, expansion, renewal or advocacy]

CONTEXT
The lead story gets most of the clicks, and we pick it by whoever argues loudest. A Delphi panel forces independent views first and convergence second, which is how forecasters keep groupthink out.

FROM CALVEN
- For each candidate: the product changes, quotes and themes that back it, with dates and mention counts.
- The canvases for the reader personas: goals, jobs to be done, messaging hooks.
- The messaging pillar each story maps to.

METHOD
- Seat five panellists: one per reader persona, plus a CS lead and a skeptical editor whose stance follows from the goal I gave.
- Round 1: each ranks the candidates alone, with a one-line reason.
- Round 2: show everyone the anonymous median and the outlier reasons. Each revises or defends.
- Round 3: final ranks. Report the median and the spread. A wide spread means the choice is a values call, so name the split.

OUTPUT
The three rounds as a compact table, the winning story with its proof attached (change, quote, count), and the headline and first two lines in the reader persona's words.

GROUNDING
Label every count as Calven (cited, with n) or your judgement. Panellists are role-play built from cited canvases, so label their reasoning that way. Don't credit a story with proof the Universe doesn't hold.
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
- Which product change this month did a customer ask for on a call, and who asked?
- Which theme did these last three issues ignore: [paste the issues]?
- Which quote this month would make a [persona] forward the issue to their boss?
- What did customers in [segment] say about [feature] after it shipped?
- Which drift findings mean a link in this issue points to an out-of-date page?
- Which market trend might customers read as a risk to us, and how do we frame it?
