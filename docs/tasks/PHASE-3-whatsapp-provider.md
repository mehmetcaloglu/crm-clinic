# Phase 3 — WhatsApp Provider Integration

## Goal

WhatsApp mesajlarını provider/BSP üzerinden CRM'e bağlamak.

## Precondition

- Phase 1 contacts/conversations/messages completed.
- Provider selected in `docs/06-provider-selection.md`.
- Credentials strategy decided.
- KVKK/security review done.

## Tasks

### Provider abstraction

- [ ] ChannelProvider interface
- [ ] NormalizedInboundMessageEvent type
- [ ] SendMessageInput/Result type
- [ ] Provider registry
- [ ] Provider-specific folder

### Provider connection

- [ ] provider_connections table
- [ ] encrypted credentials strategy
- [ ] settings UI placeholder
- [ ] connection status

### Webhook

- [ ] `/api/webhooks/channels/[provider]`
- [ ] verify webhook signature/token
- [ ] store raw_channel_events
- [ ] normalize payload
- [ ] idempotency check
- [ ] process errors safely

### Contact matching

- [ ] Normalize phone to E.164
- [ ] Match ContactIdentity by phone
- [ ] Create lead Contact if no match
- [ ] Create verified WhatsApp identity
- [ ] Never merge by name only

### Message handling

- [ ] Upsert conversation
- [ ] Insert incoming message
- [ ] Update last_inbound_message_at
- [ ] Set status new_message_waiting
- [ ] Add notification/task optional

### Outbound

- [ ] Send message action
- [ ] Check 24h window
- [ ] Save pending local message
- [ ] Call provider send
- [ ] Update status/external id
- [ ] Handle failed send

### Status webhooks

- [ ] delivered/read/failed mapping
- [ ] out-of-order handling
- [ ] raw event log link

### Tests

- [ ] webhook verification test
- [ ] inbound fixture test
- [ ] duplicate message test
- [ ] phone match test
- [ ] outbound success test
- [ ] outbound failure test
- [ ] workspace isolation test

## Acceptance criteria

- [ ] Inbound WhatsApp messages create or update CRM conversations.
- [ ] Same provider message id cannot create duplicates.
- [ ] Existing contact is matched by phone.
- [ ] CRM can send a WhatsApp reply when allowed.
- [ ] Provider payload does not leak into UI/domain.

## Suggested Cursor prompt

```txt
Use provider-adapter-implementer skill.
Implement WhatsApp provider integration for the selected provider only.
Follow ChannelProvider abstraction.
Add webhook idempotency and tests.
Do not implement Instagram.
Update process docs.
```
