import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  ChevronDown,
  Plus,
  FileStack,
} from "lucide-react";

import {type SectionData,sections,filterItems,mainNavItems} from '../../../constants/sidebar'

const CollapsibleSection = ({ title, items }: SectionData) => (
  <SidebarGroup>
    <SidebarGroupLabel className="flex items-center justify-between text-primary text-sm">
      {title}
      <SidebarGroupAction className="bg-secondary">
        <Plus className="w-4 h-4 text-muted-foreground" />
        <span className="sr-only">Add {title}</span>
      </SidebarGroupAction>
    </SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleContent>
              <SidebarMenuSub className="pr-0 mr-0 ml-2 border-border-2 overflow-hidden">
                {items.map((item) =>
                  item.isCollapsible ? (
                    <Collapsible
                      key={item.title}
                      defaultOpen={false}
                      className="group/nested"
                    >
                      <SidebarMenuSubItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuSubButton className="relative cursor-pointer overflow-visible">
                            <div className="z-10 absolute w-3 h-[1px] top-1/2 -left-2.5 border-t border-border-2"/>
                            <span>{item.title}</span>
                            <ChevronDown className="text-muted-foreground! ml-auto w-3 h-3 transition-transform group-data-[state=open]/nested:rotate-180" />
                          </SidebarMenuSubButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="pr-0 mr-0 ml-2 border-border-2 overflow-hidden">
                            {item.subItems?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className="justify-between relative overflow-visible"
                                >
                                  <a
                                    href={subItem.url}
                                  >
                                    <div className="z-10 absolute w-3 h-[1px] top-1/2 -left-2.5 border-t border-border-2"/>
                                    <span className={subItem.isHighlighted ? "text-accent" : ""}>{subItem.title}</span>
                                    {subItem.badge && (
                                      <SidebarMenuBadge className="bg-accent text-white text-xs rounded-sm px-1.5">
                                        {subItem.badge}
                                      </SidebarMenuBadge>
                                    )}
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuSubItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuSubItem key={item.title} >
                      <SidebarMenuSubButton asChild className="relative overflow-visible">
                        <a href={item.url}>
                            <div className="z-10 absolute w-3 h-[1px] top-1/2 -left-2.5 border-t border-border-2"/>
                            {item.title}</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  )
                )}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const SecondaryContextNav = () => {
  return (
    <Sidebar collapsible="none" className="hidden flex-1 md:flex">
      <SidebarHeader className="p-4 py-8">
        <button className="flex items-center gap-1 font-semibold text-base hover:opacity-80 transition-opacity">
          Codename.com
          <ChevronDown className="w-4 h-4 text-muted-foreground inline-block ml-1" />
        </button>
      </SidebarHeader>

      <SidebarContent className="gap-0 font-medium">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {filterItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors py-0">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="py-0">
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {sections.map((section) => (
          <CollapsibleSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}

        <SidebarGroup className="py-3">
          <SidebarGroupContent>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <FileStack className="w-4 h-4" />
              Manage folders
            </button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SecondaryContextNav;
