# Customer quotes

**Team:** Customer marketing · also product marketing, demand generation, content marketing, sales
**Impact:** High. Every page, deck, ad and review request wants a real customer line. The team that can pull an attributed quote on any theme in a minute ships proof where everyone else ships adjectives.
**Prerequisites:** call transcripts or meeting notes ingested (quotes, themes, conversations). CRM connected adds the account's segment and the deal it came from. Win/loss surveys running adds buyer quotes from survey responses.
**Related:** [Customer evidence packs](../product-marketing/customer-evidence-packs.md) assembles approved quotes by theme for a campaign, slide or objection doc.

## What the team is trying to do

Keep a living bank of verbatim customer language, attributed and sorted by what it proves, and pull the right quote for a given asset without re-reading calls. Done means the writer, the rep or the designer gets two or three candidate quotes with the speaker, account and context, ready for the approval ask. Without the company's own call evidence, quotes get invented, polished until they stop being evidence, or reused from the one case study everyone already knows.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the ask | What the quote has to prove (an outcome, time to value, a competitive win, ease of use), for which audience, in which asset | The theme and highlight categories Calven already tags quotes with, so the ask maps to a filter | Themes, quotes (category, highlight) |
| 2 | Find candidates | Search calls, surveys and notes for lines on the theme | Quotes filtered by theme, category, highlight, sentiment, account, persona role and date, with the conversation each came from | Quotes, themes, customer conversations |
| 3 | Check the context | Read the surrounding conversation to make sure the quote means what it seems to | The source conversation and the deal context on the quote | Customer conversations, quotes (context, deal_context) |
| 4 | Check the speaker | Confirm who said it, their role, and whether the account is in good standing and reference-able | Speaker, role and account on the quote; the contact's role and the account's segment from the CRM. Reference status lives outside Calven | Quotes, CRM contacts, CRM accounts |
| 5 | Match to the message | Make sure the quote supports an approved pillar or proof point rather than a claim we do not make | The messaging pillars and positioning proof points the quote should sit under | Messaging, positioning |
| 6 | Shortlist and ask | Pick two or three, draft the approval request to the customer | Draft the ask with the exact quote and where it will appear | Quotes |
| 7 | Get approval | Customer and legal sign off, edits agreed | Calven does not help here | |
| 8 | Publish and track | Place the quote, log where it is used | Calven does not help here | |
| 9 | Refresh | Replace old quotes as new calls come in | New quotes since a date on the same theme | Quotes (occurred_at) |

## Recommended prompts

### Step 2: find candidates for an asset

```
Using Calven MCP, find customer quotes that prove [the claim or theme] for [the asset].

CONTEXT
I am building [a landing page / a deck slide / an ad / a review request] for [persona] in [segment]. I need two or three verbatim lines that prove [the claim], attributed.

PULL FROM THE UNIVERSE
- Customer quotes on this theme, positive sentiment, with speaker, role, account and the conversation they came from.
- The theme's mention count, so I know how common this is.
- The messaging pillar this claim sits under, so the quote supports what we actually say.

BUILD
- Up to eight candidate quotes, strongest first, each with speaker, role, account, date and a one-line note on context.
- Mark which ones name a number, a time frame or a competitor.
- Flag any quote whose context might not match the claim.

OUTPUT
A table I can pick from, then the three you would choose and why.

GROUNDING
Use only quotes in the Universe, verbatim, with the source cited. Do not polish or shorten a quote. If nothing fits, say so and name the closest theme that has quotes.

[name the claim or theme, the asset and the audience]
```

### Step 3 and 4: check context and speaker

```
Using Calven MCP, check these quotes before I ask for approval.

CONTEXT
Below are the quotes I want to use and where each will appear.

PULL FROM THE UNIVERSE
- The conversation each quote came from, with the deal context and what was said around it.
- The speaker's role and the account's segment and status in the CRM.

CHECK
- Does the surrounding conversation support the meaning I am giving the quote?
- Is the speaker senior enough for the asset, and is the account one we would put on a page?
- Does the quote name a competitor, a number or a person that needs extra sign-off?

OUTPUT
Each quote with a verdict (use, use with care, drop) and the reason.

GROUNDING
Judge only from the conversation and CRM data in the Universe and cite them. If the source conversation is not available, say so.

[paste the quotes and where each will appear]
```

### Step 5: build a quote bank for a campaign or theme

```
Using Calven MCP, build a quote bank for [theme or campaign].

CONTEXT
Writers and reps keep asking for customer lines on [theme]. I want one reference they can pull from.

PULL FROM THE UNIVERSE
- Every customer quote on [theme] and its neighbouring themes, with speaker, role, account, sentiment and date.
- The highlight tags (quantified outcome, time to value, competitive win, consolidation, compliance, ease of use).
- The messaging pillar and proof point each quote supports.

ORGANIZE
- Group by what the quote proves. Under each group, strongest quote first, then supporting ones.
- Note how many mentions each group has, and the date range.
- List the quotes that name a competitor separately.

OUTPUT
The quote bank as a document with headings per group, every quote verbatim and attributed.

GROUNDING
Use only quotes in the Universe and cite the source for each. Keep every quote verbatim. Do not turn customer language into marketing language.

[name the theme or campaign]
```

### Step 6: draft the approval ask

```
Using Calven MCP, draft the approval request for this quote.

CONTEXT
I want to use the quote below from [contact] at [account] on [where it will appear]. I need a short email asking for permission, with the exact wording and a yes-or-edit reply path.

PULL FROM THE UNIVERSE
- The quote and the conversation it came from, so the email reminds them of the moment.
- The contact's title and the account from the CRM.

WRITE
- A four-sentence email: where we would use it, the exact quote, what they get (a link, a mention, a review of the asset), and how to say yes or edit.

OUTPUT
The email, ready to send from my own mail tool.

GROUNDING
Quote the line verbatim from the Universe. Do not promise anything about the asset that is not in the brief I gave you.

[name the quote, the contact and where it appears]
```

### Step 9: refresh

```
Using Calven MCP, show me what customers said about [theme] since [date] that we have not used yet.

CONTEXT
The quotes on our [asset] are from [date]. I want to see whether newer calls give us stronger lines.

PULL FROM THE UNIVERSE
- Customer quotes on [theme] with a date after [date], positive sentiment, with speaker and account.
- The theme's mention trend, if the voice-of-customer read has it.

BUILD
- The new quotes, strongest first, with a note on which existing quote each could replace.

OUTPUT
A short table and a recommendation.

GROUNDING
Use only quotes in the Universe, verbatim and cited. If there are no new quotes, say so.

[name the theme and the date]
```

## Ad hoc questions

- Give me three customer quotes about time to value, with who said them.
- Which accounts have said something positive about [capability] on a call?
- What is the strongest quote we have from a [persona]?
- Do we have any quote that names [competitor] and why they switched?
- Which quotes mention a number or a percentage?
- What did [contact] at [account] say about onboarding?
- Which theme has the most positive quotes this quarter?
- Show me negative quotes on [theme] so I know what not to claim.
- Which quotes are tagged as a competitive win?
- Who at [account] has spoken on a call, and what is their role?
- Is this quote verbatim: "[paste]"? Who said it and when?
- Which quotes support our [pillar] pillar?

## Good practice

- Ask by what the quote has to prove, not by keyword. Calven tags quotes by category and highlight; "quantified outcome" finds what "ROI" misses.
- Always ask for the speaker, account and conversation. A quote without a source cannot be approved.
- Keep quotes verbatim end to end. If a quote needs trimming, mark the cut with an ellipsis and keep the original next to it.
- Check the source conversation for anything negative the same speaker said. Approval asks go better when you already know.
- Pair every quote with the pillar or proof point it supports. A quote that proves a claim we do not make is a distraction.
- Rerun the search before each campaign. Quotes age; new calls bring better ones.

## Not covered today

- Customer approval, legal review and the reference agreement live outside Calven.
- Where a quote has been used, and reference fatigue, are tracked in the CRM or the advocacy tool.
- Quotes from channels Calven does not ingest (review sites, social, support) are not in the bank.
- Calven cannot send the approval email; the AI tool drafts it.
