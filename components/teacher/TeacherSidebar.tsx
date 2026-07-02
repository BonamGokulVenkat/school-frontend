"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  FileText,
  BarChart,
  Settings,
  LogOut,
  User,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teacherDashboardData } from "@/lib/dummy/teacher/teacher-dashboard-data";

const navItems = [
  { href: "/teacher", label: "Dashboard", icon: LayoutDashboard },
  { href: "/teacher/attendance", label: "Mark Attendance", icon: Calendar },
  { href: "/teacher/classes", label: "Class Management", icon: BookOpen },
  { href: "/teacher/assignments", label: "Assignments", icon: FileText },
  { href: "/teacher/grades", label: "Grade Management", icon: GraduationCap },
  { href: "/teacher/analytics", label: "Analytics", icon: BarChart },
  { href: "/teacher/profile", label: "Profile", icon: User },
];

interface TeacherSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function TeacherSidebar({ isOpen = true, onClose }: TeacherSidebarProps) {
  const pathname = usePathname();
  const user = teacherDashboardData.user;

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 border-r border-slate-200 bg-white transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-slate-100">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {user.name}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {user.department}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="space-y-2 border-t border-slate-200 p-4">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              asChild
            >
              <Link href="/settings" onClick={onClose}>
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-3 text-sm font-medium text-red-600 hover:bg-red-50"
              asChild
            >
              <Link href="/logout" onClick={onClose}>
                <LogOut className="h-5 w-5" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}