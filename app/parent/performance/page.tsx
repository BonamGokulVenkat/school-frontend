"use client";

import { useState } from "react";
import { PerformanceFilters } from "@/components/parent/performance/PerformanceFilters";
import { SubjectWiseGrades } from "@/components/parent/performance/SubjectWiseGrades";
import { PerformanceChart } from "@/components/parent/performance/PerformanceChart";
import { TeacherFeedback } from "@/components/parent/performance/TeacherFeedback";
import { performanceData } from "@/lib/dummy/parent/performance-data";

export default function ParentPerformancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedChild, setSelectedChild] = useState(performanceData.childName);

  const filteredSubjects = performanceData.subjects.filter((subject) => {
    const matchesSearch = subject.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || subject.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const children = [performanceData.childName]; // In real app, this would be multiple children

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Child Performance
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {performanceData.childName} • {performanceData.class} • Roll: {performanceData.rollNo}
        </p>
      </div>

      {/* Chart */}
      <PerformanceChart
        data={performanceData.trends}
        overallGrade={performanceData.overallGrade}
        overallPercentage={performanceData.overallPercentage}
      />

      {/* Filters */}
      <PerformanceFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        children={children}
        selectedChild={selectedChild}
        onChildChange={setSelectedChild}
      />

      {/* Grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SubjectWiseGrades subjects={filteredSubjects} />
        </div>
        <div className="lg:col-span-5">
          <TeacherFeedback subjects={filteredSubjects} />
        </div>
      </div>
    </div>
  );
}