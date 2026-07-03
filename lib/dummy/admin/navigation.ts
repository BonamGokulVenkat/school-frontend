export interface NavItem {
  title: string;
  href: string;
  icon: string;
  roles?: ("admin" | "teacher" | "student" | "parent")[];
  children?: NavItem[];
}

export const adminNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "LayoutDashboard",
  },
  {
    title: "Student Management",
    href: "/admin/students",
    icon: "Users",
  },
  {
    title: "Teacher Management",
    href: "/admin/teachers",
    icon: "UserCog",
  },
  {
    title: "Class Management",
    href: "/admin/classes",
    icon: "BookOpen",
  },
  {
    title: "Subject Management",
    href: "/admin/subjects",
    icon: "Book",
  },
  {
    title: "Timetable",
    href: "/admin/timetable",
    icon: "Calendar",
  },
  {
    title: "Reports & Analytics",
    href: "/admin/reports",
    icon: "BarChart",
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: "Settings",
  },
];