# Security questionnaires


A security questionnaire is stalling the deal, and most of it isn't yours to answer. You get product-level answers (hosting, data flow, integrations, authentication) cited to the brief with nothing overclaimed, a clean list for the security team on certifications, policies, controls, subprocessors and incident history, and a read on how often security has decided deals so the AE engages the CISO early. Calven gives you the approved product source, so one architecture answer from memory doesn't cost the deal at the end.

## Prompts

### Triage the questionnaire and answer product questions

```
Using Calven MCP, triage this security questionnaire and answer the product-level questions.

FILL IN
- Account: [account]
- Questionnaire: [paste the questionnaire]

CONTEXT
The questionnaire comes from the account. I need the questions split into what our product brief answers and what goes to security, and the product answers drafted.

PULL FROM THE UNIVERSE
- The product brief: technical architecture, integrations, data handling as described, authentication and access as described.
- Product changes in the last 90 days touching those sections.
- The claims register for security-related statements on our site and docs.

BUILD
- Group A, product-level: each question with a draft answer and the brief section, or "not in the brief" if the brief is silent.
- Group B, security program: the list to route to the security team, unanswered.
- Any question where our public claims and the brief disagree.

OUTPUT
Two lists and the discrepancy note.

GROUNDING
Answer only what the brief states, cited. Never infer a control, certification or policy. A question the brief does not cover goes to Group B, even if the answer seems obvious.
```

### See how often security decides deals

```
Using Calven MCP, how often has security decided our deals?

FILL IN
- Window: [time window, e.g. last four quarters]

CONTEXT
I want to make the case for bringing the CISO in early.

PULL FROM THE UNIVERSE
- Deal drivers mentioning security, compliance or data residency, with direction, rank and outcome, in the window.
- Lost deals with product feedback tagged Security, with amounts where shown.
- Verbatims from security stakeholders.

BUILD
- How often it was raised, how often it decided the outcome, which way.
- What buyers who still bought said settled it.

OUTPUT
The counts with n, the pattern, the quotes.

GROUNDING
Record data only, cited.
```

### Prepare for the security stakeholder call

```
Using Calven MCP, prepare me for the call with the contact below.

FILL IN
- Contact: [contact]
- Title: [title]
- Account: [account]
- Persona: [security or IT persona]
- Topic: [the topic they are sceptical about]

CONTEXT
The contact owns security sign-off at the account. The AE says they are sceptical about the topic.

PULL FROM THE UNIVERSE
- The persona's canvas: KPIs, pains, objections, what they need to believe.
- The product brief sections on the topic.
- Buyers in that role who raised the topic and bought, with their words.

BUILD
- What this persona cares about and distrusts.
- The honest answer on the topic from the brief, and where to route the rest.
- The proof from a peer, verbatim.
- The question to ask them first.

OUTPUT
A half-page brief with sources.

GROUNDING
Only the Universe. No claim about controls, certifications or policies beyond the brief; say "the security team will cover that" instead.
```

## Ad hoc questions

- What does the brief say about hosting, regions and data residency?
- How does the brief describe authentication, SSO and access?
- Which integrations does the brief list, and how is data exchanged?
- Is "[security claim on our site]" a supported claim?
- Has anything changed in our architecture recently?
- How often did security decide a lost deal this year?
- What do security stakeholders object to most on calls?
- What settled the security concern for buyers who bought?
- Which questions in this questionnaire can the brief not answer? [paste]
