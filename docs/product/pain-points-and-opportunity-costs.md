# Pain points and opportunity costs

Scores below are **prioritization hypotheses**, not measured prevalence. Validate frequency per decision opportunity and severity on a 1–5 user-reported scale.

| Pain | Expected frequency | Severity | Consequence chain | Evidence / status |
|---|---:|---:|---|---|
| Fragmented interpretation | Every planning session | 4 | Multiple checks → cognitive load → delay → missed/narrower window | Inference from consolidated UI |
| Generic fit | Frequent | 4 | Score looks good → personal mismatch → poor session or lost trust | Preferences exist but are not applied in detail |
| Unknown freshness | Frequent | 5 | Old input appears current → false confidence → unsafe/wasted choice | No freshness UI observed |
| Backend failure | Occasional | 4 | Request fails → detail unavailable → no recovery context | Error state exists; retry affordance is limited |
| Empty catalog | Rare/edge | 3 | No rows → blank list → user cannot distinguish no support from failure | List has no explicit empty view |
| Dense/visual-only meaning | Variable | 4 | Meaning inaccessible → misread score/action → abandonment | Accessibility behavior not evidenced |
| Preference persistence failure | Rare | 2 | Settings revert silently → inconsistent interpretation | Storage catches are silent |

## Opportunity-cost model

Do not insert invented actuals. Capture baselines and calculate:

- **Decision time cost per month:**
  `eligible_sessions × (baseline_minutes_to_decide - product_minutes_to_decide)`
- **Avoidable travel proxy:**
  `trips_abandoned_on_arrival × median_round_trip_minutes`
- **Context-switch burden:**
  `decision_sessions × external_sources_opened_per_session`
- **Missed-window proxy:**
  `eligible_sessions where decision_completed_after_user_deadline / eligible_sessions`
- **Trust loss proxy:**
  `sessions with freshness surprise or unexplained score / evaluated_sessions`
- **Alert interruption cost:**
  `alerts_opened_without_decision_value + alerts_muted + alert-attributed notification disablement`

Monetization is not assumed. If a monetary proxy is needed for prioritization, let users supply their own travel cost and value-of-time rather than assigning a universal amount.

## Risks of inaction

1. Stored preferences remain cosmetic, weakening credibility.
2. A score without provenance becomes a trust liability as usage grows.
3. API outages or stale data train users to return to alternatives.
4. Accessibility debt hardens around card and chart interactions.
5. Expanding geography before strengthening the decision loop increases operational surface without proving value.

## Prioritization

Use `Reach × severity × confidence ÷ effort`, but keep confidence explicit:

| Opportunity | Confidence now | Why |
|---|---|---|
| Freshness and source cues | Medium | Universal trust need; current gap is observable |
| Explicit empty/error recovery | High | Current states are directly inspectable |
| Preference-aware fit | Medium | Data exists, value is unvalidated |
| Beach comparison | Low–medium | Supported by multi-beach list, not by research |
| Alerts | Low | No evidence of desired cadence or threshold |

Safety, accessibility, and trust defects bypass numeric prioritization when they can materially mislead.
