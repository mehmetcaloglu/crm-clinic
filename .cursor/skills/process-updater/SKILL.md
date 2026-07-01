---
name: process-updater
description: Update WORKLOG, TASKS, DECISIONS, and CHANGELOG after completed work. Use at the end of implementation sessions or when user asks to sync docs.
---

# Process Updater

## Purpose

Keep project process documentation accurate after completed work without over-updating.

## When to use

- End of any implementation session
- User runs **update-process-docs** command
- Before ending a multi-step task

## Inputs to inspect

- Git diff or summary of what was done
- `docs/TASKS.md` and relevant `docs/tasks/PHASE-*.md`
- `docs/WORKLOG.md`, `docs/DECISIONS.md`, `docs/CHANGELOG.md`, `docs/PROCESS.md`
- `.cursor/rules/80-docs-worklog.mdc`

## Workflow

1. Summarize completed work, in-progress items, and blockers
2. Update `docs/WORKLOG.md` — new dated section: Done / Changed / Blocked / Next
3. Update `docs/TASKS.md` — check off or add tasks; sync phase file checkboxes
4. Update `docs/DECISIONS.md` **only** if a product/technical decision changed (new ADR entry)
5. Update `docs/CHANGELOG.md` **only** if user-visible behavior changed
6. Update `docs/PROCESS.md` **only** if workflow changed
7. Do not duplicate content across files — cross-link where helpful

## Output format

Brief summary to user:

```markdown
## Docs updated
- WORKLOG.md — ...
- TASKS.md — ...
- (others if applicable)

## Still open
- ...
```

## Files may change

- `docs/WORKLOG.md`
- `docs/TASKS.md`
- `docs/tasks/PHASE-*.md`
- `docs/DECISIONS.md` (decisions only)
- `docs/CHANGELOG.md` (user-visible only)
- `docs/PROCESS.md` (workflow only)
- `docs/14-open-questions.md` if new blockers surfaced

## Must not change

- Application code under `app/`, `lib/`, `components/` unless explicitly part of the task
- Do not mark tasks done without evidence of completion
- Do not add CHANGELOG entries for internal/docs-only changes
