import Link from "next/link";
import {
  Users,
  User,
  TrendingUp,
  Award,
  BookOpen,
  Shield,
  Laptop,
  Calendar,
  MapPin,
  Megaphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { PageHeading } from "@/components/school/PageHeading";
import { SectionTitle } from "@/components/school/SectionTitle";
import { StatsGrid } from "@/components/school/StatsGrid";
import { FeatureCard } from "@/components/school/FeatureCard";
import { homeData } from "@/lib/dummy/school/home-data";

const IconMap: Record<string, React.ElementType> = {
  Users,
  User,
  TrendingUp,
  Award,
  BookOpen,
  Shield,
  Laptop,
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <SchoolHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-white py-20 lg:py-24">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-blue-200 bg-blue-50/50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              ✨ Admission Season 2026 - 2027
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              {homeData.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              {homeData.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 px-8 hover:bg-blue-700" asChild>
                <Link href="/admissions">{homeData.hero.ctaPrimary}</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link href="/about">{homeData.hero.ctaSecondary}</Link>
              </Button>
            </div>

            <div className="mt-20">
              <StatsGrid
                stats={homeData.hero.stats.map((stat) => {
                  const IconComponent = IconMap[stat.icon] || Users;
                  return {
                    ...stat,
                    icon: <IconComponent className="h-5 w-5" />,
                  };
                })}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionTitle
              icon="🎯"
              title="Why EduNexus School?"
              subtitle="Providing a well-rounded foundation built on cutting edge methodology and safety."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {homeData.features.map((feature) => {
                const IconComponent = IconMap[feature.icon] || BookOpen;
                return (
                  <FeatureCard
                    key={feature.id}
                    icon={<IconComponent className="h-6 w-6" />}
                    title={feature.title}
                    description={feature.description}
                    color={feature.color}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Announcements & Events Section */}
        <section className="border-y bg-slate-100/70 py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid gap-8 md:grid-cols-12">
              {/* Announcements */}
              <div className="flex flex-col gap-4 md:col-span-5">
                <div className="mb-2 flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">School Announcements</h3>
                </div>

                {homeData.announcements.map((ann) => (
                  <Card key={ann.id} className="border-slate-200 shadow-sm">
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 gap-2 p-4 pb-2">
                      <CardTitle className="text-base font-semibold leading-snug">
                        {ann.title}
                      </CardTitle>
                      <Badge
                        variant={ann.variant}
                        className="shrink-0 py-0.5 px-1.5 text-[10px] capitalize"
                      >
                        {ann.type}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="mb-2 text-xs text-slate-600">{ann.description}</p>
                      <span className="text-[11px] font-medium text-slate-400">{ann.date}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Events */}
              <div className="flex flex-col gap-4 md:col-span-7">
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">Upcoming Events</h3>
                </div>

                <div className="flex-1 grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                  {homeData.events.map((event) => (
                    <Card key={event.id} className="flex flex-col justify-between border-slate-200 shadow-sm">
                      <CardHeader className="p-5 pb-3">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline" className="border-blue-200 bg-blue-50/50 text-blue-600">
                            {event.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                            <Calendar className="h-3 w-3" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg font-bold text-slate-900">{event.title}</CardTitle>
                      </CardHeader>
                      <CardFooter className="mt-2 flex items-center justify-between gap-4 border-t border-slate-50 p-5 pt-0">
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          <span>{event.location}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-xs font-semibold text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                          asChild
                        >
                          <Link href="/events">View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SchoolFooter />
    </div>
  );
}