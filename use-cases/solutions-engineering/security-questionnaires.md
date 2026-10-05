# Security questionnaires

**Team:** Solutions engineering · also security, legal, account executives
**Impact:** Medium. Security review is where enterprise deals stall, and most of the answers do not live in Calven. The value is in the product-level answers being right and the rest being routed fast.
**Prerequisites:** product brief approved (technical architecture, integrations), own site and docs monitored (claims). Better with win/loss surveys running (security as a loss driver), competitors tracked.

## What the team is trying to do

Answer the product-level security and architecture questions (hosting, data flow, integrations, authentication as the product brief describes them) from the approved source, route everything else (certifications, policies, controls, subprocessors, incident history) to the security team, and know how often security has decided deals so the AE engages the CISO early. Done means a questionnaire where the product answers cite the brief, nothing is overclaimed, and the security team gets a clean list of what is theirs. Without the approved product source, SEs answer architecture questions from memory and the one wrong answer costs the deal at the end.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Triage | Product-level versus security-program questions | A split of the questionnaire into what the brief can answer and what it cannot | Product brief |
| 2 | Product answers | Hosting, architecture, data flow, authentication, integrations, as described | Product brief technical architecture and integrations; recent product changes | Product brief, product changes |
| 3 | Claims check | Statements on our site and docs about security | The claims register | Claims |
| 4 | Security-program answers | Certifications, policies, controls, pen tests, subprocessors | Calven does not help here; the security team and its compliance platform own it | |
| 5 | Know the stakes | How often security decides deals | Drivers and product feedback tagged security on lost deals; quotes from security stakeholders | Deal drivers, CRM deals, quotes |
| 6 | Prepare the security stakeholder conversation | What the persona asks, what settles it | The security or IT persona canvas; buyers who raised security and bought | Persona canvas, quotes |
| 7 | Final review | Consistency with other documents sent to the account | A check of the product answers against the brief and prior RFP answers | Product brief |

## Recommended prompts

### Step 1 to 3: triage and answer the product-level questions

```
Using Calven MCP, triage this security questionnaire and answer the product-level questions.

CONTEXT
Below is the questionnaire from [account]. I need the questions split into what our product brief answers and what goes to security, and the product answers drafted.

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

[paste the questionnaire; name the account]
```

### Step 5: how often does security decide our deals

```
Using Calven MCP, how often has security decided our deals?

CONTEXT
I want to make the case for bringing the CISO in early.

PULL FROM THE UNIVERSE
- Deal drivers mentioning security, compliance or data residency, with direction, rank and outcome, in [window].
- Lost deals with product feedback tagged Security, with amounts where shown.
- Verbatims from security stakeholders.

BUILD
- How often it was raised, how often it decided the outcome, which way.
- What buyers who still bought said settled it.

OUTPUT
The counts with n, the pattern, the quotes.

GROUNDING
Record data only, cited.

[name the window]
```

### Step 6: prepare for the security stakeholder

```
Using Calven MCP, prepare me for the call with [contact], [title] at [account].

CONTEXT
They own security sign-off. The AE says they are sceptical about [topic].

PULL FROM THE UNIVERSE
- The [security or IT persona] canvas: KPIs, pains, objections, what they need to believe.
- The product brief sections on [topic].
- Buyers in that role who raised [topic] and bought, with their words.

BUILD
- What this persona cares about and distrusts.
- The honest answer on [topic] from the brief, and where to route the rest.
- The proof from a peer, verbatim.
- The question to ask them first.

OUTPUT
A half-page brief with sources.

GROUNDING
Only the Universe. No claim about controls, certifications or policies beyond the brief; say "the security team will cover that" instead.

[name the contact, title, account, persona and topic]
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

## Good practice

- Split first, answer second. The product answers are the only ones Calven should write.
- Never let the AI tool infer a control. "The product encrypts data in transit" is a brief statement; "we are certified" is a security-team statement.
- Route Group B the same day. Security review stalls are time, not difficulty.
- Use the stakes prompt once a quarter to keep the AE engaging security early.

## Not covered today

- Certifications, audit reports, policies, controls, pen-test results, subprocessor lists, incident history. The security team and its compliance platform hold these.
- The questionnaire tool and the security answer library.
- Legal and contractual security terms (DPA, SLAs).
