# Worklog

Bu dosya yapılmış işleri kaydeder. Kod geliştikçe güncellenmelidir.

## 2026-07-01 — Phase 0 Foundation implementation

### Done

- Installed shadcn/ui (Tailwind v4) and Supabase SSR packages.
- Added folder structure: `lib/domain/`, `lib/db/`, `lib/security/`, `components/`.
- Supabase migration: `profiles`, `workspaces`, `workspace_members`, RLS policies, `create_workspace()` RPC.
- Auth flow: signup, login, logout, OAuth callback route, middleware-protected routes.
- Workspace onboarding: create workspace after signup; active workspace cookie resolution.
- Dashboard shell: sidebar, topbar, mobile sheet nav, placeholder pages (Dashboard, Contacts, Follow-ups, Appointments, Settings).
- Reusable `LoadingState`, `EmptyState`, `ErrorState` components.
- `.env.example`, README local setup, RLS test script at `supabase/tests/workspace_rls_test.sql`.

### Changed

- Root `app/page.tsx` redirects to login or dashboard.
- `README.md` updated with Supabase setup and project structure.

### Files changed (high level)

- `app/` — auth routes, dashboard routes, onboarding, actions, middleware
- `components/` — layout, states, shadcn UI
- `lib/` — domain services, db clients/repos, security helpers
- `supabase/migrations/20260701000000_phase0_foundation.sql`
- `docs/TASKS.md`, `docs/tasks/PHASE-0-foundation.md`, `docs/WORKLOG.md`

### Checks

- `npm run lint` — pass
- `npm run build` — pass (Next.js warns middleware → proxy deprecation)

### Manual checks (user)

- Create Supabase project and apply migration.
- Sign up, create workspace, sign in/out.
- Run RLS isolation tests from `supabase/tests/workspace_rls_test.sql`.

### Blocked

- RLS cross-workspace tests not run without live Supabase project.
- Email confirmation may be enabled in Supabase — disable for local dev or confirm via email.

### Next

- Phase 1: Contact + ContactIdentity models, manual CRM screens.
- Run manual RLS tests after Supabase migration.
- Consider migrating from `middleware.ts` to Next.js 16 `proxy` when documented pattern stabilizes.

---

## 2026-07-02 — Phase 0 code review security fixes

### Done

- Fixed open redirect in auth callback: `next` param validated via `getSafeRedirectPath()`.
- Added migration to drop `workspaces_insert_authenticated` RLS policy; workspace creation restricted to `create_workspace()` RPC.
- Fixed email confirmation flow: signup no longer redirects to onboarding when session is absent; UI shows verify-email message.
- Minor: login preserves `?next=` through sign-in redirect; signOut redirect moved to action layer; `active_workspace_id` cookie uses `secure` in production.

### Files changed

- `lib/security/redirect.ts` (new)
- `app/auth/callback/route.ts`
- `supabase/migrations/20260702000000_drop_workspaces_insert_policy.sql` (new)
- `supabase/tests/workspace_rls_test.sql`
- `lib/domain/auth/types.ts`, `lib/domain/auth/service.ts`
- `app/actions/auth.ts`
- `app/(auth)/login/page.tsx`, `app/(auth)/signup/page.tsx`
- `lib/domain/workspace/service.ts`

### Manual steps

- Apply new migration `20260702000000_drop_workspaces_insert_policy.sql` to Supabase (local and remote).

---

### Done

- Blueprint v2 hazırlandı.
- MVP stratejisi güncellendi:
  - Önce manuel CRM.
  - WhatsApp provider ile sonraki faz.
  - Instagram önce manuel/deep link.
  - Omnichannel/Meta API daha sonraki faz.
- Cursor rules, skills, commands, process ve task dokümanları oluşturuldu.
- Contact ve ContactIdentity ayrımı ana mimari karar olarak kaydedildi.
- Provider bağımsız `ChannelProvider` mimarisi dokümante edildi.

### Changed

- Önceki "Instagram + WhatsApp API hemen entegre edilsin" yaklaşımı yumuşatıldı.
- Ürün merkezi "mesaj inbox" değil, "fizyoterapist danışan takip CRM'i" olarak netleştirildi.
- WATI/respond.io/Chatwoot gibi araçlar ürün merkezi değil, validasyon veya kanal adaptörü olarak konumlandırıldı.

### Blocked

- Henüz gerçek provider seçilmedi.
- Henüz KVKK/hukuki süreç doğrulanmadı.
- Henüz hedef pilot müşteri listesi kesinleşmedi.

### Next

- ~~Cursor'da Phase 0 ve Phase 1 için plan çıkart.~~
- İlk API'siz CRM'i kodla (Phase 1).
- 5-10 fizyoterapistle özellik doğrulaması yap.
