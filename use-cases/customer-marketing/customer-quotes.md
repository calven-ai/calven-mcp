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

## Advanced prompts

### Run a quote tournament with your buyers

```
Run a pairwise tournament between my candidate quotes and find the one that actually persuades the buyer. Use Calven MCP for the verbatim quotes, the buyer persona and a persona review of the finalists.

FILL IN
- Claim the quote must prove: [the claim, as it appears on the page]
- Persona: [persona]
- Where it runs: [page, ad, deck slide or review request]

CONTEXT
I have a dozen quotes that all sort of prove the claim, and the team picks by gut. The quote that wins should be the one the buyer believes, not the one we like.

FROM CALVEN
- Up to 12 verbatim quotes that support the claim, with speaker, role, account, highlight and date.
- The persona's canvas: goals, pains, objections, the words they use.
- A persona review of the final four, each set in the line of copy it will sit under.

METHOD
- Screen out any quote older than 18 months, any without a named speaker, and any from a role the persona wouldn't trust.
- Play the persona judging every remaining pair: which of the two makes you believe the claim, and why, in one sentence. Judge each pair twice with the order swapped, and count a split decision as a tie.
- Rank the quotes with a Bradley-Terry fit on the wins. If you can run code, do the fit and show each strength score with a bootstrap interval, so I can see where two quotes are really a tie.
- Send the top four through the persona review and let it break ties.

OUTPUT
A ranked table: quote, speaker and role, account, strength score, why it wins, the review's flag. Then the winner set in the copy, and the runner-up for a second placement.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Quotes stay verbatim and attributed. The pairwise verdicts are your role-play of the canvas, so label them that way; the review findings come from the review. Don't trim a quote into saying more than the speaker said.
```

### Build an eval set for quote picks

```
Build an eval set that grades any quote pick our team or an AI tool makes, so quote quality stops depending on who's on shift. Use Calven MCP for real quotes, good and bad, and the claims they get attached to.

FILL IN
- Assets that use quotes: [paste three to five recent pages, ads or slides with their quotes]
- House rules: [paste your quote policy, or write "none"]

CONTEXT
Quotes go out every week from three people and an AI tool. I want a test I can rerun on every new pick: verbatim, attributed, fresh, from a customer and not a rep, and actually proving the line it sits under.

FROM CALVEN
- 30 quotes spread across themes and sentiment, including negative and neutral ones, with speaker, role, account, highlight and date.
- The claims from our documents and site that quotes most often support.
- The verbatim original behind each quote in my pasted assets, so you can check it.

BUILD
- A rubric with five to seven criteria, each with a pass and fail definition and an example from the Calven quotes.
- 25 test cases: a claim, a candidate quote, the expected verdict and the reason. Include traps: a paraphrase passed off as verbatim, a line from one of our own reps, a quote that proves a different claim, a negative quote trimmed into a positive one.
- Grade my pasted assets against the rubric as the first run.
- If you can run code, save the eval as a CSV plus a short script that scores a new pick against it.

OUTPUT
The rubric, the 25-case eval set as a table, and the scorecard for my pasted assets.

GROUNDING
Every test case uses a real Calven quote, cited. Expected verdicts are your judgement against the rubric, labelled. Don't invent a quote to build a trap; alter a real one and say what you changed.
```

### Size the quote test before you run it

```
Design an A/B test of a customer quote on one of our pages, with a power calculation, so we know whether it's worth running before we run it. Use Calven MCP for the candidate quotes and the persona the page is written for.

FILL IN
- Page: [page URL and the section the quote goes in]
- Traffic and baseline: [monthly visitors to the page and its current conversion rate]
- Persona: [persona]
- Smallest lift worth shipping: [e.g. 10% relative]

CONTEXT
Everyone says quotes convert. I want to know whether ours do, on this page, with this traffic, and how long it takes to prove.

FROM CALVEN
- The three strongest verbatim quotes for the page's main claim, with speaker, role and highlight.
- The persona canvas: the objection the quote has to answer at this point on the page.
- A persona review of the page section with each quote in place.

METHOD
- Pick the challenger from the three quotes using the review, and write the hypothesis: which objection it answers and what behaviour should change.
- Run the power calculation for a two-sided test at 80% power and 5% significance with my traffic and baseline. Show the sample per arm and the weeks to reach it. If it takes longer than eight weeks, propose a higher-traffic page or a bolder change and recompute.
- Set the primary metric, one guardrail metric, the stopping rule and what we do with each result.
- If you can run code, show the sensitivity as a small grid: weeks to significance across baselines and lifts.

OUTPUT
A one-page test plan: hypothesis, variants with the exact copy, sample size, duration, metrics, stopping rule, decision rules. Plus the grid.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Traffic and conversion come only from me. Don't predict the lift; the test exists to measure it.
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
- Which quotes say the same thing as our [pillar] pillar, but in plainer words?
- Which accounts gave us both a positive and a negative quote on the same theme?
- Which quote from a lost deal praises something we do well?
- Do we have an economic buyer saying it on [theme], or only end users?
- Which of our claims do reps make on calls that no customer ever says back?
- What's the most specific before-and-after a customer has described?
