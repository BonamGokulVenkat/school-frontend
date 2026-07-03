import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface SchoolOverviewProps {
  stats: {
    students: number;
    teachers: number;
    classes: number;
    passRate: number;
    attendance: number;
    staff: number;
  };
}

export function SchoolOverview({ stats }: SchoolOverviewProps) {
  const metrics = [
    {
      label: "Academic Performance",
      value: stats.passRate,
      max: 100,
      color: "bg-emerald-600",
      status: "Excellent",
    },
    {
      label: "Student Attendance",
      value: stats.attendance,
      max: 100,
      color: "bg-blue-600",
      status: stats.attendance > 80 ? "Good" : "Needs Improvement",
    },
    {
      label: "Student-Teacher Ratio",
      value: Math.round(stats.students / stats.teachers),
      max: 20,
      color: "bg-purple-600",
      status: "Optimal",
    },
    {
      label: "Class Capacity Utilization",
      value: Math.round((stats.students / (stats.classes * 35)) * 100),
      max: 100,
      color: "bg-orange-600",
      status: "Moderate",
    },
  ];

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg font-semibold">
          <span>School Overview</span>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            {stats.students + stats.teachers + stats.staff} Total
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{metric.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">
                  {metric.value}
                  {metric.max === 100 ? "%" : ":1"}
                </span>
                <Badge
                  variant="secondary"
                  className={`text-[10px] ${
                    metric.status === "Excellent" || metric.status === "Good" || metric.status === "Optimal"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {metric.status}
                </Badge>
              </div>
            </div>
            <Progress
              value={(metric.value / metric.max) * 100}
              className={`h-2 bg-slate-100 [&>div]:${metric.color}`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}