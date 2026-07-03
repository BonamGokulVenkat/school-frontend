import { FileText, CheckCircle, Clock, AlertCircle, Download, BookOpen, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReportStatsProps {
  stats: {
    total: number;
    ready: number;
    processing: number;
    failed: number;
    downloads: number;
    categories: {
      academic: number;
      attendance: number;
      staff: number;
      financial: number;
    };
  };
}

export function ReportStats({ stats }: ReportStatsProps) {
  const statItems = [
    {
      label: "Total Reports",
      value: stats.total,
      icon: FileText,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Ready",
      value: stats.ready,
      icon: CheckCircle,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Processing",
      value: stats.processing,
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Failed",
      value: stats.failed,
      icon: AlertCircle,
      color: "bg-rose-50 text-rose-600",
    },
    {
      label: "Downloads",
      value: stats.downloads,
      icon: Download,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Total Categories",
      value: Object.keys(stats.categories).length,
      icon: BookOpen,
      color: "bg-indigo-50 text-indigo-600",
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