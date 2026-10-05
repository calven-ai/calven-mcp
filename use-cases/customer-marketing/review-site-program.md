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
