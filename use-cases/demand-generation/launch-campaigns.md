# Launch campaigns

**Team:** Demand generation · also product marketing, content marketing, business development
**Impact:** High. A launch is the one moment every channel carries the same message; a campaign built from the approved launch messaging, the personas and real demand evidence lands consistent and measurable.
**Prerequisites:** launch messaging approved (see [launch-messaging.md](../product-marketing/launch-messaging.md)), personas approved, product brief approved. Better with transcripts (quotes), win/loss (gaps the launch closes), CRM connected (who to target).

## What the team is trying to do

Turn approved launch messaging into a campaign: audiences, message by persona, the asset list, the sequence across channels, the follow-up for sales. Done means a launch campaign plan, every asset drafted on-message, and a target list for the announcement. Without the Universe the campaign reuses last launch's plan with the feature name swapped.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Set tier, goal and audiences | Who hears first | Personas and segments the feature serves; accounts and lost deals where it was the gap | Launch messaging, ICP, crm_deals, deal_drivers |
| 2 | Translate the messaging per channel | Email, page, social, ads, PR | Launch messaging, persona matrix | Messaging, personas |
| 3 | Build the asset list and calendar | What ships when | | |
| 4 | Draft the assets | Announcement email, page, posts, ads, webinar abstract | From the launch messaging and brief | Product brief, quotes |
| 5 | Target the announcement | Customers, prospects, lost deals | Accounts by fit, lost deals on the gap, contacts by role | Crm_accounts, crm_deals, crm_contacts |
| 6 | Fact-check and persona-review | Before it ships | Product brief, persona review | Product brief, claims, `review_against_personas` |
| 7 | Brief sales on follow-up | What to send to whom | Lost deals on the gap, objections it answers | Crm_deals, messaging |
| 8 | Launch and measure | Send, publish, report | Calven does not help here | |

## Recommended prompts

### Step 1 and 5: audiences

```
Using Calven MCP, define the audiences for the [feature] launch campaign.

PULL FROM THE UNIVERSE
- The personas and segments the launch messaging names.
- Lost deals where the loss reason or product gap matches [feature], with the account and the contact.
- Open deals where [feature] answers a known objection.
- Customer accounts in the segments the feature serves, by fit tier.

BUILD
- Audience tiers: win-back (lost on this gap), accelerate (open deals), expand (customers), acquire (fit accounts), each with the count and the message emphasis.
- For win-back: the account, the past contact, and what they said at the time.

OUTPUT
An audience table with counts and sources.

GROUNDING
Only the CRM mirror and win/loss evidence, cited. Names follow the workspace security settings. No numbers beyond what the Universe holds.

[name the feature]
```

### Step 2 to 4: the campaign plan and assets

```
Using Calven MCP, build the launch campaign for [feature] from the approved messaging below.

CONTEXT
Tier [n] launch on [date]. Audiences: [from the audience table]. Channels: [list].

PULL FROM THE UNIVERSE
- The persona canvases for the personas named.
- The messaging matrix for them by stage.
- Customer quotes on the pain the feature solves.
- The product brief entry for [feature].

BUILD
- The campaign in one line and the message per persona.
- The asset list with the channel, the audience and the message each carries, on a two-week calendar.
- Drafts: announcement email (customers), announcement email (prospects), landing page hero and three sections, three social posts, two ad headlines, the webinar abstract.

OUTPUT
The plan table and the drafts under headings, with sources.

GROUNDING
Every line from the approved messaging, canvases and brief, cited. Quotes verbatim. Do not add capabilities or numbers.

[paste the approved launch messaging and name the date, audiences and channels]
```

### Step 7: sales follow-up kit

```
Using Calven MCP, write the sales follow-up for the [feature] launch.

PULL FROM THE UNIVERSE
- Lost deals where [feature] was the gap, with the contact and their words.
- Open deals where it answers an objection.
- The messaging objection handling and the proof for [feature].

BUILD
- A win-back email template with the slot for the buyer's own past words.
- An open-deal note template.
- The two objections it answers and the response.

OUTPUT
Two templates and the objection pairs, plus the account list for each.

GROUNDING
Only the Universe, cited. Names follow the workspace security settings.

[name the feature]
```

### Review mode: check launch assets

Use the fact-check and persona review prompts from [landing-pages.md](landing-pages.md) on the full asset set at once.

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

## Good practice

- Start from approved launch messaging. If it does not exist, the PMM builds it first.
- Build the win-back audience from lost deals; it is the launch's highest-converting list.
- Draft every asset from one prompt with the messaging pasted in, so they agree.
- Fact-check the set together after drafting; a launch adds claims fast.
- Give sales the buyer's own past words in the win-back template.

## Not covered today

- Sending, publishing, PR distribution and the launch webinar itself.
- Launch metrics; adoption and pipeline come from analytics and the CRM reporting tool.
- Writing the campaign back to the CRM or the automation tool.
