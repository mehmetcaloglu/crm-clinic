"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  LayoutDashboard,
  MessageSquareWarning,
  Settings,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/contacts", label: "Contacts", icon: Users },
  { href: "/follow-ups", label: "Follow-ups", icon: MessageSquareWarning },
  { href: "/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

type SidebarNavProps = {
  onNavigate?: () => void;
  className?: string;
};

export function SidebarNav({ onNavigate, className }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col gap-1 p-2", className)}>
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const active =
          pathname === href || (href !== "/dashboard" && pathname.startsWith(href));

        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/70",
            )}
          >
            <Icon className="size-4 shrink-0" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export { NAV_ITEMS };
