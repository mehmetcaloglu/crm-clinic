import { cookies } from "next/headers";

import { createClient } from "@/lib/db/supabase/server";
import { ProfileRepository } from "@/lib/db/repositories/profile-repository";
import { WorkspaceRepository } from "@/lib/db/repositories/workspace-repository";
import type { WorkspaceContext } from "@/lib/domain/workspace/types";

export const ACTIVE_WORKSPACE_COOKIE = "active_workspace_id";

export class WorkspaceService {
  constructor(
    private readonly workspaceRepo: WorkspaceRepository,
    private readonly profileRepo: ProfileRepository,
  ) {}

  async listWorkspacesForCurrentUser() {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return [];
    }

    return this.workspaceRepo.listForUser(user.id);
  }

  async getActiveWorkspaceContext(): Promise<WorkspaceContext | null> {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    const workspaces = await this.workspaceRepo.listForUser(user.id);
    if (workspaces.length === 0) {
      return null;
    }

    const cookieStore = await cookies();
    const preferredId = cookieStore.get(ACTIVE_WORKSPACE_COOKIE)?.value;
    const active =
      workspaces.find((workspace) => workspace.id === preferredId) ??
      workspaces[0];

    return {
      workspace: active,
      role: active.role,
      userId: user.id,
    };
  }

  async createWorkspace(name: string) {
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      throw new Error("Workspace name must be at least 2 characters.");
    }

    const slug = trimmed
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48);

    if (!slug) {
      throw new Error("Workspace name must include letters or numbers.");
    }

    const uniqueSlug = `${slug}-${crypto.randomUUID().slice(0, 8)}`;
    const workspaceId = await this.workspaceRepo.createWorkspace(
      trimmed,
      uniqueSlug,
    );

    const cookieStore = await cookies();
    cookieStore.set(ACTIVE_WORKSPACE_COOKIE, workspaceId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return workspaceId;
  }

  async getCurrentUserProfile() {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    return this.profileRepo.getById(user.id);
  }
}

export async function getWorkspaceService() {
  const supabase = await createClient();
  return new WorkspaceService(
    new WorkspaceRepository(supabase),
    new ProfileRepository(supabase),
  );
}
