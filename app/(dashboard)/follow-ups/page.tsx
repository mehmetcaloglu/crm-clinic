import { EmptyState } from "@/components/states/page-states";
import { requireWorkspaceContext } from "@/lib/security/session";

export const dynamic = "force-dynamic";

export default async function FollowUpsPage() {
  await requireWorkspaceContext();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Follow-ups</h1>
        <p className="text-sm text-muted-foreground">
          Pending replies and follow-up tasks will appear here in Phase 1.
        </p>
      </div>
      <EmptyState
        title="No follow-ups pending"
        description="When contacts need a reply, they will show up in this list."
      />
    </div>
  );
}
