"use client";

import { Plus } from "lucide-react";
import { useMemo, useState } from "react";

import { AssignmentCard } from "@/components/teacher/AssignmentCard";
import { AssignmentFilters } from "@/components/teacher/AssignmentFilters";
import { AssignmentStats } from "@/components/teacher/AssignmentStats";
import {
  AssignmentFormValues,
  CreateAssignmentModal,
} from "@/components/teacher/CreateAssignmentModal";
import { SubmissionDetailsModal } from "@/components/teacher/SubmissionDetailsModal";
import { SubmissionsList } from "@/components/teacher/SubmissionsList";
import { Button } from "@/components/ui/button";
import {
  Submission,
  TeacherAssignment,
  teacherAssignmentsData,
} from "@/lib/dummy/teacher/teacher-assignments-data";

export default function TeacherAssignmentsPage() {
  const [assignments, setAssignments] = useState<TeacherAssignment[]>(
    teacherAssignmentsData.assignments,
  );
  const [submissions, setSubmissions] = useState<Submission[]>(teacherAssignmentsData.submissions);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingAssignmentId, setEditingAssignmentId] = useState<string | null>(null);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string | null>(null);
  const [submissionMode, setSubmissionMode] = useState<"view" | "grade">("view");

  const editingAssignment = assignments.find((assignment) => assignment.id === editingAssignmentId);

  const selectedAssignment = assignments.find(
    (assignment) => assignment.id === selectedAssignmentId,
  );

  const selectedSubmission =
    submissions.find((submission) => submission.id === selectedSubmissionId) ?? null;

  const filteredAssignments = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return assignments.filter((assignment) => {
      const matchesSearch =
        !query ||
        assignment.title.toLowerCase().includes(query) ||
        assignment.description.toLowerCase().includes(query) ||
        assignment.subject.toLowerCase().includes(query) ||
        assignment.className.toLowerCase().includes(query);

      const matchesStatus = statusFilter === "all" || assignment.status === statusFilter;
      const matchesSubject = subjectFilter === "all" || assignment.subject === subjectFilter;
      const matchesPriority = priorityFilter === "all" || assignment.priority === priorityFilter;
      const matchesClass = classFilter === "all" || assignment.className === classFilter;

      return matchesSearch && matchesStatus && matchesSubject && matchesPriority && matchesClass;
    });
  }, [assignments, classFilter, priorityFilter, searchQuery, statusFilter, subjectFilter]);

  const selectedAssignmentSubmissions = useMemo(() => {
    if (!selectedAssignmentId) {
      return [];
    }

    return submissions.filter((submission) => submission.assignmentId === selectedAssignmentId);
  }, [selectedAssignmentId, submissions]);

  const stats = useMemo(() => {
    return {
      total: assignments.length,
      published: assignments.filter((assignment) => assignment.status === "published").length,
      draft: assignments.filter((assignment) => assignment.status === "draft").length,
      closed: assignments.filter((assignment) => assignment.status === "closed").length,
      submissions: submissions.filter((submission) => submission.status !== "missing").length,
      graded: submissions.filter((submission) => submission.status === "graded").length,
    };
  }, [assignments, submissions]);

  const editingInitialData: AssignmentFormValues | undefined = editingAssignment
    ? {
        title: editingAssignment.title,
        description: editingAssignment.description,
        subject: editingAssignment.subject,
        className: editingAssignment.className,
        section: editingAssignment.section,
        dueDate: editingAssignment.dueDate,
        dueTime: editingAssignment.dueTime,
        totalMarks: String(editingAssignment.totalMarks),
        priority: editingAssignment.priority,
        status: editingAssignment.status,
      }
    : undefined;

  function resetFilters() {
    setSearchQuery("");
    setStatusFilter("all");
    setSubjectFilter("all");
    setPriorityFilter("all");
    setClassFilter("all");
  }

  function handleCreateAssignment(values: AssignmentFormValues) {
    const newAssignment: TeacherAssignment = {
      id: `ass-${Date.now()}`,
      title: values.title,
      description: values.description,
      subject: values.subject,
      className: values.className,
      section: values.section,
      dueDate: values.dueDate,
      dueTime: values.dueTime,
      totalMarks: Number(values.totalMarks),
      status: values.status as TeacherAssignment["status"],
      priority: values.priority as TeacherAssignment["priority"],
      createdDate: new Date().toISOString().slice(0, 10),
      submissions: {
        total: 0,
        submitted: 0,
        graded: 0,
      },
    };

    setAssignments((current) => [newAssignment, ...current]);
    setIsCreateModalOpen(false);
  }

  function handleUpdateAssignment(values: AssignmentFormValues) {
    if (!editingAssignmentId) {
      return;
    }

    setAssignments((current) =>
      current.map((assignment) => {
        if (assignment.id !== editingAssignmentId) {
          return assignment;
        }

        return {
          ...assignment,
          title: values.title,
          description: values.description,
          subject: values.subject,
          className: values.className,
          section: values.section,
          dueDate: values.dueDate,
          dueTime: values.dueTime,
          totalMarks: Number(values.totalMarks),
          status: values.status as TeacherAssignment["status"],
          priority: values.priority as TeacherAssignment["priority"],
        };
      }),
    );

    setEditingAssignmentId(null);
  }

  function handleDeleteAssignment(id: string) {
    setAssignments((current) => current.filter((assignment) => assignment.id !== id));
    setSubmissions((current) => current.filter((submission) => submission.assignmentId !== id));

    if (selectedAssignmentId === id) {
      setSelectedAssignmentId(null);
    }
  }

  function handleGradeSubmission(id: string, marks: number, feedback: string) {
    setSubmissions((current) =>
      current.map((submission) => {
        if (submission.id !== id) {
          return submission;
        }

        return {
          ...submission,
          marks,
          feedback,
          status: "graded",
        };
      }),
    );

    setSelectedSubmissionId(null);
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Teacher Portal</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Assignment Management
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Create assignments, track submissions, grade student work, and manage classroom tasks
              from one clean dashboard.
            </p>
          </div>

          <Button type="button" onClick={() => setIsCreateModalOpen(true)} className="sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Create Assignment
          </Button>
        </div>

        <AssignmentStats stats={stats} />

        {selectedAssignment ? (
          <SubmissionsList
            assignmentTitle={selectedAssignment.title}
            submissions={selectedAssignmentSubmissions}
            onBack={() => setSelectedAssignmentId(null)}
            onViewSubmission={(id) => {
              setSelectedSubmissionId(id);
              setSubmissionMode("view");
            }}
            onGrade={(id) => {
              setSelectedSubmissionId(id);
              setSubmissionMode("grade");
            }}
          />
        ) : (
          <>
            <AssignmentFilters
              searchQuery={searchQuery}
              statusFilter={statusFilter}
              subjectFilter={subjectFilter}
              priorityFilter={priorityFilter}
              classFilter={classFilter}
              filters={teacherAssignmentsData.filters}
              onSearchChange={setSearchQuery}
              onStatusChange={setStatusFilter}
              onSubjectChange={setSubjectFilter}
              onPriorityChange={setPriorityFilter}
              onClassChange={setClassFilter}
              onResetFilters={resetFilters}
            />

            {filteredAssignments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
                <p className="text-lg font-medium text-slate-600">No assignments found</p>
                <p className="mt-1 text-sm text-slate-500">
                  Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {filteredAssignments.map((assignment) => (
                  <AssignmentCard
                    key={assignment.id}
                    assignment={assignment}
                    onEdit={setEditingAssignmentId}
                    onDelete={handleDeleteAssignment}
                    onViewSubmissions={setSelectedAssignmentId}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <CreateAssignmentModal
          open={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={handleCreateAssignment}
        />

        <CreateAssignmentModal
          open={Boolean(editingAssignmentId)}
          isEditing
          initialData={editingInitialData}
          onClose={() => setEditingAssignmentId(null)}
          onSubmit={handleUpdateAssignment}
        />

        <SubmissionDetailsModal
          open={Boolean(selectedSubmissionId)}
          submission={selectedSubmission}
          mode={submissionMode}
          onClose={() => setSelectedSubmissionId(null)}
          onGrade={handleGradeSubmission}
        />
      </div>
    </main>
  );
}