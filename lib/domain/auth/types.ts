export type AuthResult =
  | { success: true; requiresEmailConfirmation?: boolean; message?: string }
  | { success: false; error: string };

export type SignUpInput = {
  email: string;
  password: string;
  fullName: string;
};

export type SignInInput = {
  email: string;
  password: string;
  next?: string;
};
