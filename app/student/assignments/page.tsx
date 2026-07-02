"use client";

import { useState, useMemo } from "react";

import { AssignmentStats } from "@/components/student/AssignmentStats";
import { AssignmentFilters } from "@/components/student/AssignmentFilters";
import { AssignmentCard } from "@/components/student/AssignmentCard";
import { SubmissionModal } from "@/components/student/SubmissionModal";
import { assignmentsData, Assignment } from "@/lib/dummy/student/assignments-data";

export default function AssignmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { stats, assignments, filters } = assignmentsData;

  // Count active filters
  const activeFilters = [
    statusFilter !== "all",
    subjectFilter !== "all",
    priorityFilter !== "all",
  ].filter(Boolean).length;

  // Filter assignments
  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.subject.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === "all" || assignment.status === statusFilter;
      const matchesSubject = subjectFilter === "all" || 
        assignment.subject.toLowerCase() === subjectFilter;
      const matchesPriority = priorityFilter === "all" || 
        assignment.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesSubject && matchesPriority;
    });
  }, [assignments, searchQuery, statusFilter, subjectFilter, priorityFilter]);

  // Sort assignments: overdue > pending > submitted > graded
  const sortedAssignments = useMemo(() => {
    const order = { overdue: 0, pending: 1, submitted: 2, graded: 3 };
    return [...filteredAssignments].sort((a, b) => {
      return (order[a.status as keyof typeof order] || 4) - 
             (order[b.status as keyof typeof order] || 4);
    });
  }, [filteredAssignments]);

  const handleSubmitAssignment = (id: string) => {
    const assignment = assignments.find((a) => a.id === id);
    if (assignment) {
      setSelectedAssignment(assignment);
      setIsModalOpen(true);
    }
  };

  const handleModalSubmit = (data: { notes: string; file?: File }) => {
    console.log("Submitting assignment:", {
      assignmentId: selectedAssignment?.id,
      ...data,
    });
    // In a real app, this would call an API
  };

  const handleViewDetails = (id: string) => {
    console.log("View details for:", id);
    // Navigate to assignment details page
  };

  const clearFilters = () => {
    setStatusFilter("all");
    setSubjectFilter("all");
    setPriorityFilter("all");
    setSearchQuery("");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Assignments</h1>
        <p className="text-sm text-slate-500">
          Manage and track all your homework and assignments
        </p>
      </div>

      {/* Stats */}
      <AssignmentStats stats={stats} />

      {/* Filters */}
      <AssignmentFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        subjectFilter={subjectFilter}
        onSubjectChange={setSubjectFilter}
        priorityFilter={priorityFilter}
        onPriorityChange={setPriorityFilter}
        statuses={filters.statuses}
        subjects={filters.subjects}
        priorities={filters.priorities}
        activeFilters={activeFilters}
        onClearFilters={clearFilters}
      />

      {/* Assignments List */}
      {sortedAssignments.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="text-lg font-medium text-slate-500">No assignments found</p>
          <p className="text-sm text-slate-400">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              onViewDetails={handleViewDetails}
              onSubmit={handleSubmitAssignment}
            />
          ))}
        </div>
      )}

      {/* Submission Modal */}
      <SubmissionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedAssignment(null);
        }}
        onSubmit={handleModalSubmit}
        assignment={selectedAssignment}
      />
    </div>
  );
}