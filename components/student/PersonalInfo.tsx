import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Calendar, Users, Heart, MapPin, Briefcase } from "lucide-react";
import { StudentProfile } from "@/lib/dummy/student/profile-data";

interface PersonalInfoProps {
  profile: StudentProfile;
}

export function PersonalInfo({ profile }: PersonalInfoProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <User className="h-5 w-5 text-blue-600" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium text-slate-500">Full Name</p>
            <p className="text-sm font-medium text-slate-900">{profile.name}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Date of Birth</p>
            <p className="text-sm font-medium text-slate-900">
              {new Date(profile.dateOfBirth).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Age</p>
            <p className="text-sm font-medium text-slate-900">{profile.age} years</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Gender</p>
            <p className="text-sm font-medium text-slate-900">{profile.gender}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Blood Group</p>
            <p className="text-sm font-medium text-slate-900">{profile.bloodGroup}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Class</p>
            <p className="text-sm font-medium text-slate-900">{profile.class}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs font-medium text-slate-500">Address</p>
            <p className="text-sm font-medium text-slate-900">
              {profile.address.street}, {profile.address.city}, {profile.address.state} - {profile.address.pincode}
            </p>
          </div>
        </div>

        {/* Guardian Information */}
        <div className="mt-4 border-t border-slate-100 pt-4">
          <h4 className="mb-3 text-sm font-semibold text-slate-900 flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-600" />
            Guardian Information
          </h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium text-slate-500">Name</p>
              <p className="text-sm font-medium text-slate-900">{profile.guardian.name}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Relationship</p>
              <p className="text-sm font-medium text-slate-900">{profile.guardian.relationship}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Phone</p>
              <p className="text-sm font-medium text-slate-900">{profile.guardian.phone}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Email</p>
              <p className="text-sm font-medium text-slate-900">{profile.guardian.email}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-medium text-slate-500">Occupation</p>
              <p className="text-sm font-medium text-slate-900">{profile.guardian.occupation}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}