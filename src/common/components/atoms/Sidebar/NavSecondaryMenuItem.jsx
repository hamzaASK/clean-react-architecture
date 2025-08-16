import React from 'react'
import { SidebarMenuButton, SidebarMenuItem } from '@/common/components/ui/sidebar'

export default function NavMainMenuItem({item={}}) {
    return (
        <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}
