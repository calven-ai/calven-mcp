# Expansion plays


Without the record, expansion is a seat-count conversation at renewal. You get a quarterly list of accounts ready to buy more with the reason per account, a one-page case per opportunity in the customer's words and the sponsor's KPIs, and a talk track for the check-in. Calven finds the fit and the needs customers voiced, then frames the case you hand to sales.

## Prompts

### Find expansion opportunities in your book

```
Using Calven MCP, find expansion opportunities in my book of accounts.

FILL IN
- Accounts: [paste the account list]

CONTEXT
I want the accounts that fit a product or tier they do not have, with the evidence.

PULL FROM THE UNIVERSE
- The product brief: expansion and cross-sell paths, and each product's ICP summary.
- For each account: ICP fit per product, best-fit product, size, triggers, and any expansion or upsell deal (open, won or lost, with loss reason).
- Quotes from each account tagged job to be done, gain, goal or product feedback, with the capability they point at.

BUILD
- A table: account, the product or tier that fits, fit reason, the voiced need (quote and speaker) if any, past expansion history, suggested timing.
- Rank by evidence strength: voiced need plus fit first.

OUTPUT
The table and the five to work this quarter.

GROUNDING
Use only the Universe and cite it. Usage and entitlements are not in Calven; say so and leave those columns for me.
```

### Write the expansion case for one account

```
Using Calven MCP, write the expansion case for the account below on the product or tier below.

FILL IN
- Account: [account]
- Product: [product or tier]
- Base product: [base product]
- Reason: [why you think the product fits]
- Sponsor: [contact, title]

CONTEXT
The account owns the base product. I think the product fits for the reason above. I want a one-page case for the sponsor and a hand-off note for sales.

PULL FROM THE UNIVERSE
- The product brief for the product: what it does, how it fits with the base product, packaging.
- Quotes from the account that point at the need, with speaker and date.
- The persona canvas for the sponsor: KPIs, pains, objections.
- The messaging value proposition for that persona, and proof quotes from customers using the product.

BUILD
- The need in their words. What the product does about it. The outcome tied to the sponsor's KPI. Proof from a peer. The likely objection and the answer. The ask.
- A five-line hand-off note for sales: account, product, why now, who, what was said.

OUTPUT
The case and the note.

GROUNDING
Use only the Universe and cite it. Do not promise outcomes the brief and the proof quotes do not support. Do not state a price unless the brief holds it.
```

### Get a talk track for the check-in

```
Using Calven MCP, give me a two-minute talk track to raise the product below with the contact below.

FILL IN
- Product: [product]
- Contact: [contact]
- Account: [account]
- Date: [check-in date]

CONTEXT
I have a check-in with the contact at the account on the date above. I want to open the topic without pitching.

PULL FROM THE UNIVERSE
- The quote from the account that points at the need.
- The persona's jobs to be done and messaging hooks.
- Objection handling for the two most likely pushbacks.

WRITE
- The opener that quotes their own words back, two questions, the bridge to the product, the answers to the two pushbacks, the next step to propose.

OUTPUT
The talk track.

GROUNDING
Use only the Universe and cite it.
```

### Review how past expansions went

```
Using Calven MCP, show me how expansion deals went this year and why.

CONTEXT
I want to know what works and what does not before I plan next quarter's plays.

PULL FROM THE UNIVERSE
- Expansion and upsell deals this year: status, stage, amount band, loss reason, price feedback, product feedback.
- Deal drivers on any surveyed expansion deals.

BUILD
- Won versus lost by product, with the loss reasons.
- The drivers behind the wins, with quotes where they exist.
- The pattern to repeat and the one to avoid.

OUTPUT
A short read.

GROUNDING
Use only the Universe and cite it. Counts, not rates, unless the dashboard provides the rate with n.
```

## Advanced prompts

### Backtest an expansion propensity score

```
Build an expansion propensity score from past expansion deals and test whether it would have picked the winners. Use Calven MCP for the closed expansion deals and the account attributes behind them.

FILL IN
- My book: [paste or attach your account list]
- Window: [window]

CONTEXT
I can work six expansion plays a quarter, not thirty. A score that ranks the book is only worth using if it would have found last year's wins.

FROM CALVEN
- Expansion and upsell deals in the window, won and lost, paged in full, with account, size, amount and loss reason.
- For each of those accounts: ICP fit tier, triggers, tech stack, best-fit product, and contact roles.
- Quotes from those accounts in the six months before the deal, tagged Goal, Job to be done or Buying trigger.

BACKTEST
- Turn the candidate signals into features: tier, triggers, an economic buyer contact, a recent ask quote, number of threaded roles.
- Fit a simple score (points per signal, or logistic regression if you can run code). Hold out a third of the deals and report how many winners the top quintile catches.
- Compare with a naive rule (biggest accounts first) so we know the score earns its keep.
- Score my book and rank it.

OUTPUT
The signal table with lift, the score's holdout performance next to the naive rule, and my book ranked with the top six and the signal that put each there.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counts come from paged rows and are labelled as such. With fewer than 20 closed expansion deals, say the score is directional only.
```

### Find the offer by trade-off

```
Find which expansion offer this account would choose by running a conjoint-style trade-off with its buyers. Use Calven MCP for the personas, the packaging and what the account has asked for.

FILL IN
- Account: [account]
- Offer attributes: [paste the levers and levels, for example product add-on, seats, price, term, onboarding support]

CONTEXT
I can shape the expansion several ways. Sales will want the biggest bundle. I want the offer the buyers would pick when forced to trade.

FROM CALVEN
- Pricing and packaging and the cross-sell paths from the product brief.
- The economic buyer and champion persona canvases: goals, objections, what they're measured on.
- The account's quotes tagged Goal or Job to be done, and any capability asks.

SIMULATE
- Generate twelve paired offers that vary the attributes I gave. Keep them realistic against the packaging.
- Have each persona choose between each pair and give a one-line reason in their voice.
- Estimate part-worths per attribute. If you can run code, fit a simple logit on the choices; otherwise tally wins per level.
- Find the offer with the highest predicted take-up at an acceptable price, and the attribute the buyers would give up first.

OUTPUT
The part-worth table, the recommended offer, the runner-up, and two sentences on why the obvious bundle loses.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Choices are simulated from canvases and quotes; say so. Don't invent a package or price the brief doesn't list.
```

### Allocate your hours by expected value

```
Allocate my expansion hours across my book to maximise expected value, as a portfolio problem. Use Calven MCP for each account's fit, its signals and how often expansions like it close.

FILL IN
- Book: [attach your account list with ARR and renewal date]
- Hours available: [hours per quarter for expansion work]
- Hours per play: [your estimate of hours a full expansion play takes]

CONTEXT
I spread expansion time evenly, which means the three accounts most likely to buy get the same attention as the twenty that won't.

FROM CALVEN
- Each account's ICP fit tier, best-fit product, triggers and contacts by buying role.
- Asks and goals from each account's quotes in the last six months.
- Win rate and average size of expansion deals by segment from the ICP and win/loss dashboards, with n.

MODEL
- For each account: probability of an expansion this quarter (base rate adjusted for its signals), likely size, and hours to work it.
- Solve it as a knapsack: pick the accounts that maximise expected value inside my hours. If you can run code, solve it exactly; otherwise rank by value per hour.
- Show the marginal account: the next one I'd add with ten more hours, and what that's worth.
- Run it twice with probabilities 30 percent lower and higher.

OUTPUT
The selected accounts with expected value and hours, the ones I'm consciously not working, and the value of ten extra hours.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Probability adjustments are your estimates and must name the signal behind them. Don't invent an ask an account never made.
```

## Ad hoc questions

- What are the cross-sell paths from [base product]?
- Which of my accounts are Tier 1 fit for [product]?
- Has [account] asked for anything [product] does?
- What is the value proposition for [persona] on [product]?
- What do customers who use [product] say about the outcome?
- Which expansion deals did we lose this year and why?
- Who is the economic buyer at [account]?
- What does [persona] object to when offered more?
- Is [product] sold per seat, per workspace or as a tier?
- Which of my accounts have a funding or expansion trigger recorded?
- Write a two-line note to sales about an expansion at [account].
- Which accounts in my book have a contact who asked about a product they don't own?
- What did customers say right before they expanded?
- Which expansion deals stalled at the economic buyer, and what did that buyer object to?
- Is there a buying trigger that shows up more often on won expansions than on lost ones?
- Which of my accounts have no economic buyer contact, so an expansion has nobody to sign it?
