"use client";

import { Palette, Moon, Sun, Monitor, Layout, Type, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AppearanceSettings as AppearanceSettingsType, fontSizes } from "@/lib/dummy/settings-data";

interface AppearanceSettingsProps {
  appearance: AppearanceSettingsType;
  onUpdate: (data: Partial<AppearanceSettingsType>) => void;
  userRole?: string;
}

export function AppearanceSettings({ appearance, onUpdate, userRole = "admin" }: AppearanceSettingsProps) {
  const handleToggle = (field: keyof AppearanceSettingsType) => {
    onUpdate({ [field]: !appearance[field] });
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">
          Appearance Settings
        </CardTitle>
        <CardDescription>
          Customize the look and feel of your dashboard
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Theme</h4>
          <RadioGroup
            value={appearance.theme}
            onValueChange={(value: any) => onUpdate({ theme: value })}
            className="grid grid-cols-3 gap-4"
          >
            <div>
              <RadioGroupItem value="light" id="light" className="peer sr-only" />
              <Label
                htmlFor="light"
                className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-4 hover:bg-slate-50 peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600"
              >
                <Sun className="mb-2 h-6 w-6 text-amber-500" />
                <span className="text-sm font-medium">Light</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="dark" id="dark" className="peer sr-only" />
              <Label
                htmlFor="dark"
                className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-slate-900 p-4 hover:bg-slate-800 peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600"
              >
                <Moon className="mb-2 h-6 w-6 text-slate-300" />
                <span className="text-sm font-medium text-white">Dark</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="system" id="system" className="peer sr-only" />
              <Label
                htmlFor="system"
                className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-slate-100 p-4 hover:bg-slate-200 peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600"
              >
                <Monitor className="mb-2 h-6 w-6 text-slate-600" />
                <span className="text-sm font-medium">System</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Font Size */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Font Size</h4>
          <RadioGroup
            value={appearance.fontSize}
            onValueChange={(value: any) => onUpdate({ fontSize: value })}
            className="grid grid-cols-3 gap-4"
          >
            {fontSizes.map((size) => (
              <div key={size.value}>
                <RadioGroupItem value={size.value} id={size.value} className="peer sr-only" />
                <Label
                  htmlFor={size.value}
                  className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-4 hover:bg-slate-50 peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600"
                >
                  <Type className="mb-2 h-6 w-6 text-slate-600" />
                  <span className="text-sm font-medium">{size.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Layout Options */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Layout Preferences</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                  <Layout className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Compact Mode</p>
                  <p className="text-sm text-slate-500">
                    Reduce spacing for a denser layout
                  </p>
                </div>
              </div>
              <Switch
                checked={appearance.compactMode}
                onCheckedChange={() => handleToggle("compactMode")}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-50 p-2 text-purple-600">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Animations</p>
                  <p className="text-sm text-slate-500">
                    Enable smooth transitions and animations
                  </p>
                </div>
              </div>
              <Switch
                checked={appearance.animations}
                onCheckedChange={() => handleToggle("animations")}
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50">
          <p className="text-sm font-medium text-slate-900">Preview</p>
          <div className="mt-2 flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <span className="text-xs font-bold">A</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-900">Sample User</p>
              <p className="text-xs text-slate-500">This is how your text will appear</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}