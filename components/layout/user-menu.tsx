"use client";

import { LogOut } from "lucide-react";

import { signOutAction } from "@/app/actions/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserMenuProps = {
  email: string;
};

function initialsFromEmail(email: string) {
  const local = email.split("@")[0] ?? "U";
  return local.slice(0, 2).toUpperCase();
}

export function UserMenu({ email }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" className="gap-2 px-2">
            <Avatar className="size-7">
              <AvatarFallback className="text-xs">
                {initialsFromEmail(email)}
              </AvatarFallback>
            </Avatar>
            <span className="hidden max-w-[160px] truncate text-sm sm:inline">
              {email}
            </span>
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Signed in as</DropdownMenuLabel>
        <DropdownMenuItem disabled className="truncate text-xs">
          {email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            void signOutAction();
          }}
        >
          <LogOut className="size-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
