# Pipeline quality for forecasting

**Team:** Finance and investor relations · also revenue operations, sales leadership
**Impact:** High. The forecast is only as good as the conversion rates behind it, and in-profile deals close at a different rate from the rest. Finance needs the split, not the blended number.
**Prerequisites:** CRM connected (deals, accounts with ICP fit, contacts). Better with win/loss surveys running (why the forecast misses) and personas approved (buying-group coverage).

## What the team is trying to do

Turn the pipeline into a forecast finance can defend: how much of the quarter is real, which segments convert at what rate, and where the risk sits. Done means a forecast built on segment-level win rates, with the share of pipeline in profile and the deals that are single-threaded or against a competitor we rarely beat called out. Without this, finance applies one historical close rate to everything and misses by the amount the mix moved.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the pipeline | Open deals by stage, amount, close date, owner | Open deals with stage, amount, close date, ICP tier, competitors, contact role | CRM deals |
| 2 | Segment it | Split by segment, deal size band, region, source, new vs expansion | Deals filtered by account size, industry, region, deal size band, deal type, lead source | CRM deals, CRM accounts |
| 3 | Apply conversion rates | Use historical win rates per segment and stage | Win rate by segment, by attribute, by competitor, by persona, with n; what predicts a win | ICP dashboard (win predictors), win/loss dashboard, competitive intelligence |
| 4 | Judge quality | Which deals are at risk and why | Share of pipeline in profile and the fit distribution; single-threaded pipe; deals against competitors we rarely beat; deals on accounts outside the ICP | ICP dashboard (reality check), persona dashboard (threading), competitive intelligence |
| 5 | Coverage check | Is there enough pipeline per segment for the target | Pipeline in profile by segment versus the win rate that segment closes at | ICP dashboard, CRM deals |
| 6 | Explain variance | Why last quarter's forecast missed | Loss reasons and loss drivers for deals that slipped or were lost, with buyer verbatims | CRM deals (loss reason), deal drivers, survey responses |
| 7 | Build the model | Weighted forecast in the planning tool | Calven does not help here. It supplies the rates and the lists | |
| 8 | Review with sales | Agree the commit and the risks | A deal-by-deal risk list with the reason for each flag | CRM deals, personas, battlecards |

## Recommended prompts

### Steps 1 to 3: segment rates

```
Using Calven MCP, give me the conversion rates I should use to weight this quarter's pipeline.

CONTEXT
I build the revenue forecast. I weight open pipeline by segment and want the win rate per segment from our own history, not a blended number.

PULL FROM THE UNIVERSE
- Win rate by segment, account size, industry and region, with n for each, over [window].
- The attributes that predict a win and the win rate for deals with and without them.
- Win rate against each competitor we meet.

BUILD
- A table: segment, win rate, n, prior-period win rate, the dashboard it came from.
- A second table: attributes that move the win rate up or down, with the lift.
- A note on which segments have too few decided deals to trust.

OUTPUT
The two tables, ready to paste into the model, with sources.

GROUNDING
Use only rates from the Insights dashboards and cite n and the window. Where a segment reports a floor instead of a rate, mark it "sample too small". Never compute a rate from rows yourself.

[name the window and, if we scope by product, the product]
```

### Step 4: risk list

```
Using Calven MCP, flag the deals in this quarter's pipeline I should discount in the forecast.

CONTEXT
I need a deal-by-deal list of risks finance can take into the forecast review with sales.

PULL FROM THE UNIVERSE
- Open deals closing in [window]: amount, stage, ICP fit tier, competitors in the deal, contact role and count.
- The share of pipeline in profile and the fit distribution.
- Win rate against each competitor named in those deals.
- Which personas sit on won deals, and which deals are single-threaded.

CHECK
For each open deal, flag: outside the ICP, against a competitor we beat less than [threshold] of the time, single-threaded or missing the economic buyer, close date already slipped.

OUTPUT
A table: deal, amount, close date, flags, the evidence for each flag. Sort by amount at risk.

GROUNDING
Use only CRM rows and dashboard rates in the Universe and cite them. If deal amounts or names are withheld by the workspace settings, say so rather than estimating.

[name the window and the win-rate threshold you treat as a risk]
```

### Step 5: coverage by segment

```
Using Calven MCP, show me pipeline coverage by segment for [window].

CONTEXT
I want to know where we have enough in-profile pipeline to hit the segment target, and where we do not, before sales leadership asks for more marketing spend.

PULL FROM THE UNIVERSE
- Open pipeline by segment and ICP tier, with amounts.
- Win rate per segment with n.

BUILD
- A table: segment, open pipeline, in-profile share, win rate, implied closable amount.
- The segments where implied closable falls short of the target I paste below.

OUTPUT
The table and a three-line read on where coverage is thin.

GROUNDING
Use only CRM pipeline and dashboard rates and cite them. Do not add rows up for a rate; use the dashboard's. Say where amounts are withheld.

[paste the segment targets]
```

### Step 6: explain the miss

```
Using Calven MCP, explain why last quarter's forecast missed.

CONTEXT
We forecast [amount] and closed [amount]. I want the reasons from the deals, not a theory.

PULL FROM THE UNIVERSE
- Deals that were due to close in [window] and were lost or slipped: loss reason, lost to, stage reached.
- The loss drivers extracted from win/loss responses for those deals, with the buyer's words.
- Win rate against the competitors involved.

ANALYZE
- Group the misses by cause: price, missing feature, competitor, no decision, slipped.
- For each group: the deals, the amount, the pattern, one verbatim.
- What finance should change in the weighting next quarter.

OUTPUT
A one-page read with a table per cause.

GROUNDING
Use only the deals and responses recorded in the Universe and cite them. If a deal has no loss reason or survey, list it as "no recorded reason" rather than inferring one.

[name the window and the forecast and actual figures]
```

## Ad hoc questions

- What share of our open pipeline is in ICP profile right now?
- What is our win rate for Tier 1 accounts versus Tier 3, and on how many deals?
- Which open deals over [amount] are against [competitor], and how often do we beat them?
- Which open deals have only one contact?
- What was the average sales cycle for mid-market deals this year?
- How many deals slipped past their close date last quarter, and why were they lost?
- Which lead source converts best?
- Which attributes predict a win in our ICP data?
- How many open deals are on accounts flagged as disqualifiers in the ICP?
- What is the win rate on deals where the economic buyer is a contact?
- Are deal amounts visible to me through MCP, or withheld?
- What did buyers on no-decision deals say about why they stalled?

## Good practice

- Ask for rates from the dashboards and lists from the CRM mirror. Never ask the AI tool to compute a rate from a list.
- Fix the window and the product scope in the prompt, and reuse the same ones every quarter so the series is comparable.
- Set your own risk thresholds in the prompt. The dashboards give the rates; finance decides what counts as risky.
- Check the workspace security settings before promising amounts. Deal amounts and names can be withheld for MCP.
- Pair every rate with n. A segment with eight decided deals is a story, not a rate.
- Keep the model in the planning tool. Calven's job is the inputs and the risk list.

## Not covered today

- The forecast model, weighting and commit roll-up. They live in the CRM forecasting module or the planning tool.
- Rep-level quota and attainment.
- Updating a deal's stage or close date. No write-back.
- Deals not yet in the CRM, or a CRM not connected to Calven.
