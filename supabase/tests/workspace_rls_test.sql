-- Workspace RLS isolation tests (run manually in Supabase SQL editor or via supabase db test)
--
-- Prerequisites:
-- 1. Apply migrations 20260701000000_phase0_foundation.sql and
--    20260702000000_drop_workspaces_insert_policy.sql
-- 2. Create two test users (user_a, user_b) via Auth
-- 3. As user_a, call create_workspace('Clinic A', 'clinic-a-test')
-- 4. As user_b, call create_workspace('Clinic B', 'clinic-b-test')
--
-- Expected: user_a cannot read user_b workspace rows (0 rows), and vice versa.

-- Cross-workspace READ test (run as authenticated user A JWT context)
-- select * from public.workspaces where id = '<workspace_b_id>';
-- Expected: 0 rows

-- Cross-workspace WRITE test (run as authenticated user A JWT context)
-- update public.workspaces set name = 'Hacked' where id = '<workspace_b_id>';
-- Expected: 0 rows updated (RLS blocks)

-- Direct workspace INSERT test (should fail after drop_workspaces_insert_policy migration)
-- insert into public.workspaces (name, slug) values ('Orphan', 'orphan-test');
-- Expected: RLS violation — use create_workspace() RPC instead

-- Member management test
-- As staff member, attempt:
-- insert into public.workspace_members (workspace_id, user_id, role)
-- values ('<workspace_id>', '<another_user>', 'staff');
-- Expected: RLS violation unless caller is owner/admin
