import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  className?: string;
}

export function InfoCard({
  icon,
  title,
  value,
  subtitle,
  badge,
  badgeColor = "blue",
  className = "",
}: InfoCardProps) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    red: "bg-red-100 text-red-700 border-red-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <Card className={`border-slate-200 shadow-sm ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          {icon && <div className="text-slate-400">{icon}</div>}
          <CardTitle className="text-sm font-medium text-slate-600">
            {title}
          </CardTitle>
        </div>
        {badge && (
          <Badge variant="outline" className={colorMap[badgeColor] || colorMap.blue}>
            {badge}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        {subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}