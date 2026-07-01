import {
  Target,
  Eye,
  Rocket,
  Building,
  Laptop,
  Globe,
  TrendingUp,
  Mail,
  Phone,
  Award,
} from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { PageHeading } from "@/components/school/PageHeading";
import { SectionTitle } from "@/components/school/SectionTitle";
import { aboutData } from "@/lib/dummy/school/about-data";

const IconMap: Record<string, React.ElementType> = {
  Rocket,
  Building,
  Laptop,
  Globe,
  TrendingUp,
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <SchoolHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <PageHeading
            title="About EduNexus School"
            description="Empowering global citizens through rigorous academic frameworks and robust character growth."
          />

          {/* Mission & Vision */}
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{aboutData.mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">
                  {aboutData.mission.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{aboutData.vision.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">
                  {aboutData.vision.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <section className="mb-16">
            <SectionTitle icon="📜" title="Our Journey & Milestones" />
            <div className="relative ml-4 space-y-8 border-l border-slate-200 pl-6">
              {aboutData.history.map((milestone) => {
                const TimelineIcon = IconMap[milestone.icon] || Rocket;
                return (
                  <div key={milestone.year} className="relative">
                    <span className="absolute -left-[35px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 shadow-sm">
                      <TimelineIcon className="h-3.5 w-3.5" />
                    </span>
                    <div className="max-w-3xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                      <span className="mb-1 inline-block text-xs font-bold uppercase tracking-wider text-blue-600">
                        Year {milestone.year}
                      </span>
                      <p className="text-sm font-medium leading-relaxed text-slate-700">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <Separator className="my-12 bg-slate-200" />

          {/* Leadership */}
          <section className="mb-16">
            <SectionTitle
              icon="👥"
              title="Meet Our Academic Leadership"
              subtitle="Guiding our academic directives and managing absolute excellence across sections."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {aboutData.leadership.map((member) => (
                <Card key={member.id} className="flex flex-col justify-between border-slate-200 shadow-sm">
                  <CardHeader className="pb-4 text-center">
                    <Avatar className="mx-auto mb-4 h-24 w-24 border-2 border-slate-100">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback className="bg-slate-100 font-bold text-slate-700">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg font-bold text-slate-900">{member.name}</CardTitle>
                    <Badge
                      variant="secondary"
                      className="mt-1.5 border border-blue-100 bg-blue-50 text-xs font-semibold text-blue-700"
                    >
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="px-5 pt-0 text-center">
                    <p className="text-xs leading-relaxed text-slate-600">{member.bio}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 rounded-b-lg border-t border-slate-50 bg-slate-50/50 p-4 pt-3 text-xs font-medium text-slate-600">
                    <div className="flex w-full items-center justify-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-slate-400" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex w-full items-center justify-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-slate-400" />
                      <span>{member.phone}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Accreditations */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">Official Accreditations & Validations</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {aboutData.accreditations.map((acc) => (
                <div
                  key={acc.id}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="shrink-0 rounded-full bg-blue-100/50 p-2 text-blue-600">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{acc.name}</h4>
                    <p className="mt-0.5 text-xs text-slate-500">{acc.institution}</p>
                    <span className="mt-2 inline-block text-[10px] font-semibold text-slate-400">
                      Certified since {acc.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}