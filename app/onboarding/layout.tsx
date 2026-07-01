import { redirect } from "next/navigation";

import { hasSupabaseEnv } from "@/lib/env";
import { getAuthService } from "@/lib/domain/auth/service";
import { getWorkspaceService } from "@/lib/domain/workspace/service";

export const dynamic = "force-dynamic";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!hasSupabaseEnv()) {
    redirect("/login");
  }

  const authService = await getAuthService();
  const user = await authService.getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const workspaceService = await getWorkspaceService();
  const context = await workspaceService.getActiveWorkspaceContext();

  if (context) {
    redirect("/dashboard");
  }

  return children;
}
