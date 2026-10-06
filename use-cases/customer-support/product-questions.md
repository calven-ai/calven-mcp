# Product and capability questions


A customer asks what the product does, how a capability works or what it integrates with, and the usual sources are memory, old macros and a colleague in Slack. You get an answer at first contact you can stand behind without pinging product, matching what sales promised and what the website says. Calven gives you the approved brief, so the customer hears one version of the truth.

## Prompts

### Answer a product question from the brief

```
Using Calven MCP, answer a customer's product question from our approved product brief.

FILL IN
- Question: [paste the customer's question]

CONTEXT
I need the accurate answer to the question, in our approved words, and I need to know if anything about it changed recently.

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
```

### Tell a customer no without losing them

```
Using Calven MCP, help me tell a customer we do not do what they asked, without losing them.

FILL IN
- Request: [paste the customer's request]

CONTEXT
The request is for a capability we do not have. I want an honest answer, the closest thing we do offer, and how other customers get the same job done.

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
```

### Write a technical answer for an engineer

```
Using Calven MCP, write a technical answer about the capability below for a customer who is an engineer.

FILL IN
- Capability: [capability]
- Question: [paste the question]

CONTEXT
The customer wants specifics on the question: how it works, limits, integration behaviour.

PULL FROM THE UNIVERSE
- The product brief: the capability, the technical architecture section, the integrations section.

WRITE
- The answer at an engineer's level: how it works, what the limits are, what it connects to.
- The one thing the brief does not state that they will probably ask next, flagged for product.

OUTPUT
The reply, with each technical statement tied to a brief section.

GROUNDING
Use only the product brief. Do not add architecture details from general knowledge of similar products.
```

### Report brief gaps back to product

```
Using Calven MCP, tell me how often customers ask for what our product brief does not cover.

FILL IN
- Gap: [capability or job]

CONTEXT
I answered a ticket today where the brief had no answer for the gap. Before I raise it with product I want to know if it is a pattern.

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
```

## Advanced prompts

### Build an eval set for support answers

```
Build an eval set that grades any support answer, human or bot, about what our product does. Use Calven MCP for the approved capabilities, the known weaknesses and what changed recently.

FILL IN
- Answers to grade: [paste or attach a sample of past ticket replies or help bot answers, or write "none"]
- Product area: [product area or feature set to cover]

CONTEXT
We answer "does it do X" hundreds of times a month, and some of those answers go out from a bot. I want a fixed test I can run every month, so I know whether answers are getting more accurate or quietly drifting.

FROM CALVEN
- The product brief sections for the product area: capabilities, integrations, technical architecture, differentiators and known weaknesses.
- Claims our site and documents make about it, with any concern flagged.
- Product changes in the last 90 days that touch it.

BUILD
- Write 40 test questions customers plausibly ask, in customer language: 15 the brief answers yes, 10 it answers no, 10 near-misses where a careless yes is the trap, and 5 the brief doesn't cover.
- For each, the reference answer with its brief section, and a rubric: correct, correct but missing the limit, wrong, invented.
- Weight the near-misses and the changed features double. That's where a wrong yes becomes a refund.
- If I pasted answers, grade them against the set and give the accuracy by category. If you can run code, output the set as a CSV and a short script that scores a new batch.

OUTPUT
The eval set as a table (question, category, reference answer, source, weight), then the scores of my sample and the five worst misses.

GROUNDING
Every reference answer cites the brief, a claim or a product change. Questions the brief doesn't cover are marked "not in the brief" as the correct answer. Don't invent a capability to make a question answerable.
```

### Red-team the help bot before customers do

```
Red-team our help bot or macro library: find the questions that make it say something false about the product. Use Calven MCP for the approved product facts and the questions customers actually ask.

FILL IN
- Bot or macro content: [paste the knowledge base, macro set or bot instructions, or a transcript of bot answers]
- Feature in scope: [feature or product area]

CONTEXT
A bot that says yes too easily creates the worst kind of ticket: the one where the customer bought on our word. I want the failure cases found by us, before a customer screenshots one.

FROM CALVEN
- The product brief for the feature: what it does, its limits, integrations and known weaknesses.
- Customer quotes about the feature tagged Product feedback or Usability, so the attacks sound like real customers.
- Product changes in the last 90 days and the documents they left stale.

RED-TEAM
- Write 25 attack questions in five families: leading questions ("so it does X, right?"), stale-fact traps from recent changes, integration edge cases, limit and scale questions, and competitor-framed questions.
- For each, predict what the pasted content would answer and whether it's true, false or overclaimed against the brief.
- Rank the failures by harm: a false yes on a buying decision beats a vague answer.

OUTPUT
A table of the attacks that broke it (question, likely answer, what the brief says, harm), then the patched macro or knowledge-base lines for the top five.

GROUNDING
Judge truth only against the brief and product changes, cited. Mark any predicted bot answer as your prediction. Don't invent a product fact to fill a hole; flag it for product.
```

### Decide when a maybe deserves a yes

```
Build a decision tree for the grey-zone "does it do X" tickets: answer yes with a caveat, say no, or escalate to an engineer. Use Calven MCP for what the brief says and what this gap has cost in deals.

FILL IN
- Question: [paste the customer's question]
- Account value: [the account's annual contract value, or a range]
- Your costs: [rough cost of an engineer escalation, a refund, and a churned account, or write "estimate"]

CONTEXT
The brief half-covers this one. A confident yes saves time and might cost the account. Escalating every maybe burns engineering. I want the call made on expected value, not on who's on shift.

FROM CALVEN
- The product brief sections that touch the question, including known weaknesses.
- Product gaps from the win/loss dashboard and deals lost with loss reason Missing feature where the product feedback category matches, with n.
- Customer quotes on the same need, to judge how often it comes up.

MODEL
- Lay out the tree: three actions, then outcomes (customer satisfied, comes back unhappy, refund, churn) with a probability for each.
- Set the probabilities from the evidence where you can and as labelled assumptions where you can't. If the gap shows up in lost deals, raise the chance a wrong yes ends badly.
- Compute the expected cost of each action and the break-even probability where the choice flips.

OUTPUT
The tree as a table, the expected cost per action, the break-even point, the recommended action and the reply to send.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a deal or a churn rate; my costs come from me.
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
- Which capabilities have both a known weakness in the brief and a recent product change?
- Which features do customers describe in words the brief never uses?
- What's the most common "does it do X" request that shows up as a lost-deal product gap?
- Which claims on our site have a concern flagged that touches [feature]?
- What do customers say [feature] is for, compared with what the brief says it's for?
- Which integrations come up on calls that the brief doesn't list?
