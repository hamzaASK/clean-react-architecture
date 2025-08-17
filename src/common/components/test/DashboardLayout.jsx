// src/layouts/DashboardLayout.jsx
"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail
} from "@/common/components/ui/sidebar"

import {
  IconCamera,
  IconChartBar, IconDashboard, IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp, IconInnerShadowTop, IconListDetails,
  IconReport,
  IconSearch, IconSettings, IconUsers
} from "@tabler/icons-react"
import { NavDocuments } from "../organisms/Sidebar/NavDocuments"
import { NavMain } from "../organisms/Sidebar/NavMain"
import { NavSecondary } from "../organisms/Sidebar/NavSecondary"
import { SiteHeader } from "./SiteHeader"
import { NavUser } from "../organisms/Sidebar/NavUser"
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: '/test',
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: '/test',
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: '/test',
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: '/test',
      icon: IconFolder,
    },
    {
      title: "Team",
      url: '/test',
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: '/test',
      items: [
        {
          title: "Active Proposals",
          url: '/',
        },
        {
          title: "Archived",
          url: '/test',
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: '/test',
      items: [
        {
          title: "Active Proposals",
          url: '/test',
        },
        {
          title: "Archived",
          url: '/test',
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: '/test',
      items: [
        {
          title: "Active Proposals",
          url: '/test',
        },
        {
          title: "Archived",
          url: '/test',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: '/test',
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: '/test',
      icon: IconHelp,
    },
    {
      title: "Search",
      url: '/test',
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: '/test',
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: '/test',
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: '/test',
      icon: IconFileWord,
    },
  ],
}
export function DashboardLayout({ children }) {
  return (
    <SidebarProvider defaultOpen={true} style={{ "--sidebar-width": "260px", "--sidebar-width-mobile": "200px" }}>
      <Sidebar variant="inset" collapsible="icon" side="left">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/" className="flex items-center gap-2 p-2">
                  <IconInnerShadowTop className="size-5" />
                  <span className="font-semibold">My App</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavDocuments items={data.documents} />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={data.user} className="mt-auto" />
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <SiteHeader />
        <main className="p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
