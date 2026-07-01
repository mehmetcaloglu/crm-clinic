export type WorkspaceRole = "owner" | "admin" | "staff";

export type Profile = {
  id: string;
  full_name: string | null;
  created_at: string;
  updated_at: string;
};

export type Workspace = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type WorkspaceMember = {
  id: string;
  workspace_id: string;
  user_id: string;
  role: WorkspaceRole;
  created_at: string;
  updated_at: string;
};

export type WorkspaceWithRole = Workspace & {
  role: WorkspaceRole;
};

export type WorkspaceContext = {
  workspace: Workspace;
  role: WorkspaceRole;
  userId: string;
};

export const WORKSPACE_ROLES: WorkspaceRole[] = ["owner", "admin", "staff"];

export function canManageMembers(role: WorkspaceRole): boolean {
  return role === "owner" || role === "admin";
}

export function canManageWorkspace(role: WorkspaceRole): boolean {
  return role === "owner" || role === "admin";
}
