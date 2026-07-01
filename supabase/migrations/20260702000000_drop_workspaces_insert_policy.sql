-- Restrict workspace creation to create_workspace() RPC only.
-- Direct INSERT on workspaces bypassed membership setup via the old policy.

drop policy if exists "workspaces_insert_authenticated" on public.workspaces;
