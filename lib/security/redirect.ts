const DEFAULT_REDIRECT = "/dashboard";

/**
 * Validates a post-auth redirect target. Only same-origin relative paths are allowed.
 */
export function getSafeRedirectPath(
  next: string | null | undefined,
  fallback = DEFAULT_REDIRECT,
): string {
  if (!next) {
    return fallback;
  }

  if (!next.startsWith("/") || next.startsWith("//") || next.includes(":")) {
    return fallback;
  }

  return next;
}
