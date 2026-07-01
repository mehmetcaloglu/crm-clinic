# Phase 0 — Foundation

## Goal

Projeyi güvenli, multi-tenant ve geliştirilebilir şekilde başlatmak.

## Tasks

### Project setup

- [ ] Next.js App Router project oluştur
- [ ] TypeScript strict mode
- [ ] ESLint/Prettier ayarları
- [ ] Tailwind kurulumu
- [ ] shadcn/ui kurulumu
- [ ] env example dosyası
- [ ] README local setup bölümü

### Supabase/Auth

- [ ] Supabase client/server setup
- [ ] Auth pages
- [ ] Login
- [ ] Logout
- [ ] Protected routes
- [ ] Session loading state

### Workspace

- [ ] workspaces migration
- [ ] workspace_members migration
- [ ] initial workspace creation flow
- [ ] active workspace resolution
- [ ] owner/admin/staff role enum or check

### Dashboard shell

- [ ] Sidebar
- [ ] Topbar
- [ ] Mobile nav
- [ ] Dashboard home
- [ ] Settings placeholder
- [ ] Loading skeletons
- [ ] Empty states

### RLS/security

- [ ] Enable RLS on workspace tables
- [ ] Policy: member can read own workspace
- [ ] Policy: owner/admin can manage members
- [ ] Cross-workspace read test
- [ ] Cross-workspace write test

## Acceptance criteria

- [ ] User can sign in and sign out.
- [ ] User can access dashboard only after login.
- [ ] Workspace context is available in all dashboard pages.
- [ ] User cannot access another workspace's data.
- [ ] Basic layout is responsive.

## Suggested Cursor prompt

```txt
Implement Phase 0 only.
Follow PROCESS.md and .cursor/rules.
Create the Next.js/Supabase foundation, workspace model, dashboard layout, and RLS tests.
Do not implement contacts yet.
Update TASKS.md, tasks/PHASE-0-foundation.md, and WORKLOG.md after finishing.
```
