import type { SupabaseClient } from "@supabase/supabase-js";

import type {
  Workspace,
  WorkspaceMember,
  WorkspaceRole,
  WorkspaceWithRole,
} from "@/lib/domain/workspace/types";

type DatabaseClient = SupabaseClient;

export class WorkspaceRepository {
  constructor(private readonly db: DatabaseClient) {}

  async listForUser(userId: string): Promise<WorkspaceWithRole[]> {
    const { data, error } = await this.db
      .from("workspace_members")
      .select(
        `
        role,
        workspaces (
          id,
          name,
          slug,
          created_at,
          updated_at
        )
      `,
      )
      .eq("user_id", userId);

    if (error) {
      throw new Error("Failed to load workspaces.");
    }

    return (data ?? [])
      .map((row) => {
        const workspaceRaw = row.workspaces;
        const workspace = (
          Array.isArray(workspaceRaw) ? workspaceRaw[0] : workspaceRaw
        ) as Workspace | null | undefined;
        if (!workspace) return null;
        return { ...workspace, role: row.role as WorkspaceRole };
      })
      .filter((item): item is WorkspaceWithRole => item !== null);
  }

  async getById(workspaceId: string): Promise<Workspace | null> {
    const { data, error } = await this.db
      .from("workspaces")
      .select("*")
      .eq("id", workspaceId)
      .maybeSingle();

    if (error) {
      throw new Error("Failed to load workspace.");
    }

    return data;
  }

  async getMembership(
    workspaceId: string,
    userId: string,
  ): Promise<WorkspaceMember | null> {
    const { data, error } = await this.db
      .from("workspace_members")
      .select("*")
      .eq("workspace_id", workspaceId)
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      throw new Error("Failed to load workspace membership.");
    }

    return data;
  }

  async createWorkspace(name: string, slug: string): Promise<string> {
    const { data, error } = await this.db.rpc("create_workspace", {
      p_name: name,
      p_slug: slug,
    });

    if (error) {
      throw new Error("Failed to create workspace.");
    }

    return data as string;
  }
}
