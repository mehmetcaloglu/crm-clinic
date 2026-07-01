# Phase 2 — Physio-specific Features

## Goal

Ürünü fizyoterapist kullanımına özel hale getirmek.

## Tasks

### Appointments

- [ ] appointment_status enum
- [ ] appointments table
- [ ] create appointment action
- [ ] edit appointment action
- [ ] cancel appointment action
- [ ] complete appointment action
- [ ] appointment list page
- [ ] contact detail appointment section
- [ ] today/upcoming filters

### Treatment packages

- [ ] treatment_packages table
- [ ] package_sessions table
- [ ] create package action
- [ ] edit package action
- [ ] complete session action
- [ ] remaining sessions display
- [ ] package history
- [ ] package status active/completed/expired

### Appointment-package link

- [ ] On appointment complete, ask whether to deduct session
- [ ] Prevent used_sessions > total_sessions
- [ ] Create package_session log
- [ ] Allow correction/undo in admin flow

### Daily follow-up

- [ ] Dashboard "cevap bekleyenler"
- [ ] Contacts not contacted for X days
- [ ] Package near expiry list
- [ ] In-app digest

### Reports

- [ ] Active patients count
- [ ] Completed sessions this week
- [ ] Packages sold/active
- [ ] Revenue field if enabled

## Acceptance criteria

- [ ] User can create appointment from contact detail.
- [ ] User can create a 10-session package.
- [ ] Completing a session decreases remaining count with confirmation.
- [ ] Dashboard shows today/upcoming appointments.
- [ ] Reports are calculated from defined data, not hardcoded.

## Suggested Cursor prompt

```txt
Implement Phase 2 physio features only.
Add appointments, treatment packages, session deduction flow, and dashboard widgets.
Keep integration code out.
Update docs and tests.
```
