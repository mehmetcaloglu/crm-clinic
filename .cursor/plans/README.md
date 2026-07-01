# Plans

Store implementation plans here before coding. Cursor Plan mode or **feature-planner** output can be saved as dated markdown files.

## Naming

```txt
YYYY-MM-DD-phase-N-feature-name.md
```

Example: `2026-07-01-phase-1-contact-list.md`

## Contents

Each plan should include: summary, assumptions, files to change, data model impact, security impact, tests, implementation steps, and approval status.

## Rules

- Plans are read-only references until approved
- After implementation, link the plan from `docs/WORKLOG.md`
- Do not store secrets or env values in plan files

See also: `.cursor/commands/plan-next-feature.md`, `docs/PROCESS.md` (Agent Workflow)
