# Design DB Migration

Use the **db-migration-designer** skill. Read `docs/04-data-model.md`, `docs/08-security-kvkk.md`, ADR-003/007 in `docs/DECISIONS.md`. **Do not write migration SQL yet.**

Design migration for:

```
[PASTE FEATURE OR TABLE CHANGE]
```

Include: tables/columns/enums, `workspace_id` on tenant tables, indexes, unique constraints (especially external message ids), RLS policies, Contact/ContactIdentity separation, rollback notes, TypeScript impact, tests.

Wait for my approval before creating files under `supabase/migrations/`.
