# Launch campaigns


The launch messaging is approved and you need to turn it into a campaign: audiences, message by persona, the asset list, the sequence across channels and the follow-up for sales. You walk away with a launch campaign plan, every asset drafted on-message, and a target list for the announcement. Calven keeps you from reusing last launch's plan with the feature name swapped.

## Prompts

### Define the launch audiences

```
Using Calven MCP, define the audiences for the launch campaign of the feature below.

FILL IN
- Feature: [feature]

PULL FROM THE UNIVERSE
- The personas and segments the launch messaging names.
- Lost deals where the loss reason or product gap matches the feature, with the account and the contact.
- Open deals where the feature answers a known objection.
- Customer accounts in the segments the feature serves, by fit tier.

BUILD
- Audience tiers: win-back (lost on this gap), accelerate (open deals), expand (customers), acquire (fit accounts), each with the count and the message emphasis.
- For win-back: the account, the past contact, and what they said at the time.

OUTPUT
An audience table with counts and sources.

GROUNDING
Only the CRM mirror and win/loss evidence, cited. Names follow the workspace security settings. No numbers beyond what the Universe holds.
```

### Build the launch campaign and assets

```
Using Calven MCP, build the launch campaign for the feature below from the approved messaging.

FILL IN
- Feature: [feature]
- Tier: [launch tier]
- Date: [launch date]
- Audiences: [from the audience table]
- Channels: [list of channels]
- Messaging: [paste the approved launch messaging]

CONTEXT
A launch of the tier above on the date above, to the audiences above, across the channels above.

PULL FROM THE UNIVERSE
- The persona canvases for the personas named.
- The messaging matrix for them by stage.
- Customer quotes on the pain the feature solves.
- The product brief entry for the feature.

BUILD
- The campaign in one line and the message per persona.
- The asset list with the channel, the audience and the message each carries, on a two-week calendar.
- Drafts: announcement email (customers), announcement email (prospects), landing page hero and three sections, three social posts, two ad headlines, the webinar abstract.

OUTPUT
The plan table and the drafts under headings, with sources.

GROUNDING
Every line from the approved messaging, canvases and brief, cited. Quotes verbatim. Do not add capabilities or numbers.
```

### Write the sales follow-up kit

```
Using Calven MCP, write the sales follow-up for the launch of the feature below.

FILL IN
- Feature: [feature]

PULL FROM THE UNIVERSE
- Lost deals where the feature was the gap, with the contact and their words.
- Open deals where it answers an objection.
- The messaging objection handling and the proof for the feature.

BUILD
- A win-back email template with the slot for the buyer's own past words.
- An open-deal note template.
- The two objections it answers and the response.

OUTPUT
Two templates and the objection pairs, plus the account list for each.

GROUNDING
Only the Universe, cited. Names follow the workspace security settings.
```

### Check every launch asset at once

Use the fact-check and persona review prompts from [landing-pages.md](landing-pages.md) on the full asset set at once.

## Advanced prompts

### War-game the competitor's answer to the launch

```
War-game how our main competitor answers the launch, over three rounds of move and counter-move. Use Calven MCP for the competitor's playbook, their recent moves and where we win and lose against them.

FILL IN
- Launch: [paste the launch messaging or brief]
- Competitor: [competitor]
- Launch date: [date]

CONTEXT
The launch campaign is built as if nobody else is in the market. The competitor will respond within weeks, and our campaign should have its next move ready before they make theirs.

FROM CALVEN
- The competitor's battlecard and deep dive: positioning, product, pricing, strengths, weaknesses.
- Their competitive signals from the last 180 days: launches, pricing changes, messaging shifts.
- Our win rate against them from the competitive dashboard, and the deal drivers behind our losses to them, with n.

WAR-GAME
- Round 1: we launch. Play the competitor's head of product marketing and pick their most likely response given the pattern in their signals: match, reframe, discount or ignore.
- Round 2: our counter. What the campaign says next, which asset carries it, which segment it targets.
- Round 3: their second move, and ours.
- Score each path on what it does to deals where we meet them, citing the loss reasons it touches.

OUTPUT
The war game as a table (round, their move, our move, the asset, the risk), the response we should pre-build before launch day, and the one claim to drop because it invites their best counter.

GROUNDING
Every competitor move traces to their signals or battlecard, or is labelled as your judgement. Don't invent a product, price or announcement they haven't made.
```

### Size launch demand from accounts we can name

```
Size the demand for the launch bottom up, from accounts we can name, and show what the number is most sensitive to. Use Calven MCP for the target accounts and the deals that already asked for this.

FILL IN
- Launch: [feature or product]
- Target segments: [segments]
- Conversion benchmarks: [paste reach, response and opportunity rates from past launches, or write "none"]
- Pipeline goal: [the number leadership expects]

CONTEXT
Leadership has a pipeline number for the launch. Before I build a campaign to hit it, I want to know whether the accounts exist to support it.

FROM CALVEN
- The count of CRM accounts in the target segments by ICP tier, and how many have an open deal.
- Lost deals behind the product gap this launch closes, from the product-gap drill-down, and open deals whose product feedback names it, with amounts.
- Average deal size and win rate in those segments from the ICP dashboard, with n.

MODEL
- Three pools: lost deals worth reopening, open deals the launch can unblock, and net-new accounts in segment. Size each in accounts and dollars.
- Apply my benchmarks, or a labelled range, for reach, response, opportunity and win.
- Run a sensitivity analysis on every input and show a tornado chart of what moves the total most.
- Compare the expected total to the goal, and say how far each top input would have to move to close the gap.
- Build it as a spreadsheet with formulas.

OUTPUT
The spreadsheet, the tornado chart, a one-paragraph verdict on the goal, and the pool the campaign should lead with.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Count a lost deal as a reopen candidate only if its loss reason or product feedback ties it to this launch.
```

### Set the scale or kill rules before launch

```
Write the rules for scaling, fixing or killing the launch campaign before it starts, then update them with each week's data. Use Calven MCP for the baseline the campaign has to beat and how confident to be going in.

FILL IN
- Launch campaign: [paste the plan: channels, budget, weekly spend]
- Segment: [segment]
- Past launches: [paste results from past launch campaigns, or write "none"]
- This week's results: [paste the week's numbers as they come in, or "none" for the setup]

CONTEXT
Launch campaigns get judged by whoever shouts first. I want the decision rule written down while I'm calm, so week three's numbers trigger an action, not a debate.

FROM CALVEN
- Win rate, average deal size and sales cycle for the segment from the ICP dashboard, with n.
- A persona review of the launch headline and offer.

METHOD
- Pick two leading indicators the campaign moves within two weeks (meetings from target accounts, reply rate) and the lagging one it's judged on.
- Set a prior for each from my past launches. Widen it if the persona review raised serious issues, and say how much.
- Write the rules: scale if the probability of beating target passes one threshold, fix if it sits in between, kill if it falls below the other.
- Each week, update the posterior with the new numbers (beta-binomial for rates) and say which rule fires. If you can run code, plot the posteriors week by week.

OUTPUT
A one-page decision rule sheet, then for each week I paste: the updated posteriors, the rule that fires and the action.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The persona review only widens or narrows the prior. Never move a threshold after seeing the data.
```

## Ad hoc questions

- Which lost deals named [capability] as the gap? Who was the contact?
- Which open deals have an objection that [feature] answers?
- What is the approved one-liner for [feature]?
- Which persona should hear about [feature] first?
- Give me a customer quote about the pain [feature] solves.
- Which segments is [feature] aimed at per the launch messaging?
- What does [feature] not do, per the brief?
- Which customers are in the segments [feature] serves, by tier?
- Write a 60-word announcement for [persona].
- What did [competitor] launch in this area, and when?
- How much lost pipeline cites the gap [feature] closes, with n?
- Which competitor shipped something close to [feature] in the last 180 days?
- Which of [persona]'s objections does [feature] answer that nothing else in the product brief does?
- Which published documents still describe [feature] the old way, per the drift findings?
- Which Tier 1 accounts lost on Missing feature still have their champion in the CRM?
- Which claims about [feature] are in the claims register, and what's their status?
