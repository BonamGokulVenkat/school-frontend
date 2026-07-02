import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ResultsSummary, getGradeColor } from "@/lib/dummy/student/results-data";

interface ResultsOverviewProps {
  summary: ResultsSummary;
}

export function ResultsOverview({ summary }: ResultsOverviewProps) {
  const gradeColor = getGradeColor(summary.overallGrade);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Overall Grade</p>
          <div className="mt-2 flex items-center gap-2">
            <Badge className={`text-lg px-3 py-1 ${gradeColor}`}>
              {summary.overallGrade}
            </Badge>
            <span className="text-sm text-slate-500">
              {summary.percentage}%
            </span>
          </div>
          <Progress
            value={summary.percentage}
            className="mt-3 h-2"
          />
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Class Rank</p>
          <div className="mt-2">
            <span className="text-3xl font-bold text-slate-900">
              #{summary.rank}
            </span>
            <span className="text-sm text-slate-400">
              {" "}
              / {summary.totalStudents}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Top {Math.round((summary.rank / summary.totalStudents) * 100)}% of class
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Subjects Passed</p>
          <div className="mt-2">
            <span className="text-3xl font-bold text-green-600">
              {summary.subjectsPassed}
            </span>
            <span className="text-sm text-slate-400">
              {" "}
              / {summary.totalSubjects}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {Math.round((summary.subjectsPassed / summary.totalSubjects) * 100)}% pass rate
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium text-slate-500">Overall Percentage</p>
          <div className="mt-2">
            <span
              className={`text-3xl font-bold ${
                summary.percentage >= 80
                  ? "text-green-600"
                  : summary.percentage >= 70
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {summary.percentage}%
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {summary.percentage >= 80
              ? "Excellent performance!"
              : summary.percentage >= 70
              ? "Good performance, keep improving!"
              : "Needs improvement, focus more!"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}