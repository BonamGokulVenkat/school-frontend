"use client";

import { useState, useMemo } from "react";
import { TimetableStats } from "@/components/admin/timetable/TimetableStats";
import { TimetableFilters } from "@/components/admin/timetable/TimetableFilters";
import { TimetableGrid } from "@/components/admin/timetable/Timetablegrid";
import { GenerateTimetableDialog } from "@/components/admin/timetable/GenerateTimetableDialog";
import { timetableData, TimetableRecord } from "@/lib/dummy/admin/timetable-data";

export default function AdminTimetablePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [timetables, setTimetables] = useState(timetableData.timetables);

  // Get unique classes for filter
  const classes = Array.from(
    new Set(timetableData.timetables.map((t) => t.className))
  ).sort();

  const filteredTimetables = useMemo(() => {
    return timetables.filter((timetable) => {
      const matchesSearch =
        timetable.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
        timetable.academicYear.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || timetable.status === statusFilter;

      const matchesClass =
        classFilter === "all" || timetable.className === classFilter;

      return matchesSearch && matchesStatus && matchesClass;
    });
  }, [timetables, searchQuery, statusFilter, classFilter]);

  const handleGenerate = (data: any) => {
    // Create a new timetable
    const newTimetable: TimetableRecord = {
      id: `tt${timetables.length + 1}`,
      classId: data.classId,
      className: `Grade ${data.classId.replace("c", "")}`,
      academicYear: data.academicYear,
      status: "draft",
      schedule: [
        {
          day: "Monday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "9:45 AM - 10:30 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "10:30 AM - 11:15 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "11:15 AM - 12:00 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
          ],
        },
        {
          day: "Tuesday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "9:45 AM - 10:30 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "10:30 AM - 11:15 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "11:15 AM - 12:00 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
          ],
        },
        {
          day: "Wednesday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "9:45 AM - 10:30 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "10:30 AM - 11:15 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "11:15 AM - 12:00 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
          ],
        },
        {
          day: "Thursday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "9:45 AM - 10:30 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "10:30 AM - 11:15 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "11:15 AM - 12:00 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
          ],
        },
        {
          day: "Friday",
          periods: [
            { time: "9:00 AM - 9:45 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "9:45 AM - 10:30 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "10:30 AM - 11:15 AM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "11:15 AM - 12:00 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
            { time: "12:00 PM - 1:00 PM", subject: "Lunch Break", teacher: "-", room: "-" },
            { time: "1:00 PM - 1:45 PM", subject: "TBD", teacher: "TBD", room: "TBD" },
          ],
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTimetables([...timetables, newTimetable]);
  };

  const handleEdit = (timetable: TimetableRecord) => {
    // Implementation for editing timetable
    console.log("Edit timetable:", timetable);
  };

  const handleDelete = (id: string) => {
    setTimetables(timetables.filter((t) => t.id !== id));
  };

  const handleArchive = (id: string) => {
    setTimetables(
      timetables.map((t) =>
        t.id === id ? { ...t, status: "archived" as const } : t
      )
    );
  };

  const handleView = (timetable: TimetableRecord) => {
    console.log("View timetable:", timetable);
  };

  const handlePrint = (timetable: TimetableRecord) => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Timetable Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Generate and manage school timetables with conflict checking
          </p>
        </div>
        <GenerateTimetableDialog
          open={isGenerateDialogOpen}
          onOpenChange={setIsGenerateDialogOpen}
          onGenerate={handleGenerate}
        />
      </div>

      {/* Stats */}
      <TimetableStats stats={timetableData.stats} />

      {/* Filters */}
      <TimetableFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        classFilter={classFilter}
        onClassChange={setClassFilter}
        classes={classes}
        onGenerate={() => setIsGenerateDialogOpen(true)}
      />

      {/* Grid */}
      <TimetableGrid
        timetables={filteredTimetables}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onArchive={handleArchive}
        onView={handleView}
        onPrint={handlePrint}
      />
    </div>
  );
}