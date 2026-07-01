---
name: code-review
description: Structured code review for CRM changes covering architecture, tenant isolation, data model, UX, and Next.js patterns. Use after implementation, before PR, or at phase completion.
---

# Code Review

## Purpose

Produce a structured, actionable code review for Physio CRM changes — not just bug hunting. Verify correctness, architecture alignment, and phase scope before merge or phase sign-off.

## When to use

- After completing an implementation session
- Before opening or merging a PR
- At phase completion (e.g. Phase 0 foundation, Phase 1 manual CRM)
- User says "code review", "review this diff", "merge öncesi kontrol", or "Phase X review"

## Related skills (do not duplicate)

| Skill | Use when |
|-------|----------|
| **privacy-security-reviewer** | Deep KVKK/auth/RLS/logging/secrets review — invoke for security-sensitive changes or run as a focused pass after this review |
| **qa-release-checklist** | Pre-deploy go/no-go, automated checks, manual QA walkthrough — run after fixes or before release |
| **review-bugbot** (Cursor) | Automated diff bug scan — optional complement for regression hunting |

This skill covers **breadth** (architecture, phase scope, UX, patterns). Escalate security-only concerns to **privacy-security-reviewer**; release readiness to **qa-release-checklist**.

## Inputs to inspect

- Changed files (`git diff`, `git status`, or user-specified scope)
- `AGENTS.md`, `docs/PROCESS.md`, `docs/TASKS.md`, `docs/DECISIONS.md`
- `.cursor/rules/20-architecture.mdc`, `30-data-model.mdc`, `40-security-kvkk.mdc`, `50-frontend-ux.mdc`
- Relevant `docs/03-architecture.md`, `docs/04-data-model.md`, `docs/08-security-kvkk.md`
- Current phase file under `docs/tasks/PHASE-*.md`
- Affected code in `app/`, `lib/domain/`, `lib/db/`, `lib/security/`, `components/`, `supabase/migrations/`

Optional commands (run when available; do not install packages):

```bash
git status --short
git diff --stat
npm run lint
npm run typecheck   # if configured
npm run build
npm test            # if configured
```

## Workflow

1. **Scope** — Identify task/phase, changed files, expected behavior
2. **Docs alignment** — Confirm changes match MVP order and current phase; no early WhatsApp/Instagram API work
3. **Architecture** — Layer flow respected: UI → actions/routes → domain → repositories; no business logic in UI; no provider payloads in domain/UI
4. **Data model** — `workspace_id` on tenant tables; Contact vs ContactIdentity separation; no unsafe auto-merge; idempotency where integrations apply
5. **Tenant isolation** — RLS policies + app-level workspace checks; role enforcement where relevant
6. **Security / privacy (surface level)** — No secrets; no sensitive data in logs/errors; flag items for **privacy-security-reviewer** if deep dive needed
7. **Frontend / UX** — Loading, empty, error states on changed screens; simple UX; App Router conventions (server vs client components, `"use server"`, layouts)
8. **Backend quality** — Input validation, safe error messages, scoped queries
9. **Tests / verification** — What was tested; what is missing; suggest manual checks
10. **Documentation** — WORKLOG/TASKS updated after implementation; DECISIONS/CHANGELOG only when appropriate
11. **Report** — Severity-tagged findings; do not fix code unless explicitly asked

## Review dimensions

| Dimension | Check |
|-----------|-------|
| Phase scope | Matches current phase; no forbidden early integrations |
| Architecture | Logic in `lib/domain/`; repos in `lib/db/`; UI is presentational |
| Provider boundaries | No WhatsApp/Instagram/Meta coupling in domain or UI |
| Tenant isolation | `workspace_id` + RLS; queries scoped; no cross-workspace reads/writes |
| Contact model | Contact ≠ ContactIdentity; match on channel id, not name |
| KVKK / sensitive data | Notes, phones, messages not logged; minimal exposure |
| UX states | Loading, empty, error on list/detail/form views |
| Next.js patterns | Correct server/client split; middleware/session refresh; no deprecated APIs without note |
| Migrations | RLS enabled; indexes; safe roll-forward; security definer functions scoped |

## Severity labels

| Label | Meaning | Examples |
|-------|---------|----------|
| **critical** | Must fix before merge/continue | Auth bypass, cross-workspace leak, secrets committed, broken build, schema contradicts Contact/ContactIdentity |
| **major** | Should fix before merge | Wrong business logic, missing validation on core flow, provider logic in domain, open redirect, RLS gap |
| **minor** | Fix soon, not necessarily blocking | Weak empty state, duplicate helper, missing non-critical test, layout inconsistency |
| **suggestion** | Nice-to-have | Naming, readability, minor UX polish, doc comment |

## Output format

```markdown
# Code Review: [scope]

## Summary
[1–3 sentences + verdict: Approved / Approved with notes / Changes requested / Blocked]

## Findings

### Critical
- **[critical]** `path/to/file.ts` — problem — recommended fix

### Major
- **[major]** ...

### Minor
- **[minor]** ...

### Suggestions
- **[suggestion]** ...

## Architecture notes
- ...

## Data model notes
- ...

## Manual test suggestions
- [ ] ...

## Escalate to other skills?
- privacy-security-reviewer: Yes/No — reason
- qa-release-checklist: Yes/No — reason

## Checks run
- lint: pass/fail/not run
- build: pass/fail/not run
- tests: ...
```

## Files may change

- `.cursor/skills/code-review/SKILL.md` (skill maintenance)
- `docs/reviews/YYYY-MM-DD-scope-review.md` — only when user asks to save the report

## Must not change

- Application code, migrations, or dependencies during review-only requests
- `docs/WORKLOG.md` / `docs/TASKS.md` unless user explicitly asks to record the review
- Do not weaken RLS or tenant checks to "make review pass"
- Do not start WhatsApp/Instagram API work

Fix findings only when the user explicitly says "fix these", "apply recommendations", or similar.
