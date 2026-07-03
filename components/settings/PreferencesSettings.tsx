"use client";

import { Sliders, Clock, Globe, Calendar, Bell, Palette, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/lib/dummy/settings-data";

interface PreferencesSettingsProps {
  profile: UserProfile;
  onUpdate: (data: Partial<UserProfile>) => void;
  userRole?: string;
}

export function PreferencesSettings({ profile, onUpdate, userRole = "admin" }: PreferencesSettingsProps) {
  // Role-specific preferences
  const getRoleSpecificPrefs = () => {
    if (userRole === "student") {
      return (
        <>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Learning Preferences</p>
                <p className="text-sm text-slate-500">Set your learning style preferences</p>
              </div>
            </div>
            <Select defaultValue="visual">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visual">Visual</SelectItem>
                <SelectItem value="auditory">Auditory</SelectItem>
                <SelectItem value="reading">Reading/Writing</SelectItem>
                <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-50 p-2 text-purple-600">
                <Bell className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Homework Reminders</p>
                <p className="text-sm text-slate-500">Get reminders for upcoming assignments</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </>
      );
    }

    if (userRole === "parent") {
      return (
        <>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-50 p-2 text-purple-600">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Child Selection</p>
                <p className="text-sm text-slate-500">Default child for dashboard view</p>
              </div>
            </div>
            <Select defaultValue="rahul">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select child" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rahul">Rahul Sharma</SelectItem>
                <SelectItem value="priya">Priya Sharma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-50 p-2 text-amber-600">
                <Bell className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Weekly Reports</p>
                <p className="text-sm text-slate-500">Receive weekly progress reports</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </>
      );
    }

    if (userRole === "teacher") {
      return (
        <>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Default Class View</p>
                <p className="text-sm text-slate-500">Set your default class dashboard</p>
              </div>
            </div>
            <Select defaultValue="6A">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6A">Grade 6-A</SelectItem>
                <SelectItem value="6B">Grade 6-B</SelectItem>
                <SelectItem value="7A">Grade 7-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">
                <Bell className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Student Alerts</p>
                <p className="text-sm text-slate-500">Get notified of student performance drops</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </>
      );
    }

    // Admin gets all preferences
    return (
      <>
        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-50 p-2 text-blue-600">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Default Time Range</p>
              <p className="text-sm text-slate-500">Set default time range for data views</p>
            </div>
          </div>
          <Select defaultValue="7days">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple-50 p-2 text-purple-600">
              <Globe className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Default View</p>
              <p className="text-sm text-slate-500">Choose your default dashboard view</p>
            </div>
          </div>
          <Select defaultValue="grid">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grid">Grid View</SelectItem>
              <SelectItem value="list">List View</SelectItem>
              <SelectItem value="compact">Compact View</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </>
    );
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">
          Application Preferences
        </CardTitle>
        <CardDescription>
          Customize your application experience and defaults
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Common Preferences */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">General Preferences</h4>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-slate-50 p-2 text-slate-600">
                <Palette className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Compact Mode</p>
                <p className="text-sm text-slate-500">Reduce spacing for a denser layout</p>
              </div>
            </div>
            <Switch />
          </div>
        </div>

        {/* Role-specific preferences */}
        {getRoleSpecificPrefs()}

        {/* Data Export - Common for all */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Data Export</h4>
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50">
            <p className="text-sm text-slate-500 mb-3">
              Export your data in various formats for offline use
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="border-slate-200">
                Export as CSV
              </Button>
              <Button variant="outline" size="sm" className="border-slate-200">
                Export as Excel
              </Button>
              <Button variant="outline" size="sm" className="border-slate-200">
                Export as PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Reset Options */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Reset Options</h4>
          <div className="flex gap-2">
            <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
              Reset to Defaults
            </Button>
            <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50">
              Clear All Data
            </Button>
          </div>
          <p className="text-xs text-slate-400">
            Resetting will restore all settings to their default values
          </p>
        </div>
      </CardContent>
    </Card>
  );
}