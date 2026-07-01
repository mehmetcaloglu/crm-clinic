import type { SupabaseClient } from "@supabase/supabase-js";

import type { Profile } from "@/lib/domain/workspace/types";

type DatabaseClient = SupabaseClient;

export class ProfileRepository {
  constructor(private readonly db: DatabaseClient) {}

  async getById(userId: string): Promise<Profile | null> {
    const { data, error } = await this.db
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (error) {
      throw new Error("Failed to load profile.");
    }

    return data;
  }
}
