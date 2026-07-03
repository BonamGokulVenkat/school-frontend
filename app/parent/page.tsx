import { ParentStats } from "@/components/parent/ParentStats";
import { ChildOverview } from "@/components/parent/ChildOverview";
import { RecentUpdates } from "@/components/parent/RecentUpdates";
import { QuickActions } from "@/components/parent/QuickActions";
import { parentDashboardData } from "@/lib/dummy/parent/parent-dashboard-data";

export default function ParentDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Parent Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back, {parentDashboardData.user.name}
        </p>
      </div>

      {/* Stats - Pass children as a prop */}
      <ParentStats children={parentDashboardData.children} />

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Child Overview */}
        <div className="lg:col-span-8">
          <ChildOverview children={parentDashboardData.children} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <RecentUpdates updates={parentDashboardData.recentUpdates} />
          <QuickActions actions={parentDashboardData.quickActions} />
        </div>
      </div>
    </div>
  );
}