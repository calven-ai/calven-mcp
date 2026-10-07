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

## Advanced prompts

### Find every answer that contradicts another

```
Cross-check every answer we've given buyers against each other and against what we publish, and find the contradictions before a buyer's risk team does. Use Calven MCP for the product description and our public claims.

FILL IN
- Answer sets: [paste or attach the last three to five completed questionnaires, with buyer and date]
- Current draft: [paste the questionnaire in progress]
- Areas: [the areas to focus on, e.g. hosting, data retention, subprocessors, SSO]

CONTEXT
Enterprise buyers compare our answer to the same question across years, and their risk teams read our website. One answer that says "EU hosting only" next to another that says "US and EU" turns a review into an escalation.

FROM CALVEN
- The product brief: technical architecture, integrations, capabilities, plan inclusions.
- The claims register rows about security, data handling and compliance, with where each appears.
- Product changes in the last 12 months that touch those areas, with dates.

METHOD
- Normalise every answer into a canonical question, then line up every version of it: past answer sets, the draft, the brief, the public claims.
- Classify each pair: identical, compatible (worded differently, same fact), drifted (true when given, changed since, with the product change that explains it), or contradictory.
- If you can run code, build it as a matrix with one row per canonical question and one column per source.

OUTPUT
The contradictions first, each with both versions, the correct one per the brief and the buyers who received the wrong one. Then the drifted answers, then a clean canonical answer per question for the answer bank.

GROUNDING
The brief and the claims register decide which version is correct, cited. Where neither covers it, say "owner to confirm" and name the area. Don't pick a winner from your general knowledge of how SaaS products work.
```

### Write the test set for drafted answers

```
Write a test set that grades any AI-drafted questionnaire answer before it reaches a buyer. Use Calven MCP for the facts the golden answers must match and the questions the product brief can't answer.

FILL IN
- Question bank: [paste or attach the questions we see most, 30 to 100]
- Owners: [who owns policy, certification and infrastructure answers]

CONTEXT
We'll draft more questionnaire answers with AI tools, and the dangerous failure isn't a clumsy answer, it's a confident one about a certification we don't hold. I want a fixed set of test questions with golden answers so any draft, from any tool, can be graded the same way.

FROM CALVEN
- The product brief sections that answer product, integration, hosting and plan questions.
- The claims register rows about security and data handling.
- Product changes in the last 12 months, so golden answers reflect the current product.

BUILD
- Pick 25 test questions: 15 the brief answers, 5 it answers only partly, 5 it can't answer at all (policy, certifications, pen tests, insurance).
- For each, write the golden answer with its source, or the golden behaviour for the unanswerable ones: decline and route to the named owner.
- Write a grading rubric: factual match, no claim beyond the source, correct refusal, consistent with public claims. Score 0 to 2 on each.
- Add five trap questions that invite a confident wrong answer.

OUTPUT
The test set as a table or CSV, the rubric, and a pass mark. Then instructions to rerun it after every product change.

GROUNDING
Every golden answer cites the brief, a claim or a product change. Don't write a golden answer for a certification or policy; route it. Label your trap questions as constructed.
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
- Which product changes in the last year touched hosting, data handling or integrations?
- Which security or compliance claims on our site have a flagged concern in the claims register?
- What does the brief list as a known weakness that a security reviewer might ask about?
- Do any customer quotes mention security review, procurement delays or compliance as an objection?
- Which deals were lost with Security as the product feedback, and at what stage?
