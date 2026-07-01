# Phase 4 — Instagram Manual / Pilot

## Goal

Instagram ihtiyacını hızlı test etmek ve API riskini ertelemek.

## Tasks

### Manual Instagram support

- [ ] Instagram username validation/sanitization
- [ ] Instagram profile open button
- [ ] Manual Instagram conversation entry
- [ ] Template copy flow
- [ ] Source filter improvements

### Feedback tracking

- [ ] Add field: integration_requested boolean or feedback notes
- [ ] Track how many users ask for real Instagram sync
- [ ] Track how often manual deep link is used

### Omnichannel pilot research

- [ ] Chatwoot evaluation
- [ ] respond.io evaluation
- [ ] WATI evaluation
- [ ] Manychat evaluation if automation-heavy users appear
- [ ] Data/KVKK risk comparison
- [ ] Cost comparison
- [ ] Exit plan

### Pilot PoC if selected

- [ ] Create Chatwoot/respond.io/WATI sandbox
- [ ] Connect test Instagram account
- [ ] Webhook/API event to CRM PoC
- [ ] Map external contact to ContactIdentity
- [ ] Decide continue/stop

## Acceptance criteria

- [ ] User can manage Instagram-sourced contacts manually.
- [ ] User can open Instagram profile quickly.
- [ ] Pilot provider decision is documented.
- [ ] No hard dependency on an omnichannel provider is introduced.

## Suggested Cursor prompt

```txt
Implement Phase 4 manual Instagram workflow only.
Add Instagram profile links, manual conversation logging, and feedback tracking.
Do not add Meta API yet.
Update docs.
```
