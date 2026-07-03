"use client";

import { useState } from "react";
import { Search } from "lucide-react";

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
import { TeacherStats } from "@/components/admin/teachers/TeacherStats";
import { TeacherTable } from "@/components/admin/teachers/TeacherTable";
import { AddTeacherDialog } from "@/components/admin/teachers/AddTeacherDialog";
import { teacherManagementData } from "@/lib/dummy/admin/teacher-management-data";

export default function AdminTeachersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredTeachers = teacherManagementData.teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subjects.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" || teacher.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      

      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Teacher Management
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Manage teaching staff, assignments, and availability
              </p>
            </div>
            <AddTeacherDialog
              open={isAddDialogOpen}
              onOpenChange={setIsAddDialogOpen}
            />
          </div>

          {/* Stats */}
          <TeacherStats stats={teacherManagementData.stats} />

          {/* Search & Filter */}
          <div className="my-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search teachers..."
                className="border-slate-200 pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px] border-slate-200">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-0">
              <TeacherTable teachers={filteredTeachers} />
            </CardContent>
          </Card>
        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}