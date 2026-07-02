import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Shield, Bell, Mail, Lock, LogOut } from "lucide-react";
import Link from "next/link";

export function AccountSettings() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Shield className="h-5 w-5 text-blue-600" />
          Account Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Change Password */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-900 flex items-center gap-2">
              <Lock className="h-4 w-4 text-slate-400" />
              Change Password
            </h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="current-password" className="text-xs text-slate-500">
                  Current Password
                </Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="Enter current password"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="new-password" className="text-xs text-slate-500">
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="text-xs text-slate-500">
                  Confirm New Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  className="mt-1"
                />
              </div>
              <Button variant="outline" size="sm">
                Update Password
              </Button>
            </div>
          </div>

          <Separator />

          {/* Email Notifications */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-900 flex items-center gap-2">
              <Bell className="h-4 w-4 text-slate-400" />
              Notification Preferences
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">Email Notifications</p>
                  <p className="text-xs text-slate-500">Receive updates via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">Assignment Reminders</p>
                  <p className="text-xs text-slate-500">Get reminders for pending assignments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">Event Updates</p>
                  <p className="text-xs text-slate-500">Stay informed about school events</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Separator />

          {/* Account Actions */}
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-slate-500 hover:text-slate-700">
              Delete Account
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}