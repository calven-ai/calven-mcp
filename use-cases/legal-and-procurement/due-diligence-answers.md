# Due-diligence answers


A buyer's security, vendor-risk or procurement questionnaire just arrived with a hundred questions and a deadline. You get the product and data-handling answers drafted from the approved source, every policy and certification question routed to whoever owns the evidence, and nothing that contradicts the website. Calven holds the approved product description, so the same question doesn't get three different answers in a year.

## Prompts

### Triage the questionnaire and draft product answers

```
Using Calven MCP, triage this questionnaire and draft the answers the product brief can support.

FILL IN
- Account: [account]
- Questionnaire: [paste the questionnaire]

CONTEXT
The questionnaire comes from the buyer at the account above. I need the product, architecture and data-handling questions answered from our approved product description, and everything else routed, not guessed.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, pricing and packaging.

BUILD
- Sort every question into: answerable from the brief, commercial, policy or control, certification, legal terms.
- For the answerable group: the answer in plain language with the brief section it rests on.
- For every other group: "route to" and the owner who should answer it, plus the one fact from the brief that may help, if any.

OUTPUT
The questionnaire as a table: question, group, draft answer or routing, source.

GROUNDING
Answer only from the product brief and cite the section. Never state a certification, policy, control or security practice the brief does not describe. Where the brief is silent, write "not in the brief; route". This is a draft for human review, not a submission.
```

### Check the answers against public claims

```
Using Calven MCP, check these questionnaire answers against what we say in public.

FILL IN
- Draft answers: [paste the draft answers]
- Months: [how many months back to check product changes, e.g. 6]

CONTEXT
A buyer will compare the draft answers with our website and the sales deck, so they have to agree.

PULL FROM THE UNIVERSE
- The claims register for data handling, hosting, integrations and security statements we have published.
- Product changes in the last number of months above that may have changed an answer.

CHECK
- Each answer that contradicts a published claim, with both versions.
- Each answer a recent product change may have made stale.

OUTPUT
The answers annotated with the conflicts, then the list to resolve with security or product.

GROUNDING
Cite the claim row or product change behind every conflict. Do not resolve a conflict by picking one side; flag it.
```

### Answer the competitor comparison question

```
Using Calven MCP, answer the buyer's comparison question about the competitor below honestly.

FILL IN
- Account: [account]
- Competitor: [competitor]
- Area: [area the question covers]

CONTEXT
The questionnaire from the account asks how we compare to the competitor on the area above. The answer has to be factual and survive the buyer reading the rival's answer too.

PULL FROM THE UNIVERSE
- The feature comparison and the "where we lose" section of the competitor's battlecard.
- The relevant product brief section for our side.

WRITE
- A factual answer: what we do, what we do not, where the rival is recorded as stronger.
- No claims about the competitor the dossier does not support.

OUTPUT
The answer in under 150 words, with the sources.

GROUNDING
Cite the battlecard and the brief. Do not use the AI tool's own knowledge of the competitor. Do not overstate our side.
```

## Ad hoc questions

- Where does the product brief say the product is hosted?
- Which integrations does the brief list?
- What does the brief say about the technical architecture?
- Does the brief mention SSO, SCIM or audit logs?
- What is included in [plan], and what are its limits?
- Have we published any claim about data retention? Where?
- Did anything about data handling change in the product in the last six months?
- What do we say about [area] on our site, and does it match the brief?
- How does our feature comparison with [competitor] treat [area]?
- Which questions in this questionnaire can the brief answer: [paste]
- What support terms does the brief describe?
