# Multi-threading


You're relying on one contact, and a manager's reminder to multi-thread doesn't tell you who to add or how. You walk away knowing which roles are on the deal, which are missing compared with the deals we win, and a hook to open each one in their own language. Calven adds the data behind it, so every live deal gets a thread to the economic buyer and the technical buyer.

## Prompts

### Map the threading gap and how to close it

```
Using Calven MCP, show me the threading gap in the deal below and how to close it.

FILL IN
- Deal: [deal]
- Account: [account]
- Segment: [segment]
- Champion: [contact]
- Persona: [champion's persona]

CONTEXT
The deal is at the account, in the segment. My champion is the contact above. I want to know who else needs to be on this deal and how to open them.

PULL FROM THE UNIVERSE
- The contacts at the account with buying role and lifecycle stage.
- Which personas sat on won deals in the segment, the win rate by persona and the single- versus multi-threaded win rate, with n.
- The canvases for the roles we lack: goals, pains, objections, hooks.
- One proof quote per missing persona.

BUILD
- The roles on the deal and the roles won deals usually have.
- For each gap: the persona, why they matter to the outcome, the hook, and whether to go through the champion or direct.
- A three-line opener per gap in the persona's words.

OUTPUT
A table of gaps with hooks and openers, with sources.

GROUNDING
Persona win rates from the dashboard only, with n. Do not invent contacts or names; if the CRM has no contact in that role, say "no contact on record".
```

### Find single-threaded deals in your pipeline

```
Using Calven MCP, which of my open deals are single-threaded?

FILL IN
- Owner: [your name as owner, if the CRM uses owner names]
- Segment: [segment]

CONTEXT
I want the list before the pipeline review.

PULL FROM THE UNIVERSE
- My open deals (by the owner name, in the segment) with their contact roles and contact count band.
- The multi-threaded versus single-threaded win rate, with n.

BUILD
- Each single-threaded deal with the role it lacks most, by what won deals in its segment had.

OUTPUT
A ranked table: deal, amount, close date, missing role.

GROUNDING
Only CRM mirror and dashboard data, cited. No invented contacts.
```

### Check your opener to a new contact

```
Using Calven MCP, check my message to a buyer I am trying to add to the deal below.

FILL IN
- Persona: [persona]
- Deal: [deal]
- Message: [paste the message]

CONTEXT
Read the message as that persona.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.

REACT
- Would they reply, and why or why not.
- The rewrite in their words.

OUTPUT
The verdict, the rewrite.

GROUNDING
Only from the canvas.
```

## Advanced prompts

### Map who holds influence in the buying group

```
Map the buying group on my deal as an influence network and tell me who actually moves the decision. Use Calven MCP for the contacts, their roles and how those roles behave in deals like this.

FILL IN
- Deal: [deal]
- Relationships: [paste who talks to whom, who reports to whom, who attended which call]

CONTEXT
I have five names in the CRM and a champion who says she's got it. Deals like this die when the real decider is two hops from anyone I've met. I want to see the network, not the list.

FROM CALVEN
- The contacts on the account: title, buying role, lifecycle stage.
- The persona canvas for each role: goals, objections, what they need to believe.
- Win rate by persona present and the multi-threading payoff from the persona dashboard, with n.

METHOD
- Build a directed graph: contacts as nodes, my relationships as edges, weighted by reporting line and meeting overlap.
- Compute degree, betweenness and eigenvector centrality. Flag the person with high betweenness and no direct line to me.
- Overlay the buying role and persona: is the most central person the economic buyer, a blocker or an influencer?
- Mark missing roles the dashboard says win deals.
- If you can run code, draw the graph and print the centrality table.

OUTPUT
The network (drawn or as an edge list), a centrality table with role and my access, the two hidden brokers, and one route to reach each through someone I know.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't add a person or relationship I didn't give you and the CRM doesn't hold.
```

### Backtest threading depth against closed deals

```
Backtest whether threading depth actually predicted outcomes in our closed deals, and find the threshold worth managing to. Use Calven MCP to page the closed deals and their contacts.

FILL IN
- Segment: [segment]
- Window: [window]

CONTEXT
Everyone says multi-thread. Nobody can tell me whether three contacts is enough, whether the economic buyer matters more than the count, or whether it changes by deal size. I want a rule from our own deals.

FROM CALVEN
- Closed deals in the segment and window from the CRM mirror: status, amount, deal size band, primary contact role, loss reason.
- The contacts on each deal's account with their buying roles.
- The multi-threading win rate from the persona dashboard, with n, as a check on my result.

BACKTEST
- For each closed deal, count contacts and distinct buying roles, and note if an economic buyer, champion and technical buyer were present.
- Compare win rates by number of roles (1, 2, 3, 4+) and by role combination. Show n per bucket.
- Fit a simple logistic regression of win on roles present and deal size if n allows. Report which role carries the most weight.
- Check the result against the dashboard figure and explain any gap.
- If you can run code, do it in code and show the table.

OUTPUT
The win-rate table by threading depth and role combination, the threshold rule, the role that matters most, and which of my open deals fall below it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Call out buckets under 10 deals as too thin to act on.
```

### Decide which contact to open first

```
Decide which new contact to open first with an expected-value decision tree, weighing the win-rate gain against the risk to my champion. Use Calven MCP for what each role is worth and how each reacts.

FILL IN
- Deal: [deal]
- Candidates: [paste the contacts you could approach, with your read on reachability]
- Champion: [contact]

CONTEXT
I can open one new thread this week. Go around the champion and I risk the relationship. Wait and the deal stays single-threaded. I want the choice on paper with the odds.

FROM CALVEN
- The deal record and contacts on the account by role.
- Win rate by persona present on deals, from the persona dashboard, with n.
- The persona canvas for each candidate role: objections, hooks.
- Deal drivers that mention the buying group or a stalled champion, with n.

METHOD
- For each candidate, branch on: they engage or not, the champion is fine or feels bypassed.
- Put probabilities on each branch: reachability from me, the rest from the canvases and stated assumptions.
- Put the payoff as the change in deal win probability, from the persona win rates.
- Roll back the tree to an expected value per candidate. Add a branch for "ask the champion to introduce".
- Show how sensitive the winner is to the champion-risk probability.

OUTPUT
The tree in text or drawn, expected value per option, the recommendation, and the three-line opener for the chosen contact.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a persona reaction the canvas doesn't support.
```

## Ad hoc questions

- Who is on [deal] and what role does each have?
- Which personas are on the deals we win in [segment]?
- What is our win rate on multi-threaded versus single-threaded deals?
- What does a [persona] care about, and how do I open a conversation with them?
- Where does a [persona] spend time, according to their canvas?
- Which of my deals has no technical buyer attached?
- Which role, when missing, costs us deals most often?
- Give me a three-line note to a [persona] from their champion's point of view.
- Which persona appears on our won deals but almost never on lost ones?
- How many of my open deals have only one contact attached?
- Which [persona] objection shows up when they join late in a deal?
- What's the engagement velocity for a [persona] in our buying-group data?
- Which open deals in [segment] have no economic buyer on record?
- Who's flagged as a Blocker on [account], and what's their persona's main objection?
- Where does a technical buyer hear about tools like ours, per their canvas?
