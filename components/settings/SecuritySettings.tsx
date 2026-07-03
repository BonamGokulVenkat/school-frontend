"use client";

import { useState } from "react";
import { Shield, Key, Smartphone, AlertTriangle, LogOut, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SecuritySettings as SecuritySettingsType } from "@/lib/dummy/settings-data";

interface SecuritySettingsProps {
  security: SecuritySettingsType;
  onUpdate: (data: Partial<SecuritySettingsType>) => void;
  userRole?: string;
}

export function SecuritySettings({ security, onUpdate, userRole = "admin" }: SecuritySettingsProps) {
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const handleToggle = (field: keyof SecuritySettingsType) => {
    onUpdate({ [field]: !security[field] });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Role-specific security settings
  const getRoleSpecificSecurity = () => {
    if (userRole === "student") {
      return (
        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-50 p-2 text-blue-600">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Parental Controls</p>
              <p className="text-sm text-slate-500">
                Managed by your parents/guardians
              </p>
            </div>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            Active
          </Badge>
        </div>
      );
    }

    if (userRole === "parent") {
      return (
        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple-50 p-2 text-purple-600">
              <Smartphone className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Child Account Management</p>
              <p className="text-sm text-slate-500">
                Manage your children's account settings
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Manage Children
          </Button>
        </div>
      );
    }

    if (userRole === "teacher") {
      return (
        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Classroom Access</p>
              <p className="text-sm text-slate-500">
                Access to class management features
              </p>
            </div>
          </div>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
            Full Access
          </Badge>
        </div>
      );
    }

    return null;
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">
          Security Settings
        </CardTitle>
        <CardDescription>
          Manage your account security and authentication preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Password */}
        <div className="rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                <Key className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Password</p>
                <p className="text-sm text-slate-500">
                  Last changed: {formatDate(security.passwordLastChanged)}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowPasswordChange(!showPasswordChange)}
            >
              Change Password
            </Button>
          </div>

          {showPasswordChange && (
            <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Current Password</Label>
                  <Input type="password" placeholder="Enter current password" />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Confirm New Password</Label>
                <Input type="password" placeholder="Confirm new password" />
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Update Password
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">
              <Smartphone className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-900">Two-Factor Authentication</p>
              <p className="text-sm text-slate-500">
                Add an extra layer of security to your account
              </p>
            </div>
          </div>
          <Switch
            checked={security.twoFactorAuth}
            onCheckedChange={() => handleToggle("twoFactorAuth")}
          />
        </div>

        {/* Role-specific security */}
        {getRoleSpecificSecurity()}

        {/* Security Options */}
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-50 p-2 text-amber-600">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Login Alerts</p>
                <p className="text-sm text-slate-500">
                  Get notified of suspicious login attempts
                </p>
              </div>
            </div>
            <Switch
              checked={security.loginAlerts}
              onCheckedChange={() => handleToggle("loginAlerts")}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-slate-50 p-2 text-slate-600">
                <LogOut className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Device Management</p>
                <p className="text-sm text-slate-500">
                  Manage active sessions and trusted devices
                </p>
              </div>
            </div>
            <Switch
              checked={security.deviceManagement}
              onCheckedChange={() => handleToggle("deviceManagement")}
            />
          </div>
        </div>

        {/* Active Sessions */}
        <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900">Active Sessions</p>
              <p className="text-sm text-slate-500">
                You are currently logged in on 2 devices
              </p>
            </div>
            <Button variant="outline" size="sm" className="text-rose-600 border-rose-200 hover:bg-rose-50">
              Log Out All Devices
            </Button>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-slate-700">Chrome - Windows</p>
                <p className="text-xs text-slate-500">Active now • Bangalore, India</p>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700">Current</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-slate-700">Safari - iPhone</p>
                <p className="text-xs text-slate-500">2 hours ago • Mumbai, India</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs text-rose-600 hover:bg-rose-50">
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}