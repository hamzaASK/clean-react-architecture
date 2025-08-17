"use client";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/common/components/ui/sidebar";
import { IconFolder, IconShare3, IconTrash } from "@tabler/icons-react";
import { MoreActionsDropdown } from "../../molecules/Sidebar/MoreActionsDropdown";

export function NavDocuments({ items }) {
  const actions = [
    {
      icon: <IconFolder />,
      label: "Open",
      onClick: () => console.log("Open clicked"),
    },
    {
      icon: <IconShare3 />,
      label: "Share",
      onClick: () => console.log("Share clicked"),
    },
    {
      separatorBefore: true,
      icon: <IconTrash />,
      label: "Delete",
      variant: "destructive",
      onClick: () => console.log("Delete clicked"),
    },
  ]
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            {items?.actions && <MoreActionsDropdown actions={actions} />}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
