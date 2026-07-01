---
name: db-migration-designer
description: Design Supabase/Postgres schema changes with workspace_id, RLS, indexes, and Contact/ContactIdentity separation. Use before writing migrations.
---

# DB Migration Designer

## Purpose

Design schema changes for Supabase/Postgres before creating migration files.

## When to use

- New tables, columns, enums, indexes, or RLS policies
- Contact/identity/conversation/message schema work
- Any tenant-owned data model change

## Inputs to inspect

- `docs/04-data-model.md`, `docs/03-architecture.md`, `docs/08-security-kvkk.md`
- `docs/DECISIONS.md` (ADR-003, ADR-007)
- Existing `supabase/migrations/` if present
- `lib/db/` repositories and types

## Workflow

1. State the feature requirement and affected entities
2. Draft tables/columns/enums with **`workspace_id`** on tenant tables
3. Separate **Contact** (person) from **ContactIdentity** (channel id) — never merge by name in schema logic
4. Add indexes for common queries (workspace + status, workspace + contact_id, etc.)
5. Add **unique constraints** for idempotency (e.g. external message ids)
6. Draft RLS policies: enable RLS, workspace membership check, role rules
7. Note rollback/backfill strategy and TypeScript type impact
8. List tests required (workspace isolation, identity match, duplicates)
9. Wait for approval before writing `supabase/migrations/*.sql`

## Output format

```markdown
# Migration Design: [name]

## Summary
## Tables / columns / enums
## Indexes
## Unique constraints
## RLS policies
## Contact / ContactIdentity notes
## Rollback / backfill
## TypeScript types affected
## Tests
## Migration filename suggestion
```

## Files may change

- `supabase/migrations/` (after approval)
- `lib/db/` types and repositories
- Domain types in `lib/domain/`

## Must not change

- UI components directly for schema design
- Provider adapter code unless migration is integration-specific
- Do not skip `workspace_id` or RLS on tenant tables
