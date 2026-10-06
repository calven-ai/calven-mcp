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

## Advanced prompts

### Model the security review queue

```
Model security review as a queue across our open deals and show how much it delays revenue, and what would cut it. Use Calven MCP for how often security comes up and what it does to deals.

FILL IN
- Open deals: [paste deals in security review with amount and target close]
- Throughput: [questionnaires your team completes per week, and how many arrive]
- Turnaround: [average days per questionnaire, and per security call]

CONTEXT
Every enterprise deal waits on a questionnaire. We staff for the average week and drown at quarter end. I want the delay in weeks and dollars, and the fix with the best return.

FROM CALVEN
- Deals with product feedback Security, won and lost, and their stage history.
- Deal drivers that mention security, with outcome and whether they decided the deal.
- The product brief's technical architecture, to estimate how many questions it answers outright.

MODEL
- Treat the team as a queue with my arrival and service rates. Compute utilisation and the expected wait. If you can run code, simulate a quarter with end-of-quarter arrival spikes.
- Translate the wait into pipeline delayed and, using the security-driven losses, pipeline at risk.
- Test three fixes: a pre-filled answer pack from the brief, one more person, and a trust page that deflects early questions. Model each fix's effect on service rate as a stated assumption.

OUTPUT
The current wait and the quarter-end wait, the pipeline delayed and at risk, and the three fixes ranked by weeks saved per cost.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't infer certifications or controls the brief doesn't state.
```

### Red-team the answers as their CISO

```
Red-team my security questionnaire answers as the buyer's CISO, who's looking for the answer that overreaches. Use Calven MCP for what the brief supports and what security stakeholders challenged before.

FILL IN
- Answers: [paste the questionnaire answers]
- Account: [account]

CONTEXT
An answer that overreaches costs more than one that says "see attached policy". The CISO's follow-up questions are what stall the deal for a month.

FROM CALVEN
- The product brief's technical architecture, integrations and known weaknesses.
- Claims about security on our site and docs, with their status and concerns.
- Security stakeholder quotes tagged Objection, and the security persona's canvas if one exists.

RED-TEAM
- Read each answer as the CISO. Mark it: clean, vague (invites a follow-up), overreaching (claims more than the evidence), or contradicts our own published claims.
- For every vague or overreaching answer, write the follow-up question the CISO would send.
- Rewrite those answers: what the brief supports, stated plainly, and the rest routed to security with a placeholder for the evidence they hold.

OUTPUT
The answer-by-answer verdict table, the predicted follow-up questions, and the rewritten answers ready to paste.

GROUNDING
Every rewritten answer cites the brief or a claim record. Don't state a certification, control or audit result; route it to the security team instead.
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
- Which security claims on our site have a concern flagged against them?
- Which security objection appeared on deals we still won, and what settled it?
- Which industry's buyers raise security most often in calls?
- Did any product change in the last six months touch hosting, access or data handling?
- How long did deals with a security feedback tag take to close compared with the rest?
- What did the security persona say they need to see before signing off?
