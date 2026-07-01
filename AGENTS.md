# Agent Guide — Physio CRM

This file is the **main source of truth** for AI agent behavior in this repository.

## Project

Physiotherapist-focused mini CRM SaaS. Core domain: contacts, notes, statuses, appointments, session packages, follow-ups, reports. WhatsApp and Instagram are **provider adapters**, not the center of the domain model.

**MVP order:** Manual CRM → WhatsApp BSP/provider → Instagram manual/deep link → Instagram API/omnichannel pilot → automation/AI.

**Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Supabase Postgres/Auth (planned), Vercel (planned).

## Next.js note

This is NOT the Next.js you know. APIs and conventions may differ from training data. Read guides in `node_modules/next/dist/docs/` before writing Next.js code. Heed deprecation notices.

## Where to read first

| Resource | Purpose |
|----------|---------|
| `docs/PROCESS.md` | Workflow, Definition of Done, agent workflow |
| `docs/TASKS.md` | Global task board and current priority |
| `docs/DECISIONS.md` | ADRs — product and architecture decisions |
| `docs/WORKLOG.md` | What was done, blockers, next steps |
| `docs/README.md` | Product blueprint and doc index |
| `README.md` (repo root) | Next.js scaffold only — not product docs |
| `.cursor/rules/*.mdc` | Always-on project rules |
| `.cursor/skills/*/SKILL.md` | Reusable workflows |
| `.cursor/commands/*.md` | Copy-paste Composer prompts |

Phase checklists live in **`docs/tasks/PHASE-*.md`** (not `tasks/` at repo root).

## Documentation source of truth

When docs conflict, prefer in this order:

1. **`docs/DECISIONS.md`** — binding product/architecture decisions
2. **`docs/04-data-model.md`**, **`docs/03-architecture.md`** — schema and structure
3. **`docs/TASKS.md`** + **`docs/tasks/PHASE-*.md`** — current work
4. **`docs/PROCESS.md`** — how to work
5. **`docs/12-cursor-workflow.md`** — Cursor-specific prompts (supplements PROCESS; commands in `.cursor/commands/` are the canonical prompt files)
6. **`docs/single-summary.md`** — read-only concatenated export; do not edit for process updates

**Duplicate paths:** Some files exist under both `docs/` and `docs/docs/` (nested copy). Prefer `docs/` at repo root; ignore `docs/docs/` unless reconciling exports.

## When to update docs

| File | Update when |
|------|-------------|
| `docs/WORKLOG.md` | After every completed work session |
| `docs/TASKS.md` | After every completed work session |
| `docs/tasks/PHASE-*.md` | When a phase checklist item is done or added |
| `docs/DECISIONS.md` | When a product or technical **decision changes** (new ADR) |
| `docs/CHANGELOG.md` | When **user-visible behavior** changes |
| `docs/PROCESS.md` | When workflow or Definition of Done changes |

Use the **process-updater** skill or **update-process-docs** command at session end.

## Default behavior

1. Read relevant docs before planning or coding.
2. For non-trivial work: short plan → list files → get approval if large → implement small steps → run checks → update docs.
3. Do **not** implement WhatsApp/Instagram API integration until manual CRM MVP is usable (see ADR-002, ADR-005).
4. Business logic in `lib/domain/`; provider code in `lib/integrations/`; no provider payloads in UI.
5. Do not install packages or change `app/` unless the task requires it.
6. Do not commit secrets.

## Subagent usage

Subagents may **plan, review, QA, update docs**, or **write code for isolated scoped tasks** under the Subagent Coding Policy (see `docs/PROCESS.md` and `.cursor/rules/10-process.mdc`).

### Coordination

- **Main agent coordinates** — owns the plan, file allowlist, approvals, and final integration.
- Before a coding subagent runs, assign **explicit allowed files or folders**.
- **No parallel edits** — multiple subagents must not edit the same files simultaneously.
- **Main agent reviews** every coding subagent report before continuing.

### Coding subagent report (required)

After a coding subagent finishes:

- files changed
- summary of changes
- assumptions made
- checks/tests run
- risks or follow-up tasks

### Good tasks

Build one UI component; one page after plan approval; tests for one feature; docs/process updates; one provider adapter mock; refactor one isolated module.

### Bad tasks (require main agent + approved plan)

Schema + UI + auth together; broad architecture changes; early WhatsApp/Instagram API; auto-merge contacts; files another agent is editing.

### Read-only subagents

Explore, feature planning, security review, and provider design review — use freely without file allowlists when not writing code.


## Forbidden without explicit approval

- Direct Meta WhatsApp/Instagram API implementation
- Auto-merge contacts across channels by name
- AI medical advice or auto-send without human approval
- Skipping workspace/RLS scoping on tenant data

## Quick commands

Copy prompts from `.cursor/commands/` into Composer, or invoke matching skills under `.cursor/skills/`.
