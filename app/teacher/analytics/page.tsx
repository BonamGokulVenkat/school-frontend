"use client";

import { useState } from "react";
import { teacherAnalyticsData, AtRiskStudent } from "@/lib/dummy/teacher/teacher-analytics-data";
import { AnalyticsOverviewCards } from "@/components/teacher/AnalyticsOverviewCards";
import { GradeDistributionBarChart } from "@/components/teacher/GradeDistributionBarChart";
import { AtRiskStudentsTable } from "@/components/teacher/AtRiskStudentsTable";

export default function TeacherAnalyticsPage() {
  const [students, setStudents] = useState<AtRiskStudent[]>(teacherAnalyticsData.atRisk);

  function handleToggleRemedial(id: string) {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, remedialAssigned: !s.remedialAssigned } : s))
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <p className="text-sm font-medium text-slate-500">Teacher Portal</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Class Performance Analytics
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Real-time diagnostics tracking academic variance, section performance indicators, and programmatic risk triggers.
          </p>
        </div>

        <AnalyticsOverviewCards summary={teacherAnalyticsData.summary} />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <GradeDistributionBarChart data={teacherAnalyticsData.distribution} />
          </div>
          <div className="lg:col-span-2">
            <AtRiskStudentsTable students={students} onToggleRemedial={handleToggleRemedial} />
          </div>
        </div>
      </div>
    </main>
  );
}