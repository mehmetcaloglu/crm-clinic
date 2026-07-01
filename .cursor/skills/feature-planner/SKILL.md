---
name: feature-planner
description: Plan a CRM feature before implementation. Use when starting a new feature, phase task, or when the user asks for a plan without coding.
---

# Feature Planner

## Purpose

Produce an implementation plan for a single feature or small feature group before writing code.

## When to use

- Starting a new task from `docs/TASKS.md` or `docs/tasks/PHASE-*.md`
- User says "plan", "do not implement yet", or "what would we change?"
- Before large or cross-cutting work

## Inputs to inspect

- `AGENTS.md`, `docs/PROCESS.md`, `docs/TASKS.md`, `docs/DECISIONS.md`
- Relevant `docs/*.md` (architecture, data model, UX, security, testing)
- Existing code in affected areas (`app/`, `lib/`, `components/`)
- Current phase file under `docs/tasks/`

## Workflow

1. Confirm feature scope and phase (must align with MVP order — no early integrations)
2. Read related docs and existing code patterns
3. Identify assumptions and open questions
4. Map data model impact (tables, enums, RLS)
5. Map security/privacy impact (sensitive fields, workspace scope)
6. List files to inspect vs files to create/change
7. Define tests and manual checks
8. Break into ordered implementation steps (small, mergeable chunks)
9. Flag if approval is required before coding

## Output format

```markdown
# Feature Plan: [name]

## Summary
[1–3 sentences]

## Assumptions
- ...

## Open questions
- ...

## Files to inspect
- path/to/file

## Proposed files to change
- path/to/file — reason

## Data model impact
- ...

## Security / privacy impact
- ...

## Tests / checks
- ...

## Implementation steps
1. ...
2. ...

## Approval needed?
Yes/No — reason
```

## Files may change

- None during planning (read-only)
- After approval: files listed in the plan

## Must not change

- Application code during planning-only requests
- `docs/DECISIONS.md` unless a new decision is explicitly made
- Do not start WhatsApp/Instagram API work unless task and phase explicitly allow it
