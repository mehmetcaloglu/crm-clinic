# Phase 0 — Foundation

## Goal

Projeyi güvenli, multi-tenant ve geliştirilebilir şekilde başlatmak.

## Tasks

### Project setup

- [x] Next.js App Router project oluştur
- [x] TypeScript strict mode
- [x] ESLint/Prettier ayarları
- [x] Tailwind kurulumu
- [x] shadcn/ui kurulumu
- [x] env example dosyası
- [x] README local setup bölümü

### Supabase/Auth

- [x] Supabase client/server setup
- [x] Auth pages
- [x] Login
- [x] Logout
- [x] Protected routes
- [x] Session loading state

### Workspace

- [x] workspaces migration
- [x] workspace_members migration
- [x] initial workspace creation flow
- [x] active workspace resolution
- [x] owner/admin/staff role enum or check

### Dashboard shell

- [x] Sidebar
- [x] Topbar
- [x] Mobile nav
- [x] Dashboard home
- [x] Settings placeholder
- [x] Loading skeletons
- [x] Empty states

### RLS/security

- [x] Enable RLS on workspace tables
- [x] Policy: member can read own workspace
- [x] Policy: owner/admin can manage members
- [ ] Cross-workspace read test (manual — see `supabase/tests/workspace_rls_test.sql`)
- [ ] Cross-workspace write test (manual — see `supabase/tests/workspace_rls_test.sql`)

## Acceptance criteria

- [x] User can sign in and sign out.
- [x] User can access dashboard only after login.
- [x] Workspace context is available in all dashboard pages.
- [ ] User cannot access another workspace's data (requires manual RLS test after migration).
- [x] Basic layout is responsive.

## Suggested Cursor prompt

```txt
Implement Phase 0 only.
Follow PROCESS.md and .cursor/rules.
Create the Next.js/Supabase foundation, workspace model, dashboard layout, and RLS tests.
Do not implement contacts yet.
Update TASKS.md, tasks/PHASE-0-foundation.md, and WORKLOG.md after finishing.
```
