"use client";

import { Download, FileText, Save } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  StudentGrade,
  getGradeStatusColor,
} from "@/lib/dummy/teacher/teacher-grades-data";

interface GradeTableProps {
  grades: StudentGrade[];
  onMarksChange: (id: string, value: string) => void;
  onSaveGrades: () => void;
  onExport: () => void;
  onGenerateReport: () => void;
}

export function GradeTable({
  grades,
  onMarksChange,
  onSaveGrades,
  onExport,
  onGenerateReport,
}: GradeTableProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">
            Student Grades
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Enter marks, review calculated grades, and save updates.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={onExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          <Button variant="outline" onClick={onGenerateReport}>
            <FileText className="mr-2 h-4 w-4" />
            Report
          </Button>

          <Button onClick={onSaveGrades}>
            <Save className="mr-2 h-4 w-4" />
            Save Grades
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="min-w-[100px]">Roll No</TableHead>
              <TableHead className="min-w-[180px]">Student Name</TableHead>
              <TableHead className="min-w-[150px]">Class</TableHead>
              <TableHead className="min-w-[160px]">Subject</TableHead>
              <TableHead className="min-w-[150px]">Exam</TableHead>
              <TableHead className="min-w-[150px]">Marks</TableHead>
              <TableHead className="min-w-[100px]">Grade</TableHead>
              <TableHead className="min-w-[120px]">Status</TableHead>
              <TableHead className="min-w-[130px]">Updated</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {grades.map((grade) => (
              <TableRow key={grade.id}>
                <TableCell className="font-medium text-slate-700">
                  {grade.rollNo}
                </TableCell>

                <TableCell>
                  <div>
                    <p className="font-medium text-slate-950">
                      {grade.studentName}
                    </p>
                    <p className="text-xs text-slate-500">{grade.id}</p>
                  </div>
                </TableCell>

                <TableCell className="text-slate-600">
                  {grade.className}
                </TableCell>

                <TableCell className="text-slate-600">
                  {grade.subject}
                </TableCell>

                <TableCell className="text-slate-600">
                  {grade.examType}
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={0}
                      max={grade.totalMarks}
                      value={grade.marksObtained}
                      onChange={(event) =>
                        onMarksChange(grade.id, event.target.value)
                      }
                      className="h-9 w-20"
                    />
                    <span className="text-sm text-slate-500">
                      / {grade.totalMarks}
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="font-semibold text-slate-950">
                    {grade.grade}
                  </span>
                </TableCell>

                <TableCell>
                  <Badge className={getGradeStatusColor(grade.status)}>
                    {formatStatus(grade.status)}
                  </Badge>
                </TableCell>

                <TableCell className="text-slate-500">
                  {formatDate(grade.lastUpdated)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {grades.length === 0 && (
        <div className="py-14 text-center">
          <p className="text-lg font-medium text-slate-600">
            No grade records found
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Try changing your filters or search query.
          </p>
        </div>
      )}
    </div>
  );
}

function formatStatus(status: string) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}