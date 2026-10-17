---
type: llm
weight: 3
---
Ground truth from the fictional workspace: (a) "only ... column-level lineage" is wrong or unsupported (Lattice Data has it; positioning says not to claim "only"); (b) dbt Cloud is wrong (not supported; on the roadmap for Q1 2027), while Snowflake and BigQuery are supported; (c) "$500 a month on Starter" is stale or wrong (Starter retired 2026-09-15; plans start at $1,500/month on Team); (d) SOC 2 Type II is supported; (e) "cut data incidents by 70%" has no source (unsupported).
PASS if the reply flags (a), (b) and (c) as problems, does not call (d) false, and flags (e) as unsupported or unverifiable. Each flagged claim should come with corrected wording or the source.
FAIL if any of (a), (b), (c) or (e) is accepted as fine, or if the reply calls the SOC 2 Type II claim wrong.
