# Technical questions

**Team:** Account executives · also BDRs and SDRs, customer success, solutions engineering
**Impact:** High. A wrong answer about an integration or a limit becomes a lost deal or a churned customer, and the SE is not on every call.
**Prerequisites:** strategy documents approved (product brief with capabilities, integrations, technical architecture, pricing and packaging, known weaknesses). Better with own website and docs monitored (product changes, claims).

## What the team is trying to do

Answer the buyer's product question straight: what the product does, how it works, what it integrates with, what it does not do, and what it costs, without overclaiming or stalling for the SE. Done means the rep answers the common questions from the approved product brief, says "we don't" when the brief says so, and knows which questions to hand to the SE. Without the approved source, reps answer from the last demo they saw, and the product moved since.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Understand the question | What the buyer is really asking and why | The persona's jobs to be done and objections behind the question | Persona canvas |
| 2 | Find the approved answer | Capability, integration, architecture, limit, price | The product brief sections: Capabilities & Features, Integrations, Technical Architecture, Pricing & Packaging, Differentiators & Known Weaknesses | Product brief |
| 3 | Check it is current | Did the product change since the brief | Recent product changes and any drift finding on the brief | Product changes, product drift findings |
| 4 | Check the claim | Is the thing the buyer read on our site a supported claim | The claims register: assertions our site makes and their status | Claims |
| 5 | Know what we do not do | Say it plainly, and what to say instead | Known weaknesses in the brief; battlecard "where we lose" when the gap is competitive | Product brief, competitor battlecard |
| 6 | Answer in writing | The forwardable reply | A drafted answer that cites the brief and holds no claim outside it | Product brief |
| 7 | Hand off | Questions beyond the brief go to the SE | Calven does not help here beyond saying the brief is silent | |

## Recommended prompts

### Step 2 to 6: answer one question

```
Using Calven MCP, answer a technical question from [contact] at [account].

CONTEXT
[Contact], a [persona], asked: "[the question]". I want a straight answer I can send today, including a plain "no" if that is the truth.

PULL FROM THE UNIVERSE
- The product brief sections that cover this: capabilities, integrations, technical architecture, pricing and packaging, known weaknesses.
- Product changes in the last 90 days that touch this topic, and any drift finding on the brief.
- The claims register for any related statement on our site.

BUILD
- The answer in two or three sentences, in plain words.
- What we do not do, if that is part of the honest answer, and the usual workaround or alternative.
- Whether this is a question for the solutions engineer, and why.

OUTPUT
The reply I can send, then a line citing the brief sections it relies on.

GROUNDING
Every claim must be in the product brief or a recorded product change; cite the section. Where the brief is silent, write "I will confirm with our product team" rather than a guess.

[paste the question and name the contact and persona]
```

### Step 3 and 4: is my answer still true

```
Using Calven MCP, check whether this product answer is still true.

CONTEXT
Below is what I have been telling buyers about [topic]. I want to know if the product moved.

PULL FROM THE UNIVERSE
- The product brief sections on [topic].
- Product changes touching [topic] and any document they left stale.
- Claims on our site about [topic] and their status.

CHECK
- Each statement: correct, stale, wrong or not in the brief.
- The corrected wording.

OUTPUT
My answer annotated, then the clean version.

GROUNDING
Confirm only against the brief, changes and claims in the Universe, cited. Do not fill gaps from general knowledge of the product category.

[paste what you tell buyers]
```

### Gap mode: the questions the brief cannot answer

```
Using Calven MCP, which technical questions from buyers does our product brief not answer?

CONTEXT
I want the list for product marketing so the brief gets better.

PULL FROM THE UNIVERSE
- Customer quotes and objections that are product questions, from the last quarter.
- Product feedback tagged on lost deals.
- The product brief sections.

CHECK
- Which questions the brief answers, which it does not.
- Which unanswered ones appear on lost deals, with count.

OUTPUT
A table: question, how often, on lost deals, covered yes or no. Then the five to add first.

GROUNDING
Counts from the Universe only, cited with window. Do not invent questions.

[name the window and the product if you have several]
```

## Ad hoc questions

- Do we integrate with [system]?
- Does the product do [capability]? Say no if we do not.
- What does the brief say about hosting, data residency and SSO?
- What changed in the product in the last 90 days?
- Is "[claim on our website]" a supported claim?
- What are our known weaknesses, as the brief states them?
- Which plan includes [feature]?
- What is the approved answer on API access and rate limits?
- What do we say when a buyer asks about [feature we lack]?
- Is this a question for the solutions engineer?
- What is the workaround we recommend for [gap]?
- Has any document gone stale since the last release?

## Good practice

- Ask for the "no" explicitly. The prompt that says "include a plain no if that is the truth" gets a usable answer; the one that does not gets a hedge.
- Cite the brief section in the written reply to the buyer only when it helps; always ask the AI tool to cite it to you.
- Rerun the check after a release. Drift findings tell you which answers went stale.
- Send questions the brief does not cover to the SE and to product marketing. The brief improves when reps report the gaps.
- Never answer pricing beyond what Pricing & Packaging states. Discounts and terms are a conversation with your manager, not a brief lookup.

## Not covered today

- Technical depth beyond the brief: configuration details, edge cases, future plans. That is the SE and product, in a call.
- Documentation itself. Calven monitors our docs for changes and claims; the docs live where they live. The AI tool may have them separately.
- Availability or timing of anything not in the brief. The AI tool should not speculate about what is coming.
