"use client";

import { useState } from "react";

import { ProfileHeader } from "@/components/student/ProfileHeader";
import { PersonalInfo } from "@/components/student/PersonalInfo";
import { AcademicInfo } from "@/components/student/AcademicInfo";
import { AccountSettings } from "@/components/student/AccountSettings";
import { EditProfileModal } from "@/components/student/EditProfileModal";
import { profileData } from "@/lib/dummy/student/profile-data";

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profile, setProfile] = useState(profileData);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSave = (data: any) => {
    // Update profile with new data
    setProfile({
      ...profile,
      name: data.name,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      bloodGroup: data.bloodGroup,
      address: data.address,
      guardian: data.guardian,
    });
    console.log("Profile updated:", data);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
        <p className="text-sm text-slate-500">
          View and manage your personal and academic information
        </p>
      </div>

      {/* Profile Header */}
      <ProfileHeader profile={profile} onEdit={handleEdit} />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 columns */}
        <div className="space-y-6 lg:col-span-2">
          <PersonalInfo profile={profile} />
          <AcademicInfo profile={profile} />
        </div>

        {/* Right Column - 1 column */}
        <div className="lg:col-span-1">
          <AccountSettings />
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSave}
      />
    </div>
  );
}