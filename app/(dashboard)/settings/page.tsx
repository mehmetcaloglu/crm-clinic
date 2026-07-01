import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { requireWorkspaceContext } from "@/lib/security/session";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const context = await requireWorkspaceContext();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Workspace and account settings placeholder for Phase 0.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Workspace</CardTitle>
          <CardDescription>Active clinic workspace</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <span className="text-muted-foreground">Name:</span>{" "}
            {context.workspace.name}
          </p>
          <p>
            <span className="text-muted-foreground">Your role:</span>{" "}
            {context.role}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
