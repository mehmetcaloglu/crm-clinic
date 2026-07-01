import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "@/components/states/page-states";
import { requireWorkspaceContext } from "@/lib/security/session";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const context = await requireWorkspaceContext();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome to {context.workspace.name}. Phase 1 will add contacts and follow-ups here.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Contacts</CardTitle>
            <CardDescription>Coming in Phase 1</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">—</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Follow-ups</CardTitle>
            <CardDescription>Coming in Phase 1</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">—</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Appointments</CardTitle>
            <CardDescription>Coming in Phase 2</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">—</p>
          </CardContent>
        </Card>
      </div>

      <EmptyState
        title="No activity yet"
        description="Your dashboard will show follow-ups and quick stats once manual CRM features are enabled."
      />
    </div>
  );
}
