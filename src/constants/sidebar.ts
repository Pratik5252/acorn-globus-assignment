import {
  Star,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";

export type FilterItem = {
  title: string;
  icon: LucideIcon;
};

export type NavItem = {
  title: string;
  url: string;
};

export type SubItem = {
  title: string;
  url: string;
  badge?: string;
  isActive?: boolean;
};

export type CollapsibleItem = {
  title: string;
  url?: string;
  isCollapsible?: boolean;
  subItems?: SubItem[];
};

export type SectionData = {
  title: string;
  items: CollapsibleItem[];
};

export const filterItems: FilterItem[] = [
  { title: "Starred", icon: Star },
  { title: "Recent", icon: RotateCcw },
];

export const mainNavItems: NavItem[] = [
  { title: "Sales list", url: "#" },
  { title: "Goals", url: "#" },
];

export const dashboardSubItems: CollapsibleItem[] = [
  { title: "Codename", url: "#" },
  {
    title: "Shared with me",
    url: "#",
    isCollapsible: true,
    subItems: [
      { title: "Cargo2go", url: "#" },
      { title: "Cloud3r", url: "#", badge: "2" },
      { title: "Idioma", url: "#" },
      { title: "Syllables", url: "#" },
      { title: "x-0b", url: "#" },
    ],
  },
];

export const reportsItems: CollapsibleItem[] = [
  {
    title: "Share with me",
    isCollapsible: true,
    subItems: [
      { title: "Deals by user", url: "#", isActive: false },
      { title: "Deal duration", url: "#", isActive: false },
    ],
  },
  {
    title: "My reports",
    isCollapsible: true,
    subItems: [
      { title: "Emails received", url: "#", isActive: false },
      { title: "Deal duration", url: "#", isActive: false },
      { title: "New report", url: "#", isActive: true },
      { title: "Analytics", url: "#", isActive: false, badge: "7" },
    ],
  },
];

export const sections: SectionData[] = [
  { title: "Dashboard", items: dashboardSubItems },
  { title: "Reports", items: reportsItems },
];
