import { Calendar, Clock, FileText, CheckCircle, AlertCircle, Archive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimetableStatsProps {
  stats: {
    totalTimetables: number;
    published: number;
    draft: number;
    archived: number;
    totalPeriods: number;
    conflicts: number;
  };
}

export function TimetableStats({ stats }: TimetableStatsProps) {
  const statItems = [
    {
      label: "Total Timetables",
      value: stats.totalTimetables,
      icon: Calendar,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Published",
      value: stats.published,
      icon: CheckCircle,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Draft",
      value: stats.draft,
      icon: FileText,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Total Periods",
      value: stats.totalPeriods,
      icon: Clock,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Conflicts",
      value: stats.conflicts,
      icon: AlertCircle,
      color: "bg-rose-50 text-rose-600",
    },
    {
      label: "Archived",
      value: stats.archived,
      icon: Archive,
      color: "bg-slate-50 text-slate-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {statItems.map((item) => (
        <Card key={item.label} className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className={`rounded-full p-2.5 ${item.color}`}>
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">{item.label}</p>
                <p className="text-xl font-bold text-slate-900">{item.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}