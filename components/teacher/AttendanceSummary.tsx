import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AttendanceSummary as SummaryType } from "@/lib/dummy/teacher/attendance-data";

interface AttendanceSummaryProps {
  summary: SummaryType;
}

export function AttendanceSummary({ summary }: AttendanceSummaryProps) {
  const completionRate = ((summary.present + summary.absent + summary.late) / summary.total) * 100;

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="text-center">
            <p className="text-xs font-medium text-slate-500">Total</p>
            <p className="text-2xl font-bold text-slate-900">{summary.total}</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-slate-500">Present</p>
            <p className="text-2xl font-bold text-green-600">{summary.present}</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-slate-500">Absent</p>
            <p className="text-2xl font-bold text-red-600">{summary.absent}</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-slate-500">Late</p>
            <p className="text-2xl font-bold text-yellow-600">{summary.late}</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-xs text-slate-500">
            <span>Attendance Marked</span>
            <span>{Math.round(completionRate)}%</span>
          </div>
          <Progress value={completionRate} className="mt-1 h-2" />
        </div>

        <div className="mt-3 flex justify-between text-xs text-slate-500">
          <span>Unmarked: {summary.unmarked}</span>
          <span>
            Present: {summary.present} | Absent: {summary.absent} | Late: {summary.late}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}