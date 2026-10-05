# Due-diligence answers

**Team:** Legal and procurement · also solutions engineering, sales, customer success
**Impact:** Medium. A buyer questionnaire has a hundred questions, half about the product and its data handling as described to the market. Calven holds the approved product description, so the product half gets a first draft that matches the collateral, and the questions it cannot answer are listed instead of guessed.
**Prerequisites:** strategy documents approved (product brief with capabilities, integrations, technical architecture, pricing). Better with own website and docs monitored (claims register, product changes).

## What the team is trying to do

Return a security, vendor-risk or procurement questionnaire that is accurate, consistent with everything sales and marketing have said, and finished on time. Done means every product and data-handling question answered from the approved source, every policy and certification question routed to the person who owns the evidence, and no answer that contradicts the website. Without the Universe the answer bank drifts from the product and the same question gets three different answers in a year.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Triage the questionnaire | Sort questions into product and architecture, data handling as described, policies and controls, certifications, legal terms | The AI tool sorts the pasted questions; Calven supplies the product facts for the first two groups | Product brief |
| 2 | Draft the product answers | Answer what the product does, integrations, hosting and architecture as the brief states | Product brief sections: capabilities, integrations, technical architecture | Product brief |
| 3 | Check consistency with public claims | Make sure answers match the site and the sales collateral | The claims register and recent product changes | Claims, product changes |
| 4 | Route the rest | Send policy, control and certification questions to security and the evidence owners | Calven does not help here | |
| 5 | Answer the commercial questions | Pricing, plans, support terms | Pricing and packaging in the product brief | Product brief |
| 6 | Competitor references | When the buyer asks how the product compares to a rival they also evaluate | Battlecard feature comparison, honest about gaps | Competitor bundle |
| 7 | Review and submit | Legal and security sign off, submit in the buyer's portal | Calven does not help here | |
| 8 | Update the answer bank | Record new answers for next time | Calven does not help here | |

## Recommended prompts

### Step 1 and 2: triage and first draft

```
Using Calven MCP, triage this questionnaire and draft the answers the product brief can support.

CONTEXT
Below is a buyer questionnaire from [account]. I need the product, architecture and data-handling questions answered from our approved product description, and everything else routed, not guessed.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, pricing and packaging.

BUILD
- Sort every question into: answerable from the brief, commercial, policy or control, certification, legal terms.
- For the answerable group: the answer in plain language with the brief section it rests on.
- For every other group: "route to [owner]" and the one fact from the brief that may help, if any.

OUTPUT
The questionnaire as a table: question, group, draft answer or routing, source.

GROUNDING
Answer only from the product brief and cite the section. Never state a certification, policy, control or security practice the brief does not describe. Where the brief is silent, write "not in the brief; route". This is a draft for human review, not a submission.

[paste the questionnaire and name the account]
```

### Step 3: consistency with public claims

```
Using Calven MCP, check these questionnaire answers against what we say in public.

CONTEXT
Below are our draft answers. A buyer will compare them with our website and the sales deck, so they have to agree.

PULL FROM THE UNIVERSE
- The claims register for data handling, hosting, integrations and security statements we have published.
- Product changes in the last [months] months that may have changed an answer.

CHECK
- Each answer that contradicts a published claim, with both versions.
- Each answer a recent product change may have made stale.

OUTPUT
The answers annotated with the conflicts, then the list to resolve with security or product.

GROUNDING
Cite the claim row or product change behind every conflict. Do not resolve a conflict by picking one side; flag it.

[paste the draft answers]
```

### Step 6: the competitor question

```
Using Calven MCP, answer the buyer's comparison question about [competitor] honestly.

CONTEXT
The questionnaire from [account] asks how we compare to [competitor] on [area]. The answer has to be factual and survive the buyer reading the rival's answer too.

PULL FROM THE UNIVERSE
- The feature comparison and the "where we lose" section of the [competitor] battlecard.
- The relevant product brief section for our side.

WRITE
- A factual answer: what we do, what we do not, where the rival is recorded as stronger.
- No claims about [competitor] the dossier does not support.

OUTPUT
The answer in under 150 words, with the sources.

GROUNDING
Cite the battlecard and the brief. Do not use the AI tool's own knowledge of the competitor. Do not overstate our side.

[name the account, the competitor and the area]
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

## Good practice

- Paste the whole questionnaire and ask for triage first. The value is in the routing as much as in the answers.
- Never let the AI tool answer a certification, policy or control question. Those come from the security program's evidence, not from the product description.
- Run the consistency check before submission. The buyer's reviewer will.
- Keep "not in the brief" as a visible status in the draft. It is the list of facts the brief should gain next.
- Name the account so the AI tool can use CRM context about the deal and the buyer's competitors when the pipeline category is on.

## Not covered today

- Security policies, controls, certifications, audit reports, subprocessor lists and the evidence behind them. They live in the compliance program, not in Calven.
- Contract terms, DPA positions and legal commitments.
- Submitting in the buyer's portal or storing the finished questionnaire.
- The standard answer bank. Calven supplies product facts; the bank is maintained by the team.
