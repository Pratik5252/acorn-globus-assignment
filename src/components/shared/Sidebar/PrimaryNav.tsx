import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  icons: IconName;
  active?: boolean;
};

const navItems: NavItem[] = [
  { title: "path", icons: "globe", active: false },
  { title: "file-directory", icons: "folder-tree", active: true },
  { title: "file-text", icons: "file-text", active: false },
  { title: "command", icons: "command", active: false },
  { title: "Data", icons: "copy", active: false },
];

const footwrItems: NavItem[] = [
    { title: "Help", icons: "message-circle-question-mark", active: false },
  { title: "Settings", icons: "settings", active: false },
];

const PrimaryNav = () => {
  return (
    <Sidebar
      collapsible="none"
      className="w-[calc(var(--sidebar-width-icon)+44px)]!"
    >
      <SidebarHeader className="flex items-center justify-center pt-4 pb-4">
        <a href="/" >
          <img src="/icons/logo.svg" alt="Logo" className="w-9 h-9 border border-border-1 rounded-full"/>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="py-6">
          <SidebarGroupContent className="px-1.5 md:px-0 flex items-center justify-center">
            <SidebarMenu className="space-y-4 w-fit">
              {navItems.map((item, index) => (
                <SidebarMenuItem key={index} className="flex items-center justify-center">
                  <SidebarMenuButton className={`bg-secondary w-9 h-9 flex items-center justify-center rounded-full border border-border-1 cursor-pointer ${item.active ? " bg-accent w-12 h-12 hover:bg-accent/80 active:bg-accent/90" : "hover:bg-secondary/80"}`}>
                    <DynamicIcon
                      name={item.icons}
                      className={item.active ? "!w-5 !h-5" : "!w-4 !h-4"}
                      strokeWidth={1.5}
                      color={item.active ? "white" : "black"}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-2">
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0 flex items-center justify-center">
            <SidebarMenu className="space-y-4 w-fit">
              {footwrItems.map((item, index) => (
                <SidebarMenuItem key={index} className="relative flex items-center justify-center">
                  <SidebarMenuButton className="bg-secondary w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary/80 active:bg-secondary/90 border border-border-1">
                  {item.title === "Help" && <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white ring-4 ring-accent"/>}
                    <DynamicIcon
                      name={item.icons}
                      className="!w-4 !h-4"
                      strokeWidth={1.5}
                      color={item.active ? "white" : "black"}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default PrimaryNav;
