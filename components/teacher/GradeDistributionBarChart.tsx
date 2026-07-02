import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DistributionTier } from "@/lib/dummy/teacher/teacher-analytics-data";

interface GradeDistributionBarChartProps {
  data: DistributionTier[];
}

export function GradeDistributionBarChart({ data }: GradeDistributionBarChartProps) {
  return (
    <Card className="border-slate-200 bg-white">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-slate-950">Grade Spectrum Distribution</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((tier) => (
          <div key={tier.grade} className="space-y-1">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-800 w-8">{tier.grade}</span>
              <span className="text-slate-500">{tier.count} Students ({tier.percentage}%)</span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${tier.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}