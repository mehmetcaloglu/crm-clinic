import { EmptyState } from "@/components/states/page-states";
import { requireWorkspaceContext } from "@/lib/security/session";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  await requireWorkspaceContext();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Contacts</h1>
        <p className="text-sm text-muted-foreground">
          Contact list and detail views will be added in Phase 1.
        </p>
      </div>
      <EmptyState
        title="No contacts yet"
        description="Create and manage client records here in the next phase."
      />
    </div>
  );
}
