---
name: qa-release-checklist
description: Run pre-release QA checks and summarize risks for physio CRM MVP releases. Use before deploy or phase completion.
---

# QA Release Checklist

## Purpose

Verify release readiness and summarize remaining risks before deploy or phase sign-off.

## When to use

- End of Phase 0, 1, or 2
- Before production/staging deploy
- User asks for release checklist or go/no-go

## Inputs to inspect

- `docs/PROCESS.md` MVP checklist section
- `docs/11-testing-strategy.md`
- `docs/TASKS.md` and relevant `docs/tasks/PHASE-*.md`
- Recent `docs/WORKLOG.md` entries
- Test results from `npm run lint`, `build`, `test`

## Workflow

1. Run automated checks (typecheck, lint, build, tests if available)
2. Walk critical manual scenarios from testing strategy
3. Verify workspace isolation was tested or documented
4. Verify contact/identity, status, appointment/package flows
5. Check error/empty/loading states on priority screens
6. Confirm no secrets in repo; env vars documented
7. Confirm KVKK placeholder / privacy notes if user-facing
8. List open blockers and risk severity
9. Update WORKLOG with QA summary if requested

## Output format

```markdown
# Release Checklist: [version/phase]

## Automated checks
- [ ] typecheck
- [ ] lint
- [ ] build
- [ ] tests

## Manual QA
- [ ] login/logout
- [ ] workspace isolation
- [ ] contact CRUD
- [ ] notes / status pipeline
- [ ] appointments / packages (if in scope)
- [ ] empty/error states

## Security / privacy
- [ ] no sensitive logs
- [ ] RLS verified
- [ ] secrets not committed

## Risks / blockers
- ...

## Go / no-go
Recommendation: ...
```

## Files may change

- `docs/WORKLOG.md` (QA summary)
- `docs/TASKS.md` (mark verification items)

## Must not change

- Application code unless fixing a blocker found during QA and explicitly requested
- Do not skip workspace isolation verification
