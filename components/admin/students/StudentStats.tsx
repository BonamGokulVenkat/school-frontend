import { Users, UserCheck, UserX, GraduationCap, User, UserCog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StudentStatsProps {
  stats: {
    total: number;
    active: number;
    inactive: number;
    graduated: number;
    transferred: number;
    male: number;
    female: number;
  };
}

export function StudentStats({ stats }: StudentStatsProps) {
  const statItems = [
    {
      label: "Total Students",
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
      label: "Male",
      value: stats.male,
      icon: User,
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      label: "Female",
      value: stats.female,
      icon: UserCog,
      color: "bg-pink-50 text-pink-600",
    },
    {
      label: "Graduated",
      value: stats.graduated,
      icon: GraduationCap,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Inactive",
      value: stats.inactive + stats.transferred,
      icon: UserX,
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