import { Clock, UserPlus, Edit, FileText, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RecentActivity as ActivityType } from "@/lib/dummy/admin/admin-dashboard-data";

interface RecentActivityProps {
  activities: ActivityType[];
}

const activityIcons = {
  registration: UserPlus,
  update: Edit,
  submission: FileText,
  attendance: Calendar,
  grade: Award,
};

const activityColors = {
  registration: "bg-emerald-100 text-emerald-600",
  update: "bg-blue-100 text-blue-600",
  submission: "bg-purple-100 text-purple-600",
  attendance: "bg-amber-100 text-amber-600",
  grade: "bg-rose-100 text-rose-600",
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Clock className="h-5 w-5 text-blue-500" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type] || Edit;
            const colorClass = activityColors[activity.type] || "bg-slate-100 text-slate-600";
            return (
              <div
                key={activity.id}
                className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className={`text-xs font-bold ${colorClass}`}>
                    {getInitials(activity.user)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-0.5">
                  <p className="text-sm font-medium text-slate-900">
                    {activity.user}
                  </p>
                  <p className="text-xs text-slate-500">{activity.action}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <Icon className="h-3 w-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}