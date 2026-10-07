# Inbound replies


An inbound lead just asked a question and you want to answer it in under five minutes. You send a reply that answers what they asked, proposes the next step for their persona and fit tier, and qualifies as it answers, without claiming anything the product doesn't do. Calven adds the company's knowledge, so you're not sending the template and booking a demo for everyone.

## Prompts

### Draft a reply to an inbound lead

```
Using Calven MCP, draft my reply to this inbound lead.

FILL IN
- Contact: [contact]
- Title: [title]
- Account: [account]
- Channel: [form / chat / email]
- Message: [paste the inbound message]

CONTEXT
The contact sent the message through the channel above. I want to reply in the next five minutes with an answer to their question and the right next step.

PULL FROM THE UNIVERSE
- The account's ICP fit if we hold it; otherwise the ICP attributes I should check.
- The persona for this title: what they care about and what they find credible.
- The product brief for whatever they asked about; the battlecard if they named a competitor.

WRITE
- Under 100 words. Answer the question directly, one line on why it matters for their persona, one next step.
- One qualifying question woven in.

OUTPUT
The reply, plus one line on fit and the step to log.

GROUNDING
Use only the product brief, battlecard and persona in the Universe. Do not claim a capability or price the brief does not state; if it is silent, say what we can confirm on a call.
```

### Answer how we compare to a competitor

```
Using Calven MCP, answer "how do you compare to" the competitor below for an inbound lead from this persona.

FILL IN
- Competitor: [competitor]
- Persona: [persona]

PULL FROM THE UNIVERSE
- The competitor's battlecard: where we win, where we lose, talk track.
- The product brief for the capabilities the comparison turns on.

WRITE
- Three honest lines: where we are stronger, where they are, the question to ask to find out which matters to them.

OUTPUT
The three lines and the follow-up question.

GROUNDING
Use only the battlecard and brief in the Universe. Be honest about where we lose.
```

### Check ICP fit for an unknown account

```
Using Calven MCP, is the company below in our ICP?

FILL IN
- Industry: [industry]
- Size: [size]
- Region: [region]
- Tech: [tech they use]

PULL FROM THE UNIVERSE
- The ICP: firmographic and technographic attributes, segment tiers, disqualifiers.

OUTPUT
Likely tier, the attributes that put it there, and what to confirm on the call.

GROUNDING
Judge only against the ICP in the Universe.
```

## Advanced prompts

### Price a minute of inbound response time

```
Work out what slow inbound replies cost in pipeline and find the break-even point for adding coverage. Use Calven MCP for what an inbound deal is worth and how often it closes.

FILL IN
- Response times: [attach or paste a sample of inbound leads with time to first reply and whether a meeting was booked]
- Cost of an extra coverage hour: [cost per hour, or write "assume"]
- Inbound leads per week: [number]

CONTEXT
Everyone says speed to lead matters. Nobody here can say how much, so we can't decide whether to cover evenings or add a second SDR to the inbound queue. I want a number I can take to my manager.

FROM CALVEN
- Deals with lead source inbound: win rate, average deal size and sales cycle, from the ICP dashboard where it breaks them out, or counted from paged CRM deals.
- The share of inbound deals at Tier 1 and Tier 2 accounts.
- The persona dashboard's win rate by persona, with n, to weight leads by who they are.

MODEL
- From my sample, estimate meeting rate by response-time bucket (under 5 minutes, under an hour, same day, later), with counts. If my sample is thin, use a stated decay curve and range it.
- Value each lead: meeting rate times win rate times deal size.
- Compute the pipeline lost per week at my current response mix, then the break-even: the extra coverage hours where the cost equals the pipeline recovered.
- Run sensitivity on the three inputs that matter most and say which one I should measure better.

OUTPUT
A one-page model: value per lead, pipeline lost per week by bucket, break-even coverage, and a tornado table of sensitivities.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a speed-to-lead benchmark; if you use one from general knowledge, label it as your assumption.
```

### Grow a qualification tree from closed inbound deals

```
Grow a qualification decision tree from our closed inbound deals, so the first reply asks the questions that actually split winners from time-wasters. Use Calven MCP for the deals and the fields we can know early.

FILL IN
- Window: [window]
- Questions we ask on the first call: [paste them]

CONTEXT
Our inbound form and first call ask eight questions. I suspect two of them do the work. A tree learned from real outcomes tells me which, in what order, and where to stop.

FROM CALVEN
- Closed inbound deals in the window, paged in full: account size, industry, region, ICP fit tier, contact role, competitors, deal size band, outcome and loss reason.
- The ICP disqualifiers and anti-profile.

METHOD
- Keep only fields an SDR can learn in a first reply or call. Drop anything known only later.
- If you can run code, fit a shallow decision tree (depth 3, at least 10 deals per leaf) and print it with win rate and count per leaf. Otherwise build it by hand: split on the field with the biggest win-rate gap, then repeat once.
- Hold out 20 percent of deals and report how well the tree sorts them.
- Turn the tree into questions in plain language, in the order the tree asks them, and compare with the questions we ask.

OUTPUT
The tree as a diagram or indented list, the holdout result, the two to four questions to ask in order, and which current questions to drop.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't keep a split with fewer than 10 deals per side; say the data is too thin instead.
```

## Ad hoc questions

- Does our product do [capability]?
- What plan includes [feature]?
- How do we compare to [competitor] on [capability]?
- Is a [title] a buyer, a user or a stakeholder for us?
- What is the right next step for a [persona] at the evaluation stage?
- Is [account] in our CRM, and what is its fit?
- What integrations do we have?
- What should I ask a [persona] to qualify them?
- What do we say when someone asks about pricing before a call?
- Which disqualifier should I check for a [industry] lead?
- What's our win rate on inbound deals compared to outbound, and on what n?
- Which persona asks for pricing first, and what does our messaging say back?
- Which inbound accounts in the last 90 days turned out to be in our anti-profile?
- What proof would a [persona] at the evaluation stage find credible, from the quotes?
- Which capability do inbound buyers ask about that our product brief doesn't cover?
- What's the next step our messaging matrix suggests for a [persona] at the consideration stage?
