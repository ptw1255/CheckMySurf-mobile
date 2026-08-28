# Roadmap and success metrics

## Roadmap logic

Sequence trust and observability before engagement features. Dates are intentionally absent; advancement is evidence-gated.

### Phase 0 — Define and baseline

- Document API field semantics, source, update cadence, score calculation, and partial-response behavior.
- Add event taxonomy and privacy review; establish decision-time and failure baselines.
- Test current journey with local, learning, and assistive-tech participants.
- Exit: score can be explained; critical states are enumerated; baseline collection is credible.

### Phase 1 — Trustworthy core

- Freshness/source cues, explicit empty state, actionable retry, partial-data treatment.
- Accessibility labels, chart alternatives, large-text and contrast fixes.
- Separate “forecast quality” from “fit for you.”
- Exit hypothesis: comprehension improves without slower task completion; stale data is never mistaken for current.

### Phase 2 — Explainable personalization

- Apply stored wave/cold preferences to transparent fit reasons.
- Clarify skill-level limitations; do not imply safety certification.
- Add best-window explanation and preference reset/edit paths.
- Exit hypothesis: users identify fit/mismatch more accurately than with the generic presentation.

### Phase 3 — Compare and preserve opportunities

- Nearby comparison, change-since-last-check, shareable privacy-safe snapshot.
- Evaluate last-known-data fallback with strict staleness treatment.
- Exit hypothesis: fewer external source switches and faster alternative selection.

### Phase 4 — Opt-in alerts, only if earned

- Concierge-test threshold alerts before automation.
- Quiet hours, cadence control, preview, easy mute, and source/freshness in every alert.
- Exit hypothesis: useful decision rechecks outweigh interruption and disablement.

## Hypotheses

| ID | Hypothesis | Falsification signal |
|---|---|---|
| H1 | Freshness + reasons improve calibrated confidence | Confidence rises while interpretation accuracy does not |
| H2 | Preference fit reduces decision time | No improvement versus a generic-score control |
| H3 | Comparison reduces source switching | External checks unchanged or rise |
| H4 | Stale fallback is safer than blank failure | Users mistake stale data for current |
| H5 | Alerts recover valuable windows | High mute/disable rate or low decision-value reports |

## North-star candidate

**Informed decision completion rate:** eligible planning sessions in which a user reviews freshness and reaches an explicit spot/window or wait decision. This is a hypothesis; instrumenting a “decision” must be lightweight and never infer that viewing equals surfing.

## Metric system

| Type | Metric | Definition |
|---|---|---|
| Leading | Time to first decision view | app foreground → summary rendered with freshness |
| Leading | Fit explanation open rate | explanation opens / fit impressions |
| Leading | Successful refresh rate | valid complete/partial refreshes / attempts |
| Leading | Comparison completion | comparison sessions reaching a selected detail/wait action |
| Lagging | Informed decision completion | explicit decisions / eligible sessions |
| Lagging | Repeat planning cadence | privacy-safe active planning periods per opted-in user |
| Lagging | Self-reported avoided wasted check/trip | user-reported; never inferred from location |
| Guardrail | Stale-as-current comprehension errors | observed errors / tested stale sessions |
| Guardrail | API/error rate | failed refreshes / attempts, by endpoint and error class |
| Guardrail | Accessibility task failure | failures by assistive scenario |
| Guardrail | Notification mute/disable | alert opt-outs / alert-enabled users |
| Guardrail | Safety-language misunderstanding | participants treating fit as guarantee |

No target values are asserted before baseline collection.

## Instrumentation

Use privacy-minimal events with no precise location or raw preference values unless essential:

| Event | Required properties |
|---|---|
| `planning_session_started` | app version, entry surface |
| `forecast_load_completed` | endpoint group, latency bucket, freshness bucket, complete/partial |
| `forecast_load_failed` | endpoint group, error class, retryable |
| `spot_summary_viewed` | home/nearby flag, freshness bucket |
| `fit_explanation_viewed` | reason categories, missing-input flag |
| `decision_recorded` | go/wait/alternative, horizon bucket |
| `preference_changed` | field category only |
| `alert_actioned` | age bucket, action, quiet-hours state |

Publish retention/deletion rules, permit analytics opt-out, and keep safety feedback separate from growth experimentation.

## Experiments

1. **Comprehension test:** generic score vs. score + freshness/reasons; measure interpretation accuracy, time, and confidence calibration.
2. **Preference prototype:** static fit reasons vs. interactive thresholds; measure explanation and threshold recall.
3. **Comparison test:** cards vs. decision table; measure alternative selection and source switching.
4. **Failure-state test:** blank error vs. explicit stale snapshot; measure mistaken-current rate.
5. **Alert concierge:** manually simulated opt-in alerts; measure reported value and interruption before building infrastructure.

## Dependencies and review gates

- Backend data contract, provenance, caching, and partial-failure support.
- Design/content review for uncertainty and safety language.
- Accessibility testing on iOS, Android, and web where supported.
- Analytics privacy review and a data dictionary.
- Notification service only after concierge evidence.
- Release gate: link check, state matrix review, API contract tests, and guardrail dashboard readiness.
