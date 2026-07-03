export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "teacher" | "student" | "parent";
  avatar?: string;
  bio?: string;
  timezone: string;
  language: string;
  dateFormat: string;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  sessionTimeout: number;
  loginAlerts: boolean;
  deviceManagement: boolean;
  passwordLastChanged: string;
}

export interface NotificationPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  academicUpdates: boolean;
  attendanceAlerts: boolean;
  eventReminders: boolean;
  feeReminders: boolean;
  systemUpdates: boolean;
}

export interface AppearanceSettings {
  theme: "light" | "dark" | "system";
  compactMode: boolean;
  fontSize: "small" | "medium" | "large";
  sidebarCollapsed: boolean;
  animations: boolean;
}

export const settingsData = {
  profile: {
    id: "u1",
    name: "Admin User",
    email: "admin@edunexus.edu",
    phone: "+91 98765 43210",
    role: "admin",
    bio: "School Administrator at EduNexus School",
    timezone: "Asia/Kolkata (UTC+5:30)",
    language: "English",
    dateFormat: "DD/MM/YYYY",
  } as UserProfile,
  security: {
    twoFactorAuth: true,
    sessionTimeout: 30,
    loginAlerts: true,
    deviceManagement: true,
    passwordLastChanged: "2026-01-15",
  } as SecuritySettings,
  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    academicUpdates: true,
    attendanceAlerts: true,
    eventReminders: true,
    feeReminders: true,
    systemUpdates: false,
  } as NotificationPreferences,
  appearance: {
    theme: "light",
    compactMode: false,
    fontSize: "medium",
    sidebarCollapsed: false,
    animations: true,
  } as AppearanceSettings,
};

export const timezones = [
  "Asia/Kolkata (UTC+5:30)",
  "Asia/Dubai (UTC+4:00)",
  "Asia/Singapore (UTC+8:00)",
  "America/New_York (UTC-5:00)",
  "America/Los_Angeles (UTC-8:00)",
  "Europe/London (UTC+0:00)",
  "Europe/Paris (UTC+1:00)",
  "Australia/Sydney (UTC+11:00)",
];

export const languages = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "ta", label: "Tamil" },
  { value: "te", label: "Telugu" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
];

export const dateFormats = [
  { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
  { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
  { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
];

export const fontSizes = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];