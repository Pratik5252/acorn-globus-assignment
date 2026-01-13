import * as React from "react"
import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/Sidebar/AppSidebar"

const SidebarInitializer = () => {
  const { setOpen } = useSidebar()
  
  React.useEffect(() => {
    const isLarge = window.innerWidth >= 1024
    setOpen(isLarge)
  }, [])

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = (e: MediaQueryListEvent) => {
      setOpen(e.matches)
    }
    
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [setOpen])

  return null
}

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider 
      style={
        {
          "--sidebar-width": "320px",
          "--sidebar-width-icon": "64px",
        } as React.CSSProperties
      }>
      <SidebarInitializer />
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