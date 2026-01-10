import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/Sidebar/AppSidebar"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider style={
        {
          "--sidebar-width": "320px",
          // "--sidebar-width-icon": "72px",
        } as React.CSSProperties
      }>
      <AppSidebar />
      <SidebarInset>
        <main className="w-full h-full">
          {/* <SidebarTrigger /> */}
          {children}
        </main>

      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout