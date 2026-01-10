import * as React from "react"
import {Sidebar} from "@/components/ui/sidebar"
import PrimaryNav from "./PrimaryNav"
import SecondaryContextNav from "./SecondaryContextNav"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar
      collapsible="icon"
      
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row border-none"
      {...props}
    >
      <PrimaryNav/>
      <SecondaryContextNav/>
    </Sidebar>
  )
}
