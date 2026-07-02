import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SubjectAttendance } from "@/lib/dummy/student/attendance-data";

interface SubjectWiseAttendanceProps {
  subjects: SubjectAttendance[];
}

const statusColors = {
  good: "bg-green-100 text-green-700 border-green-200",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
  danger: "bg-red-100 text-red-700 border-red-200",
};

const statusLabels = {
  good: "✅ Good",
  warning: "⚠️ Low",
  danger: "❌ Critical",
};

export function SubjectWiseAttendance({ subjects }: SubjectWiseAttendanceProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">
          Subject-wise Attendance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div key={subject.id}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-700">
                    {subject.subject}
                  </span>
                  <Badge variant="outline" className={statusColors[subject.status]}>
                    {statusLabels[subject.status]}
                  </Badge>
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {subject.percentage}%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Progress
                  value={subject.percentage}
                  className={`h-2 flex-1 ${
                    subject.percentage >= 85
                      ? "bg-green-500"
                      : subject.percentage >= 75
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                />
                <span className="text-xs text-slate-500 whitespace-nowrap">
                  {subject.present}/{subject.total} days
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}