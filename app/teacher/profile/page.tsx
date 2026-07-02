"use client";

import { teacherProfileData } from "@/lib/dummy/teacher/teacher-profile-data";
import { ProfileHeaderCard } from "@/components/teacher/ProfileHeaderCard";
import { ProfessionalInfoCard } from "@/components/teacher/ProfessionalInfoCard";
import { AssignedClassesCard } from "@/components/teacher/AssignedClassesCard";
import { Button } from "@/components/ui/button";

export default function TeacherProfilePage() {
  function handleResetPassword() {
    alert("System-wide credential modification link sent to verified corporate mail endpoint.");
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Staff Identity Profile</h1>
          <p className="mt-1 text-sm text-slate-500">Verified core institution administrative and structural schedule ledger metrics.</p>
        </div>

        <ProfileHeaderCard personal={teacherProfileData.personal} />

        <div className="grid gap-6 md:grid-cols-2">
          <ProfessionalInfoCard personal={teacherProfileData.personal} />
          <AssignedClassesCard assignments={teacherProfileData.assignments} />
        </div>

        <div className="flex justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4">
          <Button variant="outline" onClick={handleResetPassword}>
            Update Password Link
          </Button>
          <Button onClick={() => alert("Local profile metadata sync executed successfully.")}>
            Save Changes
          </Button>
        </div>
      </div>
    </main>
  );
}