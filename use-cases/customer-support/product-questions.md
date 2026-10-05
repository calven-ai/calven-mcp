# Product and capability questions

**Team:** Customer support · also customer success, solutions engineering
**Impact:** High. "Does it do X" is the most common ticket type, and a wrong yes creates a churn risk, a refund or an escalation. The approved product brief answers it the same way every time.
**Prerequisites:** strategy documents approved (product brief). Better with own website and docs monitored (product changes, claims) so the brief is checked against what shipped.

## What the team is trying to do

Answer a customer's question about what the product does, how a capability works, what it integrates with and what it does not do, accurately and in the company's approved words, at first contact. Done means the agent sends an answer they can stand behind without pinging product, and the answer matches what sales promised and what the website says. Without the approved brief, agents answer from memory, old macros or a colleague in Slack, and the customer gets three versions of the truth.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Read the ticket | Understand what the customer is really asking and which capability it touches | Calven does not help here | |
| 2 | Find the approved answer | Look up whether and how the product does it | The product brief: capabilities and features, use cases, integrations, technical architecture | Product brief |
| 3 | Check it is still true | Confirm nothing changed since the brief was approved | Recent product changes and the documents they left stale | Product changes, drift findings |
| 4 | Handle a "no" | When the product does not do it, say so and point at the approved alternative | Known weaknesses and the approved wording for what the product does not do; how other customers solved the same job | Product brief (differentiators and known weaknesses), quotes, themes |
| 5 | Write the reply | Draft the answer in plain words at the customer's technical level | A draft in the approved words, with the brief section it relies on | Product brief, messaging (boilerplate) |
| 6 | Add context for a technical user | Explain limits, architecture or integration details | The technical architecture and integrations sections | Product brief |
| 7 | Log and tag | Categorise the ticket, link the article, note a gap | Calven does not help here (ticketing system) | |
| 8 | Feed the gap back | When the brief had no answer, tell product and PMM | Which capability the brief is silent on, and how often customers raise the same job | Themes, quotes |

## Recommended prompts

### Step 2 and 3: find the approved answer and check it

```
Using Calven MCP, answer a customer's product question from our approved product brief.

CONTEXT
A customer asked the question below. I need the accurate answer, in our approved words, and I need to know if anything about it changed recently.

PULL FROM THE UNIVERSE
- The product brief sections that cover this capability: features, use cases, integrations, technical architecture.
- Any product change in the last 90 days that touches it, and any document that change left stale.

ANSWER
- What the product does for this question, in two or three sentences a customer can read.
- What it does not do, if the brief says so.
- Whether a recent change affects the answer.

OUTPUT
The customer-ready answer, then the brief section it relies on, then a one-line note on recent changes.

GROUNDING
Answer only from the product brief and product changes in the Universe and cite the section. If the brief does not cover it, say "not in the brief" and do not guess.

[paste the customer's question]
```

### Step 4: handle a "no"

```
Using Calven MCP, help me tell a customer we do not do what they asked, without losing them.

CONTEXT
The customer asked for a capability we do not have. I want an honest answer, the closest thing we do offer, and how other customers get the same job done.

PULL FROM THE UNIVERSE
- The product brief: what we do that is closest, and the known weaknesses section if it names this gap.
- Customer quotes and themes about the same job, so I can see how others handle it.

WRITE
- A plain "we do not do X" line.
- The closest approved alternative, if any.
- One sentence on how other customers approach it, grounded in a quote.

OUTPUT
A short reply I can send, and a note on whether this gap already appears in customer themes.

GROUNDING
Do not promise anything the brief does not say. Do not invent a workaround. Cite the quote and the brief section.

[paste the customer's request]
```

### Step 5 and 6: write the reply for a technical user

```
Using Calven MCP, write a technical answer about [capability] for a customer who is an engineer.

CONTEXT
The customer asked the question below and wants specifics: how it works, limits, integration behaviour.

PULL FROM THE UNIVERSE
- The product brief: the capability, the technical architecture section, the integrations section.

WRITE
- The answer at an engineer's level: how it works, what the limits are, what it connects to.
- The one thing the brief does not state that they will probably ask next, flagged for product.

OUTPUT
The reply, with each technical statement tied to a brief section.

GROUNDING
Use only the product brief. Do not add architecture details from general knowledge of similar products.

[paste the question]
```

### Step 8: feed the gap back

```
Using Calven MCP, tell me how often customers ask for what our product brief does not cover.

CONTEXT
I answered a ticket today where the brief had no answer for [capability or job]. Before I raise it with product I want to know if it is a pattern.

PULL FROM THE UNIVERSE
- Customer-voice themes and quotes about this job or capability, with counts and sentiment.
- Any product gap in the win/loss read that matches it.

BUILD
- How many times it comes up, from whom, with the two strongest quotes.
- Whether it shows up as a loss reason or product gap in deals.

OUTPUT
A short note I can post to product, with sources.

GROUNDING
Cite every count and quote. If the Universe has nothing on it, say so; one ticket is not a pattern.

[name the capability or job]
```

## Ad hoc questions

- Does our product do [capability]? Quote the product brief.
- Which integrations does the brief list for [system]?
- What is the approved way to describe [feature] to a customer?
- Did anything change in [feature] in the last 60 days?
- What does the brief say we do not do?
- A customer asks whether [feature] works with [tool]. What is the answer?
- Which of our help articles might be stale after the last product change?
- How do other customers get [job] done, in their words?
- Is "[claim the customer saw on our site]" true according to the brief?
- What is the technical architecture section's answer on [data residency / limits / API]?
- Which plan includes [feature]?
- What is the approved boilerplate description of the product?

## Good practice

- Paste the customer's exact question. The answer is only as good as the question the AI tool matches to the brief.
- Ask for the brief section with every answer, so a second agent can check it in one click.
- When the brief is silent, send "I am checking with product" rather than a guess, and run the gap prompt the same day.
- Rerun the question after a release. Product changes and drift findings show what the brief no longer covers.
- For a "no", ask for the closest alternative and a customer quote. The honest answer lands better with proof that others manage.
- Keep the AI tool's own knowledge out of the reply. If it starts describing how products like ours usually work, ask it to stick to the brief.

## Not covered today

- Reading or replying in the ticket system, and tagging the ticket.
- Product usage or account configuration data. The AI tool knows what the product does, not what this customer has switched on.
- Help-centre search. Calven holds the approved facts, not the published articles.
- Updating the product brief. A gap goes to the PMM, who approves the change in Calven.
