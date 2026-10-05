# Customer quotes

**Related:** [Customer evidence packs](../product-marketing/customer-evidence-packs.md) assembles approved quotes by theme for a campaign, slide or objection doc.

You need the right customer quote for an asset and don't want to re-read calls to find it. You get two or three verbatim candidates with the speaker, account and context, ready for the approval ask, from a living bank sorted by what each quote proves. Calven pulls from the company's own call evidence, so quotes don't get invented, polished until they stop being evidence, or lifted from the one case study everyone already knows.

## Prompts

### Find quotes that prove a claim

```
Using Calven MCP, find customer quotes that prove the claim below for the asset below.

FILL IN
- Claim: [the claim or theme]
- Asset: [a landing page / a deck slide / an ad / a review request]
- Persona: [persona]
- Segment: [segment]

CONTEXT
I am building the asset for the persona in the segment. I need two or three verbatim lines that prove the claim, attributed.

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
```

### Check quotes before the approval ask

```
Using Calven MCP, check these quotes before I ask for approval.

FILL IN
- Quotes: [paste the quotes and where each will appear]

CONTEXT
These are the quotes I want to use and where each will appear.

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
```

### Build a quote bank for a theme

```
Using Calven MCP, build a quote bank for the theme or campaign below.

FILL IN
- Theme: [theme or campaign]

CONTEXT
Writers and reps keep asking for customer lines on the theme. I want one reference they can pull from.

PULL FROM THE UNIVERSE
- Every customer quote on the theme and its neighbouring themes, with speaker, role, account, sentiment and date.
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
```

### Draft the quote approval request

```
Using Calven MCP, draft the approval request for this quote.

FILL IN
- Quote: [the quote]
- Contact: [contact]
- Account: [account]
- Placement: [where it will appear]

CONTEXT
I want to use the quote from the contact at the account in the placement above. I need a short email asking for permission, with the exact wording and a yes-or-edit reply path.

PULL FROM THE UNIVERSE
- The quote and the conversation it came from, so the email reminds them of the moment.
- The contact's title and the account from the CRM.

WRITE
- A four-sentence email: where we would use it, the exact quote, what they get (a link, a mention, a review of the asset), and how to say yes or edit.

OUTPUT
The email, ready to send from my own mail tool.

GROUNDING
Quote the line verbatim from the Universe. Do not promise anything about the asset that is not in the brief I gave you.
```

### Find fresh quotes you haven't used

```
Using Calven MCP, show me what customers said about the theme below since the date below that we have not used yet.

FILL IN
- Theme: [theme]
- Asset: [asset]
- Date: [date of the quotes on the asset]

CONTEXT
The quotes on the asset are from the date above. I want to see whether newer calls give us stronger lines.

PULL FROM THE UNIVERSE
- Customer quotes on the theme with a date after the date above, positive sentiment, with speaker and account.
- The theme's mention trend, if the voice-of-customer read has it.

BUILD
- The new quotes, strongest first, with a note on which existing quote each could replace.

OUTPUT
A short table and a recommendation.

GROUNDING
Use only quotes in the Universe, verbatim and cited. If there are no new quotes, say so.
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
