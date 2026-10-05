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
