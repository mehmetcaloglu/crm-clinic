# Phase 1 — Manual CRM Core

## Goal

Gerçek API olmadan kullanılabilir danışan takip CRM'i çıkarmak.

## Tasks

### Data model

- [ ] contact_status enum
- [ ] channel enum
- [ ] identity_confidence enum
- [ ] contacts table
- [ ] contact_identities table
- [ ] contact_notes table
- [ ] conversations table
- [ ] messages table
- [ ] templates table
- [ ] RLS policies
- [ ] indexes and constraints
- [ ] seed demo data

### Contacts UI

- [ ] Contacts list page
- [ ] New contact form
- [ ] Edit contact form
- [ ] Contact detail page
- [ ] Source badge
- [ ] Status badge
- [ ] Tag UI
- [ ] Empty state

### Contact identities

- [ ] Phone identity create/update
- [ ] Instagram username identity create/update
- [ ] WhatsApp open link
- [ ] Instagram open link
- [ ] Manual identity confidence

### Notes

- [ ] Add note form
- [ ] Notes timeline
- [ ] Note type
- [ ] Edit/delete if permitted
- [ ] Sensitive-note UI warning

### Status pipeline

- [ ] Status dropdown
- [ ] Status update server action
- [ ] "Cevap bekleyenler" filter
- [ ] lost reason optional
- [ ] status change audit log

### Manual conversations/messages

- [ ] Add manual incoming/outgoing message
- [ ] Conversation timeline
- [ ] Direction badges
- [ ] Last message update

### Templates

- [ ] Template list
- [ ] Create/edit template
- [ ] Copy to clipboard
- [ ] Category filter

### Basic reports

- [ ] New contacts today
- [ ] Waiting replies count
- [ ] Appointments created placeholder or after Phase 2
- [ ] Source breakdown
- [ ] Conversion placeholder definitions

## Acceptance criteria

- [ ] A user can add a lead from Instagram or WhatsApp manually.
- [ ] A user can open WhatsApp/Instagram from contact detail.
- [ ] A user can add notes and change status.
- [ ] Waiting contacts are visible in dashboard.
- [ ] Templates can be copied.
- [ ] All queries are workspace-scoped.
- [ ] No provider-specific code is introduced.

## Suggested Cursor prompt

```txt
Implement Phase 1 manual CRM core only.
No real WhatsApp or Instagram API.
Use Contact and ContactIdentity separation.
Add migrations, RLS, pages, forms, server actions, and tests.
Update process docs after finishing.
```
