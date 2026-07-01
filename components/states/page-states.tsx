import { AlertCircle, Inbox, Loader2 } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type LoadingStateProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function LoadingState({
  title = "Loading",
  description = "Please wait while we fetch your data.",
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 text-center",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <Loader2 className="size-8 animate-spin text-muted-foreground" />
      <div className="space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3" aria-hidden>
      {Array.from({ length: rows }).map((_, index) => (
        <Skeleton key={index} className="h-12 w-full" />
      ))}
    </div>
  );
}

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed py-16 text-center",
        className,
      )}
    >
      <Inbox className="size-10 text-muted-foreground" />
      <div className="max-w-sm space-y-1">
        <p className="text-sm font-medium">{title}</p>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

type ErrorStateProps = {
  title?: string;
  message?: string;
  action?: React.ReactNode;
  className?: string;
};

export function ErrorState({
  title = "Something went wrong",
  message = "We could not load this page. Please try again.",
  action,
  className,
}: ErrorStateProps) {
  return (
    <div className={cn("py-8", className)}>
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="space-y-3">
          <p>{message}</p>
          {action}
        </AlertDescription>
      </Alert>
    </div>
  );
}
