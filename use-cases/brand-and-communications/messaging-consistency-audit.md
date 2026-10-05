# Messaging consistency audit

**Team:** Brand and communications · also product marketing, content marketing, sales enablement, web team
**Impact:** High. The homepage, the LinkedIn page, the sales deck, the proposal template and the job ads each describe the company, and after one repositioning they describe three different companies. An audit of every channel against the approved positioning and messaging, with drift findings from Calven's own monitoring, puts the story back together.
**Prerequisites:** strategy documents approved (positioning, messaging with boilerplate, product brief). Better with own website and docs monitored (drift findings, claims) and call transcripts ingested (vendor quotes show how reps actually pitch, and the messaging dashboard's field adoption).

## What the team is trying to do

Check every place the company describes itself against the one approved story: website, social profiles, sales and partner decks, email signatures and templates, proposals, job ads, app store and directory listings, the press kit. Done means a list of every off-message line with its fix, a boilerplate everyone uses, and a cadence that repeats the audit after every positioning change. The hard part is coverage: the copy lives in a dozen tools owned by six teams.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Inventory the touchpoints | List every channel and the owner | Calven does not help here | |
| 2 | Set the reference | The current positioning, messaging, boilerplate | The approved documents, with their version and date | Positioning, messaging |
| 3 | Check the monitored site | Where our own pages drifted | Drift findings and claims from Calven's monitoring; the positioning and messaging dashboards' drift sections | Drift findings, claims, positioning and messaging dashboards |
| 4 | Check the pasted channels | Decks, profiles, templates, listings | Each pasted text checked against the reference | Positioning, messaging |
| 5 | Check the field | How reps actually describe us | Vendor quotes from calls; pillar pull-through in the messaging dashboard | Vendor quotes, messaging dashboard (field adoption) |
| 6 | Check tone and vocabulary | Words we have dropped, competitor frames | The messaging's standardised language and the positioning's category frame | Messaging, positioning |
| 7 | Report and fix list | Per channel, per owner | A fix list with the on-message rewrite and source per line | All of the above |
| 8 | Fix and re-check | Owners update copy | Re-run on the updated text | |
| 9 | Govern | Repeat after each change | Positioning and messaging version dates, drift findings after each release | Documents, drift findings |

## Recommended prompts

### Step 2 and 3: the reference and the monitored site

```
Using Calven MCP, start a messaging consistency audit.

CONTEXT
We repositioned on [date]. I want the reference story in one place and the drift Calven has already found on our own site.

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

[name the repositioning date]
```

### Step 4: a batch of pasted channels

```
Using Calven MCP, check these channels against our approved story.

CONTEXT
Below are the texts from [channels: LinkedIn About, the sales deck's first three slides, the proposal template intro, two job ads, the directory listing], each labelled with its owner.

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

[paste the texts with channel and owner]
```

### Step 5: how the field describes us

```
Using Calven MCP, show me how our reps describe the company on calls.

CONTEXT
I want to know whether the field tells the approved story.

PULL FROM THE UNIVERSE
- Vendor quotes tagged Value claim and Differentiation from the last [window].
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

[name the window]
```

### Step 7: the fix list

```
Using Calven MCP, compile the audit into a fix list by owner.

CONTEXT
Below are the drift table, the channel table and the field read from the previous steps.

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

[paste the three tables]
```

### Step 9: after the next release or messaging change

```
Using Calven MCP, tell me what the last change left inconsistent.

CONTEXT
Messaging was updated on [date], or a product change shipped on [date]. I want the pages and documents it affected.

PULL FROM THE UNIVERSE
- Drift findings created since [date], with the document, the classification and the rationale.
- The messaging and positioning documents' current versions.

CHECK
- Which published documents now conflict, and on which line.
- Which pillar or claim changed, so channel owners know what to search for in their own copy.

OUTPUT
A short list with sources, and the search terms for owners.

GROUNDING
Use only drift findings and documents in the Universe and cite them with dates.

[name the date and the change]
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

## Good practice

- Build the reference card first and share it. Most inconsistency is owners working from memory.
- Paste first paragraphs and headline slides, not whole documents. Drift shows in the opening.
- Include the field. The call quotes are the channel no audit tool sees.
- Give every owner the same boilerplate block and the fix list with sources. Owners fix faster when the rewrite is supplied.
- Re-run the after-change prompt after each release and each messaging update, not once a year.
- When the audit finds the messaging itself unclear, fix it in Calven first.

## Not covered today

- The touchpoint inventory and the tools that hold the copy.
- Design, visual identity and brand assets.
- Copy on pages Calven does not monitor is checked by pasting it in.
- Editing the messaging or positioning from the AI tool. The messaging and positioning agents and the PMM do that in Calven.
