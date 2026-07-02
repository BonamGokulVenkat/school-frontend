import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teacherProfileData } from "@/lib/dummy/teacher/teacher-profile-data";

interface ProfessionalInfoCardProps {
  personal: typeof teacherProfileData.personal;
}

export function ProfessionalInfoCard({ personal }: ProfessionalInfoCardProps) {
  return (
    <Card className="border-slate-200 bg-white">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-slate-950">Professional Registry Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Academic Credentials</p>
            <p className="mt-1 font-medium text-slate-800">{personal.qualification}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Tenure Record</p>
            <p className="mt-1 font-medium text-slate-800">{personal.experience}</p>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Subject Matter Focus areas</p>
          <div className="flex flex-wrap gap-1.5">
            {personal.specialization.map((spec, i) => (
              <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 border-none">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}