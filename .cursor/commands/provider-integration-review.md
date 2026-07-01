# Provider Integration Review

Use the **provider-adapter-designer** skill. Read `docs/05-integration-strategy.md`, `docs/03-architecture.md`, ADR-004/005. **Review/design only** unless I explicitly approve implementation.

Scope:

```
[PASTE: Twilio WhatsApp / 360dialog / Chatwoot / Instagram manual / Meta Instagram API]
```

Verify: manual CRM MVP must be usable first. Adapter boundary intact. Normalized events. Idempotency. Webhook validation. No Meta/Twilio payload leakage into domain/UI.

Output: design summary, risks, files affected, tests with fixtures, go/no-go for implementation.

Do not start direct Meta API work without explicit approval.
