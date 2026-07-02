import { Card, CardContent } from "@/components/ui/card";
import { TeacherStat } from "@/lib/dummy/teacher/teacher-dashboard-data";

interface TeacherStatsProps {
  stats: TeacherStat[];
}

const colorMap = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
  red: "bg-red-50 text-red-600",
};

export function TeacherStats({ stats }: TeacherStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.id} className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</p>
                {stat.change && (
                  <p className="mt-1 text-xs text-slate-500">{stat.change}</p>
                )}
              </div>
              <div className={`rounded-lg p-2 ${colorMap[stat.color as keyof typeof colorMap] || colorMap.blue}`}>
                <span className="text-xl">{stat.icon}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}