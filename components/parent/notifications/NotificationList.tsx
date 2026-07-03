"use client";

import { useState } from "react";
import {
  Bell,
  BookOpen,
  Calendar,
  AlertCircle,
  DollarSign,
  Info,
  AlertTriangle,
  CheckCircle,
  X,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Notification } from "@/lib/dummy/parent/notifications-data";

interface NotificationListProps {
  notifications: Notification[];
  onMarkRead: (id: string) => void;
  onDelete: (id: string) => void;
}

const typeIcons = {
  academic: BookOpen,
  attendance: Calendar,
  event: Bell,
  fee: DollarSign,
  general: Info,
  alert: AlertTriangle,
};

const typeColors = {
  academic: "bg-blue-100 text-blue-700 border-blue-200",
  attendance: "bg-emerald-100 text-emerald-700 border-emerald-200",
  event: "bg-purple-100 text-purple-700 border-purple-200",
  fee: "bg-amber-100 text-amber-700 border-amber-200",
  general: "bg-slate-100 text-slate-700 border-slate-200",
  alert: "bg-rose-100 text-rose-700 border-rose-200",
};

const priorityColors = {
  high: "bg-rose-100 text-rose-700 border-rose-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-slate-100 text-slate-700 border-slate-200",
};

const priorityLabels = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

export function NotificationList({ notifications, onMarkRead, onDelete }: NotificationListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (notifications.length === 0) {
    return (
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="py-12 text-center">
          <Bell className="mx-auto h-12 w-12 text-slate-400" />
          <p className="mt-3 font-medium text-slate-500">No notifications</p>
          <p className="text-sm text-slate-400">
            You &apos;re all caught up! Check back later for updates.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {notifications.map((notification) => {
        const Icon = typeIcons[notification.type] || Bell;
        const isExpanded = expandedId === notification.id;

        return (
          <Card
            key={notification.id}
            className={`border-slate-200 shadow-sm transition-all ${
              !notification.read ? "border-l-4 border-l-purple-500 bg-purple-50/30" : ""
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`rounded-full p-2 ${typeColors[notification.type]}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium text-slate-900">
                          {notification.title}
                        </p>
                        <Badge
                          variant="outline"
                          className={`${priorityColors[notification.priority]} text-[8px] px-1.5 py-0`}
                        >
                          {priorityLabels[notification.priority]}
                        </Badge>
                        {!notification.read && (
                          <Badge className="bg-purple-500 text-white text-[8px] px-1.5 py-0">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className={`text-sm text-slate-600 mt-1 ${!isExpanded && "line-clamp-2"}`}>
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        <span>{formatDate(notification.date)} at {notification.time}</span>
                        <span>•</span>
                        <span>{notification.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => toggleExpand(notification.id)}
                      >
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-purple-600 hover:text-purple-700"
                          onClick={() => onMarkRead(notification.id)}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-slate-400 hover:text-rose-600"
                        onClick={() => onDelete(notification.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && notification.actions && (
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <div className="flex flex-wrap gap-2">
                        {notification.actions.map((action, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="h-8 border-slate-200 text-xs hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
                            asChild
                          >
                            <a href={action.link}>{action.label}</a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}