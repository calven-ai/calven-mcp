# Target list building


You're building this week's or this quarter's list and would rather start from the ICP than a data vendor's filter. You get a ranked list of accounts that fit and either haven't been worked or were lost long enough ago to retry, with contacts in the roles that win and one line on why each is worth your time. Calven adds the company's own data, so you're not buying a list and starting at the top.

## Prompts

### Write targeting rules from what wins

```
Using Calven MCP, write the targeting rules for my list.

FILL IN
- Segment: [segment]
- Window: [time window, e.g. next quarter]

CONTEXT
I am building my account list for the segment and window. I want rules I can apply myself, grounded in what actually wins.

PULL FROM THE UNIVERSE
- Our ICP: firmographic and technographic attributes, segment tiers, disqualifiers.
- From the ICP read: win rate by attribute, the attributes that predict a win, the segments that over- or under-perform.

BUILD
- Go-after rules: the attributes with the highest win rate, with the number and sample behind each.
- Skip rules: disqualifiers and the attributes with the lowest win rate.
- The two attributes to weight most.

OUTPUT
A one-page rule sheet with the evidence beside each rule.

GROUNDING
Use only the ICP and ICP dashboard in the Universe. Cite every win rate with n and the window. Do not add a rule the data does not support.
```

### Build a ranked target list

```
Using Calven MCP, build my target list for the segment below.

FILL IN
- Segment: [segment]
- Number: [how many accounts]
- Window: [time window, e.g. next quarter]

CONTEXT
I need that number of accounts to work in the window. In profile, never worked or closed-lost more than six months ago.

PULL FROM THE UNIVERSE
- CRM accounts in the segment with Tier 1 or Tier 2 fit, their fit score and triggers.
- Each account's deal history: open deals (exclude), closed-lost with date and loss reason.
- Contacts at each account in the roles that appear on our won deals.

BUILD
- A ranked table: account · fit tier and score · why (the two attributes that drove it) · trigger if any · past loss reason if any · contact to reach (or "none on record").
- Below the table: the accounts excluded and why.

OUTPUT
The ranked table, strongest first.

GROUNDING
Use only CRM records and the ICP in the Universe. Never invent a contact. Mark accounts with no contact rather than skipping them.
```

### Give each account a reason to call

```
Using Calven MCP, give me one line per account on why to call now.

FILL IN
- Persona: [persona I will contact]
- Accounts: [paste the ranked list]

CONTEXT
For each account I want the single best reason to reach out this month.

PULL FROM THE UNIVERSE
- Triggers recorded on each account.
- The top pain of the persona, from the canvas and recent calls.
- The closest won deal by industry and size and what decided it.

OUTPUT
The list with one line per account and the source behind it.

GROUNDING
Use only triggers, canvas content and deals in the Universe. Where nothing specific exists, say "no specific reason on record".
```

### Find missing roles at each account

```
Using Calven MCP, which roles am I missing at these accounts?

FILL IN
- Accounts: [paste the list]

CONTEXT
I want to multi-thread from the first touch.

PULL FROM THE UNIVERSE
- Contacts at each account with roles.
- The buying-group roles that appear on won deals and the win rate for multi-threaded versus single-threaded deals.

OUTPUT
Per account: the roles we have, the roles we lack, and the title to look for.

GROUNDING
Use only CRM contacts and the persona read in the Universe, citing the win-rate figures with n.
```

## Advanced prompts

### Fit a win model and score the territory

```
Fit a win model on our closed deals and use it to score every unworked account in my territory. Use Calven MCP for the deals, the accounts and the ICP's own view of fit.

FILL IN
- Territory: [segment or region]
- Window for training: [window, e.g. last 18 months]

CONTEXT
The fit score was set when the ICP was written. Our deals since then may tell a different story. I want a model trained on what actually closed, compared with the fit score, before I build the quarter's list.

FROM CALVEN
- Closed deals in the training window, paged in full, with account attributes: industry, size, region, funding stage, tech stack, triggers.
- Accounts in the territory with no open deal and no deal in the last six months, with the same attributes and their ICP fit score.
- The ICP dashboard's predictive attributes and win rate by attribute, with n, as the check.

MODEL
- Build features from account attributes known before a deal opens.
- If you can run code, fit a regularised logistic regression, hold out 25 percent of deals, and report AUC and a calibration table. Otherwise build a points score from the attributes with the biggest win-rate gaps.
- Compare: where do the model and the ICP fit score disagree most, and which one the holdout supports.
- Score the territory accounts and rank them.

OUTPUT
The top 30 accounts with model score, fit score and the two attributes driving each, the disagreement list, and the model's holdout result in two lines.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't trust the model past its sample; say so if fewer than 50 deals trained it.
```

### Allocate your touches like a portfolio

```
Allocate my quarter's outreach capacity across segments like a portfolio, to get the most expected pipeline for my hours. Use Calven MCP for what each segment is worth and how many accounts it holds.

FILL IN
- Capacity: [accounts I can work properly this quarter]
- Segments I could work: [segments]
- Effort per account: [touches or hours per account, by tier if it differs]

CONTEXT
I could spend the quarter on Tier 1 enterprise, fill it with mid-market, or mix. Each choice has a different win rate, deal size, cycle and supply of fresh accounts. I want the mix that maximises pipeline, and how sensitive it is.

FROM CALVEN
- For each segment: win rate, average deal size and sales cycle from the ICP dashboard, with n.
- The count of in-profile accounts with no open deal in each segment, from CRM accounts.
- Segment tiers and priority verticals from the ICP document.

MODEL
- Expected value per account per segment: an assumed meeting rate (state it) times win rate times deal size, discounted for cycle length if it ends past the quarter.
- Solve the allocation under my capacity and the supply cap of each segment. If you can run code, use a small linear program; otherwise rank by value per hour and fill greedily.
- Run a sensitivity check: what mix wins if the meeting rate in the top segment is half what I assumed.
- Add a diversification rule so one bad segment can't sink the quarter.

OUTPUT
The recommended allocation as a table, expected pipeline with a low and high case, and the one input that changes the answer most.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a meeting rate; label the one you use.
```

### Simulate the quarter your list can produce

```
Simulate the quarter my list can produce, as a range rather than a hope. Use Calven MCP for the list's accounts and the conversion history that applies to them.

FILL IN
- My list: [paste the accounts, or the list built by the ranked target list prompt]
- My funnel rates: [meeting rate and opportunity rate from my last two quarters, or write "none"]
- Quota: [pipeline target for the quarter]

CONTEXT
My manager asks whether the list covers the number. I usually say yes. I want to know the probability that it actually does, and how many more accounts I need if it doesn't.

FROM CALVEN
- Each account's fit tier, segment, triggers and deal history.
- Win rate, average deal size and sales cycle by segment and fit tier from the ICP dashboard, with n.

SIMULATE
- Give every account a probability of becoming an opportunity this quarter from my rates (or labelled assumptions), nudged up for a trigger and down for a recent loss. Show the nudges.
- Give each opportunity a deal size drawn around the segment average, with spread stated.
- If you can run code, run 10,000 draws and show the distribution of pipeline: P10, median, P90 and the probability of hitting quota. Otherwise compute low, expected and high cases by hand.
- Find how many more accounts like my average one get the probability of hitting quota to 80 percent.

OUTPUT
The distribution as a small chart or table, the chance of hitting quota, the accounts needed to get to 80 percent, and the five accounts that contribute most expected pipeline.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent funnel rates; range any you assume.
```

## Ad hoc questions

- Which Tier 1 accounts in [industry] have never had a deal?
- What attributes predict a win for us?
- Which segment has the highest win rate, and what is the sample?
- Show me closed-lost accounts in [region] with loss reason "No decision" older than six months.
- Which accounts have a Tier 1 fit but no contact on record?
- What disqualifies an account in our ICP?
- Which tech stack entries correlate with wins?
- How many in-profile accounts do we hold in [segment]?
- Which accounts in [segment] have a trigger recorded this quarter?
- What roles are on the buying group when we win in [segment]?
- Is [account] in our anti-profile?
- Which vertical does the ICP say to prioritise next?
- Which in-profile segment has the most accounts and the fewest deals?
- Which attribute does our ICP weight highly that the ICP dashboard says doesn't predict a win?
- Which closed-lost accounts lost on "Missing feature" for a gap a later product change covers?
- Which industry wins fastest for us, by sales cycle, and on what n?
- Which competitor shows up most in [segment], and do we win there?
- What share of our wins came from Tier 3 accounts?
