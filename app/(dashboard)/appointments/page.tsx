import { EmptyState } from "@/components/states/page-states";
import { requireWorkspaceContext } from "@/lib/security/session";

export const dynamic = "force-dynamic";

export default async function AppointmentsPage() {
  await requireWorkspaceContext();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Appointments</h1>
        <p className="text-sm text-muted-foreground">
          Appointment scheduling arrives in Phase 2.
        </p>
      </div>
      <EmptyState
        title="No appointments scheduled"
        description="Calendar and appointment management will be available soon."
      />
    </div>
  );
}
