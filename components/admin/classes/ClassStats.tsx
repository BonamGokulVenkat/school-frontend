import { BookOpen, Users, User, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ClassStatsProps {
  stats: {
    total: number;
    active: number;
    archived: number;
    pending: number;
    totalStudents: number;
    avgClassSize: number;
  };
}

export function ClassStats({ stats }: ClassStatsProps) {
  const statItems = [
    {
      label: "Total Classes",
      value: stats.total,
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Active",
      value: stats.active,
      icon: Users,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Total Students",
      value: stats.totalStudents,
      icon: User,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Average Class Size",
      value: stats.avgClassSize,
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: Calendar,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Archived",
      value: stats.archived,
      icon: BookOpen,
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