import { createClient } from "@/lib/db/supabase/server";
import type {
  AuthResult,
  SignInInput,
  SignUpInput,
} from "@/lib/domain/auth/types";

function normalizeAuthError(message: string): string {
  if (message.includes("Invalid login credentials")) {
    return "Email or password is incorrect.";
  }
  if (message.includes("User already registered")) {
    return "An account with this email already exists.";
  }
  return "Authentication failed. Please try again.";
}

export class AuthService {
  async signUp(input: SignUpInput): Promise<AuthResult> {
    const email = input.email.trim().toLowerCase();
    const password = input.password;
    const fullName = input.fullName.trim();

    if (!email || !password) {
      return { success: false, error: "Email and password are required." };
    }

    if (password.length < 8) {
      return {
        success: false,
        error: "Password must be at least 8 characters.",
      };
    }

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      return { success: false, error: normalizeAuthError(error.message) };
    }

    if (!data.session) {
      return {
        success: true,
        requiresEmailConfirmation: true,
        message:
          "Check your email to verify your account, then sign in to continue.",
      };
    }

    return { success: true };
  }

  async signIn(input: SignInInput): Promise<AuthResult> {
    const email = input.email.trim().toLowerCase();
    const password = input.password;

    if (!email || !password) {
      return { success: false, error: "Email and password are required." };
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { success: false, error: normalizeAuthError(error.message) };
    }

    return { success: true };
  }

  async signOut(): Promise<void> {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }

  async getCurrentUser() {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  }
}

export async function getAuthService() {
  return new AuthService();
}
