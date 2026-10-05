# Pricing objections


The buyer says you're too expensive, and you want to answer with a value argument and a question instead of a discount. You get the packaging, how buyers who paid it describe the value, how often price actually decided a deal versus got named as cover, and where the competitor's price sits as far as the record knows. Calven adds that evidence, so a pricing objection doesn't turn straight into a negotiation.

## Prompts

### Answer a pricing objection with evidence

```
Using Calven MCP, help me answer a pricing objection in the deal below.

FILL IN
- Deal: [deal]
- Persona: [persona]
- Account: [account]
- Buyer said: [what they said about price]
- Segment: [segment]
- Competitor: [competitor that quoted lower, or leave blank]

CONTEXT
The persona at the account said what is quoted above about price. The competitor, if named, quoted lower. I want to hold price with evidence.

PULL FROM THE UNIVERSE
- Pricing and packaging from the product brief, and the approved objection handling on price.
- How often price decided deals in the segment: the pricing drivers with rank, and the win rate when buyers found us cheaper, on par or pricier, with n.
- What the competitor's dossier says about their pricing, and any recent pricing signal.
- Two quotes from buyers who describe the return, verbatim.

BUILD
- What the buyer is really saying: price, budget, or value not yet shown.
- The answer in the approved framing, then in the customer's words.
- The question back.
- The proof, attributed.
- The honest read: how often this objection actually decides deals like this one.

OUTPUT
A short card with sources.

GROUNDING
Numbers from the dashboards only, with n. Competitor pricing only as the dossier states it; if it says undisclosed, say undisclosed. No discount suggestions.
```

### See how often price decides our deals

```
Using Calven MCP, how often does price actually decide our deals?

FILL IN
- Window: [time window, e.g. last two quarters]
- Segment: [segment]

CONTEXT
My manager says price is an excuse. I want the record for the segment.

PULL FROM THE UNIVERSE
- Deals lost with loss reason Price in the window, and the pricing drivers on surveyed deals: how many ranked as deciding the deal.
- The win rate by pricing verdict (cheaper, on par, pricier) with n.
- The verbatim reasons on deals where price decided it.

BUILD
- The share of losses where price was the stated reason versus where the survey says it decided the deal.
- The pattern in the verbatims: value not shown, budget cycle, or the competitor's number.

OUTPUT
Three numbers with n, then the pattern and the quotes.

GROUNDING
Dashboard and record figures only, cited with window. Do not infer beyond what the sample supports.
```

### Check your pricing response before sending

```
Using Calven MCP, check my pricing response before I send it.

FILL IN
- Persona: [persona]
- Account: [account]
- Response: [paste your response]

CONTEXT
The response is my written answer to a pricing objection from the persona at the account.

PULL FROM THE UNIVERSE
- Pricing and packaging from the product brief.
- The approved objection handling on price.

CHECK
- Any plan, inclusion or price I state that the brief does not.
- Where I concede value instead of showing it.

OUTPUT
My response annotated, then a tighter version.

GROUNDING
Judge against the brief and messaging only, cited.
```

## Ad hoc questions

- What is in each plan, as the product brief states it?
- How often is price the reason we lose, and how often did it really decide the deal?
- What is our win rate when the buyer thinks we are pricier?
- What does the [competitor] dossier say they charge?
- Which quotes show the return a customer got?
- What is the approved answer to "it's too expensive"?
- Did [competitor] change pricing recently?
- Which buyers said we were pricier and bought anyway? What did they say?
- What does the ICP say about budget or company size?
- What do buyers on deals lost to price say they needed?
