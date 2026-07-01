---
name: frontend-builder
description: Plan and build CRM screens and components with simple UX, no business logic in UI, and loading/empty/error states. Use for dashboard, contacts, appointments, and related UI work.
---

# Frontend Builder

## Purpose

Plan and implement UI screens and components aligned with physio CRM UX priorities.

## When to use

- Building or updating a page in `app/` and its `components/`
- Adding forms, lists, detail views, or dashboard widgets
- Implementing loading/empty/error states

## Inputs to inspect

- `docs/09-ux-flows.md`, `.cursor/rules/50-frontend-ux.mdc`
- `docs/04-data-model.md` for field names and statuses
- Existing components in `components/` and layouts in `app/`
- Domain services in `lib/domain/` (call these, do not duplicate logic)

## Workflow

1. Identify screen and user flow (reference priority screens list)
2. List UI states: loading, empty, error, success
3. Sketch component tree (page → layout → feature components → shared UI)
4. Map user actions to server actions / domain service calls — **no business rules in components**
5. Plan form validation (client hints only; authoritative validation in domain/security)
6. Keep mobile-friendly layout; avoid over-design
7. Implement one screen or component group per step
8. Run lint/typecheck/build; document manual QA

## Output format (plan phase)

```markdown
# Screen Plan: [name]

## Route / path
## User goals
## Component tree
## Data dependencies (domain services)
## States: loading / empty / error
## Files to create/change
## Manual QA checklist
```

## Files may change

- `app/` routes and layouts
- `components/` feature and shared UI
- Server action **wiring** in `app/` (thin — delegate to `lib/domain/`)

## Must not change

- Business logic belongs in `lib/domain/`, not in components
- Do not embed provider payloads or Meta/Twilio types in UI
- Do not add integration features before manual CRM screens exist unless explicitly requested
