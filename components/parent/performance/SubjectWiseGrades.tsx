import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SubjectPerformance } from "@/lib/dummy/parent/performance-data";

interface SubjectWiseGradesProps {
  subjects: SubjectPerformance[];
}

const statusColors = {
  "excellent": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "good": "bg-blue-100 text-blue-700 border-blue-200",
  "average": "bg-amber-100 text-amber-700 border-amber-200",
  "needs-improvement": "bg-rose-100 text-rose-700 border-rose-200",
};

const statusLabels = {
  "excellent": "Excellent",
  "good": "Good",
  "average": "Average",
  "needs-improvement": "Needs Improvement",
};

export function SubjectWiseGrades({ subjects }: SubjectWiseGradesProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-slate-900">
          Subject-wise Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjects.map((subject) => {
            const percentage = (subject.total / 200) * 100;
            return (
              <div key={subject.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{subject.name}</p>
                    <p className="text-xs text-slate-500">{subject.teacher}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`${statusColors[subject.status]} text-xs`}
                    >
                      {statusLabels[subject.status]}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${
                        subject.grade.startsWith("A")
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : subject.grade.startsWith("B")
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      } text-sm font-bold`}
                    >
                      {subject.grade}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Progress
                      value={percentage}
                      className={`h-2 bg-slate-100 ${
                        percentage >= 80
                          ? "[&>*]:bg-emerald-500"
                          : percentage >= 70
                          ? "[&>*]:bg-blue-500"
                          : percentage >= 60
                          ? "[&>*]:bg-amber-500"
                          : "[&>*]:bg-rose-500"
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    {Math.round(percentage)}%
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>Mid Term: {subject.midTerm}/100</span>
                  <span>Final: {subject.finalExam}/100</span>
                  <span>Total: {subject.total}/200</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-2 text-xs">
                  <p className="font-medium text-slate-700">Feedback:</p>
                  <p className="text-slate-600">{subject.feedback}</p>
                  <p className="mt-1 font-medium text-blue-600">
                    Improvement: {subject.improvement}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}