import { Users, UserCheck, AlertCircle, UserX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TeacherStatsProps {
  stats: {
    total: number;
    active: number;
    onLeave: number;
    inactive: number;
  };
}

export function TeacherStats({ stats }: TeacherStatsProps) {
  const statItems = [
    {
      label: "Total Teachers",
      value: stats.total,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Active",
      value: stats.active,
      icon: UserCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "On Leave",
      value: stats.onLeave,
      icon: AlertCircle,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Inactive",
      value: stats.inactive,
      icon: UserX,
      color: "bg-slate-50 text-slate-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statItems.map((item) => (
        <Card key={item.label} className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className={`rounded-full p-3 ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}