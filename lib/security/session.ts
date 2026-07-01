import { redirect } from "next/navigation";

import { getAuthService } from "@/lib/domain/auth/service";
import { getWorkspaceService } from "@/lib/domain/workspace/service";
import type { WorkspaceContext } from "@/lib/domain/workspace/types";

export async function requireUser() {
  const authService = await getAuthService();
  const user = await authService.getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function requireWorkspaceContext(): Promise<WorkspaceContext> {
  await requireUser();

  const workspaceService = await getWorkspaceService();
  const context = await workspaceService.getActiveWorkspaceContext();

  if (!context) {
    redirect("/onboarding/workspace");
  }

  return context;
}
