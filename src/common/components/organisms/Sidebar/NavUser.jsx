"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator
} from "@/common/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem
} from "@/common/components/ui/sidebar";
import { IconCreditCard, IconDotsVertical, IconLogout, IconNotification, IconUserCircle } from "@tabler/icons-react";
import DropdownIconItem from "../../atoms/DropDownMenu/DropdownIconItem";
import { UserButtonTrigger } from "../../molecules/Sidebar/UserButtonTrigger";
import { UserProfileCard } from "../../molecules/Sidebar/UserProfileCard";

export function NavUser({ user }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <UserButtonTrigger
            avatar={user.avatar}
            name={user.name}
            email={user.email}
            icon={IconDotsVertical}
          />
          <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg">
            <UserProfileCard user={user} />
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownIconItem icon={IconUserCircle}>Profile</DropdownIconItem>
              <DropdownIconItem icon={IconCreditCard}>Billing</DropdownIconItem>
              <DropdownIconItem icon={IconNotification}>Notifications</DropdownIconItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownIconItem icon={IconLogout}>Log out</DropdownIconItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}