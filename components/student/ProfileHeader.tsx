import { Camera, Mail, Phone, Calendar, MapPin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StudentProfile } from "@/lib/dummy/student/profile-data";

interface ProfileHeaderProps {
  profile: StudentProfile;
  onEdit: () => void;
}

export function ProfileHeader({ profile, onEdit }: ProfileHeaderProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        {/* Avatar Section */}
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-slate-100">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback className="bg-blue-100 text-2xl text-blue-600">
              {profile.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <Button
            variant="secondary"
            size="icon"
            className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full border-2 border-white bg-slate-100 hover:bg-slate-200"
          >
            <Camera className="h-4 w-4" />
          </Button>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">{profile.name}</h1>
            <Badge className="bg-blue-100 text-blue-700">
              {profile.class}
            </Badge>
            <Badge variant="outline" className="text-slate-500">
              Roll: {profile.rollNo}
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-slate-400" />
              {profile.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-slate-400" />
              {profile.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              Joined: {new Date(profile.joinedDate).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-slate-400" />
            {profile.address.street}, {profile.address.city}, {profile.address.state}
          </div>
        </div>

        {/* Edit Button */}
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={onEdit}>
          Edit Profile
        </Button>
      </div>
    </div>
  );
}