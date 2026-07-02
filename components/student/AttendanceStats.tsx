import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AttendanceSummary } from "@/lib/dummy/student/attendance-data";

interface AttendanceStatsProps {
  summary: AttendanceSummary;
}

export function AttendanceStats({ summary }: AttendanceStatsProps) {
  const getStatusColor = (percentage: number) => {
    if (percentage >= 85) return "text-green-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 85) return "bg-green-500";
    if (percentage >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Overall Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500">Overall Attendance</p>
            <div className="mt-2 flex items-end gap-2">
              <span className={`text-3xl font-bold ${getStatusColor(summary.overall)}`}>
                {summary.overall}%
              </span>
              <span className="text-sm text-slate-400">of total</span>
            </div>
            <Progress
              value={summary.overall}
              className={`mt-3 h-2 ${getProgressColor(summary.overall)}`}
            />
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500">Present Days</p>
            <div className="mt-2">
              <span className="text-3xl font-bold text-green-600">
                {summary.presentDays}
              </span>
              <span className="text-sm text-slate-400"> / {summary.totalDays}</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {Math.round((summary.presentDays / summary.totalDays) * 100)}% of total
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500">Absent Days</p>
            <div className="mt-2">
              <span className="text-3xl font-bold text-red-600">
                {summary.absentDays}
              </span>
              <span className="text-sm text-slate-400"> days</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {Math.round((summary.absentDays / summary.totalDays) * 100)}% of total
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-slate-500">Late Arrivals</p>
            <div className="mt-2">
              <span className="text-3xl font-bold text-yellow-600">
                {summary.lateDays}
              </span>
              <span className="text-sm text-slate-400"> days</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {Math.round((summary.lateDays / summary.totalDays) * 100)}% of total
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}