import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: ReactNode;
  color: string;
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
}

export function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {stats.map((stat) => (
        <Card key={stat.id} className="border-slate-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
              <div className={`h-5 w-5 ${stat.color}`}>{stat.icon}</div>
            </div>
            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}