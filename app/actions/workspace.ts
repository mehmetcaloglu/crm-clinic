"use server";

import { redirect } from "next/navigation";

import { getWorkspaceService } from "@/lib/domain/workspace/service";

export async function createWorkspaceAction(formData: FormData) {
  const name = String(formData.get("name") ?? "");

  try {
    const workspaceService = await getWorkspaceService();
    await workspaceService.createWorkspace(name);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create workspace.";
    return { success: false as const, error: message };
  }

  redirect("/dashboard");
}
