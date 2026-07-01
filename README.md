# Physio CRM

Physiotherapist-focused mini CRM SaaS. Phase 0 provides auth, multi-tenant workspaces, and the dashboard shell.

## Stack

- Next.js 16 (App Router), React, TypeScript, Tailwind CSS, shadcn/ui
- Supabase (Postgres, Auth, RLS)

## Local setup

### 1. Install dependencies

```bash
npm install
```

### 2. Supabase project

1. Create a project at [supabase.com/dashboard](https://supabase.com/dashboard).
2. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Apply the database migration:
   - **SQL Editor:** paste and run `supabase/migrations/20260701000000_phase0_foundation.sql`
   - **Or CLI:** `supabase db push` (after `supabase link`)

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Sign up, create a workspace, and access the dashboard.

### 4. Quality checks

```bash
npm run lint
npm run build
```

## Project structure

```txt
app/           Routes, layouts, server actions
components/    UI and layout components
lib/domain/    Business logic
lib/db/        Supabase clients and repositories
lib/security/  Session and permission helpers
supabase/      Migrations and RLS tests
```

See `AGENTS.md` and `docs/` for product and process documentation.

## Manual RLS verification

After migration, run scenarios in `supabase/tests/workspace_rls_test.sql` with two test users to confirm cross-workspace isolation.
