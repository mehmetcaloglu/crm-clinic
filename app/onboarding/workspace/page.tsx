"use client";

import { useActionState } from "react";

import { createWorkspaceAction } from "@/app/actions/workspace";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = { success: false; error: string } | null;

async function workspaceAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = await createWorkspaceAction(formData);
  if (result && !result.success) {
    return result;
  }
  return null;
}

export default function WorkspaceOnboardingPage() {
  const [state, formAction, pending] = useActionState(workspaceAction, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create your workspace</CardTitle>
          <CardDescription>
            Set up your clinic workspace to start using Physio CRM.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            {state?.error ? (
              <Alert variant="destructive">
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            ) : null}
            <div className="space-y-2">
              <Label htmlFor="name">Clinic / workspace name</Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g. Ankara Physio Clinic"
                required
                minLength={2}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={pending}>
              {pending ? "Creating..." : "Create workspace"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
