import { TeacherStats } from "@/components/teacher/TeacherStats";
import { TodayClasses } from "@/components/teacher/TodayClasses";
import { QuickActions } from "@/components/teacher/QuickActions";
import { StudentAlerts } from "@/components/teacher/StudentAlerts";
import { PendingTasks } from "@/components/teacher/PendingTasks";
import { teacherDashboardData } from "@/lib/dummy/teacher/teacher-dashboard-data";

export default function TeacherDashboardPage() {
  const { stats, todayClasses, alerts, pendingTasks, quickActions, user } = teacherDashboardData;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <h1 className="text-2xl font-bold">
          Welcome back, {user.name}!
        </h1>
        <p className="mt-1 text-blue-100">
          {user.department} Department • {user.subjects.join(", ")}
        </p>
      </div>

      {/* Stats Grid */}
      <TeacherStats stats={stats} />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 columns */}
        <div className="space-y-6 lg:col-span-2">
          <TodayClasses classes={todayClasses} />
          <QuickActions actions={quickActions} />
        </div>

        {/* Right Column - 1 column */}
        <div className="space-y-6 lg:col-span-1">
          <StudentAlerts alerts={alerts} />
          <PendingTasks tasks={pendingTasks} />
        </div>
      </div>
    </div>
  );
}