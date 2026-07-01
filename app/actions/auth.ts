"use server";

import { redirect } from "next/navigation";

import { getAuthService } from "@/lib/domain/auth/service";
import type { SignInInput, SignUpInput } from "@/lib/domain/auth/types";
import { getSafeRedirectPath } from "@/lib/security/redirect";

export async function signUpAction(input: SignUpInput) {
  const authService = await getAuthService();
  const result = await authService.signUp(input);

  if (!result.success || result.requiresEmailConfirmation) {
    return result;
  }

  redirect("/onboarding/workspace");
}

export async function signInAction(input: SignInInput) {
  const authService = await getAuthService();
  const result = await authService.signIn(input);

  if (!result.success) {
    return result;
  }

  redirect(getSafeRedirectPath(input.next));
}

export async function signOutAction() {
  const authService = await getAuthService();
  await authService.signOut();
  redirect("/login");
}
