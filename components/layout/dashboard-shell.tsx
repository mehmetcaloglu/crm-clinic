"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { SidebarNav } from "@/components/layout/sidebar-nav";
import { UserMenu } from "@/components/layout/user-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type DashboardShellProps = {
  workspaceName: string;
  userEmail: string;
  children: React.ReactNode;
};

export function DashboardShell({
  workspaceName,
  userEmail,
  children,
}: DashboardShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 shrink-0 border-r bg-sidebar md:flex md:flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="font-semibold tracking-tight">
            Physio CRM
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          <SidebarNav />
        </div>
        <div className="border-t p-4 text-xs text-muted-foreground">
          {workspaceName}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center gap-3">
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="border-b px-4 py-3 text-left">
                  <SheetTitle>Physio CRM</SheetTitle>
                </SheetHeader>
                <SidebarNav onNavigate={() => setMobileNavOpen(false)} />
                <div className="absolute bottom-0 w-full border-t p-4 text-xs text-muted-foreground">
                  {workspaceName}
                </div>
              </SheetContent>
            </Sheet>
            <div className="md:hidden">
              <p className="text-sm font-medium">Physio CRM</p>
              <p className="text-xs text-muted-foreground">{workspaceName}</p>
            </div>
          </div>
          <UserMenu email={userEmail} />
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
