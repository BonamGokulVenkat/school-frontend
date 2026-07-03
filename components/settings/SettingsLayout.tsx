"use client";

import { useState } from "react";
import {
  User,
  Shield,
  Bell,
  Palette,
  Sliders,
  Save,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsLayoutProps {
  profile: React.ReactNode;
  security: React.ReactNode;
  notifications: React.ReactNode;
  appearance: React.ReactNode;
  preferences: React.ReactNode;
  visibleTabs?: string[];
  userRole?: string;
  onSave?: () => void;
  onCancel?: () => void;
}

const allTabs = [
  { value: "profile", label: "Profile", icon: User },
  { value: "security", label: "Security", icon: Shield },
  { value: "notifications", label: "Notifications", icon: Bell },
  { value: "appearance", label: "Appearance", icon: Palette },
  { value: "preferences", label: "Preferences", icon: Sliders },
];

export function SettingsLayout({
  profile,
  security,
  notifications,
  appearance,
  preferences,
  visibleTabs = ["profile", "security", "notifications", "appearance", "preferences"],
  userRole = "admin",
  onSave,
  onCancel,
}: SettingsLayoutProps) {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = allTabs.filter(tab => visibleTabs.includes(tab.value));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Settings
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your account settings and preferences
          </p>
          <p className="text-xs text-slate-400 capitalize">
            Role: {userRole}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onCancel}>
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={onSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="flex w-full flex-wrap gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        <div className="min-h-[400px]">
          <TabsContent value="profile">{profile}</TabsContent>
          <TabsContent value="security">{security}</TabsContent>
          <TabsContent value="notifications">{notifications}</TabsContent>
          <TabsContent value="appearance">{appearance}</TabsContent>
          <TabsContent value="preferences">{preferences}</TabsContent>
        </div>
      </Tabs>
    </div>
  );
}