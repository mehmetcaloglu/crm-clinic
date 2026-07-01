import type { WorkspaceRole } from "@/lib/domain/workspace/types";
import { canManageMembers, canManageWorkspace } from "@/lib/domain/workspace/types";

export function assertWorkspaceRole(
  role: WorkspaceRole,
  allowed: WorkspaceRole[],
): boolean {
  return allowed.includes(role);
}

export function canInviteMembers(role: WorkspaceRole): boolean {
  return canManageMembers(role);
}

export function canEditWorkspaceSettings(role: WorkspaceRole): boolean {
  return canManageWorkspace(role);
}

export function isOwner(role: WorkspaceRole): boolean {
  return role === "owner";
}
