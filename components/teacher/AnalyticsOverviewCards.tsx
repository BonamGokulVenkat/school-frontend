import { Card, CardContent } from "@/components/ui/card";
import { teacherAnalyticsData } from "@/lib/dummy/teacher/teacher-analytics-data";

interface AnalyticsOverviewCardsProps {
  summary: typeof teacherAnalyticsData.summary;
}

export function AnalyticsOverviewCards({ summary }: AnalyticsOverviewCardsProps) {
  const cards = [
    { label: "Class Average Performance", value: summary.classAverage, sub: "Historical normalized mean" },
    { label: "Top Domain", value: summary.highestSubject, sub: "Highest performance cluster" },
    { label: "Critical Domain", value: summary.lowestSubject, sub: "Requires target remediation" },
    { label: "Average Roll-Call Attendance", value: summary.attendanceAverage, sub: "Directly correlated to outcomes" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <Card key={i} className="border-slate-200 bg-white">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{card.label}</p>
            <p className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">{card.value}</p>
            <p className="mt-1 text-xs text-slate-500">{card.sub}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}