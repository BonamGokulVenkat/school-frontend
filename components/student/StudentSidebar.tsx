"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Clock,
  FileText,
  BookOpen,
  Library,
  User,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { studentDashboardData } from "@/lib/dummy/student/student-dashboard-data";

const navItems = [
  { href: "/student", label: "Dashboard", icon: LayoutDashboard },
  { href: "/student/attendance", label: "Attendance", icon: Calendar },
  { href: "/student/timetable", label: "Timetable", icon: Clock },
  { href: "/student/results", label: "Results & Grades", icon: FileText },
  { href: "/student/assignments", label: "Assignments", icon: BookOpen },
  { href: "/student/library", label: "Library", icon: Library },
  { href: "/student/profile", label: "Profile", icon: User },
];

interface StudentSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function StudentSidebar({ isOpen = true, onClose }: StudentSidebarProps) {
  const pathname = usePathname();
  const user = studentDashboardData.user;

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
                  {user.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {user.name}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {user.class} • {user.rollNo}
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
          <div className="border-t border-slate-200 p-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              asChild
            >
              <Link href="/settings">
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-3 text-sm font-medium text-red-600 hover:bg-red-50"
              asChild
            >
              <Link href="/logout">
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