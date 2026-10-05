# Customer questions

**Team:** Customer success · also customer support, solutions engineering
**Impact:** Medium. Every CSM fields product, integration, security and pricing questions daily. Answering from the approved product brief, with the honest "we do not do that", is faster than asking in Slack and safer than guessing.
**Prerequisites:** product brief approved, own website and docs monitored (product changes). Messaging approved adds the objection handling. Competitors tracked adds the comparison questions (see competitive displacement defence).

## What the team is trying to do

Give customers a correct, consistent answer the same day, in writing, without over-claiming and without pulling product or sales into every thread. Done means a reply grounded in the brief with the caveat where the brief has one, and a record of the questions the brief does not answer. Without the approved brief, every CSM answers differently and the customer hears three versions.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Classify the question | Product, integration, security, pricing, comparison, how-to | The brief's sections map to the question type | Product brief |
| 2 | Find the approved answer | What the brief says, including known weaknesses | The product brief and the relevant product changes | Product brief, product changes |
| 3 | Handle the gap | When the brief is silent | The brief says "not recorded"; route to product or the PMM | |
| 4 | Write the reply | Customer-ready, honest | The reply in the approved messaging with the caveat | Messaging, product brief |
| 5 | Log the question | Feed the record | Calven does not help here from the AI tool (a call note or support export can be ingested) | |

## Recommended prompts

### Step 2 to 4: the reply

```
Using Calven MCP, answer this customer question from the product brief.

CONTEXT
[contact] at [account] asked: "[question]". I want a reply I can send today.

PULL FROM THE UNIVERSE
- The product brief sections on the topic: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses.
- Product changes on the topic in the last [window].
- The messaging objection handling if the question is an objection.

WRITE
- A reply under 120 words: the answer, the caveat if the brief has one, the next step.
- Mark anything the brief does not cover as "not recorded" instead of answering.

OUTPUT
The reply and a one-line note on what the brief does not cover.

GROUNDING
Use only the Universe and cite the section. Do not infer a capability from a related one.

[paste the question; name the contact and account]
```

### Step 3: the questions the brief cannot answer

```
Using Calven MCP, check which of these customer questions the product brief answers.

CONTEXT
Below are the questions my team got this week. I want to know which ones have an approved answer and which need product marketing to write one.

PULL FROM THE UNIVERSE
- The product brief, all sections.
- Product changes this month.

CHECK
- For each question: answered by the brief (with the section), partly answered, or not covered.

OUTPUT
A table, then the list for product marketing.

GROUNDING
Use only the Universe and cite it.

[paste the questions]
```

### Review: an answer a colleague drafted

```
Using Calven MCP, check this reply before I send it.

CONTEXT
Below is a draft reply to [account] about [topic].

PULL FROM THE UNIVERSE
- The product brief on [topic] and recent product changes.

CHECK
- Each claim: in the brief, overstated, or not in the brief.
- The accurate wording for each flag.

OUTPUT
The draft annotated and a clean version.

GROUNDING
Use only the Universe and cite it.

[paste the draft and name the topic]
```

## Ad hoc questions

- Do we support [integration]?
- What does the product brief say about [security topic]?
- Is [feature] included in the [tier] plan?
- What changed in [area] in the last 60 days?
- What is the approved answer to "[objection]"?
- Does our architecture support [requirement]?
- What are our known weaknesses on [topic]?
- Is there anything in the brief about data residency?
- Write a reply to a customer asking whether we do [capability].

## Good practice

- Ask for the section, not just the answer. A cited answer is one you can forward.
- Treat "not recorded" as a task for product marketing, not a gap to fill from memory.
- Rerun the question after a release. Product changes make last month's answer wrong.
- Keep the weekly question list. It is the best input the product brief gets.

## Not covered today

- Support tickets, how-to documentation and the knowledge base are outside Calven unless ingested as documents.
- Calven does not log the question; paste the thread into a note that gets ingested, or export it.
