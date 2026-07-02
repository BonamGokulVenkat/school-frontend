import { Bell, AlertCircle, Calendar, BookOpen, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Notification } from "@/lib/dummy/student/student-dashboard-data";

interface NotificationsListProps {
  notifications: Notification[];
}

const typeIcons = {
  academic: BookOpen,
  event: Calendar,
  important: AlertCircle,
  general: Info,
};

const typeColors = {
  academic: "bg-blue-50 text-blue-600 border-blue-200",
  event: "bg-green-50 text-green-600 border-green-200",
  important: "bg-red-50 text-red-600 border-red-200",
  general: "bg-slate-50 text-slate-600 border-slate-200",
};

export function NotificationsList({ notifications }: NotificationsListProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bell className="h-5 w-5 text-blue-600" />
            <span>Notifications</span>
          </CardTitle>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="text-xs">
              {unreadCount} unread
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.slice(0, 4).map((notif) => {
          const Icon = typeIcons[notif.type] || Info;
          return (
            <div
              key={notif.id}
              className={`flex items-start gap-3 rounded-lg p-3 transition-colors ${
                !notif.read ? "bg-blue-50/50" : "hover:bg-slate-50"
              }`}
            >
              <div className={`rounded-lg p-2 ${typeColors[notif.type]}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-slate-900">
                    {notif.title}
                  </p>
                  {!notif.read && (
                    <Badge variant="secondary" className="text-[10px]">
                      New
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {notif.message}
                </p>
                <span className="text-[10px] text-slate-400">{notif.time}</span>
              </div>
            </div>
          );
        })}
        {notifications.length === 0 && (
          <p className="text-center text-sm text-slate-500 py-4">
            No notifications
          </p>
        )}
      </CardContent>
    </Card>
  );
}