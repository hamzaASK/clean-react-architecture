import { SidebarProvider, SidebarTrigger } from "@/common/components/ui/sidebar";
import AppSidebar from "@/common/components/organisms/Sidebar/AppSidebar";

export default function SidebarLayout({ children }) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <main className="flex-1 relative">
        <SidebarTrigger className="absolute top-4 left-4" />
        {children}
      </main>
    </SidebarProvider>
  );
}
