# Phase 5 — Instagram API

## Goal

Talep kanıtlanırsa gerçek Instagram Messaging API entegrasyonu.

## Precondition

- Paying or serious pilot users requested Instagram sync.
- Meta app/app review plan exists.
- Test professional Instagram account available.
- Security/KVKK review done.

## Tasks

### Meta app setup

- [ ] Meta developer app
- [ ] required permissions list
- [ ] business verification status
- [ ] test Instagram professional account
- [ ] connect flow design
- [ ] App Review screen recordings plan

### OAuth/connect

- [ ] connect route
- [ ] callback route
- [ ] token storage
- [ ] token refresh/reconnect strategy
- [ ] provider_connections entry

### Webhook

- [ ] Instagram webhook endpoint
- [ ] verify challenge
- [ ] signature verification
- [ ] raw event storage
- [ ] inbound DM normalization
- [ ] idempotency

### Matching

- [ ] Instagram external user id identity
- [ ] username display
- [ ] suggested merge only if weak evidence
- [ ] manual merge UI if needed

### Outbound

- [ ] reply to conversation
- [ ] channel limits handling
- [ ] failed status handling
- [ ] external conversation link

### App Review

- [ ] screencast
- [ ] test credentials/process
- [ ] privacy policy
- [ ] data deletion instructions
- [ ] permission usage explanation

## Acceptance criteria

- [ ] Test Instagram account can connect.
- [ ] Inbound DMs appear in CRM.
- [ ] Reply works from CRM.
- [ ] Wrong-contact merge is prevented.
- [ ] App Review package is ready.

## Suggested Cursor prompt

```txt
Use provider-adapter-implementer skill.
Plan Instagram API integration first.
Do not implement until Meta requirements and App Review needs are listed.
Keep provider code isolated.
```
