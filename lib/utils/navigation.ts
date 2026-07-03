export interface NavItem {
  title: string;
  href: string;
  icon: string;
  roles?: ("admin" | "teacher" | "student" | "parent")[];
  children?: NavItem[];
}

// Admin Navigation Items
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
    href: "/settings",
    icon: "Settings",
  },
];

// Teacher Navigation Items
export const teacherNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/teacher",
    icon: "LayoutDashboard",
  },
  {
    title: "Mark Attendance",
    href: "/teacher/attendance",
    icon: "CheckSquare",
  },
  {
    title: "Class Management",
    href: "/teacher/classes",
    icon: "BookOpen",
  },
  {
    title: "Assignments",
    href: "/teacher/assignments",
    icon: "FileText",
  },
  {
    title: "Grade Management",
    href: "/teacher/grades",
    icon: "Award",
  },
  {
    title: "Student Analytics",
    href: "/teacher/analytics",
    icon: "BarChart",
  },
  {
    title: "Profile",
    href: "/teacher/profile",
    icon: "User",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "Settings",
  },
];

// Student Navigation Items
export const studentNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/student",
    icon: "LayoutDashboard",
  },
  {
    title: "Attendance",
    href: "/student/attendance",
    icon: "CheckSquare",
  },
  {
    title: "Timetable",
    href: "/student/timetable",
    icon: "Calendar",
  },
  {
    title: "Results & Grades",
    href: "/student/results",
    icon: "Award",
  },
  {
    title: "Assignments",
    href: "/student/assignments",
    icon: "FileText",
  },
  {
    title: "Library",
    href: "/student/library",
    icon: "Book",
  },
  {
    title: "Profile",
    href: "/student/profile",
    icon: "User",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "Settings",
  },
];

// Parent Navigation Items
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
    href: "/settings",
    icon: "Settings",
  },
];

// Public Navigation Items
export const publicNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: "Home",
  },
  {
    title: "About",
    href: "/about",
    icon: "Info",
  },
  {
    title: "Faculty",
    href: "/faculty",
    icon: "Users",
  },
  {
    title: "Events",
    href: "/events",
    icon: "Calendar",
  },
  {
    title: "Admissions",
    href: "/admissions",
    icon: "UserPlus",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: "Phone",
  },
];

// Map of all navigation items by role
export const navItemsMap = {
  admin: adminNavItems,
  teacher: teacherNavItems,
  student: studentNavItems,
  parent: parentNavItems,
  public: publicNavItems,
};

// Helper function to get navigation items by role
export function getNavItemsByRole(role: "admin" | "teacher" | "student" | "parent" | "public" = "public") {
  return navItemsMap[role] || publicNavItems;
}

// Helper function to check if a route matches the current path
export function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === href;
  }
  return pathname === href || pathname?.startsWith(href + "/");
}

// Helper function to find a nav item by href
export function findNavItemByHref(items: NavItem[], href: string): NavItem | undefined {
  for (const item of items) {
    if (item.href === href) {
      return item;
    }
    if (item.children) {
      const found = findNavItemByHref(item.children, href);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}

// Helper function to get breadcrumb items from pathname
export function getBreadcrumbsFromPath(pathname: string): { label: string; href: string }[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { label, href };
  });
  
  // Add Home as first breadcrumb
  return [{ label: "Home", href: "/" }, ...breadcrumbs];
}

// Get user role from pathname
// Helper function to get user role from pathname
export function getUserRoleFromPath(pathname: string): "admin" | "teacher" | "student" | "parent" | "public" {
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/teacher")) return "teacher";
  if (pathname.startsWith("/student")) return "student";
  if (pathname.startsWith("/parent")) return "parent";
  // For settings, we use query param instead
  if (pathname.startsWith("/settings")) return "admin"; // Default fallback
  return "public";
}