import { Mail, Phone, ShieldCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface TeacherPersonalInfo {
  name: string;
  id: string;
  email: string;
  phone: string;
}

interface ProfileHeaderCardProps {
  personal: TeacherPersonalInfo;
}

export function ProfileHeaderCard({ personal }: ProfileHeaderCardProps) {
  return (
    <Card className="overflow-hidden border-slate-200 bg-white">
      <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-700" />

      <CardContent className="relative px-6 pb-6 pt-12">
        <div className="absolute -top-10 left-6 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-slate-200 text-2xl font-bold text-slate-700 shadow-sm">
          SS
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-950">{personal.name}</h2>
              <ShieldCheck className="h-5 w-5 text-blue-600" />
            </div>

            <p className="text-sm font-medium text-slate-500">
              Senior Faculty • ID: {personal.id}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-600 sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-slate-400" />
              <span>{personal.email}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-slate-400" />
              <span>{personal.phone}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}