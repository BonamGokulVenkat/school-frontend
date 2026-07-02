import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  color: string;
  change?: string;
}

const colorMap = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
  red: "bg-red-50 text-red-600",
};

export function StatsCard({ icon, label, value, color, change }: StatsCardProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
            {change && (
              <p className="mt-1 text-xs text-slate-500">{change}</p>
            )}
          </div>
          <div className={`rounded-lg p-2 ${colorMap[color as keyof typeof colorMap] || colorMap.blue}`}>
            <span className="text-xl">{icon}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}