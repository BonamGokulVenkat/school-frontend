import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssignmentStats as StatsType } from "@/lib/dummy/student/assignments-data";

interface AssignmentStatsProps {
  stats: StatsType;
}

export function AssignmentStats({ stats }: AssignmentStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Total</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{stats.total}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Pending</p>
          <p className="mt-2 text-2xl font-bold text-yellow-600">{stats.pending}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Submitted</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">{stats.submitted}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Graded</p>
          <p className="mt-2 text-2xl font-bold text-green-600">{stats.graded}</p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Completion</p>
          <div className="mt-2">
            <span className="text-2xl font-bold text-slate-900">
              {stats.completionRate}%
            </span>
          </div>
          <Progress value={stats.completionRate} className="mt-2 h-2" />
        </CardContent>
      </Card>
    </div>
  );
}