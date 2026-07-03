import { Bell, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NotificationStatsProps {
  stats: {
    total: number;
    unread: number;
    read: number;
    highPriority: number;
    categories: {
      academic: number;
      attendance: number;
      event: number;
      fee: number;
      general: number;
      alert: number;
    };
  };
}

export function NotificationStats({ stats }: NotificationStatsProps) {
  const statItems = [
    {
      label: "Total",
      value: stats.total,
      icon: Bell,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Unread",
      value: stats.unread,
      icon: AlertCircle,
      color: "bg-rose-50 text-rose-600",
    },
    {
      label: "Read",
      value: stats.read,
      icon: CheckCircle,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "High Priority",
      value: stats.highPriority,
      icon: AlertTriangle,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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