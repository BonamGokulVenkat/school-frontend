import { Users, User, BookOpen, TrendingUp, Calendar, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AdminStatsProps {
  stats: {
    students: number;
    teachers: number;
    classes: number;
    passRate: number;
    attendance: number;
    staff: number;
  };
}

export function AdminStats({ stats }: AdminStatsProps) {
  const statItems = [
    {
      label: "Students",
      value: stats.students,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
      subtitle: "Active",
    },
    {
      label: "Teachers",
      value: stats.teachers,
      icon: User,
      color: "bg-emerald-50 text-emerald-600",
      subtitle: "Full-time",
    },
    {
      label: "Classes",
      value: stats.classes,
      icon: BookOpen,
      color: "bg-purple-50 text-purple-600",
      subtitle: "Sections",
    },
    {
      label: "Pass Rate",
      value: `${stats.passRate}%`,
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600",
      subtitle: "Academic year",
    },
    {
      label: "Attendance",
      value: `${stats.attendance}%`,
      icon: Calendar,
      color: "bg-cyan-50 text-cyan-600",
      subtitle: "Average",
    },
    {
      label: "Staff",
      value: stats.staff,
      icon: Briefcase,
      color: "bg-rose-50 text-rose-600",
      subtitle: "Total",
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
                <p className="text-[10px] text-slate-400">{item.subtitle}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}