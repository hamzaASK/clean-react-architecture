"use client";
import React from "react";
import { IconCreditCard, IconDotsVertical, IconLogout, IconNotification, IconUserCircle } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/components/ui/dropdown-menu";
import { UserAvatar } from "@/common/components/atoms/Image/UserAvatar";
import { UserInfo } from "@/common/components/molecules/Sidebar/UserInfo";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/common/components/ui/sidebar";
import DropdownIconItem from "../../atoms/DropDownMenu/DropdownIconItem";
import { UserProfileCard } from "../../molecules/Sidebar/UserProfileCard";
import { UserButtonTrigger } from "../../molecules/Sidebar/UserButtonTrigger";

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