{
 "window": {
  "timeframe": "lastMonth",
  "from": "2026-09-01",
  "to": "2026-09-30"
 },
 "compared_with": {
  "from": "2026-08-01",
  "to": "2026-08-31"
 },
 "kpis": [
  {
   "dashboard": "win_loss",
   "kpi": "Competitive win rate",
   "value": 0.38,
   "n": 21,
   "comparison": {
    "prior": 0.47,
    "delta": -9,
    "prior_n": 19
   },
   "section": "scoreboard"
  },
  {
   "dashboard": "win_loss",
   "kpi": "Pipeline lost",
   "value": 690000,
   "comparison": {
    "prior": 380000,
    "delta": 310000
   },
   "section": "scoreboard"
  },
  {
   "dashboard": "competitive_intelligence",
   "kpi": "Competitive win rate vs Acme Monitor",
   "value": 0.25,
   "n": 4,
   "comparison": {
    "reason": "fewer than 5 deals in the prior period"
   },
   "section": "performance"
  }
 ],
 "movers": [
  {
   "what": "Losses to Acme Monitor",
   "from": 1,
   "to": 3,
   "section": "competitive_intelligence.performance"
  }
 ],
 "top_loss_reasons": [
  {
   "reason": "Pricing predictability",
   "deals": 6
  },
  {
   "reason": "Missing dbt Cloud integration",
   "deals": 4
  }
 ],
 "product_gaps": [
  {
   "gap": "dbt Cloud integration",
   "deals": 4,
   "amount_at_risk_usd": 310000
  }
 ],
 "availability": {
  "no_data": [
   "win_loss_program_health",
   "voice_of_customer",
   "persona",
   "market_research"
  ]
 }
}
