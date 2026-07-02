import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { GradeStats as GradeStatsType } from "@/lib/dummy/teacher/teacher-grades-data";

interface GradeStatsProps {
  stats: GradeStatsType;
}

const statItems = [
  {
    key: "totalStudents",
    label: "Total Students",
    icon: Users,
    suffix: "",
  },
  {
    key: "averageMarks",
    label: "Average Marks",
    icon: BarChart3,
    suffix: "%",
  },
  {
    key: "highestMarks",
    label: "Highest Marks",
    icon: TrendingUp,
    suffix: "%",
  },
  {
    key: "lowestMarks",
    label: "Lowest Marks",
    icon: TrendingDown,
    suffix: "%",
  },
  {
    key: "passPercentage",
    label: "Pass Percentage",
    icon: CheckCircle2,
    suffix: "%",
  },
  {
    key: "atRiskStudents",
    label: "At-Risk Students",
    icon: AlertTriangle,
    suffix: "",
  },
] as const;

export function GradeStats({ stats }: GradeStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
      {statItems.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.key} className="border-slate-200 bg-white">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    {stats[item.key]}
                    {item.suffix}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-100 p-2 text-slate-700">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}