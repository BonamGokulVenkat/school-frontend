"use client";

import { useState } from "react";
import { User, Mail, Phone, Globe, Clock, Calendar, Edit, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserProfile, timezones, languages, dateFormats } from "@/lib/dummy/settings-data";

interface ProfileSettingsProps {
  profile: UserProfile;
  onUpdate: (data: Partial<UserProfile>) => void;
  userRole?: string;
}

export function ProfileSettings({ profile, onUpdate, userRole = "admin" }: ProfileSettingsProps) {
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field: keyof UserProfile, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (!isEditing) {
      onUpdate(updated);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Role-specific fields
  const getRoleSpecificFields = () => {
    if (userRole === "student") {
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Class</Label>
            <Input value="Grade 6-A" disabled />
          </div>
          <div className="space-y-2">
            <Label>Roll Number</Label>
            <Input value="2024001" disabled />
          </div>
        </div>
      );
    }
    
    if (userRole === "teacher") {
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Department</Label>
            <Input value="Mathematics" disabled />
          </div>
          <div className="space-y-2">
            <Label>Employee ID</Label>
            <Input value="TCH-001" disabled />
          </div>
        </div>
      );
    }

    if (userRole === "parent") {
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Children</Label>
            <Input value="Rahul Sharma, Priya Sharma" disabled />
          </div>
          <div className="space-y-2">
            <Label>Relationship</Label>
            <Input value="Father" disabled />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-slate-900">
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your personal information and account details
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="mr-2 h-4 w-4" />
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-slate-100">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-bold">
                {getInitials(profile.name)}
              </AvatarFallback>
            </Avatar>
            {isEditing && (
              <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-1.5 text-white hover:bg-blue-700">
                <Camera className="h-4 w-4" />
              </button>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{profile.name}</h3>
            <p className="text-sm text-slate-500 capitalize">{profile.role}</p>
            <p className="text-xs text-slate-400">{profile.email}</p>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  className="pl-9"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  className="pl-9"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  className="pl-9"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  className="pl-9 capitalize"
                  value={formData.role}
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Role-specific fields */}
          {getRoleSpecificFields()}

          <div className="space-y-2">
            <Label>Bio</Label>
            <Textarea
              placeholder="Tell us about yourself..."
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              disabled={!isEditing}
              rows={3}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label>Time Zone</Label>
              <Select
                value={formData.timezone}
                onValueChange={(value) => handleChange("timezone", value)}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map((tz) => (
                    <SelectItem key={tz} value={tz}>
                      {tz}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Language</Label>
              <Select
                value={formData.language}
                onValueChange={(value) => handleChange("language", value)}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.label}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date Format</Label>
              <Select
                value={formData.dateFormat}
                onValueChange={(value) => handleChange("dateFormat", value)}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  {dateFormats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      {format.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}