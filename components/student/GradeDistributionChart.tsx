"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubjectGrade } from "@/lib/dummy/student/results-data";

interface GradeDistributionChartProps {
  subjects: SubjectGrade[];
}

export function GradeDistributionChart({ subjects }: GradeDistributionChartProps) {
  // Calculate grade distribution
  const distribution = subjects.reduce((acc, subject) => {
    const grade = subject.grade;
    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const gradeColors: Record<string, string> = {
    "A+": "bg-green-500",
    "A": "bg-blue-500",
    "B+": "bg-teal-500",
    "B": "bg-yellow-500",
    "C+": "bg-orange-500",
    "C": "bg-orange-600",
    "D": "bg-red-500",
    "F": "bg-red-700",
  };

  const maxCount = Math.max(...Object.values(distribution), 1);

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Grade Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-end gap-4">
          {Object.entries(distribution)
            .sort((a, b) => {
              const order = ["A+", "A", "B+", "B", "C+", "C", "D", "F"];
              return order.indexOf(a[0]) - order.indexOf(b[0]);
            })
            .map(([grade, count]) => (
              <div key={grade} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t ${
                    gradeColors[grade] || "bg-slate-400"
                  } transition-all duration-500`}
                  style={{
                    height: `${(count / maxCount) * 100}%`,
                    minHeight: count > 0 ? "16px" : "0",
                  }}
                >
                  <div className="flex h-full items-center justify-center text-xs font-bold text-white">
                    {count > 0 && count}
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-600">{grade}</span>
              </div>
            ))}
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          Distribution of grades across all subjects
        </p>
      </CardContent>
    </Card>
  );
}