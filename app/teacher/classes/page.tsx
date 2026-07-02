"use client";

import { useState, useMemo } from "react";

import { ClassStats } from "@/components/teacher/ClassStats";
import { ClassFilters } from "@/components/teacher/ClassFilters";
import { ClassCard } from "@/components/teacher/ClassCard";
import { ClassDetailsModal } from "@/components/teacher/ClassDetailsModal";
import { classesData } from "@/lib/dummy/teacher/classes-data";

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [sectionFilter, setSectionFilter] = useState("all");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { stats, classes, filters } = classesData;

  // Count active filters
  const activeFilters = [
    statusFilter !== "all",
    subjectFilter !== "all",
    sectionFilter !== "all",
  ].filter(Boolean).length;

  // Filter classes
  const filteredClasses = useMemo(() => {
    return classes.filter((cls) => {
      const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.teacher.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === "all" || cls.status === statusFilter;
      const matchesSubject = subjectFilter === "all" || 
        cls.subject.toLowerCase() === subjectFilter;
      const matchesSection = sectionFilter === "all" || 
        cls.section.toLowerCase() === sectionFilter;

      return matchesSearch && matchesStatus && matchesSubject && matchesSection;
    });
  }, [classes, searchQuery, statusFilter, subjectFilter, sectionFilter]);

  const handleViewDetails = (id: string) => {
    setSelectedClass(id);
    setIsModalOpen(true);
  };

  const handleManage = (id: string) => {
    console.log("Managing class:", id);
    // Navigate to class management page
  };

  const clearFilters = () => {
    setStatusFilter("all");
    setSubjectFilter("all");
    setSectionFilter("all");
    setSearchQuery("");
  };

  const selectedClassData = classes.find((c) => c.id === selectedClass);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Class Management</h1>
        <p className="text-sm text-slate-500">
          View and manage all your classes and their details
        </p>
      </div>

      {/* Stats */}
      <ClassStats stats={stats} />

      {/* Filters */}
      <ClassFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        subjectFilter={subjectFilter}
        onSubjectChange={setSubjectFilter}
        sectionFilter={sectionFilter}
        onSectionChange={setSectionFilter}
        statuses={filters.statuses}
        subjects={filters.subjects}
        sections={filters.sections}
        activeFilters={activeFilters}
        onClearFilters={clearFilters}
      />

      {/* Classes Grid */}
      {filteredClasses.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="text-lg font-medium text-slate-500">No classes found</p>
          <p className="text-sm text-slate-400">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.map((cls) => (
            <ClassCard
              key={cls.id}
              classData={cls}
              onViewDetails={handleViewDetails}
              onManage={handleManage}
            />
          ))}
        </div>
      )}

      {/* Class Details Modal */}
      <ClassDetailsModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedClass(null);
        }}
        classData={selectedClassData || null}
        onManage={handleManage}
      />
    </div>
  );
}