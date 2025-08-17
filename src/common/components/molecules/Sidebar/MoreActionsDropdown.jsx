import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/common/components/ui/dropdown-menu"; // adapte les imports si besoin
import { SidebarMenuAction } from "@/common/components/ui/sidebar"; // idem
import { IconDots } from "@tabler/icons-react";

export function MoreActionsDropdown({ actions }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuAction
          showOnHover
          className="data-[state=open]:bg-accent rounded-sm"
        >
          <IconDots />
          <span className="sr-only">More</span>
        </SidebarMenuAction>
      </DropdownMenuTrigger>

      {actions && <DropdownMenuContent className="w-24 rounded-lg">
        {actions.map((action, index) => (
          <React.Fragment key={index}>
            {action.separatorBefore && <DropdownMenuSeparator />}
            <DropdownMenuItem
              onClick={action.onClick}
              className={action.variant === "destructive" ? "text-red-600" : ""}
            >
              {action.icon}
              <span className="ml-2">{action.label}</span>
            </DropdownMenuItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>}
    </DropdownMenu>
  );
}
