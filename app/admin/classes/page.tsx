"use client";

import { useState, useMemo } from "react";
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
import { ClassStats } from "@/components/admin/classes/ClassStats";
import { ClassTable } from "@/components/admin/classes/ClassTable";
import { AddClassDialog } from "@/components/admin/classes/AddClassDialog";
import { classManagementData, ClassRecord } from "@/lib/dummy/admin/class-management-data";

export default function AdminClassesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [classes, setClasses] = useState(classManagementData.classes);

  const filteredClasses = useMemo(() => {
    return classes.filter((classItem) => {
      const matchesSearch =
        classItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        classItem.roomTeacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        classItem.room.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGrade =
        gradeFilter === "all" || classItem.grade === gradeFilter;

      const matchesStatus =
        statusFilter === "all" || classItem.status === statusFilter;

      return matchesSearch && matchesGrade && matchesStatus;
    });
  }, [classes, searchQuery, gradeFilter, statusFilter]);

  const handleAddClass = (data: any) => {
    const newClass: ClassRecord = {
      id: `c${classes.length + 1}`,
      name: `Grade ${data.grade}-${data.section}`,
      section: data.section,
      grade: data.grade,
      roomTeacher: data.roomTeacher,
      studentCount: 0,
      maxCapacity: parseInt(data.maxCapacity),
      subjects: data.subjects,
      academicYear: data.academicYear,
      status: data.status,
      room: data.room,
      timetable: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setClasses([...classes, newClass]);
  };

  const handleEditClass = (updatedClass: ClassRecord) => {
    setClasses(
      classes.map((classItem) =>
        classItem.id === updatedClass.id ? updatedClass : classItem
      )
    );
  };

  const handleDeleteClass = (id: string) => {
    setClasses(classes.filter((classItem) => classItem.id !== id));
  };

  const handleArchiveClass = (id: string) => {
    setClasses(
      classes.map((classItem) =>
        classItem.id === id ? { ...classItem, status: "archived" as const } : classItem
      )
    );
  };

  // Get unique grades for filter
  const grades = Array.from(
    new Set(classManagementData.classes.map((c) => c.grade))
  ).sort((a, b) => parseInt(a) - parseInt(b));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Class Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage school classes, sections, and teacher allocations
          </p>
        </div>
        <AddClassDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onAdd={handleAddClass}
        />
      </div>

      {/* Stats */}
      <ClassStats stats={classManagementData.stats} />

      {/* Search & Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search classes..."
            className="border-slate-200 pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={gradeFilter} onValueChange={setGradeFilter}>
            <SelectTrigger className="w-[150px] border-slate-200">
              <SelectValue placeholder="Grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Grades</SelectItem>
              {grades.map((grade) => (
                <SelectItem key={grade} value={grade}>
                  Grade {grade}
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <ClassTable
            classes={filteredClasses}
            onEdit={handleEditClass}
            onDelete={handleDeleteClass}
            onArchive={handleArchiveClass}
          />
        </CardContent>
      </Card>
    </div>
  );
}