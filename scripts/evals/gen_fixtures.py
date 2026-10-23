"""Generate the fictional Calven workspace the plugin evals run against.

Company: Northwind (data observability, one product: Northwind Observe).
Everything here is invented. No Calven customer or tenant data.

Writes two kinds of file under OUT (evals/mocks/calven):
- fixtures/<name>.json for tools whose answer depends on an argument (kind, dashboard, detail,
  document). Their <tool>.md mocks splice one in with {{file:fixtures/...-{input.<arg>}.json}}.
- <tool>.md with the JSON as its body for tools that always give the same answer, so they need
  no separate fixture file (the plugin ships every file in the repository).
"""
import json
import os
import sys

OUT = sys.argv[1]  # evals/mocks/calven
FX = os.path.join(OUT, "fixtures")
os.makedirs(FX, exist_ok=True)


def write_json(path, obj):
    with open(path, "w") as f:
        json.dump(obj, f, indent=1, ensure_ascii=False)
        f.write("\n")


def dump(name, obj):
    write_json(os.path.join(FX, name), obj)


def mock(tool, obj):
    write_json(os.path.join(OUT, f"{tool}.md"), obj)


KINDS = [
    "competitors", "competitive_signals", "personas", "trends", "market_opportunities",
    "analyst_findings", "themes", "quotes", "vendor_quotes", "customer_conversations",
    "market_signals", "deal_drivers", "product_changes", "product_drift_findings", "claims",
    "surveyed_deals", "survey_responses", "crm_accounts", "crm_contacts", "crm_deals",
]

rows = {k: [] for k in KINDS}
rows["competitors"] = [
    {"id": "c1a2b3c4", "kind": "competitors", "name": "Acme Monitor", "product": [], "cells": {"description": "Data observability platform sold per monitored table; strong dbt Cloud story.", "categories": ["Direct"], "size": "Enterprise", "tier": "Tier 1", "website": "https://acme-monitor.example"}},
    {"id": "c5d6e7f8", "kind": "competitors", "name": "Lattice Data", "product": [], "cells": {"description": "Lineage-first data catalog with observability add-on; column-level lineage since 2025.", "categories": ["Adjacent"], "size": "Mid-market", "tier": "Tier 2", "website": "https://lattice.example"}},
]
rows["competitive_signals"] = [
    {"id": "s0a1b2c3", "kind": "competitive_signals", "name": "Acme Monitor launches native dbt Cloud integration", "product": [], "cells": {"competitor": "Acme Monitor", "severity": "high", "signal_type": "product_launch", "detected_at": "2026-09-28", "summary": "Acme Monitor shipped a native dbt Cloud integration with one-click setup."}},
    {"id": "s4d5e6f7", "kind": "competitive_signals", "name": "Acme Monitor launches AI incident summaries", "product": [], "cells": {"competitor": "Acme Monitor", "severity": "medium", "signal_type": "product_launch", "detected_at": "2026-08-14", "summary": "Incidents now open with an AI-written summary of the likely cause."}},
]
rows["personas"] = [
    {"id": "p1111111", "kind": "personas", "name": "Head of Data Platform", "product": [], "cells": {"type": "buyer", "seniority": "Director", "buying_role": "Champion", "role_title": "Head of Data Platform"}},
    {"id": "p2222222", "kind": "personas", "name": "Analytics Engineer", "product": [], "cells": {"type": "user", "seniority": "IC", "buying_role": "User", "role_title": "Analytics Engineer"}},
    {"id": "p3333333", "kind": "personas", "name": "VP Finance", "product": [], "cells": {"type": "stakeholder", "seniority": "VP", "buying_role": "Economic buyer", "role_title": "VP Finance"}},
]
rows["quotes"] = [
    {"id": "q7a1c0d2", "kind": "quotes", "name": "Acme's per-table price was easier to forecast for finance.", "product": [], "cells": {"quote": "Acme's per-table price was easier to forecast for finance.", "author_name": "Head of Data, Initrode (lost)", "deal_context": "lost", "competitor": "Acme Monitor", "sentiment": "negative", "occurred_at": "2026-07-09"}},
    {"id": "q8b2d1e3", "kind": "quotes", "name": "We needed dbt Cloud on day one and Acme had it.", "product": [], "cells": {"quote": "We needed dbt Cloud on day one and Acme had it.", "author_name": "Analytics Engineer, Vandelay (lost)", "deal_context": "lost", "competitor": "Acme Monitor", "sentiment": "negative", "occurred_at": "2026-09-30"}},
    {"id": "q9c3e2f4", "kind": "quotes", "name": "Column-level lineage caught the broken pipeline before the board report went out.", "product": [], "cells": {"quote": "Column-level lineage caught the broken pipeline before the board report went out.", "author_name": "Head of Data Platform, Soylent (won)", "deal_context": "won", "competitor": "Acme Monitor", "sentiment": "positive", "occurred_at": "2026-06-21"}},
]
rows["deal_drivers"] = [
    {"id": "d1000001", "kind": "deal_drivers", "name": "Pricing predictability", "product": [], "cells": {"driver": "Pricing predictability", "direction": "hurt", "competitor": "Acme Monitor", "outcome": "lost", "rank": 1}},
    {"id": "d1000002", "kind": "deal_drivers", "name": "dbt Cloud integration", "product": [], "cells": {"driver": "dbt Cloud integration", "direction": "hurt", "competitor": "Acme Monitor", "outcome": "lost", "rank": 2}},
    {"id": "d1000003", "kind": "deal_drivers", "name": "Column-level lineage", "product": [], "cells": {"driver": "Column-level lineage", "direction": "helped", "competitor": "Acme Monitor", "outcome": "won", "rank": 1}},
]
rows["product_changes"] = [
    {"id": "x1000001", "kind": "product_changes", "name": "Starter plan retired", "product": [], "cells": {"summary": "The $500/month Starter plan was retired. New customers start on Team ($1,500/month).", "change_type": "pricing", "detected_at": "2026-09-15", "severity": "high"}},
    {"id": "x1000002", "kind": "product_changes", "name": "Databricks Unity Catalog lineage", "product": [], "cells": {"summary": "Column-level lineage now reads Databricks Unity Catalog, so lineage covers Databricks tables end to end.", "change_type": "capability", "detected_at": "2026-10-05", "severity": "medium"}},
]
rows["claims"] = [
    {"id": "k1000001", "kind": "claims", "name": "The only data observability platform with column-level lineage", "product": [], "cells": {"claim": "The only data observability platform with column-level lineage", "status": "flagged", "concern": "Lattice Data has offered column-level lineage since 2025.", "origin": "website"}},
]
rows["crm_accounts"] = [
    {"id": "a1000001", "kind": "crm_accounts", "name": "Globex", "product": [], "cells": {"domain": "globex.example", "industry": "Logistics software", "size": "1,200 employees", "icp_fit_tier": "A"}},
    {"id": "a1000002", "kind": "crm_accounts", "name": "Hooli", "product": [], "cells": {"domain": "hooli.example", "industry": "Consumer internet", "size": "8,000 employees", "icp_fit_tier": "B"}},
]
rows["crm_contacts"] = [
    {"id": "n1000001", "kind": "crm_contacts", "name": "Dana Ruiz", "product": [], "cells": {"account": "Globex", "role": "Head of Data Platform", "lifecycle_stage": "opportunity"}},
    {"id": "n1000002", "kind": "crm_contacts", "name": "Sam Okafor", "product": [], "cells": {"account": "Globex", "role": "Analytics Engineer", "lifecycle_stage": "opportunity"}},
    {"id": "n1000003", "kind": "crm_contacts", "name": "Priya Shah", "product": [], "cells": {"account": "Hooli", "role": "Director of Data Engineering", "lifecycle_stage": "lead"}},
]
rows["crm_deals"] = [
    {"id": "e1000001", "kind": "crm_deals", "name": "Globex - Platform rollout", "product": [], "cells": {"account": "Globex", "stage": "Proposal", "status": "open", "amount_usd": 84000, "close_date": "2026-11-20", "competitors": ["Acme Monitor"], "last_activity": "2026-10-14: proposal sent; Dana asked how pricing scales past 500 tables."}},
    {"id": "e1000002", "kind": "crm_deals", "name": "Hooli - Pilot", "product": [], "cells": {"account": "Hooli", "stage": "Discovery", "status": "open", "amount_usd": 30000, "close_date": "2027-01-15", "competitors": []}},
]
rows["themes"] = [
    {"id": "t1000001", "kind": "themes", "name": "Forecastable pricing", "product": [], "cells": {"label": "Forecastable pricing", "category": "pricing", "mentions": 9}},
    {"id": "t1000002", "kind": "themes", "name": "Lineage depth", "product": [], "cells": {"label": "Lineage depth", "category": "product", "mentions": 7}},
]
rows["trends"] = [
    {"id": "t1000001", "kind": "trends", "name": "AI agents query the warehouse directly", "product": [], "cells": {"name": "AI agents query the warehouse directly", "description": "Analytics and AI agents now read warehouse tables without a human in the loop, so a broken column reaches an automated decision before anyone sees a dashboard.\n- Snowflake and Databricks both shipped agent query features this quarter (vendor announcements, Sep 2026).\nData teams will be asked to prove the data an agent read was fresh and correct.", "category": "technology", "severity": "High", "horizon": "Now", "status": "active", "last_seen": "2026-10-08", "state": "approved"}},
    {"id": "t1000002", "kind": "trends", "name": "EU AI Act data governance duties", "product": [], "cells": {"name": "EU AI Act data governance duties", "description": "High-risk AI systems must document the quality and lineage of their training and input data, which pulls data observability into compliance reviews for EU companies.", "category": "regulatory", "severity": "Medium", "horizon": "6–12 months", "status": "active", "last_seen": "2026-09-30", "state": "approved"}},
]
rows["market_opportunities"] = [
    {"id": "o1000001", "kind": "market_opportunities", "name": "Observability for AI input data", "product": [], "cells": {"name": "Observability for AI input data", "description": "Position column-level lineage as proof of what data an AI agent or model read, for teams under AI governance reviews.", "type": "use_case", "impact": "High", "timeline": "6–12 months", "sizing_tier": "mid", "status": "new", "created_at": "2026-10-09"}},
]
rows["product_drift_findings"] = [
    {"id": "d1000001", "kind": "product_drift_findings", "name": "Pricing one-pager", "product": [], "cells": {"asset_name": "Pricing one-pager", "classification": "contradiction", "product_change": {"id": "x1000001", "label": "Starter plan retired"}, "confidence": "High", "rationale": "The one-pager still lists Starter at $500/month as the entry plan. Plans now start on Team at $1,500/month.", "created_at": "2026-09-16", "state": "new"}},
    {"id": "d1000002", "kind": "product_drift_findings", "name": "Q3 sales deck", "product": [], "cells": {"asset_name": "Q3 sales deck", "classification": "needs_review", "product_change": {"id": "x1000002", "label": "Databricks Unity Catalog lineage"}, "confidence": "Medium", "rationale": "Slide 9 says lineage covers Snowflake and BigQuery; it may need Databricks added now that Unity Catalog lineage shipped.", "created_at": "2026-10-06", "state": "new"}},
    {"id": "d1000003", "kind": "product_drift_findings", "name": "Website pricing page", "product": [], "cells": {"asset_name": "Website pricing page", "classification": "already_updated", "product_change": {"id": "x1000001", "label": "Starter plan retired"}, "confidence": "High", "rationale": "The page lists Team, Business and Enterprise only.", "created_at": "2026-09-16", "state": "reviewed"}},
]

for kind in KINDS:
    items = rows[kind]
    dump(f"records-{kind}.json", {
        "kind": kind,
        "items": items,
        "has_more": False,
        "next_offset": None,
        "total": len(items),
        **({"note": f"No {kind} recorded in this workspace."} if not items else {}),
    })
    dump(f"record-{kind}.json", {"records": items} if items else {"record": None, "note": f"No {kind} recorded in this workspace."})

mock("get_workspace_overview", {"workspace": {
    "product_mode": "single", "products": [],
    "documents": [{"document": d, "exists": True, "product_instances": []} for d in ["positioning", "messaging", "product_brief", "icp"]],
    "records": [{"kind": k, "total": len(rows[k])} for k in KINDS],
}})

PRODUCT_BRIEF = """# Product brief: Northwind Observe

## What it does
Data observability for data platform teams: anomaly detection on freshness, volume and schema; column-level lineage from source to dashboard; incident routing to Slack and PagerDuty.

## Integrations
Snowflake, BigQuery, Databricks, Redshift, dbt Core, Airflow, Looker, Tableau, Slack, PagerDuty. dbt Cloud is not supported today; a dbt Cloud integration is on the roadmap for Q1 2027.

## Security
SOC 2 Type II (report available under NDA). Data processed in the EU or US region of the customer's choice.

## Pricing and packaging
- Team: $1,500/month, up to 500 monitored tables.
- Business: $4,000/month, up to 2,000 monitored tables, SSO.
- Enterprise: custom, unlimited tables, dedicated support.
No free tier. 14-day trial. The Starter plan ($500/month) was retired on 2026-09-15.

## Proof
Soylent cut time-to-detect for broken pipelines from 2 days to 40 minutes (case study, 2026).
"""

POSITIONING = """# Positioning

## Category
Data observability.

## Target
Data platform teams at mid-market companies running Snowflake, BigQuery or Databricks.

## Differentiation
Column-level lineage tied to incidents, so the team sees which dashboards a broken column reaches before anyone opens them. We do not claim to be the only vendor with column-level lineage.
"""

MESSAGING = """# Messaging

## Core message
Catch broken data before your stakeholders do.

## Pillars
1. Lineage you can act on: from a broken column to every dashboard it reaches.
2. Alerts that respect your time: anomaly detection tuned per table.
3. Pricing that scales by tables you choose to monitor.
"""

ICP = """# ICP

Mid-market companies (300 to 5,000 employees) with a data platform team of 3+ and a cloud warehouse. Trigger: a data incident reached an executive report.
"""

for name, content in [("product_brief", PRODUCT_BRIEF), ("positioning", POSITIONING), ("messaging", MESSAGING), ("icp", ICP)]:
    dump(f"strategy-{name}.json", {"document": {"asset_id": f"doc-{name}"[:8], "kind": name, "name": name.replace("_", " ").title(), "product": None, "version": 3, "content": content}})

ACME = {"competitor": {
    "id": "c1a2b3c4", "name": "Acme Monitor", "cells": rows["competitors"][0]["cells"],
    "battlecard": {
        "how_we_win": ["Column-level lineage tied to incidents: show the blast radius demo.", "Alert noise: Acme tunes per warehouse, we tune per table."],
        "where_we_lose": ["Pricing predictability: finance prefers Acme's flat per-table price.", "dbt Cloud: Acme integrates natively; we support dbt Core only until Q1 2027."],
        "traps_to_set": ["Ask: when a column breaks, how do you know which executive dashboards it reaches?"],
        "objections": [{"objection": "Acme is cheaper.", "response": "Compare monitored tables, not list price: most teams monitor 30-40% of tables. Bring the Soylent time-to-detect proof."}],
        "proof_points": ["Soylent: time-to-detect from 2 days to 40 minutes."],
    },
    "recent_signals": rows["competitive_signals"],
    "signals_has_more": False,
    "head_to_head": {"window": "trailing12m", "deals": 7, "won": 3, "lost": 4, "win_rate": 0.43},
    "deep_dive": {"asset_id": "dd-acme1", "word_count": 2400, "sections": ["Pricing and packaging", "Positioning", "Strengths", "Weaknesses"]},
}}
mock("get_competitor", ACME)

mock("list_documents", {"items": [
    {"asset_id": "dd-acme1", "kind": "competitor_deep_dive", "name": "Acme Monitor deep dive", "linked_to": "Acme Monitor"},
    {"asset_id": "bc-acme1", "kind": "competitor_battlecard", "name": "Acme Monitor battlecard", "linked_to": "Acme Monitor"},
], "truncated": False})
mock("read_document", {"document": {"asset_id": "dd-acme1", "kind": "competitor_deep_dive", "name": "Acme Monitor deep dive", "content": "# Acme Monitor\n\n## Pricing and packaging\n$12 per monitored table per month. No platform fee.\n\n## Strengths\nNative dbt Cloud integration (since 2026-09-28). Simple per-table pricing.\n\n## Weaknesses\nTable-level lineage only; no column-level lineage. Alerting tuned per warehouse, noisy at scale.\n"}})

WIN_LOSS = {"dashboard": "win_loss", "window": {"timeframe": "lastMonth", "from": "2026-09-01", "to": "2026-09-30"}, "compared_with": {"from": "2026-08-01", "to": "2026-08-31"}, "sections": [
    {"id": "scoreboard", "title": "Scoreboard", "status": "ok", "data": {
        "competitive_win_rate": {"value": 0.38, "n": 21, "comparison": {"prior": 0.47, "delta": -9, "prior_n": 19}},
        "pipeline_won_usd": {"value": 412000, "comparison": {"prior": 455000, "delta": -43000}},
        "pipeline_lost_usd": {"value": 690000, "comparison": {"prior": 380000, "delta": 310000}},
    }},
    {"id": "why_won_lost", "title": "Why we win and lose", "status": "ok", "data": {
        "won": [{"reason": "Column-level lineage", "deals": 5}, {"reason": "Alert quality", "deals": 3}],
        "lost": [{"reason": "Pricing predictability", "deals": 6}, {"reason": "Missing dbt Cloud integration", "deals": 4}, {"reason": "No decision", "deals": 3}],
    }},
    {"id": "deciding_forces", "title": "Deciding forces", "status": "ok", "data": {"top": [{"force": "Pricing predictability", "decided": 6, "of": 13}, {"force": "dbt Cloud integration", "decided": 4, "of": 13}]}},
    {"id": "segments", "title": "Segments", "status": "ok", "data": {"best": {"segment": "Logistics software", "win_rate": 0.6, "n": 5}}},
], "notes": ["Cite n beside every rate."]}
NO_DATA = lambda d: {"dashboard": d, "sections": [], "notes": [f"No data: the {d} dashboard has no rows in this window."], "availability": "no_data"}
INSIGHTS_ICP = {
    "dashboard": "icp",
    "window": {"timeframe": "trailing12m", "from": "2025-10-01", "to": "2026-09-30"},
    "compared_with": {"from": "2024-10-01", "to": "2025-09-30"},
    "sections": [
                    {
                        "id": "kpis",
                        "title": "How focused is the pipeline",
                        "status": "ok",
                        "data": {
                                    "kpis": [
                                                {
                                                    "metric_id": "icp.won_share",
                                                    "label": "ICP share of wins",
                                                    "value": 0.71,
                                                    "n": 24,
                                                    "comparison": {"prior": 0.62, "delta": 9, "prior_n": 21},
                                                },
                                                {
                                                    "metric_id": "icp.fit_pipeline_share",
                                                    "label": "ICP-fit pipeline",
                                                    "value": 0.58,
                                                    "denominator_usd": 1240000,
                                                    "comparison": None,
                                                    "notes": "Snapshot of pipeline open today; not compared.",
                                                },
                                                {
                                                    "metric_id": "icp.deal_size_lift",
                                                    "label": "Avg deal size",
                                                    "value": 1.6,
                                                    "unit": "ratio",
                                                    "n": 31,
                                                    "in_icp_avg_usd": 86000,
                                                    "out_icp_avg_usd": 54000,
                                                    "comparison": {"prior": 1.4, "delta": 0.2},
                                                },
                                                {
                                                    "metric_id": "icp.sales_cycle_days",
                                                    "label": "Sales cycle",
                                                    "value": 74,
                                                    "unit": "days",
                                                    "n": 17,
                                                    "comparison": {"prior": 81, "delta": -7},
                                                },
                                            ],
                                },
                        "notes": ["ICP means fit tiers 1 and 2.", "Deal size lift is a ratio, not dollars."],
                    },
                    {
                        "id": "expand_icp",
                        "title": "Where to expand the ICP",
                        "status": "ok",
                        "data": {
                                    "expansion_floor": {"min_deals": 10},
                                    "expansion_recommendations": [
                                                                     {
                                                                         "segment": "Fintech, 300-5,000 employees, North America",
                                                                         "win_rate": 0.58,
                                                                         "deals": 12,
                                                                         "avg_deal_size_usd": 92000,
                                                                         "open_pipeline_usd": 210000,
                                                                         "avg_fit": 0.81,
                                                                         "call": "expand",
                                                                     },
                                                                     {
                                                                         "segment": "Logistics software, 300-5,000 employees, Europe",
                                                                         "win_rate": 0.6,
                                                                         "deals": 5,
                                                                         "avg_deal_size_usd": 78000,
                                                                         "open_pipeline_usd": 84000,
                                                                         "avg_fit": 0.88,
                                                                         "call": "below floor",
                                                                     },
                                                                     {
                                                                         "segment": "Any industry, over 5,000 employees",
                                                                         "win_rate": 0.18,
                                                                         "deals": 11,
                                                                         "avg_deal_size_usd": 64000,
                                                                         "open_pipeline_usd": 310000,
                                                                         "avg_fit": 0.42,
                                                                         "call": "deprioritize",
                                                                     },
                                                                 ],
                                },
                    },
                    {
                        "id": "win_predictors",
                        "title": "What actually predicts a win",
                        "status": "ok",
                        "data": {
                                    "win_rate_baselines": {"all": 0.39, "n": 44},
                                    "win_rate_by_attribute": [
                                                                 {"dimension": "Size", "value": "300-5,000 employees", "win_rate": 0.52, "n": 23},
                                                                 {
                                                                     "dimension": "Trigger",
                                                                     "value": "Data incident reached an executive report",
                                                                     "win_rate": 0.64,
                                                                     "n": 11,
                                                                 },
                                                                 {
                                                                     "dimension": "Tech",
                                                                     "value": "dbt Cloud",
                                                                     "win_rate": 0.22,
                                                                     "n": 9,
                                                                     "below_floor": True,
                                                                 },
                                                             ],
                                    "predictive_attributes": [
                                                                 {
                                                                     "attribute": "Trigger: data incident reached an executive report",
                                                                     "lift": 1.64,
                                                                     "n": 11,
                                                                 },
                                                             ],
                                    "segments": {
                                                    "best": [{"segment": "Fintech, 300-5,000 employees", "win_rate": 0.58, "n": 12}],
                                                    "worst": [{"segment": "Over 5,000 employees", "win_rate": 0.18, "n": 11}],
                                                },
                                },
                    },
                    {
                        "id": "reality_check",
                        "title": "Reality check",
                        "status": "ok",
                        "data": {
                                    "fit_score_distribution": [
                                                                  {"tier": "Tier 1", "accounts": 14},
                                                                  {"tier": "Tier 2", "accounts": 22},
                                                                  {"tier": "Tier 3", "accounts": 31},
                                                                  {"tier": "Tier 4", "accounts": 18},
                                                              ],
                                    "pipeline_gap": {
                                                        "win_share": 0.71,
                                                        "pipeline_share": 0.58,
                                                        "notes": "win_share counts revenue won in the window; pipeline_share is pipeline open today.",
                                                    },
                                    "trends": [
                                                  {"month": "2026-07", "on_icp_usd": 640000, "off_icp_usd": 420000},
                                                  {"month": "2026-08", "on_icp_usd": 690000, "off_icp_usd": 480000},
                                                  {"month": "2026-09", "on_icp_usd": 720000, "off_icp_usd": 520000},
                                              ],
                                },
                    },
                ],
    "notes": [],
}
INSIGHTS_MARKET_RESEARCH = {
    "dashboard": "market_research",
    "title": "Market research",
    "window": {"from": "2025-11-01", "to": "2026-10-17", "unit": "month"},
    "compare": {"from": "2024-11-01", "to": "2025-10-17"},
    "sections": [
                    {
                        "id": "kpis",
                        "title": "Making an impact",
                        "status": "available",
                        "data": {
                                    "kpis": [
                                                {
                                                    "metric_id": "market_research.opportunities_surfaced",
                                                    "value": 1,
                                                    "comparison": {
                                                                      "reason": "no_history",
                                                                      "meaning": "No change stated: records begin after the comparison period. Not \"unchanged\".",
                                                                  },
                                                },
                                                {"metric_id": "market_research.opportunities_actioned", "value": 0, "not_compared": True},
                                                {"metric_id": "market_research.high_impact_trends", "value": 1, "snapshot": True},
                                                {
                                                    "metric_id": "market_research.signals_tracked",
                                                    "value": 9,
                                                    "comparison": {
                                                                      "reason": "no_history",
                                                                      "meaning": "No change stated: records begin after the comparison period. Not \"unchanged\".",
                                                                  },
                                                },
                                            ],
                                },
                    },
                    {
                        "id": "opportunities_trends",
                        "title": "Opportunities & trends",
                        "status": "available",
                        "data": {
                                    "opportunities": {
                                                         "items": [
                                                                      {
                                                                          "id": "o1000001",
                                                                          "name": "Observability for AI input data",
                                                                          "impact": "High",
                                                                          "status": "new",
                                                                      },
                                                                  ],
                                                         "total": 1,
                                                     },
                                    "trends_total": 2,
                                },
                    },
                    {
                        "id": "signal_intelligence",
                        "title": "Signal intelligence",
                        "status": "available",
                        "data": {
                                    "signals": {
                                                   "items": [
                                                                {
                                                                    "id": "s1000001",
                                                                    "url": "https://example.com/snowflake-agents",
                                                                    "title": "Snowflake ships agent queries over governed tables",
                                                                    "domain": "example.com",
                                                                    "run_at": "2026-10-08",
                                                                    "category": "technology",
                                                                    "trend_id": "t1000001",
                                                                    "trend_name": "AI agents query the warehouse directly",
                                                                    "gtm_implication": "Buyers will ask how we catch bad data before an agent acts on it.",
                                                                },
                                                                {
                                                                    "id": "s1000002",
                                                                    "url": "https://example.com/eu-ai-act-guidance",
                                                                    "title": "Commission guidance on data quality duties for high-risk AI",
                                                                    "domain": "example.com",
                                                                    "run_at": "2026-09-30",
                                                                    "category": "regulatory",
                                                                    "trend_id": "t1000002",
                                                                    "trend_name": "EU AI Act data governance duties",
                                                                    "gtm_implication": "Lineage becomes compliance evidence for EU data teams.",
                                                                },
                                                            ],
                                                   "total": 9,
                                               },
                                    "verticals": {
                                                     "markets": [
                                                                    {
                                                                        "key": "fintech",
                                                                        "name": "Fintech",
                                                                        "size_tier": "large",
                                                                        "momentum_tier": "accelerating",
                                                                        "driver_theme": "Regulators ask for data lineage behind reported numbers",
                                                                        "evidence_strength": "med",
                                                                    },
                                                                    {
                                                                        "key": "logistics-software",
                                                                        "name": "Logistics software",
                                                                        "size_tier": "mid",
                                                                        "momentum_tier": "steady",
                                                                        "driver_theme": "Real-time tracking data feeds customer-facing ETAs",
                                                                        "evidence_strength": "low",
                                                                    },
                                                                ],
                                                 },
                                    "signals_by_month": [{"period": "2026-09", "signals": 4}, {"period": "2026-10", "signals": 5}],
                                },
                    },
                ],
}
INSIGHTS_PRODUCT_INTELLIGENCE = {
    "dashboard": "product_intelligence",
    "title": "Product intelligence",
    "window": {"from": "2025-11-01", "to": "2026-10-17", "unit": "month"},
    "compare": {"from": "2024-11-01", "to": "2025-10-17"},
    "sections": [
                    {
                        "id": "kpis",
                        "title": "Proof it lands",
                        "status": "available",
                        "placeholders": ["Unsupported claims", "Enablement coverage"],
                        "notes": ["Drift flagged is the whole open queue now, whatever the window."],
                        "data": {
                                    "kpis": [
                                                {"metric_id": "product_intelligence.drift_flagged", "value": 2, "snapshot": True},
                                                {"metric_id": "product_intelligence.assets_synced", "value": 1, "not_compared": True},
                                            ],
                                },
                    },
                    {
                        "id": "product_changes",
                        "title": "Product intelligence",
                        "status": "available",
                        "placeholders": ["Strengths vs gaps", "Product claims feed"],
                        "data": {
                                    "change_timeline": [
                                                           {
                                                               "id": "x1000002",
                                                               "date": "2026-10-05",
                                                               "title": "Databricks Unity Catalog lineage",
                                                               "change_kind": "capability",
                                                               "severity": "Medium",
                                                               "confidence": "High",
                                                           },
                                                           {
                                                               "id": "x1000001",
                                                               "date": "2026-09-15",
                                                               "title": "Starter plan retired",
                                                               "change_kind": "pricing",
                                                               "severity": "High",
                                                               "confidence": "High",
                                                           },
                                                       ],
                                    "change_timeline_total": 2,
                                    "not_yet_in_assets": [
                                                             {
                                                                 "id": "x1000002",
                                                                 "title": "Databricks Unity Catalog lineage",
                                                                 "change_kind": "capability",
                                                                 "detected_at": "2026-10-05",
                                                             },
                                                         ],
                                    "not_yet_in_assets_total": 1,
                                },
                    },
                    {
                        "id": "outcomes",
                        "title": "Tied to outcomes",
                        "status": "available",
                        "notes": [
                                     "amount_at_risk sums the deal values of won AND lost deals where the gap was cited: pipeline exposed to it, not lost revenue, and not proof the gap caused the outcome.",
                                 ],
                        "data": {"gaps_that_cost_deals": [{"gap": "dbt Cloud integration", "deals": 4, "amount_at_risk_usd": 310000}]},
                    },
                ],
}
MARKET_SIGNALS = {
    "items": [
                 {
                     "id": "s1000001",
                     "url": "https://example.com/snowflake-agents",
                     "title": "Snowflake ships agent queries over governed tables",
                     "domain": "example.com",
                     "run_at": "2026-10-08",
                     "category": "technology",
                     "trend_id": "t1000001",
                     "trend_name": "AI agents query the warehouse directly",
                     "gtm_implication": "Buyers will ask how we catch bad data before an agent acts on it.",
                 },
                 {
                     "id": "s1000002",
                     "url": "https://example.com/eu-ai-act-guidance",
                     "title": "Commission guidance on data quality duties for high-risk AI",
                     "domain": "example.com",
                     "run_at": "2026-09-30",
                     "category": "regulatory",
                     "trend_id": "t1000002",
                     "trend_name": "EU AI Act data governance duties",
                     "gtm_implication": "Lineage becomes compliance evidence for EU data teams.",
                 },
             ],
    "more_available": False,
}
dump("insights-win_loss.json", WIN_LOSS)
dump("insights-competitive_intelligence.json", {"dashboard": "competitive_intelligence", "window": {"timeframe": "lastMonth"}, "sections": [
    {"id": "performance", "title": "Performance", "status": "ok", "data": {"by_competitor": [{"competitor": "Acme Monitor", "deals": 4, "win_rate": 0.25, "n": 4}, {"competitor": "Lattice Data", "deals": 4, "win_rate": 0.5, "n": 4}]}},
]})
dump("insights-icp.json", INSIGHTS_ICP)
dump("insights-market_research.json", INSIGHTS_MARKET_RESEARCH)
dump("insights-product_intelligence.json", INSIGHTS_PRODUCT_INTELLIGENCE)
for d in ["win_loss_program_health", "voice_of_customer", "persona", "positioning", "messaging"]:
    dump(f"insights-{d}.json", NO_DATA(d))

mock("get_insights_overview", {"window": {"timeframe": "lastMonth", "from": "2026-09-01", "to": "2026-09-30"}, "compared_with": {"from": "2026-08-01", "to": "2026-08-31"},
    "kpis": [
        {"dashboard": "win_loss", "kpi": "Competitive win rate", "value": 0.38, "n": 21, "comparison": {"prior": 0.47, "delta": -9, "prior_n": 19}, "section": "scoreboard"},
        {"dashboard": "win_loss", "kpi": "Pipeline lost", "value": 690000, "comparison": {"prior": 380000, "delta": 310000}, "section": "scoreboard"},
        {"dashboard": "competitive_intelligence", "kpi": "Competitive win rate vs Acme Monitor", "value": 0.25, "n": 4, "comparison": {"reason": "fewer than 5 deals in the prior period"}, "section": "performance"},
    ],
    "movers": [{"what": "Losses to Acme Monitor", "from": 1, "to": 3, "section": "competitive_intelligence.performance"}],
    "top_loss_reasons": [{"reason": "Pricing predictability", "deals": 6}, {"reason": "Missing dbt Cloud integration", "deals": 4}],
    "product_gaps": [{"gap": "dbt Cloud integration", "deals": 4, "amount_at_risk_usd": 310000}],
    "availability": {"no_data": ["win_loss_program_health", "voice_of_customer", "persona", "market_research"]},
})

dump("detail-competitive_intelligence.competitor_deals.json", {"items": [
    {"deal": "Initrode - Platform", "outcome": "lost", "amount_usd": 96000, "loss_reason": "Pricing predictability", "closed": "2026-09-12"},
    {"deal": "Vandelay - Expansion", "outcome": "lost", "amount_usd": 120000, "loss_reason": "Missing dbt Cloud integration", "closed": "2026-09-30"},
    {"deal": "Soylent - Platform", "outcome": "won", "amount_usd": 88000, "win_reason": "Column-level lineage", "closed": "2026-09-03"},
], "more_available": True, "note": "Rows for the requested window, newest first."})
dump("detail-win_loss.loss_outcome_deals.json", {"items": [
    {"deal": "Vandelay - Expansion", "bucket": "competitor", "competitor": "Acme Monitor", "amount_usd": 120000},
    {"deal": "Umbrella - Platform", "bucket": "no_decision", "amount_usd": 75000},
], "more_available": True})
dump("detail-win_loss.verbatims.json", {"items": [{"quote": "We needed dbt Cloud on day one.", "outcome": "lost"}], "more_available": False})
for d in ["win_loss.answers", "win_loss.pricing_deals", "win_loss.product_deals", "competitive_intelligence.pricing_deals", "positioning.ai_answer"]:
    dump(f"detail-{d}.json", {"items": [], "more_available": False, "note": "No rows recorded for this drill-down in the window."})

dump("detail-market_research.signals.json", MARKET_SIGNALS)

print("ok", len(os.listdir(FX)), "fixtures")
