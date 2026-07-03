"use client";
// Add this at the very top of the file to skip static prerendering
export const dynamic = 'force-dynamic';

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { SettingsLayout } from "@/components/settings/SettingsLayout";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { PreferencesSettings } from "@/components/settings/PreferencesSettings";
import { settingsData, UserProfile, SecuritySettings as SecuritySettingsType, NotificationPreferences, AppearanceSettings as AppearanceSettingsType } from "@/lib/dummy/settings-data";

export default function SettingsPage() {
  const [userRole, setUserRole] = useState<"admin" | "teacher" | "student" | "parent">("admin");
  const [isLoading, setIsLoading] = useState(true);
  
  const [profile, setProfile] = useState<UserProfile>(settingsData.profile);
  const [security, setSecurity] = useState<SecuritySettingsType>(settingsData.security);
  const [notifications, setNotifications] = useState<NotificationPreferences>(settingsData.notifications);
  const [appearance, setAppearance] = useState<AppearanceSettingsType>(settingsData.appearance);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      // Get role from URL
      const urlParams = new URLSearchParams(window.location.search);
      const roleParam = urlParams.get("role") as "admin" | "teacher" | "student" | "parent" | null;
      
      if (roleParam) {
        setUserRole(roleParam);
        localStorage.setItem("userRole", roleParam);
      } else {
        // Try to get from localStorage
        const savedRole = localStorage.getItem("userRole") as "admin" | "teacher" | "student" | "parent" | null;
        if (savedRole) {
          setUserRole(savedRole);
        }
      }
    }
    setIsLoading(false);
  }, []);

  const handleSave = () => {
    toast.success("Settings saved successfully!", {
      description: "Your preferences have been updated.",
    });
  };

  const handleCancel = () => {
    setProfile(settingsData.profile);
    setSecurity(settingsData.security);
    setNotifications(settingsData.notifications);
    setAppearance(settingsData.appearance);
    toast.info("Changes discarded", {
      description: "Your settings have been reset to the last saved state.",
    });
  };

  // Role-based tab visibility
  const getVisibleTabs = () => {
    const tabs = ["profile", "security", "notifications", "appearance", "preferences"];
    
    // Hide certain tabs for students
    if (userRole === "student") {
      return tabs.filter(tab => tab !== "preferences");
    }
    
    return tabs;
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-2 text-sm text-slate-500">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <SettingsLayout
      profile={
        <ProfileSettings
          profile={profile}
          onUpdate={(data) => setProfile({ ...profile, ...data })}
          userRole={userRole}
        />
      }
      security={
        <SecuritySettings
          security={security}
          onUpdate={(data) => setSecurity({ ...security, ...data })}
          userRole={userRole}
        />
      }
      notifications={
        <NotificationSettings
          notifications={notifications}
          onUpdate={(data) => setNotifications({ ...notifications, ...data })}
          userRole={userRole}
        />
      }
      appearance={
        <AppearanceSettings
          appearance={appearance}
          onUpdate={(data) => setAppearance({ ...appearance, ...data })}
          userRole={userRole}
        />
      }
      preferences={
        <PreferencesSettings
          profile={profile}
          onUpdate={(data) => setProfile({ ...profile, ...data })}
          userRole={userRole}
        />
      }
      visibleTabs={getVisibleTabs()}
      userRole={userRole}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
}