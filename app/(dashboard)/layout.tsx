import { Suspense } from "react";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { LoadingState } from "@/components/states/page-states";
import { requireUser } from "@/lib/security/session";
import { getWorkspaceService } from "@/lib/domain/workspace/service";

export const dynamic = "force-dynamic";

async function DashboardLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireUser();
  const workspaceService = await getWorkspaceService();
  const context = await workspaceService.getActiveWorkspaceContext();

  if (!context) {
    return <>{children}</>;
  }

  return (
    <DashboardShell
      workspaceName={context.workspace.name}
      userEmail={user.email ?? "user"}
    >
      {children}
    </DashboardShell>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <LoadingState title="Loading dashboard" />
        </div>
      }
    >
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </Suspense>
  );
}
