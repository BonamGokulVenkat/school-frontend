import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { AdminStats } from "@/components/admin/dashboard/AdminStats";
import { PendingTasks } from "@/components/admin/dashboard/PendingTasks";
import { RecentActivity } from "@/components/admin/dashboard/RecentActivity";
import { SchoolOverview } from "@/components/admin/dashboard/SchoolOverview";
import { adminDashboardData } from "@/lib/dummy/admin/admin-dashboard-data";

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      

      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              School Admin Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              EduNexus School - 2026-27 Academic Year Overview
            </p>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <AdminStats stats={adminDashboardData.stats} />
          </div>

          {/* Overview, Tasks, and Activity Grid */}
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SchoolOverview stats={adminDashboardData.stats} />
            </div>
            <div className="lg:col-span-4">
              <PendingTasks tasks={adminDashboardData.pendingTasks} />
            </div>
            <div className="lg:col-span-3">
              <RecentActivity activities={adminDashboardData.recentActivity} />
            </div>
          </div>
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}