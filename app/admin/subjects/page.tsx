"use client";

import { useState, useMemo } from "react";
import { Search, Filter, BookOpen } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubjectStats } from "@/components/admin/subjects/SubjectStats";
import { SubjectTable } from "@/components/admin/subjects/SubjectTable";
import { AddSubjectDialog } from "@/components/admin/subjects/AddSubjectDialog";
import { subjectManagementData, SubjectRecord } from "@/lib/dummy/admin/subject-management-data";

export default function AdminSubjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [subjects, setSubjects] = useState(subjectManagementData.subjects);

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const matchesSearch =
        subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || subject.category === categoryFilter;

      const matchesStatus =
        statusFilter === "all" || subject.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [subjects, searchQuery, categoryFilter, statusFilter]);

  const handleAddSubject = (data: any) => {
    const newSubject: SubjectRecord = {
      id: `sub${subjects.length + 1}`,
      code: data.code,
      name: data.name,
      category: data.category as any,
      grades: data.grades,
      teachers: data.teachers,
      description: data.description,
      credits: parseInt(data.credits),
      periodsPerWeek: parseInt(data.periodsPerWeek),
      status: data.status as any,
      textbooks: data.textbooks,
      syllabus: data.syllabus,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSubjects([...subjects, newSubject]);
  };

  const handleEditSubject = (updatedSubject: SubjectRecord) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === updatedSubject.id ? updatedSubject : subject
      )
    );
  };

  const handleDeleteSubject = (id: string) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  const handleArchiveSubject = (id: string) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, status: "archived" as const } : subject
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Subject Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage curriculum subjects, grades, and teacher assignments
          </p>
        </div>
        <AddSubjectDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onAdd={handleAddSubject}
        />
      </div>

      {/* Stats */}
      <SubjectStats stats={subjectManagementData.stats} />

      {/* Search & Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search subjects..."
            className="border-slate-200 pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[150px] border-slate-200">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="core">Core</SelectItem>
              <SelectItem value="elective">Elective</SelectItem>
              <SelectItem value="vocational">Vocational</SelectItem>
              <SelectItem value="co-curricular">Co-Curricular</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px] border-slate-200">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <SubjectTable
            subjects={filteredSubjects}
            onEdit={handleEditSubject}
            onDelete={handleDeleteSubject}
            onArchive={handleArchiveSubject}
          />
        </CardContent>
      </Card>
    </div>
  );
}