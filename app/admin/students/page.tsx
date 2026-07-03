"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { SchoolHeader } from "@/components/school/SchoolHeader";
import { SchoolFooter } from "@/components/school/SchoolFooter";
import { StudentStats } from "@/components/admin/students/StudentStats";
import { StudentTable } from "@/components/admin/students/StudentTable";
import { AddStudentDialog } from "@/components/admin/students/AddStudentDialog";
import { studentManagementData } from "@/lib/dummy/admin/student-management-data";

export default function AdminStudentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredStudents = studentManagementData.students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.guardian.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesClass =
      classFilter === "all" || student.class === classFilter;

    const matchesStatus =
      statusFilter === "all" || student.status === statusFilter;

    return matchesSearch && matchesClass && matchesStatus;
  });

  // Get unique classes for filter
  const classes = Array.from(
    new Set(studentManagementData.students.map((s) => s.class))
  ).sort();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">

      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Student Management
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Manage student records, enrollment, and academic progress
              </p>
            </div>
            <AddStudentDialog
              open={isAddDialogOpen}
              onOpenChange={setIsAddDialogOpen}
            />
          </div>

          {/* Stats */}
          <StudentStats stats={studentManagementData.stats} />

          {/* Search & Filters */}
          <div className="my-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search students..."
                className="border-slate-200 pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={classFilter} onValueChange={setClassFilter}>
                <SelectTrigger className="w-[150px] border-slate-200">
                  <SelectValue placeholder="Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>
                      {cls}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px] border-slate-200">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="graduated">Graduated</SelectItem>
                  <SelectItem value="transferred">Transferred</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-0">
              <StudentTable students={filteredStudents} />
            </CardContent>
          </Card>
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}