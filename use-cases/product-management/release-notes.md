# Release notes


Something shipped or something's being removed, and customers need to hear it in their words, without overclaiming, and with enough notice and a path for anything going away. You walk away with release notes per release and a message map per deprecation. Calven checks each one against the product brief and the claims register.

## Prompts

### Write the release notes

```
Using Calven MCP, write the release notes for the release below.

FILL IN
- Release: [release]
- Personas: [the two reader personas]
- Shipped list: [paste the shipped list]

CONTEXT
The shipped list is in engineering's words. The readers are the personas above. I want each item to open with the problem it solves, in the customer's words, and to claim nothing the brief does not support.

PULL FROM THE UNIVERSE
- The messaging pillar and value proposition each item supports.
- The persona pains each item addresses.
- A customer quote on each problem where one exists.
- The product brief for the accurate description of each capability.

WRITE
- Per item: a plain title, the problem in one line, what it does now, who it is for, one proof quote if available.
- A short "also fixed" list without marketing.

OUTPUT
The release notes, with the pillar per item noted for the PMM.

GROUNDING
Use only claims the product brief supports and quotes from the Universe, cited. No outcomes or numbers we have not recorded.
```

### List the documents the release makes stale

```
Using Calven MCP, list the published documents that the release below makes stale.

FILL IN
- Release: [release]
- Areas: [the product areas it touches]

CONTEXT
I want to fix documentation and sales material in the same week as the release.

PULL FROM THE UNIVERSE
- Product changes recorded for the release and the drift findings on each, with the document and the verdict.
- Claims about the affected areas.

BUILD
- A table: document, what it says, what changed, suggested fix, owner.

OUTPUT
The stale-documents table.

GROUNDING
Use only drift findings and claims in the Universe. If the change is not recorded yet, say so and list the documents mentioning the areas as candidates.
```

### Write a deprecation notice

```
Using Calven MCP, write the deprecation notice for the capability below.

FILL IN
- Capability: [capability]
- Date: [removal date]

CONTEXT
We are removing the capability on the date above. I need the customer notice, the internal message map and the list of accounts most affected.

PULL FROM THE UNIVERSE
- The product brief: the replacement path and what the product does instead.
- Customer quotes and deal drivers that mention the capability, to see who relied on it and why.
- Accounts and deals that named it as a requirement.
- Objection handling in our messaging that applies.

WRITE
- The customer notice: what changes, when, why, the path, where to get help. No marketing.
- The internal message map: who needs to know, what they say, escalation path.
- The affected-accounts list with the quote or requirement behind each.

OUTPUT
The notice, the map and the list.

GROUNDING
Use only the brief, quotes and deals in the Universe, cited. If the pipeline category is restricted, say so and omit the account list.
```

### Fact-check drafted release notes

```
Using Calven MCP, fact-check these release notes.

FILL IN
- Notes: [paste the notes]

CONTEXT
The notes are as drafted. Every capability, integration and pricing claim must be right.

PULL FROM THE UNIVERSE
- The product brief and the claims register.

CHECK
- Mark each claim correct, overstated, stale or not in the brief, with the fix.

OUTPUT
The notes annotated.

GROUNDING
Confirm only against the Universe and cite the section.
```

## Advanced prompts

### Score each account's deprecation risk

```
Score every affected account's risk from the deprecation and tell me who needs a call before the notice goes out. Use Calven MCP for what those accounts said about the capability and what we're selling them.

FILL IN
- Capability being removed: [capability]
- Affected accounts: [paste or attach the list with ARR, renewal date and usage of the capability]
- Replacement: [what replaces it, or write "none"]

CONTEXT
A deprecation notice that reaches the wrong account two months before renewal becomes a churn. I want a ranked list so CS calls the risky ones personally and the rest get the email.

FROM CALVEN
- Quotes from those accounts that mention the capability, with sentiment and date.
- Open deals in the CRM for those accounts, renewals and expansions, with stage and amount.
- Each account's ICP fit tier.
- What the product brief says about the replacement.

MODEL
- Build a risk score from four factors: usage (mine), renewal within 120 days (mine), whether they spoke about the capability as important (Calven), and an open deal at stake (Calven).
- State the weights and show how the top ten change if I double any one of them.
- Bucket each account: call before notice, call after notice, email only.
- If you can run code, return the scored list as a CSV.

OUTPUT
The ranked list with score, bucket and the quote or deal behind it, and a one-paragraph talk track for the top bucket.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't attribute a quote to an account it didn't come from.
```

### Design an A/B test for the launch email

```
Design an A/B test for the release announcement email, with a power calculation, so we learn which message actually drives adoption. Use Calven MCP to build the two variants from approved messaging and customer language.

FILL IN
- Release: [paste the release notes]
- List size: [how many customers receive it]
- Baselines: [paste past open, click and feature-adoption rates for release emails]
- Persona: [persona]

CONTEXT
We send release emails and never know why one lands. This time I want two variants that test one real difference, and a sample size that can detect it.

FROM CALVEN
- The pillar and value proposition the release supports, from the messaging.
- Customer quotes on the problem it solves, for the customer's own words.
- A persona review of both variants.

METHOD
- Write variant A in the messaging's words and variant B in the customer's words. Change nothing else.
- Pick the primary metric (adoption within 14 days, not opens) and a guardrail.
- Run a power calculation: from the baseline and list size, the minimum detectable effect at 80% power and 5% significance. If the list is too small for a useful effect, say so and suggest a bigger change or a longer window.
- If you can run code, show the calculation.

OUTPUT
Both variants, the test plan (metric, split, duration, minimum detectable effect), and the decision rule written before the result comes in.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't promise an effect size; the calculation sets it.
```

## Ad hoc questions

- Which pillar does [feature] support?
- What problem does [feature] solve, in a customer's words?
- Is "[claim]" in the product brief?
- Which product changes were recorded in the last 30 days?
- Which published documents are flagged stale right now?
- Which accounts asked for [capability] in deals?
- Who relied on [capability], according to customer quotes?
- What is the replacement for [capability] in the brief?
- How would [persona] read this release note: "[paste]"?
- Which customer quotes asked for what we just shipped, and from which accounts?
- Which claim in our last release notes is now flagged with a concern in the claims register?
- What did customers say last time we removed or changed a capability?
- Which product changes in the last 90 days did no published document pick up?
- How would [persona] describe the benefit of [feature] in their own words?
- Which open renewals involve accounts that mentioned [capability] on calls?
