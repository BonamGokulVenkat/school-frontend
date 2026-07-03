import { Calendar, BookOpen, Bell, MessageSquare, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RecentUpdate } from "@/lib/dummy/parent/parent-dashboard-data";

interface RecentUpdatesProps {
  updates: RecentUpdate[];
}

const iconMap: Record<string, React.ElementType> = {
  Calendar: Calendar,
  BookOpen: BookOpen,
  Bell: Bell,
  MessageSquare: MessageSquare,
};

const typeColors = {
  academic: "bg-blue-100 text-blue-700 border-blue-200",
  attendance: "bg-emerald-100 text-emerald-700 border-emerald-200",
  event: "bg-purple-100 text-purple-700 border-purple-200",
  general: "bg-slate-100 text-slate-700 border-slate-200",
};

const typeIcons = {
  academic: BookOpen,
  attendance: Calendar,
  event: Bell,
  general: MessageSquare,
};

export function RecentUpdates({ updates }: RecentUpdatesProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Clock className="h-5 w-5 text-purple-500" />
          Recent Updates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update) => {
            const Icon = iconMap[update.icon] || Bell;
            const TypeIcon = typeIcons[update.type] || Bell;

            return (
              <div
                key={update.id}
                className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
              >
                <div className="rounded-full bg-purple-50 p-2 text-purple-600">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-slate-900">{update.title}</p>
                    <Badge
                      variant="outline"
                      className={`${typeColors[update.type]} text-[8px] px-1.5 py-0`}
                    >
                      <TypeIcon className="mr-1 h-2.5 w-2.5" />
                      {update.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">{update.message}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{update.time}</span>
                  </div>
                </div>
                <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200 text-[8px]">
                  New
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}