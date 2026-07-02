import { Award, ClipboardCheck, FileBarChart, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GradeSummaryCardsProps {
  totalStudents: number;
  gradedStudents: number;
  averagePercentage: number;
  topGrade: string;
}

export function GradeSummaryCards({
  totalStudents,
  gradedStudents,
  averagePercentage,
  topGrade,
}: GradeSummaryCardsProps) {
  const gradingProgress =
    totalStudents > 0 ? Math.round((gradedStudents / totalStudents) * 100) : 0;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="border-slate-200 bg-white lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-base text-slate-950">
            Grading Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-500">
              {gradedStudents} of {totalStudents} students graded
            </span>
            <span className="font-medium text-slate-900">
              {gradingProgress}%
            </span>
          </div>
          <Progress value={gradingProgress} />
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-base text-slate-950">
            Class Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <SummaryItem
            icon={Users}
            label="Students"
            value={String(totalStudents)}
          />
          <SummaryItem
            icon={ClipboardCheck}
            label="Graded"
            value={String(gradedStudents)}
          />
          <SummaryItem
            icon={FileBarChart}
            label="Average"
            value={`${averagePercentage}%`}
          />
          <SummaryItem icon={Award} label="Top Grade" value={topGrade} />
        </CardContent>
      </Card>
    </div>
  );
}

interface SummaryItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function SummaryItem({ icon: Icon, label, value }: SummaryItemProps) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <Icon className="mb-2 h-4 w-4 text-slate-500" />
      <p className="text-lg font-semibold text-slate-950">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}