import { StatsCard } from "@/components/student/StatsCard";
import { TodayClasses } from "@/components/student/TodayClasses";
import { NotificationsList } from "@/components/student/NotificationsList";
import { QuickActions } from "@/components/student/QuickActions";
import { studentDashboardData } from "@/lib/dummy/student/student-dashboard-data";

export default function StudentDashboardPage() {
  const { stats, todayClasses, notifications, quickActions } = studentDashboardData;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <h1 className="text-2xl font-bold">
          Welcome back, {studentDashboardData.user.name}!
        </h1>
        <p className="mt-1 text-blue-100">
          {studentDashboardData.user.class} • Roll No: {studentDashboardData.user.rollNo}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.id}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            color={stat.color}
            change={stat.change}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 columns */}
        <div className="space-y-6 lg:col-span-2">
          <TodayClasses classes={todayClasses} />
          <QuickActions actions={quickActions} />
        </div>

        {/* Right Column - 1 column */}
        <div className="lg:col-span-1">
          <NotificationsList notifications={notifications} />
        </div>
      </div>
    </div>
  );
}