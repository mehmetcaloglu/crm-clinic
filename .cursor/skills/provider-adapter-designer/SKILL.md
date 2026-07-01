---
name: provider-adapter-designer
description: Design WhatsApp/Instagram/Chatwoot/Twilio/360dialog adapter work with normalized events, idempotency, and webhook validation. Use for Phase 3+ integration planning only.
---

# Provider Adapter Designer

## Purpose

Design channel provider integrations behind the adapter boundary without leaking external payloads into CRM domain or UI.

## When to use

- Phase 3+ WhatsApp BSP work
- Phase 4+ Instagram manual or pilot flows
- Reviewing webhook, outbound send, or provider connection design
- **Not** for Phase 0–2 manual CRM unless designing future-proof hooks only

## Inputs to inspect

- `docs/05-integration-strategy.md`, `docs/06-provider-selection.md`, `docs/07-risk-map.md`
- `docs/03-architecture.md` (`ChannelProvider`, `NormalizedInboundMessageEvent`)
- `.cursor/rules/60-integrations-provider.mdc`, ADR-004/005 in `docs/DECISIONS.md`
- `lib/integrations/` existing structure

## Workflow

1. Confirm phase and explicit approval — **no early direct Meta API** unless approved
2. Define provider scope (inbound, outbound, status, connection setup)
3. Map provider payloads → normalized internal events
4. Design idempotency (external message id uniqueness)
5. Design webhook validation (signature, timestamp, workspace routing)
6. Plan raw event storage vs normalized domain writes
7. Define ContactIdentity matching rules (phone, external user id — not name)
8. List failure modes, retries, and 24h window / template constraints (WhatsApp)
9. Specify tests with fixture payloads

## Output format

```markdown
# Provider Adapter Design: [provider]

## Phase / approval status
## Scope (inbound / outbound / webhooks)
## ChannelProvider methods affected
## Normalized event mapping
## Idempotency strategy
## Webhook validation
## ContactIdentity matching
## Files to create/change
## Tests (fixtures)
## Risks / out of scope
```

## Files may change

- `lib/integrations/providers/`
- `lib/integrations/shared/`
- `app/api/webhooks/` (thin handlers)
- Migration for provider_connections, raw_events, message uniqueness

## Must not change

- CRM domain models to fit provider shapes
- UI components to display raw provider JSON
- Do not implement direct integration before manual CRM MVP without explicit approval
