// src/components/site-header.jsx
import { Separator } from "@/common/components/ui/separator"
import { SidebarTrigger } from "@/common/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger className="rounded-full bg-stone-200 p-2 mb-4" />
      <Separator orientation="vertical" className="h-6 mx-2" />
      <h1 className="text-lg font-medium">Dashboard</h1>
      <div className="ml-auto flex items-center gap-2">
        {/* <ThemeSelector />
        <ModeToggle /> */}
      </div>
    </header>
  )
}
