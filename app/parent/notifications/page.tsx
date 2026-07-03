"use client";

import { useState, useMemo } from "react";
import { NotificationStats } from "@/components/parent/notifications/NotificationStats";
import { NotificationFilters } from "@/components/parent/notifications/NotificationFilters";
import { NotificationList } from "@/components/parent/notifications/NotificationList";
import { notificationsData } from "@/lib/dummy/parent/notifications-data";

export default function ParentNotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [readFilter, setReadFilter] = useState<string>("all");
  const [notifications, setNotifications] = useState(notificationsData.notifications);

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesSearch =
        notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        typeFilter === "all" || notification.type === typeFilter;

      const matchesPriority =
        priorityFilter === "all" || notification.priority === priorityFilter;

      const matchesRead =
        readFilter === "all" ||
        (readFilter === "unread" && !notification.read) ||
        (readFilter === "read" && notification.read);

      return matchesSearch && matchesType && matchesPriority && matchesRead;
    });
  }, [notifications, searchQuery, typeFilter, priorityFilter, readFilter]);

  const handleMarkRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleMarkAllRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Notifications
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Stay updated with school announcements and alerts
        </p>
      </div>

      {/* Stats */}
      <NotificationStats stats={notificationsData.stats} />

      {/* Filters */}
      <NotificationFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        priorityFilter={priorityFilter}
        onPriorityChange={setPriorityFilter}
        readFilter={readFilter}
        onReadChange={setReadFilter}
        onMarkAllRead={handleMarkAllRead}
      />

      {/* List */}
      <NotificationList
        notifications={filteredNotifications}
        onMarkRead={handleMarkRead}
        onDelete={handleDelete}
      />
    </div>
  );
}