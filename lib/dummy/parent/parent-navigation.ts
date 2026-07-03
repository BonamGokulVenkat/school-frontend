export interface NavItem {
  title: string;
  href: string;
  icon: string;
}

export const parentNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/parent",
    icon: "LayoutDashboard",
  },
  {
    title: "Child Performance",
    href: "/parent/performance",
    icon: "TrendingUp",
  },
  {
    title: "Notifications",
    href: "/parent/notifications",
    icon: "Bell",
  },
  {
    title: "Attendance",
    href: "/parent/attendance",
    icon: "Calendar",
  },
  {
    title: "Messages",
    href: "/parent/messages",
    icon: "MessageSquare",
  },
  {
    title: "Settings",
    href: "/parent/settings",
    icon: "Settings",
  },
];