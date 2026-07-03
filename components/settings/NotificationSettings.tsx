"use client";

import { Bell, Mail, Smartphone, MessageSquare, Calendar, DollarSign, AlertCircle, Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { NotificationPreferences } from "@/lib/dummy/settings-data";

interface NotificationSettingsProps {
  notifications: NotificationPreferences;
  onUpdate: (data: Partial<NotificationPreferences>) => void;
  userRole?: string;
}

export function NotificationSettings({ notifications, onUpdate, userRole = "admin" }: NotificationSettingsProps) {
  const handleToggle = (field: keyof NotificationPreferences) => {
    onUpdate({ [field]: !notifications[field] });
  };

  // Role-specific notification preferences
  const getRoleSpecificPrefs = () => {
    if (userRole === "student") {
      return [
        {
          key: "academicUpdates",
          label: "Academic Updates",
          description: "Homework, grades, and class updates",
          icon: SettingsIcon,
        },
        {
          key: "attendanceAlerts",
          label: "Attendance Alerts",
          description: "Daily attendance reports",
          icon: AlertCircle,
        },
        {
          key: "eventReminders",
          label: "Event Reminders",
          description: "School events and activities",
          icon: Calendar,
        },
      ];
    }

    if (userRole === "parent") {
      return [
        {
          key: "academicUpdates",
          label: "Child Academic Updates",
          description: "Your child's homework and grades",
          icon: SettingsIcon,
        },
        {
          key: "attendanceAlerts",
          label: "Child Attendance Alerts",
          description: "Your child's daily attendance",
          icon: AlertCircle,
        },
        {
          key: "eventReminders",
          label: "School Events",
          description: "PTMs, events, and activities",
          icon: Calendar,
        },
        {
          key: "feeReminders",
          label: "Fee Reminders",
          description: "Fee payment deadlines",
          icon: DollarSign,
        },
      ];
    }

    if (userRole === "teacher") {
      return [
        {
          key: "academicUpdates",
          label: "Class Updates",
          description: "Student submissions and queries",
          icon: SettingsIcon,
        },
        {
          key: "attendanceAlerts",
          label: "Attendance Reports",
          description: "Daily class attendance",
          icon: AlertCircle,
        },
        {
          key: "eventReminders",
          label: "School Events",
          description: "Meetings and activities",
          icon: Calendar,
        },
      ];
    }

    // Admin gets all preferences
    return [
      {
        key: "academicUpdates",
        label: "Academic Updates",
        description: "Homework, grades, and academic progress",
        icon: SettingsIcon,
      },
      {
        key: "attendanceAlerts",
        label: "Attendance Alerts",
        description: "Daily attendance reports and absences",
        icon: AlertCircle,
      },
      {
        key: "eventReminders",
        label: "Event Reminders",
        description: "School events, meetings, and activities",
        icon: Calendar,
      },
      {
        key: "feeReminders",
        label: "Fee Reminders",
        description: "Fee payment deadlines and receipts",
        icon: DollarSign,
      },
      {
        key: "systemUpdates",
        label: "System Updates",
        description: "Platform updates and maintenance",
        icon: SettingsIcon,
      },
    ];
  };

  const channels = [
    {
      key: "emailNotifications",
      label: "Email Notifications",
      description: "Receive notifications via email",
      icon: Mail,
    },
    {
      key: "pushNotifications",
      label: "Push Notifications",
      description: "Receive browser push notifications",
      icon: Bell,
    },
    {
      key: "smsNotifications",
      label: "SMS Notifications",
      description: "Receive notifications via SMS",
      icon: MessageSquare,
    },
  ] as const;

  const preferences = getRoleSpecificPrefs();

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">
          Notification Preferences
        </CardTitle>
        <CardDescription>
          Choose how and when you want to receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Communication Channels */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Communication Channels</h4>
          <div className="space-y-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const isEnabled = notifications[channel.key];
              return (
                <div
                  key={channel.key}
                  className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{channel.label}</p>
                      <p className="text-sm text-slate-500">{channel.description}</p>
                    </div>
                  </div>
                  <Switch
                    checked={isEnabled}
                    onCheckedChange={() => handleToggle(channel.key)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Notification Types</h4>
          <div className="space-y-3">
            {preferences.map((pref) => {
              const Icon = pref.icon;
              const isEnabled = notifications[pref.key as keyof NotificationPreferences];
              return (
                <div
                  key={pref.key}
                  className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-purple-50 p-2 text-purple-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{pref.label}</p>
                      <p className="text-sm text-slate-500">{pref.description}</p>
                    </div>
                  </div>
                  <Switch
                    checked={isEnabled}
                    onCheckedChange={() => handleToggle(pref.key as keyof NotificationPreferences)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="border-slate-200">
            Reset to Default
          </Button>
          {userRole === "parent" && (
            <Button variant="outline" size="sm" className="border-slate-200">
              Apply to All Children
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}