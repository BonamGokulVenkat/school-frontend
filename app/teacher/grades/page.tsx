"use client";

import { useMemo, useState } from "react";

import { GradeFilters } from "@/components/teacher/GradeFilters";
import { GradeStats } from "@/components/teacher/GradeStats";
import { GradeSummaryCards } from "@/components/teacher/GradeSummaryCards";
import { GradeTable } from "@/components/teacher/GradeTable";
import {
  StudentGrade,
  calculateGrade,
  calculateGradeStatus,
  teacherGradesData,
} from "@/lib/dummy/teacher/teacher-grades-data";

export default function TeacherGradesPage() {
  const [grades, setGrades] = useState<StudentGrade[]>(
    teacherGradesData.grades,
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [classFilter, setClassFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [examTypeFilter, setExamTypeFilter] = useState("all");

  const filteredGrades = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return grades.filter((grade) => {
      const matchesSearch =
        !query ||
        grade.studentName.toLowerCase().includes(query) ||
        grade.rollNo.toLowerCase().includes(query);

      const matchesClass =
        classFilter === "all" || grade.className === classFilter;

      const matchesSubject =
        subjectFilter === "all" || grade.subject === subjectFilter;

      const matchesExamType =
        examTypeFilter === "all" || grade.examType === examTypeFilter;

      return matchesSearch && matchesClass && matchesSubject && matchesExamType;
    });
  }, [grades, searchQuery, classFilter, subjectFilter, examTypeFilter]);

  const stats = useMemo(() => {
    if (filteredGrades.length === 0) {
      return {
        totalStudents: 0,
        averageMarks: 0,
        highestMarks: 0,
        lowestMarks: 0,
        passPercentage: 0,
        atRiskStudents: 0,
      };
    }

    const percentages = filteredGrades.map((grade) =>
      Math.round((grade.marksObtained / grade.totalMarks) * 100),
    );

    const totalPercentage = percentages.reduce(
      (total, percentage) => total + percentage,
      0,
    );

    const passedStudents = percentages.filter(
      (percentage) => percentage >= 40,
    ).length;

    return {
      totalStudents: filteredGrades.length,
      averageMarks: Math.round(totalPercentage / filteredGrades.length),
      highestMarks: Math.max(...percentages),
      lowestMarks: Math.min(...percentages),
      passPercentage: Math.round(
        (passedStudents / filteredGrades.length) * 100,
      ),
      atRiskStudents: filteredGrades.filter(
        (grade) => grade.status === "at-risk",
      ).length,
    };
  }, [filteredGrades]);

  const topGrade = useMemo(() => {
    const gradeOrder = ["A+", "A", "B+", "B", "C", "D", "F"];

    for (const grade of gradeOrder) {
      if (filteredGrades.some((studentGrade) => studentGrade.grade === grade)) {
        return grade;
      }
    }

    return "-";
  }, [filteredGrades]);

  function resetFilters() {
    setSearchQuery("");
    setClassFilter("all");
    setSubjectFilter("all");
    setExamTypeFilter("all");
  }

  function handleMarksChange(id: string, value: string) {
    const marks = Number(value);

    if (Number.isNaN(marks)) {
      return;
    }

    setGrades((currentGrades) =>
      currentGrades.map((grade) => {
        if (grade.id !== id) {
          return grade;
        }

        const safeMarks = Math.min(Math.max(marks, 0), grade.totalMarks);

        return {
          ...grade,
          marksObtained: safeMarks,
          grade: calculateGrade(safeMarks, grade.totalMarks),
          status: calculateGradeStatus(safeMarks, grade.totalMarks),
          lastUpdated: new Date().toISOString().slice(0, 10),
        };
      }),
    );
  }

  function handleSaveGrades() {
    console.log("Saved grades:", grades);
  }

  function handleExport() {
    console.log("Exporting grades:", filteredGrades);
  }

  function handleGenerateReport() {
    console.log("Generating grade report:", filteredGrades);
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Teacher Portal
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Grade Management
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Enter marks, automatically calculate grades, monitor student
            performance, and generate class reports.
          </p>
        </div>

        <GradeStats stats={stats} />

        <GradeSummaryCards
          totalStudents={stats.totalStudents}
          gradedStudents={filteredGrades.length}
          averagePercentage={stats.averageMarks}
          topGrade={topGrade}
        />

        <GradeFilters
          searchQuery={searchQuery}
          classFilter={classFilter}
          subjectFilter={subjectFilter}
          examTypeFilter={examTypeFilter}
          filters={teacherGradesData.filters}
          onSearchChange={setSearchQuery}
          onClassChange={setClassFilter}
          onSubjectChange={setSubjectFilter}
          onExamTypeChange={setExamTypeFilter}
          onResetFilters={resetFilters}
        />

        <GradeTable
          grades={filteredGrades}
          onMarksChange={handleMarksChange}
          onSaveGrades={handleSaveGrades}
          onExport={handleExport}
          onGenerateReport={handleGenerateReport}
        />
      </div>
    </main>
  );
}