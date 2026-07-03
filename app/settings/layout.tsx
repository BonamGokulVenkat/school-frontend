"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Import all role-specific layouts
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { TeacherSidebar } from "@/components/teacher/TeacherSidebar";
import { TeacherHeader } from "@/components/teacher/TeacherHeader";
import { StudentSidebar } from "@/components/student/StudentSidebar";
import { StudentHeader } from "@/components/student/StudentHeader";
import { ParentSidebar } from "@/components/parent/ParentSidebar";
import { ParentHeader } from "@/components/parent/ParentHeader";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState<"admin" | "teacher" | "student" | "parent" | "public">("admin");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      // Try to get role from localStorage
      const savedRole = localStorage.getItem("userRole") as "admin" | "teacher" | "student" | "parent" | null;
      
      // Also check URL for role parameter
      const urlParams = new URLSearchParams(window.location.search);
      const roleParam = urlParams.get("role") as "admin" | "teacher" | "student" | "parent" | null;
      
      if (roleParam) {
        setUserRole(roleParam);
        localStorage.setItem("userRole", roleParam);
      } else if (savedRole) {
        setUserRole(savedRole);
      } else {
        // Default to admin
        setUserRole("admin");
      }
    }
    
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading settings...</p>
        </div>
      </div>
    );
  }

  // Render the appropriate layout based on user role
  const renderLayout = () => {
    switch (userRole) {
      case "admin":
        return (
          <div className="flex min-h-screen bg-slate-50/50">
            <AdminSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <div className="flex flex-1 flex-col">
              <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />
              <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="mx-auto max-w-7xl">{children}</div>
              </main>
            </div>
          </div>
        );

      case "teacher":
        return (
          <div className="flex min-h-screen bg-slate-50/50">
            <TeacherSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <div className="flex flex-1 flex-col">
              <TeacherHeader onMenuClick={() => setIsSidebarOpen(true)} />
              <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="mx-auto max-w-7xl">{children}</div>
              </main>
            </div>
          </div>
        );

      case "student":
        return (
          <div className="flex min-h-screen bg-slate-50/50">
            <StudentSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <div className="flex flex-1 flex-col">
              <StudentHeader onMenuClick={() => setIsSidebarOpen(true)} />
              <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="mx-auto max-w-7xl">{children}</div>
              </main>
            </div>
          </div>
        );

      case "parent":
        return (
          <div className="flex min-h-screen bg-slate-50/50">
            <ParentSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <div className="flex flex-1 flex-col">
              <ParentHeader onMenuClick={() => setIsSidebarOpen(true)} />
              <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="mx-auto max-w-7xl">{children}</div>
              </main>
            </div>
          </div>
        );

      default:
        // Redirect to login if public
        if (typeof window !== "undefined") {
          router.push("/login");
        }
        return null;
    }
  };

  return renderLayout();
}