import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 p-4">
      <div className="mb-8 text-center">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Physio CRM
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage clients, follow-ups, and appointments
        </p>
      </div>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
