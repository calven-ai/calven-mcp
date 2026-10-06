# Review-site program


You want more and better reviews on the sites buyers and AI assistants read. You walk away with a monthly ask list, a personalised prompt per contact, and a read on which strengths reviews should reinforce. Calven picks the right customers at the right moment from the company's own call evidence, so requests don't go to everyone and the reviews say more than "good support".

## Prompts

### Build this month's review ask list

```
Using Calven MCP, build this month's review request list.

FILL IN
- Site: [review site]
- Window: [time window, e.g. last six months]

CONTEXT
We are collecting reviews on the site. I want twenty contacts likely to write a good one, each with a personalised ask.

PULL FROM THE UNIVERSE
- Customer contacts who are end users or champions with positive quotes over the window, with the quote, role and account.
- Won deals closed in the window with the champion contact.
- The positioning differentiators we want reviews to reinforce.

BUILD
- A table: contact, role, account, their best quote, the differentiator it supports, a two-sentence ask that quotes their own words and suggests what to write about.

OUTPUT
The table.

GROUNDING
Use only quotes and CRM data in the Universe, verbatim and cited. Do not include contacts with no positive quote.
```

### Draft a reply to a review

```
Using Calven MCP, draft a reply to this review.

FILL IN
- Site: [review site]
- Review: [paste the review]

CONTEXT
I want a reply that thanks the reviewer, addresses any criticism honestly, and stays on the approved messaging.

PULL FROM THE UNIVERSE
- The product brief for anything the review says about capabilities.
- The messaging objection handling for the criticism, if there is one.
- Product changes that address the criticism, if any.

WRITE
- A reply under 100 words. No claims beyond the brief.

OUTPUT
The reply.

GROUNDING
Use only the Universe and cite it. If the criticism is right and nothing has changed, say so in the reply rather than deflecting.
```

### Pick the strengths reviews should reinforce

```
Using Calven MCP, tell me which strengths our review program should reinforce.

CONTEXT
I want reviews to support the comparisons buyers make and what AI assistants say about us.

PULL FROM THE UNIVERSE
- Our positioning: unique attributes and proof points.
- The battlecards for our Tier 1 competitors: where we win and their weaknesses.
- The AI perception section of the positioning dashboard: what assistants say about us and what they miss.

BUILD
- Five themes reviewers should be prompted on, each with the differentiator and the competitor comparison it supports.

OUTPUT
The five themes with a one-line prompt for each.

GROUNDING
Use only the Universe and cite it.
```

## Advanced prompts

### Simulate how many reviews move the rating

```
Simulate how many new reviews it takes to move our rating, and our standing against a competitor, on one review site, and who to ask to get there. Use Calven MCP for the customers who already said good things and the strengths reviews should reinforce.

FILL IN
- Review site: [site]
- Our current reviews: [count, average rating and the star distribution]
- Competitor's current reviews: [competitor, count and average rating]
- Ask conversion: [share of asked customers who left a review last time, or write "none"]

CONTEXT
We can run one review push this quarter. I want to know whether it can move the number buyers see, or whether volume against the competitor is the real game.

FROM CALVEN
- Customer contacts with positive quotes in the last 12 months, by role (end users first), account and highlight.
- Contacts with negative or mixed quotes in the same window, as the honest risk.
- Our differentiators against the competitor from the battlecard, for the prompt topics.

SIMULATE
- Size the ask list from the positive and mixed contacts. Draw who responds at my conversion rate (or a ranged assumption), and the star each gives: higher for positive-quote contacts, wider for mixed.
- If you can run code, run a Monte Carlo of 5,000 pushes and show the distribution of our new average and count, and the chance we pass the competitor on each.
- Find the ask volume where the chance of a visible move (a tenth of a star, or passing them on count) crosses 50%.
- Rank the contacts to ask first, each with the quote that hints at the strength they'd write about.

OUTPUT
The distribution, the ask volume needed, a go or rethink call, and the ranked ask list.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Review counts and ratings are mine; Calven holds no review-site data. Don't guess a star for a contact with no quotes; leave them out and say how many.
```

### Close the gap in what AI assistants say

```
Audit what AI assistants say about us against what our customers say, and write the review prompts that close the gap. Use Calven MCP for the AI answers it has recorded, our approved positioning and the customer evidence.

FILL IN
- Competitor buyers compare us with: [competitor]
- Review sites in play: [sites]

CONTEXT
Buyers ask an AI assistant for a shortlist before they read a single review, and those assistants lean on review sites. If the assistant gets our strength wrong, part of the fix is what reviewers write, so the review prompts should aim at the gap.

FROM CALVEN
- The recorded AI assistant answers about us and the category from the positioning dashboard, with what each one says.
- Our unique attributes and proof points from the positioning document, and how we win against the competitor from the battlecard.
- Positive customer quotes grouped by theme and highlight, with counts.

METHOD
- Build a matrix: each strength we claim, what the AI answers say about it (right, wrong, missing), and how much customer evidence backs it.
- Sort every row: the AI misses it but customers say it often (reviews can fix this), customers rarely say it (fix the story before asking), or the AI already gets it right.
- For the rows reviews can fix, write one review prompt each: an open question that invites the customer to describe their own experience of that strength.
- Match each prompt to the contacts whose quotes show they've lived it.

OUTPUT
The gap matrix, three to five review prompts, the contacts per prompt with their quote, and the strengths to leave alone.

GROUNDING
Label every count as Calven (cited, with n) or your judgement. AI answers and quotes are cited from Calven. Don't write a prompt that tells a reviewer what to say; review sites ban that, so keep every prompt open.
```

## Ad hoc questions

- Which end users have said something positive in the last 90 days?
- What did [contact] say about ease of use?
- Which champion on a recent won deal would write a review?
- What are our differentiators against [competitor] that a review could mention?
- What do AI assistants say about us, and what do they get wrong?
- Draft a reply to a review that says we are expensive.
- Has [criticism] been addressed by a product change?
- Which quotes are tagged ease of use or time to value with positive sentiment this quarter?
- Is "[claim in a reply]" supported by the product brief?
- Which customers praised us against [competitor] in their own words?
- Which strengths do customers mention that our positioning doesn't claim?
- Which complaint are reviewers most likely to raise, and has a product change addressed it?
- Which end users at Tier 1 accounts said something positive about ease of use?
- Which battlecard weakness of [competitor] do our own customers confirm in quotes?
- What do AI assistants say about [competitor] that our customers' quotes contradict?
